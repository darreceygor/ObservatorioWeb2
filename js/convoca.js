window.onload = convoca();

async function convoca(){
  fetch('json/convoca.json') /*toma la direccion del arhivo json a tratar*/
  .then(res => res.json()) /*traemos el archivo y lo transformamos a objeto json*/
  .then(datos =>{   /*traemos los datos para procesar*/
      let detalle = document.getElementById("fichaConvoca");

      for (let i in datos) {
          detalle.innerHTML +=`
          <div class="detalles">
          <div class="detalleImg">
            <img src="${datos[i].imagen}" />
          </div>
          <div>
          <div class="detalleData">
            <h3>${datos[i].titulo}</h3><br>
            <div class="bajada">${datos[i].bajada}
            <br>
            <strong>Mas datos en: </strong>
            <br>
            <a href ="${datos[i].link}">${datos[i].link}</a>
          </div>
          </div>  `
      }  
  })
}

/*          "id": 13993,
          "url": "https://www.cultura.gob.ar/api/v2.0/convocatorias/13993/",
          "link": "https://www.cultura.gob.ar/audiciones-para-ejecutante-de-arpa-orquesta-sinfonica-juvenil-nacional-13993/",
          "imagen": "https://www.cultura.gob.ar/media/uploads/osjnsm_-_inscripciones_2024-02.jpg",
          "titulo": "Audiciones para ejecutante de Arpa.- Orquesta Sinfónica Juvenil Nacional José de San Martín",
          "bajada": "La Orquesta Sinfónica Juvenil Nacional José de San Martín busca un integrante para un puesto de arpista. El cierre de la inscripción es el viernes 1° de marzo de 2024.",
          "cuerpo": "<h3><strong>&iquest;Qu&eacute; es?</strong></h3>\r\n<p>La Direcci&oacute;n Nacional de Elencos Estables de la Secretar&iacute;a de Cultura de la Naci&oacute;n abre la convocatoria 2024 de la&nbsp;Orquesta&nbsp;Sinf&oacute;nica Juvenil Nacional Jos&eacute; de San Mart&iacute;n&nbsp;para integrar un&nbsp;puesto de&nbsp;<strong>arpista.</strong></p>\r\n<h3><strong>&iquest;Cu&aacute;les son las condiciones generales para participar?</strong></h3>\r\n<p>Es requisito indispensable para poder presentarse tener hasta 2<strong>7 a&ntilde;os de edad</strong> cumplidos al 1&deg; de marzo de 2024. Quienes pasen a integrar la orquesta recibir&aacute;n <strong>una beca mensual durante los meses de marzo a diciembre</strong>.</p>\r\n<p>Los postulantes deber&aacute;n presentar&nbsp;<strong>2 obras (movimientos o estudios)</strong>, de car&aacute;cter y movimiento contrastantes y presentar la lectura de pasajes orquestales de la&nbsp;<strong>Sinfon&iacute;a N&deg;8 de Anton Bruckner</strong>.</p>\r\n<h3><strong>&iquest;Cu&aacute;l es la fecha de inscripci&oacute;n?</strong></h3>\r\n<p>El cierre de la inscripci&oacute;n es el viernes 1&deg; de marzo de 2024.</p>\r\n<p>Las audiciones&nbsp;se realizar&aacute;n en CABA del&nbsp;02 al 04 de marzo de 2024.</p>\r\n<h3>Inscripci&oacute;n</h3>\r\n<p>Para todas las consultas acerca de la inscripci&oacute;n, escribir a: juvenilnacionalsanmartin@gmail.com</p>\r\n<p><img src=\"/media/uploads/osjnsm_-_inscripciones_2024-02.jpg\" alt=\"\" /></p>\r\n<h4>Acerca&nbsp;de la Orquesta Sinf&oacute;nica Juvenil Nacional Jos&eacute; de San Mart&iacute;n</h4>\r\n<p dir=\"ltr\">La Orquesta Sinf&oacute;nica Juvenil Nacional &ldquo;Jos&eacute; de San Mart&iacute;n&rdquo; es una orquesta escuela que cumple con diversos objetivos pedag&oacute;gicos mediante una labor docente integral que abarca la formaci&oacute;n musical orquestal y profesional de j&oacute;venes m&uacute;sicos.</p>\r\n<p dir=\"ltr\">Fue fundada en 1994 por su actual director titular Mario Benzecry con el apoyo y la donaci&oacute;n de instrumentos de la Organizaci&oacute;n de Naciones Unidas para la Educaci&oacute;n, la Ciencia y la Cultura (UNESCO) lo que le permiti&oacute; dar el inicio formal y sostenido de sus actividades formativas y&nbsp; art&iacute;sticas.</p>\r\n<p dir=\"ltr\">A partir del a&ntilde;o 2013 pas&oacute; a la &oacute;rbita del ex Ministerio de Cultura de la Naci&oacute;n, hoy Secretar&iacute;a, lo que constituy&oacute; un hito fundamental para el crecimiento y desarrollo de la orquesta, profesionalizando sensiblemente su estructura general y becando a los j&oacute;venes que participan en la formaci&oacute;n.</p>\r\n<p dir=\"ltr\">La Orquesta convoca a m&aacute;s de 100 j&oacute;venes, becarios y pasantes de entre 14 y 28 a&ntilde;os&nbsp; y tiene como objetivo primordial la formaci&oacute;n profesional de j&oacute;venes m&uacute;sicos, solistas, directores y el desarrollo integral de todos en el marco de la ense&ntilde;anza orquestal. Se propone profundizar las pol&iacute;ticas pedag&oacute;gicas y art&iacute;sticas de inclusi&oacute;n mediante la capacitaci&oacute;n y el ejercicio de una pol&iacute;tica federal que brinde igualdad de oportunidades a los j&oacute;venes m&uacute;sicos.</p>\r\n<p dir=\"ltr\">En el a&ntilde;o 2015 la Orquesta Sinf&oacute;nica Juvenil Nacional Jos&eacute; de San Mart&iacute;n fue seleccionada para inaugurar la Sala Argentina del CCK. Su temporada se desarrolla en el ciclo Grandes Conciertos de la Facultad de Derecho de la UBA, en el Auditorio Nacional del CCK y en otras salas del pa&iacute;s.</p>\r\n<p dir=\"ltr\">Ha sido distinguida con el &ldquo;Premio Est&iacute;mulo&rdquo; por su temporada 2015 y galardonada como la &ldquo;Mejor orquesta Sinf&oacute;nica Juvenil&rdquo; por su temporada 2017 por parte de la Asociaci&oacute;n de Cr&iacute;ticos Musicales de la Argentina, galard&oacute;n con el que nuevamente fue distinguida en el a&ntilde;o 2021 por la temporada 2019.</p>\r\n<p dir=\"ltr\">En el a&ntilde;o 2022 ha obtenido el Premio Nacional Cl&aacute;sica en la categor&iacute;a Formaci&oacute;n Orquestal, premio que recibi&oacute; de forma consecutiva por su temporada 2023, a&ntilde;o en la que tambi&eacute;n fue galardonada en conjunto con su director titular Mario Benzecry con el premio &ldquo;Consagraci&oacute;n en Gesti&oacute;n Cultural P&uacute;blica&rdquo;.</p>\r\n<p dir=\"ltr\">En la actualidad se compone de 86 becarios y 15 practicantes de entre 14 y 27 a&ntilde;os de edad, adem&aacute;s de contar con un cuerpo estable de cuatro directores y 13 docentes a cargo del desarrollo musical y pedag&oacute;gico del programa.</p>\r\n<p dir=\"ltr\">Uno de los objetivos m&aacute;s relevantes del programa es propiciar a los j&oacute;venes m&uacute;sicos su posterior inserci&oacute;n profesional en cualquier elenco de naturaleza p&uacute;blica o privada, de diversos estilos y car&aacute;cter en cuanto a su integraci&oacute;n y repertorio.</p>\r\n<p dir=\"ltr\">La orquesta se constituye mediante la convocatoria anual a audiciones, los j&oacute;venes seleccionados acceden adem&aacute;s a una beca econ&oacute;mica durante los 10 meses que dura la formaci&oacute;n.</p>\r\n<p dir=\"ltr\">&nbsp;</p>",
          "estado": "abierta",
          "fecha_inicio": "2024-02-16",
          "fecha_fin": "2024-03-01",
          "documentos": [] */