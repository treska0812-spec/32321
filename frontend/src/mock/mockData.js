// Mock data for smartphone website

export const smartphones = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 54999,
    currency: 'грн',
    image: 'https://images.unsplash.com/photo-1592286249018-da833d8d8743?w=300&h=400&fit=crop',
    category: 'flagship',
    rating: 4.9,
    reviews: 1247,
    specs: {
      display: '6.7" Super Retina XDR OLED, 120Hz',
      processor: 'Apple A17 Pro',
      camera: '48MP основна + 12MP ультраширока + 12MP телефото',
      battery: '4422 mAh',
      storage: '256GB',
      ram: '8GB',
      os: 'iOS 17'
    },
    features: ['Face ID', 'Wireless Charging', '5G', 'Water Resistant'],
    pros: ['Найкращий процесор', 'Відмінна камера', 'Преміум дизайн'],
    cons: ['Висока ціна', 'Немає зарядного пристрою в комплекті']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 49999,
    currency: 'грн',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=400&fit=crop',
    category: 'flagship',
    rating: 4.8,
    reviews: 892,
    specs: {
      display: '6.8" Dynamic AMOLED 2X, 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      camera: '200MP основна + 50MP телефото + 12MP ультраширока',
      battery: '5000 mAh',
      storage: '256GB',
      ram: '12GB',
      os: 'Android 14, One UI 6.1'
    },
    features: ['S Pen', 'Wireless Charging', '5G', 'Water Resistant'],
    pros: ['S Pen в комплекті', '200MP камера', 'Велика батарея'],
    cons: ['Складний інтерфейс', 'Багато предвстановлених додатків']
  },
  {
    id: 3,
    name: 'Google Pixel 8 Pro',
    brand: 'Google',
    price: 39999,
    currency: 'грн',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=400&fit=crop',
    category: 'camera',
    rating: 4.7,
    reviews: 634,
    specs: {
      display: '6.7" LTPO OLED, 120Hz',
      processor: 'Google Tensor G3',
      camera: '50MP основна + 48MP ультраширока + 48MP телефото',
      battery: '5050 mAh',
      storage: '128GB',
      ram: '12GB',
      os: 'Android 14'
    },
    features: ['Magic Eraser', 'Call Screen', '5G', 'Wireless Charging'],
    pros: ['Чистий Android', 'AI функції камери', 'Швидкі оновлення'],
    cons: ['Менше сторонніх додатків', 'Гірша підтримка в Україні']
  },
  {
    id: 4,
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    price: 34999,
    currency: 'грн',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=300&h=400&fit=crop',
    category: 'flagship',
    rating: 4.6,
    reviews: 756,
    specs: {
      display: '6.73" LTPO AMOLED, 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      camera: '50MP основна + 50MP ультраширока + 50MP телефото',
      battery: '5300 mAh',
      storage: '512GB',
      ram: '16GB',
      os: 'Android 14, HyperOS'
    },
    features: ['Leica камера', '90W зарядка', '5G', 'IP68'],
    pros: ['Відмінне співвідношення ціна/якість', 'Швидка зарядка', 'Багато пам\'яті'],
    cons: ['MIUI може не подобатися', 'Багато реклами']
  },
  {
    id: 5,
    name: 'OnePlus 12',
    brand: 'OnePlus',
    price: 29999,
    currency: 'грн',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=400&fit=crop',
    category: 'performance',
    rating: 4.5,
    reviews: 423,
    specs: {
      display: '6.82" LTPO3 AMOLED, 120Hz',
      processor: 'Snapdragon 8 Gen 3',
      camera: '50MP основна + 64MP телефото + 48MP ультраширока',
      battery: '5400 mAh',
      storage: '256GB',
      ram: '16GB',
      os: 'Android 14, OxygenOS 14'
    },
    features: ['100W зарядка', 'Alert Slider', '5G', 'Hasselblad камера'],
    pros: ['Дуже швидка зарядка', 'Швидка робота', 'Чистий Android'],
    cons: ['Менша підтримка в Україні', 'Немає бездротової зарядки']
  }
];

export const phoneCategories = [
  {
    id: 'flagship',
    name: 'Флагманські',
    description: 'Топові моделі з найкращими характеристиками',
    icon: 'crown',
    color: 'blue'
  },
  {
    id: 'camera',
    name: 'Камерофони',
    description: 'Смартфони з відмінними камерами',
    icon: 'camera',
    color: 'purple'
  },
  {
    id: 'budget',
    name: 'Бюджетні',
    description: 'Доступні смартфони з хорошим функціоналом',
    icon: 'wallet',
    color: 'green'
  },
  {
    id: 'performance',
    name: 'Ігрові',
    description: 'Потужні смартфони для ігор та мультимедіа',
    icon: 'gamepad',
    color: 'red'
  }
];

export const stores = [
  {
    id: 1,
    name: 'Rozetka',
    type: 'Інтернет-магазин',
    website: 'rozetka.com.ua',
    phone: '+380 (44) 537-02-22',
    locations: [
      { city: 'Київ', address: 'вул. Хрещатик, 22', lat: 50.4501, lng: 30.5234 },
      { city: 'Львів', address: 'вул. Городоцька, 363', lat: 49.8397, lng: 24.0297 },
      { city: 'Одеса', address: 'вул. Дерибасівська, 27', lat: 46.4825, lng: 30.7233 }
    ],
    features: ['Доставка по всій Україні', 'Оплата частинами', 'Гарантія']
  },
  {
    id: 2,
    name: 'Comfy',
    type: 'Мережа магазинів',
    website: 'comfy.ua',
    phone: '+380 (800) 303-505',
    locations: [
      { city: 'Київ', address: 'ТРЦ Lavina Mall', lat: 50.4501, lng: 30.5234 },
      { city: 'Харків', address: 'пр. Гагаріна, 20А', lat: 49.9935, lng: 36.2304 },
      { city: 'Дніпро', address: 'вул. Глинки, 2', lat: 48.4647, lng: 35.0462 }
    ],
    features: ['Trade-in програма', 'Кредит 0%', 'Професійні консультанти']
  },
  {
    id: 3,
    name: 'Allo',
    type: 'Інтернет-магазин',
    website: 'allo.ua',
    phone: '+380 (800) 300-100',
    locations: [
      { city: 'Київ', address: 'ТРЦ Gulliver', lat: 50.4501, lng: 30.5234 },
      { city: 'Запоріжжя', address: 'пр. Соборний, 176', lat: 47.8388, lng: 35.1396 }
    ],
    features: ['Швидка доставка', 'Самовивіз з магазинів', 'Програма лояльності']
  }
];

export const facts = [
  {
    id: 1,
    title: 'Перший смартфон',
    description: 'Перший смартфон IBM Simon був випущений у 1994 році і коштував $1,100',
    category: 'Історія',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Найдорожчий смартфон',
    description: 'Falcon Supernova iPhone 6 Pink Diamond коштує $48.5 мільйонів',
    category: 'Рекорди',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Найпопулярніша ОС',
    description: 'Android використовує більше 70% смартфонів у світі',
    category: 'Статистика',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=200&fit=crop'
  },
  {
    id: 4,
    title: 'Перший iPhone',
    description: 'Перший iPhone не мав App Store - він з\'явився тільки в 2008 році',
    category: 'Історія',
    image: 'https://images.unsplash.com/photo-1592286249018-da833d8d8743?w=400&h=200&fit=crop'
  },
  {
    id: 5,
    title: 'Найтонший смартфон',
    description: 'Vivo X5 Max має товщину всього 4.75 мм',
    category: 'Рекорди',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=200&fit=crop'
  },
  {
    id: 6,
    title: 'Час використання',
    description: 'Середня людина дивиться на свій смартфон 96 разів на день',
    category: 'Статистика',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=200&fit=crop'
  },
  {
    id: 7,
    title: 'Найбільший екран',
    description: 'Найбільший екран смартфона складає 7.2 дюйми (Huawei Mate 20 X)',
    category: 'Рекорди',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=200&fit=crop'
  },
  {
    id: 8,
    title: 'Перша камера',
    description: 'Перший смартфон з камерою - Kyocera Visual Phone VP-210 (1999)',
    category: 'Історія',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=200&fit=crop'
  },
  {
    id: 9,
    title: 'Найбільша батарея',
    description: 'Energizer Power Max P28K має батарею 28,000 mAh',
    category: 'Рекорди',
    image: 'https://images.unsplash.com/photo-1592286249018-da833d8d8743?w=400&h=200&fit=crop'
  },
  {
    id: 10,
    title: 'Touch ID швидкість',
    description: 'Touch ID розпізнає відбиток пальця за 0.01 секунди',
    category: 'Технології',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=200&fit=crop'
  },
  {
    id: 11,
    title: 'Найшвидша зарядка',
    description: 'Realme GT Neo3 заряджається на 150W за 5 хвилин до 50%',
    category: 'Технології',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=200&fit=crop'
  },
  {
    id: 12,
    title: 'Глобальні продажі',
    description: 'У світі продається більше 1.4 мільярда смартфонів щорічно',
    category: 'Статистика',
    image: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=200&fit=crop'
  }
];

export const surveyQuestions = [
  {
    id: 1,
    question: 'Який ваш основний бренд смартфона?',
    type: 'radio',
    options: ['Apple', 'Samsung', 'Xiaomi', 'Google', 'OnePlus', 'Інший']
  },
  {
    id: 2,
    question: 'Яка найважливіша характеристика для вас?',
    type: 'radio',
    options: ['Камера', 'Батарея', 'Продуктивність', 'Дизайн', 'Ціна']
  },
  {
    id: 3,
    question: 'Який ваш бюджет на смартфон?',
    type: 'radio',
    options: ['До 10,000 грн', '10,000-25,000 грн', '25,000-50,000 грн', 'Більше 50,000 грн']
  },
  {
    id: 4,
    question: 'Як часто ви міняєте смартфон?',
    type: 'radio',
    options: ['Щорічно', 'Раз в 2-3 роки', 'Раз в 4-5 років', 'Коли поламається']
  },
  {
    id: 5,
    question: 'Які функції камери важливі для вас? (можна обрати кілька)',
    type: 'checkbox',
    options: ['Нічний режим', 'Портретний режим', 'Широкий кут', '4K відео', 'Оптичний зум']
  },
  {
    id: 6,
    question: 'Скільки часу ви використовуєте смартфон щодня?',
    type: 'radio',
    options: ['Менше 2 годин', '2-4 години', '4-6 годин', 'Більше 6 годин']
  },
  {
    id: 7,
    question: 'Яка операційна система вам подобається більше?',
    type: 'radio',
    options: ['iOS', 'Android', 'Мені все одно']
  },
  {
    id: 8,
    question: 'Що найчастіше робите на смартфоні?',
    type: 'radio',
    options: ['Соціальні мережі', 'Фотографування', 'Ігри', 'Робота', 'Відео/музика']
  },
  {
    id: 9,
    question: 'Чи важлива для вас бездротова зарядка?',
    type: 'radio',
    options: ['Дуже важлива', 'Бажана', 'Не важлива', 'Не користуюся']
  },
  {
    id: 10,
    question: 'Ваш рейтинг загального задоволення смартфоном (1-10)',
    type: 'range',
    min: 1,
    max: 10
  }
];

export const choiceGuide = {
  steps: [
    {
      id: 1,
      title: 'Визначте бюджет',
      description: 'Спочатку вирішіть, скільки ви готові витратити на новий смартфон',
      details: [
        'Бюджетні (до 15,000 грн) - базовий функціонал',
        'Середній клас (15,000-35,000 грн) - оптимальне співвідношення',
        'Преміум (35,000+ грн) - топові характеристики'
      ]
    },
    {
      id: 2,
      title: 'Оберіть розмір',
      description: 'Розмір екрана впливає на зручність використання',
      details: [
        'Компактні (до 6") - зручно тримати однією рукою',
        'Стандартні (6-6.5") - універсальний розмір',
        'Великі (6.5"+) - краще для мультимедіа та ігор'
      ]
    },
    {
      id: 3,
      title: 'Камера',
      description: 'Оцініть важливість якості фото та відео',
      details: [
        'Основна камера - від 12MP для базових потреб',
        'Мультикамерна система - для професійних фото',
        'Нічний режим - для фото в темряві',
        'Стабілізація - для відео без тряски'
      ]
    },
    {
      id: 4,
      title: 'Продуктивність',
      description: 'Залежить від ваших завдань',
      details: [
        'Базові задачі - бюджетні процесори',
        'Мультитаскінг - 6-8GB RAM',
        'Ігри - топові чіпсети та 8GB+ RAM',
        'Професійна робота - флагманські моделі'
      ]
    },
    {
      id: 5,
      title: 'Батарея',
      description: 'Час автономної роботи',
      details: [
        '3000-4000 mAh - на день використання',
        '4000-5000 mAh - на 1.5-2 дні',
        '5000+ mAh - максимальна автономність',
        'Швидка зарядка - від 25W'
      ]
    }
  ]
};