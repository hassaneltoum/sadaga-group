/* ============================================================
   SADAGA GROUP — main.js
   Language toggle, nav scroll, mobile menu, scroll reveal,
   animated counters, contact form
   ============================================================ */

/* ---- Translations ---- */
const t = {
  en: {
    /* Nav */
    'nav.home':       'Home',
    'nav.about':      'About',
    'nav.activities': 'Activities',
    'nav.gallery':    'Gallery',
    'nav.involved':   'Get Involved',
    'nav.contact':    'Contact',

    /* Hero */
    'hero.eyebrow':   'Bristol · Community · Wellbeing',
    'hero.title':     'Supporting Arabic-speaking <em>women and families</em> in Bristol',
    'hero.sub':       'Creating a safe and welcoming space for learning, wellbeing, confidence and community, every Friday in Easton.',
    'hero.cta1':      'Join Our Community',
    'hero.cta2':      'Explore Activities',
    'hero.trust1':    'Every Friday',
    'hero.trust2':    '224+ Members',
    'hero.trust3':    'Est. 2004',
    'hero.stat1.num': '224+',
    'hero.stat1.lbl': 'Active Members',
    'hero.stat2.num': '20+',
    'hero.stat2.lbl': 'Years of Impact',

    /* About */
    'about.tag':   'Who We Are',
    'about.title': 'A home away from home for Arabic-speaking women',
    'about.p1':    'Sadaga Group is a community organisation rooted in Bristol, dedicated to supporting Arabic-speaking women and their families. We bring people together every Friday at Easton Christian Family Centre, a warm, welcoming space where women can connect, learn, and thrive.',
    'about.p2':    'Our mission is to eliminate social isolation within the Arabic-speaking community, build confidence and skills, and encourage meaningful participation in Bristol\'s wider society.',
    'about.val1':  'Eliminate social isolation',
    'about.val2':  'Build skills & confidence',
    'about.val3':  'Safe, welcoming spaces',
    'about.val4':  'Community integration',
    'about.badge.num': '20+',
    'about.badge.lbl': 'Years of community support',

    /* Impact */
    'impact.tag':     'Our Impact',
    'impact.title':   'Making a real difference',
    'impact.sub':     'Two decades of building community, confidence and belonging in Bristol.',
    'impact.1.num':   '224',
    'impact.1.suf':   '+',
    'impact.1.lbl':   'Active Members',
    'impact.1.desc':  'Women and families across the Bristol community',
    'impact.2.num':   '450',
    'impact.2.suf':   '+',
    'impact.2.lbl':   'Workshops Delivered',
    'impact.2.desc':  'Professional sessions on health, skills and wellbeing',
    'impact.3.num':   '20',
    'impact.3.suf':   '+',
    'impact.3.lbl':   'Years of Expertise',
    'impact.3.desc':  'Trusted community support since 2004',

    /* Activities */
    'act.tag':   'What We Do',
    'act.title': 'Activities & Services',
    'act.sub':   'Each week we offer a range of activities designed to support wellbeing, build skills and foster genuine community connection.',
    'act.1.title': 'Health & Wellbeing Workshops',
    'act.1.desc':  'Professional-led sessions covering women\'s health topics including infertility, menopause, cervical screening and mental wellbeing.',
    'act.1.li1':   'Workshops by professionals from the police and social services',
    'act.1.li2':   'Women\'s Health: infertility, menopause, cervical screening',
    'act.1.li3':   'Schools and education workshops',
    'act.2.title': 'Arts, Crafts & Embroidery',
    'act.2.desc':  'Creative sessions including embroidery, general crafts and art therapy, a joyful space for expression and relaxation.',
    'act.2.li1':   'Embroidery',
    'act.2.li2':   'Crafts',
    'act.2.li3':   'Art Therapy',
    'act.3.title': 'Language & Literacy Support',
    'act.3.desc':  'Practical support to improve English language skills and confidence, helping members navigate everyday life in Bristol.',
    'act.4.title': 'Community Events',
    'act.4.desc':  'Regular social gatherings, cultural celebrations and shared meals that bring the community together in warmth and friendship.',
    'act.5.title': 'Courses & Skills Training',
    'act.5.desc':  'Structured courses including sewing classes and volunteer training, building practical skills and pathways to independence.',
    'act.5.coming': 'Courses Coming Up',
    'act.5.li1':   'Sewing',
    'act.5.li2':   'Volunteers Training',
    'act.6.title': 'Social Connection & Support',
    'act.6.desc':  'A welcoming space where women can meet, share experiences, find support and build lasting friendships across the community.',

    /* Gallery */
    'gal.tag':   'Gallery',
    'gal.title': 'Life at Sadaga Group',
    'gal.sub':   'Glimpses of the warmth, creativity and community spirit that defines who we are.',

    /* Testimonials */
    'test.tag':   'Community Voices',
    'test.title': 'What our members say',
    'test.1.text': '"Coming to Sadaga every Friday has changed my life. I came knowing nobody in Bristol, and now I have real friends and I feel confident going out on my own."',
    'test.1.name': 'Nadia M.',
    'test.1.role': 'Member since 2019',
    'test.2.text': '"The workshops are so valuable. I learned about my health in a comfortable, safe space with women who understand me. I feel so much stronger now."',
    'test.2.name': 'Fatima A.',
    'test.2.role': 'Member since 2021',
    'test.3.text': '"Sadaga gave me confidence I never had. The arts and crafts sessions are wonderful, but honestly it is the community, the friendships, that mean everything."',
    'test.3.name': 'Sara H.',
    'test.3.role': 'Member since 2017',

    /* Partners */
    'part.tag':   'Our Supporters',
    'part.title': 'Partners & Funders',
    'part.sub':   'We are grateful to our funders and partners who make our work possible.',

    /* CTA */
    'cta.tag':   'Get Involved',
    'cta.title': 'Be part of something meaningful',
    'cta.sub':   'Whether you want to join our activities, volunteer your time or partner with us; there is a place for you at Sadaga Group.',
    'cta.1.title': 'Join Activities',
    'cta.1.desc':  'Come along on a Friday and be warmly welcomed.',
    'cta.2.title': 'Volunteer',
    'cta.2.desc':  'Share your skills and give back to the community.',
    'cta.3.title': 'Get Support',
    'cta.3.desc':  'Find help, connection and a safe space here.',
    'cta.4.title': 'Partner With Us',
    'cta.4.desc':  'Organisations can collaborate and support our work.',
    'cta.btn':   'Get in Touch',

    /* Contact */
    'con.tag':    'Contact',
    'con.title':  'Come and find us',
    'con.sub':    'We meet every Friday and would love to welcome you. Reach out, we\'re here to help.',
    'con.addr.lbl': 'Address',
    'con.addr.val': 'Easton Christian Family Centre, Beaufort Street, Easton, Bristol BS5 0SQ',
    'con.hours.lbl': 'Opening Hours',
    'con.hours.val': 'Fridays, 10:00 am – 1:30 pm',
    'con.email.lbl': 'Email',
    'con.email.val': 'info@sadaga.co.uk',
    'con.form.title': 'Send us a message',
    'con.form.fname': 'First Name',
    'con.form.lname': 'Last Name',
    'con.form.email': 'Email Address',
    'con.form.subject': 'Subject',
    'con.form.msg':  'Your Message',
    'con.form.btn':  'Send Message',
    'con.form.subject.opt1': 'Join an Activity',
    'con.form.subject.opt2': 'Volunteering',
    'con.form.subject.opt3': 'Partnership',
    'con.form.subject.opt4': 'General Enquiry',

    /* Footer */
    'foot.desc':     'A community group for Arabic-speaking women and families in Bristol, UK. Meeting every Friday since 2004.',
    'foot.nav':      'Navigation',
    'foot.contact':  'Contact',
    'foot.follow':   'Follow Us',
    'foot.copy':     '© 2025 Sadaga CIC. A company limited by guarantee. Registered in England & Wales. Company No: 16836214',
  },

  ar: {
    /* Nav */
    'nav.home':       'الرئيسية',
    'nav.about':      'من نحن',
    'nav.activities': 'الأنشطة',
    'nav.gallery':    'معرض الصور',
    'nav.involved':   'انضمي إلينا',
    'nav.contact':    'اتصلي بنا',

    /* Hero */
    'hero.eyebrow':   'بريستول · مجتمع · صحة ورعاية',
    'hero.title':     'دعم النساء والأسر <em>الناطقات بالعربية</em> في بريستول',
    'hero.sub':       'نخلق مساحة آمنة ومرحِّبة للتعلم والرعاية الصحية وبناء الثقة بالنفس وتعزيز روح المجتمع، كل يوم جمعة في إيستون.',
    'hero.cta1':      'انضمي إلى مجتمعنا',
    'hero.cta2':      'استكشفي الأنشطة',
    'hero.trust1':    'كل يوم جمعة',
    'hero.trust2':    '+224 عضو',
    'hero.trust3':    'منذ 2004',
    'hero.stat1.num': '+224',
    'hero.stat1.lbl': 'عضو نشط',
    'hero.stat2.num': '+20',
    'hero.stat2.lbl': 'سنوات من العطاء',

    /* About */
    'about.tag':   'من نحن',
    'about.title': 'بيت بعيد عن البيت للنساء الناطقات بالعربية',
    'about.p1':    'مجموعة صدقة منظمة مجتمعية متجذّرة في مدينة بريستول، تكرّس جهودها لدعم النساء الناطقات بالعربية وأسرهن. نلتقي كل جمعة في مركز إيستون المسيحي للعائلة، مكان دافئ ومرحِّب تستطيع فيه المرأة التواصل مع الآخرين والتعلم والازدهار.',
    'about.p2':    'مهمتنا هي القضاء على العزلة الاجتماعية داخل المجتمع الناطق بالعربية، وبناء الثقة بالنفس والمهارات، وتشجيع المشاركة الفاعلة في المجتمع الأوسع في بريستول.',
    'about.val1':  'القضاء على العزلة الاجتماعية',
    'about.val2':  'بناء المهارات والثقة بالنفس',
    'about.val3':  'مساحات آمنة وترحيبية',
    'about.val4':  'الاندماج في المجتمع',
    'about.badge.num': '+20',
    'about.badge.lbl': 'عاماً من دعم المجتمع',

    /* Impact */
    'impact.tag':     'أثرنا',
    'impact.title':   'نُحدث فارقاً حقيقياً',
    'impact.sub':     'عقدان من بناء المجتمع والثقة بالنفس والانتماء في بريستول.',
    'impact.1.num':   '224',
    'impact.1.suf':   '+',
    'impact.1.lbl':   'عضو نشط',
    'impact.1.desc':  'نساء وأسر من مجتمع بريستول',
    'impact.2.num':   '450',
    'impact.2.suf':   '+',
    'impact.2.lbl':   'ورشة عمل منجزة',
    'impact.2.desc':  'جلسات متخصصة في الصحة والمهارات والرعاية',
    'impact.3.num':   '20',
    'impact.3.suf':   '+',
    'impact.3.lbl':   'عاماً من الخبرة',
    'impact.3.desc':  'دعم مجتمعي موثوق منذ عام 2004',

    /* Activities */
    'act.tag':   'ماذا نقدم',
    'act.title': 'الأنشطة والخدمات',
    'act.sub':   'نقدم كل أسبوع مجموعة من الأنشطة المصمَّمة لدعم الصحة النفسية والجسدية وبناء المهارات وتعزيز روابط المجتمع الحقيقية.',
    'act.1.title': 'ورش صحة المرأة',
    'act.1.desc':  'جلسات بإشراف متخصصين تشمل موضوعات صحة المرأة كالعقم وسن اليأس والفحص الدوري والصحة النفسية.',
    'act.1.li1':   'ورش عمل بقيادة متخصصين من الشرطة والخدمات الاجتماعية',
    'act.1.li2':   'صحة المرأة: العقم، سن اليأس، الفحص الدوري',
    'act.1.li3':   'ورش عمل في المدارس والتعليم',
    'act.2.title': 'الفنون والحرف اليدوية',
    'act.2.desc':  'جلسات إبداعية تشمل التطريز والأشغال اليدوية والعلاج بالفن، فضاء بهيج للتعبير والاسترخاء.',
    'act.2.li1':   'التطريز',
    'act.2.li2':   'الحرف اليدوية',
    'act.2.li3':   'العلاج بالفن',
    'act.3.title': 'دعم اللغة والمحو الأمي',
    'act.3.desc':  'دعم عملي لتحسين مهارات اللغة الإنجليزية والثقة في التواصل، مما يُعين الأعضاء على مواجهة تحديات الحياة اليومية في بريستول.',
    'act.4.title': 'الفعاليات المجتمعية',
    'act.4.desc':  'تجمعات اجتماعية منتظمة واحتفالات ثقافية ووجبات مشتركة تجمع المجتمع في دفء وصداقة.',
    'act.5.title': 'الدورات والتدريب',
    'act.5.desc':  'دورات منظمة تشمل الخياطة وتدريب المتطوعين، لبناء مهارات عملية وفتح آفاق الاستقلالية.',
    'act.5.coming': 'الدورات القادمة',
    'act.5.li1':   'الخياطة',
    'act.5.li2':   'تدريب المتطوعين',
    'act.6.title': 'التواصل الاجتماعي والدعم',
    'act.6.desc':  'مساحة مرحِّبة تلتقي فيها النساء ويتشاركن التجارب ويجدن الدعم ويبنين صداقات دائمة.',

    /* Gallery */
    'gal.tag':   'معرض الصور',
    'gal.title': 'الحياة في مجموعة صدقة',
    'gal.sub':   'لمحات من الدفء والإبداع وروح المجتمع التي تُعرِّفنا.',

    /* Testimonials */
    'test.tag':   'أصوات المجتمع',
    'test.title': 'ماذا تقول عضواتنا',
    'test.1.text': '«الحضور إلى صدقة كل جمعة غيَّر حياتي. جئتُ إلى بريستول ولا أعرف أحداً، والآن لديّ صديقات حقيقيات وأشعر بثقة في الخروج وحدي.»',
    'test.1.name': 'نادية م.',
    'test.1.role': 'عضو منذ 2019',
    'test.2.text': '«ورش العمل قيّمة جداً. تعلمتُ عن صحتي في مساحة مريحة وآمنة مع نساء يفهمنني. أشعر الآن بقوة كبيرة.»',
    'test.2.name': 'فاطمة أ.',
    'test.2.role': 'عضو منذ 2021',
    'test.3.text': '«صدقة منحتني ثقة لم تكن لديّ من قبل. جلسات الفنون والحرف رائعة، لكن المجتمع والصداقات هي التي تعني كل شيء.»',
    'test.3.name': 'سارة هـ.',
    'test.3.role': 'عضو منذ 2017',

    /* Partners */
    'part.tag':   'داعمونا',
    'part.title': 'الشركاء والممولون',
    'part.sub':   'نتقدم بالشكر لممولينا وشركائنا الذين يُمكِّنوننا من مواصلة عملنا.',

    /* CTA */
    'cta.tag':   'انضمي إلينا',
    'cta.title': 'كوني جزءاً من شيء ذي معنى',
    'cta.sub':   'سواء أردتِ الانضمام إلى أنشطتنا أو التطوع أو الشراكة معنا، يوجد مكان لكِ في مجموعة صدقة.',
    'cta.1.title': 'انضمي إلى الأنشطة',
    'cta.1.desc':  'تعالي يوم الجمعة وستجدين ترحيباً حاراً.',
    'cta.2.title': 'تطوعي',
    'cta.2.desc':  'شاركي مهاراتك وأعيدي العطاء للمجتمع.',
    'cta.3.title': 'احصلي على الدعم',
    'cta.3.desc':  'ابحثي هنا عن المساعدة والتواصل والمساحة الآمنة.',
    'cta.4.title': 'تعاوني معنا',
    'cta.4.desc':  'يمكن للمنظمات التعاون ودعم عملنا.',
    'cta.btn':   'تواصلي معنا',

    /* Contact */
    'con.tag':    'اتصلي بنا',
    'con.title':  'تعالي وابحثي عنّا',
    'con.sub':    'نلتقي كل يوم جمعة ونتشوق لاستقبالك. تواصلي معنا، نحن هنا للمساعدة.',
    'con.addr.lbl': 'العنوان',
    'con.addr.val': 'مركز إيستون المسيحي للعائلة، شارع بوفورت، إيستون، بريستول BS5 0SQ',
    'con.hours.lbl': 'أوقات الفتح',
    'con.hours.val': 'أيام الجمعة، 10:00 صباحاً – 1:30 ظهراً',
    'con.email.lbl': 'البريد الإلكتروني',
    'con.email.val': 'info@sadaga.co.uk',
    'con.form.title': 'أرسلي لنا رسالة',
    'con.form.fname': 'الاسم الأول',
    'con.form.lname': 'اسم العائلة',
    'con.form.email': 'البريد الإلكتروني',
    'con.form.subject': 'الموضوع',
    'con.form.msg':  'رسالتك',
    'con.form.btn':  'إرسال الرسالة',
    'con.form.subject.opt1': 'الانضمام إلى نشاط',
    'con.form.subject.opt2': 'التطوع',
    'con.form.subject.opt3': 'شراكة',
    'con.form.subject.opt4': 'استفسار عام',

    /* Footer */
    'foot.desc':     'مجموعة مجتمعية للنساء والأسر الناطقات بالعربية في بريستول، المملكة المتحدة. نلتقي كل جمعة منذ 2004.',
    'foot.nav':      'التنقل',
    'foot.contact':  'اتصل بنا',
    'foot.follow':   'تابعينا',
    'foot.copy':     '© 2025 صدقة CIC. شركة محدودة بالضمان. مسجلة في إنجلترا وويلز. رقم الشركة: 16836214',
  }
};

/* ---- State ---- */
let currentLang = localStorage.getItem('sadaga-lang') || 'en';

/* ---- Apply language (core, no animation) ---- */
function _doApplyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sadaga-lang', lang);

  const body = document.body;
  const html = document.documentElement;

  if (lang === 'ar') {
    body.classList.add('lang-ar');
    body.classList.remove('lang-en');
    html.setAttribute('lang', 'ar');
    html.setAttribute('dir', 'rtl');
  } else {
    body.classList.remove('lang-ar');
    body.classList.add('lang-en');
    html.setAttribute('lang', 'en');
    html.removeAttribute('dir');
  }

  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t[lang][key];
    if (val === undefined) return;
    if (el.dataset.i18nHtml !== undefined || val.includes('<')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const val = t[lang][key];
    if (val) el.placeholder = val;
  });
}

/* ---- Apply language (with fade transition) ---- */
function applyLanguage(lang, animate = true) {
  if (!animate || lang === currentLang) {
    _doApplyLanguage(lang);
    return;
  }
  document.body.classList.add('lang-switching');
  setTimeout(() => {
    _doApplyLanguage(lang);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.remove('lang-switching');
      });
    });
  }, 220);
}

/* ---- Nav scroll effect ---- */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ---- Mobile menu ---- */
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

hamburger?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

// Close on link click
document.querySelectorAll('.nav__mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ---- Scroll reveal ---- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Counter animation ---- */
function animateCounter(el, target, duration = 1800) {
  let start = null;
  const step = ts => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      if (!isNaN(target)) animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ---- Contact form ---- */
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = currentLang === 'ar'
    ? '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> تم الإرسال!'
    : '<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> Message Sent!';
  btn.disabled = true;
  btn.style.background = 'var(--c-olive)';
  setTimeout(() => {
    btn.innerHTML = original;
    btn.disabled = false;
    btn.style.background = '';
    contactForm.reset();
  }, 3500);
});

/* ---- Active nav link on scroll ---- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ---- Testimonials Carousel ---- */
function initTestimonialsCarousel() {
  const carousel = document.getElementById('testimonialsCarousel');
  if (!carousel) return;

  const track  = carousel.querySelector('.testimonials__track');
  const slides = Array.from(carousel.querySelectorAll('.testimonial-card'));
  const dots   = Array.from(carousel.querySelectorAll('.testimonials__dot'));

  let current    = 0;
  let autoTimer  = null;
  let touchStartX = 0;

  const isMobile = () => window.innerWidth < 640;
  const isRTL    = () => document.documentElement.getAttribute('dir') === 'rtl';

  function setPosition(index, animate) {
    if (!isMobile()) return;
    current = ((index % slides.length) + slides.length) % slides.length;
    if (animate === false) track.style.transition = 'none';
    const sign = isRTL() ? '' : '-';
    track.style.transform = `translateX(${sign}${current * 100}%)`;
    if (animate === false) {
      track.getBoundingClientRect(); // force reflow
      track.style.transition = '';
    }
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() {
    clearInterval(autoTimer);
    if (!isMobile()) return;
    autoTimer = setInterval(() => setPosition(current + 1), 6000);
  }

  function stopAuto() { clearInterval(autoTimer); }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { setPosition(i); startAuto(); });
  });

  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    stopAuto();
  }, { passive: true });

  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 48) {
      const fwd = isRTL() ? dx > 0 : dx < 0;
      setPosition(current + (fwd ? 1 : -1));
    }
    startAuto();
  }, { passive: true });

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', () => { if (isMobile()) startAuto(); });

  let wasMobile = isMobile();
  window.addEventListener('resize', () => {
    const mobile = isMobile();
    if (mobile !== wasMobile) {
      wasMobile = mobile;
      if (!mobile) {
        stopAuto();
        track.style.transform = '';
      } else {
        setPosition(0, false);
        startAuto();
      }
    }
  });

  if (isMobile()) {
    setPosition(0, false);
    startAuto();
  }
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang, false); // no fade on initial load

  // Wire up all language toggle buttons
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  initTestimonialsCarousel();
});
