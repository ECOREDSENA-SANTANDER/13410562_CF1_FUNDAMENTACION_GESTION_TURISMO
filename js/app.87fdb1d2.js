(function(e){function n(n){for(var o,t,c=n[0],s=n[1],u=n[2],d=0,l=[];d<c.length;d++)t=c[d],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&l.push(i[t][0]),i[t]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(n);while(l.length)l.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,t=1;t<a.length;t++){var c=a[t];0!==i[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},t={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"a2c5b66c","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"d322d60d",creditos:"2d37fb69",glosario:"096cf82a",intro:"13206594",referencias:"f18eea9d",sintesis:"2a8a1445",tema1:"2bb2ebc6",tema2:"cebee87b",tema3:"d249f9c0",tema4:"821458ce"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={actividad:1,"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};t[e]?n.push(t[e]):0!==t[e]&&a[e]&&n.push(t[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"99ae0f28","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"fe0219ca","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"22dc40db","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"86dbf65e","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"ca83053c",creditos:"bc9c2567",glosario:"5c281a9a",intro:"31d6cfe0",referencias:"74786206",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",i=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===i))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===o||d===i)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var o=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete t[e],m.parentNode.removeChild(m),a(r)},m.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){t[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=i[e]=[n,a]}));n.push(o[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var l=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(m);var a=i[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",l.name="ChunkLoadError",l.type=o,l.request=t,a[1](l)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var m=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=a("2877"),u=Object(s["a"])(c,t,i,!1,null,null,null),d=u.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),m=a("8c4f"),f=a("ae58"),p=a("7e58");l["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Turismo superestructuras y normatividad",descripcionCurso:"La integración de políticas y normativas que buscan equilibrar el crecimiento económico del sector turístico con el bienestar de las comunidades locales y la protección del entorno natural. Este enfoque garantiza la competitividad de los destinos al tiempo que promueve la sostenibilidad. La regulación del turismo en Colombia fomenta un desarrollo turístico que beneficia a todos los actores involucrados. ",imagenBannerPrincipal:a("65fa"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("71f8")},{clases:["banner-principal-decorativo-2"],imagen:a("8f04")},{clases:["banner-principal-decorativo-3"],imagen:a("7d72")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Turismo",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Sistema turístico",hash:"t_1_1"}]},{nombreRuta:"tema2",numero:"2",titulo:"Superestructuras",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Superestructuras turísticas",hash:"t_2_1"}]},{nombreRuta:"tema3",numero:"3",titulo:"Destino turístico",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"Características del destino turístico",hash:"t_3_1"},{numero:"3.2",titulo:"Agentes del destino",hash:"t_3_2"}]},{nombreRuta:"tema4",numero:"4",titulo:"Política y normatividad turística",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Política turística",hash:"t_4_1"},{numero:"4.2",titulo:"Legislación y normatividad colombiana en turismo",hash:"t_4_2"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF1_13410562_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1.  Turismo",referencia:"Inostroza, G. (2008). Aportes para un modelo de gestión sostenible del turismo comunitario en la región andina. Gestión turística, (10), 77-90.",tipo:"Artículo",link:"http://revistas.uach.cl/index.php/gestur/article/view/3485"},{tema:"3. Destino turístico",referencia:"Pearce, D. G. (2016). Modelos de gestión de destinos: Síntesis y evaluación. Estudios y perspectivas en turismo, 25(1), 01-16.",tipo:"Artículo",link:"https://www.scielo.org.ar/scielo.php?pid=S1851-17322016000100001&script=sci_arttext"},{tema:"3. Destino turístico",referencia:"Muñoz, A. D. A., & Sánchez, S. G. (2015). Destinos turísticos inteligentes. Economía industrial, 395, 61-69.",tipo:"PDF",link:"https://www.mintur.gob.es/Publicaciones/Publicacionesperiodicas/EconomiaIndustrial/RevistaEconomiaIndustrial/395/LOPEZ%20DE%20AVILA%20y%20GARCIA.pdf"}],glosario:[{termino:"Ciclo del Producto",significado:"Etapas de evolución de un producto, desde su lanzamiento hasta el cese de su comercialización."},{termino:"Demanda Turística",significado:"Total, de turistas que consumen productos y servicios en un destino."},{termino:"Destino",significado:"Lugar al que se dirigen los turistas, equipado con servicios e instalaciones que cubren sus necesidades."},{termino:"Espacio Turístico",significado:"Área geográfica donde ocurre la experiencia turística."},{termino:"Imagen",significado:"Percepción mental de una marca, influenciada por la personalidad del consumidor."},{termino:"Infraestructura Turística",significado:"Conjunto de bienes y servicios disponibles en un destino para satisfacer al turista."},{termino:"Marca",significado:"Identidad asignada a un producto o servicio, que lo diferencia de la competencia y garantiza su calidad."},{termino:"Oferta Turística",significado:"Productos, servicios y organizaciones disponibles para los turistas."},{termino:"Planta Turística",significado:"Instalaciones y equipos que cubren las necesidades de transporte, alojamiento, alimentación y recreación del turista."},{termino:"Política Turística",significado:"Conjunto de normas y acciones del Estado para regular, fomentar y proteger el turismo, en colaboración con el sector privado."},{termino:"Prestador de Servicios Turísticos",significado:"Persona o empresa registrada que ofrece, media o contrata servicios turísticos en Colombia."},{termino:"Producto Turístico",significado:"Conjunto de elementos que generan satisfacción al turista, consumidos en diferentes etapas."},{termino:"Sistema Turístico",significado:"Conjunto de acciones y recursos que interactúan para organizar la actividad turística."},{termino:"Superestructura Turística",significado:"Organismos públicos y privados que regulan y optimizan el sistema turístico."},{termino:"Territorio",significado:"Espacio físico y social donde se manifiestan la identidad y la oferta turística."},{termino:"Turismo",significado:"Actividades realizadas por personas en sus viajes y estancias fuera de su entorno habitual, con fines de ocio o negocios, por menos de un año."}],referencias:[{referencia:"Muñoz, A. D. A., & Sánchez, S. G. (2015). Destinos turísticos inteligentes. Economía industrial, 395, 61-69. "},{referencia:"Netto, A. P., & Lohmann, G. (2012). Teoría del turismo. México. Trillas."},{referencia:'Moscoso, F. V. (2013). El papel de los actores territoriales en la definición y configuración de modelos de desarrollo turístico. In Congreso de Turismo:" El Turismo y los Nuevos Paradigmas Educativos"(Ushuahia, Argentina, 2013).'},{referencia:"Quesada, F. B. C., Hervé, A., & Sánchez, M. D. S. A. (2009). El sistema turístico en clave de marketing relacional: el factor relacional. Anuario jurídico y económico escurialense, (42), 419-422."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Claudia Johanna Gómez Pérez",cargo:"Responsable de línea de producción",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Sandra Paola Morales Páez",cargo:"Evaluadora instruccional",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Edison Eduardo Mantilla Cuadros",cargo:"Diseñador de contenidos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrolladora <em>full stack</em>",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Animadora y productora multimedia",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Yineth Ibette Gonzalez Quintero",cargo:"Validadora de recursos educativos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Laura Paola Gelvez Manosalva",cargo:"Validadora de recursos educativos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Erika Fernanda Mejía Pinzón",cargo:"Evaluadora para contenidos inclusivos y accesibles",centro:"Centro Agroturístico - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"65fa":function(e,n,a){e.exports=a.p+"img/banner-principal.205ab7ff.png"},"71f8":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.99bc4137.svg"},"7d72":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.b69f5285.svg"},"8f04":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.50744610.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.528aeb8a.png"}});
//# sourceMappingURL=app.87fdb1d2.js.map