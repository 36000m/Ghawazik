# دليل النشر والتشغيل - منصة غوازيك
# Deployment and Setup Guide - Ghawazik Platform

## 🚀 طرق النشر السريع / Quick Deployment Methods

### 1. النشر على Netlify
1. اذهب إلى [netlify.com](https://netlify.com)
2. اسحب وأفلت مجلد المشروع كاملاً
3. الموقع سيكون جاهزاً خلال دقائق

### 2. النشر على Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. ارفع المجلد أو اربطه مع GitHub
3. النشر التلقائي سيبدأ فوراً

### 3. النشر على GitHub Pages
1. أنشئ repository جديد على GitHub
2. ارفع جميع الملفات
3. فعل GitHub Pages من الإعدادات

## 🔧 التشغيل المحلي / Local Development

### متطلبات النظام / System Requirements
- Python 3.x أو PHP أو Node.js
- متصفح ويب حديث
- محرر نصوص (VS Code مُوصى به)

### طرق التشغيل / Running Methods

#### باستخدام Python
```bash
cd duheghop-source
python3 -m http.server 8000
# افتح المتصفح على: http://localhost:8000
```

#### باستخدام PHP
```bash
cd duheghop-source
php -S localhost:8000
# افتح المتصفح على: http://localhost:8000
```

#### باستخدام Node.js
```bash
cd duheghop-source
npx http-server -p 8000
# افتح المتصفح على: http://localhost:8000
```

## 📁 هيكل المشروع التفصيلي / Detailed Project Structure

```
duheghop-source/
├── index.html                 # الصفحة الرئيسية العربية
├── index-en.html             # الصفحة الرئيسية الإنجليزية
├── styles.css                # تنسيقات عربية
├── styles-en.css             # تنسيقات إنجليزية
├── script.js                 # وظائف JavaScript عربية
├── script-en.js              # وظائف JavaScript إنجليزية
├── financial-content.js      # محتوى تعليمي عربي
├── financial-content-en.js   # محتوى تعليمي إنجليزي
├── investment-data.js        # بيانات الاستثمارات
├── README.md                 # ملف التوثيق الرئيسي
└── DEPLOYMENT-GUIDE.md       # دليل النشر (هذا الملف)
```

## ⚙️ التخصيص والتعديل / Customization and Modification

### تعديل المحتوى التعليمي / Editing Educational Content
```javascript
// في ملف financial-content.js
const financialEducationContent = {
    'banking-services': {
        title: 'عنوان جديد',
        content: 'محتوى جديد...'
    }
    // أضف المزيد...
};
```

### تعديل بيانات الاستثمارات / Editing Investment Data
```javascript
// في ملف investment-data.js
const investmentData = {
    cryptocurrencies: [
        {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: 43250,
            change: 2.5
        }
        // أضف المزيد...
    ]
};
```

### تعديل الألوان والتصميم / Editing Colors and Design
```css
/* في ملف styles.css */
:root {
    --primary-color: #2c5f5d;      /* اللون الأساسي */
    --secondary-color: #4a9b8e;    /* اللون الثانوي */
    --accent-color: #f39c12;       /* لون التمييز */
    --text-primary: #2c3e50;       /* لون النص الأساسي */
    --text-secondary: #7f8c8d;     /* لون النص الثانوي */
}
```

## 🔒 الأمان والحماية / Security and Protection

### حماية الملفات الحساسة / Protecting Sensitive Files
```apache
# في ملف .htaccess (للخوادم Apache)
<Files "*.md">
    Order allow,deny
    Deny from all
</Files>
```

### تحسين الأداء / Performance Optimization
```html
<!-- ضغط الملفات -->
<link rel="stylesheet" href="styles.min.css">
<script src="script.min.js"></script>
```

## 📊 مراقبة الأداء / Performance Monitoring

### أدوات التحليل / Analytics Tools
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🐛 استكشاف الأخطاء / Troubleshooting

### مشاكل شائعة / Common Issues

#### 1. الحاسبات لا تعمل / Calculators Not Working
- تأكد من تحميل ملف `script.js` بشكل صحيح
- افحص وحدة التحكم في المتصفح للأخطاء

#### 2. التعليم المالي لا يظهر / Financial Education Not Showing
- تأكد من تحميل ملف `financial-content.js`
- تحقق من ترتيب تحميل الملفات في HTML

#### 3. لوحة الاستثمارات فارغة / Investment Dashboard Empty
- تأكد من تحميل ملف `investment-data.js`
- تحقق من اتصال الإنترنت للتحديثات

## 📞 الدعم الفني / Technical Support

### للحصول على المساعدة / For Help and Support
- **الهاتف / Phone**: +968 79090079
- **البريد الإلكتروني / Email**: m91.qoot@gmail.com
- **واتساب / WhatsApp**: [رابط مباشر](https://wa.me/96879090079)

## 📝 سجل التحديثات / Update Log

### الإصدار الحالي / Current Version
- **التاريخ / Date**: 25 يوليو 2025 / July 25, 2025
- **الإصدار / Version**: 1.0.0
- **المصدر / Source**: https://duheghop.manus.space

### الميزات المضافة / Added Features
- ✅ 5 حاسبات مالية كاملة
- ✅ لوحة استثمارات تفاعلية
- ✅ محتوى تعليمي شامل
- ✅ دعم اللغتين العربية والإنجليزية
- ✅ تصميم متجاوب
- ✅ قنوات تواصل اجتماعي

## 🔄 التحديثات المستقبلية / Future Updates

### خطة التطوير / Development Roadmap
- [ ] إضافة المزيد من الحاسبات
- [ ] تحسين لوحة الاستثمارات
- [ ] إضافة نظام إشعارات
- [ ] تطبيق جوال
- [ ] API للبيانات المالية

---

**ملاحظة مهمة**: هذا الكود مُحمل من الموقع الأصلي ويحتوي على جميع الميزات والوظائف كاملة.
**Important Note**: This code is downloaded from the original website and contains all features and functions complete.

