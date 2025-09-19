
// Robust toggle for bottom badge + centered section reveal
(function(){
  const guide = document.getElementById('esports-scroll-guide');
  const section = document.getElementById('esports-career');
  if(!guide || !section) return;

  let revealed = section.classList.contains('revealed');

  // Utility: show guide only if not revealed
  const setGuide = (on) => {
    if (revealed) { guide.classList.remove('show'); return; }
    guide.classList.toggle('show', !!on);
  };

  // 1) Scroll percent detector (fallback)
  const onScroll = () => {
    const scrolled = window.scrollY + window.innerHeight;
    const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    const scrollPercent = (window.scrollY / (height - window.innerHeight)) * 100;
    
    // 페이지의 50% 이상 스크롤했을 때 가이드 표시
    const shouldShowGuide = scrollPercent > 50 && !revealed;
    setGuide(shouldShowGuide);
    
    // 70% 이상 스크롤했을 때 자동으로 커리어 섹션 표시
    if (scrollPercent > 70 && !revealed) {
      reveal();
    }
  };

  // 2) IntersectionObserver with footer as target (more reliable near bottom)
  const footer = document.getElementById('site-footer');
  if ('IntersectionObserver' in window && footer) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (!revealed && e.isIntersecting) {
          setGuide(true);
        }
      });
    }, {root: null, threshold: [0, 0.01, 0.1]});
    io.observe(footer);
  }

  // 3) Short page fallback: if page height ~= viewport, show after delay
  const shortPage = () => {
    const h = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    return h <= window.innerHeight * 1.5;
  };
  
  // 페이지 로드 후 약간의 지연을 두고 확인
  setTimeout(() => {
    if (shortPage()) {
      setGuide(true);
    }
    // 초기 스크롤 상태 확인
    onScroll();
  }, 1000);

  // Reveal behavior
  function reveal(){
    revealed = true;
    section.classList.add('revealed');
    section.setAttribute('aria-hidden', 'false');
    setGuide(false);
    // Smooth scroll to center the card within viewport
    setTimeout(() => {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  // Clicking the badge reveals and focuses section
  guide.addEventListener('click', () => reveal());

  // Listen to scroll
  window.addEventListener('scroll', onScroll, { passive: true });

  // 디버깅을 위한 수동 표시 함수 (콘솔에서 테스트 가능)
  window.showEsportsCareer = reveal;
  window.showEsportsGuide = () => setGuide(true);
})();
