// ── TAB SWITCHING ──
document.addEventListener('DOMContentLoaded', () => {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(target).classList.add('active');
      // Reset lightbox index for new tab
      currentTab = target;
    });
  });

  // ── LIGHTBOX ──
  const overlay = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCaption = document.getElementById('lb-caption');
  const lbClose = document.getElementById('lb-close');
  const lbPrev = document.getElementById('lb-prev');
  const lbNext = document.getElementById('lb-next');

  let currentIndex = 0;
  let currentItems = [];

  function getItems(tabId) {
    const panel = document.getElementById(tabId);
    return panel ? Array.from(panel.querySelectorAll('.masonry-item[data-src]')) : [];
  }

  function openLightbox(items, index) {
    currentItems = items;
    currentIndex = index;
    showSlide(currentIndex);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showSlide(idx) {
    const item = currentItems[idx];
    if (!item) return;
    lbImg.src = item.dataset.src;
    lbCaption.textContent = item.dataset.caption || '';
  }

  // Attach click to all masonry items
  function bindItems(tabId) {
    const panel = document.getElementById(tabId);
    if (!panel) return;
    const items = panel.querySelectorAll('.masonry-item[data-src]');
    items.forEach((item, idx) => {
      item.addEventListener('click', () => {
        openLightbox(Array.from(items), idx);
      });
    });
  }

  bindItems('tab-field');
  bindItems('tab-personal');

  // Navigation
  lbPrev && lbPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    showSlide(currentIndex);
  });

  lbNext && lbNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % currentItems.length;
    showSlide(currentIndex);
  });

  lbClose && lbClose.addEventListener('click', closeLightbox);

  // Close on outside click
  overlay && overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
      showSlide(currentIndex);
    }
    if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % currentItems.length;
      showSlide(currentIndex);
    }
  });
});
