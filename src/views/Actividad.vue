<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Documentos contables y no contables',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave relacionados con los documentos contables, no contables y títulos valores, así como su clasificación, características, normatividad aplicable y correcta gestión documental en entornos empresariales..',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál de los siguientes documentos es considerado contable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factura cambiaria de compra y venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprobante de egreso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cotización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Remisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la finalidad principal de los documentos no contables?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Brindar información previa a la transacción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Registrar el pago de impuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Soportar la conciliación bancaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Realizar el asiento contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál de los siguientes es un título valor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprobante de ingreso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Letra de cambio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Factura electrónica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planilla PILA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué documento se utiliza para registrar el pago a empleados?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documento equivalente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nómina.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Remisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pagaré.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál documento registra las operaciones contables día a día?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libro de actas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libro diario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Libro de inventarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Libro de balances.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué característica es propia de la factura electrónica según el Decreto 2242?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe entregarse únicamente en papel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No requiere numeración consecutiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incluye un código único alfanumérico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo la pueden emitir personas naturales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es un requisito del pagaré según el Código de Comercio?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Debe ser pagado en efectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promesa incondicional de pagar una suma determinada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tener firma del beneficiario solamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No necesita indicar la forma de vencimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es un ejemplo de documento equivalente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Boleta de ingreso a espectáculos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Factura de venta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nota contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Extracto bancario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué documento sirve para reconocer valores cobrados erróneamente a un cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nota débito.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Comprobante de contabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Recibo de caja menor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cheque.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de organización documental ordena la información por temas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cronológica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Por asuntos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Numérica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alfabética.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los libros contables pueden tener espacios en blanco para facilitar ediciones posteriores.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La remisión es un documento contable que genera asiento contable.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las notas de contabilidad se utilizan para ajustes internos que no tienen soporte externo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El archivo histórico es una etapa del ciclo vital documental.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El cheque es un título valor que no requiere ser expedido en chequera.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
