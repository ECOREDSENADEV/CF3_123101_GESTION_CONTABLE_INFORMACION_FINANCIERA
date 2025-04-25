export default {
  global: {
    Name: 'Documentos contables y no contables',
    Description:
      'En este componente se identifican y analizan los documentos contables, cuyo objetivo es soportar el registro de los hechos económicos de la empresa; por ello, la importancia de conocer su concepto, características y requisitos. Aunado a ello, se revisan los documentos no contables de tipo informativo, los cuales no se registran contablemente y, por ende, no afectan la contabilidad de la entidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Contables y no contables, extracontables y títulos valores',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Definición, clasificación, características y diligenciamiento',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Archivo y conservación de documentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ley general de archivos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Consecutivo, cronológico por asuntos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tabla de retención documental',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Libros contables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos, clasificación, formatos y comprobantes',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Normograma del Archivo General de la Nación',
      referencia:
        'Archivo General de la Nación. (s.f.). Normograma de gestión documental. Recuperado de la página oficial del Archivo General de la Nación de Colombia.',
      tipo: 'Página web',
      link: 'https://www.archivogeneral.gov.co/normograma/',
    },
    {
      tema: 'Anexo 6 de 2019 al Decreto Único Reglamentario DUR 2420. ',
      referencia: 'Titulo Tercero artículos 5,6,7,8,9 y 10.',
      tipo: 'Página web',
      link:
        'https://www.mincit.gov.co/normatividad/proyectos-de-normatividad/proyectos-de-decretos-2019/16-09-2019-anexo-no-6-2019-estados-financieros-ext.aspx',
    },
    {
      tema: 'Ley 594 de 2000',
      referencia: 'Ley general de archivos.',
      tipo: 'Página web',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      tema: 'Resolución 8934 de 2014',
      referencia:
        'Resolución, aplicable a gestión documental para entidades privadas.',
      tipo: 'Página web',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=4041484',
    },
  ],
  glosario: [
    {
      termino: 'Comprobante de ingreso o recibo de caja',
      significado:
        'El recibo de caja es un soporte de contabilidad en el que constan los ingresos en efectivo, cheques y otras formas de recaudo. El original se entrega al cliente y las copias generalmente se archivan así: una para el archivo consecutivo y otra para anexar al comprobante diario. ',
    },
    {
      termino: 'Consignación bancaria',
      significado:
        'Es un comprobante que elaboran los bancos y suministran a sus cuentahabientes, para que lo diligencien al consignar.',
    },
    {
      termino: 'Cheque',
      significado:
        'Titulo valor por medio del cual una persona llamada girador, quien posee una cuenta bancaria, ordena a un banco, llamado girado, que pague una determinada suma de dinero a la orden de un tercero. ',
    },
    {
      termino: 'Factura de venta',
      significado:
        'Es un título valor que el vendedor o prestador del servicio podrá librar y entregar o remitir al comprador o beneficiario del servicio.',
    },
    {
      termino: 'Letra de cambio',
      significado:
        'Documento negociable o título valor es una orden incondicional de pago de una persona llamada girador a otra persona llamada girado, para que pague a la orden o al portador cierta suma de dinero a la vista o en una fecha determinada.',
    },
    {
      termino: 'Nota débito ',
      significado:
        'Es un comprobante que emiten las empresas, para cargar a  la cuenta de los clientes valores como intereses, por financiación, por sobregiros, el gravamen a movimientos financieros (GMF), venta de chequeras, comisiones, y otros cobros',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, H. (2017). Prácticas de contabilidad. Grupo Editorial Patria.',
      link: '',
    },
    {
      referencia:
        'Angulo, U. (2018). Contabilidad financiera, correlacionado con NIIF. Ediciones de la U. ',
      link: '',
    },
    {
      referencia:
        'Archivo General de la Nación Colombia (2020, 16 de noviembre). Ley 594 de 2000 – Ley general de archivos. ',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      referencia:
        'Archivo General de la Nación Colombia (2020, 16 de noviembre). Tabla de retención documental TRD. ',
      link:
        'https://www.archivogeneral.gov.co/sites/default/files/Estructura_Web/3_Transparencia/10.6%20tablas%20de%20retencion/Trdjunio_2016.pdf',
    },
    {
      referencia:
        'Bancolombia (2020, 16 de noviembre). Aprende a leer tu extracto. ',
      link:
        'https://www.grupobancolombia.com/personas/aprender-es-facil/como-manejar-dinero/endeudamiento-responsable/que-es-una-tarjeta-credito/como-leer-extracto',
    },
    {
      referencia: 'BBVA (2020, 16 de noviembre). Ejemplo de cheque. ',
      link: 'https://www.bbva.com.py/public/formato-cheques-2017.jsp',
    },
    {
      referencia:
        'Cámara de Comercio de Barranquilla (2020, 15 de noviembre). Solicitud de inscripción de libros - páginas web o sitios de internet. ',
      link:
        'http://www.camarabaq.org.co/wp-content/uploads/2019/02/3-Formato-Inscripcio%CC%81n-de-libros-pa%CC%81ginas-web.pdf',
    },
    {
      referencia:
        'Cámara de Comercio de Santa Marta (2020, 15 de noviembre). Circular 002 de 2016. ',
      link:
        'https://www.ccsm.org.co/normativas-del-registro-nacional-de-turismo/circular-002-de-2016.html',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría (2020, 10 de noviembre). Concepto 650 del 14 de agosto de 2018. ',
      link: 'https://www.ctcp.gov.co/conceptos/2018',
    },
    {
      referencia:
        'Consejo Técnico de la Contaduría Pública (2020, 16 de noviembre). Conceptos 2018: respuestas emitidas por el CTCP a las consultas interpuestas por la ciudadanía. ',
      link: 'https://www.ctcp.gov.co/conceptos/2018',
    },
    {
      referencia:
        'Del Carmen, L., y Gudiño, E. (2014). Contabilidad universitaria. McGraw-Hill',
      link: '',
    },
    {
      referencia:
        'Diéguez, J. (2017). Contabilidad financiera: el plan general de contabilidad. Pirámide.',
      link: '',
    },
    {
      referencia:
        'El Contador (2020, 15 de noviembre). Libro de diario general. ',
      link: 'http://elcontador.net/libro-diario-general',
    },
    {
      referencia:
        'Gerencie. (2020, 16 de noviembre). Formato en Excel para liquidar nómina. ',
      link:
        'https://www.gerencie.com/formato-en-excel-para-liquidar-la-nomina.html',
    },
    {
      referencia:
        'Itaú (2020, 16 de noviembre). Prospecto de información: tercera emisión de bonos subordinados hasta por $140,000,000,000 Banco Santander Colombia S.A',
      link:
        'https://www.itau.co/documents/10282/1317643/78ProspectoBancoSantanderColombia.pdf',
    },
    {
      referencia:
        'Jiménez, G. (2003). Ordenación documental: division de clasificación y descripción. Archivo General de la Nación Colombia.',
      link: '',
    },
    {
      referencia:
        'Legis. (2020, 16 de noviembre). Minerva: siempre legal, siempre confiable. ',
      link: 'https://www.formasminerva.com/inicio',
    },
    {
      referencia:
        'Luna, G. (2013). Asistencia administrativa: documentos o soportes contables en Colombia.',
      link: '',
    },
    {
      referencia: 'Mil Formatos. (2020, 16 de noviembre). Ejemplo de factura. ',
      link:
        'https://milformatos.com/wp-content/uploads/2018/02/Ejemplo-de-Factura.jpg',
    },
    {
      referencia:
        'Pérez, J. y  Fol, R. (2019). Manual de casos prácticos de ISR. Tax Editores.',
      link: '',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 10 de noviembre). Ley 1111 de 2006. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1111_2006.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 10 de noviembre). Ley 1755 de 2015. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1755_2015.html',
    },
    {
      referencia:
        'Secretaria del Senado (2020, 15 de octubre). Código del Comercio: Decreto-Ley 410 de 1971. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_comercio.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 5 de noviembre). Estatuto tributario. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/estatuto_tributario.html',
    },
    {
      referencia:
        'Secretaría del Senado (2020, 6 de noviembre). Decreto-Ley 12 de 2012. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/decreto_0019_2012.html',
    },
    {
      referencia:
        'Sinisterra V., Polanco L., y Henao H. (2011). Contabilidad: sistema de información para las organizaciones. Mc. Graw Hill.  ',
      link: '',
    },
    {
      referencia:
        'Sistema Único de Información Normativa (2020, 10 de noviembre). Decreto 2242 de 2015. ',
      link: 'http://www.suin.gov.co/viewDocument.asp?id=30033048',
    },
    {
      referencia:
        'Super Intendencia de Industria y Comercio (2020, 15 de noviembre). Resolución 8934. ',
      link:
        'https://www.sic.gov.co/sites/default/files/normatividad/Resolucion_8934_2014.pdf ',
    },
    {
      referencia:
        'Tapia, C. y Jiménez, J. (2018) Cómo entender finanzas sin ser financiero. Instituto Mexicano de Contadores Públicos. ',
      link: '',
    },
    {
      referencia:
        'Tejeda, A. (2017). Manual práctico de contabilidad. Pirámide.',
      link: '',
    },
    {
      referencia:
        'Tiendas Jumbo. (2020, 16 de noviembre). Formato transferencia de fondos. ',
      link:
        'https://proveedores.tiendasjumbo.co/gateweb/base/documentos/Formato_transferencia_de_fondos.pdf',
    },
    {
      referencia:
        'Universidad del Cauca. (2020, 15 de noviembre). Libro mayor y balances. ',
      link: 'http://fccea.unicauca.edu.co/old/fcf/fcfse41.html',
    },
    {
      referencia:
        'Vilches, R. (2019). Apuntes de contabilidad básica. Editorial El Cid.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
