/* =========================================================
   i18n.js — 다국어(한/영/일) 텍스트 교체 로직
   - HTML 요소에 data-i18n="키.경로" 를 달아두면 해당 언어 사전에서
     값을 찾아 textContent 로 넣어준다.
   - 선택한 언어는 localStorage 에 저장되어 새로고침해도 유지됨.

   ❗ 중요: 이전 버전은 fetch('lang/ko.json') 로 사전을 로드했는데
   로컬 파일(file://)에서 열면 브라우저가 CORS 로 차단해 언어 토글이
   아무 반응 없어 보였다. → 이제 사전을 JS 내부에 **직접 embed** 해서
   네트워크/파일 접근 없이 즉시 교체되도록 함.
   ========================================================= */

// 지원 언어 목록. 이 배열 안의 코드만 허용.
const SUPPORTED_LANGS = ['ko', 'en', 'ja'];

// ===== 내장 사전(3개 언어) =====
// lang/*.json 내용을 그대로 옮김. 파일은 참고용으로 남겨둬도 동작에는 영향 없음.
const DICTS = {
  en: {
    nav: { home: "Home", shop: "Shop", story: "Story", cart: "Cart" },
    hero: { title: "CHROME HEARTS", subtitle: "Forever 24/7", cta: "View Collection" },
    home: {
      new_arrivals: "New Arrivals",
      categories: "Categories",
      story_title: "Engraving Forever",
      story_body_1: "A craftsman's narrative born in Hollywood, 1988.",
      story_body_2: "Every stitch and ounce of silver is a testament to the eternal."
    },
    category: {
      all: "All", outer: "Outerwear", hoodie: "Hoodie",
      tshirt: "T-Shirt", denim: "Denim", accessory: "Accessories"
    },
    shop: {
      title: "Shop", sort: "Sort",
      sort_new: "Newest",
      sort_price_asc: "Price: Low to High",
      sort_price_desc: "Price: High to Low"
    },
    product: {
      size: "Size", qty: "Quantity",
      add_to_cart: "Add to Cart",
      description_title: "Description",
      material: "Material"
    },
    cart: {
      title: "Shopping Cart", empty: "Your cart is empty.",
      subtotal: "Subtotal", shipping: "Shipping", shipping_free: "Free",
      total: "Total", checkout: "Checkout", remove: "Remove",
      demo_notice: "This is a demo site for learning purposes. No real transactions are processed."
    },
    footer: {
      disclaimer: "This site is a Claude Code learning mockup and is not affiliated with the actual Chrome Hearts brand.",
      copyright: "© 2026 Chrome Hearts Mockup. All rights reserved."
    }
  },

  ko: {
    nav: { home: "홈", shop: "쇼핑", story: "브랜드", cart: "장바구니" },
    hero: { title: "CHROME HEARTS", subtitle: "Forever 24/7", cta: "컬렉션 보기" },
    home: {
      new_arrivals: "신상품",
      categories: "카테고리",
      story_title: "영원을 새기다",
      story_body_1: "1988년 할리우드에서 시작된 장인의 서사.",
      story_body_2: "한 땀의 바느질과 한 줌의 은에 영원을 담습니다."
    },
    category: {
      all: "전체", outer: "아우터", hoodie: "후디",
      tshirt: "티셔츠", denim: "데님", accessory: "악세사리"
    },
    shop: {
      title: "쇼핑", sort: "정렬",
      sort_new: "신상품순",
      sort_price_asc: "낮은 가격순",
      sort_price_desc: "높은 가격순"
    },
    product: {
      size: "사이즈", qty: "수량",
      add_to_cart: "장바구니에 담기",
      description_title: "상세 설명",
      material: "소재"
    },
    cart: {
      title: "장바구니", empty: "장바구니가 비어 있습니다.",
      subtotal: "소계", shipping: "배송비", shipping_free: "무료",
      total: "합계", checkout: "결제하기", remove: "삭제",
      demo_notice: "본 사이트는 학습용 데모입니다. 실제 결제는 진행되지 않습니다."
    },
    footer: {
      disclaimer: "본 사이트는 Claude Code 학습용 목업이며, 실제 Chrome Hearts 브랜드와 관련이 없습니다.",
      copyright: "© 2026 Chrome Hearts Mockup. All rights reserved."
    }
  },

  ja: {
    nav: { home: "ホーム", shop: "ショップ", story: "ブランド", cart: "カート" },
    hero: { title: "CHROME HEARTS", subtitle: "Forever 24/7", cta: "コレクションを見る" },
    home: {
      new_arrivals: "新着アイテム",
      categories: "カテゴリー",
      story_title: "永遠を刻む",
      story_body_1: "1988年、ハリウッドで生まれた職人の物語。",
      story_body_2: "一針の縫製と一握の銀に永遠を込めて。"
    },
    category: {
      all: "すべて", outer: "アウター", hoodie: "フーディ",
      tshirt: "Tシャツ", denim: "デニム", accessory: "アクセサリー"
    },
    shop: {
      title: "ショップ", sort: "並び替え",
      sort_new: "新着順",
      sort_price_asc: "価格が安い順",
      sort_price_desc: "価格が高い順"
    },
    product: {
      size: "サイズ", qty: "数量",
      add_to_cart: "カートに入れる",
      description_title: "商品詳細",
      material: "素材"
    },
    cart: {
      title: "ショッピングカート", empty: "カートは空です。",
      subtotal: "小計", shipping: "配送料", shipping_free: "無料",
      total: "合計", checkout: "ご購入手続き", remove: "削除",
      demo_notice: "本サイトは学習用のデモです。実際の決済は行われません。"
    },
    footer: {
      disclaimer: "本サイトは Claude Code 学習用モックアップであり、実際の Chrome Hearts ブランドとは関係ありません。",
      copyright: "© 2026 Chrome Hearts Mockup. All rights reserved."
    }
  }
};

// ===== 상태 =====
let currentLang = detectInitialLang();

/** 최초 언어: localStorage 에 저장된 값이 있으면 그걸, 없으면 기본 en */
function detectInitialLang() {
  const saved = localStorage.getItem('ch_lang_v2');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  return 'en';
}

/** "home.new_arrivals" 같은 점 경로로 중첩 객체에서 값 꺼내기 */
function pick(obj, path) {
  return path.split('.').reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
}

/**
 * 언어 적용: data-i18n 요소 전부를 해당 언어 사전으로 교체.
 * - persist=true 면 localStorage 에도 저장.
 */
function applyLang(lang, { persist = false } = {}) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  if (persist) localStorage.setItem('ch_lang_v2', lang);
  document.documentElement.lang = lang;

  const dict = DICTS[lang];

  // 텍스트 교체
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = pick(dict, el.getAttribute('data-i18n'));
    if (val != null) el.textContent = val;
  });

  // 속성 교체 (예: placeholder:form.name 형태)
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.getAttribute('data-i18n-attr').split(',').forEach((pair) => {
      const [attr, path] = pair.trim().split(':');
      const val = pick(dict, path);
      if (val != null) el.setAttribute(attr, val);
    });
  });

  // 언어 토글 버튼 active 상태 갱신
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // 다른 스크립트가 반응할 수 있도록 이벤트 발행 (상품 리스트 다시 그리기 등)
  document.dispatchEvent(new CustomEvent('i18n:changed', { detail: { lang, dict } }));
}

/** 동기적으로 현재 언어의 번역 문자열을 꺼냄 */
function t(path) {
  const dict = DICTS[currentLang];
  const val = pick(dict, path);
  return val == null ? '' : val;
}

// 페이지 로드 시 초기 적용 + 언어 버튼 클릭 연결
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang, { persist: true }));
  });
});

// 다른 JS 에서 사용할 수 있도록 전역 노출
window.CH_I18N = { applyLang, t, get lang() { return currentLang; } };
