// ── NAV TOGGLE (hamburger) ──
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
}

// ── SUBTITLE TYPEWRITER (index.html only) ──
const subtitleEl = document.getElementById('subtitle-cycle');
if (subtitleEl) {
  const phrases = [
    'Development Economist',
    'Financial Inclusion',
    'Education Research',
    'Policy'
  ];
  let idx = 0;

  const cycle = () => {
    subtitleEl.style.opacity = '0';
    setTimeout(() => {
      idx = (idx + 1) % phrases.length;
      subtitleEl.textContent = phrases[idx];
      subtitleEl.style.opacity = '1';
    }, 400);
  };

  subtitleEl.style.transition = 'opacity 0.4s ease';
  subtitleEl.textContent = phrases[0];
  setInterval(cycle, 2500);
}

// ── SCROLL EFFECTS ──
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.style.borderBottomColor = '#2e2e2e';
    } else {
      navbar.style.borderBottomColor = 'transparent';
    }
  }
});

// ── TAB SWITCHING (research.html) ──
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Remove active class from all buttons and contents
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        btn.classList.add('active');
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }
});
