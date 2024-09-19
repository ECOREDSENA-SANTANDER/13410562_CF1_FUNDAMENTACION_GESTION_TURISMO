<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Destino turístico
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un destino turístico es una zona geográfica que, por su atractivo natural y cultural, genera interés para la visita, convirtiéndose en un lugar ideal para el desarrollo de actividades turísticas. Esta área está delimitada por características específicas que permiten crear un mercado basado en unidades productivas propias de la actividad turística. Además, agrupa a organizaciones empresariales, territoriales e institucionales que ofrecen productos turísticos. Según Jafari (2002), es el espacio donde los turistas planean pasar tiempo fuera de su lugar de residencia habitual.
    
    p.mb-4 El Instituto Interamericano de Turismo define el destino turístico como un área donde el viajero espera encontrar actividades, atractivos y servicios que le brinden una experiencia inolvidable. Eduardo Pantano (2014) añade que un destino debe tener atractivos turísticos, capacidad para ofrecer servicios y una infraestructura adecuada, además de una gestión estatal para organizar la oferta y preservar los recursos. El destino incluye productos, servicios y atractivos en un radio de influencia de un día, y su competitividad depende de su imagen y percepción en el mercado.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo-sexto.color-primario
          h5 Figura 9. 
          span Diferentes destinos turísticos            
        img(src='@/assets/curso/temas/t3/img2.png', alt='')
    
    .row.mb-5
      .col-lg-5
        img(src='@/assets/curso/temas/t3/img3.png', alt='')
      .col-lg-7 
        p.mb-4 Otra forma de concebir el destino turístico es como la combinación de diversos productos turísticos ofrecidos por una región geográfica, los cuales se complementan y compiten simultáneamente. Estos productos comparten una visión integrada, una gestión común y una imagen de destino bajo una marca conjunta, aunque cada uno mantiene elementos diferenciadores y se dirige a segmentos de demanda específicos.
        p Se trata de una unidad o entidad que aprovecha recursos turísticos e infraestructuras, configurando un sistema que ofrece una experiencia global e integrada. Para lograr esto, es necesario coordinar servicios y productos, independientemente de que existan o no límites administrativos en su gestión.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
