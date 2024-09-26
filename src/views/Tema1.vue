<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Turismo

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/img1.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Actividad económica y sociocultural que implica el desplazamiento temporal de personas fuera de su entorno habitual, motivado por razones de ocio, cultura, negocios u otros intereses, con el propósito de experimentar y consumir servicios y productos específicos del destino visitado. Esta actividad engloba una compleja red de interacciones entre los viajeros, las comunidades receptoras, las empresas turísticas, y los entornos naturales y culturales, contribuyendo significativamente al desarrollo económico, social y cultural de los destinos, mientras plantea desafíos relacionados con la sostenibilidad y la gestión responsable de los recursos.

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Contexto y panorama del turismo

    .row.bgc-1.align-items-center.p-4.py-5.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .tarjeta.tarjeta--blanca.p-4.p-lg-5
            LineaTiempoC.color-primario(text-small)
              .row.justify-content-center(titulo="Siglo V a.C. - Siglo III d.C.")
                .col-md-7.mb-4.mb-md-0
                  h4 Siglo V a.C. - Siglo III d.C.
                  p Primeros viajes con fines religiosos y culturales en civilizaciones como Egipto, Grecia y Roma, donde los ciudadanos viajaban para visitar templos, asistir a festivales religiosos o realizar peregrinaciones.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea1.png', alt='')
              .row.justify-content-center(titulo="Siglo XI - Siglo XIII")
                .col-md-7.mb-4.mb-md-0
                  h4 Siglo XI - Siglo XIII
                  p Durante la Edad Media, el turismo religioso se intensifica con las peregrinaciones a lugares sagrados como Santiago de Compostela, Jerusalén y Roma.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea2.png', alt='')
              .row.justify-content-center(titulo="Siglo XVII - XVIII")
                .col-md-7.mb-4.mb-md-0
                  h4 Siglo XVII - XVIII
                  p Surge el 
                    span.fw-bold #[em Grand Tour ] 
                    |  en Europa, principalmente entre la aristocracia británica, que viajaba por el continente para completar su educación y visitar sitios históricos y culturales. Este periodo establece las bases del turismo cultural.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea3.png', alt='')
              .row.justify-content-center(titulo="1841")
                .col-md-7.mb-4.mb-md-0
                  h4 1841
                  p Thomas Cook organiza el primer viaje turístico en tren, marcando el inicio del turismo organizado. Esto llevó a la creación de agencias de viajes y al desarrollo del turismo en grupo.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea4.png', alt='')
              .row.justify-content-center(titulo="1867")
                .col-md-7.mb-4.mb-md-0
                  h4 1867
                  p Se funda la primera compañía de cruceros, la #[em “Peninsular and Oriental Steam Navigation Company” (P&O)], lo que marca el inicio del turismo marítimo.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea5.png', alt='')
              .row.justify-content-center(titulo="1903")
                .col-md-7.mb-4.mb-md-0
                  h4 1903
                  p Los hermanos Wright realizan el primer vuelo controlado y motorizado, lo que sentó las bases para la aviación comercial, que transformaría el turismo a nivel global.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea6.png', alt='')
              .row.justify-content-center(titulo="1950")
                .col-md-7.mb-4.mb-md-0
                  h4 1950
                  p Comienza la era del turismo de masas con la expansión de la aviación comercial y la popularización de los viajes aéreos gracias a los vuelos más accesibles. Se desarrollan destinos turísticos de playa en el Mediterráneo y el Caribe.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea7.png', alt='')
              .row.justify-content-center(titulo="1970")
                .col-md-7.mb-4.mb-md-0
                  h4 1970
                  p La creación de la Organización Mundial del Turismo (OMT) promueve el turismo internacional y establece normas y políticas globales.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea8.png', alt='')
              .row.justify-content-center(titulo="1990")
                .col-md-7.mb-4.mb-md-0
                  h4 1990
                  p Surge el turismo sostenible, con un enfoque en minimizar el impacto ambiental y maximizar los beneficios económicos y sociales para las comunidades locales.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea9.png', alt='')
              .row.justify-content-center(titulo="2024")
                .col-md-7.mb-4.mb-md-0
                  h4 2024
                  p El turismo global se recupera y transforma tras la pandemia, con una preferencia por destinos sostenibles y menos masificados. La digitalización es clave, mejorando la experiencia del cliente y la gestión de destinos. Además, crece el enfoque en el turismo responsable, buscando minimizar el impacto ambiental y beneficiar a las comunidades locales.
                .col-md-3
                  img(src='@/assets/curso/temas/t1/linea10.png', alt='')

    .row.justify-content-center(data-aos="fade")
      .col-lg-6
        TarjetaAudio.color-primario(
          texto=""
          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false")
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


    Separador
    #t_1_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 1.1  Sistema turístico 

    .row.mb-5(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg1.p-4.h-100.d-flex.align-items-center.mont1
          p.mb-0 El sistema turístico es una estructura dinámica que integra un conjunto de elementos interrelacionados, como los recursos naturales y culturales, la infraestructura, los servicios, las empresas turísticas, y los flujos de demanda y oferta, que en su conjunto generan experiencias de viaje.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/img2.png', alt='')

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Actores del sistema turístico

    p.mb-4 Este sistema turístico articula a través de la interacción de actores clave, incluyendo turistas, gobiernos, comunidades locales y organizaciones del sector, para ofrecer productos y servicios turísticos que satisfacen las necesidades del viajero mientras impulsan el desarrollo económico y sostenible de las regiones involucradas.
      
    .row.justify-content-center.mb-5
      .col-lg-8.mb-5(data-aos="fade") 
        .cajon.color-primario.bg2.p-4
          p.mb-0 Su principal objetivo es satisfacer al cliente, atendiendo sus necesidades de descanso y optimizando el uso de su tiempo libre.
      .col-lg-10(data-aos="fade-down")
          .titulo-sexto.color-primario
            h5 Figura 1. 
            span Elementos en la gestión del turismo
          figure
            img.mb-2(src='@/assets/curso/temas/t1/fig1.svg', alt='La imagen presenta un gráfico en forma de hexágono que organiza los elementos clave en la gestión del turismo. Cada lado del hexágono está segmentado en bloques que representan conceptos importantes, tales como el sistema turístico, la superestructura, la política turística, el marco normativo y los agentes involucrados. En el centro del hexágono, se destacan los "Elementos Claves en la Gestión del Turismo", lo que indica la interconexión y la relación de cada componente para una gestión efectiva del sector turístico.')  
          figcaption Fuente: SENA

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img3.png', alt='')
      .col-lg-8
        p.mb-0 Dentro de las particularidades del sistema turístico, es crucial entender que ningún elemento opera de manera aislada; todos los componentes están profundamente interconectados tanto entre sí como con su entorno externo.
        p Esta interrelación dota al sistema de un alto grado de apertura, flexibilidad y dinamismo, permitiéndole adaptarse a diversas situaciones en los contextos físico, sociocultural y económico.
        .bg1.p-4
          p.mb-0 Desde una perspectiva económica, el sistema turístico se basa en la concepción del turismo como una actividad económica estructurada alrededor de la interacción entre la oferta y la demanda de recursos turísticos. En este sistema convergen elementos esenciales como la demanda, la oferta, la infraestructura turística, la superestructura y el producto turístico, formando un conjunto coherente que facilita el funcionamiento integral del turismo.

    .row.justify-content-center.mb-5(data-aos="fade-down")  
      .col-lg-10
        .titulo-sexto.color-primario
          h5 Figura 2. 
          span Funcionamiento de turismo
      .col-lg-8  
        figure
          img.mb-2(src='@/assets/curso/temas/t1/fig2.svg', alt='La imagen presenta una pirámide que organiza los componentes fundamentales del turismo. En la cúspide se encuentra el "Producto Turístico", compuesto por atractivos naturales y culturales, alojamiento, alimentación, servicios complementarios y transporte. La base de la pirámide está formada por la "Superestructura Turística", seguida de la "Infraestructura" y la "Comunidad Anfitriona o Receptora". A los lados del esquema se resaltan dos factores clave: la oferta turística, vinculada a los atractivos del destino, y la demanda turística, relacionada con los consumidores y visitantes. Todo esto está enmarcado dentro de un espacio geográfico determinado.')  
        figcaption Fuente: SENA

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Elementos del sistema turístico

    p.mb-4 La teoría del sistema turístico de Neil Leiper, desarrollada en 1979, es un enfoque integral que conceptualiza el turismo como un sistema compuesto por varios elementos interrelacionados que operan en un entorno dinámico, en donde, el turismo puede entenderse a través de tres componentes principales:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarjet1.png' alt='')
          .tarjeta.bg3.w-100
            .p-4.text-center
              h4 Región de origen
              p El área geográfica de donde parten los turistas.
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarjet2.png' alt='')
          .tarjeta.bg3.w-100
            .p-4.text-center
              h4 Región de destino
              p El lugar que recibe a los turistas, equipado con la infraestructura necesaria, personal capacitado, y una población residente.
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/tarjet3.png' alt='')
          .tarjeta.bg3.w-100
            .p-4.text-center
              h4 Región de tránsito
              p El área intermedia entre la región de origen y la de destino, que actúa como la ruta de acceso hacia el destino final.

    p.mb-4 A continuación, se describen los elementos clave del sistema turístico, que están influenciados por dimensiones socioculturales, políticas, ambientales, económicas y tecnológicas, como se ilustra en la gráfica anterior:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-6.col-10.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/t1/img4.png', alt='')
      .col-lg-8
        AcordionA.acord1(tipo="a" clase-tarjeta="tarjeta bg4")
          .row.justify-content-center(titulo="Territorio - espacio geográfico - destino turístico")
            .col-md-10
              p La actividad turística se desarrolla en un espacio geográfico específico, donde se combinan productos y servicios para satisfacer las expectativas de los visitantes. Este destino es el lugar donde se lleva a cabo la experiencia turística y al que los turistas deben desplazarse para disfrutar de los productos turísticos.
          .row.justify-content-center(titulo="Oferta")
            .col-md-10
              p Comprende los atractivos naturales, culturales, y los servicios complementarios (como alojamiento, alimentación, y comercio) que están disponibles en el territorio para uso turístico, junto con la infraestructura necesaria.
          .row.justify-content-center(titulo="Demanda")
            .col-md-10
              p Se refiere a las necesidades de los turistas, como descanso, entretenimiento, desarrollo personal, desplazamiento y estadía, que impulsan su participación en la actividad turística.
          .row.justify-content-center(titulo="Organización social e institucional")
            .col-md-10.mb-4.mb-md-0
              p Incluye las entidades y organizaciones, tanto públicas como privadas, que contribuyen directa o indirectamente al desarrollo sostenible del turismo, constituyendo la superestructura turística.

    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Dimensiones: factores que influyen en el sistema turístico

    p.mb-4 La teoría del sistema turístico de Neil Leiper, desarrollada en 1979, es un enfoque integral que conceptualiza el turismo como un sistema compuesto por varios elementos interrelacionados que operan en un entorno dinámico, en donde, el turismo puede entenderse a través de tres componentes principales:

    TabsC.color-acento-contenido.mb-5
      .bg5.py-4.py-md-5(titulo="Dimensión sociocultural")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/tab1.png', alt='')
          .col-md-7
            h4 Dimensión sociocultural
            p Relaciona la interacción entre turistas y comunidades receptoras, destacando la importancia de la sostenibilidad y el respeto por las culturas locales.
      .bg5.py-4.py-md-5(titulo="Dimensión económica")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/tab2.png', alt='')
          .col-md-7
            h4 Dimensión económica
            p Implica los sistemas productivos que, bajo criterios de sostenibilidad, buscan revitalizar la economía local y utilizar el turismo como herramienta para erradicar la pobreza y promover el desarrollo local.
      .bg5.py-4.py-md-5(titulo="Dimensión ambiental")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/tab3.png', alt='')
          .col-md-7
            h4 Dimensión ambiental
            p Enfatiza una relación responsable y sostenible con el entorno natural, minimizando impactos negativos y promoviendo la conservación del patrimonio natural.
      .bg5.py-4.py-md-5(titulo="Dimensión política")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/tab4-2.png', alt='')
          .col-md-7
            h4 Dimensión política
            p Se refiere a las leyes, normas y políticas que regulan la actividad turística, asegurando que contribuya al desarrollo sostenible de los territorios. 
      .bg5.py-4.py-md-5(titulo="Dimensión tecnológica")
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t1/tab5.png', alt='')
          .col-md-7
            h4 Dimensión tecnológica
            p Incluye todas las tecnologías que apoyan y afectan el desarrollo de la actividad turística, especialmente las Tecnologías de la Información y la Comunicación (TIC). 
    
    .row.justify-content-center.mb-5
      .col-lg-7.mb-5(data-aos="fade") 
        .titulo-sexto.color-primario
          h5 Figura 3. 
          span Dimensiones del producto turístico 
        figure
          img.mb-3(src='@/assets/curso/temas/t1/figura3.svg', alt='La imagen presenta un esquema circular que destaca al "Producto Turístico" como el elemento central, rodeado por la oferta, la demanda y la organización social e institucional. Estos componentes se encuentran dentro de un marco general de sostenibilidad. Alrededor del esquema, se identifican diversas dimensiones clave para la sostenibilidad del turismo: la dimensión ambiental, la dimensión tecnológica, la dimensión socio-cultural, la dimensión económica y la dimensión política, cada una de las cuales contribuye a la gestión integral del turismo.')  
          figcaption Fuente: SENA
      .col-lg-5.d-none.d-lg-block(data-aos="fade-down")
        img.mb-2(src='@/assets/curso/temas/t1/img5.png', alt='')  



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    mostrarIndicadorTarjetaAudio: true,
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
