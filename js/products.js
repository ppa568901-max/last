/* =========================================================
   products.js — roroom.com 에서 카테고리별 선별한 크롬하츠 상품
   - outer 5 / hoodie 5 / tshirt 5 / denim 2 / accessory 5 = 총 22개
   - 이미지는 로컬(assets/products/)에 저장됨
   ========================================================= */

const PRODUCTS = [
  {
    id: 1, category: 'outer', price: 1980000, isNew: false,
    images: ['assets/products/p01.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Denim Anorak",
      ko: "크롬하츠 데님 아노락",
      ja: "クロムハーツ デニム アノラック"
    },
    desc: {
      en: "Flagship outerwear finished with Chrome Hearts signature hardware. Built to age gracefully.",
      ko: "크롬하츠 시그니처 하드웨어로 마감된 플래그십 아우터. 시간이 갈수록 멋이 배는 피스.",
      ja: "クロムハーツのシグネチャーハードウェアで仕上げたフラッグシップアウター。年月を重ねるほど味わいを増す一着。"
    }
  },
  {
    id: 2, category: 'outer', price: 1980000, isNew: false,
    images: ['assets/products/p02.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Goose Down Vest",
      ko: "크롬하츠 구스다운 베스트",
      ja: "クロムハーツ グースダウン ベスト"
    },
    desc: {
      en: "Flagship outerwear finished with Chrome Hearts signature hardware. Built to age gracefully.",
      ko: "크롬하츠 시그니처 하드웨어로 마감된 플래그십 아우터. 시간이 갈수록 멋이 배는 피스.",
      ja: "クロムハーツのシグネチャーハードウェアで仕上げたフラッグシップアウター。年月を重ねるほど味わいを増す一着。"
    }
  },
  {
    id: 3, category: 'outer', price: 1980000, isNew: false,
    images: ['assets/products/p03.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Horseshoe Cross Jacket",
      ko: "크롬하츠 말굽 십자가 자켓",
      ja: "クロムハーツ ホースシュー クロス ジャケット"
    },
    desc: {
      en: "Flagship outerwear finished with Chrome Hearts signature hardware. Built to age gracefully.",
      ko: "크롬하츠 시그니처 하드웨어로 마감된 플래그십 아우터. 시간이 갈수록 멋이 배는 피스.",
      ja: "クロムハーツのシグネチャーハードウェアで仕上げたフラッグシップアウター。年月を重ねるほど味わいを増す一着。"
    }
  },
  {
    id: 4, category: 'outer', price: 1980000, isNew: false,
    images: ['assets/products/p04.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Goose Down Puffer Jacket",
      ko: "크롬하츠 구스다운 패딩자켓",
      ja: "クロムハーツ グースダウン パディング ジャケット"
    },
    desc: {
      en: "Flagship outerwear finished with Chrome Hearts signature hardware. Built to age gracefully.",
      ko: "크롬하츠 시그니처 하드웨어로 마감된 플래그십 아우터. 시간이 갈수록 멋이 배는 피스.",
      ja: "クロムハーツのシグネチャーハードウェアで仕上げたフラッグシップアウター。年月を重ねるほど味わいを増す一着。"
    }
  },
  {
    id: 5, category: 'outer', price: 1980000, isNew: false,
    images: ['assets/products/p05.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Bike City Red Jacket",
      ko: "크롬하츠 바이크시티 레드",
      ja: "クロムハーツ バイクシティ レッド"
    },
    desc: {
      en: "Flagship outerwear finished with Chrome Hearts signature hardware. Built to age gracefully.",
      ko: "크롬하츠 시그니처 하드웨어로 마감된 플래그십 아우터. 시간이 갈수록 멋이 배는 피스.",
      ja: "クロムハーツのシグネチャーハードウェアで仕上げたフラッグシップアウター。年月を重ねるほど味わいを増す一着。"
    }
  },
  {
    id: 6, category: 'hoodie', price: 890000, isNew: false,
    images: ['assets/products/p06.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Crack Zip-Up Hoodie",
      ko: "크롬하츠 크랙 후드집업",
      ja: "クロムハーツ クラック ジップアップ フーディ"
    },
    desc: {
      en: "Heavyweight hoodie featuring the Chrome Hearts signature graphic. Premium cotton, oversized fit.",
      ko: "크롬하츠 시그니처 그래픽이 들어간 헤비웨이트 후디. 프리미엄 코튼 오버사이즈 핏.",
      ja: "クロムハーツのシグネチャーグラフィックを配したヘビーウェイトフーディ。プレミアムコットンのオーバーサイズフィット。"
    }
  },
  {
    id: 7, category: 'hoodie', price: 890000, isNew: false,
    images: ['assets/products/p07.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Tongue Zip-Up Hoodie",
      ko: "크롬하츠 혓바닥 후드집업",
      ja: "クロムハーツ タン(舌) ジップアップ フーディ"
    },
    desc: {
      en: "Heavyweight hoodie featuring the Chrome Hearts signature graphic. Premium cotton, oversized fit.",
      ko: "크롬하츠 시그니처 그래픽이 들어간 헤비웨이트 후디. 프리미엄 코튼 오버사이즈 핏.",
      ja: "クロムハーツのシグネチャーグラフィックを配したヘビーウェイトフーディ。プレミアムコットンのオーバーサイズフィット。"
    }
  },
  {
    id: 8, category: 'hoodie', price: 890000, isNew: false,
    images: ['assets/products/p08.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Camo Hoodie",
      ko: "크롬하츠 카모 후드",
      ja: "クロムハーツ カモ フーディ"
    },
    desc: {
      en: "Heavyweight hoodie featuring the Chrome Hearts signature graphic. Premium cotton, oversized fit.",
      ko: "크롬하츠 시그니처 그래픽이 들어간 헤비웨이트 후디. 프리미엄 코튼 오버사이즈 핏.",
      ja: "クロムハーツのシグネチャーグラフィックを配したヘビーウェイトフーディ。プレミアムコットンのオーバーサイズフィット。"
    }
  },
  {
    id: 9, category: 'hoodie', price: 890000, isNew: false,
    images: ['assets/products/p09.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Horseshoe Seoul Zip-Up Hoodie",
      ko: "크롬하츠 홀스슈 서울 후드집업",
      ja: "クロムハーツ ホースシュー ソウル ジップアップ フーディ"
    },
    desc: {
      en: "Heavyweight hoodie featuring the Chrome Hearts signature graphic. Premium cotton, oversized fit.",
      ko: "크롬하츠 시그니처 그래픽이 들어간 헤비웨이트 후디. 프리미엄 코튼 오버사이즈 핏.",
      ja: "クロムハーツのシグネチャーグラフィックを配したヘビーウェイトフーディ。プレミアムコットンのオーバーサイズフィット。"
    }
  },
  {
    id: 10, category: 'hoodie', price: 890000, isNew: false,
    images: ['assets/products/p10.jpg'], emblem: 'cross',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Angel Wing Zip-Up Hoodie",
      ko: "크롬하츠 엔젤윙 후드집업",
      ja: "クロムハーツ エンジェルウィング ジップアップ フーディ"
    },
    desc: {
      en: "Heavyweight hoodie featuring the Chrome Hearts signature graphic. Premium cotton, oversized fit.",
      ko: "크롬하츠 시그니처 그래픽이 들어간 헤비웨이트 후디. 프리미엄 코튼 오버사이즈 핏.",
      ja: "クロムハーツのシグネチャーグラフィックを配したヘビーウェイトフーディ。プレミアムコットンのオーバーサイズフィット。"
    }
  },
  {
    id: 11, category: 'tshirt', price: 490000, isNew: false,
    images: ['assets/products/p11.jpg'], emblem: 'horseshoe',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Mesh Short-Sleeve Tee",
      ko: "크롬하츠 매쉬 반팔티",
      ja: "クロムハーツ メッシュ ショートスリーブ Tシャツ"
    },
    desc: {
      en: "Heavyweight cotton tee with the iconic Chrome Hearts print. A wardrobe essential.",
      ko: "헤비웨이트 코튼에 아이코닉 크롬하츠 프린트. 베이직 필수 아이템.",
      ja: "ヘビーウェイトコットンにクロムハーツのアイコニックなプリント。定番アイテム。"
    }
  },
  {
    id: 12, category: 'tshirt', price: 490000, isNew: false,
    images: ['assets/products/p12.jpg'], emblem: 'horseshoe',
    sizes: ['S','M','L','XL'],
    name: {
      en: "USA Short-Sleeve T-Shirt",
      ko: "크롬하츠 USA 반팔티셔츠",
      ja: "クロムハーツ USA ショートスリーブ Tシャツ"
    },
    desc: {
      en: "Heavyweight cotton tee with the iconic Chrome Hearts print. A wardrobe essential.",
      ko: "헤비웨이트 코튼에 아이코닉 크롬하츠 프린트. 베이직 필수 아이템.",
      ja: "ヘビーウェイトコットンにクロムハーツのアイコニックなプリント。定番アイテム。"
    }
  },
  {
    id: 13, category: 'tshirt', price: 490000, isNew: false,
    images: ['assets/products/p13.jpg'], emblem: 'horseshoe',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Horseshoe Short-Sleeve T-Shirt",
      ko: "크롬하츠 말발굽 반팔티셔츠",
      ja: "クロムハーツ ホースシュー ショートスリーブ Tシャツ"
    },
    desc: {
      en: "Heavyweight cotton tee with the iconic Chrome Hearts print. A wardrobe essential.",
      ko: "헤비웨이트 코튼에 아이코닉 크롬하츠 프린트. 베이직 필수 아이템.",
      ja: "ヘビーウェイトコットンにクロムハーツのアイコニックなプリント。定番アイテム。"
    }
  },
  {
    id: 14, category: 'tshirt', price: 490000, isNew: false,
    images: ['assets/products/p14.jpg'], emblem: 'horseshoe',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Classic Logo Sweatshirt",
      ko: "크롬하츠 로고 맨투맨",
      ja: "クロムハーツ クラシック ロゴ スウェット"
    },
    desc: {
      en: "Heavyweight cotton tee with the iconic Chrome Hearts print. A wardrobe essential.",
      ko: "헤비웨이트 코튼에 아이코닉 크롬하츠 프린트. 베이직 필수 아이템.",
      ja: "ヘビーウェイトコットンにクロムハーツのアイコニックなプリント。定番アイテム。"
    }
  },
  {
    id: 15, category: 'tshirt', price: 490000, isNew: false,
    images: ['assets/products/p15.jpg'], emblem: 'horseshoe',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Cemetery Long-Sleeve Tee",
      ko: "크롬하츠 세메터리 긴팔티",
      ja: "クロムハーツ セメタリー ロングスリーブ Tシャツ"
    },
    desc: {
      en: "Heavyweight cotton tee with the iconic Chrome Hearts print. A wardrobe essential.",
      ko: "헤비웨이트 코튼에 아이코닉 크롬하츠 프린트. 베이직 필수 아이템.",
      ja: "ヘビーウェイトコットンにクロムハーツのアイコニックなプリント。定番アイテム。"
    }
  },
  {
    id: 16, category: 'denim', price: 890000, isNew: false,
    images: ['assets/products/p16.jpg'], emblem: 'fleur',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Denim Shirt",
      ko: "크롬하츠 데님 셔츠",
      ja: "クロムハーツ デニム シャツ"
    },
    desc: {
      en: "Chrome Hearts denim piece detailed with the signature cross motif.",
      ko: "시그니처 크로스 모티프가 더해진 크롬하츠 데님 피스.",
      ja: "シグネチャーのクロスモチーフをあしらったクロムハーツのデニム。"
    }
  },
  {
    id: 17, category: 'denim', price: 890000, isNew: false,
    images: ['assets/products/p17.jpg'], emblem: 'fleur',
    sizes: ['S','M','L','XL'],
    name: {
      en: "Cross Patch Denim Pants",
      ko: "크롬하츠 크로스 패치 데님팬츠",
      ja: "クロムハーツ クロス パッチ デニム パンツ"
    },
    desc: {
      en: "Chrome Hearts denim piece detailed with the signature cross motif.",
      ko: "시그니처 크로스 모티프가 더해진 크롬하츠 데님 피스.",
      ja: "シグネチャーのクロスモチーフをあしらったクロムハーツのデニム。"
    }
  },
  {
    id: 18, category: 'accessory', price: 890000, isNew: false,
    images: ['assets/products/p18.jpg'], emblem: 'dagger',
    sizes: ['FREE'],
    name: {
      en: "Dagger Bracelet",
      ko: "크롬하츠 대거 팔찌",
      ja: "クロムハーツ ダガー ブレスレット"
    },
    desc: {
      en: "An exclusive Chrome Hearts accessory — crafted with the brand's signature attention to detail.",
      ko: "크롬하츠 시그니처 디테일이 돋보이는 익스클루시브 악세사리.",
      ja: "クロムハーツのシグネチャーディテールが光るエクスクルーシブなアクセサリー。"
    }
  },
  {
    id: 19, category: 'accessory', price: 890000, isNew: false,
    images: ['assets/products/p19.jpg'], emblem: 'dagger',
    sizes: ['FREE'],
    name: {
      en: "Keeper Ring",
      ko: "크롬하츠 키퍼 반지",
      ja: "クロムハーツ キーパー リング"
    },
    desc: {
      en: "An exclusive Chrome Hearts accessory — crafted with the brand's signature attention to detail.",
      ko: "크롬하츠 시그니처 디테일이 돋보이는 익스클루시브 악세사리.",
      ja: "クロムハーツのシグネチャーディテールが光るエクスクルーシブなアクセサリー。"
    }
  },
  {
    id: 20, category: 'accessory', price: 890000, isNew: false,
    images: ['assets/products/p20.jpg'], emblem: 'dagger',
    sizes: ['FREE'],
    name: {
      en: "Dagger Necklace",
      ko: "크롬하츠 대거 목걸이",
      ja: "クロムハーツ ダガー ネックレス"
    },
    desc: {
      en: "An exclusive Chrome Hearts accessory — crafted with the brand's signature attention to detail.",
      ko: "크롬하츠 시그니처 디테일이 돋보이는 익스클루시브 악세사리.",
      ja: "クロムハーツのシグネチャーディテールが光るエクスクルーシブなアクセサリー。"
    }
  },
  {
    id: 21, category: 'accessory', price: 890000, isNew: false,
    images: ['assets/products/p21.jpg'], emblem: 'dagger',
    sizes: ['FREE'],
    name: {
      en: "Classic Beanie",
      ko: "크롬하츠 비니",
      ja: "クロムハーツ クラシック ビーニー"
    },
    desc: {
      en: "An exclusive Chrome Hearts accessory — crafted with the brand's signature attention to detail.",
      ko: "크롬하츠 시그니처 디테일이 돋보이는 익스클루시브 악세사리.",
      ja: "クロムハーツのシグネチャーディテールが光るエクスクルーシブなアクセサリー。"
    }
  },
  {
    id: 22, category: 'accessory', price: 890000, isNew: false,
    images: ['assets/products/p22.jpg'], emblem: 'dagger',
    sizes: ['FREE'],
    name: {
      en: "Evangelist Eyewear",
      ko: "크롬하츠 에바질리스트 안경",
      ja: "クロムハーツ エヴァンジェリスト アイウェア"
    },
    desc: {
      en: "An exclusive Chrome Hearts accessory — crafted with the brand's signature attention to detail.",
      ko: "크롬하츠 시그니처 디테일이 돋보이는 익스클루시브 악세사리.",
      ja: "クロムハーツのシグネチャーディテールが光るエクスクルーシブなアクセサリー。"
    }
  },
];

function getProduct(id) { return PRODUCTS.find((p) => p.id === Number(id)); }
/* 상품명·설명: 현재 선택된 언어에 맞춰 반환 (토글 시 재렌더) */
function productName(p) {
  const lang = (window.CH_I18N && window.CH_I18N.lang) || 'en';
  return p.name[lang] || p.name.en;
}
function productDesc(p) {
  const lang = (window.CH_I18N && window.CH_I18N.lang) || 'en';
  return p.desc[lang] || p.desc.en;
}
function formatPrice(n) { return '₩' + n.toLocaleString('en-US'); }

function emblemSVG(type) {
  const common = 'fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  switch (type) {
    case 'horseshoe':
      return `<svg viewBox="0 0 120 120" ${common}>
        <path d="M30 20 v40 a30 30 0 0 0 60 0 v-40" />
        <circle cx="30" cy="18" r="3"/><circle cx="90" cy="18" r="3"/>
      </svg>`;
    case 'dagger':
      return `<svg viewBox="0 0 120 120" ${common}>
        <path d="M60 15 v70"/><path d="M45 30 h30"/><path d="M55 85 l5 10 l5 -10 z"/>
      </svg>`;
    case 'fleur':
      return `<svg viewBox="0 0 120 120" ${common}>
        <path d="M60 20 C 40 40, 40 60, 60 70 C 80 60, 80 40, 60 20 Z"/>
        <path d="M60 70 v25"/><path d="M40 85 Q 60 95 80 85"/>
      </svg>`;
    default:
      return `<svg viewBox="0 0 120 120" ${common}>
        <path d="M60 18 v84"/><path d="M28 50 h64"/>
        <circle cx="60" cy="62" r="4"/>
      </svg>`;
  }
}

window.CH_PRODUCTS = { PRODUCTS, getProduct, productName, productDesc, formatPrice, emblemSVG };
