<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Documentos

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Hablar de los documentos en el mundo comercial es permitir la construcción de una contabilidad que brinda información de hechos económicos organizados de forma cronológica. Así mismo, posibilita organizar todos los procesos financieros en una empresa con ánimo o sin ánimo de lucro.

    separador

    .bg-full-width.bg-color-22
      .px-4.px-md-5.pb-md-3
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Contables y no contables, extracontables y títulos valores

        p.mb-5(data-aos="fade-left") Las transacciones comerciales deben reconocerse monetariamente para generar una serie de documentos contables, no contables y títulos de valores (Angulo, 2018). Por tanto, se profundizará en cada uno de ellos con el fin de lograr un aprendizaje significativo y continuar con el proceso contable de una empresa. Los documentos que se manejan en una entidad son los siguientes:

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Documentos contables
        
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Son los documentos que soportan una transacción comercial, entre ellos se encuentran (Angulo, 2018):
        
            .bg-color-white.p-4(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Factura cambiaria de compra y venta.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Factura electrónica.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Factura equivalente o documento equivalente a la factura de venta.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Comprobante de egreso o comprobante de pago.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Comprobante de ingreso o comprobante de caja.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Comprobante de venta con tarjetas de crédito.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Nómina.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Planilla Integrada de liquidación de aportes.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Declaración de renta, Impuesto al Valor Agregado (IVA), Retención en la Fuente, Impuesto de Industria y Comercio ICA.
        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-white.p-4(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Recibo de transferencia de fondos electrónicos.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Recibo de pago interbancario.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Comprobante de pago con tarjeta crédito.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Extractos bancarios.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Consignaciones bancarias.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Recibos de caja menor.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Notas débito y notas crédito.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Notas de contabilidad.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Comprobante de contabilidad. 

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Documentos no contables
        
        p.mb-5(data-aos="fade-left") Tienen una utilidad previa a la transacción comercial. Permiten al comprador tener una idea sobre un acto mercantil, son meramente informativos y no suscita un registro en la contabilidad (Angulo, 2018). Son ejemplos de documentos no contables los siguientes:

        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-6
            .row.justify-content-center.align-items-stretch.mb-3
              .col-lg-6.mb-3
                .bg-color-12.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Cotización
              .col-lg-6.mb-3
                .bg-color-12.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Pedido
            .row.align-items-stretch.mb-4
              .col-lg-6.mb-3
                .bg-color-12.p-1(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto
                      img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5.mb-2 Remisión

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Títulos valores
    
    p.mb-5(data-aos="fade-left")  Son documentos comerciales regidos por el Código de Comercio y el Código Civil Colombiano. En ellos se incorpora la figura del patrimonio de una persona natural o jurídica. En la realidad económica, esta herramienta dinamiza la economía en el comercio formal e informal. Ejemplos de títulos valores son:

    .row.mb-5.justify-content-center
      .col-lg-9
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.p-1(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Letra de cambio
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.p-1(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 El cheque
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-10.p-1(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 El pagaré
    
    p.mb-5(data-aos="fade-left") En la clasificación de títulos valores se encuentran:


    .row.mb-5
      .col-lg-8
        TabsA.color-acento-botones.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-1.p-5(titulo="Títulos valores a la orden")
            h4 Títulos valores a la orden
            p.mb-0 Mediante la figura del endoso, se transfiere la responsabilidad de pago de una persona a otra sin interesar quién es el que porte el documento, se agrega la expresión “a la orden”. Con la firma del endosante se transfiere responsabilidades al endosatario. Dos ejemplos son: la letra de cambio y el pagaré.
          .tarjeta.bg-color-1.p-5(titulo="Títulos al portador")
            h4 Títulos al portador
            p.mb-0 Donde el reconocimiento se hace a quien ostente el título, un ejemplo son los cheques al portador, poco usados por tema de seguridad, pero vigentes aún.
          .tarjeta.bg-color-1.p-5(titulo="Títulos valores nominativos")
            h4 Títulos valores nominativos
            p.mb-0 Estos títulos son expedidos a favor de una determinada persona. En el Código de Comercio se determina que la persona que gira, o transfiere el título debe realizar la inscripción del tenedor en el registro que lleva el creador del título (Secretaría del Senado, 2020. Art. 648).
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")

    .row
      .col-lg-7.order-2
        p Para mayor profundización en el tema se sugiere revisar los siguientes enlaces:
        .row
          .col-lg-10
            a.anexo.mb-4.bg-color-8(:href="obtenerLink('/downloads/266_4capitulo_ii_titulos_valores.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <b>Anexo.</b> Sistema general de títulos valores en la República de Colombia
            a.anexo.mb-4.mb-lg-0.bg-color-8(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr020.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Secretaría del Senado. Código de Comercio. Cap. II.
        
      .col-lg-5.order-1.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in")

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2  Definición, clasificación, características y diligenciamiento
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Factura cambiaria de compra y venta
        
        p.mb-5(data-aos="fade-left") Según lo determina el Estatuto Tributario, los requerimientos exigidos para la factura son (Secretaría del Senado, 2020. Art. 617):

        .row.mb-5.justify-content-center
          .col-lg-3.pe-lg-0
            figure
              img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
          .col-lg-7.ps-lg-0
            .bg-color-23.h-100.p-3
              ol.lista-ol--cuadro
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span a
                  | Estar denominada expresamente como factura de venta.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span b
                  | Apellidos y nombre o razón y NIT del vendedor o de quien presta el servicio.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span c
                  | *Modificado* Apellidos y nombre o razón social y NIT del adquirente de los bienes o servicios, junto con la discriminación del IVA pagado.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span d
                  | Llevar un número que corresponda a un sistema de numeración consecutiva de facturas de venta.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span e
                  | Fecha de su expedición.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span f
                  | Descripción específica o genérica de los artículos vendidos o servicios prestados.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span g
                  | Valor total de la operación.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span h
                  | El nombre o razón social y el NIT del impresor de la factura.
                li.bg-color-white.p-1
                  .lista-ol--cuadro__vineta
                    span i
                  | Indicar la calidad de retenedor del impuesto sobre las ventas.
                li.bg-color-white.p-1.mb-0
                  .lista-ol--cuadro__vineta
                    span j
                  | *- Declarado Inexequible Corte Constitucional-
        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Al momento de la expedición de la factura, los requisitos de los literales a), b), d) y h), deberán estar previamente impresos a través de medios litográficos, tipográficos o de técnicas industriales de carácter similar. Cuando el contribuyente utilice un sistema de facturación por computador o máquinas registradoras, con la impresión efectuada por tales medios se entienden cumplidos los requisitos de impresión previa. El sistema de facturación deberá numerar en forma consecutiva las facturas y se deberán proveer los medios necesarios para su verificación y auditoría.
        
            .bg-color-1.p-4(data-aos="fade-left")
              div.bg-color-white.mb-3
                p.mb-0 <b>PAR.</b> En el caso de las Empresas que venden tiquetes de transporte, no será obligatorio entregar el original de la factura. Al efecto, será suficiente entregar copia de la misma.
              div.bg-color-white
                p.mb-0 <b>PAR 2.</b> ** Adicionado- Para el caso de facturación por máquinas registradoras, será admisible la utilización de numeración diaria o periódica, siempre y cuando corresponda a un sistema consecutivo que permita individualizar y distinguir de manera inequívoca cada operación facturada, ya sea mediante prefijos numéricos, alfabéticos o alfanuméricos o mecanismos similares.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Factura electrónica
      
    p.mb-5(data-aos="fade-left")  Para la figura de facturación electrónica debe considerarse el Estatuto Tributario (Secretaría del Senado, 2020. Art. 617) y el Decreto 2242 (Sistema Único de Información Normativa, 2020):

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Según el Decreto 2242 (Sistema Único de Información Normativa, 2020. Art. 2) la factura electrónica: es el documento que soporta transacciones de venta de bienes y/o servicios y que operativamente tienen lugar a través de sistemas computacionales y/o soluciones informáticas que permiten el cumplimiento de las características y condiciones que se establecen en el presente Decreto, en relación con la expedición, recibo, rechazo y conservación. La expedición de la factura electrónica comprende la generación por el obligado a facturar y su entrega al adquirente.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo=" Obligado a facturar electrónicamente")
            p.mb-0 Persona natural o jurídica comprendida en el ámbito de este Decreto y que como tal debe facturar electrónicamente en las condiciones que se establecen en los artículos siguientes.
          div(titulo="Adquirente")
            p.mb-0 Persona natural o jurídica que adquiere bienes y/o servicios y debe exigir factura o documento equivalente y, que, tratándose de la factura electrónica, la recibe, rechaza, cuando sea del caso, y conserva para su posterior exhibición, en las condiciones que se establecen en el presente decreto.
          div(titulo="Proveedor tecnológico")
            p.mb-0 Es la persona natural o jurídica que podrá prestar a los obligados a facturar electrónicamente y/o a los adquirentes que opten por recibir la factura en formato electrónico de generación, cuando unos u otros así lo autoricen, los servicios inherentes a la expedición de la factura electrónica, incluida la entrega del ejemplar a la DIAN como se indica en el artículo 7° del presente Decreto, así como los servicios relacionados con su recibo, rechazo y conservación. El proveedor tecnológico deberá surtir el proceso de autorización por parte de la DIAN previsto en el artículo 12 de este decreto.
          div(titulo="Catálogo de Participantes de Factura Electrónica")
            p.mb-0 Es el registro electrónico administrado por la DIAN, que provee información de los obligados a facturar electrónicamente dentro del ámbito del presente Decreto, de los adquirentes que decidan recibirla electrónicamente y proveedores tecnológicos, con el fin de facilitar su operatividad.
          div(titulo="Código Único de Factura Electrónica")
            p El código único de factura electrónica para las facturas electrónicas, corresponde a un valor alfanumérico, obtenido a partir de la aplicación de un procedimiento que utiliza datos de la factura, que adicionalmente incluye la clave de contenido técnico de control generada y entregada por la DIAN.
            p.mb-0 El Código Único de Factura Electrónica deberá ser incluido como un campo más dentro de la factura electrónica. Este código deberá visualizarse en la representación gráfica de las facturas electrónicas y en los códigos bidimensionales QR definidos para tal fin.
    
    p.mb-5(data-aos="fade-left") La factura equivalente o documentos equivalentes a la factura de venta son (Angulo, 2018):

    .row.mb-5.justify-content-center
      .col-lg-3.pe-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-7.ps-lg-0
        .bg-color-23.h-100.p-4
          ol.lista-ol--cuadro
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span a
              | Boletas de máquinas registradoras.
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span b
              | Boletas de ingreso a espectáculos públicos.
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span c
              | Boletas de transporte tiquetes.
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span d
              | Recibos de pagos de matrículas y pensiones emitidas por establecimientos de educación reconocidos por el gobierno.
          p Para profundizar en las definiciones, características y diligenciamiento de los diferentes documentos, por favor revise el libro contabilidad financiera correlacionado con Normas Internacionales de Información Financiera NIIF, capítulo número 12, en el siguiente enlace:
          a.anexo.mb-4.mb-lg-0.bg-color-8(href="http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8047" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> Biblioteca Digital del SENA

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Documento equivalente
        
        p.mb-5(data-aos="fade-left") Es un documento similar a la factura, no es obligatorio, pero se debe tener como soporte. Algunos ejemplos se encuentran en empresas inscritas al régimen simple que no tienen obligación de facturar:

        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p Comerciantes minoristas, siempre y cuando no excedan los topes de venta. Algunos ejemplos son: los comerciantes de productos del agro sin transformación y cuya cuantía no supere los niveles permitidos.
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p Personas naturales con vínculos laborales.
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p Las empresas de servicio público de transporte urbano de pasajeros.
              .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center
                img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p Tiquetes de transporte de pasajero de forma aérea.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema1/18.png', alt='Imagen de apoyo', data-aos="zoom-in")
    
    .bg-full-width.bg-color-24
      .px-4.px-md-5.pb-md-3
        h3.bg-color-4.tarjeta.p-3.mb-5 Requisitos del documento equivalente

        p.mb-5(data-aos="fade-left") Son todos aquellos inmersos en la resolución de la Dirección de Impuestos y Aduanas Nacionales DIAN 000042 del 2020 en el artículo 13.

        .row.mb-5.justify-content-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
          .col-lg-7.bg-color-6.p-4.tarjeta(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Estar denominado expresamente como sistema P.O.S.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Debe presentar Número de Identificación Tributaria (NIT).
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Debe llevar un número consecutivo.
                li.mb-3.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Especificaciones de la transacción como: cantidad, unidad de medida,identificación de bienes y servicios, indicar la calidad de agente retenedor del impuesto sobre las ventas y demás.

        .row.mb-5.justify-content-center
          .col-lg-10.bg-color-25.p-4.tarjeta
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/24.png", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5.mb-0 Recordemos que una factura al contado se registra
                p.mb-0 Con un debito en la caja y un crédito en la cuenta comercio al por mayor y por menor (ingresos ordinarios), cuando es gravada la mercancía se debe reconocer la cuenta impuestos por pagar, acreditando.
        
        .row.mb-5
          .col-lg-5.order-2
            figure
              img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
          .col-lg-7.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Cuando se reconocen las compras, se registra con un debito en las compras al contado, se reconoce la cuenta de impuestos al valor agregado IVA, debitando y aplicando la tarifa vigente y disminuyen las cuentas de efectivo (caja o banco).
        
            .row.align-items-start.mb-3(data-aos="fade-left")
              .col-lg-auto
                img.d-none.d-lg-flex(src="@/assets/componentes/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Otro ejemplo de documento equivalente son los expedidos por máquinas registradoras, las boletas de espectáculos públicos y todos los requisitos contemplados en el Articulo 771-2 del Estatuto Tributario (Secretaría del Senado, 2020).
            .bg-color-26.tarjeta.p-4(data-aos="fade-left")
              p De igual forma, puede observar el ejemplo que se encuentra registrado en la siguiente página web:
              a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://www.icbf.gov.co/el-instituto/sistema-integrado-de-gestion/formato-documento-equivalente-factura-v3" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> Secretaría del Senado. Código de Comercio. Cap. II.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Comprobante de egreso o comprobante de pago
    
    p.mb-5(data-aos="fade-left") Comúnmente se conoce como orden pago, soporte que respalda los desembolsos de efectivo, por norma de control interno realizados mediante cheques. Los comprobantes de egreso se elaboran por duplicados, para anexar a la cuenta que respalda la entrega del título valor, que es el cheque con que se efectúa el pago.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-12.p-4(data-aos="fade-left")
          h5 Características
          p Deben registrarse de forma ordenada y debe expresar de forma clara la transacción registrada, donde relacione:
          .row.justify-content-center
            .col-lg-5
              ul.lista-ul--color
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Número del comprobante, ciudad origen.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Fecha.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 El valor en números y letras.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 El registro contable, el número de cheque.
            .col-lg-5
             ul.lista-ul--color
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Datos del beneficiario como: identificación, firma y fecha en que se recibe.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Las firmas de elaboración, aprobado por, contabilizado por.
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Comprobante de ingreso o comprobante de caja
        
        p.mb-5(data-aos="fade-left") Este soporte de contabilidad representa los dineros recibidos en la empresa para posteriormente ser consignados en los bancos. Se realizan con dos copias, una que es entregada al cliente, respaldando el efectivo recibido y una copia para respaldar el valor del comprobante y generar el respectivo devengo contable, representa abonos a las ventas a plazos.

        .row.mb-5.justify-content-center
          .col-lg-3.ps-0.order-2
            figure
              img(src="@/assets/curso/tema1/28.svg", data-aos="zoom-in")
          .col-lg-7.pe-0.order-1.mb-3.mb-lg-0
            .bg-color-1.h-100.p-3
              h5 Características
              ul.lista-ul--color
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Nombre de la empresa, número de identificación tributaria NIT.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Número consecutivo.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Dirección y datos generales de la empresa.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Ciudad y fecha donde se realiza la transacción.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 El concepto por el cual se recibe el efectivo.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 El valor en números y letras recibidos.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 El número de cheque y el banco de origen del título valor.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Debe ser entregado al cliente con firma y sello de la empresa
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 El registro contable con la afectación a las cuentas respectivas.
                li.mb-1.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Firmas de quien elaboró, aprobó y contabilizó.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Comprobante de venta con tarjeta de crédito
    
    .bg-full-width.bg-color-21
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/tema1/30.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Es un medio de pago convencional, donde se utiliza la figura de tarjeta habiente, utilizando un datafono para recibir pagos. Es una forma segura para no manejar efectivo, el banco o entidad financiera cobra a la empresa una comisión por el uso de este medio electrónico. Cuando se realiza la transacción se debe guardar copia de la transacción y anexar a la venta, como soporte.
        
            .row.mb-5.justify-content-center
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/29.png", data-aos="zoom-in")
              .col-lg-8.bg-color-3.p-4.tarjeta(data-aos="fade-left")
                h5.mb-4 Características
                p.mb-5 Debe definir la ciudad y el nombre del establecimiento comercial, fecha y plazos de pagos, es decir el número de cuotas para ser pagadas por él cuenta habiente, si es tarjeta de crédito. Si es cuenta de ahorro, la transacción descuenta de forma automática y por medio de correo electrónico se notifica al cliente, comúnmente el reporte es enviado al dispositivo móvil del cliente por parte de la entidad financiera.
                a.anexo.bg-color-8(:href="obtenerLink('/downloads/soportes-contables-en-colombia.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p <b>Anexo.</b> Comprobante de Ingreso o comprobante de caja

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Nómina

        p.mb-5(data-aos="fade-left") Es un soporte contable en el cual la empresa respalda el pago de empleados por concepto de sueldos a los colaboradores de la empresa de forma mensual, quincenal, cada diez días o, como se haya pactado el pago de sueldos.
        .row.mb-5.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/31.png", data-aos="zoom-in")
          .col-lg-8.bg-color-6.p-4.tarjeta(data-aos="fade-left")
            h5.mb-4 Características
            ul.lista-ul--color.mb-5
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Presenta columnas que representan nombres, apellidos y documento de identidad.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 En las columnas se encuentra el devengado y los descuentos que por ley tienen los empleados.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Columna de horas extra y comisiones.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Presenta nombre de la empresa, NIT de la empresa, dirección y periodo de pago.
        
            a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://www.gerencie.com/formato-en-excel-para-liquidar-la-nomina.html" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Comprobante de Nómina

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Planilla integrada de liquidación de aportes

        
        .row.mb-5.justify-content-center
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/32.svg", data-aos="zoom-in")
          .col-lg-8(data-aos="fade-left").order-1.mb-3.mb-lg-0
            p.mb-5(data-aos="fade-left") Es un soporte en el cual las empresas registran las diferentes novedades de los empleados, frente a salud, pensiones, riesgos laborales, cajas de compensación, se realiza por intermedio de un tercero y se trasfiere a las diferentes empresas de seguridad social, es un documento que brinda la información a empleados y entidades que vigilan el pago de seguridad social.
            .bg-color-23.p-4.tarjeta
              h5.mb-4 Características
              p Registra las diferentes novedades por conceptos de variaciones transitorias en los salarios de los empleados como: comisiones, sueldos, incapacidades, las cuales modifican la base para calcular las deducciones en la nómina de las empresas.
          
              a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://www.minsalud.gov.co/sites/rid/paginas/freesearchresults.aspx?k=&k=ugpp" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> Planilla integrada de liquidación de aportes
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Declaración de impuestos
    
    p.mb-5(data-aos="fade-left") Cada vez que se efectúan compras y ventas de productos o bienes gravados, es obligación de las empresas descontar valores cuantificables, acorde con la base gravable y tarifas aplicadas, descontadas y trasferidas a la administración de impuestos y aduanas nacionales DIAN, en las fechas establecidas en el calendario tributario actualizado de cada año fiscal.

    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/33.png", data-aos="zoom-in")
      .col-lg-8.bg-color-10.p-4.tarjeta(data-aos="fade-left")
        h5.mb-4 Características
        p Es un medio de confrontación de los pagos efectuados al gobierno nacional, distrital o municipal por concepto de tributos. Son ejemplos de soportes los pagos por concepto de las declaraciones de:
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/34.svg", data-aos="zoom-in")
          .col-lg-8.mb-3.mb-lg-0
            ul.lista-ul--color.mb-5
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Impuesto al Valor Agregado (IVA).
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Retención en la Fuente.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Impuesto de Renta y Complementario.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Impuesto de Industria y Comercio.
        
            a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://www.dian.gov.co/atencionciudadano/formulariosinstructivos/Paginas/default.aspx" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Dirección de Impuestos y Aduanas Nacionales (DIAN).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Recibo de transferencia de fondos y pago interbancario
    
    p.mb-5(data-aos="fade-left") Es una forma de agilizar negocios entre las entidades financieras y/o clientes. Actualmente se utilizan con mayor frecuencia, teniendo en cuenta que se realiza desde un dispositivo móvil con acceso a internet, que genera garantía y seguridad en el momento de realizar la transacción.fiscal.

    .row.mb-3.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/36.svg", data-aos="zoom-in")
      .col-lg-7.bg-color-10.p-4(data-aos="fade-left")
        h5.mb-4 Características
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Presenta una cuenta de origen del banco que gira o recibe transferencias.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Una cuenta de destino, al banco que transfiriere recursos.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Valor a transferir.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Fecha, que se genera automáticamente.
          li.mb-2.d-flexli.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Por el monto de la transacción se genera un documento soporte para registrar en contabilidad, este documento se genera de forma automática.
    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/37.svg", data-aos="zoom-in")
      .col-lg-7.bg-color-12.p-4(data-aos="fade-left")
        p Para diligenciar se tiene en cuenta:
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Nombre o razón social.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Dirección.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Ciudad y teléfono.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Datos de la cuenta bancaria, banco, cuenta, número de cuenta, tipo de cuenta.
          li.mb-2.d-flexli.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Titular de la cuenta.
          li.mb-2.d-flexli.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Autorizaciones y firmas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Extractos bancarios

    .row.mb-5.justify-content-center
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/39.svg", data-aos="zoom-in")
      .col-lg-7(data-aos="fade-left").order-1.mb-3.mb-lg-0
        p Documento donde se registran, por parte de la entidad financiera, todos los movimientos efectuados durante el mes. Se registran pagos de cheques, transferencias, notas bancarias, gravámenes financieros. Es el documento base para realizar la conciliación bancaria y el control del efectivo.
        .bg-color-27.p-4.tarjeta
          h5.mb-4 Características
          p Posibilita la elaboración de la conciliación bancaria, bajo los métodos comúnmente utilizados. Los componentes de los extractos bancarios son:
          .row
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/38.svg", data-aos="zoom-in")
            .col-lg-7.mb-3.mb-lg-0
              ul.lista-ul--color.mb-5
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Saldos iniciales.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Intereses.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Avances.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Saldo final.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Cargos y abonos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Consignaciones bancarias
    
    p.mb-5(data-aos="fade-left") Cada vez que se consigna efectivo en las entidades financieras de la empresa, el banco expide un soporte denominado comprobante de consignación, el cual sirve para registrar el hecho económico en la contabilidad. La contabilización se realiza debitando la cuenta de ahorro o cuenta corriente y acreditando la cuenta Efectivo (caja), para disminuir el valor del saldo de esta.

    .row.mb-5.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/40.png", data-aos="zoom-in")
      .col-lg-7.bg-color-12.p-4.tarjeta(data-aos="fade-left")
        h5.mb-4 Características
        p El soporte debe contener el registro emitido por la máquina registradora del banco, el sello y la firma de la persona autorizada en el banco. El documento contiene los siguientes elementos:
       
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.p-1(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/41.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Ciudad y fecha.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.p-1(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/42.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Número de la cuenta bancaria.
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.p-1(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/43.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Valor a consignar en números o letras.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.p-1(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/44.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Nombre de quien consigna y un número telefónico.
        a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://marthajimenezmartinez.blogspot.com/2011/10/consignacion.html" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b>  Consignaciones bancarias.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Recibos de caja menor
    
    p.mb-5(data-aos="fade-left") Las empresas necesitan realizar pagos mínimos, acorde con los montos establecidos y registrados en las políticas contables y en la resolución interna, llamada gastos de caja menor. Allí se establecen los numerales de pago, los montos y la persona responsable del manejo de dicho fondo.

    .row.mb-5.justify-content-center
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/tema1/46.png", data-aos="zoom-in")
      .col-lg-7.bg-color-1.p-4.tarjeta.order-1.mb-3.mb-lg-0(data-aos="fade-left")
        h5.mb-4 Características
        p.mb-4 Es un fondo utilizado para cubrir gastos mínimos, requeridos en el desarrollo del objeto social de la empresa. Al diligenciar se debe observar:
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/45.svg", data-aos="zoom-in")
          .col-lg-8
            ul.lista-ul--color.mb-5
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Registrar ciudad y fecha.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Pagado al beneficiario.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Valor y concepto.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Soporte de pago anexo.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Consecutivo.
        p.mb-0 Se deben registrar contablemente, debitando los gastos autorizados y acreditando la cuenta caja.


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Notas débito y crédito
    
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Nota debito")
        .row
          .mb-4.mb-md-0
            h4 Nota debito
            p Es un documento contable que reconoce valores de la empresa a favor de sus clientes, debido a errores u omisiones. Por ejemplo: intereses cobrados de forma adicional sobre facturas de compra y venta o notas débito que disminuyen el saldo de la cuenta bancaria de la empresa.
            p Características
            p Es un fondo utilizado para cubrir gastos mínimos, requeridos en el desarrollo del objeto social de la empresa. Al diligenciar se debe observar:
            ul.lista-ul--color.mb-5.ms-3
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Debe contener nombre e identificación.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Consecutivo.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Concepto.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Valor.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Firmas de personal responsable.
        
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/47.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Nota crédito")
        .row
          .mb-4.mb-md-0
            h4 Nota crédito
            p Soporte contable para reconocer disminuciones por concepto de descuentos no incluidos en las facturas, es utilizado cuando se presentan las devoluciones de mercancías, se elabora con original y copia, para ser conservado en contabilidad y la copia entregada al cliente.
            p Características
            ul.lista-ul--color.mb-3.ms-3
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Documento utilizado para reconocer cambios en las facturas,evidencia dineros.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Devueltos al cliente por inconformidades.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Utilizado como soporte cuando se anulan facturas.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Valor.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Corrige datos, valores iniciales de las facturas.
            p Contenido
            ul.lista-ul--color.mb-3.ms-3
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Ciudad y fecha.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Consecutivo.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Descripción o detalle.
              li.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Firmas autorizadas.
            a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://doramariam.wixsite.com/mediatecnica11/about?lightbox=dataItem-jt5341ot" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b>  Nota crédito
        
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/48.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Notas de contabilidad
    
    p.mb-5(data-aos="fade-left") También denominada notas internas, utilizadas para enmendar errores o realizar ajustes contables. Se utiliza en aquellas operaciones que carecen de un soporte específico.

    .bg-full-width.bg-color-21
      .px-4.px-md-5.pb-md-3
        .row.mb-5
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/49.svg', style="max-width: 90px", alt='Texto que describa la imagen')

              h3.text-center.mb-4 Características
              ul.lista-ul--color.mb-3.ms-3
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Reconoce la disminución de un activo en la depreciación.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Registra las amortizaciones en los créditos bancarios como control.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Se utiliza para hacer ajustes en el cierre contable.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Utilizado solo por el área de contabilidad.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
            //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta--boton.bg-color-3.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema1/50.svg', style="max-width: 90px", alt='Texto que describa la imagen')

              h3.text-center.mb-4 Contenido
              ul.lista-ul--color.mb-3.ms-3
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Presenta el detalle.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 La fecha de elaboración.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 La imputación contable.
                li.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Las firmas responsables.
          .col-sm-6.col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/51.svg", data-aos="zoom-in")

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Comprobantes de contabilidad
    
        p.mb-5(data-aos="fade-left") Representa la base en la elaboración de estados financieros, como resultado debe presentar sumas iguales en los débitos y créditos de una transacción comercial.

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/52.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
              div(titulo=" Características")
                p.mb-0 Presentan un consecutivo para vincular con las operaciones comerciales de forma cronológica.
                ul.lista-ul--color.mb-3.ms-3
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Fecha.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Detalle.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Cuantía.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Registro contable.
              div(titulo="Son ejemplos de comprobantes de contabilidad")
                ul.lista-ul--color.mb-3.ms-3
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Comprobantes de apertura o de inicio: donde se registra aporte inicial de socios o accionistas.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Comprobantes de ingreso: representa el manejo de efectivo que ingresa a la empresa por conceptos del desarrollo del objeto social de la organización.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Comprobantes de egreso: representa las salidas de dinero, incluye pagos realizados a proveedores.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Comprobantes de nómina: en el pago de salarios a empleados.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Comprobantes débito y crédito: representan mayores valores a favor de clientes o modificaciones a facturas.
              div(titulo="En el diligenciamiento se debe")
                ul.lista-ul--color.mb-3.ms-3
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Registrar: fecha, año, mes y día.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Datos de la persona o empresa a realizar el comprobante, datos del contacto, dirección y correo electrónico.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Descripción de la transacción.
                  li.d-flex.d-flex
                    i.fas.fa-chevron-right.bg-color-17
                    p.mb-0 Valor de la transacción económica.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Títulos valores
    
    p El Código de Comercio define los títulos valores como:
      
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/53.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bloque-texto-c.bg-color-8.p-4
          i.fas.fa-quote-right
          h2.mb-2 Documentos necesarios para legitimar el ejercicio del derecho literal y autónomo que en ellos se incorpora. Pueden ser de contenido crediticio, corporativos o de participación y de tradición o representativos de mercancías..
          span - (Secretaría del Senado, 2020. Art. 619)
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/54.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El Código del Comercio establece (Secretaría del Senado, 2020. Art. 621):
        p(data-aos="fade-left") Además de lo dispuesto para cada título-valor en particular, los títulos-valores deberán llenar los requisitos siguientes:

        .col-lg-7.mb-3
          .bg-color-10.h-100.p-3
            ol.lista-ol--cuadro
              li.bg-color-white.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span a
                | La mención del derecho que en el título se incorpora.
              li.mb-0.bg-color-white.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span b
                | La firma de quien lo crea.


        p La firma podrá sustituirse, bajo la responsabilidad del creador del título, por un signo o contraseña que puede ser mecánicamente impuesto.
        .bg-color-12.p-4.tarjeta.mb-3(data-aos="fade-left")
          p.mb-0 Si no se menciona el lugar de cumplimiento o ejercicio del derecho, lo será el del domicilio del creador del título; y si tuviere varios, entre ellos podrá elegir el tenedor, quien tendrá igualmente derecho de elección si el título señala varios lugares de cumplimiento o de ejercicio. Sin embargo, cuando el título sea representativo de mercaderías, también podrá ejercerse la acción derivada del mismo en el lugar en que estas deban ser entregadas.
        p(data-aos="fade-left") Si no se menciona la fecha y el lugar de creación del título, se tendrán como tales la fecha y el lugar de su entrega.
    
    h3.bg-color-4.tarjeta.p-3.mb-5 Características

    p.mb-5(data-aos="fade-left") Según el Código del Comercio (Secretaría del Senado, 2020. Art. 622):

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/55.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-27.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Si en el título se dejan espacios en blanco, cualquier tenedor legítimo podrá llenarlos, conforme a las instrucciones del suscriptor que los haya dejado, antes de presentar el título para el ejercicio del derecho que en él se incorpora.

          p.mb-0 Una firma puesta sobre un papel en blanco, entregado por el firmante para convertirlo en un título-valor, dará al tenedor el derecho de llenarlo. Para que el título, una vez completado, pueda hacerse valer contra cualquiera de los que en él han intervenido antes de completarse, deberá ser llenado estrictamente de acuerdo con la autorización dada para ello.

        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/componentes/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Si un título de esta clase es negociado, después de llenado, a favor de un tenedor de buena fe exenta de culpa, será válido y efectivo para dicho tenedor y este podrá hacerlo valer como si se hubiera llenado de acuerdo con las autorizaciones dadas.
        
    h3.bg-color-4.tarjeta.p-3.mb-5 Clases

    p.mb-5(data-aos="fade-left") Según el Código Comercio, se encuentran títulos: nominativos, a la orden y al portador.

    .row.mb-5
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/56.svg', alt='Texto que describa la imagen')

          h3.text-center Nominativos
          p.text-center (Secretaría del Senado, 2020. Art. 648):
          p.text-center El título-valor será nominativo cuando en él o en la norma que rige su creación se exija la inscripción del tenedor en el registro que llevará el creador del título. Solo será reconocido como tenedor legítimo quien figure, a la vez, en el texto del documento y en el registro de este.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/57.svg', alt='Texto que describa la imagen')

          h3.text-center A la orden
          p.text-center (Secretaría del Senado, 2020. Art.651):
          p.text-center Los títulos-valores expedidos a favor de determinada persona, en los cuales se agregue la cláusula “a la orden” o se exprese que son transferibles por endoso, o se diga que son negociables, o se indique su denominación específica de título-valor, serán a la orden y se transmitirán por endoso y entrega del título, sin perjuicio de lo dispuesto en el artículo 648.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.color-primario.p-4.h-100
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/58.svg', alt='Texto que describa la imagen')

          h3.text-center Al portador
          p.text-center (Secretaría del Senado, 2020. Art. 668):
          p.text-center Son títulos al portador los que no se expidan a favor de persona determinada, aunque no incluyan la cláusula “al portador”, y los que contengan dicha cláusula. La simple exhibición del título legitimará al portador y su tradición se producirá por la sola entrega.
    
    p.mb-5(data-aos="fade-left") Clases de títulos valores más utilizados:

    h3.bg-color-4.tarjeta.p-3.mb-5 Letra de cambio

    p.mb-5(data-aos="fade-left") Es un documento de carácter crediticio, con la representación de las figuras como son: girador y librador que pactan un valor, para ser entregado en una fecha determinada.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/59.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Requisitos:
        p(data-aos="fade-left").mb-0 Según el Código de Comercio (Secretaría del Senado, 2020. Art. 621):
        p(data-aos="fade-left") Además de lo dispuesto para cada título-valor en particular, los títulos-valores deberán llenar los requisitos siguientes:
        .row.mb-3
          .col-lg-7
            .bg-color-10.h-100.p-3
              ol.lista-ol--cuadro
                li.bg-color-white.p-1.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | La mención del derecho que en el título se incorpora
                li.mb-0.bg-color-white.p-1.d-flex
                  .lista-ol--cuadro__vineta
                    span 2
                  | La firma de quien lo crea.
        p La firma podrá sustituirse, bajo la responsabilidad del creador del título, por un signo o contraseña que puede ser mecánicamente impuesto.

    .bg-full-width.bg-color-22
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center
          .col-lg-10
            div.bg-color-23.tarjeta
              .row.mb-5.justify-content-center.p-4
                .col-lg-5.order-2
                  figure
                    img(src="@/assets/curso/tema1/60.png", data-aos="zoom-in")
                .col-lg-7(data-aos="fade-left").order-1.mb-3.mb-lg-0
                  p Si no se menciona el lugar de cumplimiento o ejercicio del derecho, lo será el del domicilio del creador del título; y si tuviere varios, entre ellos podrá elegir el tenedor, quien tendrá igualmente derecho de elección si el título señala varios lugares de cumplimiento o de ejercicio. Sin embargo, cuando el título sea representativo de mercaderías, también podrá ejercerse la acción derivada del mismo en el lugar en que estas deban ser entregadas.
                  p.mb-5 Si no se menciona la fecha y el lugar de creación del título, se tendrán como tales la fecha y el lugar de su entrega.
              
                  a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://marthajimenezmartinez.blogspot.com/2011/10/letra-de-cambio.html" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p <b>Enlace web.</b> Letra de cambio

        h3.bg-color-4.tarjeta.p-3.mb-5 Pagaré a la orden

        p.mb-5(data-aos="fade-left") Es una promesa de pago, es un documento crediticio que respalda una unidad económica en una fecha determinada y, con un interés adicional.

        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/61.svg", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left") <b>Requisitos:</b> (Secretaría del Senado, 2020. Art. 709):
            p(data-aos="fade-left") El pagaré debe contener, además de los requisitos que establece el Artículo 621, los siguientes
            .row.mb-3
              .col-lg-12.ms-3
                ol.lista-ol--cuadro
                  li.mb-0.p-1.d-flex
                    .lista-ol--cuadro__vineta
                      span 1
                    | La promesa incondicional de pagar una suma determinante de dinero;
                  li.mb-0.p-1.d-flex
                    .lista-ol--cuadro__vineta
                      span 2
                    | El nombre de la persona a quien deba hacerse el pago;
                  li.mb-0.p-1.d-flex
                    .lista-ol--cuadro__vineta
                      span 3
                    | La indicación de ser pagadero a la orden o al portador, y
                  li.mb-0.p-1.d-flex
                    .lista-ol--cuadro__vineta
                      span 4
                    | La forma de vencimiento.

        h3.bg-color-4.tarjeta.p-3.mb-5 Cheque

        p.mb-5(data-aos="fade-left") Un título valor de carácter crediticio respalda unidades monetarias, mediante el uso de una entidad financiera.
        
        .row.justify-content-center.mb-5
          .col-lg-10
            div.bg-color-6.tarjeta.p-5
              p <b>Características</b> (Secretaría del Senado, 2020. Art.712):
              p El cheque sólo puede ser expedido en formularios impresos de cheques o chequeras y a cargo de un banco. El título que en forma de cheque se expida en contravención a este artículo no producirá efectos de título-valor.

              .row.justify-content-center
                .col-lg-4.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema1/62.png", data-aos="zoom-in")
                .col-lg-8(data-aos="fade-left")
                  p <b>Artículo</b> (Secretaría del Senado, 2020. Art. 718):
                  p Los cheques deberán presentarse para su pago:
                  ol.lista-ol--cuadro
                    li.mb-0.p-1.d-flex
                      .lista-ol--cuadro__vineta
                        span 1
                      | Dentro de los quince días a partir de su fecha, si fueren pagaderos en el mismo lugar de su expedición;
                    li.mb-0.p-1.d-flex
                      .lista-ol--cuadro__vineta
                        span 2
                      | Dentro de un mes, si fueren pagaderos en el mismo país de su expedición, pero en lugar distinto al de ésta;
                    li.mb-0.p-1.d-flex
                      .lista-ol--cuadro__vineta
                        span 3
                      | Dentro de tres meses, si fueren expedidos en un país latinoamericano y pagaderos en algún otro país de América Latina, y
                    li.mb-0.p-1.d-flex
                      .lista-ol--cuadro__vineta
                        span 4
                      | Dentro de cuatro meses, si fueren expedidos en algún país latinoamericano para ser pagados fuera de América Latina.

    h3.bg-color-4.tarjeta.p-3.mb-5 Factura cambiaria

    p.mb-5(data-aos="fade-left") (Secretaría del Senado, 2020): Registra las ventas de mercancías que pueden ser al contado o a plazos.

    
    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.bg-color-1.p-5(titulo="Artículo 772.")
        h4 Artículo 772.
        p.mb-0 Artículo modificado por el artículo 1 de la Ley 1231 de 2008. El nuevo texto es el siguiente:> Factura es un título valor que el vendedor o prestador del servicio podrá librar y entregar o remitir al comprador o beneficiario del servicio.
      .tarjeta.bg-color-1.p-5(titulo="Artículo 773")
        h4 Artículo 773.
        p Artículo modificado por el artículo 2 de la Ley 1231 de 2008. El nuevo texto es el siguiente:> Una vez que la factura sea aceptada por el comprador o beneficiario del servicio, se considerará, frente a terceros de buena fe, exenta de culpa que el contrato que le dio origen ha sido debidamente ejecutado en la forma estipulada en el título.
        p.mb-0 El comprador o beneficiario del servicio deberá aceptar, de manera expresa, el contenido de la factura, por escrito colocado en el cuerpo de esta o en documento separado, físico o electrónico. Igualmente, deberá constar el recibo de la mercancía o del servicio por parte del comprador del bien o beneficiario del servicio, en la factura y/o en la guía de transporte, según el caso, indicando el nombre, identificación o la firma de quien recibe, y la fecha de recibo. El comprador del bien o beneficiario del servicio no podrá alegar falta de representación o indebida representación por razón de la persona que reciba la mercancía o el servicio en sus dependencias, para efectos de la aceptación del título valor.

    h3.bg-color-4.tarjeta.p-3.mb-5 Bonos

    p.mb-5(data-aos="fade-left") Títulos valores que representan inversiones en emisiones realizadas por el Estado para financiarse, son inversiones de carácter público.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/63.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-12.p-4.h-100(data-aos="fade-left")
          h5.mb-5 Títulos emitidos por entidades públicas: 
          p 4.1.	Copia de la Resolución y otros actos administrativos, por medio de los cuales el Ministerio de Hacienda y Crédito Público y demás organismos competentes autorizaron la respectiva emisión;
          p 4.2.	Copia de la justificación técnica, económica y social de la emisión, su plan de financiación por fuentes de recursos y el cronograma de gastos anuales en moneda local y extranjera. 
          p.mb-0 4.3.	Las condiciones financieras y las garantías de los valores emitidos por las entidades públicas deberán sujetarse a lo dispuesto en las Resoluciones Externas No. 1 y No. 11 de 1993 de la Junta Directiva del Banco de la República, o a las normas que las modifiquen o sustituyan. 
    
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/64.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        h5.mb-5 Características:
        p Art. 1.1.1.10.- Adicionado Res. 470 del 16 de junio de 2005 (Legis, 2020. Art. 1). Inscripción automática de títulos emitidos por Fondos Comunes Especiales, administrados por sociedades fiduciarias, que cumplan con la normatividad aplicable a los fondos de capital privado de que trata esta resolución. Se entenderán inscritos en el Registro Nacional de Valores e Intermediarios para todos los efectos legales y autorizada la oferta pública, los títulos que emitan los fondos comunes especiales administrados por sociedades fiduciarias, cuando medie solicitud expresa del administrador y el reglamento autorizado por la Superintendencia Bancaria cumpla con los requisitos esenciales previstos en la presente resolución para los fondos de capital privado.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/65.svg", data-aos="zoom-in")
      .col-lg-7
        .bg-color-27.p-4.h-100(data-aos="fade-left")
          p Para el efecto, el acto administrativo de autorización del reglamento que profiera la Superintendencia Bancaria deberá prever expresamente el cumplimiento de los requisitos esenciales previstos en la presente resolución para los fondos de capital privado.
          p.mb-0 De manera previa a la realización de la oferta pública, deberá presentarse ante el Registro Nacional de Valores e Intermediarios, los documentos de que trata el numeral 2º del artículo 1.1.1.1. de la presente resolución, y dos ejemplares del prospecto de colocación. 
    
    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.bg-color-1.p-5(titulo="Parágrafo 1º")
        h4 Parágrafo 1º
        p.mb-0 Los documentos que incorporen los derechos de los suscriptores, en los fondos comunes especiales administrados por una sociedad fiduciaria que cumplan con los requisitos esenciales previstos en la presente resolución para los fondos de capital privado, para efectos de la inscripción en el Registro de Valores e Intermediarios, tendrán el carácter y prerrogativas propias de los títulos valores, a excepción de la acción cambiaria de regreso.
      .tarjeta.bg-color-1.p-5(titulo="Parágrafo 2º")
        h4 Parágrafo 2º.
        p El facsímil del título, o modelo de este debe precisar claramente: 
        div.ms-3.mb-3
          p.mb-0 a)	El nombre de la sociedad fiduciaria y el nombre o identificación del fondo que administra.
          p.mb-0 b) Fecha de vencimiento del título;
          p.mb-0 c) La indicación clara y destacada que se trata de un derecho de participación en el fondo común especial;
          p.mb-0 d) El nombre de la oficina, sucursal o agencia de la sociedad fiduciaria, o si fuere del caso, el del establecimiento de crédito con el cual haya suscrito contrato de uso de red, que están facultados para entregar el título y la fecha de esta;
          p.mb-0 e)  El nombre e identificación del suscriptor;
          p.mb-0 f)  El valor nominal de la inversión, el número de unidades que dicha inversión representa y el valor de la unidad a la fecha en que se realiza el aporte;
          p.mb-0 g) La siguiente leyenda que se deberá incluir en caracteres destacados: “Las obligaciones de la sociedad fiduciaria relacionadas con la gestión del portafolio, son de medio y no de resultado. Los dineros entregados por los suscriptores al fondo no son depósitos, ni generan para la sociedad administradora las obligaciones propias de una institución de depósito y no están amparados por el seguro de depósito del Fondo de Garantías de Instituciones Financieras FOGAFÍN, ni por ninguno otro de dicha naturaleza. La inversión en el fondo está sujeta a los riesgos de inversión, derivados de la evolución de los precios de mercado de los títulos que componen el portafolio del respectivo fondo”.
        p Cuando en la advertencia se estipule el cobro de la remuneración por administración a cargo del fondo como límites máximos o rangos, se deberá completar con una leyenda en la que se informe de tal hecho, indicando el monto máximo o los rangos, así como la base de su liquidación.
      .tarjeta.bg-color-1.p-5(titulo="Parágrafo 3º")
        h4 Parágrafo 3º
        p.mb-0 Los documentos que incorporen los derechos de los suscriptores en los fondos comunes especiales administrados por una sociedad fiduciaria que cumpla con los requisitos esenciales previstos en la presente resolución para los fondos de capital privado, inscritos en el Registro Nacional de Valores e Intermediarios, deberán inscribirse en una bolsa de valores.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Documentos no contables
    
    p Son documentos informativos, entre los cuales se incluyen:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/66.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cotización
              p Es el documento que relaciona las características de la negociación del producto o servicio. Su objetivo es brindar información al cliente, con el fin de tomar la decisión de compra.
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Membrete: logo, nombre de la empresa.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Precio del producto o servicio.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Descripción del producto o servicio.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Referencias del producto.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Fecha de entrega.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Forma de pago.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Tiempo de validez de la cotización.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Nombre de la persona que solicita la cotización.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Nombre del asesor.
  
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/67.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pedido
              p Es el documento que se elabora una vez el cliente ha revisado la cotización y toma la decisión de adquirir el producto.
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Membrete: logo, nombre de la empresa.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Precio unitario del producto que se va a comprar.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Descripción del producto.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Cantidad.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Referencias del producto.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Fecha de entrega.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Forma de pago.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Observaciones.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Firmas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/68.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Remisión
              p Es el documento que soporta la entrega del pedido conforme lo solicitado.
              ul.lista-ul--color.ms-3
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Membrete: logo, nombre de la empresa.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Descripción del producto.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Cantidad.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Referencias del producto.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Fecha de entrega.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Número de pedido.
                li.mb-0.d-flex
                  i.fas.fa-chevron-right.bg-color-17
                  p.mb-0 Transportador.
              a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://marthajimenezmartinez.blogspot.com/2011/10/pedido.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> Pedido




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
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
