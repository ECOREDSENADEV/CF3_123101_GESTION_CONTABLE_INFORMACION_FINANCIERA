<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Archivo y conservación de documentos
    
    p.mb-4 Con regularidad, las empresas utilizan gran cantidad de información para ser procesada y utilizada diariamente en la toma de decisiones administrativas y financieras.

    .row.mb-5
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .row.align-items-start
          .col-lg-5.pe-lg-0
            img(src="@/assets/curso/tema2/1.png").mx-auto
          .col-lg-7.ps-lg-0
            .bg-color-6.h-100.px-4.py-5(data-aos="fade-left")
              p.mb-0 Con el cierre de año y transcurrido varios periodos de tiempo, esta información permanece como inactiva, pero es imperativa su conservación, teniendo en cuenta que es utilizada como testimonio sobre registros de hechos pasados. En tal sentido, las empresas desarrollan medidas de conservación para asegurar la integridad de los documentos que reposan en el archivo.
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Ley general de archivos
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-5 En Colombia, la gestión documental se rige bajo varias leyes, normas que orientan a las empresas sobre cómo desarrollar la organización de los archivos. En este sentido, se aprobó la Ley 594 del 2000, conocida como Ley General de Archivos, estableciendo todos los criterios para conservar documentos (Archivo General de la Nación Colombia, 2020).
        
            .bg-color-26.p-4.tarjeta(data-aos="fade-left")
              p Con el fin de conocer las directrices establecidas en dicha norma, se sugiere profundizar ingresando al siguiente enlace:

              .row
                .col-lg-6
                  a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://atsgestion.net/ley-gestion-documental/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b> Ley gestion documental
                .col-lg-6
                  a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://www.archivogeneral.gov.co/consulte/recursos" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b> Normatividad sobre Gestión Documental Electrónica
        
        separador

        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Consecutivo, cronológico por asuntos
        
        p.mb-4 La forma en que se ordena uno o varios documentos es un proceso de disposición física. En un sentido estricto, es ordenar la documentación eligiendo qué documentos van primero y qué documentos van después. De esta forma, se organiza la gestión administrativa y la documental. Genera, en consecuencia, poder identificar una tarea de organización de documentos adecuadamente (Jiménez, 2003).

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-5.mb-3.mb-lg-0
            .bg-color-6.h-100.p-4(data-aos="fade-left")
              p La organización documental de forma cronológica hace referencia a una distribución acorde con fechas, considerando año, mes y día. Esta forma de clasificación es importante en la categorización de expedientes (Jiménez, 2003).
              p.mb-0 Un ejemplo de ordenamiento es la utilizada en expedientes que, por su naturaleza, deben seguir abiertos para consultas. Por ejemplo, historias laborales o expedientes de alumnos. Su forma de clasificación sería: primer apellido, segundo apellido, segundo nombre y primer nombre (Jiménez, 2003).
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
        
        .row.justify-content-center
          .col-lg-10
            div.bg-color-6.tarjeta.p-5
              .row.justify-content-center
                .col-lg-4.order-2.order-lg-1
                  figure
                    img(src="@/assets/curso/tema2/6.svg", data-aos="zoom-in")
                .col-lg-8(data-aos="fade-left").order-1.order-lg-2.mb-3.mb-lg-0
                  p Otra forma de organización es la temática, la cual consiste en establecer series y subseries documentales por temas (Jiménez, 2003). Por ejemplo:
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.fas.fa-chevron-right.bg-color-17
                      p.mb-0 Estadísticas.
                    li.mb-3.d-flex
                      i.fas.fa-chevron-right.bg-color-17
                      p.mb-0 Informes.
                    li.mb-3.d-flex
                      i.fas.fa-chevron-right.bg-color-17
                      p.mb-0 Informes de gestión.
                    li.mb-3.d-flex
                      i.fas.fa-chevron-right.bg-color-17
                      p.mb-0 Órdenes de pago.  
                  a.anexo.mb-4.bg-color-8(:href="obtenerLink('/downloads/CARTILLA_ORDENACION_DOCUMENTAL.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Anexo.</b> Cartilla de ordenacion documental.
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Tabla de retención documental
    
    p.mb-4 Las tablas de retención documental son listados con tipos de documentos en donde se establece el tiempo que debe permanecer un documento archivado en las diferentes etapas del ciclo vital de un documento, reconocidos desde tres tipos de archivos: 

    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .row.mb-5.justify-content-center
          .col-lg-9
            .row.justify-content-center.align-items-stretch.mb-3
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-6.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Archivo de gestión
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-6.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Archivo central
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-6.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Archivo histórico

            .row.mb-5
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
              .col-lg-8
                p(data-aos="fade-left") Las ventajas de aplicar las Tablas de Retención Documental son:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Facilitar el manejo de la información, ayuda a organizar y dar una estructura de la información.
                  li.mb-0.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Contribuye a la racionalización de la producción documental.
                  li.mb-0.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Garantiza la conservación de los documentos en las diferentes fases del archivo.
            .row.justify-content-center
              .col-lg-12
                div.bg-color-1.tarjeta
                  .row.mb-5.justify-content-center.p-4
                    .col-lg-4.order-2
                      figure
                        img(src="@/assets/curso/tema2/11.svg", data-aos="zoom-in")
                    .col-lg-8(data-aos="fade-left").order-1.mb-3.mb-lg-0
                      p Las tablas de retención documental se encuentran inmersas en formatos aplicados a las empresas.
                      ul.lista-ul--color
                        li.mb-0.d-flex
                          i.fas.fa-chevron-right.bg-color-17
                          p.mb-0 Presentan código, representado por la clasificación que presenta la información-
                        li.mb-0.d-flex
                          i.fas.fa-chevron-right.bg-color-17
                          p.mb-0 Presenta una columna de series documentales, donde van las diferentes clasificaciones de documentos, 
                        li.mb-0.d-flex
                          i.fas.fa-chevron-right.bg-color-17
                          p.mb-0 Se clasifica comúnmente en archivos de gestión y archivo central, estipulando el tiempo que va a ser custodiado
                        li.mb-0.d-flex
                          i.fas.fa-chevron-right.bg-color-17
                          p.mb-0 Actualmente, el procedimiento de conservación es la microfilmación, que presenta una columna de procedimientos, indicando los tiempos de custodia de los documentos.
        
        .row.mb-5
          .col-lg-3.order-2.order-lg-1
            figure
              img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
          .col-lg-9.order-1.order-lg-2.mb-3.mb-lg-0
            p(data-aos="fade-left") En las empresas comúnmente se utilizan códigos con ejemplos en números para establecer el orden jerárquico de la empresa:
            .row.justify-content-center.align-items-stretch.mb-3
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-23.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Gerencia
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-23.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/14.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Recursos humanos
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-23.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Contabilidad
            .row.justify-content-center.align-items-stretch.mb-3
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-23.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Almacén
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-23.tarjeta.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema2/17.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Gestión documental
            p Para identificar qué dependencia genera la documentación para conservar la información, considere la siguiente tabla:

            a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/3_Transparencia/10.6%20tablas%20de%20retencion/Trdjunio_2016.pdf" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b>  Tablas de Retención Documental - TRD
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Sistema de gestión electrónica de documentos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cada vez que progresan las tecnologías, se aplican al control documental de la información. Para ser implementado en una organización, debe existir la voluntad de la administración para destinar recursos para la implementación de las nuevas tecnologías al servicio de la gestión documental. En ese sentido, existen en el mercado programas que hacen más efectivos los procesos, mejorando el proceso en beneficio de las organizaciones. 



</template>

<script>
export default {
  name: 'Tema2',
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
