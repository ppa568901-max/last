/* =========================================================
   cart.js — 장바구니 상태 관리
   - localStorage 에 배열로 저장하여 페이지 이동·새로고침해도 유지
   - add / remove / updateQty / clear / getItems / getCount / getTotal 제공
   - 헤더의 장바구니 뱃지 숫자도 여기서 갱신
   ========================================================= */

const STORAGE_KEY = 'ch_cart'; // localStorage 키 (다른 값과 충돌 방지 위해 ch_ 접두)

/** 저장된 장바구니 배열을 읽어온다. 파싱 실패 시 빈 배열. */
function read() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** 배열을 localStorage 에 쓰고, 뱃지 숫자도 갱신한다. */
function write(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  updateBadge();
  // 다른 화면(cart.html) 이 실시간으로 반응하도록 이벤트 발행
  document.dispatchEvent(new CustomEvent('cart:changed'));
}

/**
 * 상품 추가. 같은 id + 같은 size 면 수량만 증가시켜 중복 행이 생기지 않게 함.
 * item: { id, name, price, image, size, qty }
 */
function add(item) {
  const items = read();
  const key = (it) => `${it.id}_${it.size || ''}`;
  const found = items.find((it) => key(it) === key(item));
  if (found) {
    found.qty += item.qty;
  } else {
    items.push({ ...item });
  }
  write(items);
}

/** id+size 가 일치하는 항목 제거 */
function remove(id, size) {
  const items = read().filter((it) => !(it.id === id && (it.size || '') === (size || '')));
  write(items);
}

/** 수량 수정. 1 미만이면 제거와 동일하게 동작. */
function updateQty(id, size, qty) {
  if (qty < 1) return remove(id, size);
  const items = read().map((it) =>
    it.id === id && (it.size || '') === (size || '') ? { ...it, qty } : it
  );
  write(items);
}

/** 전체 비우기 */
function clear() {
  write([]);
}

/** 배열 복사본 반환 (외부에서 직접 수정 못하게) */
function getItems() { return read().slice(); }

/** 담긴 상품의 총 개수 (수량 합) */
function getCount() {
  return read().reduce((sum, it) => sum + it.qty, 0);
}

/** 소계(원화 숫자) — 세금·배송비 제외, 단순 price × qty 합 */
function getTotal() {
  return read().reduce((sum, it) => sum + it.price * it.qty, 0);
}

/** 헤더의 .cart-badge 숫자 갱신. 요소가 없으면 조용히 무시. */
function updateBadge() {
  const badge = document.querySelector('.cart-badge');
  if (!badge) return;
  const count = getCount();
  badge.textContent = count;
  badge.dataset.count = count; // CSS 로 0일 때 숨기기 위해 속성에도 기록
}

// 페이지 진입 시 뱃지 동기화 (헤더가 있을 때만 동작)
document.addEventListener('DOMContentLoaded', updateBadge);

// 전역 노출
window.CH_CART = { add, remove, updateQty, clear, getItems, getCount, getTotal, updateBadge };
