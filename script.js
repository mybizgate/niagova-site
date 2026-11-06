/* Niagova corporate site behaviour. Business types, needs, demos and pricing live in the data below. */
(function () {
  'use strict';
  var WA = '601158121239';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var money = function (n) { return 'RM ' + Math.round(n).toLocaleString('en-MY'); };
  var toastEl = $('#toast'); var toastTimer;
  var toast = function (m) { if (!toastEl) { return; } toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, 2400); };

  /* ---------- data ---------- */
  // Live demos. A template name opens that design directly in the demo's switcher.
  var demoUrl = function (slug, template) { return 'https://demo-' + slug + '.niagova.com/' + (template ? '?template=' + template : ''); };
  var BIZ = [
    { key: 'beauty', name: 'Spa, salon or beauty studio', demo: 'beauty', url: demoUrl('beausalon'), note: 'service menu with prices and durations, staff availability, membership passes' },
    { key: 'dental', name: 'Dental or medical clinic', demo: 'dental', url: demoUrl('dental'), note: 'fee guide, panels, per-dentist slots, triage and nervous-patient flows' },
    { key: 'pet', name: 'Pet hotel or grooming', demo: 'pet', url: demoUrl('cathotel'), note: 'room availability, check-in and check-out, grooming add-ons' },
    { key: 'auto', name: 'Car detailing or workshop', demo: 'auto', url: demoUrl('autocare'), note: 'packages by car size, bay availability, service tracking' },
    { key: 'home', name: 'Home services (aircond, plumbing, electrical)', demo: 'home', url: demoUrl('service', 'service'), note: 'flat price list, zone checker, time windows, job tracking' },
    { key: 'solar', name: 'Solar, renovation or installer', demo: 'solar', url: demoUrl('service', 'modern'), note: 'calculator that pre-qualifies leads, packages, survey slots' },
    { key: 'contractor', name: 'Contractor or B2B services', demo: 'contractor', url: demoUrl('service', 'corporate'), note: 'credentials, project portfolio, RFQ wizard, company profile' },
    { key: 'retail', name: 'Retail, runcit or wholesale', demo: 'supplier', note: 'catalogue, cart, pickup or delivery, repeat orders' },
    { key: 'homestay', name: 'Homestay or event space', demo: 'homestay', note: 'calendar availability, house rules, deposit flow' },
    { key: 'food', name: 'Café, bakery or caterer', demo: 'supplier', note: 'menu with prices, pre-orders, pickup slots' },
    { key: 'education', name: 'Tuition, training or studio', demo: 'beauty', url: demoUrl('beausalon', 'modern'), note: 'class schedule, enrolment, fee list' },
    { key: 'other', name: 'Something else', demo: 'contractor', url: demoUrl('service', 'corporate'), note: 'we scope it on a 30-minute call' }
  ];
  var NEEDS = [
    { key: 'website', name: 'Website', desc: 'Present services, prices, hours, maps' },
    { key: 'booking', name: 'Booking / appointments', desc: 'Slots, staff, confirmations' },
    { key: 'ordering', name: 'Ordering & cart', desc: 'Catalogue, cart, pickup/delivery' },
    { key: 'system', name: 'Admin dashboard', desc: 'Bookings, orders, customers, staff' },
    { key: 'seo', name: 'Google visibility', desc: 'Business Profile, local SEO, reviews' },
    { key: 'custom', name: 'Custom system', desc: 'Calculators, wizards, trackers, APIs' }
  ];
  var PLANS = {
    starter: { name: 'Starter Website', setup: 299, year: 199, desc: 'A professional mobile-first website with click-to-WhatsApp and Google Business Profile setup.' },
    business: { name: 'Business Website', setup: 599, year: 299, desc: 'Service or product pages with prices, a booking or order enquiry flow, instant-answer FAQ, maps and reviews.' },
    system: { name: 'Website + System', setup: 999, year: 399, desc: 'Everything in Business plus a booking or ordering system, admin dashboard and customer records.' },
    custom: { name: 'Custom Build', setup: 0, year: 0, desc: 'A system shaped around your workflow: calculators, wizards, tracking, multi-branch, integrations, Laravel API.' }
  };
  var DEMOS = [
    { cat: 'beauty', sector: 'Beauty', name: 'Beauty Salon: Luxury', desc: 'Dark luxury spa atelier: menu, live suites board, memberships.', tags: ['Booking', 'Availability'], img: 'assets/thumbs/maison-lumiere.webp', href: demoUrl('beausalon', 'luxury') },
    { cat: 'beauty', sector: 'Beauty', name: 'Beauty Salon: Modern', desc: 'Bright studio: 3-tap booking, service bento, instant answers.', tags: ['Booking', 'Cart', 'FAQ'], img: 'assets/thumbs/glowly.webp', href: demoUrl('beausalon', 'modern') },
    { cat: 'dental', sector: 'Dental', name: 'Dental Clinic: Premium', desc: 'Fee guide, per-dentist chairs, toothache triage, comfort menu.', tags: ['Fees', 'Slots', 'Triage'], img: 'assets/thumbs/lumen-dental.webp', href: demoUrl('dental', 'premium') },
    { cat: 'dental', sector: 'Dental', name: 'Dental Clinic: Modern', desc: 'Kids storyboard, nervous mode, next free slot, instant answers.', tags: ['Slots', 'FAQ', 'Kids'], img: 'assets/thumbs/bright-dental.webp', href: demoUrl('dental', 'modern') },
    { cat: 'pet', sector: 'Pets', name: 'Pet Spa & Hotel', desc: 'Pet hotel reservations, grooming add-ons, stay tracking.', tags: ['Reservations', 'Tracking'], img: 'assets/thumbs/pet-hotel.webp', href: demoUrl('cathotel') },
    { cat: 'auto', sector: 'Auto', name: 'Auto Care & Services', desc: 'Detailing packages by car size, bay slots, WhatsApp handoff.', tags: ['Booking', 'Packages'], img: 'assets/thumbs/car-detailing.webp', href: demoUrl('autocare') },
    { cat: 'home', sector: 'Home services', name: 'Home Services', desc: 'Flat prices, zone checker, 2-hour windows, job tracker.', tags: ['Cart', 'Windows', 'Tracking'], img: 'assets/thumbs/fixmate.webp', href: demoUrl('service', 'service') },
    { cat: 'solar', sector: 'Solar', name: 'Solar Installer', desc: 'Savings calculator, packages, survey slots by area.', tags: ['Calculator', 'Slots'], img: 'assets/thumbs/surianest.webp', href: demoUrl('service', 'modern') },
    { cat: 'contractor', sector: 'Contractor', name: 'Building Contractor', desc: 'Vendor pack, project portfolio, 3-step RFQ wizard.', tags: ['RFQ', 'Portfolio', 'Print profile'], img: 'assets/thumbs/meridian.webp', href: demoUrl('service', 'corporate') },
    { cat: 'supplier', sector: 'Retail', name: 'Pembekal Maju', desc: 'Wholesale catalogue, cart, pickup/delivery, statements.', tags: ['Cart', 'Orders', 'Admin'], img: 'assets/thumbs/suppliers-runcit.webp', href: '' },
    { cat: 'homestay', sector: 'Homestay', name: 'Homestay & events', desc: 'Calendar availability, house rules, deposit enquiry.', tags: ['Calendar', 'Enquiry'], img: 'assets/thumbs/homestay.webp', href: '' },
    { cat: 'homestay', sector: 'Events', name: 'Event space', desc: 'Packages, date availability, site-visit booking.', tags: ['Availability', 'Packages'], img: 'assets/thumbs/event-space.webp', href: '' }
  ];
  var FILTERS = [['all', 'All demos'], ['beauty', 'Beauty'], ['dental', 'Dental'], ['pet', 'Pets'], ['auto', 'Auto'], ['supplier', 'Retail'], ['home', 'Home services'], ['solar', 'Solar'], ['contractor', 'Contractor'], ['homestay', 'Homestay & events']];

  /* ---------- header ---------- */
  var header = $('#siteHeader'); var nav = $('#siteNav'); var navToggle = $('#navToggle');
  var setNav = function (open) { nav.classList.toggle('is-open', open); document.body.classList.toggle('nav-open', open); navToggle.setAttribute('aria-expanded', open ? 'true' : 'false'); };
  navToggle.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) { setNav(false); } });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setNav(false); navToggle.focus(); } });
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 10); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) { entries.forEach(function (en) { if (en.isIntersecting) { $$('.nav-link').forEach(function (a) { var on = a.getAttribute('href') === '#' + en.target.id; a.classList.toggle('is-active', on); if (on) { a.setAttribute('aria-current', 'page'); } else { a.removeAttribute('aria-current'); } }); } }); }, { rootMargin: '-40% 0px -55% 0px' });
    $$('main section[id]').forEach(function (s) { spy.observe(s); });
  }

  /* ---------- builder ---------- */
  var bizType = $('#bizType'); var needChips = $('#needChips'); var bizPain = $('#bizPain');
  var needs = { website: true };
  if (bizType.options.length === 0) { BIZ.forEach(function (b) { var o = document.createElement('option'); o.value = b.key; o.textContent = b.name; bizType.appendChild(o); }); }
  if (!needChips.children.length) needChips.innerHTML = NEEDS.map(function (n) { return '<button type="button" data-need="' + n.key + '" aria-pressed="' + (needs[n.key] ? 'true' : 'false') + '"><strong>' + n.name + '</strong><span>' + n.desc + '</span></button>'; }).join('');
  var recommend = function () {
    var biz = BIZ.filter(function (b) { return b.key === bizType.value; })[0] || BIZ[0];
    var planKey = needs.custom ? 'custom' : needs.system ? 'system' : (needs.booking || needs.ordering || needs.seo) ? 'business' : 'starter';
    var plan = PLANS[planKey]; var chosen = NEEDS.filter(function (n) { return needs[n.key]; });
    $('#recName').textContent = plan.name + ' for a ' + biz.name.toLowerCase();
    $('#recDesc').textContent = plan.desc + ' For your business that means: ' + biz.note + '.';
    $('#recList').innerHTML = chosen.map(function (n) { return '<li>' + n.name + '</li>'; }).join('') + '<li>Pre-written WhatsApp handoff</li><li>Demo in 48 hours before you pay</li>';
    $('#recPrice').textContent = plan.setup ? money(plan.setup) : 'Quoted';
    $('#recYear').textContent = plan.year ? '+ ' + money(plan.year) + '/year hosting & support' : 'after a free 30-minute call';
    var msg = 'Hi Niagova, I run a ' + biz.name.toLowerCase() + '.\nI need: ' + chosen.map(function (n) { return n.name; }).join(', ') + '.\nBiggest headache: ' + bizPain.value + '.\nRecommended on your site: ' + plan.name + (plan.setup ? ' (' + money(plan.setup) + ' setup + ' + money(plan.year) + '/year)' : '') + '.\nPlease send me the closest demo.';
    $('#recWa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msg);
    var recDemo = $('#recDemo');
    if (biz.url) { recDemo.href = biz.url; recDemo.target = '_blank'; recDemo.rel = 'noopener'; recDemo.removeAttribute('data-filter'); }
    else { recDemo.href = '#demos'; recDemo.removeAttribute('target'); recDemo.removeAttribute('rel'); recDemo.setAttribute('data-filter', biz.demo); }
  };
  bizType.addEventListener('change', recommend); bizPain.addEventListener('change', recommend);
  needChips.addEventListener('click', function (e) { var b = e.target.closest('[data-need]'); if (!b) { return; } needs[b.dataset.need] = !needs[b.dataset.need]; if (!Object.keys(needs).some(function (k) { return needs[k]; })) { needs.website = true; } $$('button', needChips).forEach(function (x) { x.setAttribute('aria-pressed', needs[x.dataset.need] ? 'true' : 'false'); }); recommend(); });
  document.addEventListener('click', function (e) { var a = e.target.closest('[data-need]:not(button)'); if (!a) { return; } needs[a.dataset.need] = true; $$('button', needChips).forEach(function (x) { x.setAttribute('aria-pressed', needs[x.dataset.need] ? 'true' : 'false'); }); recommend(); });
  recommend();

  /* ---------- demos ---------- */
  var demoGrid = $('#demoGrid'); var demoFilters = $('#demoFilters');
  var renderDemos = function (cat) {
    demoGrid.innerHTML = DEMOS.filter(function (d) { return cat === 'all' || d.cat === cat; }).map(function (d) {
      var media = d.img ? '<img src="' + d.img + '" alt="' + d.name.replace(/&/g, '&amp;') + ' demo: ' + d.desc.replace(/\.$/, '') + '" width="900" height="600" loading="lazy" decoding="async">' : '<div class="ph">' + d.emoji + '</div>';
      var link = d.href ? '<a class="demo-link" href="' + d.href + '" target="_blank" rel="noopener">View live demo →</a>' : '<a class="demo-link soon" href="https://wa.me/' + WA + '?text=' + encodeURIComponent('Hi Niagova, please send me the ' + d.name + ' demo link.') + '" target="_blank" rel="noopener">Preview on request →</a>';
      return '<article class="demo"><div class="demo-media">' + media + '</div><div class="demo-body"><small>' + d.sector + '</small><h3>' + d.name.replace(/&/g, '&amp;') + '</h3><p>' + d.desc + '</p><div class="demo-tags">' + d.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' + link + '</div></article>';
    }).join('');
  };
  var setFilter = function (cat) { $$('button', demoFilters).forEach(function (b) { b.setAttribute('aria-selected', b.dataset.cat === cat ? 'true' : 'false'); }); renderDemos(cat); };
  if (!demoFilters.children.length) { FILTERS.forEach(function (f, i) { var b = document.createElement('button'); b.type = 'button'; b.setAttribute('role', 'tab'); b.dataset.cat = f[0]; b.textContent = f[1]; b.setAttribute('aria-selected', i === 0 ? 'true' : 'false'); demoFilters.appendChild(b); }); }
  demoFilters.addEventListener('click', function (e) { var b = e.target.closest('[data-cat]'); if (b) { setFilter(b.dataset.cat); } });
  if (!demoGrid.children.length) { renderDemos('all'); }
  $('#recDemo').addEventListener('click', function () { var f = this.getAttribute('data-filter'); if (f && FILTERS.some(function (x) { return x[0] === f; })) { setFilter(f); } });

  /* ---------- reply-cost calculator ---------- */
  var msg = $('#msgPerDay'); var min = $('#minPerReply'); var pct = $('#pctRoutine');
  var calc = function () {
    var m = Number(msg.value); var mi = Number(min.value); var p = Number(pct.value) / 100; var hours = (m * mi * 26) / 60;
    $('#msgOut').textContent = m; $('#minOut').textContent = mi; $('#pctOut').textContent = Math.round(p * 100) + '%';
    $('#hoursLost').textContent = Math.round(hours) + ' h'; $('#hoursSaved').textContent = Math.round(hours * p) + ' h'; $('#leadsLost').textContent = String(Math.round(m * 26 * 0.2));
    $('#calcWa').href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent('Hi Niagova, your calculator says we spend about ' + Math.round(hours) + ' hours a month replying by hand (' + m + ' messages/day). Please send me a plan to cut that.');
  };
  [msg, min, pct].forEach(function (el) { el.addEventListener('input', calc); }); calc();

  /* ---------- contact brief ---------- */
  var form = $('#contactForm'); var status = $('#formStatus');
  var compose = function (d) { return ['Hi Niagova, here is my brief.', 'Name: ' + d.name, 'WhatsApp: ' + d.phone, 'Business: ' + (d.business || '-'), 'What to build: ' + (d.need || '-'), '', 'Sent from niagova.com'].join('\n'); };
  var validate = function () { status.classList.remove('error'); if (!form.reportValidity()) { status.textContent = 'Please complete the highlighted fields.'; status.classList.add('error'); return null; } var d = {}; $$('input, textarea', form).forEach(function (el) { d[el.name] = el.value.trim(); }); return d; };
  form.addEventListener('submit', function (e) { e.preventDefault(); var d = validate(); if (!d) { return; } status.textContent = 'Opening WhatsApp with your brief…'; window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(compose(d)), '_blank', 'noopener'); });
  $('#copyBrief').addEventListener('click', function () { var d = validate(); if (!d) { return; } if (navigator.clipboard) { navigator.clipboard.writeText(compose(d)).then(function () { status.textContent = 'Brief copied. Paste it into any chat or email.'; }, function () { status.textContent = 'Copy is not available here. Use the WhatsApp button.'; status.classList.add('error'); }); } });

  /* ---------- reveal ---------- */
  var revealItems = $$('.reveal');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries, obs) { entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); } }); }, { rootMargin: '0px 0px -6% 0px', threshold: .06 });
    revealItems.forEach(function (el) { ro.observe(el); });
  } else { revealItems.forEach(function (el) { el.classList.add('is-visible'); }); }
  var year = $('#year'); if (year) { year.textContent = String(new Date().getFullYear()); }
})();
