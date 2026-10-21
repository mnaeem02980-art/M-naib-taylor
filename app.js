/**
 * M. NAIB MASTER BESPOKE TAILORS - KOHAT CITY, KPK
 * Complete Interactive Application Logic, Bilingual Engine (EN / اردو), 
 * Modal Dispatcher & Live Toasts
 * Contact / WhatsApp: 0336-988499
 */

// Application State
const orderState = {
  garment: 'Shalwar Kameez',
  basePrice: 1500,
  mode: 'standard', // 'standard' or 'custom'
  standardSize: 'Medium (M)',
  speed: 'standard', // 'standard' or 'express'
  expressFee: 0,
  measurements: {
    length: '40',
    chest: '22',
    shoulder: '18',
    sleeve: '24',
    collar: '15.5',
    shalwar: '39',
    poncha: '8.5',
    daman: '23'
  },
  standardPresets: {
    'Small (S)': { length: '38', chest: '20', shoulder: '17', sleeve: '23', collar: '14.5', shalwar: '38', poncha: '8', daman: '21' },
    'Medium (M)': { length: '40', chest: '22', shoulder: '18', sleeve: '24', collar: '15.5', shalwar: '39', poncha: '8.5', daman: '23' },
    'Large (L)': { length: '42', chest: '24', shoulder: '19', sleeve: '25', collar: '16.5', shalwar: '40.5', poncha: '9', daman: '24.5' },
    'Extra Large (XL)': { length: '44', chest: '26', shoulder: '20', sleeve: '26', collar: '17', shalwar: '42', poncha: '9.5', daman: '26' },
    'XXL': { length: '46', chest: '28', shoulder: '21', sleeve: '26.5', collar: '17.5', shalwar: '43', poncha: '10', daman: '27.5' }
  },
  collarStyle: 'Sherwani Ban (شیروانی بین)',
  cuffStyle: 'Button Cuff (کف بٹن والا)',
  damanStyle: 'Choras / Square Daman (چورس دامن)',
  pockets: 'Front Pocket + 2 Side Pockets + Mobile Slot',
  customerName: '',
  customerPhone: '',
  customerNotes: ''
};

// Target Tailor WhatsApp & Phone
const TAILOR_PHONE_RAW = '0336988499';
const TAILOR_WHATSAPP = '92336988499';

// ==========================================================================
// BILINGUAL TRANSLATION DATA (ENGLISH & URDU)
// ==========================================================================
const i18nData = {
  en: {
    // Top Bar & Navbar
    theme_bar_label: 'Website Color:',
    theme_btn_title: 'Change Color',
    top_location: 'Kohat City, Khyber Pakhtunkhwa (KPK), Pakistan',
    top_schedule: 'Sat – Thu: 9:00 AM – 9:00 PM | Fri: 3:00 PM – 9:00 PM',
    top_phone: '0336-988499',
    top_whatsapp: 'WhatsApp Chat',
    brand_sub: 'MASTER BESPOKE TAILORS &bull; KOHAT',
    nav_home: 'Home',
    nav_services: 'Services',
    nav_order: 'Naap &amp; Order',
    nav_rates: 'Rate List',
    nav_about: 'Our Craft',
    nav_contact: 'Contact &amp; Shop',
    nav_book: 'Book Order',

    // Hero Section
    hero_tag: 'MASTER TAILOR SHOP &bull; KOHAT CITY',
    hero_title: 'Expert Tailoring &amp; <span class="gold-gradient-text">Guaranteed Perfect Fit</span>.',
    hero_subtext: 'Led by <strong>Master M. Naib</strong> in Kohat City, KPK. Expert cutting and stitching for traditional Shalwar Kameez, Waistcoats, and 2-Piece English Suits. 100% comfortable, flawless fitting guaranteed.',
    hero_perk_1: '100% Guaranteed Fit',
    hero_perk_2: 'Imported Anti-Bubble Bukram',
    hero_perk_3: 'Strict Timely Delivery',
    hero_perk_4: '24-48h Urgent Express Service',
    hero_btn_order: 'Send Measurements (ناپ)',
    hero_btn_call: 'Call 0336-988499',
    metric_fit: 'Fit Guarantee',
    metric_shop: 'City Center Shop',
    metric_turnaround: 'Urgent Turnaround',
    floating_tag_name: 'Master M. Naib',
    floating_tag_role: 'Master Craftsman &bull; Kohat City',

    // Services
    services_label: 'SPECIALIZED SERVICES',
    services_heading: 'Master Tailoring Services',
    services_desc: 'From executive daily wear Shalwar Kameez to regal wedding Prince Coats, Master M. Naib delivers perfection in every stitch.',
    srv_sk_title: 'Traditional Shalwar Kameez',
    srv_sk_badge: 'Signature Craft',
    srv_sk_desc: 'Authentic Pakistani & KPK cuts. Single or double-needle stitching, Sherwani Ban collar, French collar, shirt cuffs, round or square daman, and concealed plackets.',
    srv_waskat_title: 'Executive Waistcoats (Waskat)',
    srv_waskat_badge: 'Executive Class',
    srv_waskat_desc: 'Tailored waistcoats designed to command presence. Custom canvas interlining, hand-stitched edging, antique brass or metallic buttons, and silky inner lining.',
    srv_suit_title: 'Bespoke 2-Piece Suits',
    srv_suit_badge: 'Master Tailored',
    srv_suit_desc: 'Precision lapels, padded structured chest canvas, hand-basted shoulder pads, and tailored slim or regular trousers. Ideal for weddings and conferences.',
    srv_prince_title: 'Royal Prince Coats',
    srv_prince_badge: 'Royal Heritage',
    srv_prince_desc: 'Regal high-collar Prince Coats cut with royal symmetry. Intricate pocket accents, velvet or metallic trim, and sculpted posture fitting for grooms.',
    srv_kurta_title: 'Festive Kurta Trouser',
    srv_kurta_badge: 'Modern Cut',
    srv_kurta_desc: 'Comfortable relaxed fits, soft interlining collars, subtle embroidery or thread highlights, and tailored straight-cut trousers for Friday &amp; Eid wear.',
    srv_urgent_title: 'Urgent Express Stitching (24-48h)',
    srv_urgent_badge: 'Fast Track',
    srv_urgent_desc: 'Emergency business trip or sudden wedding? Master M. Naib fast-tracks your cutting and sewing without sacrificing an ounce of finishing.',
    btn_order_now: 'Order Now &rarr;',

    // Order Page / Workbench
    page_order_heading: 'Online Measurement &amp; Order Form (ناپ فارم)',
    page_order_tagline: 'Select standard sizes or enter custom inches. Sends directly to <strong>Master M. Naib on WhatsApp (0336-988499)</strong>.',
    tab_standard: 'Standard Sizes (S, M, L, XL, XXL)',
    tab_custom: 'Custom Inches Naap (کسٹم ناپ)',
    step1_title: '1. Select Garment Type (کپڑے کی قسم)',
    step2_standard_title: '2. Choose Your Standard Size',
    step2_custom_title: '2. Enter Measurements in Inches (انچ درج کریں)',
    step3_title: '3. Custom Styling Preferences (ڈیزائننگ)',
    step4_title: '4. Stitching Speed (ڈلیوری کی رفتار)',
    step5_title: '5. Your Contact Information (رابطہ تفصیلات)',
    lbl_collar: 'Collar / Ban Style',
    lbl_cuffs: 'Sleeve / Cuff Style',
    lbl_daman: 'Daman Shape',
    lbl_pockets: 'Pockets Configuration',
    speed_std_title: 'Standard Delivery',
    speed_std_time: '3 - 5 Working Days',
    speed_std_fee: 'Regular Rate',
    speed_urg_title: 'Urgent Express Delivery',
    speed_urg_time: '24 - 48 Hours Priority',
    speed_urg_fee: '+ Rs. 500 Express Surcharge',
    ph_name: 'Your Full Name (e.g. Tariq Khan)',
    ph_phone: 'WhatsApp / Phone (e.g. 0333-1234567)',
    ph_notes: 'Special instructions (e.g. tight fit, loose armhole, fabric brand)...',

    // Live Receipt
    rcpt_heading: 'LIVE ORDER SUMMARY',
    rcpt_sub: 'Direct Kohat Atelier Dispatch',
    rcpt_lbl_garment: 'Garment:',
    rcpt_lbl_fit: 'Fitting Mode:',
    rcpt_lbl_collar: 'Collar / Ban:',
    rcpt_lbl_cuffs: 'Cuffs:',
    rcpt_lbl_daman: 'Daman:',
    rcpt_lbl_time: 'Delivery Time:',
    rcpt_lbl_base: 'Stitching Base Fee:',
    rcpt_lbl_express: 'Express Surcharge:',
    rcpt_lbl_total: 'Estimated Total:',
    btn_dispatch_wa: 'Send Order to WhatsApp (0336-988499)',
    rcpt_call_pref: 'Prefer calling directly?',
    rcpt_guarantee_title: 'Master M. Naib Guarantee',
    rcpt_guarantee_text: 'Free alteration adjustment if fitting isn\'t 100% to your satisfaction.',

    // Rates Page
    page_rates_heading: 'Stitching Rate List &amp; Delivery Times',
    page_rates_tagline: 'Transparent craftsmanship fees with zero hidden charges. Precision cutting and premium imported Bukram fusing in Kohat City, KPK.',
    th_garment: 'GARMENT &amp; SERVICE',
    th_specs: 'SPECIFICATIONS &amp; CRAFT',
    th_rate: 'STITCHING RATE',
    th_time: 'DELIVERY TURNAROUND',
    th_action: 'SELECT &amp; ORDER',
    rates_disclaimer_text: 'Fabric is provided by client. All rates include imported anti-bubble Bukram, high-tensile threads, buttons, inner pocket linings, and steam pressing. Express urgent completion (24-48h) is available for +Rs. 500.',

    // About Page & Craft
    page_about_heading: 'About Master M. Naib &amp; Atelier',
    page_about_tagline: 'Dedicated master bespoke tailoring in Kohat City, KPK. Where traditional heritage meets modern surgical precision.',
    craft_section_label: 'BESPOKE EXCELLENCE',
    craft_section_heading: 'The Art of Master M. Naib',
    craft_intro: 'With over a decade of hands-on atelier mastery in Kohat City, Master M. Naib has built a sterling reputation among executives, scholars, and wedding parties. We reject generic mass-stitching in favor of individual anatomical draping.',
    craft_feat_1_title: 'Anatomical Pattern Cutting',
    craft_feat_1_desc: 'Every garment is mapped to the client\'s posture, shoulder slope, and chest fall. No bulk, no pulling.',
    craft_feat_2_title: 'Thermo-Fused Anti-Bubble Bukram',
    craft_feat_2_desc: 'We strictly import high-grade interlinings to ensure collars and cuffs stay razor-sharp wash after wash.',
    craft_feat_3_title: 'Reinforced Pocket &amp; Button Anchor',
    craft_feat_3_desc: 'Double-reinforced pocket corners and hand-stitched anchor knots that never tear under daily smartphone weight.',
    counter_feature_title: 'Master Cutting &amp; Reception Counter &bull; Kohat City Shop',

    // Standards / Why Us
    standards_label: 'QUALITY STANDARDS',
    standards_heading: 'Why Kohat Chooses Master M. Naib',
    standards_desc: 'We maintain rigorous tailoring standards that elevate your wardrobe beyond standard neighborhood shops.',
    std_1_title: 'Master Hand Cutting',
    std_1_desc: 'Every cloth is marked by tailor chalk and cut individually according to each client\'s unique shoulders, chest curvature, and height.',
    std_2_title: 'Anti-Bubble Thermo-Fused Bukram',
    std_2_desc: 'Say goodbye to wavy, wrinkled collars after one wash. We use authentic imported thermo-fused interlinings that maintain crisp structure indefinitely.',
    std_3_title: 'Guaranteed Free Alterations',
    std_3_desc: 'We stand behind our work. If you feel any stitch or fit needs slight fine-tuning after your trial, we adjust it promptly with no extra charge.',
    std_4_title: 'Commitment to Delivery Dates',
    std_4_desc: 'No endless excuses or delayed promises. When Master M. Naib gives you an Eid, wedding, or delivery date, your suit is ready on time.',

    // Testimonials
    testimonials_label: 'CLIENT REVIEWS',
    testimonials_heading: 'Trusted Across Kohat &amp; KPK',
    review_1_text: '"Master M. Naib stitched 4 Shalwar Kameez suits and a waistcoat for my brother\'s wedding. The collar finish and shoulder fit are genuinely top tier. Best tailor in Kohat City."',
    review_1_name: 'Tariq Khan Afridi',
    review_1_loc: 'Kohat Cantt',
    review_2_text: '"I sent my measurements through WhatsApp as I was traveling from Peshawar. The suit was ready exactly on the date promised and fitted like a glove without even a first trial."',
    review_2_name: 'Muhammad Saeed',
    review_2_loc: 'KDA Kohat',
    review_3_text: '"Clean stitching, no unnecessary delays, and very courteous master. The Bukram quality is especially impressive; washed my suits multiple times and collars are still crisp."',
    review_3_name: 'Inamullah Khattak',
    review_3_loc: 'Bannu Road, Kohat',

    // Contact Page & Details
    contact_label: 'VISIT OUR SHOP',
    contact_heading: 'Contact &amp; Shop Location',
    contact_desc: 'Visit Master M. Naib\'s workshop in Kohat City, KPK or reach out directly for appointments, fabric advice, and inquiries.',
    page_contact_heading: 'Visit Our Shop in Kohat City',
    page_contact_tagline: 'Have a special cut in mind or want your measurements taken in person? Visit Master M. Naib in Kohat City or message us on WhatsApp.',
    contact_loc_title: 'Shop Location',
    contact_loc_desc: 'Kohat City, Khyber Pakhtunkhwa (KPK)',
    contact_loc_sub: 'Easily accessible central location in Kohat',
    contact_owner_role: 'Master Craftsman &amp; Owner',
    contact_owner_sub: 'Chief Cutter &amp; Bespoke Consultant',
    contact_phone_title: 'Direct Phone / Call',
    contact_phone_sub: 'Available for direct calls &amp; urgent orders',
    contact_wa_title: 'WhatsApp Instant Chat',
    contact_wa_sub: 'Send photos of cloth, designs &amp; sizes anytime',
    contact_hours_title: 'Working Hours',
    contact_hours_desc: 'Sat – Thu: 9:00 AM – 9:00 PM | Fri: 3:00 PM – 9:00 PM',
    contact_hours_time: 'Saturday – Thursday: 9:00 AM – 9:00 PM',
    contact_hours_friday: 'Friday: 3:00 PM – 9:00 PM (After Juma)',
    inquiry_form_title: 'Send a Direct Message / Inquire',
    inquiry_form_sub: 'Master M. Naib will receive your inquiry directly on WhatsApp or phone.',
    inq_lbl_name: 'Your Name *',
    inq_ph_name: 'e.g. Tariq Mehmood',
    inq_lbl_phone: 'Your Mobile / WhatsApp Number *',
    inq_ph_phone: '03XXXXXXXXX',
    inq_lbl_garment: 'Garment Type Needed',
    inq_lbl_msg: 'Your Message / Fabric Details',
    inq_ph_msg: 'Tell us about your fabric, event date or specific requirements...',
    inq_btn_submit: 'Send Inquiry via WhatsApp',

    // Footer
    footer_desc: 'Excellence in bespoke men\'s tailoring, traditional Shalwar Kameez, Waistcoats, and Suits. Serving gentlemen across Kohat City and Khyber Pakhtunkhwa with unmatched dedication.',
    footer_quick: 'Quick Navigation',
    footer_services: 'Specialized Services',
    footer_contact_hdr: 'Direct Contact',
    footer_copy: '&copy; 2026 M. Naib Tailors, Kohat City, KPK. All Rights Reserved. Bespoke Craftsmanship.',
    footer_status: 'Official Business Profile &bull; Contact: 0336988499',
    footer_urdu_tag: 'ماسٹر نائب ٹیلرز • کوہاٹ شہر، خیبر پختونخوا'
  },

  ur: {
    // Top Bar & Navbar
    theme_bar_label: 'ویب سائٹ کلر:',
    theme_btn_title: 'رنگ تبدیل کریں',
    top_location: 'کوہاٹ سٹی، خیبر پختونخوا (KPK)، پاکستان',
    top_schedule: 'ہفتہ تا جمعرات: صبح 9 تا رات 9 | جمعہ: سہ پہر 3 تا رات 9',
    top_phone: '0336-988499',
    top_whatsapp: 'واٹس ایپ رابطہ',
    brand_sub: 'ماسٹر ایم نائب ٹیلرز &bull; کوہاٹ سٹی',
    nav_home: 'ہوم',
    nav_services: 'خدمات',
    nav_order: 'ناپ اور آرڈر',
    nav_rates: 'ریٹ لسٹ',
    nav_about: 'ہمارا تعارف',
    nav_contact: 'رابطہ اور دکان',
    nav_book: 'آرڈر بک کریں',

    // Hero Section
    hero_tag: 'ماسٹر ٹیلر شاپ &bull; کوہاٹ سٹی',
    hero_title: 'بہترین ماسٹر ٹیلرنگ اور <span class="gold-gradient-text">گارنٹیڈ پرفیکٹ فٹنگ</span>۔',
    hero_subtext: '<strong>ماسٹر ایم نائب</strong> کی زیر نگرانی کوہاٹ سٹی میں روایتی شلوار قمیض، واسکٹ اور سوٹس کی ماسٹر کٹنگ اور معیاری سلائی۔ 100 فیصد پرفیکٹ اور آرام دہ فٹنگ کی مکمل ضمانت۔',
    hero_perk_1: '100٪ پرفیکٹ فٹنگ گارنٹی',
    hero_perk_2: 'امپورٹڈ اینٹی ببل بکرم',
    hero_perk_3: 'وقت پر مکمل ڈلیوری',
    hero_perk_4: '24 تا 48 گھنٹے ارجنٹ سلائی',
    hero_btn_order: 'آن لائن ناپ بھیجیں (ناپ)',
    hero_btn_call: 'کال کریں: 0336-988499',
    metric_fit: 'فٹنگ گارنٹی',
    metric_shop: 'کوہاٹ سٹی شاپ',
    metric_turnaround: 'ارجنٹ سلائی سہولت',
    floating_tag_name: 'ماسٹر ایم نائب',
    floating_tag_role: 'ماسٹر کاریگر &bull; کوہاٹ سٹی',

    // Services
    services_label: 'خصوصی خدمات',
    services_heading: 'ماسٹر سلائی کی خدمات',
    services_desc: 'شلوار قمیض سے لے کر شاہی واسکٹ اور پرنس کوٹ تک، ماسٹر ایم نائب کے ہاتھوں سے ہر ٹانکے میں بے مثل نفاست۔',
    srv_sk_title: 'روایتی شلوار قمیض',
    srv_sk_badge: 'خصوصی دستکاری',
    srv_sk_desc: 'خالص پختونخوا اور پاکستانی کٹنگ۔ سنگل یا ڈبل سلائی، شیروانی بین، فرنچ کالر، کف بازو، چورس یا گول دامن مع محفوظ اندرونی جیب۔',
    srv_waskat_title: 'ایگزیکٹو واسکٹ (واسکٹ)',
    srv_waskat_badge: 'وی آئی پی کلاس',
    srv_waskat_desc: 'شاندار پریسنگ، کینواس انٹرلائننگ، ہینڈ فنشنگ، میٹل یا براس بٹن اور اعلیٰ ریشمی اندرونی استر کے ساتھ تیار کردہ واسکٹ۔',
    srv_suit_title: 'بیسپوک ٹو پیس سوٹ',
    srv_suit_badge: 'ماسٹر ٹیلرڈ',
    srv_suit_desc: 'پرفیکٹ لیپل، شولڈر پیڈنگ اور پینٹ کے عمدہ فال کے ساتھ شادی بیاہ، کانفرنسز اور تقاریب کے لیے نفیس سوٹ۔',
    srv_prince_title: 'شاہی پرنس کوٹ',
    srv_prince_badge: 'شاہی وراثت',
    srv_prince_desc: 'دولہا اور خاص مواقع کے لیے اونچے کالر اور شاہی فال کے ساتھ تراشا گیا خوبصورت اور باوقار پرنس کوٹ۔',
    srv_kurta_title: 'عید و فیسٹیو کرتا پاجامہ',
    srv_kurta_badge: 'جدید کٹ',
    srv_kurta_desc: 'جمعہ، عید اور تہواروں کے لیے آرام دہ کرتا اور سیدھا پاجامہ مع ہلکی ڈیزائننگ اور نرم کالر۔',
    srv_urgent_title: '24 تا 48 گھنٹے ارجنٹ سلائی',
    srv_urgent_badge: 'فاسٹ ٹریک',
    srv_urgent_desc: 'ضروری سفر یا اچانک شادی کی تقریب؟ ماسٹر ایم نائب کا ہنگامی یونٹ معیار پر سمجھوتہ کیے بغیر بروقت ڈلیوری فراہم کرتا ہے۔',
    btn_order_now: 'ابھی آرڈر کریں &larr;',

    // Order Page / Workbench
    page_order_heading: 'آن لائن ناپ اور سلائی آرڈر فارم',
    page_order_tagline: 'معیاری سائز منتخب کریں یا اپنے انچ درج کریں۔ آپ کا آرڈر براہ راست <strong>ماسٹر ایم نائب کے واٹس ایپ (0336-988499)</strong> پر پہنچے گا۔',
    tab_standard: 'معیاری سائزز (S, M, L, XL, XXL)',
    tab_custom: 'کسٹم ناپ (انچ میں لکھیں)',
    step1_title: '1. لباس کی قسم منتخب کریں (کپڑے کی نوعیت)',
    step2_standard_title: '2. اپنا معیاری سائز منتخب کریں',
    step2_custom_title: '2. اپنی پیمائش انچ میں درج کریں (ناپ)',
    step3_title: '3. ڈیزائن اور سلائی کی تفصیلات (اسٹائل)',
    step4_title: '4. سلائی اور ڈلیوری کی رفتار',
    step5_title: '5. اپنے نام اور رابطے کی تفصیلات',
    lbl_collar: 'کالر یا بین کا اسٹائل',
    lbl_cuffs: 'کف یا آستین کا اسٹائل',
    lbl_daman: 'دامن کی ساخت (گول / چورس)',
    lbl_pockets: 'جیبوں کی ترتیب اور موبائل جیب',
    speed_std_title: 'عام ڈلیوری',
    speed_std_time: '3 تا 5 کام کے دن',
    speed_std_fee: 'معمول کا ریٹ',
    speed_urg_title: 'ارجنٹ ایکسپریس ڈلیوری',
    speed_urg_time: '24 تا 48 گھنٹے ترجیحی',
    speed_urg_fee: '+ 500 روپے ارجنٹ فیس',
    ph_name: 'آپ کا مکمل نام (مثلاً طارق خان)',
    ph_phone: 'واٹس ایپ یا فون نمبر (مثلاً 0333-1234567)',
    ph_notes: 'کوئی خاص ہدایت (مثلاً لوز فٹنگ، اضافی جیب، کپڑے کا نام وغیرہ)...',

    // Live Receipt
    rcpt_heading: 'آرڈر کا لائیو خلاصہ',
    rcpt_sub: 'براہ راست کوہاٹ دکان ڈسپیچ',
    rcpt_lbl_garment: 'لباس:',
    rcpt_lbl_fit: 'ناپ کا طریقہ:',
    rcpt_lbl_collar: 'کالر / بین:',
    rcpt_lbl_cuffs: 'کف بازو:',
    rcpt_lbl_daman: 'دامن:',
    rcpt_lbl_time: 'ڈلیوری وقت:',
    rcpt_lbl_base: 'بنیادی سلائی فیس:',
    rcpt_lbl_express: 'ارجنٹ اضافی فیس:',
    rcpt_lbl_total: 'کل تخمینہ رقم:',
    btn_dispatch_wa: 'واٹس ایپ پر آرڈر بھیجیں (0336-988499)',
    rcpt_call_pref: 'براہ راست فون پر بات کرنا چاہتے ہیں؟',
    rcpt_guarantee_title: 'ماسٹر ایم نائب کی ضمانت',
    rcpt_guarantee_text: 'اگر فٹنگ میں کوئی بھی کمی محسوس ہو تو مفت درستگی کی جائے گی۔',

    // Rates Page
    page_rates_heading: 'سلائی ریٹ لسٹ اور ڈلیوری اوقات',
    page_rates_tagline: 'بغیر کسی پوشیدہ چارجز کے واضح ریٹ لسٹ۔ بہترین کٹنگ، معیاری دھاگہ اور امپورٹڈ بکرم، کوہاٹ سٹی۔',
    th_garment: 'لباس اور سروس',
    th_specs: 'سلائی کی خصوصیات اور تفصیل',
    th_rate: 'سلائی فیس',
    th_time: 'ڈلیوری وقت',
    th_action: 'آرڈر منتخب کریں',
    rates_disclaimer_text: 'کپڑا کسٹمر کا اپنا ہوگا۔ تمام ریٹس میں امپورٹڈ بکرم، مضبوط دھاگہ، بٹن اور اسٹیم پریسنگ شامل ہے۔ ارجنٹ 24 تا 48 گھنٹے کی ڈلیوری کے لیے 500 روپے اضافی فیس ہے۔',

    // About Page & Craft
    page_about_heading: 'ماسٹر ایم نائب کا تعارف اور کارخانہ',
    page_about_tagline: 'کوہاٹ سٹی میں نفیس سلائی کا معتبر نام۔ روایتی مہارت اور جدید فن کا حسین امتزاج۔',
    craft_section_label: 'اعلیٰ پائے کا ہنر',
    craft_section_heading: 'ماسٹر ایم نائب کا طریقہ کار',
    craft_intro: 'کوہاٹ سٹی میں دس سال سے زائد عرصے سے ماسٹر ایم نائب کا نام نفیس اور بے داغ سلائی کی علامت ہے۔ ہم روایتی عام سلائی کے بجائے ہر صارف کے جسمانی تناسب کے مطابق پیٹرن تیار کرتے ہیں۔',
    craft_feat_1_title: 'جسمانی ساخت کے عین مطابق کٹنگ',
    craft_feat_1_desc: 'ہر سوٹ گاہک کے کندھے کے جھکاؤ اور چھاتی کے فال کے مطابق کاٹا جاتا ہے۔ نہ کپڑا کھنچتا ہے نہ پھولتا ہے۔',
    craft_feat_2_title: 'تھرمو فیوزڈ اینٹی ببل بکرم',
    craft_feat_2_desc: 'ہم صرف امپورٹڈ گریڈ بکرم استعمال کرتے ہیں تاکہ دھلائی کے بعد بھی کالر اور بین میں ببل نہ بنے۔',
    craft_feat_3_title: 'مضبوط جیبیں اور موبائل سلاٹ',
    craft_feat_3_desc: 'موبائل کے وزن سے جیبیں پھٹنے سے بچانے کے لیے کناروں پر ڈبل لاک سلائی اور مضبوط ٹانکے لگائے جاتے ہیں۔',
    counter_feature_title: 'ماسٹر کٹنگ اور ریسیپشن کاؤنٹر &bull; کوہاٹ سٹی شاپ',

    // Standards / Why Us
    standards_label: 'معیار کی ضمانت',
    standards_heading: 'کوہاٹ کے لوگ ماسٹر ایم نائب کو کیوں چنتے ہیں؟',
    standards_desc: 'ہم سلائی کے وہ اعلیٰ ترین معیارات برقرار رکھتے ہیں جو آپ کے لباس کو عام درزیوں کے کام سے کہیں ممتاز بناتے ہیں۔',
    std_1_title: 'ماسٹر ہینڈ کٹنگ',
    std_1_desc: 'ہر کپڑے پر درزی چاک سے نشان لگا کر گاہک کے کندھے، سینے اور قد کی انفرادی ساخت کے عین مطابق کٹائی کی جاتی ہے۔',
    std_2_title: 'اینٹی ببل تھرمو فیوزڈ بکرم',
    std_2_desc: 'پہلی ہی دھلائی کے بعد کالر کے سکڑنے یا ببل بننے کا خاتمہ۔ ہم صرف امپورٹڈ اعلیٰ گریڈ بکرم استعمال کرتے ہیں۔',
    std_3_title: 'مفت آلٹریشن و درستگی گارنٹی',
    std_3_desc: 'ہم اپنے کام پر مکمل اعتماد رکھتے ہیں۔ اگر ٹرائل کے بعد فٹنگ میں ذرا سی بھی ترمیم درکار ہو، ہم بلا معاوضہ فوراً درست کرتے ہیں۔',
    std_4_title: 'مقررہ وقت پر فراہمی کا پکا وعدہ',
    std_4_desc: 'نہ لیت و لعل، نہ بہانے۔ جب ماسٹر ایم نائب عید یا شادی کی تاریخ دے دیں تو آپ کا سوٹ اسی وقت تیار ملتا ہے۔',

    // Testimonials
    testimonials_label: 'گاہکوں کی آراء',
    testimonials_heading: 'کوہاٹ اور خیبر پختونخوا کا بھرپور اعتماد',
    review_1_text: '"ماسٹر ایم نائب نے میرے بھائی کی شادی کے لیے 4 شلوار قمیض سوٹ اور ایک واسکٹ سلائی کی۔ کالر اور کندھے کی فٹنگ لاجواب تھی۔ کوہاٹ شہر کا بہترین درزی۔"',
    review_1_name: 'طارق خان آفریدی',
    review_1_loc: 'کوہاٹ کینٹ',
    review_2_text: '"میں نے پشاور سے سفر کرتے ہوئے واٹس ایپ کے ذریعے اپنا ناپ بھیجا تھا۔ وعدے کے مطابق سوٹ مقررہ تاریخ پر تیار ملا اور بغیر ٹرائل کے بالکل پرفیکٹ بیٹھا۔"',
    review_2_name: 'محمد سعید',
    review_2_loc: 'کے ڈی اے کوہاٹ',
    review_3_text: '"صاف ستھری سلائی، بلاوجہ تاخیر نہیں اور نہایت خوش اخلاق ماسٹر۔ بکرم کا معیار بہت شاندار ہے؛ کئی بار کپڑے دھوئے مگر کالر ویسا ہی کڑک ہے۔"',
    review_3_name: 'انعام اللہ خٹک',
    review_3_loc: 'بنوں روڈ، کوہاٹ',

    // Contact Page & Details
    contact_label: 'ہماری دکان پر تشریف لائیں',
    contact_heading: 'رابطہ اور دکان کا پتہ',
    contact_desc: 'کوہاٹ سٹی، خیبر پختونخوا میں ماسٹر ایم نائب کی ورکشاپ پر تشریف لائیں یا کپڑے کے مشورے، وقت اور معلومات کے لیے براہ راست رابطہ کریں۔',
    page_contact_heading: 'کوہاٹ سٹی میں ہماری دکان پر تشریف لائیں',
    page_contact_tagline: 'ذاتی طور پر ناپ دینا چاہتے ہیں یا کپڑا دکھانا چاہتے ہیں؟ کوہاٹ سٹی میں تشریف لائیں یا واٹس ایپ پر رابطہ کریں۔',
    contact_loc_title: 'دکان کا پتہ',
    contact_loc_desc: 'کوہاٹ سٹی، خیبر پختونخوا (KPK)',
    contact_loc_sub: 'کوہاٹ کا مرکزی اور باآسانی قابل رسائی مقام',
    contact_owner_role: 'ماسٹر کاریگر اور اونر',
    contact_owner_sub: 'چیف کٹر اور بیسپوک کنسلٹنٹ',
    contact_phone_title: 'براہ راست فون / کال',
    contact_phone_sub: 'براہ راست کال اور ارجنٹ آرڈرز کے لیے دستیاب',
    contact_wa_title: 'واٹس ایپ انسٹنٹ چیٹ',
    contact_wa_sub: 'کپڑے کی تصاویر، ڈیزائن اور سائز کسی بھی وقت بھیجیں',
    contact_hours_title: 'دکان کے اوقات کار',
    contact_hours_desc: 'ہفتہ تا جمعرات: صبح 9 تا رات 9 | جمعہ: سہ پہر 3 تا رات 9',
    contact_hours_time: 'ہفتہ تا جمعرات: صبح 9:00 تا رات 9:00 بجے',
    contact_hours_friday: 'جمعہ: سہ پہر 3:00 تا رات 9:00 بجے (بعد نماز جمعہ)',
    inquiry_form_title: 'براہ راست پیغام بھیجیں',
    inquiry_form_sub: 'ماسٹر ایم نائب واٹس ایپ یا فون پر فوری جواب دیں گے۔',
    inq_lbl_name: 'آپ کا نام *',
    inq_ph_name: 'مثلاً طارق محمود',
    inq_lbl_phone: 'آپ کا واٹس ایپ یا موبائل نمبر *',
    inq_ph_phone: '03XXXXXXXXX',
    inq_lbl_garment: 'مطلوبہ لباس کی قسم',
    inq_lbl_msg: 'آپ کا پیغام یا کپڑے کی تفصیل',
    inq_ph_msg: 'کپڑے، تقریب کی تاریخ یا کسی خاص پسندیدہ اسٹائل کے بارے میں آگاہ کریں...',
    inq_btn_submit: 'واٹس ایپ کے ذریعے انکوائری بھیجیں',

    // Footer
    footer_desc: 'کوہاٹ سٹی کا معتبر ترین ٹیلرنگ ہاؤس جس کی سربراہی ماسٹر ایم نائب کر رہے ہیں۔ روایتی شلوار قمیض، واسکٹ اور سوٹس میں بے مثل کاریگری اور بروقت فراہمی۔',
    footer_quick: 'اہم لنکس',
    footer_services: 'ہماری خدمات',
    footer_contact_hdr: 'براہ راست رابطہ',
    footer_copy: '&copy; 2026 ماسٹر ایم نائب ٹیلرز، کوہاٹ سٹی KPK۔ جملہ حقوق محفوظ ہیں۔ دستکاری و سلائی۔',
    footer_status: 'آفیشل کاروباری پروفائل &bull; رابطہ: 0336988499',
    footer_urdu_tag: 'ماسٹر نائب ٹیلرز • کوہاٹ شہر، خیبر پختونخوا'
  }
};

// ==========================================================================
// LANGUAGE SWITCHER ENGINE
// ==========================================================================
window.setLanguage = function(lang) {
  if (!i18nData[lang]) lang = 'en';

  // Smooth crossfade animation
  document.body.classList.add('lang-switching');
  setTimeout(() => {
    document.body.classList.remove('lang-switching');
  }, 180);

  // Apply Direction & Class
  document.documentElement.lang = lang;
  if (lang === 'ur') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('urdu-mode');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.remove('urdu-mode');
  }

  // Update switcher buttons UI
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Translate all [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  // Translate input placeholders [data-i18n-ph]
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.placeholder = i18nData[lang][key];
    }
  });

  // Save to localStorage
  localStorage.setItem('site_lang', lang);

  // Update dynamic summary if applicable
  updateOrderSummary();

  // Update Theme Label Language
  if (window.updateThemeUiLanguage) {
    window.updateThemeUiLanguage();
  }

  // Show Toast
  if (lang === 'ur') {
    showToast('زبان اردو میں تبدیل ہو گئی ہے (Urdu Mode)', 'fa-language');
  } else {
    showToast('Language switched to English', 'fa-language');
  }
};

window.initLanguage = function() {
  const savedLang = localStorage.getItem('site_lang') || 'en';
  document.documentElement.lang = savedLang;
  if (savedLang === 'ur') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.body.classList.add('urdu-mode');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    document.body.classList.remove('urdu-mode');
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === savedLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[savedLang] && i18nData[savedLang][key]) {
      el.innerHTML = i18nData[savedLang][key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18nData[savedLang] && i18nData[savedLang][key]) {
      el.placeholder = i18nData[savedLang][key];
    }
  });
};

// ==========================================================================
// 3-COLOR THEME ENGINE (GOLD -> EMERALD -> SAPPHIRE)
// ==========================================================================
const THEMES_CONFIG = [
  {
    id: 'gold',
    nameEn: '1. Royal Gold (شاہی سنہری)',
    nameUr: '۱. شاہی سنہری (Royal Gold)',
    badge: '1 / 3',
    toastEn: 'Color: 1. Royal Gold (1 of 3)',
    toastUr: 'رنگ تبدیل: ۱. شاہی سنہری (۱ / ۳)'
  },
  {
    id: 'emerald',
    nameEn: '2. Emerald Green (زمرد سبز)',
    nameUr: '۲. زمرد سبز (Emerald Green)',
    badge: '2 / 3',
    toastEn: 'Color: 2. Emerald Green (2 of 3)',
    toastUr: 'رنگ تبدیل: ۲. زمرد سبز (۲ / ۳)'
  },
  {
    id: 'sapphire',
    nameEn: '3. Sapphire Blue (شاہی نیلا)',
    nameUr: '۳. شاہی نیلا (Sapphire Blue)',
    badge: '3 / 3',
    toastEn: 'Color: 3. Sapphire Blue (3 of 3)',
    toastUr: 'رنگ تبدیل: ۳. شاہی نیلا (۳ / ۳)'
  }
];

let currentThemeIndex = 0;

window.initTheme = function() {
  const savedTheme = localStorage.getItem('taylor_active_theme') || 'gold';
  const foundIndex = THEMES_CONFIG.findIndex(t => t.id === savedTheme);
  currentThemeIndex = foundIndex >= 0 ? foundIndex : 0;
  applyTheme(THEMES_CONFIG[currentThemeIndex], false);
};

window.cycleTheme = function() {
  currentThemeIndex = (currentThemeIndex + 1) % THEMES_CONFIG.length;
  const newTheme = THEMES_CONFIG[currentThemeIndex];
  applyTheme(newTheme, true);
};

window.setTheme = function(themeId) {
  const foundIndex = THEMES_CONFIG.findIndex(t => t.id === themeId);
  if (foundIndex >= 0) {
    currentThemeIndex = foundIndex;
    applyTheme(THEMES_CONFIG[currentThemeIndex], true);
  }
};

window.updateThemeUiLanguage = function() {
  const currentLang = localStorage.getItem('site_lang') || 'en';
  const isUrdu = currentLang === 'ur';
  const themeObj = THEMES_CONFIG[currentThemeIndex] || THEMES_CONFIG[0];
  const badgeEl = document.getElementById('themeBadgeName');
  if (badgeEl) {
    badgeEl.textContent = isUrdu ? themeObj.nameUr : themeObj.nameEn;
  }
};

function applyTheme(themeObj, notify = true) {
  // 1. Set data-theme on html root
  document.documentElement.setAttribute('data-theme', themeObj.id);
  localStorage.setItem('taylor_active_theme', themeObj.id);

  // 2. Update UI indicators
  const currentLang = localStorage.getItem('site_lang') || 'en';
  const isUrdu = currentLang === 'ur';

  const badgeEl = document.getElementById('themeBadgeName');
  if (badgeEl) {
    badgeEl.textContent = isUrdu ? themeObj.nameUr : themeObj.nameEn;
  }

  const counterEl = document.getElementById('themeCounterTag');
  if (counterEl) {
    counterEl.textContent = themeObj.badge;
  }

  // 3. Update dots active status
  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.remove('active');
  });
  const activeDots = document.querySelectorAll(`.theme-dot.dot-${themeObj.id}`);
  activeDots.forEach(d => d.classList.add('active'));

  // 4. Show toast notification if triggered by click
  if (notify && typeof showToast === 'function') {
    const msg = isUrdu ? themeObj.toastUr : themeObj.toastEn;
    showToast(msg, 'fa-palette');
  }
}

// Immediate initial execution to avoid theme flash
(function() {
  try {
    const saved = localStorage.getItem('taylor_active_theme') || 'gold';
    document.documentElement.setAttribute('data-theme', saved);
  } catch (e) {}
})();

// ==========================================================================
// INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initTheme();
  setupNavbarInteractions();
  setupSmoothScrolling();
  handleUrlParameters();
  updateOrderSummary();
  setupScrollAnimations();
  setupMetricsCounter();
  setupScrollProgress();
  setupBackToTop();
  setupCardSpotlight();
  setupButtonRipples();
});

// Auto-select garment from URL query params (e.g. order.html?garment=Executive%20Waistcoat)
function handleUrlParameters() {
  const urlParams = new URLSearchParams(window.location.search);
  const garmentParam = urlParams.get('garment');
  if (garmentParam) {
    if (garmentParam.includes('Waistcoat')) setGarment('Executive Waistcoat (Waskat)', 2500);
    else if (garmentParam.includes('Suit')) setGarment('Bespoke 2-Piece Suit', 7500);
    else if (garmentParam.includes('Prince')) setGarment('Prince Coat', 4500);
    else if (garmentParam.includes('Kurta')) setGarment('Kurta Trouser', 1300);
    else if (garmentParam.includes('Double')) setGarment('Shalwar Kameez (Double Stitch)', 1700);
    else setGarment('Shalwar Kameez', 1500);
  }
}

// Toast Notification Helper
function showToast(message, iconClass = 'fa-circle-check') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-pill';
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;
  container.appendChild(toast);

  // Auto remove after 3.2 seconds
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// SCROLL REVEAL & DYNAMIC ANIMATIONS ENGINE
// ==========================================================================
function setupScrollAnimations() {
  const targets = [
    { selector: '.section-title-block', type: 'reveal-up' },
    { selector: '.services-cards-grid .service-box', type: 'reveal-up', staggered: true },
    { selector: '.craft-details-column', type: 'reveal-left' },
    { selector: '.craft-images-column', type: 'reveal-right' },
    { selector: '.craft-feature-item', type: 'reveal-up', staggered: true },
    { selector: '.workbench-controls-panel', type: 'reveal-up' },
    { selector: '.workbench-summary-panel', type: 'reveal-up' },
    { selector: '.form-fieldset-block', type: 'reveal-up' },
    { selector: '.rates-table-container', type: 'reveal-up' },
    { selector: '.standards-cards-grid .standard-feature-card', type: 'reveal-up', staggered: true },
    { selector: '.reviews-cards-grid .review-quote-card', type: 'reveal-up', staggered: true },
    { selector: '.contact-info-column', type: 'reveal-left' },
    { selector: '.contact-form-column', type: 'reveal-right' },
    { selector: '.contact-card', type: 'reveal-up', staggered: true },
    { selector: '.shop-counter-feature-card', type: 'reveal-up' },
    { selector: '.rates-disclaimer-card', type: 'reveal-up' },
    { selector: '.footer-column', type: 'reveal-up', staggered: true },
    { selector: '.metric-item', type: 'reveal-scale', staggered: true }
  ];

  if (!('IntersectionObserver' in window)) {
    // Fallback: reveal all immediately if observer is not supported
    document.querySelectorAll('.section-title-block, .service-box, .standard-feature-card, .review-quote-card, .rates-table-container, .rates-styled-table tbody tr').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        if (entry.target.classList.contains('rates-table-container')) {
          entry.target.classList.add('table-anim-active');
        }
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  targets.forEach(group => {
    const elements = document.querySelectorAll(group.selector);
    elements.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      if (group.type === 'reveal-left') el.classList.add('reveal-left');
      if (group.type === 'reveal-right') el.classList.add('reveal-right');
      if (group.type === 'reveal-scale') el.classList.add('reveal-scale');

      if (group.staggered) {
        const delayClass = `stagger-${(index % 6) + 1}`;
        el.classList.add(delayClass);
      }

      observer.observe(el);
    });
  });
}

// Global Scroll Progress Bar Handler
function setupScrollProgress() {
  let progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.id = 'scrollProgressBar';
    progressBar.className = 'scroll-progress-bar';
    document.body.prepend(progressBar);
  }

  let ticking = false;
  const updateBar = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateBar);
      ticking = true;
    }
  }, { passive: true });

  updateBar();
}

// Floating Back to Top Button
function setupBackToTop() {
  let btn = document.getElementById('backToTopBtn');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'backToTopBtn';
    btn.className = 'back-to-top-btn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(btn);
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('is-visible');
    } else {
      btn.classList.remove('is-visible');
    }
  }, { passive: true });
}

// Luxury Spotlight Cursor Follower on Interactive Cards
function setupCardSpotlight() {
  const cards = document.querySelectorAll(
    '.service-box, .standard-feature-card, .review-quote-card, .summary-receipt-box, .inquiry-form-card, .shop-counter-feature-card, .workbench-controls-panel, .rates-table-container, .craft-details-column'
  );

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

// Click Ripple Effect on Interactive Elements
function setupButtonRipples() {
  const clickableSelectors = [
    '.btn-action-primary',
    '.btn-action-secondary',
    '.nav-btn-whatsapp',
    '.nav-btn-call',
    '.table-select-btn',
    '.service-order-btn',
    '.dispatch-whatsapp-btn',
    '.submit-inquiry-btn',
    '.garment-pill',
    '.size-box-btn',
    '.sizing-nav-tab',
    '.modal-btn'
  ].join(',');

  document.addEventListener('click', (e) => {
    const btn = e.target.closest(clickableSelectors);
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';

    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - rect.left - radius}px`;
    ripple.style.top = `${e.clientY - rect.top - radius}px`;

    btn.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 650);
  });
}

function setupMetricsCounter() {
  const metricValues = document.querySelectorAll('.metric-item .metric-value');
  if (metricValues.length === 0 || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetric(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  metricValues.forEach(el => observer.observe(el));
}

function animateMetric(el) {
  const text = el.textContent.trim();
  if (text.includes('%')) {
    const target = parseInt(text, 10) || 100;
    let current = 0;
    const step = Math.ceil(target / 35);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = `${current}%`;
    }, 25);
  } else if (text.includes('+')) {
    const target = parseInt(text, 10) || 10;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = `${current}+`;
    }, 70);
  }
}

// Setup Navbar sticky effect & Mobile toggle
function setupNavbarInteractions() {
  const navbar = document.getElementById('mainNavbar');
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenuList');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active', isOpen);
    });

    navMenu.querySelectorAll('.nav-link-item').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
      });
    });
  }
}

// Smooth Anchor Scrolling with offset
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElem = document.querySelector(targetId);
      if (targetElem) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetElem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Switch between Standard Size and Custom Measurements
window.switchOrderMode = function(mode) {
  orderState.mode = mode;
  const tabStandard = document.getElementById('tabStandard');
  const tabCustom = document.getElementById('tabCustom');
  const standardPane = document.getElementById('standardSizeView');
  const customPane = document.getElementById('customSizeView');
  const isUrdu = (localStorage.getItem('site_lang') === 'ur');

  if (mode === 'standard') {
    tabStandard?.classList.add('active');
    tabCustom?.classList.remove('active');
    standardPane?.classList.remove('is-hidden');
    customPane?.classList.add('is-hidden');
    showToast(isUrdu ? 'معیاری سائز منتخب ہو گئے (S, M, L, XL, XXL)' : 'Switched to Standard Sizes (S, M, L, XL, XXL)', 'fa-shirt');
  } else {
    tabStandard?.classList.remove('active');
    tabCustom?.classList.add('active');
    standardPane?.classList.add('is-hidden');
    customPane?.classList.remove('is-hidden');
    showToast(isUrdu ? 'کسٹم ناپ موڈ منتخب ہو گیا (انچ میں درج کریں)' : 'Switched to Custom Inches Naap (ناپ)', 'fa-ruler');
  }

  updateOrderSummary();
};

// Set Garment Selection
window.setGarment = function(garmentName, price) {
  orderState.garment = garmentName;
  orderState.basePrice = price;

  document.querySelectorAll('.garment-pill').forEach(pill => {
    pill.classList.remove('active');
    if (pill.getAttribute('data-garment') === garmentName) {
      pill.classList.add('active');
    }
  });

  const isUrdu = (localStorage.getItem('site_lang') === 'ur');
  showToast(isUrdu ? `لباس منتخب: ${garmentName} (روپے ${price.toLocaleString()})` : `Selected: ${garmentName} (Rs. ${price.toLocaleString()})`, 'fa-vest');
  updateOrderSummary();
};

// Quick Select From Other Pages
window.selectServiceForOrder = function(garmentName) {
  const isOrderPage = window.location.pathname.includes('order.html');
  if (isOrderPage) {
    if (garmentName.includes('Waistcoat')) setGarment('Executive Waistcoat (Waskat)', 2500);
    else if (garmentName.includes('Suit')) setGarment('Bespoke 2-Piece Suit', 7500);
    else if (garmentName.includes('Prince')) setGarment('Prince Coat', 4500);
    else if (garmentName.includes('Kurta')) setGarment('Kurta Trouser', 1300);
    else if (garmentName.includes('Double')) setGarment('Shalwar Kameez (Double Stitch)', 1700);
    else setGarment('Shalwar Kameez', 1500);

    const workbench = document.getElementById('orderFormBlock') || document.getElementById('measurement');
    if (workbench) {
      workbench.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    window.location.href = `order.html?garment=${encodeURIComponent(garmentName)}`;
  }
};

// Set Standard Preset Size
window.setSize = function(sizeKey) {
  orderState.standardSize = sizeKey;

  document.querySelectorAll('.size-box-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-size') === sizeKey) {
      btn.classList.add('active');
    }
  });

  const preset = orderState.standardPresets[sizeKey];
  const sizeSummary = document.getElementById('standardSizeSummary');
  if (sizeSummary && preset) {
    sizeSummary.innerHTML = `
      <i class="fa-solid fa-circle-info"></i>
      <span><strong>${sizeKey} Specs:</strong> Length: ${preset.length}" | Chest: ${preset.chest}" | Shoulder: ${preset.shoulder}" | Sleeve: ${preset.sleeve}" | Ban: ${preset.collar}" | Shalwar: ${preset.shalwar}"</span>
    `;
  }

  const isUrdu = (localStorage.getItem('site_lang') === 'ur');
  showToast(isUrdu ? `سائز منتخب: ${sizeKey}` : `Standard Size Selected: ${sizeKey}`, 'fa-tag');
  updateOrderSummary();
};

// Set Stitching Speed (Standard vs Express)
window.setSpeed = function(speed) {
  orderState.speed = speed;
  orderState.expressFee = (speed === 'express') ? 500 : 0;

  document.querySelectorAll('.speed-option-card').forEach(card => {
    card.classList.remove('active');
    const radio = card.querySelector('input[type="radio"]');
    if (card.getAttribute('data-speed') === speed) {
      card.classList.add('active');
      if (radio) radio.checked = true;
    }
  });

  updateOrderSummary();

  const isUrdu = (localStorage.getItem('site_lang') === 'ur');
  if (speed === 'express') {
    showToast(isUrdu ? 'ارجنٹ ایکسپریس (24 تا 48 گھنٹے) لاگو (+500 روپے)' : 'Urgent Express (24-48h) Turned On (+Rs. 500)', 'fa-bolt');
  } else {
    showToast(isUrdu ? 'عام ڈلیوری منتخب (3 تا 5 کام کے دن)' : 'Standard Turnaround Selected (3-5 Working Days)', 'fa-calendar-check');
  }
};

// Aliases for compatibility
window.setStandardSize = window.setSize;
window.setDeliverySpeed = window.setSpeed;

// Update Order Summary Live in Receipt
window.updateOrderSummary = function() {
  const collarSelect = document.getElementById('optCollar');
  if (collarSelect) orderState.collarStyle = collarSelect.value;

  const cuffSelect = document.getElementById('optCuff');
  if (cuffSelect) orderState.cuffStyle = cuffSelect.value;

  const damanSelect = document.getElementById('optDaman');
  if (damanSelect) orderState.damanStyle = damanSelect.value;

  const pocketsSelect = document.getElementById('optPockets');
  if (pocketsSelect) orderState.pockets = pocketsSelect.value;

  const nameInput = document.getElementById('custName');
  if (nameInput) orderState.customerName = nameInput.value.trim();

  const phoneInput = document.getElementById('custPhone');
  if (phoneInput) orderState.customerPhone = phoneInput.value.trim();

  const notesInput = document.getElementById('custNotes');
  if (notesInput) orderState.customerNotes = notesInput.value.trim();

  // Read measurements
  orderState.measurements = {
    length: document.getElementById('mLength')?.value || '40',
    chest: document.getElementById('mChest')?.value || '22',
    shoulder: document.getElementById('mShoulder')?.value || '18',
    sleeve: document.getElementById('mSleeve')?.value || '24',
    collar: document.getElementById('mCollar')?.value || '15.5',
    shalwar: document.getElementById('mShalwar')?.value || '39',
    poncha: document.getElementById('mPoncha')?.value || '8.5',
    daman: document.getElementById('mDaman')?.value || '23'
  };

  const isUrdu = (localStorage.getItem('site_lang') === 'ur');

  // Update summary fields
  const sumGarment = document.getElementById('sumGarment');
  if (sumGarment) sumGarment.textContent = orderState.garment;

  const sumSizeMode = document.getElementById('sumSizeMode');
  const sumSpecs = document.getElementById('sumSpecs');

  if (orderState.mode === 'standard') {
    if (sumSizeMode) {
      sumSizeMode.textContent = isUrdu ? `معیاری سائز: ${orderState.standardSize}` : `Standard Size: ${orderState.standardSize}`;
    }
    const p = orderState.standardPresets[orderState.standardSize];
    if (sumSpecs && p) {
      sumSpecs.textContent = `L: ${p.length}" | Chest: ${p.chest}" | Sh: ${p.shoulder}" | Sl: ${p.sleeve}"`;
    }
  } else {
    if (sumSizeMode) {
      sumSizeMode.textContent = isUrdu ? `کسٹم ناپ (انچ میں)` : `Custom Measured Naap (ناپ)`;
    }
    const m = orderState.measurements;
    if (sumSpecs) {
      sumSpecs.textContent = `L: ${m.length}" | Ch: ${m.chest}" | Sh: ${m.shoulder}" | Sl: ${m.sleeve}" | Col: ${m.collar}" | Shl: ${m.shalwar}"`;
    }
  }

  const sumCollar = document.getElementById('sumCollar');
  if (sumCollar) sumCollar.textContent = orderState.collarStyle.split('(')[0].trim();

  const sumCuff = document.getElementById('sumCuff');
  if (sumCuff) sumCuff.textContent = orderState.cuffStyle.split('(')[0].trim();

  const sumDaman = document.getElementById('sumDaman');
  if (sumDaman) sumDaman.textContent = orderState.damanStyle.split('(')[0].trim();

  const sumSpeed = document.getElementById('sumSpeed');
  if (sumSpeed) {
    if (orderState.speed === 'express') {
      sumSpeed.textContent = isUrdu ? 'ارجنٹ ایکسپریس (24 تا 48 گھنٹے)' : 'Urgent Express (24-48 Hours)';
    } else {
      sumSpeed.textContent = isUrdu ? 'عام ڈلیوری (3 تا 5 کام کے دن)' : 'Standard (3-5 Days)';
    }
  }

  const totalPrice = orderState.basePrice + orderState.expressFee;
  const sumPrice = document.getElementById('sumPrice');
  if (sumPrice) {
    sumPrice.textContent = `Rs. ${totalPrice.toLocaleString()}`;
    sumPrice.classList.remove('price-updated');
    void sumPrice.offsetWidth; // Trigger reflow for animation restart
    sumPrice.classList.add('price-updated');
  }
};

// Generate Full Text Message for Order
function generateOrderMessageText() {
  const customerName = orderState.customerName || 'Customer';
  const customerPhone = orderState.customerPhone || 'Not provided';
  const totalPrice = orderState.basePrice + orderState.expressFee;

  let measurementText = '';
  if (orderState.mode === 'standard') {
    const p = orderState.standardPresets[orderState.standardSize];
    measurementText = `*Size Mode:* Standard ${orderState.standardSize}\n` +
      `  • Length: ${p.length} in\n` +
      `  • Chest: ${p.chest} in\n` +
      `  • Shoulder (Teera): ${p.shoulder} in\n` +
      `  • Sleeve (Aasteen): ${p.sleeve} in\n` +
      `  • Collar (Ban): ${p.collar} in\n` +
      `  • Shalwar: ${p.shalwar} in\n` +
      `  • Poncha: ${p.poncha} in`;
  } else {
    const m = orderState.measurements;
    measurementText = `*Size Mode:* Custom Measured Naap (ناپ)\n` +
      `  • Length: ${m.length} in\n` +
      `  • Chest: ${m.chest} in\n` +
      `  • Shoulder (Teera): ${m.shoulder} in\n` +
      `  • Sleeve (Aasteen): ${m.sleeve} in\n` +
      `  • Collar (Ban): ${m.collar} in\n` +
      `  • Shalwar Length: ${m.shalwar} in\n` +
      `  • Poncha: ${m.poncha} in\n` +
      `  • Daman: ${m.daman} in`;
  }

  const notesText = orderState.customerNotes ? `\n*Special Instructions:* ${orderState.customerNotes}` : '';

  return `*NEW STITCHING ORDER - M. NAIB TAILORS (KOHAT CITY KPK)*
--------------------------------------
*Client Name:* ${customerName}
*Client Contact:* ${customerPhone}

*Garment Selected:* ${orderState.garment}
*Collar Style:* ${orderState.collarStyle}
*Cuff / Sleeve:* ${orderState.cuffStyle}
*Daman Style:* ${orderState.damanStyle}
*Pockets:* ${orderState.pockets}

${measurementText}

*Delivery Speed:* ${orderState.speed === 'express' ? 'Urgent Express (24-48 Hours)' : 'Standard (3-5 Days)'}
*Estimated Stitching Rate:* Rs. ${totalPrice.toLocaleString()}
${notesText}
--------------------------------------
Assalam-o-Alaikum Master M. Naib, please confirm this order and receipt of fabric.`;
}

// Dispatch Order: Opens Confirmation Modal & Triggers WhatsApp
window.dispatchWhatsAppOrder = function() {
  updateOrderSummary();

  const customerName = orderState.customerName || 'Valued Customer';
  const customerPhone = orderState.customerPhone || 'Not provided';
  const totalPrice = orderState.basePrice + orderState.expressFee;
  const messageText = generateOrderMessageText();
  const whatsappUrl = `https://wa.me/${TAILOR_WHATSAPP}?text=${encodeURIComponent(messageText)}`;

  // Populate Interactive Modal Receipt
  const receiptBox = document.getElementById('modalReceiptContent');
  if (receiptBox) {
    let sizeDetailHtml = '';
    if (orderState.mode === 'standard') {
      sizeDetailHtml = `Standard ${orderState.standardSize}`;
    } else {
      const m = orderState.measurements;
      sizeDetailHtml = `L: ${m.length}" | Ch: ${m.chest}" | Sh: ${m.shoulder}" | Sl: ${m.sleeve}"`;
    }

    receiptBox.innerHTML = `
      <div class="modal-receipt-row">
        <span class="label">Customer:</span>
        <span class="val">${customerName}</span>
      </div>
      <div class="modal-receipt-row">
        <span class="label">Phone:</span>
        <span class="val">${customerPhone}</span>
      </div>
      <div class="modal-receipt-row">
        <span class="label">Garment:</span>
        <span class="val">${orderState.garment}</span>
      </div>
      <div class="modal-receipt-row">
        <span class="label">Measurements:</span>
        <span class="val">${sizeDetailHtml}</span>
      </div>
      <div class="modal-receipt-row">
        <span class="label">Collar Style:</span>
        <span class="val">${orderState.collarStyle.split('(')[0].trim()}</span>
      </div>
      <div class="modal-receipt-row">
        <span class="label">Delivery Speed:</span>
        <span class="val">${orderState.speed === 'express' ? 'Urgent Express (24-48h)' : 'Standard (3-5 Days)'}</span>
      </div>
      <div class="modal-receipt-row total-row">
        <span class="label">Total Stitching Rate:</span>
        <span class="val">Rs. ${totalPrice.toLocaleString()}</span>
      </div>
    `;
  }

  // Update modal WhatsApp action button link
  const modalWaBtn = document.getElementById('modalWhatsAppBtn');
  if (modalWaBtn) {
    modalWaBtn.href = whatsappUrl;
  }

  // Reset copy button text
  const copyBtnText = document.getElementById('copyBtnText');
  if (copyBtnText) copyBtnText.textContent = 'Copy Order Details to Clipboard';

  // Open Modal
  const modalOverlay = document.getElementById('orderModalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.add('is-active');
  }

  // Also open WhatsApp directly in new tab
  window.open(whatsappUrl, '_blank');
  showToast('Order Prepared! Opening WhatsApp to M. Naib...', 'fa-paper-plane');
};

// Copy Order to Clipboard
window.copyOrderSummaryToClipboard = function() {
  const messageText = generateOrderMessageText();

  navigator.clipboard.writeText(messageText).then(() => {
    const copyBtnText = document.getElementById('copyBtnText');
    if (copyBtnText) copyBtnText.textContent = '✓ Copied to Clipboard!';
    showToast('Order details copied to clipboard! Ready to paste in SMS/WhatsApp.', 'fa-copy');
  }).catch(() => {
    showToast('Failed to copy. Please select and copy manually.', 'fa-triangle-exclamation');
  });
};

// Close Order Modal
window.closeOrderModal = function() {
  const modalOverlay = document.getElementById('orderModalOverlay');
  modalOverlay?.classList.remove('is-active');
};

// Close modal when clicking on dark backdrop
document.getElementById('orderModalOverlay')?.addEventListener('click', function(e) {
  if (e.target === this) {
    closeOrderModal();
  }
});

// Handle Direct Inquiry Form Submission
window.handleDirectInquiry = function(e) {
  e.preventDefault();
  const name = document.getElementById('inqName').value.trim();
  const phone = document.getElementById('inqPhone').value.trim();
  const garment = document.getElementById('inqGarment').value;
  const message = document.getElementById('inqMessage').value.trim();

  if (!name || !phone) {
    showToast('Please enter your name and phone number.', 'fa-circle-exclamation');
    return;
  }

  const waText = 
`*NEW INQUIRY - M. NAIB TAILORS (KOHAT CITY KPK)*
--------------------------------------
*Customer Name:* ${name}
*Customer Contact:* ${phone}
*Garment Needed:* ${garment}
*Message / Requirements:* ${message || 'No additional note'}
--------------------------------------
Assalam-o-Alaikum Master M. Naib, I would like to inquire about stitching at your shop in Kohat City.`;

  const encodedUrl = `https://wa.me/${TAILOR_WHATSAPP}?text=${encodeURIComponent(waText)}`;
  window.open(encodedUrl, '_blank');
  showToast(`Inquiry sent for ${name}! Opening WhatsApp...`, 'fa-check');
};
