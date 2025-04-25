<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left").mb-4 El entorno empresarial actual exige una gestión rigurosa y sistemática de los documentos que respaldan los hechos económicos. En este contexto, los documentos contables adquieren una relevancia esencial, ya que sirven como soporte para el registro de las transacciones que afectan la situación financiera de una entidad. Comprender su naturaleza, requisitos y tipos es un paso fundamental para garantizar la transparencia y confiabilidad de la información contable, así como para cumplir con la normativa vigente en materia tributaria, laboral y comercial.
    
        .bg-color-1.tarjeta(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg").mx-auto
            .col-lg.p-4
              p.mb-0 Paralelamente, existen documentos no contables que, aunque no generan registros en los libros oficiales, cumplen funciones informativas clave en los procesos administrativos y logísticos de las organizaciones. Este tipo de documentación permite anticipar decisiones, establecer acuerdos y brindar trazabilidad en las operaciones internas y externas de la empresa. La correcta distinción entre ambos tipos de documentos contribuye al orden documental y a una adecuada gestión contable.
        
    .row.align-items-center(data-aos="fade-left")
      .col-lg-auto
        img(src="@/assets/curso/intro/3.svg").mx-auto
      .col-lg
        p.mb-0 Adicionalmente, se incluyen en este componente formativo los títulos valores y los libros contables, los cuales desempeñan un papel fundamental en la estructuración del sistema contable. También se aborda la legislación relacionada con el archivo y conservación de documentos, promoviendo buenas prácticas en la custodia de la información. Este enfoque integral permite al aprendiz adquirir una visión clara sobre los instrumentos que soportan las operaciones financieras y administrativas de cualquier organización.

</template>

<script>
export default {
  name: 'Introduccion',
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
