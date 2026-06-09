/* ===================================================================
   Yunhan Kim — site logic: i18n toggle, render, interactions
   =================================================================== */
(function () {
  "use strict";

  let lang = localStorage.getItem("yk-lang") || "en";
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const t  = (obj) => (obj && typeof obj === "object" ? (obj[lang] ?? obj.en) : obj);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  // bold the "Yunhan Kim" occurrence in an author list
  const boldName = (s) => s.replace(/(Yunhan Kim|김윤한)/g, "<b>$1</b>");

  const NAME_RE = /Yunhan Kim|김윤한/;
  const YOUN_RE = /Byeng D\. Youn|윤병동/;
  // Render a full author list, marking the first author (†) and corresponding author (*).
  // Default rule:
  //   • first author      = the first-listed author
  //   • corresponding     = Byeng D. Youn (윤병동) wherever present; otherwise the last author
  //   • solo author       = both † and *
  // An optional `override` ({first:[idx...], corr:[idx...]}) handles exceptions such as
  // co-first / co-corresponding authorship. Yunhan Kim's name is bolded for emphasis.
  function renderAuthors(authors, override) {
    const str = (authors && typeof authors === "object") ? (authors.en || authors.ko) : authors;
    const parts = String(str).split(/,\s*/);
    const n = parts.length;
    let firstSet, corrSet;
    if (override) {
      firstSet = new Set(override.first || [0]);
      corrSet  = new Set(override.corr  || [n - 1]);
    } else {
      const yIdx = parts.findIndex(p => YOUN_RE.test(p));
      const corrIdx = (n === 1) ? 0 : (yIdx >= 0 ? yIdx : n - 1);
      firstSet = new Set([0]);
      corrSet  = new Set([corrIdx]);
    }
    return parts.map((p, i) => {
      let mk = "";
      if (firstSet.has(i)) mk += '<sup class="fa-mark">†</sup>';
      if (corrSet.has(i))  mk += '<sup class="corr-mark">*</sup>';
      const name = NAME_RE.test(p) ? `<b>${p}</b>` : p;
      return name + mk;
    }).join(", ");
  }

  /* ---------- Static i18n strings ---------- */
  function applyI18n() {
    $$("[data-i18n]").forEach(n => { n.textContent = t(I18N[n.dataset.i18n]); });
    $$("[data-field]").forEach(n => {
      const v = DATA.profile[n.dataset.field] ?? DATA[n.dataset.field];
      n.innerHTML = t(v);
    });
    document.documentElement.lang = lang;
    document.title = (lang === "ko" ? "김윤한 — 선임연구원, KETI" : "Yunhan Kim — Senior Researcher, KETI");
  }

  /* ---------- Hero contact + stats ---------- */
  function renderHero() {
    const p = DATA.profile;
    $("#emailLink").href = "mailto:" + p.email;
    $("#emailLink").title = p.email;
    $("#emailText").textContent = "Email";
    const li = $("#linkedinLink");
    if (p.linkedin) { li.href = p.linkedin; li.style.display = ""; }
    else { li.style.display = "none"; }
    const sc = $("#scholarLink");
    if (sc) { if (p.scholar) { sc.href = p.scholar; sc.style.display = ""; } else { sc.style.display = "none"; } }
    const oc = $("#orcidLink");
    if (oc) { if (p.orcid) { oc.href = p.orcid; oc.style.display = ""; } else { oc.style.display = "none"; } }
    $("#footEmail").href = "mailto:" + p.email;
    $("#footEmail").textContent = p.email;
    $("#year").textContent = "2026";

    const stats = [
      { n: DATA.journals.length + "+", k: "stat_journals" },
      { n: DATA.confIntl.length + DATA.confDomestic.length + "+", k: "stat_conf" },
      { n: DATA.patentsRegistered.length + DATA.patentsApplied.length + "", k: "stat_patents" },
      { n: DATA.awards.length + "+", k: "stat_awards" }
    ];
    const box = $("#heroStats");
    box.innerHTML = "";
    stats.forEach(s => {
      box.appendChild(el("div", "stat", `<b>${s.n}</b><span data-i18n="${s.k}">${t(I18N[s.k])}</span>`));
    });
  }

  /* ---------- Research pillars with illustrations ---------- */
  const RESEARCH_SVG = {
    mfg: `<svg viewBox="0 0 120 120" fill="none"><defs><linearGradient id="gm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1f5fd6"/><stop offset="1" stop-color="#37b6ff"/></linearGradient></defs>
      <rect x="14" y="62" width="92" height="44" rx="6" fill="url(#gm)" opacity=".12"/>
      <path d="M22 74h26v24H22zM52 66h24v32H52zM80 78h22v20H80z" stroke="url(#gm)" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="60" cy="34" r="15" stroke="url(#gm)" stroke-width="3"/>
      <path d="M60 19v-7M60 56v-7M75 34h7M38 34h7M70 24l5-5M45 49l5-5M70 44l5 5M45 19l5 5" stroke="url(#gm)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="34" r="5" fill="url(#gm)"/>
      <circle cx="35" cy="86" r="3" fill="url(#gm)"/><circle cx="64" cy="82" r="3" fill="url(#gm)"/><circle cx="91" cy="88" r="3" fill="url(#gm)"/></svg>`,
    fm: `<svg viewBox="0 0 120 120" fill="none"><defs><linearGradient id="gf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6a4dff"/><stop offset="1" stop-color="#c14dff"/></linearGradient></defs>
      <path d="M60 16l40 14-40 14-40-14z" stroke="url(#gf)" stroke-width="3" stroke-linejoin="round"/>
      <path d="M20 48l40 14 40-14M20 66l40 14 40-14" stroke="url(#gf)" stroke-width="3" stroke-linejoin="round" opacity=".75"/>
      <path d="M20 84l40 14 40-14" stroke="url(#gf)" stroke-width="3" stroke-linejoin="round" opacity=".5"/>
      <circle cx="60" cy="30" r="4" fill="url(#gf)"/></svg>`,
    humanoid: `<svg viewBox="0 0 120 120" fill="none"><defs><linearGradient id="gh" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0ea5a5"/><stop offset="1" stop-color="#1f5fd6"/></linearGradient></defs>
      <rect x="44" y="18" width="32" height="26" rx="9" stroke="url(#gh)" stroke-width="3"/>
      <circle cx="54" cy="31" r="3.2" fill="url(#gh)"/><circle cx="66" cy="31" r="3.2" fill="url(#gh)"/>
      <path d="M60 44v8" stroke="url(#gh)" stroke-width="3" stroke-linecap="round"/>
      <rect x="40" y="52" width="40" height="34" rx="8" stroke="url(#gh)" stroke-width="3"/>
      <path d="M40 62l-16 8M80 62l16 8M50 86l-6 18M70 86l6 18" stroke="url(#gh)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="68" r="5" fill="url(#gh)" opacity=".5"/>
      <circle cx="24" cy="70" r="3.5" fill="url(#gh)"/><circle cx="96" cy="70" r="3.5" fill="url(#gh)"/></svg>`,
    agent: `<svg viewBox="0 0 120 120" fill="none"><defs><linearGradient id="ga" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2563eb"/><stop offset="1" stop-color="#9333ea"/></linearGradient></defs>
      <rect x="40" y="40" width="40" height="34" rx="9" stroke="url(#ga)" stroke-width="3"/>
      <circle cx="52" cy="57" r="3.4" fill="url(#ga)"/><circle cx="68" cy="57" r="3.4" fill="url(#ga)"/>
      <path d="M60 28v12" stroke="url(#ga)" stroke-width="3" stroke-linecap="round"/><circle cx="60" cy="24" r="4" fill="url(#ga)"/>
      <path d="M40 57H22M80 57h18" stroke="url(#ga)" stroke-width="3" stroke-linecap="round"/>
      <rect x="8" y="49" width="14" height="16" rx="3" stroke="url(#ga)" stroke-width="3"/>
      <rect x="98" y="49" width="14" height="16" rx="3" stroke="url(#ga)" stroke-width="3"/>
      <path d="M48 74v10a8 8 0 008 8h8a8 8 0 008-8V74" stroke="url(#ga)" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="100" r="4" fill="url(#ga)"/></svg>`
  };
  const CONCEPT_SVG = {
    intelligence: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 10a9 9 0 00-9 9v14a7 7 0 11-7-7"/><path d="M21 19a8 8 0 108-8"/><circle cx="34" cy="14" r="2.5" fill="currentColor" stroke="none"/><circle cx="14" cy="26" r="2.5" fill="currentColor" stroke="none"/><circle cx="24" cy="33" r="2.5" fill="currentColor" stroke="none"/><path d="M34 14L24 19M14 26l10-3M24 33v-8"/></svg>`,
    embodiment: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="6" width="14" height="11" rx="4"/><circle cx="22.5" cy="11.5" r="1.6" fill="currentColor" stroke="none"/><circle cx="27.5" cy="11.5" r="1.6" fill="currentColor" stroke="none"/><path d="M25 17v6M25 23l-9 4-4 9M25 23l10 3 3 7"/><rect x="8" y="36" width="9" height="6" rx="2"/><rect x="33" y="34" width="9" height="6" rx="2"/></svg>`,
    core: `<svg viewBox="0 0 48 48" fill="none"><g stroke="#fff" stroke-width="2.2" opacity=".9" stroke-linecap="round"><line x1="24" y1="24" x2="24" y2="9"/><line x1="24" y1="24" x2="37" y2="16"/><line x1="24" y1="24" x2="37" y2="32"/><line x1="24" y1="24" x2="24" y2="39"/><line x1="24" y1="24" x2="11" y2="32"/><line x1="24" y1="24" x2="11" y2="16"/></g><g fill="#fff"><circle cx="24" cy="9" r="3"/><circle cx="37" cy="16" r="3"/><circle cx="37" cy="32" r="3"/><circle cx="24" cy="39" r="3"/><circle cx="11" cy="32" r="3"/><circle cx="11" cy="16" r="3"/></g><circle cx="24" cy="24" r="5.5" fill="#fff"/><circle cx="24" cy="24" r="2.6" fill="#2b56c8"/></svg>`
  };
  function renderConcept() {
    const box = $("#researchConcept"); if (!box) return;
    box.innerHTML = `<img src="assets/research/concept.png" alt="Intelligence — AI Autonomous Manufacturing — Embodiment">`;
  }
  const FLOW_ICONS = [
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z"/><circle cx="12" cy="12" r="2.6"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 20V11M12 20V5M19 20v-6"/></svg>`,
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h7M7.5 21v-5M7.5 16l-1.5-6 8-2.3"/><rect x="12" y="4" width="8" height="5.4" rx="1.6"/><path d="M14.5 12l1-2.6"/></svg>`
  ];
  const FLOW_KEY = ["u", "d", "a"];
  function renderFlow() {
    const box = $("#researchFlow"); if (!box) return;
    const f = DATA.research.flow;
    const steps = f.steps.map((s, i) =>
      `<span class="rflow__step rflow__step--${FLOW_KEY[i]}">${FLOW_ICONS[i]}<span>${t(s)}</span></span>` +
      (i < f.steps.length - 1 ? `<span class="rflow__arrow rflow__arrow--${FLOW_KEY[i]}">→</span>` : "")
    ).join("");
    box.innerHTML = `<div class="rflow__steps">${steps}</div><div class="rflow__tag">${t(f.tagline)}</div>`;
  }

  function renderResearch() {
    const intro = $("#researchIntro");
    if (intro) intro.innerHTML = t(DATA.research.intro);
    renderConcept();
    renderFlow();
    const box = $("#researchGrid"); if (!box) return;
    box.innerHTML = "";
    DATA.research.featured.forEach((r, i) => {
      const card = el("div", "rcard rcard--" + r.icon);
      const pts = (t(r.points) || []).map(p => `<li>${p}</li>`).join("");
      card.innerHTML =
        `<div class="rcard__art">${RESEARCH_SVG[r.icon] || ""}</div>` +
        `<div class="rcard__body">` +
          `<div class="rcard__no">0${i + 1}</div>` +
          (r.role ? `<div class="rcard__role">${t(r.role)}</div>` : "") +
          `<div class="rcard__title">${t(r.title)}</div>` +
          `<div class="rcard__lead">${t(r.lead)}</div>` +
          `<ul class="rcard__points">${pts}</ul>` +
        `</div>`;
      const figSrc = "assets/research/" + r.icon + ".jpg";
      const fig = el("div", "rcard__fig");
      const fimg = el("img"); fimg.src = figSrc; fimg.alt = t(r.title); fimg.loading = "lazy";
      fig.appendChild(fimg);
      fig.title = t(r.title);
      fig.addEventListener("click", () => openLightbox(figSrc, t(r.title)));
      card.appendChild(fig);
      box.appendChild(card);
    });
  }

  /* ---------- Hero rotating keywords ---------- */
  let kwTimer = null;
  function renderKeywords() {
    const rot = $("#kwRotator");
    if (!rot) return;
    if (kwTimer) clearInterval(kwTimer);
    const words = t(DATA.research.keywords);
    let i = 0;
    const show = () => {
      rot.textContent = words[i];
      rot.classList.remove("swap"); void rot.offsetWidth; rot.classList.add("swap");
      i = (i + 1) % words.length;
    };
    show();
    kwTimer = setInterval(show, 2600);
  }

  /* ---------- Timelines ---------- */
  function timelineItem(d) {
    const item = el("div", "titem");
    const head = el("div", "titem__head");
    head.appendChild(el("span", "titem__org", t(d.org)));
    head.appendChild(el("span", "titem__period", t(d.period)));
    item.appendChild(head);
    if (d.role)   item.appendChild(el("div", "titem__role", t(d.role)));
    if (d.detail) item.appendChild(el("div", "titem__detail", t(d.detail)));
    if (d.place)  item.appendChild(el("div", "titem__place", t(d.place)));
    return item;
  }
  function renderTimelines() {
    const e1 = $("#educationList"); e1.innerHTML = "";
    DATA.education.forEach(d => e1.appendChild(timelineItem(d)));
    const e2 = $("#experienceList"); e2.innerHTML = "";
    DATA.experience.forEach(d => e2.appendChild(timelineItem(d)));
    // talks — text timeline with a small slide-cover thumbnail per item
    const tk = $("#talksList"); tk.innerHTML = "";
    DATA.talks.forEach(d => {
      const item = el("div", "titem");
      const row = el("div", "titem__row");
      const src = "assets/talks/" + d.id + ".jpg";
      const thumb = el("div", "talk-thumb");
      const img = el("img"); img.src = src; img.alt = t(d.title); img.loading = "lazy";
      thumb.appendChild(img);
      thumb.addEventListener("click", () => openLightbox(src, t(d.venue) + " · " + t(d.date)));
      row.appendChild(thumb);
      const txt = el("div", "titem__txt");
      const head = el("div", "titem__head");
      head.appendChild(el("span", "titem__org", t(d.title)));
      head.appendChild(el("span", "titem__period", t(d.date)));
      txt.appendChild(head);
      txt.appendChild(el("div", "titem__detail", t(d.venue)));
      row.appendChild(txt);
      item.appendChild(row);
      tk.appendChild(item);
    });
  }

  /* ---------- Projects ---------- */
  // Derive Ongoing / Completed from the period (month granularity:
  // start = first day of the start month, end = last day of the end month).
  function projectStatus(period) {
    const str = (period && period.ko) ? period.ko : String(period || "");
    const m = str.match(/(\d{4})\.(\d{2})/g);
    if (!m || m.length < 2) return null;
    const [sy, sm] = m[0].split(".").map(Number);
    const [ey, em] = m[1].split(".").map(Number);
    const start = new Date(sy, sm - 1, 1);
    const end = new Date(ey, em, 0);            // day 0 of next month = last day of end month
    const now = new Date();
    if (now < start) return "upcoming";
    if (now <= end)  return "ongoing";
    return "completed";
  }
  function projStart(period) {
    const str = (period && period.ko) ? period.ko : String(period || "");
    const m = str.match(/(\d{4})\.(\d{2})/);
    return m ? (Number(m[1]) * 12 + Number(m[2])) : 0;
  }
  function renderProjects() {
    const box = $("#projectsList"); box.innerHTML = "";
    const items = DATA.projects.slice().sort((a, b) => projStart(b.period) - projStart(a.period));
    items.forEach(p => {
      const c = el("div", "card");
      const st = projectStatus(p.period);
      if (st || p.role) {
        const row = el("div", "card__tags");
        if (st) row.appendChild(el("span", "card__status card__status--" + st, t(I18N["status_" + st])));
        if (p.role) row.appendChild(el("span", "card__role card__role--" + p.role, t(I18N["role_" + p.role])));
        c.appendChild(row);
      }
      c.appendChild(el("div", "card__title", t(p.title)));
      c.appendChild(el("div", "card__period", t(p.period)));
      c.appendChild(el("div", "card__detail", t(p.detail)));
      if (p.summary) {
        const th = el("div", "card__thumb");
        const img = el("img"); img.src = p.summary; img.alt = t(p.title); img.loading = "lazy";
        th.appendChild(img);
        th.appendChild(el("span", "card__thumb-zoom", "🔍 " + t(I18N.project_summary)));
        th.title = t(p.title);
        th.addEventListener("click", () => openLightbox(p.summary, t(p.title)));
        c.appendChild(th);
      }
      box.appendChild(c);
    });
  }

  /* IDs whose original PDF + cover thumbnail are bundled in the site */
  const PAPER_FILES = new Set(["J1","J2","J3","J4","J5","J6","J7","J8","J9","J10","J11","J12","J13","J14","J15"]);

  /* ---------- Publications ---------- */
  function renderJournals() {
    const ol = $("#journalList"); ol.innerHTML = "";
    DATA.journals.forEach(j => {
      const hasFile = PAPER_FILES.has(j.id);
      const li = el("li", "pub" + (hasFile ? " pub--cover" : ""));
      li.appendChild(el("div", "pub__num", j.id));

      if (hasFile) {
        const cover = el("div", "pub__cover");
        const img = el("img"); img.src = "assets/papers/" + j.id + ".jpg";
        img.alt = j.title; img.loading = "lazy";
        cover.appendChild(img);
        cover.title = j.title;
        cover.addEventListener("click", () => openLightbox("assets/papers/" + j.id + ".jpg", j.venue + " · " + j.year));
        li.appendChild(cover);
      } else {
        li.appendChild(el("div", "pub__cover pub__cover--ph", `<span>${j.id}</span>`));
      }

      const b = el("div", "pub__body");
      b.appendChild(el("div", "pub__title", j.title));
      b.appendChild(el("div", "pub__authors", renderAuthors(j.authors, j.roles)));
      const meta = el("div", "pub__meta");
      meta.appendChild(el("span", "pub__venue", j.venue));
      if (j.info) meta.appendChild(el("span", null, j.info));
      meta.appendChild(el("span", "badge badge--year", j.year));
      if (j.doi) {
        const a = el("a", "doi-link", t(I18N.doi));
        a.href = "https://doi.org/" + j.doi; a.target = "_blank"; a.rel = "noopener";
        meta.appendChild(a);
      }
      b.appendChild(meta);
      li.appendChild(b);
      ol.appendChild(li);
    });
  }
  function confItem(c, domestic) {
    const li = el("li", "pub");
    li.appendChild(el("div", "pub__num", c.id));
    const b = el("div", "pub__body");
    b.appendChild(el("div", "pub__title", t(c.title)));
    b.appendChild(el("div", "pub__authors", renderAuthors(t(c.authors), c.roles)));
    const meta = el("div", "pub__meta");
    meta.appendChild(el("span", "pub__venue", t(c.venue)));
    if (c.place) meta.appendChild(el("span", null, t(c.place)));
    if (c.date) meta.appendChild(el("span", "pub__date", c.date));
    if (c.award) meta.appendChild(el("span", "badge badge--award", "🏆 " + c.award));
    b.appendChild(meta);
    li.appendChild(b);
    return li;
  }
  function renderConferences() {
    const oi = $("#intlList"); oi.innerHTML = "";
    DATA.confIntl.forEach(c => oi.appendChild(confItem(c, false)));
    const od = $("#domesticList"); od.innerHTML = "";
    DATA.confDomestic.forEach(c => od.appendChild(confItem(c, true)));
  }

  function renderLegend() {
    const lg = $("#pubLegend"); if (!lg) return;
    lg.innerHTML =
      `<span><sup class="fa-mark">†</sup> ${t(I18N.first_author)}</span>` +
      `<span><sup class="corr-mark">*</sup> ${t(I18N.corr_author)}</span>`;
  }

  /* ---------- Patents & software ---------- */
  /* Registered patents have representative drawings; SW registrations show their certificate.
     Applications (PA*) are not yet published, so no image. */
  const PATENT_IMAGES = new Set(["PR1","PR2","PR3","PR4","PR5","PR6","PR7","PR8","PR9","SW1","SW2","SW3"]);
  function patentRow(p, withLink) {
    const row = el("div", "patent");
    if (PATENT_IMAGES.has(p.id)) {
      const thumb = el("div", "patent__thumb");
      const img = el("img"); img.src = "assets/patents/" + p.id + ".jpg"; img.alt = t(p.title); img.loading = "lazy";
      thumb.appendChild(img); thumb.title = t(p.title);
      thumb.addEventListener("click", () => openLightbox("assets/patents/" + p.id + ".jpg", p.no + " · " + p.date));
      row.appendChild(thumb);
    }
    row.appendChild(el("div", "patent__id", p.id));
    const b = el("div", "patent__body");
    b.appendChild(el("div", "patent__title", t(p.title)));
    const inv = p.inventors ? t(p.inventors) : t(p.authors);
    b.appendChild(el("div", "patent__meta", boldName(inv)));
    b.appendChild(el("div", "patent__no", p.no + " · " + p.date));
    row.appendChild(b);
    if (withLink && p.kr) {
      const a = el("a", "patent__link", t(I18N.patent_link));
      a.href = "https://patents.google.com/patent/" + p.kr + "/en";
      a.target = "_blank"; a.rel = "noopener";
      row.appendChild(a);
    }
    return row;
  }
  function renderPatents() {
    const r = $("#patentRegList"); r.innerHTML = "";
    DATA.patentsRegistered.forEach(p => r.appendChild(patentRow(p, true)));
    const a = $("#patentAppList"); a.innerHTML = "";
    DATA.patentsApplied.forEach(p => a.appendChild(patentRow(p, false)));
    const s = $("#softwareList"); s.innerHTML = "";
    DATA.software.forEach(p => s.appendChild(patentRow(p, false)));
  }

  /* ---------- Awards ---------- */
  function renderAwards() {
    const box = $("#awardsList"); box.innerHTML = "";
    DATA.awards.forEach(a => {
      const card = el("div", "award");
      if (a.img && !a.noimg) {
        const thumb = el("div", "award__thumb");
        const img = el("img"); img.src = a.img; img.alt = t(a.title); img.loading = "lazy";
        thumb.appendChild(img);
        thumb.appendChild(el("span", "award__thumb-zoom", "🔍 " + t(I18N.cert)));
        thumb.addEventListener("click", () => openLightbox(a.img, t(a.title)));
        card.appendChild(thumb);
      } else {
        card.appendChild(el("div", "award__noimg", "🏆"));
      }
      const body = el("div", "award__body");
      body.appendChild(el("div", "award__title", t(a.title)));
      body.appendChild(el("div", "award__date", t(a.date)));
      card.appendChild(body);
      box.appendChild(card);
    });
  }

  /* ---------- Lightbox ---------- */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  function openLightbox(src, cap) {
    lbImg.src = src; lbCap.textContent = cap; lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() { lb.classList.remove("open"); document.body.style.overflow = ""; }
  $("#lbClose").addEventListener("click", closeLightbox);
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  /* ---------- Tabs ---------- */
  $$(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach(x => x.classList.remove("active"));
      tab.classList.add("active");
      $$(".pub-list").forEach(p => p.classList.toggle("hidden", p.dataset.panel !== tab.dataset.tab));
    });
  });

  /* ---------- Nav: burger + scroll state ---------- */
  const burger = $("#burger"), navLinks = $("#navLinks");
  burger.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", e => { if (e.target.tagName === "A") navLinks.classList.remove("open"); });
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Language toggle ---------- */
  $("#langToggle").addEventListener("click", () => {
    lang = lang === "en" ? "ko" : "en";
    localStorage.setItem("yk-lang", lang);
    renderAll();
  });

  /* ---------- Reveal on scroll ---------- */
  function setupReveal() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.08 });
    $$(".section, .titem, .card, .award, .pub").forEach(n => { n.classList.add("reveal"); io.observe(n); });
  }

  /* ---------- Render all ---------- */
  function renderAll() {
    applyI18n();
    renderHero();
    renderResearch();
    renderKeywords();
    renderTimelines();
    renderProjects();
    renderJournals();
    renderConferences();
    renderLegend();
    renderPatents();
    renderAwards();
  }

  renderAll();
  setupReveal();
})();
