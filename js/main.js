/* ============================================
   EMPRENDE EN ESPAÑA — Main JS
   ============================================ */

(function () {

  /* ---- Site search index (titles/descriptions match real pages) ---- */
  var PAGES_INDEX = [
    { title: 'Cómo validar tu idea de negocio', desc: 'Métodos y herramientas para comprobar la demanda antes de invertir.', file: 'validar-idea-negocio.html' },
    { title: 'Validar tu idea de negocio online', desc: 'Landing pages, encuestas y herramientas digitales gratuitas.', file: 'validar-idea-online.html' },
    { title: 'Validar una idea de negocio de servicios', desc: 'Cómo conseguir tus primeros clientes de pago.', file: 'validar-idea-servicios.html' },
    { title: 'Alta como autónomo en España', desc: 'Documentos, cuota, bonificaciones y plazos paso a paso.', file: 'tramites-autonomo-espana.html' },
    { title: 'Impuestos del autónomo', desc: 'IVA, IRPF, modelos tributarios, plazos y deducciones.', file: 'impuestos-autonomo-2026.html' },
    { title: 'Registrar una empresa (SL)', desc: 'Notaría, Registro Mercantil, capital mínimo y plazos.', file: 'registro-empresa.html' },
    { title: 'Plan de negocio en 10 pasos', desc: 'Cómo crear un plan de negocio profesional.', file: 'plan-negocio-10-pasos.html' },
    { title: 'Plantilla de plan de negocio', desc: 'Plantilla descargable lista para rellenar.', file: 'plantilla-plan-negocio.html' },
    { title: 'Ejemplo real de plan de negocio', desc: 'Caso práctico completo con finanzas y marketing.', file: 'ejemplo-plan-negocio.html' },
    { title: 'Marketing básico para tu negocio', desc: 'Estrategia de bajo coste para conseguir tus primeros clientes.', file: 'marketing-basico-negocio.html' },
    { title: 'Cómo vender online', desc: 'Plataformas, precios, conversión y primeras ventas.', file: 'ventas-online.html' },
    { title: 'Estrategia de redes sociales', desc: 'Instagram, TikTok y LinkedIn para tu negocio.', file: 'estrategia-redes.html' },
    { title: 'Cómo fijar el precio de tu producto o servicio', desc: 'Coste más margen, valor percibido y psicología de precios.', file: 'como-fijar-precio-producto-servicio.html' },
    { title: 'Errores comunes al emprender', desc: 'Los 10 fallos más frecuentes y cómo evitarlos.', file: 'errores-comunes-emprendedores.html' },
    { title: 'Recomendaciones para tu primer negocio', desc: 'Consejos prácticos para arrancar con buen pie.', file: 'recomendaciones-primer-negocio.html' },
    { title: 'Casos de éxito de emprendedores', desc: 'Historias reales de negocios españoles.', file: 'casos-exito.html' },
    { title: 'Checklist de inicio de negocio', desc: 'Lista completa de pasos y trámites, descargable.', file: 'checklist-inicio-negocio.html' },
    { title: 'Plantilla de finanzas', desc: 'Ingresos, gastos, punto de equilibrio y flujo de caja.', file: 'plantilla-finanzas.html' },
    { title: 'Plantilla de plan de marketing', desc: 'Objetivos, canales, presupuesto y KPIs.', file: 'plantilla-marketing.html' }
  ];

  document.addEventListener('DOMContentLoaded', function () {

    /* ---- Mobile Menu ---- */
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.addEventListener('click', function () {
        var isOpen = hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
      });
    }

    /* ---- FAQ Accordion ---- */
    document.querySelectorAll('.faq-q').forEach(function (btn) {
      btn.setAttribute('aria-expanded', 'false');
      btn.addEventListener('click', function () {
        var item = btn.parentElement;
        var isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function (o) {
          o.classList.remove('open');
          var q = o.querySelector('.faq-q');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    /* ---- Active nav link ---- */
    var path = window.location.pathname;
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && path.indexOf(href.replace('../', '').replace('.html', '')) !== -1) {
        a.classList.add('active');
      }
    });

    /* ---- Smooth scroll for anchor links ---- */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var href = a.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* ---- Site search ---- */
    var searchInput = document.querySelector('.search-input');
    var searchResults = document.querySelector('.search-results');
    if (searchInput && searchResults) {
      var onPagesDir = window.location.pathname.indexOf('/pages/') !== -1;
      var base = onPagesDir ? '' : 'pages/';
      var renderResults = function (query) {
        searchResults.innerHTML = '';
        if (!query) { searchResults.classList.remove('open'); return; }
        var q = query.toLowerCase();
        var matches = PAGES_INDEX.filter(function (p) {
          return p.title.toLowerCase().indexOf(q) !== -1 || p.desc.toLowerCase().indexOf(q) !== -1;
        }).slice(0, 6);
        if (matches.length === 0) {
          searchResults.innerHTML = '<div class="search-empty">Sin resultados para "' + query.replace(/</g, '&lt;') + '"</div>';
        } else {
          matches.forEach(function (m) {
            var a = document.createElement('a');
            a.href = base + m.file;
            a.innerHTML = '<span class="sr-title">' + m.title + '</span><span class="sr-desc">' + m.desc + '</span>';
            searchResults.appendChild(a);
          });
        }
        searchResults.classList.add('open');
      };
      searchInput.addEventListener('input', function () { renderResults(searchInput.value.trim()); });
      searchInput.addEventListener('focus', function () { if (searchInput.value.trim()) renderResults(searchInput.value.trim()); });
      document.addEventListener('click', function (e) {
        if (!e.target.closest('.search-wrap')) searchResults.classList.remove('open');
      });
    }

  });

})();

/* ---- Google Analytics placeholder ---- */
// Para activar: reemplaza G-XXXXXXXXXX con tu ID de Google Analytics
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'G-XXXXXXXXXX');
