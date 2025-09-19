// 통합된 Esports Career 스크립트
(function() {
    'use strict';
    
    // DOM 로드 완료 후 실행
    window.addEventListener('DOMContentLoaded', function() {
        // 스크롤 최상단 강제
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
        const topBtn = document.getElementById('scroll-badge-top');
        const bottomBadge = document.getElementById('esports-scroll-guide');
        const career = document.getElementById('esports-career');
        
        if (!topBtn || !bottomBadge || !career) {
            console.error('Required elements not found');
            return;
        }
        
        let careerRevealed = false;
        let lastScrollY = 0;
        
        // 가이드 표시
        function showBottomGuide() {
            bottomBadge.classList.remove('hide');
            bottomBadge.classList.add('show');
            console.log('Guide shown');
        }
        
        // 가이드 숨기기
        function hideBottomGuide() {
            bottomBadge.classList.remove('show');
            bottomBadge.classList.add('hide');
            console.log('Guide hidden');
        }
        
        // 커리어 표시
        function revealCareer(autoScroll = false) {
            careerRevealed = true;
            career.classList.add('revealed');
            career.setAttribute('aria-hidden', 'false');
            hideBottomGuide();
            console.log('Career revealed');
            
            if (autoScroll) {
                setTimeout(() => {
                    career.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
        
        // 커리어 숨기기
        function hideCareer() {
            careerRevealed = false;
            career.classList.remove('revealed');
            career.setAttribute('aria-hidden', 'true');
            console.log('Career hidden');
        }
        
        // 스크롤 이벤트 처리
        function onScroll() {
            const y = window.scrollY;
            const vh = window.innerHeight;
            const docH = document.documentElement.scrollHeight;
            const scrollPercent = (y / (docH - vh)) * 100;
            const scrollingUp = y < lastScrollY;
            
            lastScrollY = y;
            
            // Top button
            if (y > 200) {
                topBtn.classList.add('show');
            } else {
                topBtn.classList.remove('show');
            }
            
            // 커리어가 표시된 상태에서 상단으로 스크롤
            if (careerRevealed && scrollingUp && y < 100) {
                const careerRect = career.getBoundingClientRect();
                // 커리어가 화면 밖으로 나갔을 때
                if (careerRect.bottom < 0) {
                    hideCareer();
                    showBottomGuide();
                }
            }
            
            // 가이드 표시 로직
            if (!careerRevealed) {
                if (y < 100 || scrollPercent > 40) {
                    showBottomGuide();
                }
            }
            
            // 70% 스크롤 시 자동 표시
            if (scrollPercent > 70 && !careerRevealed) {
                revealCareer(true);
            }
        }
        
        // 이벤트 리스너
        topBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        bottomBadge.addEventListener('click', () => {
            revealCareer(true);
        });
        
        window.addEventListener('scroll', onScroll, { passive: true });
        
        // 초기화
        setTimeout(() => {
            window.scrollTo(0, 0);
            showBottomGuide();
        }, 300);
        
        // 디버그 함수
        window.debugEsports = {
            showGuide: showBottomGuide,
            hideGuide: hideBottomGuide,
            showCareer: () => revealCareer(false),
            hideCareer: hideCareer,
            status: () => ({ careerRevealed, scrollY: window.scrollY })
        };
    });
})();
