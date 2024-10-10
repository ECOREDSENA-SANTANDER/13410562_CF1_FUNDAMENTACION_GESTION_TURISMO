<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario" />
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Turismo superestructuras y normatividad',
      titulo: 'Cuestionario',
      introduccion:
        'Objetivo: Validar el conocimiento adquirido sobre la normatividad y el sistema turístico.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            'Turismo: actividad económica y sociocultural que implica el desplazamiento temporal de personas fuera de su entorno habitual, motivado por razones de ocio, cultura, negocios u otros intereses, con el propósito de experimentar y consumir servicios y productos específicos del destino visitado.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos del sistema turístico y su normatividad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'El sistema turístico es una estructura dinámica que integra un conjunto de elementos interrelacionados, como los recursos naturales y culturales, la infraestructura, los servicios, las empresas turísticas, y los flujos de demanda y oferta, que en su conjunto generan experiencias de viaje.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos del sistema turístico y su normatividad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Actores del sistema turístico: este sistema turístico articula a través de la interacción de actores clave, incluyendo servicios avícolas.',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos del sistema turístico y su normatividad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'La teoría del sistema turístico de Neil Leiper, desarrollada en 2024, es un enfoque integral que conceptualiza el turismo como un sistema compuesto por varios elementos interrelacionados que operan en un entorno dinámico.',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos del sistema turístico y su normatividad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Dimensión económica: implica los sistemas productivos que, bajo criterios de sostenibilidad, buscan revitalizar la economía local y utilizar el turismo como herramienta para erradicar la pobreza y promover el desarrollo local.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos del sistema turístico y su normatividad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Dimensión tecnológica: Incluye todas las tecnologías que apoyan y afectan el desarrollo de la actividad turística, especialmente las Tecnologías de la Información y la Comunicación (TIC).',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: false,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene claros los conceptos del sistema turístico y su normatividad.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
