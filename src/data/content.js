import { BrainCircuit, MessageCircleMore, Heart, BookOpen, UsersRound, Utensils, BadgeCheck, Mic, ListChecks, HandHeart } from 'lucide-react';

export const navigation = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/preguntas', label: 'Preguntas' },
  { to: '/contacto', label: 'Contacto' },
];

export const address = 'Calle 16 diagonal no. 256, Col. Pinos del Norte, C.P. 97138, Mérida, Yucatán, México';

export const contact = {
  whatsapp: (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, ''),
  email: (import.meta.env.VITE_CONTACT_EMAIL || '').trim(),
  facebook: (import.meta.env.VITE_FACEBOOK_URL || '').trim(),
  instagram: (import.meta.env.VITE_INSTAGRAM_URL || '').trim(),
};

export const services = [
  {
    title: 'Neuropsicología',
    icon: BrainCircuit,
    text: 'Evaluación e intervención en alteraciones de las funciones psicológicas superiores: atención, memoria, lenguaje, funciones ejecutivas, velocidad de procesamiento, razonamiento, habilidades académicas y coeficiente intelectual.',
  },
  {
    title: 'Lenguaje',
    icon: MessageCircleMore,
    text: 'Enfoque comunicativo-integral, tomando en cuenta el nivel comunicativo, las necesidades y los intereses de cada persona. Áreas: pragmática, semántica, sintaxis, comprensión y expresión.',
  },
  {
    title: 'Habla',
    icon: MessageCircleMore,
    text: 'Terapia miofuncional y oromotora dirigida a favorecer el equilibrio y funcionamiento de la musculatura orofacial y patrones adecuados para la articulación. Terapia de voz y para la fluidez verbal (disfluencias).',
  },
  {
    title: 'Aprendizaje',
    icon: BookOpen,
    text: 'Intervención en problemas de lectura, escritura, cálculo, comprensión, razonamiento y estrategias de aprendizaje mediante actividades lúdicas y funcionales.',
  },
  {
    title: 'Área emocional',
    icon: Heart,
    text: 'Intervención dirigida a favorecer la regulación de emociones y la autoestima mediante estrategias terapéuticas acordes con las necesidades de cada persona.',
  },
];

export const strengths = [
  { title: 'Problemas de alimentación de origen sensorial', description: 'Problem Feeder y Picky eater.', icon: Utensils, className: 'green' },
  { title: 'Desarrollo neuropsicológico', description: 'Evaluación e intervención de procesos cognitivos relacionados con el desarrollo.', icon: BrainCircuit, className: 'blue' },
  { title: 'Área emocional', description: 'Dificultades en la regulación de emociones y conductas que pueden interferir con el bienestar y la adaptación.', icon: Heart, className: 'coral' },
  { title: 'Sesiones individuales y grupales', description: 'Intervenciones personalizadas y espacios para favorecer la generalización de habilidades.', icon: UsersRound, className: 'yellow' },
  // Estas cinco categorías se adaptan de los contenidos presentes en las
  // otras mesas del Illustrator: Servicios y el modelo de acompañamiento.
  // El PDF de la mesa HOME solo muestra cuatro tarjetas legibles completas.
  { title: 'Lenguaje y comunicación', description: 'Apoyo en comprensión, expresión, semántica, sintaxis y habilidades comunicativas.', icon: MessageCircleMore, className: 'green' },
  { title: 'Habla y articulación', description: 'Intervención oromotora, articulación de sonidos, fluidez verbal y voz.', icon: Mic, className: 'blue' },
  { title: 'Aprendizaje y lectoescritura', description: 'Estrategias para lectura, escritura, cálculo, comprensión y razonamiento.', icon: BookOpen, className: 'coral' },
  { title: 'Atención y funciones ejecutivas', description: 'Fortalecimiento de la atención, memoria, organización y planificación.', icon: ListChecks, className: 'yellow' },
  { title: 'Orientación a familias', description: 'Acompañamiento a padres y cuidadores para dar continuidad a los avances.', icon: HandHeart, className: 'green' },
];

export const childSigns = [
  'Se distrae fácilmente y le cuesta terminar actividades.',
  'Tiene dificultades para aprender a leer o escribir.',
  'Comprende las instrucciones, pero le cuesta llevarlas a cabo.',
  'Tiene dificultades para expresarse o comprender el lenguaje.',
  'Presenta dificultades para pronunciar algunos sonidos.',
  'Tiene problemas para organizarse o administrar su tiempo.',
  'Su rendimiento escolar no corresponde con lo que parece poder hacer.',
  'Se frustra fácilmente ante las actividades escolares.',
  'Tiene dificultades para relacionarse o adaptarse a diferentes contextos.',
  'Necesita apoyo para desarrollar mayor autonomía.',
];

export const familySigns = [
  'Olvida conversaciones, citas o información que acaba de recibir; repite preguntas o cuenta lo mismo varias veces.',
  'Hace pausas frecuentes o pierde el hilo de una conversación.',
  'Tiene problemas para concentrarse, seguir una conversación o realizar actividades que antes hacía con facilidad.',
  'Tiene problemas para organizar actividades, administrar dinero, planificar, resolver problemas o seguir varios pasos.',
  'Confunde fechas o días de la semana.',
  'Está apático, irritable, ansioso o con pérdida de interés en actividades.',
  'Necesita ayuda para actividades instrumentales que previamente realizaba de manera independiente.',
];

export const workSteps = [
  {
    num: '01',
    title: 'Evaluación integral',
    accent: 'Aproximadamente 7 sesiones',
    description: 'Conocemos fortalezas y áreas de oportunidad. Determinamos necesidades, objetivos, tipo de tratamiento y alcances esperados para crear un plan personalizado.',
    icon: BrainCircuit,
  },
  {
    num: '02',
    title: 'Intervención',
    accent: '1–2 sesiones por semana',
    description: 'Implementamos un programa diseñado específicamente para cada persona. Cada sesión tiene una duración aproximada de 50 minutos.',
    icon: Heart,
  },
  {
    num: '03',
    title: 'Reevaluación',
    accent: 'Cada 6 meses',
    description: 'Revisamos los avances y las necesidades actuales para realizar ajustes al programa terapéutico.',
    icon: BadgeCheck,
  },
];

export const faqs = [
  { question: '¿Cuánto dura una sesión?', answer: '50 minutos de terapia y 10 minutos de retroalimentación con padres o cuidadores.' },
  { question: '¿Qué costo tiene?', answer: 'Sesiones de entrevista inicial y valoración: $1,000 MXN cada una, IVA incluido. Sesiones de intervención terapéutica: $800 MXN cada una, IVA incluido.' },
  { question: '¿Cuáles son las formas de pago?', answer: 'PayPal, transferencia interbancaria y efectivo.' },
  { question: '¿Las sesiones son únicamente presenciales?', answer: 'Las sesiones de valoración sí. Las entrevistas iniciales y las sesiones de intervención terapéutica pueden realizarse vía remota por Zoom o Meet.' },
  { question: '¿Con qué frecuencia se realizan las terapias?', answer: 'La frecuencia se determina de acuerdo con las necesidades de cada persona; el programa puede contemplar de una a dos sesiones semanales.' },
  { question: '¿Primero tengo que realizar una valoración?', answer: 'Cuando se requiere determinar necesidades específicas de intervención, realizamos una valoración integral antes de diseñar el programa terapéutico.' },
  { question: '¿Las sesiones son individuales?', answer: 'Sí. También pueden utilizarse sesiones grupales cuando son adecuadas para favorecer la generalización de habilidades.' },
  { question: '¿Trabajan con padres?', answer: 'Sí. El acompañamiento y orientación a padres forma parte de nuestro modelo de trabajo.' },
  { question: '¿Cada cuánto se revisan los avances?', answer: 'Se propone una reevaluación aproximadamente cada seis meses para valorar avances y realizar ajustes al programa.' },
];

export const policies = [
  { title: 'Confirmación obligatoria', text: 'Para asegurar su espacio, todas las citas deberán pagarse con anterioridad y confirmarse con un mínimo de 48 horas de anticipación. Una vez enviado el mensaje de confirmación, será necesario responder dentro de las primeras 3 horas. Si no se recibe respuesta, la cita será cancelada y el horario podrá ofrecerse a otro paciente.' },
  { title: 'Reprogramación o cancelación', text: 'Si necesita cancelar o reprogramar su cita, le pedimos hacerlo con al menos 48 horas de anticipación. Los cambios realizados con menos de 48 horas generan un cargo del 50% del costo de la consulta, que deberá cubrirse antes de agendar una nueva cita.' },
  { title: 'Ausencias (no show)', text: 'Cuando un paciente no se presenta a su cita agendada sin previo aviso, la cita se considera como asistida. Para reagendar, será necesario cubrir el 100% del costo de la consulta no asistida.' },
  { title: 'Retardos', text: 'Contamos con un tiempo de tolerancia de 15 minutos. Pasado ese lapso, no será posible brindar atención y será necesario reprogramar para otro día, con la finalidad de respetar a los pacientes siguientes.' },
];
