# Ingrid de la Barrera — sitio web React + Vite

Sitio web multipágina construido a partir del archivo de Adobe Illustrator `Pag de Psicologia.ai` (seis mesas de trabajo, con sus fotografías originales). **JavaScript / JSX**, React, Vite, React Router DOM, Lucide y CSS adaptable sin frameworks de estilos.

## Inicio rápido

Requiere Node.js **20.19 o superior**.

```bash
npm install
npm run dev
```

Abre el enlace local mostrado en la terminal (normalmente `http://localhost:5173`). Para preparar una versión de producción:

```bash
npm run build
npm run preview
```

El resultado está en `dist/`. Al publicarlo configura el hosting para redirigir todas las rutas a `index.html` (SPA fallback), o navega con un hosting que soporte este comportamiento (Vercel, Netlify, etc.).

## Rutas

| Ruta | Contenido |
| --- | --- |
| `/` | Inicio, áreas de ayuda, señales de atención y llamada a la acción |
| `/servicios` | Cinco servicios, modelo de trabajo y pilares |
| `/nosotros` | Equipo, misión, visión, valores y enfoque teórico |
| `/preguntas` | Preguntas frecuentes interactivas, políticas y testimonios |
| `/contacto` | Horarios, ubicación, canales sociales y agendar |
| `/agendar` | Formulario de solicitud validado y resumen para enviar |

## Configurar WhatsApp, correo y redes sociales

Copia `.env.example` a `.env.local` y coloca los datos reales:

```env
VITE_WHATSAPP_NUMBER=521XXXXXXXXXX
VITE_CONTACT_EMAIL=hola@tudominio.com
VITE_FACEBOOK_URL=https://www.facebook.com/tu-pagina
VITE_INSTAGRAM_URL=https://www.instagram.com/tu-cuenta
```

**Los valores anteriores son ejemplos de formato, no datos reales.** No dejes estos ejemplos en producción. Cuando no se configura un canal, se muestra como no disponible en lugar de inventar un enlace. Debes reiniciar Vite después de cambiar las variables.

**Importante:** el formulario prepara un resumen. **No crea una reserva ni envía o almacena datos en un servidor.** Si se configura WhatsApp o correo, el usuario puede abrir ese canal con un mensaje prellenado; la confirmación final depende del consultorio. Si no, puede copiar la solicitud. Para un sistema de reservas real hay que conectar un proveedor o backend y una política de privacidad.

## Aclaraciones de la fuente

- En la mesa de trabajo de Contacto, el horario de sábados figura como `9:00 PM a 2:00 PM`, un intervalo inconsistente. La web muestra `Horario por confirmar` hasta validar el dato; no se inventó un horario nuevo.
- El archivo original menciona WhatsApp, correo, Facebook e Instagram, pero no contiene números, correos ni URLs verificables. Por eso se dejaron configurables.
- Los precios de la sección Preguntas se copiaron del diseño suministrado. Antes de publicar, valida que sigan vigentes.
- Se reutilizaron las imágenes fotográficas incrustadas en Illustrator y se convirtieron a WebP para optimizar la carga.
- El contenido de testimonios se extrajo de la página de Preguntas. Antes de publicar, revisa consentimiento, privacidad y exactitud editorial.
- En la versión digital los diseños conservan colores, secciones y estilo de los originales, pero se adaptan a la accesibilidad, al contenido dinámico y a pantallas pequeñas; no es una exportación de posiciones absolutas.

## Estructura principal

```text
src/
  assets/          # Fotografías WebP extraídas del Illustrator y decoración SVG
  components/      # Layout, navegación, footer, héroes, CTA
  data/            # Contenido y testimonios
  pages/           # Home, Services, About, FAQ, Contact, Booking
  main.jsx         # React Router DOM
  styles.css       # Diseño responsive
```

## Publicación

La aplicación usa BrowserRouter. Ejemplo de regla para Netlify: crea `public/_redirects` con `/* /index.html 200`. En Apache puedes usar un `.htaccess` que redirija las rutas internas al index. No publiques el `.ai` original (no está incluido en este proyecto), y revisa las políticas del tratamiento de datos personales antes de conectar un backend.

## Carrusel «Nuestros pilares» — Servicios

La ruta `/servicios` incorpora el carrusel de la **mesa de trabajo 2**. Conserva las tres tarjetas visibles del Illustrator y agrega la cuarta fotografía incluida en el archivo (fuera del encuadre de la mesa). Esta última utiliza el título «Actividades de aprendizaje» y un texto adaptado de la descripción de «Aprendizaje» del mismo diseño.

- Fotos: `src/assets/pillar-play.webp`, `pillar-individual.webp`, `pillar-family.webp` y `pillar-activities.webp`.
- Componente reutilizable: `src/components/PillarsCarousel.jsx`.
- Soporta desplazamiento táctil, arrastre con ratón, flechas, indicadores, reproducción/pausa automática y rotación circular.
- La reproducción se pausa al pasar el cursor o enfocar controles. La opción de movimiento reducido del dispositivo desactiva la reproducción automática.
- Puedes actualizar títulos/descripciones/orden en `src/pages/Services.jsx`.
