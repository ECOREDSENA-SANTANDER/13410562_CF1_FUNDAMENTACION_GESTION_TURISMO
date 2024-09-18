<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La siguiente síntesis busca ubicar al aprendiz dentro de las dinámicas y temáticas que se abordarán en este componente formativo, todo ello con la idea de recorrer cada uno de los conceptos y las políticas planteadas.

    .tarjeta.tarjeta--gris.p-lg-5.p-4
      .row.justify-content-center
        .col-lg-8.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="El esquema presenta una estructura temática que gira en torno al concepto de “Turismo sostenible y competitivo”. A partir de este concepto principal, se ramifican cuatro categorías clave. La primera es el “Sistema turístico”, que incluye a los “Actores del sistema turístico”. La segunda categoría se refiere a las “Superestructuras turísticas”, divididas en el sector público, privado, mixto y la sociedad civil. En tercer lugar, se encuentra el “Destino turístico”, que abarca tanto las “Características del destino” como los “Agentes del destino”. Finalmente, la cuarta categoría aborda la “Legislación y normatividad colombiana en turismo”, enfatizando la importancia del marco regulatorio para el desarrollo sostenible y competitivo del turismo en Colombia.")
      .row.justify-content-center
        .col-auto
          a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis



</template>

<script>
export default {
  name: 'Sintesis',
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
