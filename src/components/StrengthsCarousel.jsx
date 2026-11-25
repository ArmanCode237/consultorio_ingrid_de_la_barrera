import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

/**
 * Carrusel de nueve tarjetas para «¿En qué podemos ayudarte?».
 * Cuatro tarjetas visibles en escritorio, dos en tablet y una en móvil.
 * Usa scroll-snap nativo, por lo que admite swipe táctil y ratón sin dependencias.
 * Los clones laterales permiten un recorrido continuo en ambas direcciones.
 */
export default function StrengthsCarousel({ items }) {
  const count = items.length;
  const clonesPerSide = Math.min(4, count);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const viewportRef = useRef(null);
  const slideRefs = useRef([]);
  const activeRef = useRef(0);
  const visualRef = useRef(clonesPerSide);
  const timerRef = useRef(null);
  const dragRef = useRef(null);
  const isJumpingRef = useRef(false);

  const slides = [
    ...items.slice(-clonesPerSide),
    ...items,
    ...items.slice(0, clonesPerSide),
  ];

  const showIndex = useCallback((index) => {
    const normalized = ((index % count) + count) % count;
    activeRef.current = normalized;
    setActive(normalized);
  }, [count]);

  const scrollToVisual = useCallback((visualIndex, smooth = true) => {
    const viewport = viewportRef.current;
    const target = slideRefs.current[visualIndex];
    if (!viewport || !target) return;
    // Las coordenadas de la tarjeta se obtienen en relación con el viewport.
    const left = viewport.scrollLeft + target.getBoundingClientRect().left - viewport.getBoundingClientRect().left;
    viewport.scrollTo({ left, behavior: smooth && !reduceMotion ? 'smooth' : 'instant' });
  }, [reduceMotion]);

  const goTo = useCallback((index) => {
    const next = ((index % count) + count) % count;
    visualRef.current = next + clonesPerSide;
    showIndex(next);
    scrollToVisual(visualRef.current);
  }, [clonesPerSide, count, scrollToVisual, showIndex]);

  const shift = useCallback((direction) => {
    if (count <= 1) return;
    const nextVisual = visualRef.current + direction;
    visualRef.current = nextVisual;
    showIndex(nextVisual - clonesPerSide);
    scrollToVisual(nextVisual);
  }, [clonesPerSide, count, scrollToVisual, showIndex]);

  const settle = useCallback(() => {
    if (dragRef.current || isJumpingRef.current) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    let nearest = clonesPerSide;
    let minDistance = Infinity;

    slideRefs.current.forEach((element, i) => {
      if (!element) return;
      const start = viewport.scrollLeft + element.getBoundingClientRect().left - viewport.getBoundingClientRect().left;
      const distance = Math.abs(start - viewport.scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = i;
      }
    });

    const realIndex = ((nearest - clonesPerSide) % count + count) % count;
    showIndex(realIndex);
    const normalizedVisual = realIndex + clonesPerSide;
    visualRef.current = normalizedVisual;

    if (nearest !== normalizedVisual) {
      // Saltar desde el clon a su tarjeta real sin animación perceptible.
      isJumpingRef.current = true;
      scrollToVisual(normalizedVisual, false);
      requestAnimationFrame(() => { isJumpingRef.current = false; });
    }
  }, [clonesPerSide, count, scrollToVisual, showIndex]);

  const onScroll = useCallback(() => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(settle, 175);
  }, [settle]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const recenter = () => scrollToVisual(visualRef.current, false);
    const observer = new ResizeObserver(recenter);
    observer.observe(viewport);
    recenter();
    return () => observer.disconnect();
  }, [scrollToVisual]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!playing || isHovering || hasFocus || reduceMotion || count < 2) return;
    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible') shift(1);
    }, 6500);
    return () => window.clearInterval(id);
  }, [playing, isHovering, hasFocus, reduceMotion, count, shift]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function handlePointerDown(event) {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    dragRef.current = { startX: event.clientX, scrollLeft: viewport.scrollLeft };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('is-dragging');
  }

  function handlePointerMove(event) {
    if (!dragRef.current || !viewportRef.current) return;
    viewportRef.current.scrollLeft = dragRef.current.scrollLeft - (event.clientX - dragRef.current.startX);
  }

  function handlePointerUp(event) {
    if (!dragRef.current) return;
    dragRef.current = null;
    const viewport = viewportRef.current;
    viewport?.classList.remove('is-dragging');
    if (viewport?.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    onScroll();
  }

  if (!count) return null;

  return (
    <div
      className="strengths-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="¿En qué podemos ayudarte? Nueve áreas de acompañamiento"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
      }}
    >
      <div
        className="strengths-viewport"
        ref={viewportRef}
        onScroll={onScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        tabIndex={0}
        aria-label="Desliza horizontalmente o utiliza las flechas para recorrer las nueve tarjetas"
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            shift(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
      >
        <div className="strengths-track">
          {slides.map(({ title, description, icon: Icon, className }, visualIndex) => {
            const isClone = visualIndex < clonesPerSide || visualIndex >= clonesPerSide + count;
            const realIndex = (visualIndex - clonesPerSide + count) % count;
            return (
              <article
                key={`${realIndex}-${visualIndex}`}
                className={`strength-card strengths-slide${active === realIndex ? ' strengths-slide-active' : ''}`}
                ref={(element) => { slideRefs.current[visualIndex] = element; }}
                aria-roledescription="diapositiva"
                aria-label={`${realIndex + 1} de ${count}: ${title}`}
                aria-hidden={isClone ? 'true' : undefined}
              >
                <div className={`strength-icon ${className}`} aria-hidden="true">
                  <Icon size={52} strokeWidth={1.25} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className="strengths-controls" aria-label="Controles del carrusel">
        <button type="button" className="strengths-arrow" aria-label="Tarjeta anterior" onClick={() => shift(-1)}>
          <ChevronLeft aria-hidden="true" size={24} />
        </button>
        <div className="strengths-pagination" role="group" aria-label="Seleccionar tarjeta">
          {items.map(({ title }, index) => (
            <button
              type="button"
              key={`${index}-${title}`}
              className={`strengths-dot${active === index ? ' strengths-dot-active' : ''}`}
              aria-label={`Mostrar tarjeta ${index + 1}: ${title}`}
              aria-current={active === index ? 'true' : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button type="button" className="strengths-arrow" aria-label="Tarjeta siguiente" onClick={() => shift(1)}>
          <ChevronRight aria-hidden="true" size={24} />
        </button>
        <button
          type="button"
          className="strengths-play"
          onClick={() => setPlaying((value) => !value)}
          aria-pressed={!playing}
          aria-label={playing ? 'Pausar avance automático' : 'Reanudar avance automático'}
        >
          {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
          <span>{playing ? 'Pausar' : 'Reproducir'}</span>
        </button>
      </div>
      <p className="sr-only" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
        Tarjeta {active + 1} de {count}: {items[active]?.title}
      </p>
    </div>
  );
}
