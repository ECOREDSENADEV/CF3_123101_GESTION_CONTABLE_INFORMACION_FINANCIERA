<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Libros contables
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los libros de información financiera están conformados por libros auxiliares y principales, su diligenciamiento debe efectuarse de forma cronológica, acorde a la normatividad vigente. Los libros contables están conformados por comprobantes de contabilidad base para la elaboración de estados financieros (Angulo, 2018). En coherencia con el Decreto ley 19 de 2012 (Secretaría del Senado, 2020), se registran en las Cámaras de comercio los libros de actas de socios y accionistas.
    
    p Según el Código Comercio (Secretaría del Senado, 2020. Art. 48 al 56):

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.bg-color-1.p-5(titulo="Artículo 48")
        h4 Artículo 48
        p.mb-0 Todo comerciante conformará su contabilidad, libros, registros contables, inventarios y estados financieros en general, a las disposiciones de este Código y demás normas sobre la materia. Dichas normas podrán autorizar el uso de sistemas que, como la microfilmación, faciliten la guarda de su archivo y correspondencia. Asimismo, será permitida la utilización de otros procedimientos de reconocido valor técnico-contable, con el fin de asentar sus operaciones, siempre que facilite el conocimiento y prueba de la historia clara, completa y fidedigna de los asientos individuales y el estado general de los negocios.
      .tarjeta.bg-color-1.p-5(titulo="Artículo 49")
        h4 Artículo 49
        p Libros de comercio para los efectos legales, cuando se haga referencia a los libros de comercio, se entenderán por tales los que determine la ley como obligatorios y los auxiliares necesarios para el completo entendimiento de aquellos.
      .tarjeta.bg-color-1.p-5(titulo="Artículo 53")
        h4 Artículo 53
        p De las operaciones mercantiles. En los libros se asentarán en orden cronológico las operaciones mercantiles y todas aquellas que puedan influir en el patrimonio del comerciante, haciendo referencia a los comprobantes de contabilidad que las respalden.
        p.mb-0 El comprobante de contabilidad es el documento que debe elaborarse previamente al registro de cualquier operación y en el cual se indicará el número, fecha, origen, descripción y cuantía de la operación, así como las cuentas afectadas con el asiento. A cada comprobante se anexarán los documentos que lo justifiquen.

    .row.mb-5.justify-content-center
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-23.h-100.p-4
          p <b>Artículo 57:</b> En los libros de comercio se prohíbe:
          ol.lista-ol--cuadro
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span 1
              | Alterar en los asientos el orden o la fecha de las operaciones a que estos se refieren;
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span 2
              | Dejar espacios que faciliten intercalaciones o adiciones en el texto de los asientos o a continuación de estos;
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span 3
              | Hacer interlineaciones, raspaduras o correcciones en los asientos. Cualquier error u omisión se salvará con un nuevo asiento en la fecha en que se advirtiere;
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span 4
              | Borrar o tachar en todo o en parte los asientos, y
            li.bg-color-white.p-1
              .lista-ol--cuadro__vineta
                span 5
              | Numeral modificado por el artículo 174 del Decreto 19 de 2012. El nuevo texto es el siguiente: Arrancar hojas, alterar el orden de estas o mutilar los libros, o alterar los archivos electrónicos.
          p Para observar la totalidad del capítulo de libros de comercio, revisar el link en:
          a.anexo.mb-4.mb-lg-0.bg-color-8(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio_pr001.html" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> Codigo comercio
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.svg", data-aos="zoom-in")
      .col-lg-9
        p.mb-0 En tema tributario observemos el Estatuto Tributario (Secretaría del Senado, 2020. Art. 654 y 655):
        p Nos menciona las sanciones relacionadas con la contabilidad y de clausura de establecimiento.
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo=" Artículo 654: Habrá lugar a aplicar sanción por libros de contabilidad, en los siguientes casos")
            ol.lista-ol--cuadro.ms-3
              li.mb-0.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span a
                | No llevar libros de contabilidad si hubiere obligación de llevarlos.
              li.mb-0.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span b
                | No tener registrados los libros principales de contabilidad, si hubiere obligación de registrarlos.
              li.mb-0.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span c
                | No exhibir los libros de contabilidad, cuando las autoridades tributarias lo exigieren.
              li.mb-0.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span d
                | Llevar doble contabilidad.
              li.mb-0.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span e
                | No llevar los libros de contabilidad en forma que permitan verificar o determinar los factores necesarios para establecer las bases de liquidación de los impuestos o retenciones.
              li.mb-0.p-1.d-flex
                .lista-ol--cuadro__vineta
                  span f
                | Cuando entre la fecha de las últimas operaciones registradas en los libros, y el último día del mes anterior a aquél en el cual se solicita su exhibición, existan más de cuatro (4) meses de atraso.

          div(titulo="Artículo 655, sanciones por irregularidades en la contabilidad")
            p Ajuste de las cifras en valores absolutos en términos de UVT por el artículo 51 de la Ley 1111 de 2006 (Secretaría del Senado, 2020). El texto con el nuevo término es el siguiente: Sin perjuicio del rechazo de los costos, deducciones, impuestos descontables, exenciones, descuentos tributarios y demás conceptos que carezcan de soporte en la contabilidad, o que no sean plenamente probados de conformidad con las normas vigentes, la sanción por libros de contabilidad será del medio por ciento (0.5%) del mayor valor entre el patrimonio líquido y los ingresos netos del año anterior al de su imposición, sin exceder de 20.000 UVT.
            p Para profundizar en el tema libros contables, revisar el concepto 650 (Consejo Técnico de la Contaduría Pública, 2020), en el siguiente enlace: 
            a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://www.ctcp.gov.co/conceptos/2018" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> Conceptos 2018
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Conceptos, clasificación, formatos y comprobantes
    
    .row.mb-5
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        p(data-aos="fade-left") Los libros de contabilidad deben respetar los principios básicos de contabilidad. Ser diligenciados y presentados en el momento que las autoridades de inspección los soliciten, so pena de sanciones por no llevar libros de contabilidad. Una vez solicitados dichos libros de contabilidad por parte de la administración de impuestos y aduanas nacionales DIAN, después de cinco días sin realizar la entrega efectiva, se generará una sanción (Angulo, 2018).
    
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/componentes/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Está prohibido llevar doble contabilidad o presentar más de cuatro meses de retraso en el registro de información financiera (Angulo, 2018).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-1.mb-5(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-2 Los libros contables oficiales deben presentar sus respectivos soportes, con documentos que cumplan los requisitos legales, que resguarden las cifras presentadas.
        p(data-aos="fade-left") Dentro de los libros que se deben diligenciar y presentar se encuentran (Angulo, 2018):
        ul.lista-ul--color.ms-3
          li.mb-0.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Libro diario.
          li.mb-0.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Libro mayor y balances. 
          li.mb-0.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Libro de actas de asambleas.
          li.mb-0.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Libros de actas de Consejo de Administración o Junta Directiva
          li.mb-0.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Libro de actas de Junta de Vigilancia o Comité de Control Social. 
          li.mb-0.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Libro de Registro social.
          li.mb-0.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Libros auxiliares.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libro diario
    
    p.mb-5(data-aos="fade-left") Es un medio de prueba para las autoridades, registra el día a día las operaciones comerciales, registrando devengos contables, presenta como características sumas iguales.

    .row.mb-3.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.svg", data-aos="zoom-in")
      .col-lg-7.bg-color-10.p-4(data-aos="fade-left")
        h5.mb-4 Características
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Contiene fecha de elaboración.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Códigos contables, aplica principio básico de la partida doble.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Presenta una columna de la cuenta auxiliar, generalmente trabajada a seis (6) Dígitos.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Columna para los débitos.
          li.mb-2.d-flexli.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Columna para créditos.
          li.mb-2.d-flexli.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Sumas iguales..

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.svg", data-aos="zoom-in")
      .col-lg-7.bg-color-12.p-4(data-aos="fade-left")
        p El libro diario de contabilidad presenta registros contables clasificados en asientos:
        ul.lista-ul--color
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Normales: registra operaciones diarias de la organización.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 De ajustes: registra las depreciaciones y amortizaciones.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Cierre: al finalizar un periodo contable, comúnmente al finalizar el año, se debe hacer cierre de cuentas para ser trasladadas como saldos iniciales para un nuevo periodo contable.
        a.anexo.mb-4.mb-lg-0.bg-color-8(href="https://elcontador.net/libro-diario-general/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Libro Diario General
        
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libro mayor y balances
    
    p.mb-5(data-aos="fade-left") Cada mes se debe realizar cierre del periodo con el fin de identificar el comportamiento financiero del periodo y, de esta forma, que los administradores puedan tomar decisiones.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Características")
            ul.lista-ul--color
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Posibilita la elaboración de estados de resultados integrales.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Permite la elaboración de estado de situación financiera.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 El resumen de la información se hace mediante la aplicación de cuentas mayores de forma resumida de débitos y créditos. Se deben codificar a cuatro (4) dígitos, contiene la información de los libros auxiliares.

          div(titulo="Diligenciamiento")
            ul.lista-ul--color
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Registra número de folio mayor, acorde al consecutivo, donde se realiza el resumen de la transacción económica.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Codifica nombre de la cuenta contable utilizada.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Registra saldo del mes anterior, acorde al principio de partida doble y naturaleza de las cuentas débitos y créditos.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Movimientos del periodo en las columnas debe y haber, que reciben los débitos y créditos de las transacciones.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Restar y sumar acorde al caso y naturaleza de las cuentas para obtener el nuevo saldo de inicio para el nuevo periodo.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libro de actas de asamblea
    
    p.mb-5(data-aos="fade-left") Según el Código del Comercio (Secretaría del Senado, 2020. Art. 189 y 431):

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.bg-color-1.p-5(titulo="Artículo 189")
        h4 Artículo 189
        p.mb-0 Las decisiones de la junta de socios o de la asamblea se harán constar en actas aprobadas por la misma, o por las personas que se designen en la reunión para tal efecto, y firmadas por el presidente y el secretario de la misma, en las cuales deberá indicarse, además, la forma en que hayan sido convocados los socios, los asistentes y los votos emitidos en cada caso. La copia de estas actas, autorizada por el secretario o por algún representante de la sociedad, será prueba suficiente de los hechos que consten en ellas, mientras no se demuestre la falsedad de la copia o de las actas. A su vez, a los administradores no les será admisible prueba de ninguna clase para establecer hechos que no consten en las actas.
      .tarjeta.bg-color-1.p-5(titulo="Artículo 431")
        h4 Artículo 431
        p Lo ocurrido en las reuniones de la asamblea se hará constar en el libro de actas. Estas se firmarán por el presidente de la asamblea y su secretario o, en su defecto, por el revisor fiscal. Las actas se encabezarán con su número y expresarán cuando menos: lugar, fecha y hora de la reunión; el número de acciones suscritas; la forma y antelación de la convocación; la lista de los asistentes con indicación del número de acciones propias o ajenas que representen; los asuntos tratados; las decisiones adoptadas y el número de votos emitidos en favor, en contra, o en blanco; las constancias escritas presentadas por los asistentes durante la reunión; las designaciones efectuadas, y la fecha y hora de su clausura.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Diligenciamiento
        ul.lista-ul--color.mb-5
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Registro fecha de la solicitud.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Registro razón social y NIT.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Indicar el tipo de inscripción.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Dirección de la página web.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Nombre y firma del representante legal de la empresa.
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Nombre y firma del Revisor fiscal, anexando número de tarjeta profesional.

        a.anexo.mb-4.bg-color-8(:href="obtenerLink('/downloads/3-Formato-Inscripción-de-libros-páginas-web.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Formato Inscripción De Libros Páginas Web

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libros de Consejo de administración o Junta directiva
    
    p.mb-5(data-aos="fade-left") En este libro se registra la información básica de la empresa, se incluyen todas las decisiones en las actas, como acuerdos a los que llegan los dueños de una empresa. Se debe llevar un orden cronológico de las reuniones, en él se encuentran inscritos los dueños, administradores y representante legal, siempre debe estar firmado por secretario y presidente.

    .row.mb-5
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-3.p-5.tarjeta(data-aos="fade-left")
          h5 Según Ley 1755 de 2001 (Secretaría del Senado, 2020. Art. 47):
          p.mb-0 Las decisiones de la asamblea se harán constar en actas firmadas por el presidente y el secretario de la misma, en las cuales deberá indicarse si es ordinaria o extraordinaria. Además, la forma de la convocatoria, orden del día, nombre y calidad de los asistentes, su unidad privada y su respectivo coeficiente, y los votos emitidos en cada caso.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-7
        .row.align-items-start.mb-3(data-aos="fade-left")
          .col-lg-auto
            img.d-none.d-lg-flex(src="@/assets/componentes/2.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En los eventos en que la asamblea decida encargar personas para verificar la redacción del acta, las personas encargadas deberán hacerlo dentro del término que establezca el reglamento, y en su defecto, dentro de los veinte (20) días hábiles siguientes a la fecha de la respectiva reunión.
        p(data-aos="fade-left") Dentro de un lapso no superior a veinte (20) días hábiles contados a partir de la fecha de la reunión, el administrador debe poner a disposición de los propietarios del edificio o conjunto, copia completa del texto del acta en el lugar determinado como sede de la administración, e informar tal situación a cada uno de los propietarios. En el libro de actas se dejará constancia sobre la fecha y lugar de publicación.
    
    .row.mb-5
      .col-lg-4
        p La copia del acta debidamente suscrita será prueba suficiente de los hechos que consten en ella, mientras no se demuestre la falsedad de la copia o de las actas. El administrador deberá entregar copia del acta a quien se la solicite.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-5
        .bg-color-6.p-4.tarjeta(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px", data-aos="zoom-in")
          p.mb-0 PARÁGRAFO. Todo propietario a quien se le niegue la entrega de copia de acta podrá acudir en reclamación ante el Alcalde Municipal o Distrital o su delegado, quien a su vez ordenará la entrega de la copia solicitada, so pena de sanción de carácter policivo.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libros de actas de Junta de vigilancia o Comité de control social y registro social
    
    p.mb-5(data-aos="fade-left") Para registrar dichos libros se requiere una carta de solicitud de inscripción de libros.  

    .row.mb-5.justify-content-center
      .col-lg-10.bg-color-12.p-4.tarjeta
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/15.png", style="max-width: 198px").mx-auto
          .col-lg
            ul.lista-ul--color.mb-5
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Fecha de solicitud.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Nombre de la sociedad y número de matrícula.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Nombre de libro registro social o junta de vigilancia.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Registro de todas las hojas de los libros a registrar, acompañado de las firmas del representante legal de la sociedad.
    
    h5 Características:
    p.mb-5 Según Circular 002 de 2016 de la Super Intendencia de Industria y Comercio (Cámara de Comercio de Santa Marta, 2020):
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
      div(titulo="2.1.9.2 Respecto de los libros de comercio")
        p Una vez efectuada la inscripción de los libros sometidos a dicha formalidad, el secretario de la Cámara de Comercio insertará una constancia en la primera hoja del libro registrado que contendrá los siguientes datos:
        ul.lista-ul--color.ms-3
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Cámara de Comercio. 
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Nombre de la persona a quien pertenece. 
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Fecha, número de inscripción y libro en el cual se efectuó;
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Nombre del libro o uso al que se destina, y  
          li.mb-2.d-flex
            i.fas.fa-chevron-right.bg-color-17
            p.mb-0 Código del libro y número de hojas útiles de que está compuesto. 
        p Las Cámaras de Comercio deberán autenticar las hojas útiles de los libros mediante un sello de seguridad impuesto en cada una de ellas. Para efectos de inscripción de nuevos libros (físicos o electrónicos) será necesario acreditar ante la respectiva Cámara de Comercio que a los existentes les faltan pocos folios por utilizar, o que deben ser sustituidos por causas ajenas a su propietario, mediante la presentación del propio libro o del certificado del revisor fiscal, cuando exista el cargo o, en su defecto del contador público. 
      div(titulo="2.1.9.2.1. Registro de libros de comercio en medios electrónicos")
        p Teniendo en cuenta que la ley facultó a los comerciantes para llevar los libros de comercio en medios electrónicos, es necesario que las Cámaras de Comercio implementen dentro de sus servicios virtuales, en los términos y condiciones señalados en las normas que rijan la materia, la posibilidad de efectuar el registro de estos libros, para lo cual deberán habilitar en sus plataformas electrónicas o sistemas de información, dicho servicio, garantizando su disponibilidad y fácil acceso para su posterior consulta. Las Cámaras de Comercio deberán dar publicidad al servicio de registro de libros de comercio en medios electrónicos y establecer los controles respectivos que impidan el registro en forma simultánea de un mismo libro, en medios electrónicos o de forma física, a fin de evitar su duplicidad. Las Cámaras de Comercio podrán facilitar la utilización de los mecanismos de firma digital o electrónica, no obstante, corresponde al comerciante la elección de cualquiera de estos siempre y cuando cumplan con los requisitos previstos en las normas que rijan la materia. El servicio de registro de libros en medios electrónicos deberá estar disponible para las entidades sin ánimo de lucro inscritas en las Cámaras de Comercio, en los mismos términos y condiciones de las sociedades comerciales, de acuerdo con las normas que rijan esta materia. 
      div(titulo="2.1.9.2.2. Procedimiento para efectuar registro de los libros de comercio registrables en medios electrónicos")
        p De conformidad con lo establecido en la ley, los comerciantes que quieran llevar sus libros de comercio registrables, en medios electrónicos, deberán solicitarlo de manera expresa ante la Cámara de Comercio correspondiente a su domicilio, indicando una dirección de correo electrónico a la cual se le puedan remitir las inscripciones efectuadas y aceptando los términos y condiciones por ella establecidas para el efecto. Una vez recibida la solicitud de inscripción de los libros registrables, por parte del interesado, la Cámara de Comercio correspondiente deberá efectuar una inscripción por cada uno de los libros en el Libro respectivo del registro de que se trate, debiendo devolver al solicitante el archivo electrónico al correo electrónico que tenga reportado el comerciante o inscrito. Para ello, la Cámara de Comercio deberá firmarlo digital o electrónicamente, dejando constancia electrónica de la fecha y la hora en que fue enviado o remitido el archivo, por cualquier medio tecnológico disponible. De conformidad con lo establecido en las normas que rigen la materia, la constancia electrónica expedida por la Cámara de Comercio correspondiente, deberá tener la siguiente información: – Cámara de Comercio receptora. – Fecha de presentación del libro para registro. – Fecha de inscripción. – Número de inscripción. – Identificación del comerciante o persona obligada a registrar. – Nombre del libro, y – Uso al que se destina. A su vez, si a la fecha de la solicitud de inscripción del libro registrable por medios electrónicos, el libro físico que lo antecede posee hojas que no hubieren sido empleadas, deberán ser anuladas, de acuerdo con lo previsto en las normas que rigen la materia. 
      div(titulo="2.1.9.2.3. Conformación de los libros registrados en medios electrónicos ")
        p Efectuada la inscripción del libro de actas de juntas de socios o accionistas en medios electrónicos, el comerciante o inscrito tendrá derecho a remitir a la Cámara de Comercio, por el término de un (1) año, los archivos electrónicos en donde consten las actas de dicho órgano, los cuales deberán ser firmados digital o electrónicamente por quienes actuaron como presidente y secretario de la reunión. La solicitud de asentar el archivo electrónico contentivo del acta, en el libro correspondiente, deberá estar suscrita digital o electrónicamente por el representante legal, presidente o secretario. Efectuada la inscripción del libro de socios o accionistas en medios electrónicos, el comerciante o inscrito tendrá derecho a remitir a la Cámara de Comercio, por el término de un (1) año, archivos electrónicos destinados a ese libro, los cuales deberán ser firmados digital o electrónicamente por el representante legal. Es responsabilidad de cada comerciante la provisión de las firmas digitales o electrónicas y, estampas cronológicas necesarias. Una vez recibidos los archivos electrónicos, la Cámara de Comercio correspondiente deberá devolver al solicitante el archivo electrónico al correo electrónico que tenga reportado el comerciante o inscrito. Para ello, la Cámara de Comercio deberá firmarlo digital o electrónicamente, dejando constancia electrónica de la fecha y la hora en que fue enviado o remitido el archivo por cualquier medio tecnológico disponible.  

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libros auxiliares
    
    p.mb-5(data-aos="fade-left") Son los libros que reflejan de forma ordenada las operaciones realizadas por la empresa, afectando los débitos y créditos de una o varias cuentas y subcuentas, con el fin de generar el saldo en una fecha determinada.

    .row.mb-5.justify-content-center
      .col-lg-10.bg-color-8.p-4.tarjeta
        .row.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/16.png").mx-auto
          .col-lg-6
            p Entre los libros auxiliares se encuentran: libro auxiliar de bancos, caja, IVA, inventarios, ingresos ordinarios, etc.
            ul.lista-ul--color.mb-5
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Nombre del libro auxiliar.
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Fecha de la transacción
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Detalle de la transacción
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Débitos
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Créditos
              li.mb-2.d-flex
                i.fas.fa-chevron-right.bg-color-17
                p.mb-0 Saldo

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Sistema de gestión documental emitido por el ente regulador
    
    p.mb-5(data-aos="fade-left") El Estado colombiano busca, mediante la Resolución 8934 de febrero de 2014, implementar el sistema de gestión documental, con el objetivo de mantener organizados los archivos en el sector privado, enfocada básicamente en la organización de:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.tarjeta.p-1(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tablas de retención documental
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.tarjeta.p-1(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Programa de gestión documental
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.tarjeta.p-1(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/19.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cuadros de clasificación documental
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.tarjeta.p-1(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Tablas de valoración documental
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.tarjeta.p-1(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Reglamento interno de archivo
      .col-lg-3.mb-3.mb-lg-0
        a.anexo.mb-4.bg-color-8(:href="obtenerLink('/downloads/Resolucion_8934_2014.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <b>Anexo.</b> Resolucion  8934 de 2014


          

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
