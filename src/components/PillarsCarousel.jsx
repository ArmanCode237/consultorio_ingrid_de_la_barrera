import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

/**
 * Carrusel circular de Nuestros Pilares.
 * - Fotos originales extraídas del archivo Illustrator.
 * - Scroll-snap nativo (swipe táctil), arrastre con ratón, flechas y puntos.
 * - Duplicados de borde para transición circular sin dejar espacios vacíos.
 * - Pausa al apuntar/enfocar; respeta prefers-reduced-motion.
 */
export default function PillarsCarousel({ pillars }) {
  const count = pillars.length;
  const initial = Math.min(1, count - 1); // La mesa de Illustrator centra «Trabajo individual y grupal».
  const [active, setActive] = useState(initial);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const activeRef = useRef(initial);
  const settleTimerRef = useRef(null);
  const pointerRef = useRef(null);

  // Es necesario un clon a cada extremo para que se vea la foto vecina
  // incluso cuando la tarjeta activa es la primera o la última.
  const visibleItems = [pillars[count - 1], ...pillars, pillars[0]];

  const setCurrent = useCallback((index) => {
    const next = ((index % count) + count) % count;
    activeRef.current = next;
    setActive(next);
  }, [count]);

  const scrollToItem = useCallback((visualIndex, animate = true) => {
    const viewport = viewportRef.current;
    const target = itemRefs.current[visualIndex];
    if (!viewport || !target) return;
    const x = target.offsetLeft + target.offsetWidth / 2 - viewport.clientWidth / 2;
    const shouldAnimate = animate && !reducedMotion;
    viewport.scrollTo({ left: x, behavior: shouldAnimate ? 'smooth' : 'instant' });
  }, [reducedMotion]);

  const move = useCallback((direction) => {
    const index = activeRef.current;
    const next = (index + direction + count) % count;
    setCurrent(next);
    const visualIndex = direction === -1 && index === 0
      ? 0 // clon del último elemento
      : direction === 1 && index === count - 1
        ? count + 1 // clon del primero
        : next + 1;
    scrollToItem(visualIndex);
  }, [count, scrollToItem, setCurrent]);

  const jumpTo = useCallback((index) => {
    setCurrent(index);
    scrollToItem(index + 1);
  }, [scrollToItem, setCurrent]);

  const finishScrolling = useCallback(() => {
    if (pointerRef.current) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    const middle = viewport.scrollLeft + viewport.clientWidth / 2;
    let nearest = 1;
    let minDistance = Number.POSITIVE_INFINITY;

    itemRefs.current.forEach((element, index) => {
      if (!element) return;
      const center = element.offsetLeft + element.offsetWidth / 2;
      const distance = Math.abs(center - middle);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = index;
      }
    });

    if (nearest === 0) {
      setCurrent(count - 1);
      scrollToItem(count, false);
    } else if (nearest === count + 1) {
      setCurrent(0);
      scrollToItem(1, false);
    } else {
      setCurrent(nearest - 1);
    }
  }, [count, scrollToItem, setCurrent]);

  const handleScroll = useCallback(() => {
    window.clearTimeout(settleTimerRef.current);
    settleTimerRef.current = window.setTimeout(finishScrolling, 160);
  }, [finishScrolling]);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    function resize() {
      const first = itemRefs.current[1];
      if (!first) return;
      // Centrar la tarjeta sin sacrificar las vistas parciales de las vecinas.
      const sidePadding = Math.max(16, (viewport.clientWidth - first.offsetWidth) / 2);
      track.style.paddingInline = `${sidePadding}px`;
      scrollToItem(activeRef.current + 1, false);
    }

    const observer = new ResizeObserver(resize);
    observer.observe(viewport);
    resize();
    return () => observer.disconnect();
  }, [scrollToItem]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener?.('change', update);
    return () => media.removeEventListener?.('change', update);
  }, []);

  useEffect(() => {
    if (!playing || hovered || focused || reducedMotion || count < 2) return;
    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') move(1);
    }, 6500);
    return () => window.clearInterval(interval);
  }, [playing, hovered, focused, reducedMotion, count, move]);

  useEffect(() => () => window.clearTimeout(settleTimerRef.current), []);

  function pointerDown(event) {
    // En móviles se conserva el desplazamiento táctil nativo.
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    const viewport = viewportRef.current;
    pointerRef.current = { x: event.clientX, scrollLeft: viewport.scrollLeft };
    viewport.setPointerCapture(event.pointerId);
    viewport.classList.add('is-dragging');
  }
  function pointerMove(event) {
    if (!pointerRef.current) return;
    viewportRef.current.scrollLeft = pointerRef.current.scrollLeft - (event.clientX - pointerRef.current.x);
  }
  function pointerUp(event) {
    pointerRef.current = null;
    viewportRef.current?.classList.remove('is-dragging');
    if (viewportRef.current?.hasPointerCapture(event.pointerId)) {
      viewportRef.current.releasePointerCapture(event.pointerId);
    }
    handleScroll();
  }

  return (
    <div
      className="pillars-carousel"
      role="region"
      aria-roledescription="carrusel"
      aria-label="Nuestros pilares"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div
        className="pillars-viewport"
        ref={viewportRef}
        onScroll={handleScroll}
        onPointerDown={pointerDown}
        onPointerMove={pointerMove}
        onPointerUp={pointerUp}
        onPointerCancel={pointerUp}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            move(event.key === 'ArrowLeft' ? -1 : 1);
          }
        }}
        aria-label="Desliza o usa las flechas para ver todos los pilares"
      >
        <div className="pillars-track" ref={trackRef}>
          {visibleItems.map(({ title, description, image, alt }, visualIndex) => {
            const isClone = visualIndex === 0 || visualIndex === count + 1;
            const realIndex = isClone ? (visualIndex === 0 ? count - 1 : 0) : visualIndex - 1;
            return (
              <article
                className={`pillar-card${active === realIndex ? ' pillar-card-active' : ''}`}
                key={`${realIndex}-${visualIndex}`}
                ref={(el) => { itemRefs.current[visualIndex] = el; }}
                aria-roledescription="diapositiva"
                aria-label={`${realIndex + 1} de ${count}: ${title}`}
                aria-hidden={isClone ? 'true' : undefined}
              >
                <div className="pillar-image-wrap">
                  <img src={image} alt={isClone ? '' : alt} loading={visualIndex > 3 ? 'lazy' : 'eager'} draggable="false" />
                </div>
                <div className="pillar-copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="pillars-controls" aria-label="Controles del carrusel">
        <button className="pillars-arrow" type="button" onClick={() => move(-1)} aria-label="Ver pilar anterior">
          <ChevronLeft aria-hidden="true" size={24} />
        </button>
        <div className="pillars-pagination" role="group" aria-label="Elegir pilar">
          {pillars.map(({ title }, index) => (
            <button
              key={title}
              type="button"
              className={`pillars-dot${active === index ? ' pillars-dot-active' : ''}`}
              aria-label={`Mostrar pilar ${index + 1}: ${title}`}
              aria-current={active === index ? 'true' : undefined}
              onClick={() => jumpTo(index)}
            />
          ))}
        </div>
        <button className="pillars-arrow" type="button" onClick={() => move(1)} aria-label="Ver siguiente pilar">
          <ChevronRight aria-hidden="true" size={24} />
        </button>
        <button
          className="pillars-play"
          type="button"
          aria-label={playing ? 'Pausar el carrusel automático' : 'Reanudar el carrusel automático'}
          aria-pressed={!playing}
          onClick={() => setPlaying((value) => !value)}
        >
          {playing ? <Pause aria-hidden="true" size={16} /> : <Play aria-hidden="true" size={16} />}
          <span>{playing ? 'Pausar' : 'Reproducir'}</span>
        </button>
      </div>
      <p className="sr-only" aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
        Pilar {active + 1} de {count}: {pillars[active].title}
      </p>
    </div>
  );
}
