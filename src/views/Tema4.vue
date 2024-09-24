<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Política y normatividad turística
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 El enfoque principal reside en promover el turismo receptivo sobre el emisor, dado que este impulsa de manera más directa el crecimiento de las empresas turísticas nacionales y optimiza la utilización de los recursos regionales. La regulación y el desarrollo de políticas en el sector turístico establecen un vínculo entre la gestión pública y la implementación de medidas con repercusiones económicas, tales como la imposición de gravámenes o la asignación de subsidios, orientadas a estimular el crecimiento sostenible y la competitividad del sector.
    
    p El Instituto Interamericano de Turismo define el destino turístico como un área donde el viajero espera encontrar actividades, atractivos y servicios que le brinden una experiencia inolvidable. Eduardo Pantano (2014) añade que un destino debe tener atractivos turísticos, capacidad para ofrecer servicios y una infraestructura adecuada, además de una gestión estatal para organizar la oferta y preservar los recursos. El destino incluye productos, servicios y atractivos en un radio de influencia de un día, y su competitividad depende de su imagen y percepción en el mercado.


    Separador
    #t_4_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 4.1  Política turística 
    
    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.col-11.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t4/img2.png', alt='')
      .col-lg-7 
        p.mb-4 La política se define como el
          span.fw-bold conjunto de orientaciones y directrices que el Gobierno o el Estado establece para regular diversas actividades en un país 
          |  En el ámbito turístico, estas decisiones, cuando se integran de manera coherente dentro de una política de desarrollo, orientan la gestión del sector al normar las acciones necesarias, las cuales se concretan en planes y programas de desarrollo sectorial (Valencia, 2014). 
        p El conjunto de normas que conforman la política turística tiene como objetivo principal
          span.fw-bold stablecer las directrices necesarias para promover y fomentar el desarrollo de la actividad turística.
          |  Como parte integral de la política económica, su implementación implica la adopción de medidas que los gobernantes consideran estratégicas para alcanzar metas específicas. Las políticas turísticas ejercen un impacto significativo en la sociedad y deben ser vistas como herramientas clave en la gestión pública, ya que la mayoría de la actividad turística es impulsada por el sector privado (Hernández Molina, 2010)
    
    p.mb-4 La política turística es, en esencia, una micropolítica especializada que la administración pública emplea para establecer directrices relacionadas con la planificación, promoción, ordenamiento y regulación de la actividad turística. Se integra dentro de las políticas sectoriales de la política económica, considerando que el turismo es un sector clave para el desarrollo económico.

    .row(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg8.p-4.h-100.d-flex.align-items-center.mont1
          p.mb-0 Los objetivos de la política turística varían según la región, el país y las características de los productos turísticos disponibles, así como las motivaciones de las autoridades responsables de su formulación. Sin embargo, hay consenso en cuanto a los objetivos fundamentales de toda política turística estatal, que incluyen: fomentar el crecimiento de la renta nacional, generar empleo, aumentar los ingresos por divisas y promover el desarrollo y el equilibrio regional. Estos objetivos, a su vez, contribuyen a un objetivo macroeconómico principal: mejorar la calidad de vida y el bienestar de los ciudadanos residentes en las áreas donde se implementa la política turística.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/img3.png', alt='')  
    

    Separador
    #t_4_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 4.2  Legislación y normatividad colombiana en turismo
    
    p.mb-4 El sector turístico está regulado por diversas políticas, entre las que destacan:

    .row.bgc-6.align-items-center.p-4.mb-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-end

          .col-lg-3.col-md-6.col-10.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t4/img4.png', alt='')
          .col-lg-8  
            SlyderF(columnas="col-md-6")
              .tarjeta.bg4.p-4
                p.text-center #[b Plan Sectorial de Turismo:] está regulado principalmente por la Ley 300 de 1996 y modificada por la Ley 2068 de 2020. Define los lineamientos generales del turismo en Colombia, promoviendo su desarrollo sostenible.
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Turismo Social:] reglamentada bajo la Ley 1558 de 2012, promueve el acceso inclusivo al turismo como derecho, con énfasis en grupos poblacionales vulnerables. 
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Turismo y Artesanías:] esta política también está vinculada a la Ley 300 de 1996, en la cual se fomenta la integración de productos culturales y artesanales en el desarrollo turístico.
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Mercadeo y Promoción Turística de Colombia:] amparada bajo la Ley 1101 de 2006 y la Ley 2068 de 2020, que establece directrices para la promoción y competitividad del sector turístico a nivel nacional e internacional.
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Seguridad Turística:] esta está reglamentada por el Decreto 945 de 2014, que regula el Consejo Nacional de Seguridad Turística y los Comités Departamentales de Seguridad Turística. 
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Competitividad:] el desafío para alcanzar un turismo de clase mundial: Se encuentra enmarcada en la Ley 1558 de 2012, que busca fortalecer la competitividad del turismo mediante normas de calidad y sostenibilidad
              .tarjeta.bg4.p-4
                p.text-center #[b Plan Indicativo de Formación en Turismo:] reglamentado a través de la Ley 1558 de 2012, que incluye formación especializada para mejorar las capacidades del personal en el sector.
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Turismo Cultural:] está respaldada por la Ley 2068 de 2020, que incluye la preservación y promoción de la riqueza cultural dentro de los destinos turísticos.
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Ecoturismo:] Regulada por el Decreto 646 de 2021, que adopta la Política Pública de Turismo Sostenible, enfocada en el ecoturismo como actividad clave para el desarrollo sostenible.
              .tarjeta.bg4.p-4
                p.text-center #[b Lineamientos Sectoriales para Playas Turísticas:] estos están regulados por la Ley 1558 de 2012, que incluye disposiciones específicas sobre la gestión y uso adecuado de playas con fines turísticos.
              .tarjeta.bg4.p-4
                p.text-center #[b Política de Turismo de Naturaleza:] forma parte de la Política de Turismo Sostenible, regulada por el Decreto 646 de 2021, la cual se centra en la promoción de actividades turísticas en áreas naturales protegidas.
              .tarjeta.bg4.p-4
                p.text-center #[b Lineamientos de Política para el Desarrollo del Turismo Comunitario:] también regidos por la Ley 2068 de 2020, que promueve el turismo comunitario como una alternativa de desarrollo local y cultural.

    p.mb-4 Este marco regulatorio tiene como objetivo lograr un equilibrio entre el crecimiento del sector turístico y el bienestar de las comunidades locales, promoviendo un desarrollo turístico sostenible y responsable en Colombia. Además de las leyes principales, el sector está sujeto a una variedad de normativas complementarias, que incluyen decretos, resoluciones, ordenanzas y acuerdos emitidos por las ramas legislativa y ejecutiva en sus diferentes niveles territoriales. Estas normativas, alineadas con lo dispuesto en la Constitución de 1991, aseguran una regulación coherente y adaptada a las particularidades locales, garantizando la protección del entorno y los derechos de las comunidades.
    
    .row.mb-5(data-aos='fade')
      .col-lg-5.pe-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/img5.png', alt='')
      .col-lg-7.ps-lg-0
        .br-l.bg8.p-4.h-100.d-flex.align-items-center.mont1
          p.mb-0 El sistema turístico debe funcionar de manera armónica, integrando tanto elementos tangibles como intangibles. Para lograrlo, es esencial que un destino con identidad y productos turísticos definidos esté bien gestionado. Esto implica la administración, organización, planificación y promoción del destino, lo cual es responsabilidad de la superestructura turística, es decir, los actores clave del sistema. A través de esta gestión, se establecen políticas y normas que aseguran una experiencia satisfactoria para el turista y beneficios para todos los involucrados, promoviendo la competitividad, sostenibilidad y gobernanza del destino.
      




</template>

<script>
export default {
  name: 'Tema4',
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
