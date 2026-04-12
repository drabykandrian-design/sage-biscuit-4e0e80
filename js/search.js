/* ============================================
   EMPRENDE EN ESPAÑA — Motor de búsqueda
   Instrucciones: añade <script src="js/search.js"></script>
   justo antes de </body> en cada página HTML.
   ============================================ */

/* ---------- ÍNDICE DE CONTENIDOS ---------- */
const SEARCH_INDEX = [
  {
    title: "Inicio — Emprende en España",
    url: "/index.html",
    tags: ["inicio", "emprender", "negocio", "guías", "recursos", "emprendedores"],
    description: "Guías prácticas, trámites, plan de negocio y recursos gratuitos para emprendedores en España.",
    body: "empieza tu negocio paso a paso guías prácticas trámites legales plantillas gratuitas lanzar empresa España checklist gratis"
  },
  {
    title: "Cómo darse de alta como autónomo en España",
    url: "/pages/tramites-autonomo-espana.html",
    tags: ["autónomo", "alta autónomo", "cuota autónomo", "trámites", "seguridad social", "hacienda"],
    description: "Paso a paso completo: documentación, cuota de autónomo, bonificaciones y plazos en 2026.",
    body: "alta autónomo España 2026 modelo 037 RETA seguridad social hacienda cuota flat rate bonificación tarifa plana documentos DNI epígrafe IAE"
  },
  {
    title: "Impuestos del autónomo en España 2026",
    url: "/pages/impuestos-autonomo-2026.html",
    tags: ["impuestos", "IVA", "IRPF", "autónomo", "modelos tributarios", "trimestral", "hacienda"],
    description: "IVA, IRPF, cuotas trimestrales y anuales explicadas de forma sencilla y práctica.",
    body: "IVA IRPF modelo 130 modelo 303 modelo 390 modelo 100 trimestral anual declaración renta autónomos deducciones gastos deducibles"
  },
  {
    title: "Cómo registrar una empresa (SL) en España",
    url: "/pages/registro-empresa.html",
    tags: ["sociedad limitada", "SL", "empresa", "registro mercantil", "notaría", "constituir empresa"],
    description: "Pasos para crear y registrar una Sociedad Limitada: notaría, Registro Mercantil, capital mínimo y plazos.",
    body: "sociedad limitada SL constituir empresa notaría registro mercantil capital mínimo 3000 euros estatutos denominación social certificado negativa nombre"
  },
  {
    title: "Cómo validar tu idea de negocio",
    url: "/pages/validar-idea-negocio.html",
    tags: ["validar idea", "idea de negocio", "MVP", "mercado", "demanda", "emprendimiento"],
    description: "Técnicas y herramientas para comprobar si tu idea tiene mercado antes de invertir.",
    body: "validar idea negocio MVP producto mínimo viable mercado demanda encuestas entrevistas clientes lean startup pivot hipótesis"
  },
  {
    title: "Cómo validar una idea de negocio online",
    url: "/pages/validar-idea-online.html",
    tags: ["validar idea", "online", "digital", "landing page", "encuesta", "herramientas"],
    description: "Métodos digitales para validar una idea de negocio: landing pages, encuestas y herramientas gratuitas.",
    body: "landing page encuesta Google Forms Typeform test A/B tráfico anuncios validación digital online internet"
  },
  {
    title: "Cómo validar una idea de negocio de servicios",
    url: "/pages/validar-idea-servicios.html",
    tags: ["servicios", "validar", "primeros clientes", "freelance", "consultoría"],
    description: "Guía práctica para conseguir tus primeros clientes de pago y validar tu negocio de servicios.",
    body: "servicios profesionales primeros clientes pago validar negocio servicios consultoría freelance autónomo"
  },
  {
    title: "Plan de negocio en 10 pasos",
    url: "/pages/plan-negocio-10-pasos.html",
    tags: ["plan de negocio", "business plan", "empresa", "planificación", "finanzas", "estrategia"],
    description: "Cómo crear un plan de negocio profesional en 10 pasos. Plantilla, ejemplos y consejos para España.",
    body: "plan de negocio 10 pasos business plan resumen ejecutivo análisis DAFO mercado competencia finanzas proyección ingresos gastos"
  },
  {
    title: "Plantilla plan de negocio gratis",
    url: "/pages/plantilla-plan-negocio.html",
    tags: ["plantilla", "plan de negocio", "descarga", "PDF", "gratis"],
    description: "Descarga gratis nuestra plantilla de plan de negocio en PDF. Lista para rellenar, adaptada a España.",
    body: "plantilla plan negocio PDF descarga gratis rellenar estructura formato España emprendedores"
  },
  {
    title: "Ejemplo real de plan de negocio en España",
    url: "/pages/ejemplo-plan-negocio.html",
    tags: ["ejemplo", "plan de negocio", "caso real", "servicios", "finanzas"],
    description: "Ejemplo completo de un plan de negocio para una empresa de servicios en España.",
    body: "ejemplo plan negocio real empresa servicios España análisis financiero mercado competencia estrategia"
  },
  {
    title: "Marketing básico para tu negocio en España",
    url: "/pages/marketing-basico-negocio.html",
    tags: ["marketing", "clientes", "ventas", "publicidad", "digital", "bajo coste"],
    description: "Estrategia de marketing de bajo coste para emprendedores. Cómo conseguir tus primeros clientes.",
    body: "marketing digital redes sociales SEO email marketing contenido blog publicidad Google Ads Facebook Instagram bajo coste pequeño presupuesto"
  },
  {
    title: "Cómo vender online en España 2026",
    url: "/pages/ventas-online.html",
    tags: ["vender online", "ecommerce", "ventas", "plataformas", "conversión"],
    description: "Guía práctica para vender online: plataformas, estrategia de precios, conversión y primeras ventas.",
    body: "vender online ecommerce España plataformas Shopify WooCommerce Wallapop Amazon precios conversión primeras ventas"
  },
  {
    title: "Estrategia de redes sociales para negocios",
    url: "/pages/estrategia-redes.html",
    tags: ["redes sociales", "Instagram", "TikTok", "LinkedIn", "contenido", "estrategia"],
    description: "Cómo crear una estrategia de redes sociales efectiva para tu negocio. Instagram, TikTok, LinkedIn.",
    body: "redes sociales Instagram TikTok LinkedIn Facebook contenido calendario editorial seguidores engagement publicaciones estrategia negocios"
  },
  {
    title: "10 errores comunes de emprendedores en España",
    url: "/pages/errores-comunes-emprendedores.html",
    tags: ["errores", "fracaso", "emprendedores", "lecciones", "consejos", "evitar"],
    description: "Los 10 errores más frecuentes al emprender en España y cómo evitarlos.",
    body: "errores frecuentes emprendedores España fracaso negocio lecciones aprendidas evitar consejos experiencia"
  },
  {
    title: "10 recomendaciones para tu primer negocio",
    url: "/pages/recomendaciones-primer-negocio.html",
    tags: ["recomendaciones", "consejos", "primer negocio", "emprender", "España"],
    description: "Los consejos más valiosos para emprendedores que lanzan su primer negocio en España.",
    body: "recomendaciones consejos primer negocio emprender España tips valiosos arrancar empresa"
  },
  {
    title: "Casos de éxito de emprendedores españoles",
    url: "/pages/casos-exito.html",
    tags: ["éxito", "casos reales", "inspiración", "emprendedores", "historias"],
    description: "Historias reales de emprendedores españoles exitosos. Lecciones y claves de su éxito.",
    body: "casos éxito emprendedores españoles historias reales startups España inspiración lecciones negocios exitosos"
  },
  {
    title: "Checklist para iniciar un negocio en España",
    url: "/pages/checklist-inicio-negocio.html",
    tags: ["checklist", "lista", "inicio", "descarga", "gratis", "trámites"],
    description: "Descarga gratis el checklist completo para lanzar tu negocio. Todos los pasos y trámites en una lista.",
    body: "checklist lista inicio negocio descargar gratis pasos trámites lanzar empresa España PDF completo"
  },
  {
    title: "Plantilla de finanzas para pymes gratis",
    url: "/pages/plantilla-finanzas.html",
    tags: ["finanzas", "plantilla", "Excel", "ingresos", "gastos", "punto de equilibrio"],
    description: "Descarga gratis nuestra plantilla de finanzas: ingresos, gastos, punto de equilibrio y flujo de caja.",
    body: "plantilla finanzas Excel PDF ingresos gastos punto equilibrio flujo caja previsión presupuesto pyme autónomo gratis"
  },
  {
    title: "Plantilla de plan de marketing gratis",
    url: "/pages/plantilla-marketing.html",
    tags: ["marketing", "plantilla", "descarga", "plan", "KPIs", "presupuesto"],
    description: "Descarga gratis nuestra plantilla de plan de marketing. Objetivos, canales, presupuesto y KPIs.",
    body: "plantilla plan marketing objetivos canales presupuesto KPIs estrategia digital redes sociales gratis descarga"
  },
  {
    title: "Cómo conseguir tus primeros clientes siendo autónomo",
    url: "/pages/conseguir-primeros-clientes-autonomo.html",
    tags: ["clientes", "primeros clientes", "autónomo", "networking", "LinkedIn", "freelance"],
    description: "Estrategias prácticas para conseguir tus primeros clientes como autónomo en España.",
    body: "primeros clientes autónomo networking LinkedIn Malt Workana Fiverr referencias boca a boca prospección ventas freelance"
  },
  {
    title: "Cómo hacer un estudio de mercado gratis",
    url: "/pages/estudio-de-mercado-gratis.html",
    tags: ["estudio de mercado", "investigación", "competencia", "clientes", "gratis", "herramientas"],
    description: "Herramientas gratuitas y técnicas prácticas para conocer tu mercado y competencia.",
    body: "estudio mercado gratis Google Trends INE SimilarWeb competencia encuestas entrevistas clientes análisis sector demanda"
  },
  {
    title: "Cómo registrar tu marca en España 2026",
    url: "/pages/registrar-marca-espana.html",
    tags: ["marca", "registro", "OEPM", "propiedad intelectual", "nombre comercial", "logo"],
    description: "Guía completa para registrar tu marca en España: OEPM, clases de Niza, costes y plazos.",
    body: "registrar marca España OEPM clases Niza nombre comercial logo propiedad intelectual marca UE EUIPO coste tasas 143 euros"
  },
  {
    title: "Las mejores herramientas gratuitas para emprendedores 2026",
    url: "/pages/herramientas-gratuitas-emprendedores.html",
    tags: ["herramientas", "apps", "gratis", "Canva", "Notion", "Brevo", "productividad"],
    description: "Diseño, contabilidad, marketing y gestión: las apps gratuitas que usan los emprendedores en España.",
    body: "Canva Notion Trello Brevo Mailchimp Google Analytics Ubersuggest Holded Wave Calendly WhatsApp Business herramientas gratis productividad diseño"
  },
  {
    title: "Financiación para startups en España 2026",
    url: "/pages/financiacion-startup-espana.html",
    tags: ["financiación", "inversión", "subvenciones", "ENISA", "business angels", "crowdfunding"],
    description: "Subvenciones, business angels, crowdfunding y préstamos: cómo financiar tu startup en España.",
    body: "financiación startup España ENISA subvenciones ICO business angels crowdfunding aceleradora Lanzadera Wayra Kit Digital inversión capital riesgo"
  },
  {
    title: "Qué es el modelo Canvas y cómo usarlo",
    url: "/pages/modelo-canvas-negocio.html",
    tags: ["canvas", "modelo de negocio", "business model canvas", "propuesta de valor", "segmento clientes"],
    description: "Guía práctica del Business Model Canvas con ejemplos reales para emprendedores en España.",
    body: "canvas business model canvas propuesta valor segmento clientes canales relación ingresos recursos actividades socios costes Osterwalder"
  },
  {
    title: "Cómo crear una tienda online en España desde cero",
    url: "/pages/crear-tienda-online-espana.html",
    tags: ["tienda online", "ecommerce", "Shopify", "WooCommerce", "vender online", "logística"],
    description: "Paso a paso para lanzar tu ecommerce en España: plataforma, legalidad, pagos y logística.",
    body: "tienda online ecommerce España Shopify WooCommerce PrestaShop Stripe PayPal Bizum logística envíos SEUR Correos LSSI RGPD cookies IVA OSS"
  }
];

/* ---------- MOTOR DE BÚSQUEDA ---------- */
function searchIndex(query) {
  if (!query || query.trim().length < 2) return [];
  const terms = query.toLowerCase().trim().split(/\s+/).filter(t => t.length > 1);
  const stopWords = new Set(["de","la","el","en","y","a","los","del","se","las","un","una","por","con","para","es","su","al","lo","como","más","pero","sus","le","ya","o","fue","este","ha","si","porque","esta","son","entre","cuando","muy","sin","sobre","también","me","hasta","hay","donde","quien","desde","todo","nos","durante","todos","uno","les","ni","contra","otros","ese","eso","ante","ellos","e","esto","mí","antes","algunos","qué","unos","yo","otro","otras","otra","él","tanto","esa","estos","mucho","quienes","nada","muchos","cual","poco","ella","estar","estas","algunas","algo","nosotros"]);
  const filteredTerms = terms.filter(t => !stopWords.has(t));
  if (filteredTerms.length === 0) return [];

  return SEARCH_INDEX.map(page => {
    const titleLow = page.title.toLowerCase();
    const tagsLow = page.tags.join(' ').toLowerCase();
    const descLow = page.description.toLowerCase();
    const bodyLow = page.body.toLowerCase();
    let score = 0;

    filteredTerms.forEach(term => {
      if (titleLow.includes(term)) score += 10;
      if (tagsLow.includes(term)) score += 7;
      if (descLow.includes(term)) score += 4;
      if (bodyLow.includes(term)) score += 2;
    });
    return { ...page, score };
  })
  .filter(p => p.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 8);
}

/* ---------- DETECTAR BASE URL ---------- */
function resolveUrl(relativeUrl) {
  const isInPages = window.location.pathname.includes('/pages/');
  if (isInPages) {
    if (relativeUrl.startsWith('/pages/')) return relativeUrl.replace('/pages/', '');
    if (relativeUrl === '/index.html') return '../index.html';
  }
  return relativeUrl;
}

/* ---------- INYECTAR ESTILOS ---------- */
const SEARCH_STYLES = `
  #ee-search-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    background: #1E3A8A;
    color: #fff !important;
    border: none;
    border-radius: 100px;
    padding: 8px 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    cursor: pointer;
    transition: background .22s, transform .18s;
    white-space: nowrap;
    text-decoration: none !important;
    margin-left: 8px;
  }
  #ee-search-btn:hover { background: #2563EB; transform: translateY(-1px); }
  #ee-search-btn svg { flex-shrink: 0; }

  #ee-search-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(17,24,39,.72);
    backdrop-filter: blur(4px);
    z-index: 9999;
    align-items: flex-start;
    justify-content: center;
    padding-top: 80px;
  }
  #ee-search-overlay.open { display: flex; }

  #ee-search-modal {
    background: #fff;
    border-radius: 20px;
    width: 92%;
    max-width: 680px;
    box-shadow: 0 24px 80px rgba(30,58,138,.22);
    overflow: hidden;
    animation: searchFadeIn .2s ease;
  }
  @keyframes searchFadeIn {
    from { opacity: 0; transform: translateY(-16px) scale(.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  #ee-search-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 18px 20px;
    border-bottom: 1.5px solid #DBEAFE;
    background: linear-gradient(135deg,#1E3A8A 0%,#2563EB 100%);
  }
  #ee-search-header svg { color: #93C5FD; flex-shrink:0; }

  #ee-search-input {
    flex: 1;
    border: none;
    outline: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 1.05rem;
    background: transparent;
    color: #fff;
    caret-color: #10B981;
  }
  #ee-search-input::placeholder { color: rgba(255,255,255,.55); }

  #ee-search-close {
    background: rgba(255,255,255,.15);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    cursor: pointer;
    color: #fff;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .18s;
    flex-shrink:0;
  }
  #ee-search-close:hover { background: rgba(255,255,255,.28); }

  #ee-search-results {
    max-height: 420px;
    overflow-y: auto;
    padding: 10px 12px;
  }
  #ee-search-results::-webkit-scrollbar { width: 5px; }
  #ee-search-results::-webkit-scrollbar-thumb { background: #DBEAFE; border-radius: 10px; }

  .ee-result-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 13px 12px;
    border-radius: 12px;
    cursor: pointer;
    transition: background .18s;
    text-decoration: none;
    color: inherit;
    border: none;
  }
  .ee-result-item:hover { background: #DBEAFE; }
  .ee-result-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: #DBEAFE;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 1.15rem;
  }
  .ee-result-title {
    font-family: 'Syne', sans-serif;
    font-weight: 700;
    font-size: .95rem;
    color: #1E3A8A;
    margin-bottom: 3px;
    line-height: 1.3;
  }
  .ee-result-desc {
    font-size: .82rem;
    color: #6B7280;
    line-height: 1.45;
    margin: 0;
  }
  .ee-result-tag {
    display: inline-block;
    font-size: .7rem;
    background: #D1FAE5;
    color: #059669;
    border-radius: 100px;
    padding: 1px 8px;
    margin-top: 4px;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    letter-spacing: .02em;
  }

  #ee-search-empty {
    text-align: center;
    padding: 36px 20px;
    color: #9CA3AF;
    font-family: 'DM Sans', sans-serif;
  }
  #ee-search-empty strong { display: block; font-size: 1rem; color: #374151; margin-bottom: 4px; }

  #ee-search-footer {
    padding: 10px 20px;
    border-top: 1px solid #F3F4F6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: .75rem;
    color: #9CA3AF;
    font-family: 'DM Sans', sans-serif;
  }
  .ee-kbd {
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    border-radius: 5px;
    padding: 1px 6px;
    font-size: .72rem;
    color: #374151;
    font-family: monospace;
  }

  #ee-search-suggestions {
    padding: 14px 20px 6px;
  }
  #ee-search-suggestions p {
    font-size: .78rem;
    color: #9CA3AF;
    font-family: 'DM Sans', sans-serif;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: .06em;
    font-weight: 600;
  }
  .ee-suggest-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .ee-chip {
    background: #F3F4F6;
    border: none;
    border-radius: 100px;
    padding: 5px 13px;
    font-size: .82rem;
    color: #1E3A8A;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: background .15s, color .15s;
  }
  .ee-chip:hover { background: #DBEAFE; color: #1E3A8A; }

  @media (max-width: 480px) {
    #ee-search-overlay { padding-top: 40px; align-items: flex-start; }
    #ee-search-modal { border-radius: 16px; width: 96%; }
    .ee-search-btn-label { display: none; }
    #ee-search-btn { padding: 8px 12px; }
  }
`;

/* ---------- ICONOS POR CATEGORIA (SVG) ---------- */
const SVG_ICONS = {
  file:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  chart:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  users:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  download:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  bulb:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
  alert:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  money:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  cart:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  tag:     `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>`,
  tool:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  grid:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  search2: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  star:    `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  phone:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  building:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
};

function getIcon(title, tags) {
  const t = title.toLowerCase() + ' ' + tags.join(' ').toLowerCase();
  if (t.includes('autónom') || t.includes('alta')) return SVG_ICONS.file;
  if (t.includes('impuest') || t.includes('iva') || t.includes('irpf')) return SVG_ICONS.file;
  if (t.includes('plan de negocio') || t.includes('planific')) return SVG_ICONS.chart;
  if (t.includes('marketing') || t.includes('clientes') || t.includes('vender')) return SVG_ICONS.users;
  if (t.includes('plantilla') || t.includes('checklist') || t.includes('descarga')) return SVG_ICONS.download;
  if (t.includes('valida') || t.includes('idea')) return SVG_ICONS.bulb;
  if (t.includes('error') || t.includes('recomend')) return SVG_ICONS.alert;
  if (t.includes('financiac') || t.includes('invers') || t.includes('subvenc')) return SVG_ICONS.money;
  if (t.includes('tienda') || t.includes('ecommerce') || t.includes('online')) return SVG_ICONS.cart;
  if (t.includes('marca') || t.includes('oepm') || t.includes('propiedad')) return SVG_ICONS.tag;
  if (t.includes('herramienta') || t.includes('app') || t.includes('canva')) return SVG_ICONS.tool;
  if (t.includes('canvas') || t.includes('modelo')) return SVG_ICONS.grid;
  if (t.includes('mercado') || t.includes('estudio')) return SVG_ICONS.search2;
  if (t.includes('caso') || t.includes('exito')) return SVG_ICONS.star;
  if (t.includes('redes') || t.includes('instagram') || t.includes('tiktok')) return SVG_ICONS.phone;
  if (t.includes('empresa') || t.includes('registro')) return SVG_ICONS.building;
  return SVG_ICONS.file;
}

const QUICK_SEARCHES = ['Alta autónomo', 'Plan de negocio', 'Primeros clientes', 'Subvenciones', 'Tienda online', 'Modelo Canvas'];

/* ---------- CONSTRUIR MODAL ---------- */
function buildSearchUI() {
  // Estilos
  const style = document.createElement('style');
  style.textContent = SEARCH_STYLES;
  document.head.appendChild(style);

  // Overlay
  const overlay = document.createElement('div');
  overlay.id = 'ee-search-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Buscador');

  overlay.innerHTML = `
    <div id="ee-search-modal">
      <div id="ee-search-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input id="ee-search-input" type="search" placeholder="Busca guías, trámites, plantillas…" autocomplete="off" spellcheck="false" aria-label="Buscar en EmprendeES"/>
        <button id="ee-search-close" aria-label="Cerrar buscador">✕</button>
      </div>
      <div id="ee-search-suggestions">
        <p>Búsquedas frecuentes</p>
        <div class="ee-suggest-chips">
          ${QUICK_SEARCHES.map(q => `<button class="ee-chip">${q}</button>`).join('')}
        </div>
      </div>
      <div id="ee-search-results"></div>
      <div id="ee-search-footer">
        <span>EmprendeES &mdash; Contenido 100% gratuito</span>
        <span><kbd class="ee-kbd">Esc</kbd> para cerrar</span>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Botón en navbar
  const navLinks = document.querySelector('.nav-links');
  const navInner = document.querySelector('.navbar-inner');
  if (navInner) {
    const btn = document.createElement('button');
    btn.id = 'ee-search-btn';
    btn.setAttribute('aria-label', 'Abrir buscador');
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <span class="ee-search-btn-label">Buscar</span>
    `;

    // Insertar antes del nav-cta si existe, o al final
    const navCta = navInner.querySelector('.nav-cta');
    if (navCta) {
      navInner.insertBefore(btn, navCta);
    } else {
      navInner.appendChild(btn);
    }
    btn.addEventListener('click', openSearch);
  }

  /* ---- Eventos ---- */
  const input = document.getElementById('ee-search-input');
  const results = document.getElementById('ee-search-results');
  const suggestions = document.getElementById('ee-search-suggestions');

  function openSearch() {
    overlay.classList.add('open');
    setTimeout(() => input.focus(), 60);
  }

  function closeSearch() {
    overlay.classList.remove('open');
    input.value = '';
    results.innerHTML = '';
    suggestions.style.display = '';
  }

  function renderResults(query) {
    const items = searchIndex(query);
    suggestions.style.display = query.length > 0 ? 'none' : '';

    if (query.trim().length >= 2 && items.length === 0) {
      results.innerHTML = `
        <div id="ee-search-empty">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin:0 auto 12px;display:block;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <strong>Sin resultados para "${query}"</strong>
          <p style="margin-top:6px;font-size:.85rem;">Prueba con otro termino: <em>autonomo, plan de negocio, tramites...</em></p>
        </div>`;
      return;
    }

    if (query.trim().length < 2) {
      results.innerHTML = '';
      return;
    }

    results.innerHTML = items.map(page => {
      const icon = getIcon(page.title, page.tags);
      const tag = page.tags[0];
      const href = resolveUrl(page.url);
      return `
        <a class="ee-result-item" href="${href}">
          <div class="ee-result-icon">${icon}</div>
          <div style="flex:1;min-width:0;">
            <div class="ee-result-title">${page.title}</div>
            <p class="ee-result-desc">${page.description}</p>
            <span class="ee-result-tag">${tag}</span>
          </div>
        </a>`;
    }).join('');
  }

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderResults(input.value), 140);
  });

  // Chips de búsqueda rápida
  document.querySelectorAll('.ee-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.textContent;
      renderResults(chip.textContent);
      input.focus();
    });
  });

  // Cerrar
  document.getElementById('ee-search-close').addEventListener('click', closeSearch);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeSearch(); });

  // Teclado
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName))) {
      e.preventDefault();
      overlay.classList.contains('open') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape') closeSearch();
  });
}

/* ---------- INIT ---------- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', buildSearchUI);
} else {
  buildSearchUI();
}
