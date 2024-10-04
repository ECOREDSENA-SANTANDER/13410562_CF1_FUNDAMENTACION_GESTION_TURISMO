export default {
  global: {
    componenteFormativo: 'Turismo superestructuras y normatividad',
    descripcionCurso:
      'La integración de políticas y normativas que buscan equilibrar el crecimiento económico del sector turístico con el bienestar de las comunidades locales y la protección del entorno natural. Este enfoque garantiza la competitividad de los destinos al tiempo que promueve la sostenibilidad. La regulación del turismo en Colombia fomenta un desarrollo turístico que beneficia a todos los actores involucrados. ',
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
        titulo: 'Turismo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistema turístico',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Superestructuras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Superestructuras turísticas',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Destino turístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características del destino turístico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Agentes del destino',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Política y normatividad turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Política turística',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Legislación y normatividad colombiana en turismo',
            hash: 't_4_2',
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
        download: 'downloads/prueba.pdf',
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
      tema: '1.  Turismo',
      referencia:
        'Inostroza, G. (2008). Aportes para un modelo de gestión sostenible del turismo comunitario en la región andina. Gestión turística, (10), 77-90.',
      tipo: 'Articulo',
      link: 'http://revistas.uach.cl/index.php/gestur/article/view/3485',
    },
    {
      tema: '3. Destino turístico',
      referencia:
        'Pearce, D. G. (2016). Modelos de gestión de destinos: Síntesis y evaluación. Estudios y perspectivas en turismo, 25(1), 01-16.',
      tipo: 'Articulo',
      link:
        'https://www.scielo.org.ar/scielo.php?pid=S1851-17322016000100001&script=sci_arttext',
    },
    {
      tema: '3. Destino turístico',
      referencia:
        'Muñoz, A. D. A., & Sánchez, S. G. (2015). Destinos turísticos inteligentes. Economía industrial, 395, 61-69.',
      tipo: 'PDF',
      link:
        'https://www.mintur.gob.es/Publicaciones/Publicacionesperiodicas/EconomiaIndustrial/RevistaEconomiaIndustrial/395/LOPEZ%20DE%20AVILA%20y%20GARCIA.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ciclo del Producto ',
      significado:
        'Etapas de evolución de un producto, desde su lanzamiento hasta el cese de su comercialización.',
    },
    {
      termino: 'Demanda Turística',
      significado:
        'Total, de turistas que consumen productos y servicios en un destino.',
    },
    {
      termino: 'Destino',
      significado:
        'Lugar al que se dirigen los turistas, equipado con servicios e instalaciones que cubren sus necesidades.',
    },
    {
      termino: 'Espacio Turístico',
      significado: 'Área geográfica donde ocurre la experiencia turística.',
    },
    {
      termino: 'Imagen',
      significado:
        'Percepción mental de una marca, influenciada por la personalidad del consumidor.',
    },
    {
      termino: 'Infraestructura Turística',
      significado:
        'Conjunto de bienes y servicios disponibles en un destino para satisfacer al turista.',
    },
    {
      termino: 'Marca',
      significado:
        'Identidad asignada a un producto o servicio, que lo diferencia de la competencia y garantiza su calidad.',
    },
    {
      termino: 'Oferta Turística',
      significado:
        'Productos, servicios y organizaciones disponibles para los turistas.',
    },
    {
      termino: 'Planta Turística',
      significado:
        'Instalaciones y equipos que cubren las necesidades de transporte, alojamiento, alimentación y recreación del turista.',
    },
    {
      termino: 'Política Turística',
      significado:
        'Conjunto de normas y acciones del Estado para regular, fomentar y proteger el turismo, en colaboración con el sector privado.',
    },
    {
      termino: 'Prestador de Servicios Turísticos',
      significado:
        'Persona o empresa registrada que ofrece, media o contrata servicios turísticos en Colombia.',
    },
    {
      termino: 'Producto Turístico',
      significado:
        'Conjunto de elementos que generan satisfacción al turista, consumidos en diferentes etapas.',
    },
    {
      termino: 'Sistema Turístico',
      significado:
        'Conjunto de acciones y recursos que interactúan para organizar la actividad turística.',
    },
    {
      termino: 'Superestructura Turística',
      significado:
        'Organismos públicos y privados que regulan y optimizan el sistema turístico.',
    },
    {
      termino: 'Territorio',
      significado:
        'Espacio físico y social donde se manifiestan la identidad y la oferta turística.',
    },
    {
      termino: 'Turismo',
      significado:
        'Actividades realizadas por personas en sus viajes y estancias fuera de su entorno habitual, con fines de ocio o negocios, por menos de un año.',
    },
  ],
  referencias: [
    {
      referencia:
        'Muñoz, A. D. A., & Sánchez, S. G. (2015). Destinos turísticos inteligentes. Economía industrial, 395, 61-69. ',
    },
    {
      referencia:
        'Netto, A. P., & Lohmann, G. (2012). Teoría del turismo. México. Trillas.',
    },
    {
      referencia:
        'Moscoso, F. V. (2013). El papel de los actores territoriales en la definición y configuración de modelos de desarrollo turístico. In Congreso de Turismo:" El Turismo y los Nuevos Paradigmas Educativos"(Ushuahia, Argentina, 2013).',
    },
    {
      referencia:
        'Quesada, F. B. C., Hervé, A., & Sánchez, M. D. S. A. (2009). El sistema turístico en clave de marketing relacional: el factor relacional. Anuario jurídico y económico escurialense, (42), 419-422.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
