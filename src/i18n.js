import i18n from "i18next";
import React from "react";
import { initReactI18next, useTranslation } from "react-i18next";

const STORAGE_KEY = "i18nextLng";
const SUPPORTED = new Set(["en", "az", "ru"]);

function getSavedLang() {
  try {
    if (typeof window === "undefined") return null;
    const v = window.localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.has(v) ? v : null;
  } catch {
    return null;
  }
}

function saveLang(lng) {
  try {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* ignore write errors (private mode, etc.) */
  }
}


const initialLng = getSavedLang() || "en";

i18n
  .use(initReactI18next) // Passes i18n instance to React
  .init({
    resources: {
      az: {
        translation: {
    nav_services: "Xidmətlərimiz",
    nav_catalogs: "Kataloqlar",
    nav_sites: "Saytlar",
    nav_photo: "Şəkillər",
    nav_blog: "Bloq",
    nav_contacts: "Əlaqə",
    nav_login: "Daxil ol / Qeydiyyat",

    // Hero
    hero_title1: "Çində sizin etibarlı tərəfdaşınız və dostunuz",
    hero_text1: "Məqsədimiz Çinlə biznesinizi mümkün qədər səmərəli etməkdir.",
    hero_title2: "Çindən malların sifarişində sizə kömək edəcəyik.",
    hero_text2: "Ofislərimiz və anbarlarımız Quanqcou, Yiwu və Xorgos şəhərlərində yerləşir.",
    hero_title3: "Addım-addım",
    hero_text3: "Ən uzun yol birinci addımdan başlayır",
    hero_title4: "Alırıq və çatdırırıq",
    hero_text4: "Məqsədimiz Çinlə biznesinizi mümkün qədər səmərəli etməkdir.",
    hero_prev: "Əvvəlki",
    hero_next: "Növbəti",
    hero_order_h1: "İlkin sifariş formu",
    hero_order_p:
      "Bu formada istədiyiniz məhsul üçün tələblərinizi qeyd edin. Əlaqə məlumatlarınızı doldurun və göndərin",
    hero_p:
      ", sizinlə əlaqə saxlayıb Çindən çatdırılma barədə məsləhət verəcəyik.",
    hero_orderform: "Sifariş Formu",
    hero_order_quote: "“Məhsulu seçin, bizə yazın, həll edək.”",

    red_li1: "Vasitəçilərdən istifadə etmirik, çünki Çində yerləşirik.",
    red_li2:
      "Çindən Azərbaycan, Rusiya, Gürcüstan, Türkiyə və digər ölkələrə birləşdirilmiş yüklər və tam konteynerlər daşıyırıq. Şirkətin ofis və anbarı Quanqcouda yerləşir, həmçinin Yiwu bazar şəhərində və dəmir yolu nəhəngi Xorgosda böyük anbarlarımız var.",
    red_li3:
      "Məhsulların alınması, saxlanması, konsolidasiyası və çatdırılması üzrə keyfiyyətli xidmət göstəririk.",
    red_li4:
      "Məqsədimiz Çinlə biznesinizi mümkün qədər sadə və rahat etməkdir.",
    red_li5:
      "“Bridge Line Trading” ilə biznesiniz üçün ən sərfəli həlli tapa bilərsiniz.",

    // Our Services
    our_services: {
      title: "Xidmətlərimiz",
      subtitle:
        "Çində biznes ehtiyaclarınız üçün hərtərəfli tədarük və satınalma həlləri",
      step1: {
        title: "Bizə yazın (soruşun — cavab verəcəyik)",
        list: [
          "Çində məhsul tədarükü və satınalma barədə daha çox öyrənmək istəyirsiniz?",
          "Bizimlə əlaqə saxlayın — suallarınıza məmnuniyyətlə cavab verəcəyik.",
          "Məhsullar haqqında ətraflı məlumat təqdim edirik.",
          "Çinlə bağlı istənilən məlumatı da təqdim edirik.",
          "Çinə səfər etməyi düşünürsünüzsə, bizimlə əlaqə saxlayın.",
          "Sizi hava limanında qarşılaya, oteldə yerləşdirə və səfərdə dəstək ola bilərik."
        ]
      },
      step2: {
        title: "Tapırıq, danışıqlar aparırıq, məlumat veririk, alırıq və göndəririk",
        text: [
          "Çində istehsalçı, təchizatçı və ya məhsul axtarırsınız? Maraqlanan məhsulu Çin saytlarında və ya sitemizdəki kataloqlarda tapa bilərsiniz.",
          "Sorğunuza əsasən fabrik və təchizatçılarla birbaşa əlaqə saxlayırıq və ətraflı məlumat əldə edirik.",
          "Sifariş verdikdə, məhsulu sizin adınızdan alıb anbarımıza çatdırırıq."
        ]
      },
      step3: {
        title: "Məhsulların anbarımıza çatdırılması",
        text: [
          "Sifariş alındıqdan sonra təchizatçılar malları anbarımıza göndərirlər. Anbara daxili çatdırılma dəyəri təchizatçı ilə ayrıca razılaşdırılır.",
          "Çalışırıq ki, anbara çatdırılma pulsuz olsun; əgər daxili çatdırılma ödənişlidirsə, sizi əvvəlcədən məlumatlandırırıq."
        ]
      },
      step4: {
        title: "Məhsulların yoxlanılması",
        text: [
          "Anbarlarımızda malların keyfiyyət və sayına nəzarət edirik.",
          "Lazım olduqda foto/video hesabat təqdim edirik. Tam detallı yoxlamalar üçün ayrıca inspektor ayırırıq (ödənişlidir).",
          "Zavod və təchizatçıların yerində yoxlanılması da mümkündür."
        ]
      },
      step5: {
        title: "Məhsulların qablaşdırılması",
        text: [
          "Mallar zavodda qablaşdırılıb birbaşa göndərilirsə, istəyə əsasən qablaşdırmanın yoxlanmasını təşkil edirik (ödənişlidir).",
          "Mallar anbarımıza daxil olduqda, sifarişinizə uyğun düzgün qruplaşdırma və qablaşdırmanı nəzarətdə saxlayırıq."
        ],
        list: [
          "Paket + skoç",
          "Plastik bucaqlar + paket + skoç",
          "Karton bucaqlar + paket + skoç",
          "Taxta qablaşdırma: streç + taxta + paket + skoç",
          "Palet üzərində taxta qablaşdırma",
          "Taxta yeşik"
        ]
      },
      step6: {
        title: "Məhsulların sizə çatdırılması",
        text: [
          "Çatdırılma dəyəri əvvəlcədən razılaşdırıldıqda yüklər qəbul edilir.",
          "Hesablama üçün məhsul növü, qablaşdırmadan sonrakı çəki, həcmi (CBM), dəyəri, göndərmə üsulu və sənədlər tələb olunur.",
          "Yükləri anbardan götürə və ya daxili kuryerlərlə ünvana çatdırılmasını sifariş edə bilərsiniz (əlavə ödəniş)."
        ]
      },
      step7: {
        title: "Birləşdirilmiş yüklər haqqında",
        text: [
          "Hava daşımaları adətən 3–5 kq-dan başlayır; avtomobil/qatar/dəniz daşımaları 0.5–1 m³-dən.",
          "Tək məhsulların daşınması da mümkündür — zəhmət olmasa detallar üçün yazın."
        ]
      },
      step8: {
        title: "Komissiyamız",
        text: [
          "Sifariş həcmi və işin miqyasından asılı olaraq 3%–10% komissiya tətbiq olunur.",
          "Komissiyaya danışıqlar, məhsulun yoxlanması, saxlanma və göndərişin təşkili daxildir."
        ]
      },
      step9: {
        title: "Çin onlayn platformalarından alış",
        text: [
          "1688.com, taobao.com, tmall.com, pinduoduo.com, poizon.com və digər platformalardan sifarişlərin alınması, yoxlanması və çatdırılması."
        ]
      }
    },

    // Categories
    categories: {
      main_title: "Hansı kateqoriyalarda işləyirik?",
      group1: {
        title: "Ümumi məhsullar",
        items: [
          "Case (korpus, qutu və s.)",
          "Avtomobil aksesuarları",
          "Motosiklet, velosiped, skuterlər (elektrik və qeyri-elektrik)",
          "ATV (kvadrosikllər, kartinq — elektrik/benzin)",
          "Ağır texnika (yük maşınları və ehtiyat hissələri)",
          "Məişət texnikası və avadanlıqlar",
          "Mebel (mebel aksesuarları)",
          "Bağ və istirahət üçün hər şey (asılqanlar, çətirlər, rattan məmulatları və s.)",
          "Qapılar və qapı üçün hər şey",
          "Tikinti materialları",
          "Aksessuarlar (telefon aksesuarları, qadcetlər və s.)",
          "İNCƏSƏNƏT (dekor, əsərlər)",
          "İdman malları",
          "Oyuncaqlar",
          "Çilçıraqlar (və digər işıqlandırma cihazları)",
          "Şəhərsalma üçün (parklar, həyətlər, küçələr, yollar)",
          "Yol təmiri",
          "Kosmetik məhsullar",
          "Elektron siqaretlər (VAPE)",
          "Karvan evlər (avtomobilə qoşulan və ya quraşdırılan)",
          "Kapsul evlər"
        ]
      },
      group2: {
        title: "Avadanlıq və alətlər",
        items: [
          "Avadanlıq",
          "Baryerlər, şlaqbaumlar",
          "Alətlər",
          "Xüsusi geyim",
          "Qab-qaşıq",
          "Eko qablar (birdəfəlik süfrə ləvazimatları)",
          "Uşaqlar üçün meydançalar (açıq/bağlı)",
          "Yay istirahəti məhsulları (dəniz, yay)",
          "Bağ alətləri",
          "Santexnika",
          "İşıqlandırma avadanlığı",
          "İdman avadanlıqları",
          "Tekstil (geyim, yataq dəsti və s.)",
          "Turist malları (turizm, istirahət)",
          "Ventilyatorlar, kondisionerlər (ehtiyat hissələri)",
          "Havalandırma avadanlığı",
          "Hovuz məhsulları və avadanlıqları",
          "Ev heyvanları üçün hər şey",
          "İçkilər, qida məhsulları (çips, souslar, konservlər və s.)",
          "Bank avadanlığı (pul sayanlar, detektorlar və s.)",
          "LED işıqlandırma (LED panellər, elektron ekranlar və s.)"
        ]
      }
    },

    // Advantages
    advantages: {
      main_title: "Üstünlüklərimiz.",
      list: [
        {
          title: "İstənilən məhsulu tapacağıq",
          text:
            "Çində etibarlı təchizatçı və istehsalçıları tapırıq. Lazım olan hər bir məhsul üçün sərfəli qiymət razılaşdırırıq."
        },
        {
          title: "Quanqcou, Yiwu, Xorgosda anbarlarımız",
          text:
            "Əsas ofis/anbar Quanqcouda, əlavə anbarlarımız Yiwu və Xorgosdadır. Bu ünvanlara sifariş edə və biz göndərə bilərik."
        },
        {
          title: "Aşağı komissiya",
          text:
            "Onlayn platformalarda 5–10%, birbaşa sizin təchizatçı ilə alışda 3–5% komissiya. Ödəniş və alış eyni gün mümkündür."
        },
        {
          title: "Sürətli çatdırılma",
          text:
            "Yük anbarımızda uzun qalmır — həftəlik müntəzəm maşın çıxışlarımız var."
        },
        {
          title: "Rəqabətli çatdırılma qiymətləri",
          text:
            "Geyim, məişət malları, elektronika və s. üzrə sərfəli tariflər. Daimi müştərilər üçün xüsusi şərtlər."
        },
        {
          title: "KARGO çatdırılma",
          text:
            "Fiziki şəxslər üçün CARGO xidməti; hüquqi şəxslər üçün rəsmiləşdirmə ilə nağdsız ödəniş mümkündür."
        }
      ]
    },

    // Order form
    order_form: {
      title: "Sifariş formu",
      description:
        "Zəhmət olmasa bütün xanaları doldurun, Çindən çatdırılmanı müzakirə etmək üçün sizinlə əlaqə saxlayacağıq.",
      name: "Ad",
      name_placeholder: "Adınızı daxil edin",
      name_error: "Zəhmət olmasa adınızı daxil edin.",
      email: "Email",
      email_placeholder: "Emailinizi daxil edin",
      email_error: "Düzgün email daxil edin.",
      telephone: "Telefon",
      telephone_placeholder: "Telefon nömrənizi daxil edin",
      telephone_error: "Zəhmət olmasa telefon nömrənizi daxil edin.",
      request_description: "Sorğunun təsviri",
      text_placeholder: "Sorğunuzu və ya məhsul detalını yazın...",
      send: "Göndər"
    },

    // Product Interest Section
    pis: {
      title: "Bu bölmədə sizi maraqlandıran məhsulları seçin",
      subtitle: "Çin onlayn ticarət saytlarından.",
      openForm: "Sifariş formasını aç",
      orderBtn: "Sifariş Formu",
      note: "“Məhsulu seçin, bizə yazın, həll edək.”"
    },

    mplaces_title: "Marketplace seçin",
    mplaces_note: "İstənilənini seçin, Website düyməsini sıxın.",

    // Contact
    contact: {
      headerTitle: "Bizimlə əlaqə",
      headerDesc:
        "Çinlə tədarük səyahətinə başlamağa hazırsınız? Biz necə kömək edə biləcəyimizi müzakirə edək.",
      heroTitle: "Çinə körpünüz",
      heroText:
        "Beynəlxalq şirkətləri Çində etibarlı təchizatçı və istehsalçılarla birləşdiririk.",
      emailLabel: "Əsas Email",
      phoneLabel: "Birbaşa xətt",
      locationLabel: "Baş ofis",
      locationValue: "Quanqcou, Çin",
      hoursLabel: "İş saatları",
      hoursValue1: "B.e–C.a: 9:00–18:00",
      hoursValue2: "Ş.: 10:00–16:00",
      fastResponseTitle: "Sürətli cavab",
      fastResponseText:
        "İş günlərində adətən 2–4 saat ərzində cavab veririk.",
      secureTitle: "Gizlilik və etibar",
      secureText:
        "Məlumatlarınız və sorğularınız tam məxfi saxlanılır.",
      formTitle: "Bizə mesaj göndərin",
      formDesc:
        "Aşağıdakı formanı doldurun, ən qısa zamanda geri dönəcəyik.",
      name: "Tam ad",
      email: "Email ünvanı",
      subject: "Mövzu",
      message: "Mesaj",
      optSourcing: "Məhsul tədarükü",
      optShipping: "Logistika və çatdırılma",
      optOther: "Digər",
      placeholderName: "Tam adınızı daxil edin",
      placeholderEmail: "Email ünvanınızı daxil edin",
      placeholderMessage:
        "Layihə tələblərinizi, məhsul detallarını və s. yazın...",
      sendBtn: "Mesajı göndər",
      formNote:"* Məcburi xanalar. Məlumatlarınız məxfi saxlanılır.",
      successMsg: "Сообщение успешно отправлено.",
      failMsg: "Не удалось отправить сообщение.",
      requiredError: "Пожалуйста, заполните все обязательные поля.",
      errorInvalidEmail: "Введите корректный адрес электронной почты.",
      networkError: "Ошибка сети или сервера. Повторите попытку позже."
    }
  }
      },
      en: {
        translation: {
          nav_services: "Our Services",
          nav_catalogs: "Catalogs",
          nav_sites: "Sites",
          nav_photo: "Photo",
          nav_blog: "Blog",
          nav_contacts: "Contacts",
              nav_login: "Login / Register",
              //Hero
              hero_title1: "Your reliable partner and friend in China",
              hero_text1: "Our goal is to make your business with China as efficient as possible.",
              hero_title2: "We'll help you order goods from China.",
              hero_text2: "Our offices and warehouses are located in Guangzhou, Yiwu and Khorgos.",
              hero_title3: "Step by step",
              hero_text3: "The longest journey begins with the first step",
              hero_title4: "We buy and deliver",
              hero_text4: "Our goal is to make your business with China as efficient as possible.",
              hero_prev: "Previous",
              hero_next: "Next",
              hero_order_h1:"Preliminary order form",
              hero_order_p: "In this form, please specify your requirements for the desired product. Fill in your contact information and send it to",
              hero_p:", we will contact you and advise you on the delivery of goods from China.",
              hero_orderform: "Order Form",
              hero_order_quote: "“Choose a product, write to us, we’ll decide.”",
              red_li1: "We do not use intermediaries, as we are located in China.",
              red_li2: "We transport consolidated cargo and full containers from China to Azerbaijan, Russia, Georgia, Turkey and a number of other countries. The company's office and warehouse are located in Guangzhou, we also have a large warehouse in the market city of Yiwu and in Khorgos, the Chinese giant of railway transportation.",
              red_li3: "We provide quality services for the purchase, storage, consolidation and delivery of goods.",
              red_li4: "Our goal is to make your business with China as simple and enjoyable as possible.",
              red_li5: "With the help of “Bridge Line Trading” you can find the most cost-effective solution for your business.",
             our_services: {
      title: "Our Services",
      subtitle: "Comprehensive sourcing and purchasing solutions for your China business needs",

      step1: {
        title: "Write to us (ask - we will answer)",
        list: [
          "Want to learn more about sourcing and purchasing products in China?",
          "Contact us, and we'll be happy to answer your questions.",
          "We'll provide you with comprehensive product information.",
          "We also provide any information related to China.",
          "If you're thinking about visiting China, please contact us.",
          "We can meet you at Guangzhou Airport, accommodate you at your hotel, and assist you with your travel arrangements."
        ]
      },
      step2: {
        title: "We find, negotiate, inform, purchase, and send",
        text: [
          "Looking for manufacturers, suppliers, or products in China? You can find any product on Chinese websites or in catalogs on our site.",
          "We directly contact factories and suppliers at your request to obtain comprehensive information about any product you wish to purchase.",
          "If you place an order, we purchase the product on your behalf and deliver it to our warehouse."
        ]
      },
      step3: {
        title: "Delivery of goods to our warehouse",
        text: [
          "After purchasing your order, suppliers deliver it to our warehouse. Shipping costs to warehouses are negotiated separately with the supplier.",
          "We try to secure free delivery to our warehouse, but if suppliers charge a domestic delivery fee, you will be notified in advance."
        ]
      },
      step4: {
        title: "Checking the goods",
        text: [
          "We monitor the quality and quantity of goods in our warehouses.",
          "You receive photo and video reports if needed. For full inspections we assign a dedicated inspector — a separate paid service.",
          "We also offer factory and supplier inspections."
        ]
      },
      step5: {
        title: "Packaging of goods",
        text: [
          "If goods are packed at the factory and shipped directly, we can inspect packaging at the factory on request (paid service).",
          "If goods arrive at our warehouse, we supervise correct packaging and group items according to your order."
        ],
        list: [
          "Bag + tape",
          "Plastic corners + bag + tape",
          "Cardboard corners + bag + tape",
          "Wooden packaging: stretch film + wooden + bag + tape",
          "Wooden packaging on a pallet",
          "Wooden box"
        ]
      },
      step6: {
        title: "Delivery of goods to you",
        text: [
          "We accept shipments if the shipping cost is agreed in advance.",
          "To calculate shipping cost we need product type, weight, volume, value, and method.",
          "You can pick up goods or request delivery via domestic carriers (extra fee)."
        ]
      },
      step7: {
        title: "Regarding consolidated cargo",
        text: [
          "Air shipments usually start from 3–5 kg. Road, train, or sea transport typically start from 0.5–1 CBM.",
          "We can transport small single items as well. Contact us with cargo details and we'll discuss the best route."
        ]
      },
      step8: {
        title: "Our commission",
        text: [
          "We charge a commission of 3% to 10% depending on order volume and work performed.",
          "The commission covers supplier negotiation, product checking, storage, and shipment organization."
        ]
      },
      step9: {
        title: "Purchasing goods on Chinese online trading platforms",
        text: [
          "We purchase, check, and deliver goods ordered from Chinese platforms such as 1688.com, taobao.com, tmall.com, pinduoduo.com, poizon.com, and others."
        ]
      }
             },
             categories: {
      main_title: "What Categories do we work in?",
      group1: {
        title: "General Products",
        items: [
          "Case",
          "Car accessories",
          "Motorcycles, bicycles, scooters (electric and non-electric)",
          "ATV (quad bikes, go-karts, electric/gasoline)",
          "Heavy equipment (trucks and parts)",
          "Household appliances, household items",
          "Furniture (furniture fittings)",
          "Everything for the garden and recreation (hammocks, umbrellas, rattan products, etc.)",
          "Doors and everything for doors",
          "Building materials",
          "Accessories (phone accessories, gadgets, etc.)",
          "ART (works of art, decor)",
          "Sporting goods",
          "Toys",
          "Chandeliers (and other lighting fixtures)",
          "For urban development (for parks, courtyards, streets, roads)",
          "Road repairs",
          "Cosmetic products",
          "Electronic cigarettes (VAPE)",
          "Caravans (homes attached to or mounted on a car)",
          "Capsule houses (cabin houses)"
        ]
      },
      group2: {
        title: "Equipment and Tools",
        items: [
          "Equipment",
          "Barriers, boom gates",
          "Tools",
          "Special clothing",
          "Dishes",
          "Eco containers (disposable tableware)",
          "Children's playgrounds (outdoor and indoor)",
          "Summer vacation products (sea, summer)",
          "Garden tools",
          "Plumbing",
          "Lighting equipment",
          "Sports equipment",
          "Textiles (clothing, bedding, etc.)",
          "Tourist goods (tourism, recreation)",
          "Fans, air conditioners (spare parts)",
          "Ventilation equipment",
          "Swimming pool products and equipment",
          "Everything for pets",
          "Drinks, food products (chips, sauces, canned goods, tomatoes, etc.)",
          "Banking equipment (cash counters, detectors, etc.)",
          "LED lighting (LED panels, electronic displays, etc.)"
        ]
      }
              },
             advantages: {
      main_title: "Our advantages.",
      list: [
        {
          title: "We will find any product",
          text: "We'll find trusted suppliers and manufacturers in China. We'll find any product you need and negotiate a competitive price."
        },
        {
          title: "Our warehouses in Guangzhou, Yiwu, Horroce",
          text: "Our main warehouse/office is in Guangzhou, with additional warehouses in Yiwu and Horoce. You can order products to these addresses, and we'll ship them to you."
        },
        {
          title: "Low commission",
          text: "Our commission: 5–10% for online platforms, and 3–5% when purchasing directly from your supplier. Transfers and purchases are made on the same day."
        },
        {
          title: "Fast delivery",
          text: "Cargo doesn’t stay long in our warehouse. With regular truck shipments, deliveries go out every week."
        },
        {
          title: "Competitive delivery prices",
          text: "We offer fair shipping prices for clothes, electronics, household goods, and more. Special terms are available for regular customers."
        },
        {
          title: "Cargo delivery",
          text: "We provide CARGO services for individuals and non-cash payments with customs clearance for legal entities."
        }
      ]
              },
             order_form: {
      title: "Order form",
      description: "Please fill in all fields, and we will contact you to discuss shipping from China.",
      name: "Name",
      name_placeholder: "Enter your name",
      name_error: "Please enter your name.",
      email: "Email",
      email_placeholder: "Enter your email",
      email_error: "Please enter a valid email.",
      telephone: "Telephone",
      telephone_placeholder: "Enter your phone number",
      telephone_error: "Please enter your phone number.",
      request_description: "Request Description",
      text_placeholder: "Describe your request or product details...",
      send: "Send"
              },
             pis: {
        title: "In this section, select the products you’re interested in from",
        subtitle: "Chinese online trading sites.",
        openForm: "Open order form",
        orderBtn: "Order Form",
        note: "“Choose a product, write to us, we’ll decide.”"
              },
              mplaces_title: "Select a Marketplace",
              mplaces_note: "Choose any, click Website.",
              contact: {
  headerTitle: "Get In Touch",
  headerDesc: "Ready to start your China sourcing journey? Let's discuss how we can help your business grow.",
  heroTitle: "Your Bridge to China",
  heroText: "We specialize in connecting international businesses with reliable Chinese suppliers and manufacturers.",
  emailLabel: "Primary Email",
  phoneLabel: "Direct Line",
  locationLabel: "Headquarters",
  locationValue: "Guangzhou, China",
  hoursLabel: "Business Hours",
  hoursValue1: "Mon–Fri: 9:00–18:00",
  hoursValue2: "Sat: 10:00–16:00",
  fastResponseTitle: "Fast Response",
  fastResponseText: "We typically respond within 2–4 hours during business days.",
  secureTitle: "Secure Partnership",
  secureText: "Your business information and inquiries are completely confidential.",
  formTitle: "Send us a Message",
  formDesc: "Fill out the form below and we'll get back to you promptly.",
  name: "Full Name",
  email: "Email Address",
  subject: "Subject",
  message: "Message",
  optSourcing: "Product Sourcing",
  optShipping: "Shipping & Logistics",
  optOther: "Other",
  placeholderName: "Enter your full name",
  placeholderEmail: "Enter your email",
  placeholderMessage: "Tell us about your project requirements, product details, or any specific needs...",
  sendBtn: "Send Message",
  formNote: "* Required fields. We respect your privacy and will never share your information.",
      successMsg: "Message sent successfully.",
      failMsg: "Failed to send message.",
      requiredError: "Please fill in all required fields.",
      errorInvalidEmail: "Please enter a valid email address.",
      networkError: "Network or server error. Please try again later."
}

             
        },
      },
      ru: {
        translation: {
    nav_services: "Наши услуги",
    nav_catalogs: "Каталоги",
    nav_sites: "Сайты",
    nav_photo: "Фото",
    nav_blog: "Блог",
    nav_contacts: "Контакты",
    nav_login: "Вход / Регистрация",

    // Hero
    hero_title1: "Ваш надежный партнер и друг в Китае",
    hero_text1:
      "Наша цель — сделать ваш бизнес с Китаем максимально эффективным.",
    hero_title2: "Мы поможем заказать товары из Китая.",
    hero_text2:
      "Наши офисы и склады находятся в Гуанчжоу, Иу и Хоргосе.",
    hero_title3: "Шаг за шагом",
    hero_text3: "Самый длинный путь начинается с первого шага",
    hero_title4: "Покупаем и доставляем",
    hero_text4:
      "Наша цель — сделать ваш бизнес с Китаем максимально эффективным.",
    hero_prev: "Назад",
    hero_next: "Вперед",
    hero_order_h1: "Предварительная форма заказа",
    hero_order_p:
      "В этой форме укажите требования к нужному товару. Заполните контактные данные и отправьте на",
    hero_p:
      ", мы свяжемся с вами и проконсультируем по доставке из Китая.",
    hero_orderform: "Форма заказа",
    hero_order_quote: "«Выберите товар, напишите нам — решим.»",

    red_li1:
      "Мы не пользуемся посредниками, потому что находимся в Китае.",
    red_li2:
      "Перевозим сборные грузы и целые контейнеры из Китая в Азербайджан, Россию, Грузию, Турцию и ряд других стран. Офис и склад компании — в Гуанчжоу, также есть крупные склады в торговом городе Иу и в Хоргосе — железнодорожном хабе.",
    red_li3:
      "Оказываем качественные услуги по покупке, хранению, консолидации и доставке товаров.",
    red_li4:
      "Наша цель — сделать ваш бизнес с Китаем простым и комфортным.",
    red_li5:
      "С «Bridge Line Trading» вы найдете максимально выгодное решение для своего бизнеса.",

    // Our Services
    our_services: {
      title: "Наши услуги",
      subtitle:
        "Комплексные решения по поиску и закупке товаров в Китае",
      step1: {
        title: "Напишите нам (спросите — ответим)",
        list: [
          "Хотите больше узнать о закупках и поставках из Китая?",
          "Свяжитесь с нами — с радостью ответим на ваши вопросы.",
          "Предоставим подробную информацию о товарах.",
          "Также предоставляем любую информацию, связанную с Китаем.",
          "Планируете поездку в Китай? Обратитесь к нам.",
          "Встретим в аэропорту Гуанчжоу, разместим в отеле и поможем с организацией."
        ]
      },
      step2: {
        title:
          "Находим, ведем переговоры, информируем, покупаем и отправляем",
        text: [
          "Ищете производителей, поставщиков или товары в Китае? Найти товар можно на китайских сайтах или в каталогах на нашем сайте.",
          "По вашему запросу напрямую связываемся с фабриками и поставщиками и получаем исчерпывающую информацию.",
          "После вашего подтверждения покупаем товар от вашего имени и доставляем на наш склад."
        ]
      },
      step3: {
        title: "Доставка товара на наш склад",
        text: [
          "После покупки поставщики доставляют товар на наш склад. Стоимость внутренней доставки оговаривается с поставщиком.",
          "Мы стараемся обеспечить бесплатную доставку на склад, но если поставщик берет плату, мы сообщим заранее."
        ]
      },
      step4: {
        title: "Проверка товара",
        text: [
          "Контролируем качество и количество товара на складах.",
          "При необходимости предоставляем фото/видео-отчеты. Для полной инспекции назначается отдельный инспектор (платно).",
          "Возможны инспекции фабрик и поставщиков."
        ]
      },
      step5: {
        title: "Упаковка товара",
        text: [
          "Если товар упакован на фабрике и отправляется напрямую, по запросу проверим упаковку (платно).",
          "Если товар поступает на наш склад, контролируем правильную упаковку и группировку согласно вашему заказу."
        ],
        list: [
          "Пакет + скотч",
          "Пластиковые уголки + пакет + скотч",
          "Картонные уголки + пакет + скотч",
          "Деревянная упаковка: стретч + деревянный каркас + пакет + скотч",
          "Деревянная упаковка на паллете",
          "Деревянный ящик"
        ]
      },
      step6: {
        title: "Доставка товара вам",
        text: [
          "Принимаем к отправке, если стоимость доставки согласована заранее.",
          "Для расчета нужны тип товара, вес после упаковки, объем (CBM), стоимость, способ отправки, инвойс и упаковочный лист.",
          "Самовывоз со склада или внутренняя доставка до адреса (за доп. плату)."
        ]
      },
      step7: {
        title: "О сборных грузах",
        text: [
          "Авиаперевозки обычно от 3–5 кг; автодорога/железная дорога/море — от 0.5–1 м³.",
          "Перевозим и мелкоштучные товары — пришлите детали, обсудим маршрут."
        ]
      },
      step8: {
        title: "Наша комиссия",
        text: [
          "3%–10% в зависимости от объема заказа и объема работ.",
          "Комиссия включает переговоры с поставщиками, проверку товара, хранение и организацию отправки."
        ]
      },
      step9: {
        title: "Покупка на китайских онлайн-площадках",
        text: [
          "Покупаем, проверяем и доставляем заказы с 1688.com, taobao.com, tmall.com, pinduoduo.com, poizon.com и др."
        ]
      }
    },

    // Categories
    categories: {
      main_title: "В каких категориях мы работаем?",
      group1: {
        title: "Общие товары",
        items: [
          "Кейсы, корпуса, упаковка",
          "Автоаксессуары",
          "Мотоциклы, велосипеды, самокаты (электро и обычные)",
          "ATV (квадроциклы, картинг — электро/бензин)",
          "Тяжелая техника (грузовики и запчасти)",
          "Бытовая техника и товары для дома",
          "Мебель (и фурнитура)",
          "Все для сада и отдыха (гамаки, зонты, ротанг и др.)",
          "Двери и комплектующие",
          "Строительные материалы",
          "Аксессуары (телефонные и прочие гаджеты)",
          "АРТ (декор, произведения искусства)",
          "Спортивные товары",
          "Игрушки",
          "Люстры и другие светильники",
          "Благоустройство (парки, дворы, улицы, дороги)",
          "Ремонт дорог",
          "Косметическая продукция",
          "Электронные сигареты (VAPE)",
          "Автодома (прицепы-дома)",
          "Капсульные дома"
        ]
      },
      group2: {
        title: "Оборудование и инструмент",
        items: [
          "Оборудование",
          "Шлагбаумы, барьеры",
          "Инструмент",
          "Спецодежда",
          "Посуда",
          "Эко-контейнеры (одноразовая посуда)",
          "Детские площадки (уличные и крытые)",
          "Товары для летнего отдыха (море, пляж)",
          "Садовый инструмент",
          "Сантехника",
          "Светотехника",
          "Спортивное оборудование",
          "Текстиль (одежда, постельное и др.)",
          "Туристические товары",
          "Вентиляторы, кондиционеры (запчасти)",
          "Вентиляционное оборудование",
          "Товары и оборудование для бассейнов",
          "Все для домашних животных",
          "Напитки и продукты (чипсы, соусы, консервы и т. п.)",
          "Банковское оборудование (счетчики, детекторы и др.)",
          "LED-освещение (LED-панели, электронные дисплеи и т. п.)"
        ]
      }
    },

    // Advantages
    advantages: {
      main_title: "Наши преимущества.",
      list: [
        {
          title: "Найдем любой товар",
          text:
            "Находим проверенных поставщиков и производителей в Китае. Договоримся о выгодной цене."
        },
        {
          title: "Склады в Гуанчжоу, Иу, Хоргосе",
          text:
            "Основной офис/склад — в Гуанчжоу, также склады в Иу и Хоргосе. Можете отправлять товары на эти адреса — мы доставим вам."
        },
        {
          title: "Низкая комиссия",
          text:
            "5–10% на покупку с онлайн-площадок и 3–5% — при прямой закупке у вашего поставщика. Платежи и выкуп — в тот же день."
        },
        {
          title: "Быстрая доставка",
          text:
            "Груз не залеживается — регулярные отправки каждую неделю."
        },
        {
          title: "Конкурентные цены на доставку",
          text:
            "Справедливые тарифы для одежды, электроники, товаров для дома и др. Особые условия для постоянных клиентов."
        },
        {
          title: "Доставка CARGO",
          text:
            "Оказываем CARGO-услуги для физлиц. Для юрлиц — по безналу с таможенным оформлением."
        }
      ]
    },

    // Order form
    order_form: {
      title: "Форма заказа",
      description:
        "Пожалуйста, заполните все поля — мы свяжемся с вами и обсудим доставку из Китая.",
      name: "Имя",
      name_placeholder: "Введите ваше имя",
      name_error: "Пожалуйста, укажите имя.",
      email: "Email",
      email_placeholder: "Введите ваш email",
      email_error: "Пожалуйста, укажите корректный email.",
      telephone: "Телефон",
      telephone_placeholder: "Введите ваш номер телефона",
      telephone_error: "Пожалуйста, укажите телефон.",
      request_description: "Описание запроса",
      text_placeholder: "Опишите запрос или детали товара...",
      send: "Отправить"
    },

    // Product Interest Section
    pis: {
      title: "В этом разделе выберите интересующие вас товары с",
      subtitle: "китайских онлайн-площадок.",
      openForm: "Открыть форму заказа",
      orderBtn: "Форма заказа",
      note: "«Выберите товар, напишите нам — решим.»"
    },

    mplaces_title: "Выберите маркетплейс",
    mplaces_note: "Выберите любой и нажмите Website.",

    // Contact
    contact: {
      headerTitle: "Свяжитесь с нами",
      headerDesc:
        "Готовы начать закупки в Китае? Давайте обсудим, как мы можем помочь вашему бизнесу расти.",
      heroTitle: "Ваш мост в Китай",
      heroText:
        "Мы соединяем международный бизнес с надежными китайскими производителями и поставщиками.",
      emailLabel: "Основной email",
      phoneLabel: "Прямой номер",
      locationLabel: "Штаб-квартира",
      locationValue: "Гуанчжоу, Китай",
      hoursLabel: "Часы работы",
      hoursValue1: "Пн–Пт: 9:00–18:00",
      hoursValue2: "Сб: 10:00–16:00",
      fastResponseTitle: "Быстрый ответ",
      fastResponseText:
        "Обычно отвечаем в течение 2–4 часов в рабочие дни.",
      secureTitle: "Конфиденциальность",
      secureText:
        "Ваша информация и запросы полностью конфиденциальны.",
      formTitle: "Отправьте нам сообщение",
      formDesc:
        "Заполните форму ниже — мы ответим в ближайшее время.",
      name: "Полное имя",
      email: "Адрес электронной почты",
      subject: "Тема",
      message: "Сообщение",
      optSourcing: "Поиск товара",
      optShipping: "Доставка и логистика",
      optOther: "Другое",
      placeholderName: "Введите ваше полное имя",
      placeholderEmail: "Введите ваш email",
      placeholderMessage:
        "Расскажите о требованиях, деталях товара или иных задачах...",
      sendBtn: "Отправить сообщение",
      formNote:
        "* Обязательные поля. Мы уважаем вашу конфиденциальность и не передаем данные третьим лицам.",
      successMsg: "Сообщение успешно отправлено.",
    failMsg: "Не удалось отправить сообщение.",
    requiredError: "Пожалуйста, заполните все обязательные поля.",
    errorInvalidEmail: "Введите корректный адрес электронной почты.",
    networkError: "Ошибка сети или сервера."
    }
  }
      },
    },
    lng: initialLng, // default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

  i18n.on("languageChanged", (lng) => {
  if (SUPPORTED.has(lng)) saveLang(lng);
});

export default i18n;
