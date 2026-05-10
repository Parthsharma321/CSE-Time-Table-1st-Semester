/* ============================================================
   GOVERNMENT POLYTECHNIC, ADITYAPUR – CSE TIMETABLE WEBSITE
   script.js – Interactive Features & Animations
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════
   1. TIMETABLE DATA  (edit this to update class schedule)
   ══════════════════════════════════════════════════════ */

/**
 * dayIndex → 0 = Monday … 5 = Saturday
 * slotIndex: 0=10-11, 1=11-12, 2=12-1, 3=recess, 4=2-3, 5=3-4, 6=4-5
 * startH / endH in 24-hr integers
 */
const SCHEDULE = {
  1: [ // Monday
    { name: 'S&A',            teacher: 'MRG',                  startH: 10, endH: 11 },
    { name: 'FEEE',           teacher: 'SK',                   startH: 11, endH: 12 },
    { name: 'ES',             teacher: 'PP',                   startH: 12, endH: 13 },
    { name: 'PMS',            teacher: 'PRIYANKA',             startH: 14, endH: 15 },
    { name: 'LIB / PYTHON LAB', teacher: 'KM',                startH: 15, endH: 17 },
  ],
  2: [ // Tuesday
    { name: 'FEEE',           teacher: 'CS',                   startH: 10, endH: 11 },
    { name: 'ES',             teacher: 'PP',                   startH: 11, endH: 12 },
    { name: 'PYTHON',         teacher: 'KM',                   startH: 12, endH: 13 },
    { name: 'S&A',            teacher: 'BKS',                  startH: 14, endH: 15 },
    { name: 'LIB / FEEE LAB', teacher: 'Sanjeev Kumar',       startH: 15, endH: 17 },
  ],
  3: [ // Wednesday
    { name: 'PMS',            teacher: 'PRIYANKA',             startH: 10, endH: 11 },
    { name: 'PYTHON LAB / LIB.', teacher: 'KM',               startH: 11, endH: 13 },
    { name: 'PYTHON',         teacher: 'KM',                   startH: 14, endH: 15 },
    { name: 'SPORTS',         teacher: 'PP / CPP',             startH: 15, endH: 17 },
  ],
  4: [ // Thursday
    { name: 'FEEE',           teacher: 'SK',                   startH: 10, endH: 11 },
    { name: 'S&A LAB',        teacher: 'MRG',                  startH: 11, endH: 13 },
    { name: 'S&A',            teacher: 'BKS',                  startH: 14, endH: 15 },
    { name: 'PMS LAB',        teacher: 'PRIYANKA',             startH: 15, endH: 17 },
  ],
  5: [ // Friday
    { name: 'PYTHON',         teacher: 'KM',                   startH: 10, endH: 11 },
    { name: 'ES',             teacher: 'PP',                   startH: 11, endH: 12 },
    { name: 'PMS',            teacher: 'PRIYANKA',             startH: 12, endH: 13 },
    { name: 'FEEE LAB',       teacher: 'SK / CS',              startH: 14, endH: 16 },
    { name: 'PROJECT / LIB.', teacher: '—',                    startH: 16, endH: 17 },
  ],
  6: [], // Saturday – free
};

/* ══════════════════════════════════════════════════════
   2. ANNOUNCEMENTS DATA  (add / edit notices here)
   ══════════════════════════════════════════════════════ */
const ANNOUNCEMENTS = [
  {
    type: 'Notice',
    color: 'var(--neon-blue)',
    title: '📋 Timetable Effective From',
    body: 'This class routine is effective from the start of Diploma 2nd Semester (2025–28 batch). Memo No. 433.',
    date: 'May 2025',
  },
  {
    type: 'Reminder',
    color: 'var(--neon-amber)',
    title: '⚠️ Lab Attendance',
    body: 'Minimum 75% attendance is mandatory in all theory and lab sessions. Keep your attendance record updated.',
    date: 'Ongoing',
  },
  {
    type: 'Info',
    color: 'var(--neon-green)',
    title: '📅 Sessional Exams',
    body: 'Sessional examinations are scheduled as per the academic calendar. Check the noticeboard for exact dates.',
    date: 'TBA',
  },
  {
    type: 'Update',
    color: 'var(--neon-purple)',
    title: '🖥️ Website',
    body: 'This is the official digital timetable for CSE 2nd Semester. More modules (syllabus, notes, attendance) will be added soon.',
    date: 'May 2026',
  },
];

/* ══════════════════════════════════════════════════════
   3. LOADING SCREEN
   ══════════════════════════════════════════════════════ */
function initLoadingScreen() {
  const screen = document.getElementById('loading-screen');
  if (!screen) return;

  // Hide after 2.6 s (matches the CSS bar animation)
  setTimeout(() => {
    screen.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 2600);

  document.body.style.overflow = 'hidden';
}

/* ══════════════════════════════════════════════════════
   4. CUSTOM CURSOR
   ══════════════════════════════════════════════════════ */
function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
  });

  // Ring follows with inertia
  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  // Scale on hover interactive elements
  document.querySelectorAll('a, button, .subj-block, .faculty-card, .stat-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width  = '20px';
      dot.style.height = '20px';
      ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
      ring.style.borderColor = 'rgba(0,255,247,0.8)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width  = '12px';
      dot.style.height = '12px';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.borderColor = 'rgba(0,200,255,0.5)';
    });
  });
}

/* ══════════════════════════════════════════════════════
   5. PARTICLE CANVAS BACKGROUND
   ══════════════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];

  const PARTICLE_COUNT = window.innerWidth < 768 ? 40 : 80;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function randomParticle() {
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.1,
      // pick a colour
      hue: [200, 210, 230, 260][Math.floor(Math.random() * 4)],
    };
  }

  function init() {
    particles = Array.from({ length: PARTICLE_COUNT }, randomParticle);
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const opacity = (1 - dist / 130) * 0.12;
          ctx.strokeStyle = `rgba(0, 200, 255, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Gradient bg overlay (very subtle)
    const grad = ctx.createRadialGradient(W * 0.3, H * 0.4, 0, W * 0.3, H * 0.4, W * 0.7);
    grad.addColorStop(0, 'rgba(0,80,160,0.04)');
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    drawConnections();

    particles.forEach(p => {
      // Move
      p.x += p.vx;
      p.y += p.vy;
      // Wrap
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      // Draw dot
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = `hsl(${p.hue}, 80%, 70%)`;
      ctx.shadowColor = `hsl(${p.hue}, 80%, 70%)`;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();
  window.addEventListener('resize', () => { resize(); init(); });
}

/* ══════════════════════════════════════════════════════
   6. LIVE CLOCK & CURRENT CLASS
   ══════════════════════════════════════════════════════ */
const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function pad(n) { return String(n).padStart(2, '0'); }

function getCurrentClass(dayOfWeek, hour) {
  // dayOfWeek: 0=Sun … 6=Sat
  const daySchedule = SCHEDULE[dayOfWeek]; // 1=Mon … 6=Sat
  if (!daySchedule || daySchedule.length === 0) return null;

  for (const cls of daySchedule) {
    if (hour >= cls.startH && hour < cls.endH) {
      return cls;
    }
  }
  return null;
}

function getNextClass(dayOfWeek, hour) {
  const daySchedule = SCHEDULE[dayOfWeek];
  if (!daySchedule) return null;
  const sorted = [...daySchedule].filter(c => c.startH > hour);
  if (sorted.length === 0) return null;
  sorted.sort((a, b) => a.startH - b.startH);
  return sorted[0];
}

function updateClock() {
  const now  = new Date();
  const h    = now.getHours();
  const m    = now.getMinutes();
  const s    = now.getSeconds();
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12  = h % 12 || 12;
  const day  = now.getDay(); // 0=Sun

  // Hero clock
  const hoursEl   = document.getElementById('clock-hours');
  const secsEl    = document.getElementById('clock-seconds');
  const dateEl    = document.getElementById('clock-date');
  const dayTagEl  = document.getElementById('clock-day');
  const curClsEl  = document.getElementById('current-class-text');
  const footerEl  = document.getElementById('footer-time');

  if (hoursEl) hoursEl.textContent = `${pad(h12)}:${pad(m)}`;
  if (secsEl)  secsEl.innerHTML    = `:${pad(s)} <span id="clock-ampm">${ampm}</span>`;
  if (dateEl)  dateEl.textContent  = `${DAYS[day]}, ${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
  if (dayTagEl) dayTagEl.textContent = DAYS[day].toUpperCase();
  if (footerEl) footerEl.textContent = `Last updated: ${pad(h12)}:${pad(m)}:${pad(s)} ${ampm}`;

  // Current class
  const current = getCurrentClass(day, h);
  const next    = getNextClass(day, h);

  if (curClsEl) {
    if (current) {
      curClsEl.innerHTML = `<strong style="color:var(--neon-cyan)">${current.name}</strong> &nbsp;·&nbsp; ${current.teacher}<br><span style="color:var(--text-muted);font-size:0.58rem">${current.startH}:00 – ${current.endH}:00</span>`;
    } else if (h < 10) {
      curClsEl.textContent = 'Classes start at 10:00 AM';
    } else if (h >= 17) {
      curClsEl.textContent = 'Classes over for today ✓';
    } else if (h >= 13 && h < 14) {
      curClsEl.textContent = '🍽️ Recess / Lunch Break';
    } else {
      curClsEl.textContent = next ? `Next: ${next.name} at ${next.startH}:00` : 'No more classes today';
    }
  }

  // Highlight today's row in timetable
  highlightTodayRow(day);
  // Highlight active subject
  highlightActiveSubject(day, h);
}

function highlightTodayRow(day) {
  const dayMap = { 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday' };
  document.querySelectorAll('.day-cell').forEach(el => el.classList.remove('today'));
  const todayId = dayMap[day];
  if (todayId) {
    const el = document.getElementById(`day-${todayId}`);
    if (el) el.classList.add('today');
  }
}

function highlightActiveSubject(day, hour) {
  // Remove all active states
  document.querySelectorAll('.subj-block.current-active').forEach(el => el.classList.remove('current-active'));

  const dayMap = { 1: 'row-monday', 2: 'row-tuesday', 3: 'row-wednesday', 4: 'row-thursday', 5: 'row-friday', 6: 'row-saturday' };
  const rowId = dayMap[day];
  if (!rowId) return;

  const row = document.getElementById(rowId);
  if (!row) return;

  const current = getCurrentClass(day, hour);
  if (!current) return;

  // Find the matching block by subject name
  row.querySelectorAll('.subj-block').forEach(block => {
    const nameEl = block.querySelector('.subj-name');
    if (nameEl && nameEl.textContent.trim().toUpperCase().includes(current.name.toUpperCase().split('/')[0].trim())) {
      block.classList.add('current-active');
    }
  });
}

/* ══════════════════════════════════════════════════════
   7. ANIMATED STAT COUNTERS
   ══════════════════════════════════════════════════════ */
function animateCounter(el, target, duration = 1800) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    // easeOutExpo
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  };
  requestAnimationFrame(step);
}

function initCounters() {
  const statCards = document.querySelectorAll('.stat-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const val = entry.target.querySelector('.stat-value');
        if (val && !val.dataset.animated) {
          val.dataset.animated = 'true';
          animateCounter(val, parseInt(val.dataset.target, 10));
        }
      }
    });
  }, { threshold: 0.3 });

  statCards.forEach(card => observer.observe(card));
}

/* ══════════════════════════════════════════════════════
   8. SCROLL REVEAL ANIMATION
   ══════════════════════════════════════════════════════ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Once revealed, unobserve for performance
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════
   9. SCROLL PROGRESS BAR + NAV SCROLL EFFECT
   ══════════════════════════════════════════════════════ */
function initScrollEffects() {
  const bar = document.getElementById('scroll-progress');
  const nav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    // Progress bar
    const scrollTop  = document.documentElement.scrollTop;
    const scrollMax  = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollMax > 0 ? (scrollTop / scrollMax) * 100 : 0;
    if (bar) bar.style.width = pct + '%';

    // Nav style
    if (nav) {
      nav.classList.toggle('scrolled', scrollTop > 60);
    }
  }, { passive: true });
}

/* ══════════════════════════════════════════════════════
   10. NAVIGATION HAMBURGER MENU
   ══════════════════════════════════════════════════════ */
function initNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const navLinks  = document.getElementById('nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ══════════════════════════════════════════════════════
   11. TIMETABLE SEARCH & FILTER
   ══════════════════════════════════════════════════════ */
function initTimetableControls() {
  const searchInput = document.getElementById('tt-search');
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const cells       = document.querySelectorAll('.subj-cell');

  let activeFilter = 'all';
  let searchQuery  = '';

  function applyFilters() {
    cells.forEach(cell => {
      const type = (cell.dataset.type || '').toLowerCase();
      const subj = (cell.dataset.subj || '').toLowerCase();
      // Also read the block text
      const block = cell.querySelector('.subj-block');
      const blockText = block ? block.textContent.toLowerCase() : '';

      const passesFilter = activeFilter === 'all'
        || type === activeFilter
        || (activeFilter === 'lib' && (subj.includes('lib') || type === 'lib'));

      const passesSearch = searchQuery === ''
        || subj.includes(searchQuery)
        || blockText.includes(searchQuery);

      const pass = passesFilter && passesSearch;

      cell.style.opacity  = pass ? '1' : '0.12';
      cell.style.filter   = pass ? '' : 'blur(1px)';
      if (block) block.style.pointerEvents = pass ? '' : 'none';
    });
  }

  // Filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
}

/* ══════════════════════════════════════════════════════
   12. FACULTY CARD FLIP (touch support)
   ══════════════════════════════════════════════════════ */
function initFacultyCards() {
  const cards = document.querySelectorAll('.faculty-card');

  cards.forEach(card => {
    // Touch / tap to flip on mobile
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    // Reset flip on mouse leave (desktop)
    card.addEventListener('mouseleave', () => {
      card.classList.remove('flipped');
    });
  });
}

/* ══════════════════════════════════════════════════════
   13. DYNAMIC ANNOUNCEMENTS
   ══════════════════════════════════════════════════════ */
function renderAnnouncements() {
  const grid = document.getElementById('announcements-grid');
  if (!grid) return;

  grid.innerHTML = ANNOUNCEMENTS.map((ann, i) => `
    <div class="ann-card reveal ${i > 0 ? `reveal-delay-${Math.min(i, 4)}` : ''}"
         style="--ann-color: ${ann.color}">
      <div class="ann-type">${ann.type}</div>
      <div class="ann-title">${ann.title}</div>
      <div class="ann-body">${ann.body}</div>
      <div class="ann-date">📅 ${ann.date}</div>
    </div>
  `).join('');

  // Re-observe new elements for scroll reveal
  const newRevealEls = grid.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  newRevealEls.forEach(el => observer.observe(el));
}

/* ══════════════════════════════════════════════════════
   14. RIPPLE EFFECT ON BUTTONS
   ══════════════════════════════════════════════════════ */
function initRipple() {
  document.querySelectorAll('.btn-primary, .btn-secondary, .filter-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size   = Math.max(rect.width, rect.height);
      ripple.style.cssText = `
        position:absolute;
        width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size/2}px;
        top:${e.clientY - rect.top - size/2}px;
        border-radius:50%;
        background:rgba(255,255,255,0.15);
        transform:scale(0);
        animation:ripple-anim 0.55s linear;
        pointer-events:none;
      `;
      // Ensure parent has position:relative and overflow:hidden
      const prev = this.style.position;
      if (!prev || prev === 'static') this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // Inject ripple keyframe
  const style = document.createElement('style');
  style.textContent = `@keyframes ripple-anim { to { transform:scale(3); opacity:0; } }`;
  document.head.appendChild(style);
}

/* ══════════════════════════════════════════════════════
   15. NEON GLOW PULSE ON HERO HEADING
   ══════════════════════════════════════════════════════ */
function initHeroGlow() {
  const heading = document.querySelector('.hero-heading .line-1');
  if (!heading) return;

  // Subtle random flicker
  setInterval(() => {
    heading.style.filter = `brightness(${1 + Math.random() * 0.08})`;
    setTimeout(() => { heading.style.filter = ''; }, 80);
  }, 4000 + Math.random() * 3000);
}

/* ══════════════════════════════════════════════════════
   16. TOOLTIP POSITIONING CORRECTION
   Flip tooltip above/below depending on viewport space
   ══════════════════════════════════════════════════════ */
function initTooltipPositioning() {
  document.querySelectorAll('.subj-block').forEach(block => {
    block.addEventListener('mouseenter', () => {
      const tooltip = block.querySelector('.tooltip');
      if (!tooltip) return;
      const rect = block.getBoundingClientRect();
      // If not enough space above, show below
      if (rect.top < 200) {
        tooltip.style.bottom  = 'auto';
        tooltip.style.top     = 'calc(100% + 10px)';
        tooltip.style.transform = 'translateX(-50%)';
      } else {
        tooltip.style.top    = '';
        tooltip.style.bottom = 'calc(100% + 10px)';
      }
    });
  });
}

/* ══════════════════════════════════════════════════════
   17. KEYBOARD ACCESSIBILITY
   ══════════════════════════════════════════════════════ */
function initAccessibility() {
  // Hamburger keyboard
  const hamburger = document.getElementById('nav-hamburger');
  if (hamburger) {
    hamburger.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
      }
    });
  }

  // Allow Tab-focus on subj-blocks to show tooltip
  document.querySelectorAll('.subj-block').forEach(block => {
    block.setAttribute('tabindex', '0');
    block.setAttribute('role', 'button');
    block.addEventListener('keydown', e => {
      if (e.key === 'Enter') block.click();
    });
  });
}

/* ══════════════════════════════════════════════════════
   18. INIT EVERYTHING
   ══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Order matters – loading screen first
  initLoadingScreen();
  initParticles();
  initCursor();
  initNav();
  initScrollEffects();
  initScrollReveal();
  initCounters();
  renderAnnouncements();
  initTimetableControls();
  initFacultyCards();
  initRipple();
  initHeroGlow();
  initTooltipPositioning();
  initAccessibility();

  // Start clock immediately, then every second
  updateClock();
  setInterval(updateClock, 1000);

  // Console welcome message
  console.log(
    '%cGP Adityapur · CSE Timetable\n%cDiploma 2nd Semester · 2025–28\nMemo No. 433',
    'font-size:18px;font-weight:bold;color:#00c8ff;',
    'font-size:12px;color:#6a9cc4;'
  );
});

/* ══════════════════════════════════════════════════════
   UTILITY: Add new announcement programmatically
   Usage from browser console:
     addAnnouncement({ type:'Exam', color:'red', title:'Mid Sem Exam', body:'Scheduled for June 2026.', date:'June 2026' })
   ══════════════════════════════════════════════════════ */
window.addAnnouncement = function(ann) {
  ANNOUNCEMENTS.push(ann);
  renderAnnouncements();
};
