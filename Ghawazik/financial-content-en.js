const financialQuotes = [
    {
        quote: "الاستثمار الأفضل هو الاستثمار في نفسك. كلما تعلمت أكثر، كلما كسبت أكثر",
        author: "وارن بافيت",
        english: "The best investment you can make is in yourself. The more you learn, the more you'll earn"
    },
    {
        quote: "القاعدة الأولى: لا تخسر المال. القاعدة الثانية: لا تنس القاعدة الأولى",
        author: "وارن بافيت",
        english: "Rule No. 1: Never lose money. Rule No. 2: Never forget rule No. 1"
    },
    {
        quote: "السعر هو ما تدفعه، القيمة هي ما تحصل عليه",
        author: "وارن بافيت",
        english: "Price is what you pay. Value is what you get"
    },
    {
        quote: "الاستثمار في المعرفة يدفع أفضل الفوائد",
        author: "بنجامين فرانكلين",
        english: "An investment in knowledge pays the best interest"
    },
    {
        quote: "لا تستثمر أبداً في عمل لا تفهمه",
        author: "وارن بافيت",
        english: "Never invest in a business you can't understand"
    },
    {
        quote: "الخطر يأتي من عدم معرفة ما تفعله",
        author: "وارن بافيت",
        english: "Risk comes from not knowing what you're doing"
    },
    {
        quote: "الوقت هو صديق الأعمال الرائعة وعدو الأعمال المتوسطة",
        author: "وارن بافيت",
        english: "Time is the friend of the wonderful business, the enemy of the mediocre"
    },
    {
        quote: "اشتر سهماً كما لو كنت تشتري منزلاً",
        author: "وارن بافيت",
        english: "Buy a stock the way you would buy a house"
    }
];

// محتوى تعليمي مالي شامل ومفصل
const financialEducationContent = {
    'banking-services': {
        title: 'الخدمات المصرفية',
        content: `
            <div class="education-content">
                <h3>دليلك الشامل للخدمات المصرفية</h3>
                
                <div class="content-section">
                    <h4>🏦 ما هي الخدمات المصرفية؟</h4>
                    <p>الخدمات المصرفية هي مجموعة من الخدمات المالية التي تقدمها البنوك لمساعدتك في إدارة أموالك بطريقة آمنة ومربحة. تشمل هذه الخدمات الحسابات المصرفية، القروض، الودائع، والاستثمارات.</p>
                </div>

                <div class="content-section">
                    <h4>💰 أنواع الحسابات المصرفية:</h4>
                    
                    <div class="account-type">
                        <h5>1. الحساب الجاري</h5>
                        <p><strong>ما هو؟</strong> حساب للمعاملات اليومية مثل إيداع الراتب وسحب النقود.</p>
                        <p><strong>المميزات:</strong></p>
                        <ul>
                            <li>سهولة الوصول للأموال في أي وقت</li>
                            <li>بطاقة صراف آلي مجانية</li>
                            <li>خدمات البنك الإلكتروني</li>
                        </ul>
                        <p><strong>العيوب:</strong> لا يحصل على فوائد أو فوائد قليلة جداً</p>
                    </div>

                    <div class="account-type">
                        <h5>2. حساب التوفير</h5>
                        <p><strong>ما هو؟</strong> حساب مخصص لتوفير المال مع الحصول على فوائد.</p>
                        <p><strong>المميزات:</strong></p>
                        <ul>
                            <li>فوائد شهرية على الرصيد</li>
                            <li>أمان عالي للأموال</li>
                            <li>مرونة في السحب والإيداع</li>
                        </ul>
                        <p><strong>متى تستخدمه؟</strong> عندما تريد توفير مال للطوارئ أو لهدف قريب</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>📈 الودائع المصرفية:</h4>
                    
                    <div class="deposit-type">
                        <h5>الوديعة الثابتة</h5>
                        <p><strong>كيف تعمل؟</strong> تضع مبلغاً معيناً في البنك لفترة محددة (6 أشهر - سنتين) بمعدل فائدة ثابت.</p>
                        <p><strong>المميزات:</strong></p>
                        <ul>
                            <li>فائدة أعلى من حساب التوفير</li>
                            <li>ضمان الحصول على الفائدة المتفق عليها</li>
                            <li>أمان كامل للمبلغ الأساسي</li>
                        </ul>
                        <p><strong>تحذير مهم:</strong> إذا كسرت الوديعة قبل انتهاء المدة، ستحصل على فائدة الشهر الحالي فقط!</p>
                    </div>

                    <div class="deposit-type">
                        <h5>الوديعة تحت الطلب</h5>
                        <p><strong>كيف تعمل؟</strong> وديعة مرنة يمكنك إضافة مبالغ شهرية إليها والسحب منها متى شئت.</p>
                        <p><strong>المميزات:</strong></p>
                        <ul>
                            <li>مرونة كاملة في السحب والإيداع</li>
                            <li>إمكانية إضافة مبالغ شهرية</li>
                            <li>فوائد شهرية على الرصيد</li>
                        </ul>
                        <p><strong>مثال عملي:</strong> لو بدأت بـ 1000 ريال وأضفت 100 ريال شهرياً بفائدة 3%، ستحصل على فائدة من الـ 1000 ريال في الشهر الأول، ومن الشهر الثاني ستحصل على فائدة من المبلغ الجديد.</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>💡 نصائح ذهبية للتعامل مع البنوك:</h4>
                    <div class="tips-grid">
                        <div class="tip">
                            <h6>1. اقرأ الشروط والأحكام</h6>
                            <p>لا توقع على أي عقد مصرفي دون قراءة جميع الشروط، خاصة الرسوم المخفية.</p>
                        </div>
                        <div class="tip">
                            <h6>2. قارن بين البنوك</h6>
                            <p>معدلات الفوائد والرسوم تختلف بين البنوك. قارن قبل أن تقرر.</p>
                        </div>
                        <div class="tip">
                            <h6>3. احتفظ بصندوق طوارئ</h6>
                            <p>احتفظ بمبلغ يكفي 3-6 أشهر من مصاريفك في حساب يمكن الوصول إليه بسهولة.</p>
                        </div>
                        <div class="tip">
                            <h6>4. استفد من التكنولوجيا</h6>
                            <p>استخدم تطبيقات البنك لمتابعة حساباتك وتوفير الوقت والجهد.</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h4>⚠️ أخطاء شائعة يجب تجنبها:</h4>
                    <ul class="warning-list">
                        <li><strong>عدم قراءة كشف الحساب:</strong> راجع كشف حسابك شهرياً للتأكد من عدم وجود رسوم غير مبررة</li>
                        <li><strong>تجاهل الرسوم الصغيرة:</strong> الرسوم الصغيرة تتراكم مع الوقت وتصبح مبالغ كبيرة</li>
                        <li><strong>عدم الاستفادة من الفوائد:</strong> لا تترك أموالك في حساب جاري لا يحصل على فوائد</li>
                        <li><strong>كسر الودائع الثابتة:</strong> تجنب كسر الوديعة الثابتة إلا في الضرورة القصوى</li>
                    </ul>
                </div>
            </div>
        `
    },

    'digital-currencies': {
        title: 'العملات الرقمية',
        content: `
            <div class="education-content">
                <h3>دليل المبتدئين للعملات الرقمية</h3>
                
                <div class="content-section">
                    <h4>🪙 ما هي العملات الرقمية؟</h4>
                    <p>العملات الرقمية (أو المشفرة) هي أموال رقمية تستخدم التشفير لتأمين المعاملات. أشهرها البيتكوين والإيثيريوم. تعمل بدون بنك مركزي وتعتمد على تقنية البلوك تشين.</p>
                    
                    <div class="simple-explanation">
                        <h5>شرح مبسط:</h5>
                        <p>تخيل العملة الرقمية كأنها نقود إلكترونية محفوظة في محفظة رقمية على هاتفك، لكن بدلاً من أن يتحكم بها البنك، تتحكم بها أنت بالكامل.</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>💎 أشهر العملات الرقمية:</h4>
                    
                    <div class="crypto-currency">
                        <h5>1. البيتكوين (Bitcoin - BTC)</h5>
                        <p><strong>ما هو؟</strong> أول وأشهر عملة رقمية، يُطلق عليها "الذهب الرقمي"</p>
                        <p><strong>لماذا مهم؟</strong> محدود العدد (21 مليون فقط) مما يجعله نادراً مثل الذهب</p>
                        <p><strong>الاستخدام:</strong> استثمار طويل المدى، تحويلات دولية</p>
                    </div>

                    <div class="crypto-currency">
                        <h5>2. الإيثيريوم (Ethereum - ETH)</h5>
                        <p><strong>ما هو؟</strong> منصة للتطبيقات اللامركزية والعقود الذكية</p>
                        <p><strong>لماذا مهم؟</strong> يمكن بناء تطبيقات عليه مثل الألعاب والتمويل اللامركزي</p>
                        <p><strong>الاستخدام:</strong> استثمار، استخدام التطبيقات اللامركزية</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>⚖️ المخاطر والفوائد:</h4>
                    
                    <div class="pros-cons">
                        <div class="pros">
                            <h5>✅ الفوائد:</h5>
                            <ul>
                                <li>إمكانية عوائد عالية جداً</li>
                                <li>تحويلات سريعة ورخيصة عالمياً</li>
                                <li>لا تحتاج وسطاء (بنوك)</li>
                                <li>شفافية كاملة في المعاملات</li>
                            </ul>
                        </div>
                        
                        <div class="cons">
                            <h5>❌ المخاطر:</h5>
                            <ul>
                                <li>تقلبات سعرية عالية جداً</li>
                                <li>إمكانية خسارة كامل الاستثمار</li>
                                <li>صعوبة في الفهم للمبتدئين</li>
                                <li>مخاطر أمنية (فقدان المحفظة)</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h4>🚀 كيف تبدأ بأمان؟</h4>
                    <div class="steps">
                        <div class="step">
                            <h6>الخطوة 1: التعلم أولاً</h6>
                            <p>اقرأ واتعلم لمدة شهر على الأقل قبل أن تستثمر أي مال</p>
                        </div>
                        <div class="step">
                            <h6>الخطوة 2: ابدأ بمبلغ صغير</h6>
                            <p>استثمر فقط ما تستطيع خسارته دون أن يؤثر على حياتك</p>
                        </div>
                        <div class="step">
                            <h6>الخطوة 3: اختر منصة موثوقة</h6>
                            <p>استخدم منصات معروفة ومرخصة مثل Binance أو Coinbase</p>
                        </div>
                        <div class="step">
                            <h6>الخطوة 4: احفظ عملاتك بأمان</h6>
                            <p>استخدم محفظة باردة للمبالغ الكبيرة</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h4>⚠️ تحذيرات مهمة:</h4>
                    <div class="warnings">
                        <div class="warning">
                            <h6>🚨 لا تستثمر أكثر مما تستطيع خسارته</h6>
                            <p>العملات الرقمية استثمار عالي المخاطر. قد تخسر كل أموالك.</p>
                        </div>
                        <div class="warning">
                            <h6>🚨 احذر من النصائح المجانية</h6>
                            <p>لا تتبع نصائح الاستثمار من وسائل التواصل الاجتماعي أو الغرباء.</p>
                        </div>
                        <div class="warning">
                            <h6>🚨 تجنب الاستثمار العاطفي</h6>
                            <p>لا تشتري بسبب الخوف من فوات الفرصة أو تبيع بسبب الذعر.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'stock-market': {
        title: 'سوق الأسهم',
        content: `
            <div class="education-content">
                <h3>دليلك الشامل لسوق الأسهم</h3>
                
                <div class="content-section">
                    <h4>📈 ما هو سوق الأسهم؟</h4>
                    <p>سوق الأسهم هو مكان (إلكتروني الآن) حيث يتم بيع وشراء أسهم الشركات. عندما تشتري سهماً، تصبح مالكاً لجزء صغير من تلك الشركة.</p>
                    
                    <div class="simple-explanation">
                        <h5>شرح مبسط:</h5>
                        <p>تخيل أن شركة آبل مقسمة إلى مليار قطعة صغيرة. كل قطعة تسمى "سهم". عندما تشتري سهماً واحداً، تملك جزءاً صغيراً جداً من آبل.</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>💰 كيف تربح من الأسهم؟</h4>
                    
                    <div class="profit-method">
                        <h5>1. ارتفاع سعر السهم</h5>
                        <p><strong>كيف؟</strong> تشتري السهم بسعر منخفض وتبيعه بسعر أعلى</p>
                        <p><strong>مثال:</strong> اشتريت سهم شركة بـ 10 ريال، ارتفع إلى 15 ريال، ربحت 5 ريال</p>
                    </div>

                    <div class="profit-method">
                        <h5>2. توزيعات الأرباح</h5>
                        <p><strong>كيف؟</strong> بعض الشركات توزع جزءاً من أرباحها على المساهمين</p>
                        <p><strong>مثال:</strong> تملك 100 سهم، الشركة وزعت 0.5 ريال لكل سهم، حصلت على 50 ريال</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>🏢 أنواع الأسهم:</h4>
                    
                    <div class="stock-type">
                        <h5>أسهم النمو (Growth Stocks)</h5>
                        <p><strong>ما هي؟</strong> أسهم شركات تنمو بسرعة مثل شركات التكنولوجيا</p>
                        <p><strong>المميزات:</strong> إمكانية عوائد عالية</p>
                        <p><strong>العيوب:</strong> مخاطر عالية، تقلبات كبيرة</p>
                        <p><strong>أمثلة:</strong> آبل، مايكروسوفت، تسلا</p>
                    </div>

                    <div class="stock-type">
                        <h5>أسهم القيمة (Value Stocks)</h5>
                        <p><strong>ما هي؟</strong> أسهم شركات مستقرة وناضجة</p>
                        <p><strong>المميزات:</strong> استقرار، توزيعات أرباح منتظمة</p>
                        <p><strong>العيوب:</strong> نمو أبطأ</p>
                        <p><strong>أمثلة:</strong> كوكا كولا، جونسون آند جونسون</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>📊 كيف تحلل الأسهم؟</h4>
                    
                    <div class="analysis-type">
                        <h5>التحليل الأساسي</h5>
                        <p><strong>ما هو؟</strong> دراسة الشركة من الداخل (أرباحها، ديونها، نموها)</p>
                        <p><strong>ما تبحث عنه:</strong></p>
                        <ul>
                            <li>نمو الإيرادات سنوياً</li>
                            <li>نسبة الديون إلى الأصول</li>
                            <li>ربحية السهم الواحد</li>
                            <li>موقع الشركة في السوق</li>
                        </ul>
                    </div>

                    <div class="analysis-type">
                        <h5>التحليل الفني</h5>
                        <p><strong>ما هو؟</strong> دراسة حركة أسعار الأسهم والرسوم البيانية</p>
                        <p><strong>ما تبحث عنه:</strong></p>
                        <ul>
                            <li>اتجاهات الأسعار (صاعدة أم هابطة)</li>
                            <li>مستويات الدعم والمقاومة</li>
                            <li>حجم التداول</li>
                            <li>المؤشرات الفنية</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h4>🎯 استراتيجيات الاستثمار:</h4>
                    
                    <div class="strategy">
                        <h5>1. الاستثمار طويل المدى</h5>
                        <p><strong>كيف؟</strong> شراء أسهم شركات جيدة والاحتفاظ بها لسنوات</p>
                        <p><strong>مناسب لمن؟</strong> المبتدئين والذين لا يريدون متابعة يومية</p>
                        <p><strong>المخاطر:</strong> منخفضة نسبياً</p>
                    </div>

                    <div class="strategy">
                        <h5>2. التداول قصير المدى</h5>
                        <p><strong>كيف؟</strong> شراء وبيع الأسهم خلال أيام أو أسابيع</p>
                        <p><strong>مناسب لمن؟</strong> ذوي الخبرة والوقت الكافي</p>
                        <p><strong>المخاطر:</strong> عالية جداً</p>
                    </div>

                    <div class="strategy">
                        <h5>3. الاستثمار في الصناديق</h5>
                        <p><strong>كيف؟</strong> شراء صندوق يحتوي على أسهم شركات متعددة</p>
                        <p><strong>مناسب لمن؟</strong> المبتدئين والذين يريدون تنويع المخاطر</p>
                        <p><strong>المخاطر:</strong> متوسطة</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>⚠️ أخطاء شائعة يجب تجنبها:</h4>
                    <ul class="warning-list">
                        <li><strong>عدم التنويع:</strong> لا تضع كل أموالك في سهم واحد أو قطاع واحد</li>
                        <li><strong>الاستثمار العاطفي:</strong> لا تشتري بسبب الخوف أو الطمع</li>
                        <li><strong>عدم وضع خطة:</strong> حدد أهدافك ومتى ستبيع قبل أن تشتري</li>
                        <li><strong>متابعة النصائح العشوائية:</strong> لا تتبع نصائح وسائل التواصل الاجتماعي</li>
                        <li><strong>عدم فهم ما تستثمر فيه:</strong> ادرس الشركة قبل شراء أسهمها</li>
                    </ul>
                </div>

                <div class="content-section">
                    <h4>🚀 نصائح للمبتدئين:</h4>
                    <div class="tips-grid">
                        <div class="tip">
                            <h6>1. ابدأ بالتعلم</h6>
                            <p>اقرأ الكتب وشاهد الدورات قبل أن تستثمر أي مال</p>
                        </div>
                        <div class="tip">
                            <h6>2. ابدأ بمبلغ صغير</h6>
                            <p>استثمر مبلغاً لن يؤثر على حياتك إذا خسرته</p>
                        </div>
                        <div class="tip">
                            <h6>3. نوع استثماراتك</h6>
                            <p>لا تضع كل البيض في سلة واحدة</p>
                        </div>
                        <div class="tip">
                            <h6>4. فكر طويل المدى</h6>
                            <p>الاستثمار الناجح يحتاج صبر وثبات</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    'wealth-building': {
        title: 'بناء الثروة',
        content: `
            <div class="education-content">
                <h3>دليلك لبناء الثروة من الصفر</h3>
                
                <div class="content-section">
                    <h4>💎 ما معنى بناء الثروة؟</h4>
                    <p>بناء الثروة يعني زيادة أموالك تدريجياً عبر الزمن من خلال الاستثمار الذكي والتوفير المنتظم. الهدف هو الوصول إلى الحرية المالية حيث تعمل أموالك لصالحك.</p>
                    
                    <div class="simple-explanation">
                        <h5>شرح مبسط:</h5>
                        <p>تخيل أن أموالك مثل البذور. بدلاً من أكلها كلها، تزرع جزءاً منها لتنمو وتصبح أشجاراً تعطيك ثماراً أكثر في المستقبل.</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>🏗️ الخطوات الأساسية لبناء الثروة:</h4>
                    
                    <div class="wealth-step">
                        <h5>الخطوة 1: وضع الأساس المالي</h5>
                        <div class="sub-steps">
                            <p><strong>أ. تتبع مصاريفك:</strong> اعرف أين تذهب أموالك كل شهر</p>
                            <p><strong>ب. ضع ميزانية:</strong> خطط لكيفية إنفاق راتبك</p>
                            <p><strong>ج. ادفع ديونك:</strong> تخلص من الديون عالية الفوائد أولاً</p>
                            <p><strong>د. صندوق الطوارئ:</strong> وفر مبلغاً يكفي 3-6 أشهر من مصاريفك</p>
                        </div>
                    </div>

                    <div class="wealth-step">
                        <h5>الخطوة 2: ابدأ الاستثمار</h5>
                        <div class="sub-steps">
                            <p><strong>أ. حدد أهدافك:</strong> ماذا تريد من الاستثمار؟ (تقاعد، شراء منزل، تعليم الأطفال)</p>
                            <p><strong>ب. اعرف مستوى المخاطر:</strong> كم تستطيع أن تخسر دون أن يؤثر على حياتك؟</p>
                            <p><strong>ج. نوع استثماراتك:</strong> لا تضع كل أموالك في مكان واحد</p>
                            <p><strong>د. استثمر بانتظام:</strong> حتى لو كان مبلغاً صغيراً شهرياً</p>
                        </div>
                    </div>

                    <div class="wealth-step">
                        <h5>الخطوة 3: زيادة الدخل</h5>
                        <div class="sub-steps">
                            <p><strong>أ. طور مهاراتك:</strong> استثمر في تعليمك وتدريبك</p>
                            <p><strong>ب. ابحث عن مصادر دخل إضافية:</strong> عمل جانبي أو مشروع صغير</p>
                            <p><strong>ج. استثمر في نفسك:</strong> الاستثمار الأفضل هو في قدراتك</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h4>⚡ قوة الفائدة المركبة:</h4>
                    <p>الفائدة المركبة هي "الأعجوبة الثامنة في العالم" كما قال أينشتاين. تعني أن تحصل على فوائد على فوائدك السابقة.</p>
                    
                    <div class="compound-example">
                        <h5>مثال عملي:</h5>
                        <p><strong>الشخص أ:</strong> بدأ الاستثمار في عمر 25 سنة</p>
                        <ul>
                            <li>يستثمر 200 ريال شهرياً لمدة 10 سنوات فقط</li>
                            <li>إجمالي ما استثمره: 24,000 ريال</li>
                            <li>في عمر 65: سيملك حوالي 300,000 ريال</li>
                        </ul>
                        
                        <p><strong>الشخص ب:</strong> بدأ الاستثمار في عمر 35 سنة</p>
                        <ul>
                            <li>يستثمر 200 ريال شهرياً لمدة 30 سنة</li>
                            <li>إجمالي ما استثمره: 72,000 ريال</li>
                            <li>في عمر 65: سيملك حوالي 250,000 ريال</li>
                        </ul>
                        
                        <p class="highlight">الشخص أ استثمر أقل لكن بدأ مبكراً، فحصل على أموال أكثر!</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>🎯 استراتيجيات بناء الثروة:</h4>
                    
                    <div class="strategy">
                        <h5>1. استراتيجية 50/30/20</h5>
                        <p><strong>50%</strong> للضروريات (إيجار، طعام، مواصلات)</p>
                        <p><strong>30%</strong> للرغبات (ترفيه، مطاعم، هوايات)</p>
                        <p><strong>20%</strong> للتوفير والاستثمار</p>
                    </div>

                    <div class="strategy">
                        <h5>2. استراتيجية الدولار المتوسط</h5>
                        <p>استثمار مبلغ ثابت شهرياً بغض النظر عن أسعار السوق. هذا يقلل من تأثير تقلبات السوق.</p>
                    </div>

                    <div class="strategy">
                        <h5>3. استراتيجية التنويع</h5>
                        <p>توزيع الاستثمارات على أصول مختلفة: أسهم، سندات، عقارات، ذهب. إذا انخفض واحد، الآخرون قد يرتفعوا.</p>
                    </div>
                </div>

                <div class="content-section">
                    <h4>🚫 عادات تدمر الثروة:</h4>
                    <ul class="warning-list">
                        <li><strong>الإنفاق الاندفاعي:</strong> الشراء بدون تفكير أو تخطيط</li>
                        <li><strong>عدم وجود ميزانية:</strong> عدم معرفة أين تذهب الأموال</li>
                        <li><strong>الديون الاستهلاكية:</strong> استخدام بطاقات الائتمان لشراء أشياء غير ضرورية</li>
                        <li><strong>عدم الاستثمار:</strong> ترك الأموال في حساب جاري بدون فوائد</li>
                        <li><strong>مقارنة النفس بالآخرين:</strong> الإنفاق لمجاراة الآخرين</li>
                        <li><strong>عدم التعلم المالي:</strong> عدم تطوير المعرفة المالية</li>
                    </ul>
                </div>

                <div class="content-section">
                    <h4>💡 نصائح ذهبية لبناء الثروة:</h4>
                    <div class="tips-grid">
                        <div class="tip">
                            <h6>1. ابدأ الآن</h6>
                            <p>أفضل وقت للاستثمار كان قبل 20 سنة، ثاني أفضل وقت هو الآن</p>
                        </div>
                        <div class="tip">
                            <h6>2. اعش تحت مستوى دخلك</h6>
                            <p>لا تنفق كل ما تكسب. وفر واستثمر الفرق</p>
                        </div>
                        <div class="tip">
                            <h6>3. استثمر في تعليمك</h6>
                            <p>المعرفة هي الاستثمار الوحيد الذي لا يمكن أن تخسره</p>
                        </div>
                        <div class="tip">
                            <h6>4. كن صبوراً</h6>
                            <p>بناء الثروة يحتاج وقت. لا تتوقع نتائج سريعة</p>
                        </div>
                        <div class="tip">
                            <h6>5. راجع خطتك دورياً</h6>
                            <p>راجع استثماراتك وأهدافك كل 6 أشهر</p>
                        </div>
                        <div class="tip">
                            <h6>6. تجنب الديون السيئة</h6>
                            <p>الديون لشراء أشياء تنخفض قيمتها مع الوقت</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h4>📊 مراحل بناء الثروة:</h4>
                    
                    <div class="wealth-stage">
                        <h5>المرحلة 1: الاستقرار المالي (0-6 أشهر)</h5>
                        <p>صندوق طوارئ + سداد الديون عالية الفوائد</p>
                    </div>

                    <div class="wealth-stage">
                        <h5>المرحلة 2: الأمان المالي (6 أشهر - 5 سنوات)</h5>
                        <p>استثمارات آمنة + زيادة صندوق الطوارئ إلى سنة</p>
                    </div>

                    <div class="wealth-stage">
                        <h5>المرحلة 3: الاستقلال المالي (5-15 سنة)</h5>
                        <p>استثمارات متنوعة + دخل سلبي يغطي المصاريف الأساسية</p>
                    </div>

                    <div class="wealth-stage">
                        <h5>المرحلة 4: الحرية المالية (15+ سنة)</h5>
                        <p>دخل سلبي يغطي كامل نمط الحياة المرغوب</p>
                    </div>
                </div>
            </div>
        `
    }
};

const financialTips = {
    banking: [
        {
            title: "اختيار الحساب المناسب",
            content: "قارن بين أنواع الحسابات المختلفة واختر ما يناسب احتياجاتك المالية وأهدافك الاستثمارية.",
            category: "banking"
        },
        {
            title: "فهم معدلات الفوائد",
            content: "تعلم الفرق بين الفائدة البسيطة والمركبة، وكيف تؤثر على نمو أموالك مع الوقت.",
            category: "banking"
        },
        {
            title: "إدارة الرسوم المصرفية",
            content: "راجع كشف حسابك شهرياً وتجنب الرسوم غير الضرورية مثل رسوم السحب الزائد.",
            category: "banking"
        }
    ],
    investment: [
        {
            title: "التنويع هو المفتاح",
            content: "لا تضع كل أموالك في استثمار واحد. وزع المخاطر على أصول مختلفة لحماية محفظتك.",
            category: "investment"
        },
        {
            title: "الاستثمار طويل المدى",
            content: "الصبر هو أهم صفة في المستثمر الناجح. الاستثمار طويل المدى يحقق عوائد أفضل.",
            category: "investment"
        },
        {
            title: "ابدأ مبكراً",
            content: "كلما بدأت الاستثمار مبكراً، كلما استفدت أكثر من قوة الفائدة المركبة.",
            category: "investment"
        }
    ],
    loans: [
        {
            title: "احسب قدرتك على السداد",
            content: "تأكد أن القسط الشهري لا يتجاوز 30-40% من دخلك الشهري لتجنب الضغط المالي.",
            category: "loans"
        },
        {
            title: "قارن العروض",
            content: "قارن معدلات الفوائد والشروط من عدة بنوك قبل اختيار القرض المناسب.",
            category: "loans"
        },
        {
            title: "اقرأ الشروط بعناية",
            content: "تأكد من فهم جميع الشروط والرسوم المرتبطة بالقرض قبل التوقيع.",
            category: "loans"
        }
    ]
};

// دالة لعرض المحتوى التعليمي
function showEducationContent(type) {
    const content = financialEducationContent[type];
    if (content) {
        const modal = document.getElementById('education-modal') || createEducationModal();
        const modalTitle = modal.querySelector('.modal-title');
        const modalBody = modal.querySelector('.modal-body');
        
        modalTitle.textContent = content.title;
        modalBody.innerHTML = content.content;
        modal.style.display = 'block';
    }
}

// دالة لإنشاء نافذة المحتوى التعليمي
function createEducationModal() {
    const modal = document.createElement('div');
    modal.id = 'education-modal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content education-modal-content">
            <div class="modal-header">
                <h2 class="modal-title"></h2>
                <span class="close education-close">&times;</span>
            </div>
            <div class="modal-body"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // إضافة وظيفة الإغلاق
    const closeBtn = modal.querySelector('.education-close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    return modal;
}

// دالة لعرض اقتباس عشوائي
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * financialQuotes.length);
    return financialQuotes[randomIndex];
}

// دالة لعرض نصيحة عشوائية
function getRandomTip() {
    const allTips = [...financialTips.banking, ...financialTips.investment, ...financialTips.loans];
    const randomIndex = Math.floor(Math.random() * allTips.length);
    return allTips[randomIndex];
}

