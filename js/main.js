/* =========================================================
   main.js — 모든 페이지에 공통으로 적용되는 초기화
   - 스크롤 진입 애니메이션(.reveal → .is-visible)
   - 앞으로 공통 처리(메뉴 토글 등)가 생기면 이 파일에 추가
   ========================================================= */

/**
 * IntersectionObserver: 요소가 화면에 들어올 때 is-visible 클래스를 붙임.
 * CSS(.reveal)에 정의된 페이드·슬라이드 효과가 자동으로 발동되는 구조.
 */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || targets.length === 0) {
    // 구형 브라우저 대응: 그냥 바로 보이게
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target); // 한 번 보이면 더 감시하지 않음 (성능)
      }
    });
  }, { threshold: 0.15 });
  targets.forEach((el) => io.observe(el));
}

document.addEventListener('DOMContentLoaded', initReveal);
