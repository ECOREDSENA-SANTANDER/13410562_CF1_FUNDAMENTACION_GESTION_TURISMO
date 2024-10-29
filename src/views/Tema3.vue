<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Destino turístico
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/img1.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Un destino turístico es una zona geográfica que, por su atractivo natural y cultural, genera interés para la visita, convirtiéndose en un lugar ideal para el desarrollo de actividades turísticas. Esta área está delimitada por características específicas que permiten crear un mercado basado en unidades productivas propias de la actividad turística. Además, agrupa a organizaciones empresariales, territoriales e institucionales que ofrecen productos turísticos. Según Jafari (2002), es el espacio donde los turistas planean pasar tiempo fuera de su lugar de residencia habitual.
    
    p.mb-4 El Instituto Interamericano de Turismo define el destino turístico como un área donde el viajero espera encontrar actividades, atractivos y servicios que le brinden una experiencia inolvidable. Eduardo Pantano (2014) añade que un destino debe tener atractivos turísticos, capacidad para ofrecer servicios y una infraestructura adecuada, además de una gestión estatal para organizar la oferta y preservar los recursos. El destino incluye productos, servicios y atractivos en un radio de influencia de un día, y su competitividad depende de su imagen y percepción en el mercado.
    
    .row.bgc-4.align-items-center.p-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
    
          .col-lg-8
            .titulo-sexto.color-primario
              h5 Figura 9. 
              span Diferentes destinos turísticos            
            figure
              img(src='@/assets/curso/temas/t3/img2.png', alt='La imagen representa a una mujer turista con un mapa en las manos y una maleta junto a ella, vestida para un clima cálido. A su lado, aparece un mapa colorido de Colombia con diversas ilustraciones que representan los atractivos turísticos del país, como fauna, flora, monumentos históricos y paisajes naturales. El diseño resalta la diversidad cultural y geográfica del país, sugiriendo un enfoque en el turismo y la exploración de sus destinos más emblemáticos.')
    
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Otra forma de concebir el destino turístico es como la combinación de diversos productos turísticos ofrecidos por una región geográfica, los cuales se complementan y compiten simultáneamente. Estos productos comparten una visión integrada, una gestión común y una imagen de destino bajo una marca conjunta, aunque cada uno mantiene elementos diferenciadores y se dirige a segmentos de demanda específicos.
        p Se trata de una unidad o entidad que aprovecha recursos turísticos e infraestructuras, configurando un sistema que ofrece una experiencia global e integrada. Para lograr esto, es necesario coordinar servicios y productos, independientemente de que existan o no límites administrativos en su gestión.

    .row.bgc-5.align-items-center.p-4.py-5.mb-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center
    
          .tit-tercer.row.align-items-center.mb-4(data-aos="fade-left")
            .col-auto.pe-0
              img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
            .col-auto.ps-0.texto
              h3.mb-0 Destinos turísticos inteligentes

          .col-lg-8
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/t3/fig10.png', alt='La imagen presenta un concepto de “Destino Turístico Inteligente”, donde se destacan características esenciales como unidad territorial, oferta estructurada, marca, atractiva, especialización conjunta y la capacidad de aprendizaje del destino. Se representan distintos elementos iconicos del turismo global, como la Estatua de la Libertad y templos asiáticos, simbolizando la diversidad cultural y geográfica. La imagen subraya la importancia de que un destino turístico esté bien organizado, sea atractivo, tenga una identidad de marca clara y fomente el aprendizaje y la innovación conjunta.')
              .tarjeta.bg6.p-3(x="10%" y="13%" numero="+")
                h4 Que aprende
                ul.lista-ul--color.fa-ul.color-secundario.mb-0
                  li
                    i.fas.fa-compass
                    | Más rápido que los competidores.
                  li
                    i.fas.fa-compass
                    | Que se adapta al medio competitivo.
                  li
                    i.fas.fa-compass
                    | Trabaja en equipo.
                  li
                    i.fas.fa-compass
                    span Que innova.
              .tarjeta.bg6.p-3(x="27%" y="42.5%" numero="+")
                h4 Unidad territorial
                ul.lista-ul--color.fa-ul.color-secundario.mb-0
                  li
                    i.fas.fa-compass
                    | Espacio geográfico.
                  li
                    i.fas.fa-compass
                    | + / - homogéneo.
                  li
                    i.fas.fa-compass
                    | Receptáculo de política turística.
                  li
                    i.fas.fa-compass
                    | C/ Objetivos de planificación.
                  li
                    i.fas.fa-compass
                    | C/ Capacidad administrativa para ejecutarlos.
                  li
                    i.fas.fa-compass
                    span Unidad base de la gestión.
              .tarjeta.bg6.p-3(x="18%" y="80%" numero="+")
                h4 Especialización conjunta
                ul.lista-ul--color.fa-ul.color-secundario.mb-0
                  li
                    i.fas.fa-compass
                    | Presencia de cooperación vertical en materia de marketing.
                  li
                    i.fas.fa-compass
                    | Para todo el destino.
                  li
                    i.fas.fa-compass
                    | Articulado s/una visión estratégica.
                  li
                    i.fas.fa-compass
                    span Más agresiva y enfocada.
              .tarjeta.bg6.p-3(x="53%" y="75%" numero="+")
                h4 Con una marca
                ul.lista-ul--color.fa-ul.color-secundario.mb-0
                  li
                    i.fas.fa-compass
                    | Una imagen atractiva.
                  li
                    i.fas.fa-compass
                    | Simbolice toda la oferta.
                  li
                    i.fas.fa-compass
                    | + Facilite su identificación.
                  li
                    i.fas.fa-compass
                    span Genere afectos y sentimientos.
              .tarjeta.bg6.p-3(x="68.5%" y="53%" numero="+")
                h4 Con oferta estructurada
                ul.lista-ul--color.fa-ul.color-secundario.mb-0
                  li
                    i.fas.fa-compass
                    | Atractivos+atractivos puestos en valor.
                  li
                    i.fas.fa-compass
                    | En función de los beneficios buscados por los turistas.
                  li
                    i.fas.fa-compass
                    span =Oferta competitiva.
              .tarjeta.bg6.p-3(x="90%" y="25%" numero="+")
                h4 Atractiva
                ul.lista-ul--color.fa-ul.color-secundario.mb-0
                  li
                    i.fas.fa-compass
                    | Capaz de atraer turistas/visitantes.
                  li
                    i.fas.fa-compass
                    | Visitarlo: objetivo del desplazamiento.
                  li
                    i.fas.fa-compass
                    | Para tener una experiencia turística.
                  li
                    i.fas.fa-compass
                    span DT= Espacio geográfico C/experiencias turísticas.

    .bloque-texto-c.color-secundario.bg7.p-4
      i.fas.fa-quote-right.mb-3
      h4.mb-2 Los “Destinos Turísticos Inteligentes” se conceptualizan como espacios innovadores que se apoyan en infraestructuras tecnológicas avanzadas. Estos destinos promueven un desarrollo territorial sostenible, asegurando accesibilidad para todos los visitantes y fomentando una interacción e integración fluida entre el turista y el entorno; así mismo, contribuyen de manera sustancial a mejorar la calidad de la experiencia turística (Beltrán, 2014).
      span - Beltrán, 2014
                

    Separador
    #t_3_1.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.1  Características del destino turístico

    .row.bgc-6.align-items-center.p-4.mb-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-end

          .col-lg-3.col-md-6.col-10.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t3/img4.png', alt='')
          .col-lg-8  
            SlyderF(columnas="col-md-6")
              .tarjeta.bg4.p-4
                p.text-center Presenta una unidad funcional que sirve como base para la gestión y el desarrollo de políticas turísticas.
              .tarjeta.bg4.p-4
                p.text-center Es el resultado del desplazamiento de personas hacia un espacio turístico específico.
              .tarjeta.bg4.p-4
                p.text-center Se configura como un espacio territorial homogéneo, con características geográficas e históricas similares. 
              .tarjeta.bg4.p-4
                p.text-center Ofrece una propuesta estructurada de atractivos, basada en un sistema integrado de recursos, actividades, servicios y empresas, todos orientados a la satisfacción del turista.
              .tarjeta.bg4.p-4
                p.text-center Cuenta con una marca integradora, reflejada en una imagen atractiva que engloba toda su oferta, facilitando su identificación  en distintos mercados.
              .tarjeta.bg4.p-4
                p.text-center Realiza una comercialización conjunta de sus productos y servicios turísticos.
              .tarjeta.bg4.p-4
                p.text-center Presenta un criterio de centralidad, lo que implica la capacidad del territorio para atraer y motivar el desplazamiento de personas hacia él.
              .tarjeta.bg4.p-4
                p.text-center Requiere de una administración y planificación cuidadosas, basadas en principios de sostenibilidad, para atender las necesidades y expectativas de los turistas o clientes.

    .row.mb-5(data-aos='fade')
      .col-lg-7.pe-lg-0
        .br-l.bg8.p-4.h-100.d-flex.align-items-center.mont1
          p.mb-0 Un destino turístico es una unidad funcional que facilita la gestión de políticas turísticas al integrar recursos, actividades y servicios para satisfacer a los visitantes. Caracterizado por su homogeneidad geográfica e histórica, proyecta una imagen atractiva a través de una marca unificada y se comercializa de forma conjunta. Su planificación estratégica se basa en principios de sostenibilidad para atender eficazmente las necesidades de turistas y clientes, destacándose por su capacidad de atraer personas.
      .col-lg-5.ps-lg-0.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/img5.png', alt='')
    
    .tit-tercer.row.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.pe-0
        img.pe-0(src='@/assets/curso/temas/t1/tit-tercer.svg', alt='') 
      .col-auto.ps-0.texto
        h3.mb-0 Ciclo de vida de un destino

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5.col-md-8.col-11.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/img6.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Muchos lugares, regiones o municipios que reciben turistas atraviesan un ciclo de desarrollo similar al de las especies vivas, pasando por distintas etapas desde su nacimiento hasta su consolidación; durante este proceso, los destinos turísticos experimentan modificaciones y transformaciones, de manera comparable a lo que sucede con la moda, los artistas y otros productos en general. 
          span.fw-bold Factores como la masificación, el deterioro ambiental, la monotonía en la oferta o la baja calidad de los servicios pueden hacer que un destino pierda popularidad. 
          | Por ello, los gestores turísticos deben monitorear continuamente en qué fase se encuentra el destino y tomar decisiones rápidas y efectivas para revitalizar, reposicionar y relanzar el destino, utilizando estrategias enfocadas en la innovación, la microsegmentación, la diversificación y el mejoramiento continuo para evitar su declive y eventual desaparición.

    .cajon.color-primario.bg2.p-4.mb-5(data-aos="fade-down")
      p.mb-0 El ciclo de vida de un destino turístico comienza con la etapa de lanzamiento, cuando comienzan a llegar los primeros visitantes, pues a medida que aumenta el número de turistas, se produce un crecimiento en la oferta de servicios para todos ellos, señalando que el destino está en fase de crecimiento. Posteriormente, el destino alcanza la madurez cuando la demanda se estabiliza y el crecimiento en la llegada de visitantes disminuye, es en esta etapa en donde, el destino puede estancarse, entrando en un periodo de saturación donde el número de turistas deja de crecer. Si los gestores no adoptan nuevas estrategias, el destino puede entrar en declive y eventualmente desaparecer como destino turístico.

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6
        .titulo-sexto.color-primario
          h5 Figura 10. 
          span Ciclo de vida de un destino
        figure
          img.mb-2(src='@/assets/curso/temas/t3/fig11.svg', alt=' La imagen presenta el ciclo de vida de un destino turístico, representado a través de una gráfica que sigue varias etapas: exploración, implicación, desarrollo, estancamiento y, finalmente, tres posibles trayectorias: rejuvenecimiento, estabilización o declive. El eje vertical refleja el crecimiento del destino, mientras que el eje horizontal indica el paso del tiempo. A la derecha, aparece una turista explorando un paisaje natural, lo que sugiere la relación entre la evolución del destino y la experiencia de los visitantes en diferentes fases de su desarrollo.')
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/img7.png', alt='')


    Separador
    #t_3_2.titulo-segundo.color-primario(data-aos='fade-right')
      h2 3.2  Agentes del destino

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/img8.jpg')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Se refiere a los distintos actores o partes involucradas en el desarrollo, gestión y operación de un destino turístico. Estos agentes incluyen entidades públicas, como gobiernos locales y organismos de promoción turística, así como entidades privadas, como empresas del sector turístico (hoteles, agencias de viajes, restaurantes), comunidades locales y turistas mismos. Cada uno de estos actores juega un rol específico en la creación de la oferta turística, en la toma de decisiones estratégicas, en la prestación de servicios y en la promoción del destino. Su coordinación y colaboración son esenciales para garantizar el éxito y la sostenibilidad del destino turístico.

    .row.bgc-2.align-items-center.p-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center

          .col-12
            .titulo-sexto.color-primario
              h5 Figura 11. 
              span Agentes del destino turístico          
          .col-lg-7  
            figure
              img(src='@/assets/curso/temas/t3/fig12.png', alt='La imagen ilustra a los principales agentes del destino turístico, representados por la administración pública, el sector privado y la población local. En el centro del esquema, se destaca la interacción entre estos tres actores, simbolizando su cooperación y colaboración en el desarrollo y gestión de un destino turístico. La imagen sugiere que la sinergia entre el gobierno, las empresas privadas y la comunidad local es fundamental para el éxito y sostenibilidad de cualquier destino turístico.')



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
