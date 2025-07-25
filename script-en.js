// Ghawazik Platform JavaScript

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const calculatorCards = document.querySelectorAll('.calculator-card');
const modal = document.getElementById('calculator-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('calculator-content');
const closeModal = document.querySelector('.close');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeCalculators();
    initializeModal();
    initializeSmoothScrolling();
    initializeAnimations();
    initializeInvestmentDashboard();
    initializeEducationSection();
    initializeContactForm();
    initializeAdminPanel();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Update active navigation link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Calculator functionality
function initializeCalculators() {
    calculatorCards.forEach(card => {
        card.addEventListener('click', function() {
            const calculatorType = this.getAttribute('data-calculator');
            openCalculator(calculatorType);
        });
    });
}

// Open calculator modal
function openCalculator(type) {
    const calculatorData = getCalculatorData(type);
    modalTitle.textContent = calculatorData.title;
    modalContent.innerHTML = calculatorData.content;
    modal.style.display = 'block';
    
    // Initialize calculator-specific functionality
    initializeCalculatorForm(type);
}

// Get calculator data based on type
function getCalculatorData(type) {
    const calculators = {
        'fixed-deposit': {
            title: 'حاسبة الوديعة الثابتة',
            content: createFixedDepositCalculator()
        },
        'call-deposit': {
            title: 'حاسبة الوديعة تحت الطلب',
            content: createCallDepositCalculator()
        },
        'smart-savings': {
            title: 'حاسبة التوفير الذكي',
            content: createSmartSavingsCalculator()
        },
        'personal-loan': {
            title: 'حاسبة القرض الشخصي',
            content: createPersonalLoanCalculator()
        },
        'home-loan': {
            title: 'حاسبة القرض السكني',
            content: createHomeLoanCalculator()
        }
    };
    
    return calculators[type] || { title: 'حاسبة مالية', content: '<p>قريباً...</p>' };
}

// Create Fixed Deposit Calculator HTML
function createFixedDepositCalculator() {
    return `
        <div class="calculator-form">
            <div class="calculator-description">
                <h4>الوديعة الثابتة</h4>
                <p>وديعة بنكية بمعدل فائدة ثابت لفترة محددة من 6 أشهر إلى سنتين. لا يمكن إضافة مبالغ شهرية. في حالة كسر الوديعة قبل الاستحقاق، ستحصل على فائدة الشهر الحالي فقط.</p>
            </div>
            
            <form id="fixed-deposit-form" class="calc-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="fd-initial-amount">المبلغ الافتتاحي (ريال عماني)</label>
                        <input type="number" id="fd-initial-amount" min="100" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="fd-interest-rate">معدل الفائدة السنوي (%)</label>
                        <input type="number" id="fd-interest-rate" min="0.01" max="20" step="0.01" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="fd-term">مدة الوديعة</label>
                        <select id="fd-term" required>
                            <option value="">اختر المدة</option>
                            <option value="6">6 أشهر</option>
                            <option value="9">9 أشهر</option>
                            <option value="12">سنة واحدة</option>
                            <option value="18">سنة ونصف</option>
                            <option value="24">سنتان</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">احسب النتائج</button>
            </form>
            
            <div id="fd-results" class="calculator-results" style="display: none;">
                <h4>نتائج الحساب</h4>
                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-label">المبلغ الافتتاحي:</span>
                        <span class="result-value" id="fd-initial-display">0.000 ر.ع</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">إجمالي الفوائد المكتسبة:</span>
                        <span class="result-value success" id="fd-interest-earned">0.000 ر.ع</span>
                    </div>
                    <div class="result-item highlight">
                        <span class="result-label">المبلغ النهائي:</span>
                        <span class="result-value" id="fd-final-amount">0.000 ر.ع</span>
                    </div>
                </div>
                
                <div class="early-break-section">
                    <h5>⚠️ في حالة كسر الوديعة قبل الاستحقاق:</h5>
                    <div class="warning-box">
                        <div class="result-item warning">
                            <span class="result-label">فائدة الكسر المبكر:</span>
                            <span class="result-value" id="fd-early-interest">0.000 ر.ع</span>
                        </div>
                        <div class="result-item warning">
                            <span class="result-label">المبلغ المستلم عند الكسر:</span>
                            <span class="result-value" id="fd-early-total">0.000 ر.ع</span>
                        </div>
                        <p class="note">⚠️ عند كسر الوديعة قبل الاستحقاق، ستحصل على فائدة الشهر الذي تم فيه الكسر فقط وتفقد باقي الفوائد المتراكمة.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create Call Deposit Calculator HTML
function createCallDepositCalculator() {
    return `
        <div class="calculator-form">
            <div class="calculator-description">
                <h4>الوديعة تحت الطلب</h4>
                <p>وديعة مرنة يمكن السحب منها في أي وقت مع إمكانية إضافة مبالغ شهرية.</p>
            </div>
            
            <form id="call-deposit-form" class="calc-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="cd-initial-amount">المبلغ الافتتاحي (ريال عماني)</label>
                        <input type="number" id="cd-initial-amount" min="50" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-interest-rate">معدل الفائدة السنوي (%)</label>
                        <input type="number" id="cd-interest-rate" min="0.01" max="15" step="0.01" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="cd-years">عدد السنوات</label>
                        <input type="number" id="cd-years" min="1" max="30" required>
                    </div>
                    <div class="form-group">
                        <label for="cd-monthly-addition">الإضافة الشهرية (اختياري)</label>
                        <input type="number" id="cd-monthly-addition" min="0" step="0.01">
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">احسب النتائج</button>
            </form>
            
            <div id="cd-results" class="calculator-results" style="display: none;">
                <h4>نتائج الحساب</h4>
                
                <div class="results-summary">
                    <div class="result-item">
                        <span class="result-label">المبلغ الافتتاحي مع الإضافات الشهرية:</span>
                        <span class="result-value" id="cd-initial-plus-additions">0.000 ر.ع</span>
                    </div>
                    <div class="result-item success">
                        <span class="result-label">إجمالي الفوائد الشهرية:</span>
                        <span class="result-value" id="cd-total-interest">0.000 ر.ع</span>
                    </div>
                    <div class="result-item highlight">
                        <span class="result-label">المبلغ النهائي:</span>
                        <span class="result-value" id="cd-final-amount">0.000 ر.ع</span>
                    </div>
                </div>
                
                <div class="monthly-breakdown">
                    <h5>التفصيل الشهري</h5>
                    <div class="table-container">
                        <table id="cd-monthly-table">
                            <thead>
                                <tr>
                                    <th>الشهر</th>
                                    <th>الإضافة الشهرية</th>
                                    <th>الفائدة الشهرية</th>
                                    <th>الرصيد التراكمي</th>
                                </tr>
                            </thead>
                            <tbody id="cd-table-body">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create Smart Savings Calculator HTML
function createSmartSavingsCalculator() {
    return `
        <div class="calculator-form">
            <div class="calculator-description">
                <h4>حساب التوفير الذكي</h4>
                <p>حساب توفير بفوائد تراكمية ذكية تزيد مع الوقت. يمكن إضافة مبالغ شهرية مع معدلات فائدة متدرجة.</p>
            </div>
            
            <form id="smart-savings-form" class="calc-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="ss-initial-amount">الرصيد الافتتاحي (ريال عماني)</label>
                        <input type="number" id="ss-initial-amount" min="100" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="ss-base-rate">معدل الفائدة الأساسي (%)</label>
                        <input type="number" id="ss-base-rate" min="0.5" max="10" step="0.1" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="ss-years">عدد السنوات</label>
                        <input type="number" id="ss-years" min="1" max="25" required>
                    </div>
                    <div class="form-group">
                        <label for="ss-monthly-addition">الإضافة الشهرية (اختياري)</label>
                        <input type="number" id="ss-monthly-addition" min="0" step="0.01">
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">احسب النتائج</button>
            </form>
            
            <div id="ss-results" class="calculator-results" style="display: none;">
                <h4>نتائج الحساب</h4>
                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-label">الرصيد الافتتاحي:</span>
                        <span class="result-value" id="ss-initial-display">0.000 ر.ع</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">إجمالي الإضافات:</span>
                        <span class="result-value" id="ss-additions-total">0.000 ر.ع</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">إجمالي الفوائد الذكية:</span>
                        <span class="result-value success" id="ss-smart-interest">0.000 ر.ع</span>
                    </div>
                    <div class="result-item highlight">
                        <span class="result-label">المبلغ النهائي:</span>
                        <span class="result-value" id="ss-final-amount">0.000 ر.ع</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create Personal Loan Calculator HTML
function createPersonalLoanCalculator() {
    return `
        <div class="calculator-form">
            <div class="calculator-description">
                <h4>القرض الشخصي</h4>
                <p>قرض شخصي لمدة تصل إلى 10 سنوات. يجب ألا يتجاوز القسط الشهري 60% من الراتب الشهري. سن التقاعد 60 سنة.</p>
                <div class="note">
                    <p><strong>ملاحظة:</strong> القسط المحسوب قد يكون أكثر بنسبة بسيطة وذلك بسبب عدم احتساب سعر التأمين.</p>
                </div>
            </div>
            
            <form id="personal-loan-form" class="calc-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="pl-amount">مبلغ القرض المطلوب (ريال عماني)</label>
                        <input type="number" id="pl-amount" min="1000" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="pl-interest-rate">معدل الفائدة السنوي (%)</label>
                        <input type="number" id="pl-interest-rate" min="0.5" max="25" step="0.01" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="pl-salary">الراتب الشهري (ريال عماني)</label>
                        <input type="number" id="pl-salary" min="300" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="pl-birthdate">تاريخ الميلاد</label>
                        <input type="date" id="pl-birthdate" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="pl-other-commitments">الالتزامات الأخرى الشهرية (ريال عماني)</label>
                        <input type="number" id="pl-other-commitments" min="0" step="0.01">
                    </div>
                    <div class="form-group">
                        <label for="pl-term">مدة القرض (سنوات)</label>
                        <select id="pl-term" required>
                            <option value="">اختر المدة</option>
                            <option value="1">سنة واحدة</option>
                            <option value="2">سنتان</option>
                            <option value="3">3 سنوات</option>
                            <option value="4">4 سنوات</option>
                            <option value="5">5 سنوات</option>
                            <option value="6">6 سنوات</option>
                            <option value="7">7 سنوات</option>
                            <option value="8">8 سنوات</option>
                            <option value="9">9 سنوات</option>
                            <option value="10">10 سنوات</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">احسب القرض</button>
            </form>
            
            <div id="pl-results" class="calculator-results" style="display: none;">
                <div id="pl-validation-message" class="validation-message" style="display: none;"></div>
                
                <h4>تفاصيل القرض</h4>
                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-label">مبلغ القرض:</span>
                        <span class="result-value" id="pl-loan-amount">0.000 ر.ع</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">القسط الشهري:</span>
                        <span class="result-value" id="pl-monthly-payment">0.000 ر.ع</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">إجمالي الفوائد:</span>
                        <span class="result-value" id="pl-total-interest">0.000 ر.ع</span>
                    </div>
                    <div class="result-item highlight">
                        <span class="result-label">إجمالي المبلغ المستحق:</span>
                        <span class="result-value" id="pl-total-amount">0.000 ر.ع</span>
                    </div>
                </div>
                
                <div class="amortization-schedule">
                    <h5>جدول الأقساط</h5>
                    <div class="table-container">
                        <table id="pl-amortization-table">
                            <thead>
                                <tr>
                                    <th>الشهر</th>
                                    <th>تاريخ الاستحقاق</th>
                                    <th>القسط</th>
                                    <th>الفائدة</th>
                                    <th>أصل المبلغ</th>
                                    <th>الرسوم</th>
                                    <th>المبلغ المتبقي</th>
                                </tr>
                            </thead>
                            <tbody id="pl-table-body">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create Home Loan Calculator HTML
function createHomeLoanCalculator() {
    return `
        <div class="calculator-form">
            <div class="calculator-description">
                <h4>القرض السكني</h4>
                <p>قرض سكني لمدة تصل إلى 25 سنة. يجب ألا يتجاوز القسط الشهري 60% من الراتب الشهري. سن التقاعد 60 سنة.</p>
                <div class="note">
                    <p><strong>ملاحظة:</strong> القسط المحسوب قد يكون أكثر بنسبة بسيطة وذلك بسبب عدم احتساب سعر التأمين.</p>
                </div>
            </div>
            
            <form id="home-loan-form" class="calc-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="hl-amount">مبلغ القرض المطلوب (ريال عماني)</label>
                        <input type="number" id="hl-amount" min="10000" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="hl-interest-rate">معدل الفائدة السنوي (%)</label>
                        <input type="number" id="hl-interest-rate" min="0.5" max="15" step="0.01" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="hl-salary">الراتب الشهري (ريال عماني)</label>
                        <input type="number" id="hl-salary" min="500" step="0.01" required>
                    </div>
                    <div class="form-group">
                        <label for="hl-birthdate">تاريخ الميلاد</label>
                        <input type="date" id="hl-birthdate" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="hl-other-commitments">الالتزامات الأخرى الشهرية (ريال عماني)</label>
                        <input type="number" id="hl-other-commitments" min="0" step="0.01">
                    </div>
                    <div class="form-group">
                        <label for="hl-term">مدة القرض (سنوات)</label>
                        <select id="hl-term" required>
                            <option value="">اختر المدة</option>
                            <option value="5">5 سنوات</option>
                            <option value="10">10 سنوات</option>
                            <option value="15">15 سنة</option>
                            <option value="20">20 سنة</option>
                            <option value="25">25 سنة</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">احسب القرض</button>
            </form>
            
            <div id="hl-results" class="calculator-results" style="display: none;">
                <div id="hl-validation-message" class="validation-message" style="display: none;"></div>
                
                <h4>تفاصيل القرض السكني</h4>
                <div class="results-grid">
                    <div class="result-item">
                        <span class="result-label">مبلغ القرض:</span>
                        <span class="result-value" id="hl-loan-amount">0.000 ر.ع</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">القسط الشهري:</span>
                        <span class="result-value" id="hl-monthly-payment">0.000 ر.ع</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">إجمالي الفوائد:</span>
                        <span class="result-value" id="hl-total-interest">0.000 ر.ع</span>
                    </div>
                    <div class="result-item highlight">
                        <span class="result-label">إجمالي المبلغ المستحق:</span>
                        <span class="result-value" id="hl-total-amount">0.000 ر.ع</span>
                    </div>
                </div>
                
                <div class="amortization-schedule">
                    <h5>جدول الأقساط</h5>
                    <div class="table-container">
                        <table id="hl-amortization-table">
                            <thead>
                                <tr>
                                    <th>الشهر</th>
                                    <th>تاريخ الاستحقاق</th>
                                    <th>القسط</th>
                                    <th>الفائدة</th>
                                    <th>أصل المبلغ</th>
                                    <th>الرسوم</th>
                                    <th>المبلغ المتبقي</th>
                                </tr>
                            </thead>
                            <tbody id="hl-table-body">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize calculator form functionality
function initializeCalculatorForm(type) {
    const form = document.querySelector(`#${type.replace('-', '-')}-form`);
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateResults(type);
        });
    }
}

// Calculate results based on calculator type
function calculateResults(type) {
    switch(type) {
        case 'fixed-deposit':
            calculateFixedDeposit();
            break;
        case 'call-deposit':
            calculateCallDeposit();
            break;
        case 'smart-savings':
            calculateSmartSavings();
            break;
        case 'personal-loan':
            calculatePersonalLoan();
            break;
        case 'home-loan':
            calculateHomeLoan();
            break;
    }
}

// Fixed Deposit Calculation
function calculateFixedDeposit() {
    const initialAmount = parseFloat(document.getElementById('fd-initial-amount').value);
    const interestRate = parseFloat(document.getElementById('fd-interest-rate').value) / 100;
    const termMonths = parseInt(document.getElementById('fd-term').value);
    
    if (!initialAmount || !interestRate || !termMonths) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // Calculate fixed deposit (no monthly additions allowed)
    const totalInterest = (initialAmount * interestRate * termMonths) / 12;
    const finalAmount = initialAmount + totalInterest;
    
    // Calculate early break interest (current month only)
    const monthlyInterest = (initialAmount * interestRate) / 12;
    const earlyBreakAmount = initialAmount + monthlyInterest;
    
    // Display results
    document.getElementById('fd-initial-display').textContent = formatCurrency(initialAmount);
    document.getElementById('fd-interest-earned').textContent = formatCurrency(totalInterest);
    document.getElementById('fd-final-amount').textContent = formatCurrency(finalAmount);
    document.getElementById('fd-early-interest').textContent = formatCurrency(monthlyInterest);
    document.getElementById('fd-early-total').textContent = formatCurrency(earlyBreakAmount);
    
    document.getElementById('fd-results').style.display = 'block';
}

// Call Deposit Calculation
function calculateCallDeposit() {
    const initialAmount = parseFloat(document.getElementById('cd-initial-amount').value);
    const interestRate = parseFloat(document.getElementById('cd-interest-rate').value) / 100;
    const years = parseInt(document.getElementById('cd-years').value);
    const monthlyAddition = parseFloat(document.getElementById('cd-monthly-addition').value) || 0;
    
    if (!initialAmount || !interestRate || !years) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const monthlyRate = interestRate / 12;
    const totalMonths = years * 12;
    let balance = initialAmount;
    let totalInterest = 0;
    let totalAdditions = monthlyAddition * (totalMonths - 1); // Additions start from month 2
    
    // Create monthly breakdown table
    const tableBody = document.getElementById('cd-table-body');
    tableBody.innerHTML = '';
    
    for (let month = 1; month <= totalMonths; month++) {
        // Interest calculated on current balance
        const monthlyInterest = balance * monthlyRate;
        totalInterest += monthlyInterest;
        
        // Add monthly addition from month 2 onwards
        const addition = month === 1 ? 0 : monthlyAddition;
        balance += monthlyInterest + addition;
        
        // Add row to table
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${month}</td>
            <td>${formatCurrency(addition)}</td>
            <td>${formatCurrency(monthlyInterest)}</td>
            <td>${formatCurrency(balance)}</td>
        `;
    }
    
    // Display summary results
    const totalPrincipal = initialAmount + totalAdditions;
    document.getElementById('cd-initial-plus-additions').textContent = formatCurrency(totalPrincipal);
    document.getElementById('cd-total-interest').textContent = formatCurrency(totalInterest);
    document.getElementById('cd-final-amount').textContent = formatCurrency(balance);
    
    document.getElementById('cd-results').style.display = 'block';
}

// Smart Savings Calculation
function calculateSmartSavings() {
    const initialAmount = parseFloat(document.getElementById('ss-initial-amount').value);
    const baseRate = parseFloat(document.getElementById('ss-base-rate').value) / 100;
    const years = parseInt(document.getElementById('ss-years').value);
    const monthlyAddition = parseFloat(document.getElementById('ss-monthly-addition').value) || 0;
    
    let balance = initialAmount;
    let totalInterest = 0;
    let totalAdditions = monthlyAddition * years * 12;
    
    // Smart savings with increasing rates over time
    for (let year = 1; year <= years; year++) {
        const yearlyRate = baseRate + (year - 1) * 0.001; // Increase rate by 0.1% each year
        const monthlyRate = yearlyRate / 12;
        
        for (let month = 1; month <= 12; month++) {
            const monthlyInterest = balance * monthlyRate;
            totalInterest += monthlyInterest;
            balance += monthlyInterest + monthlyAddition;
        }
    }
    
    // Display results
    document.getElementById('ss-initial-display').textContent = formatCurrency(initialAmount);
    document.getElementById('ss-additions-total').textContent = formatCurrency(totalAdditions);
    document.getElementById('ss-smart-interest').textContent = formatCurrency(totalInterest);
    document.getElementById('ss-final-amount').textContent = formatCurrency(balance);
    
    document.getElementById('ss-results').style.display = 'block';
}

// Personal Loan Calculation
function calculatePersonalLoan() {
    const loanAmount = parseFloat(document.getElementById('pl-amount').value);
    const annualRate = parseFloat(document.getElementById('pl-interest-rate').value) / 100;
    const salary = parseFloat(document.getElementById('pl-salary').value);
    const birthdate = document.getElementById('pl-birthdate').value;
    const otherCommitments = parseFloat(document.getElementById('pl-other-commitments').value) || 0;
    const termYears = parseInt(document.getElementById('pl-term').value);
    
    if (!loanAmount || !annualRate || !salary || !birthdate || !termYears) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // Calculate age from birthdate
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    // Validation - minimum interest rate 0.5%
    if (annualRate < 0.005) {
        showValidationMessage('pl', 'معدل الفائدة يجب أن يكون 0.5% على الأقل');
        return;
    }
    
    // Calculate maximum allowed term based on age
    const maxAllowedYears = Math.min(60 - age, 10); // Max 10 years or until retirement at 60
    if (termYears > maxAllowedYears) {
        showValidationMessage('pl', `المدة المطلوبة تتجاوز الحد الأقصى المسموح (${maxAllowedYears} سنوات حتى سن التقاعد). يرجى تقليل المدة.`);
        return;
    }
    
    const monthlyRate = annualRate / 12;
    const totalMonths = termYears * 12;
    
    // Calculate monthly payment using loan formula
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                          (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    // Check salary constraint (60% max)
    const maxAllowedPayment = salary * 0.6 - otherCommitments;
    if (monthlyPayment > maxAllowedPayment) {
        showValidationMessage('pl', `⚠️ تحذير: القسط الشهري (${formatCurrency(monthlyPayment)}) يتجاوز 60% من الراتب المتاح (${formatCurrency(maxAllowedPayment)}). يرجى تقليل مبلغ القرض أو زيادة المدة.`);
        return;
    }
    
    const totalAmount = monthlyPayment * totalMonths;
    const totalInterest = totalAmount - loanAmount;
    
    // Display results
    document.getElementById('pl-loan-amount').textContent = formatCurrency(loanAmount);
    document.getElementById('pl-monthly-payment').textContent = formatCurrency(monthlyPayment);
    document.getElementById('pl-total-interest').textContent = formatCurrency(totalInterest);
    document.getElementById('pl-total-amount').textContent = formatCurrency(totalAmount);
    
    // Generate amortization schedule
    generateAmortizationSchedule('pl', loanAmount, monthlyPayment, monthlyRate, totalMonths);
    
    document.getElementById('pl-validation-message').style.display = 'none';
    document.getElementById('pl-results').style.display = 'block';
}

// Home Loan Calculation
function calculateHomeLoan() {
    const loanAmount = parseFloat(document.getElementById('hl-amount').value);
    const annualRate = parseFloat(document.getElementById('hl-interest-rate').value) / 100;
    const salary = parseFloat(document.getElementById('hl-salary').value);
    const birthdate = document.getElementById('hl-birthdate').value;
    const otherCommitments = parseFloat(document.getElementById('hl-other-commitments').value) || 0;
    const termYears = parseInt(document.getElementById('hl-term').value);
    
    if (!loanAmount || !annualRate || !salary || !birthdate || !termYears) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    // Calculate age from birthdate
    const today = new Date();
    const birth = new Date(birthdate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    
    // Validation - minimum interest rate 0.5%
    if (annualRate < 0.005) {
        showValidationMessage('hl', 'معدل الفائدة يجب أن يكون 0.5% على الأقل');
        return;
    }
    
    // Calculate maximum allowed term based on age
    const maxAllowedYears = Math.min(60 - age, 25); // Max 25 years or until retirement at 60
    if (termYears > maxAllowedYears) {
        showValidationMessage('hl', `المدة المطلوبة تتجاوز الحد الأقصى المسموح (${maxAllowedYears} سنة حتى سن التقاعد). يرجى تقليل المدة.`);
        return;
    }
    
    const monthlyRate = annualRate / 12;
    const totalMonths = termYears * 12;
    
    // Calculate monthly payment using loan formula
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                          (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    // Check salary constraint (60% max)
    const maxAllowedPayment = salary * 0.6 - otherCommitments;
    if (monthlyPayment > maxAllowedPayment) {
        showValidationMessage('hl', `⚠️ تحذير: القسط الشهري (${formatCurrency(monthlyPayment)}) يتجاوز 60% من الراتب المتاح (${formatCurrency(maxAllowedPayment)}). يرجى تقليل مبلغ القرض أو زيادة المدة.`);
        return;
    }
    
    const totalAmount = monthlyPayment * totalMonths;
    const totalInterest = totalAmount - loanAmount;
    
    // Display results
    document.getElementById('hl-loan-amount').textContent = formatCurrency(loanAmount);
    document.getElementById('hl-monthly-payment').textContent = formatCurrency(monthlyPayment);
    document.getElementById('hl-total-interest').textContent = formatCurrency(totalInterest);
    document.getElementById('hl-total-amount').textContent = formatCurrency(totalAmount);
    
    // Generate amortization schedule
    generateAmortizationSchedule('hl', loanAmount, monthlyPayment, monthlyRate, totalMonths);
    
    document.getElementById('hl-validation-message').style.display = 'none';
    document.getElementById('hl-results').style.display = 'block';
}

// Generate Amortization Schedule
function generateAmortizationSchedule(prefix, loanAmount, monthlyPayment, monthlyRate, totalMonths) {
    const tableBody = document.getElementById(`${prefix}-table-body`);
    tableBody.innerHTML = '';
    
    let remainingBalance = loanAmount;
    const currentDate = new Date();
    
    for (let month = 1; month <= totalMonths; month++) {
        const interestPayment = remainingBalance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        const charges = monthlyPayment * 0.01; // 1% processing fee
        remainingBalance -= principalPayment;
        
        // Calculate due date (first day of each month)
        const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + month, 1);
        const dueDateString = dueDate.toLocaleDateString('ar-OM');
        
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${month}</td>
            <td>${dueDateString}</td>
            <td>${formatCurrency(monthlyPayment)}</td>
            <td>${formatCurrency(interestPayment)}</td>
            <td>${formatCurrency(principalPayment)}</td>
            <td>${formatCurrency(charges)}</td>
            <td>${formatCurrency(Math.max(0, remainingBalance))}</td>
        `;
    }
}

// Show validation message
function showValidationMessage(prefix, message) {
    const messageElement = document.getElementById(`${prefix}-validation-message`);
    messageElement.textContent = message;
    messageElement.style.display = 'block';
    messageElement.className = 'validation-message error';
    document.getElementById(`${prefix}-results`).style.display = 'none';
}

// Format currency in Omani Rial
function formatCurrency(amount) {
    return new Intl.NumberFormat('ar-OM', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    }).format(amount) + ' ر.ع';
}

// Modal functionality
function initializeModal() {
    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.calculator-card, .education-card, .dashboard-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && message) {
                alert('شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
                this.reset();
            } else {
                alert('يرجى ملء جميع الحقول المطلوبة.');
            }
        });
    }
});

// Add CSS for calculator forms
const calculatorCSS = `
<style>
.calculator-form {
    max-width: 100%;
}

.calculator-description {
    background: var(--cream);
    padding: var(--spacing-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--spacing-lg);
}

.calculator-description h4 {
    color: var(--primary-teal);
    margin-bottom: var(--spacing-sm);
}

.calc-form {
    margin-bottom: var(--spacing-lg);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-md);
}

.calculator-results {
    background: var(--light-gray);
    padding: var(--spacing-lg);
    border-radius: var(--radius-md);
    margin-top: var(--spacing-lg);
}

.results-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.results-summary {
    display: flex;
    justify-content: space-around;
    margin-bottom: var(--spacing-lg);
}

.result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-sm);
    background: var(--pure-white);
    border-radius: var(--radius-sm);
    border-left: 4px solid var(--light-border);
}

.result-item.highlight {
    border-left-color: var(--soft-gold);
    font-weight: 600;
}

.result-item.success .result-value {
    color: var(--success-green);
}

.result-label {
    font-weight: 500;
    color: var(--dark-gray);
}

.result-value {
    font-family: var(--font-mono);
    font-weight: 600;
    color: var(--primary-teal);
}

.table-container {
    overflow-x: auto;
    margin-top: var(--spacing-md);
}

.table-container table {
    width: 100%;
    border-collapse: collapse;
    background: var(--pure-white);
    border-radius: var(--radius-sm);
    overflow: hidden;
}

.table-container th,
.table-container td {
    padding: var(--spacing-sm);
    text-align: center;
    border-bottom: 1px solid var(--light-border);
}

.table-container th {
    background: var(--primary-teal);
    color: var(--pure-white);
    font-weight: 600;
}

.table-container tr:nth-child(even) {
    background: var(--light-gray);
}

.validation-message {
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    margin-bottom: var(--spacing-md);
    font-weight: 500;
}

.validation-message.error {
    background: #ffebee;
    color: #d32f2f;
    border: 2px solid #f44336;
    box-shadow: 0 2px 8px rgba(244, 67, 54, 0.2);
}

.monthly-breakdown h5,
.amortization-schedule h5 {
    color: var(--primary-teal);
    margin-bottom: var(--spacing-md);
}

@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .results-grid {
        grid-template-columns: 1fr;
    }
    
    .results-summary {
        flex-direction: column;
        gap: var(--spacing-md);
    }
}
</style>
`;

// Inject calculator CSS
document.head.insertAdjacentHTML('beforeend', calculatorCSS);


// Initialize quotes rotation
function initializeQuotes() {
    if (typeof financialQuotes === 'undefined') return;
    
    const quoteElement = document.querySelector('.hero-quote blockquote');
    const authorElement = document.querySelector('.hero-quote cite');
    
    if (!quoteElement || !authorElement) return;
    
    let currentQuoteIndex = 0;
    
    function rotateQuote() {
        const quote = financialQuotes[currentQuoteIndex];
        quoteElement.textContent = `"${quote.quote}"`;
        authorElement.textContent = `- ${quote.author}`;
        
        currentQuoteIndex = (currentQuoteIndex + 1) % financialQuotes.length;
    }
    
    // Set initial quote
    rotateQuote();
    
    // Rotate quotes every 10 seconds
    setInterval(rotateQuote, 10000);
}

// Enhanced education section initialization
function initializeEducation() {
    if (typeof educationalContent === 'undefined') return;
    
    const educationCards = document.querySelectorAll('.education-card');
    
    educationCards.forEach(card => {
        card.addEventListener('click', function() {
            const topic = this.getAttribute('data-topic');
            if (educationalContent[topic]) {
                showEducationalContent(educationalContent[topic]);
            }
        });
    });
}

// Show educational content in modal
function showEducationalContent(content) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content education-modal">
            <div class="modal-header">
                <h2>${content.title}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p class="education-description">${content.description}</p>
                <div class="education-content">${content.content}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculators();
    initializeEducation();
    initializeQuotes();
    initializeContactForm();
    updateMarketData();
    
    // Update market data every 30 seconds
    setInterval(updateMarketData, 30000);
});



// Investment Dashboard Functionality
function initializeInvestmentDashboard() {
    const investmentCards = document.querySelectorAll('.interactive-card');
    
    investmentCards.forEach(card => {
        const viewDetailsBtn = card.querySelector('.view-details-btn');
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', function() {
                const investmentType = card.getAttribute('data-investment');
                showInvestmentDetails(investmentType);
            });
        }
    });
}

// Show detailed investment information
function showInvestmentDetails(type) {
    const modal = document.getElementById('investment-modal') || createInvestmentModal();
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');
    
    const investmentData = getInvestmentData(type);
    modalTitle.textContent = investmentData.title;
    modalBody.innerHTML = investmentData.content;
    modal.style.display = 'block';
    
    // Initialize chart after modal is shown
    setTimeout(() => {
        createInvestmentChart(type);
    }, 100);
}

// Get investment data based on type
function getInvestmentData(type) {
    const data = {
        'crypto': {
            title: 'العملات الرقمية - تحليل مفصل',
            content: `
                <div class="investment-details">
                    <div class="investment-overview">
                        <h4>نظرة عامة على السوق</h4>
                        <p>سوق العملات الرقمية يشهد نمواً متقلباً مع اتجاه صاعد عام. البيتكوين والإيثيريوم يقودان السوق.</p>
                    </div>
                    
                    <div class="crypto-detailed-list">
                        <div class="crypto-detail-item" data-crypto="bitcoin">
                            <div class="crypto-header">
                                <h5>Bitcoin (BTC)</h5>
                                <span class="crypto-price-large">$43,250</span>
                                <span class="crypto-change-large positive">+2.5%</span>
                            </div>
                            <div class="crypto-info-grid">
                                <div class="info-item">
                                    <span class="label">القيمة السوقية:</span>
                                    <span class="value">$847 مليار</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">حجم التداول (24س):</span>
                                    <span class="value">$28.5 مليار</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">أعلى سعر (52 أسبوع):</span>
                                    <span class="value">$73,750</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">أقل سعر (52 أسبوع):</span>
                                    <span class="value">$15,460</span>
                                </div>
                            </div>
                            <div class="crypto-description">
                                <h6>نبذة عن البيتكوين:</h6>
                                <p>البيتكوين هو أول عملة رقمية لامركزية، تم إنشاؤها في 2009 من قبل ساتوشي ناكاموتو. يُعتبر "الذهب الرقمي" ومخزن للقيمة. العدد الأقصى محدود بـ 21 مليون عملة، مما يجعله نادراً ومقاوماً للتضخم.</p>
                            </div>
                            <button class="view-chart-btn" data-asset="BTC">عرض الرسم البياني</button>
                        </div>
                        
                        <div class="crypto-detail-item" data-crypto="ethereum">
                            <div class="crypto-header">
                                <h5>Ethereum (ETH)</h5>
                                <span class="crypto-price-large">$2,680</span>
                                <span class="crypto-change-large positive">+1.8%</span>
                            </div>
                            <div class="crypto-info-grid">
                                <div class="info-item">
                                    <span class="label">القيمة السوقية:</span>
                                    <span class="value">$322 مليار</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">حجم التداول (24س):</span>
                                    <span class="value">$15.2 مليار</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">أعلى سعر (52 أسبوع):</span>
                                    <span class="value">$4,891</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">أقل سعر (52 أسبوع):</span>
                                    <span class="value">$896</span>
                                </div>
                            </div>
                            <div class="crypto-description">
                                <h6>نبذة عن الإيثيريوم:</h6>
                                <p>الإيثيريوم هو منصة لامركزية تدعم العقود الذكية والتطبيقات اللامركزية (DApps). تم إطلاقه في 2015 من قبل فيتاليك بوتيرين. يُستخدم في التمويل اللامركزي (DeFi) والرموز غير القابلة للاستبدال (NFTs).</p>
                            </div>
                            <button class="view-chart-btn" data-asset="ETH">عرض الرسم البياني</button>
                        </div>
                    </div>
                    
                    <div class="market-chart-container">
                        <h4>الرسم البياني للسوق</h4>
                        <canvas id="crypto-chart" width="600" height="300"></canvas>
                    </div>
                    
                    <div class="investment-tips">
                        <h4>نصائح للاستثمار في العملات الرقمية:</h4>
                        <ul>
                            <li>ابدأ بمبلغ صغير يمكنك تحمل خسارته</li>
                            <li>تعلم عن التكنولوجيا قبل الاستثمار</li>
                            <li>نوع محفظتك ولا تستثمر في عملة واحدة فقط</li>
                            <li>استخدم منصات موثوقة ومرخصة</li>
                            <li>احتفظ بعملاتك في محفظة آمنة</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'global-stocks': {
            title: 'الأسهم العالمية - تحليل مفصل',
            content: `
                <div class="investment-details">
                    <div class="investment-overview">
                        <h4>نظرة عامة على الأسواق العالمية</h4>
                        <p>الأسواق العالمية تظهر أداءً متباينً مع تركز القوة في أسهم التكنولوجيا الأمريكية.</p>
                    </div>
                    
                    <div class="stock-detailed-list">
                        <div class="stock-detail-item" data-stock="apple">
                            <div class="stock-header">
                                <h5>Apple Inc. (AAPL)</h5>
                                <span class="stock-price-large">$195.50</span>
                                <span class="stock-change-large positive">+1.2%</span>
                            </div>
                            <div class="stock-info-grid">
                                <div class="info-item">
                                    <span class="label">القيمة السوقية:</span>
                                    <span class="value">$3.02 تريليون</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">نسبة السعر للأرباح:</span>
                                    <span class="value">29.8</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">عائد الأرباح:</span>
                                    <span class="value">0.44%</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">ربحية السهم:</span>
                                    <span class="value">$6.56</span>
                                </div>
                            </div>
                            <div class="stock-description">
                                <h6>نبذة عن شركة آبل:</h6>
                                <p>آبل هي شركة تكنولوجيا أمريكية متعددة الجنسيات تصمم وتطور وتبيع الإلكترونيات الاستهلاكية وبرامج الكمبيوتر والخدمات عبر الإنترنت. تشتهر بمنتجات iPhone و iPad و Mac.</p>
                            </div>
                            <button class="view-chart-btn" data-asset="AAPL">عرض الرسم البياني</button>
                        </div>
                        
                        <div class="stock-detail-item" data-stock="microsoft">
                            <div class="stock-header">
                                <h5>Microsoft Corporation (MSFT)</h5>
                                <span class="stock-price-large">$378.20</span>
                                <span class="stock-change-large positive">+0.8%</span>
                            </div>
                            <div class="stock-info-grid">
                                <div class="info-item">
                                    <span class="label">القيمة السوقية:</span>
                                    <span class="value">$2.81 تريليون</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">نسبة السعر للأرباح:</span>
                                    <span class="value">34.2</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">عائد الأرباح:</span>
                                    <span class="value">0.68%</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">ربحية السهم:</span>
                                    <span class="value">$11.05</span>
                                </div>
                            </div>
                            <div class="stock-description">
                                <h6>نبذة عن شركة مايكروسوفت:</h6>
                                <p>مايكروسوفت هي شركة تكنولوجيا أمريكية تطور وتصنع وترخص وتدعم وتبيع برامج الكمبيوتر والخدمات والأجهزة. تشتهر بنظام Windows و Office و Azure Cloud.</p>
                            </div>
                            <button class="view-chart-btn" data-asset="MSFT">عرض الرسم البياني</button>
                        </div>
                    </div>
                    
                    <div class="market-chart-container">
                        <h4>الرسم البياني للسوق</h4>
                        <canvas id="stocks-chart" width="600" height="300"></canvas>
                    </div>
                    
                    <div class="investment-tips">
                        <h4>نصائح للاستثمار في الأسهم:</h4>
                        <ul>
                            <li>ادرس الشركة وقطاعها قبل الاستثمار</li>
                            <li>نوع محفظتك عبر قطاعات مختلفة</li>
                            <li>فكر على المدى الطويل (5-10 سنوات)</li>
                            <li>لا تستثمر أكثر مما تستطيع خسارته</li>
                            <li>راجع استثماراتك دورياً</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'local-stocks': {
            title: 'الأسهم المحلية - بورصة مسقط',
            content: `
                <div class="investment-details">
                    <div class="investment-overview">
                        <h4>نظرة عامة على بورصة مسقط</h4>
                        <p>بورصة مسقط تشهد نمواً مستقراً مدعوماً بالإصلاحات الاقتصادية وتنويع مصادر الدخل في السلطنة.</p>
                    </div>
                    
                    <div class="stock-detailed-list">
                        <div class="stock-detail-item" data-stock="bank-muscat">
                            <div class="stock-header">
                                <h5>بنك مسقط (BKMB)</h5>
                                <span class="stock-price-large">0.425 ر.ع</span>
                                <span class="stock-change-large positive">+1.5%</span>
                            </div>
                            <div class="stock-info-grid">
                                <div class="info-item">
                                    <span class="label">القيمة السوقية:</span>
                                    <span class="value">1.2 مليار ر.ع</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">نسبة السعر للأرباح:</span>
                                    <span class="value">12.5</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">عائد الأرباح:</span>
                                    <span class="value">4.2%</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">ربحية السهم:</span>
                                    <span class="value">0.034 ر.ع</span>
                                </div>
                            </div>
                            <div class="stock-description">
                                <h6>نبذة عن بنك مسقط:</h6>
                                <p>بنك مسقط هو أكبر بنك في سلطنة عمان من حيث الأصول وشبكة الفروع. يقدم خدمات مصرفية شاملة للأفراد والشركات ويلعب دوراً مهماً في التنمية الاقتصادية للسلطنة.</p>
                            </div>
                            <button class="view-chart-btn" data-asset="BKMB">عرض الرسم البياني</button>
                        </div>
                        
                        <div class="stock-detail-item" data-stock="oman-oil">
                            <div class="stock-header">
                                <h5>شركة النفط العمانية (OOIL)</h5>
                                <span class="stock-price-large">0.380 ر.ع</span>
                                <span class="stock-change-large positive">+0.7%</span>
                            </div>
                            <div class="stock-info-grid">
                                <div class="info-item">
                                    <span class="label">القيمة السوقية:</span>
                                    <span class="value">950 مليون ر.ع</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">نسبة السعر للأرباح:</span>
                                    <span class="value">15.2</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">عائد الأرباح:</span>
                                    <span class="value">3.8%</span>
                                </div>
                                <div class="info-item">
                                    <span class="label">ربحية السهم:</span>
                                    <span class="value">0.025 ر.ع</span>
                                </div>
                            </div>
                            <div class="stock-description">
                                <h6>نبذة عن شركة النفط العمانية:</h6>
                                <p>شركة النفط العمانية هي شركة رائدة في قطاع الطاقة في السلطنة، تعمل في مجالات استكشاف وإنتاج النفط والغاز. تساهم بشكل كبير في الاقتصاد العماني.</p>
                            </div>
                            <button class="view-chart-btn" data-asset="OOIL">عرض الرسم البياني</button>
                        </div>
                    </div>
                    
                    <div class="market-chart-container">
                        <h4>الرسم البياني للسوق</h4>
                        <canvas id="local-stocks-chart" width="600" height="300"></canvas>
                    </div>
                    
                    <div class="investment-tips">
                        <h4>نصائح للاستثمار في الأسهم المحلية:</h4>
                        <ul>
                            <li>تابع الأخبار الاقتصادية المحلية</li>
                            <li>ادرس القطاعات الواعدة في السلطنة</li>
                            <li>استفد من معرفتك بالسوق المحلي</li>
                            <li>راقب السياسات الحكومية والإصلاحات</li>
                            <li>نوع بين القطاعات المختلفة</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };
    
    return data[type] || { title: 'معلومات الاستثمار', content: '<p>قريباً...</p>' };
}

// Create investment modal
function createInvestmentModal() {
    const modal = document.createElement('div');
    modal.id = 'investment-modal';
    modal.className = 'modal investment-modal';
    modal.innerHTML = `
        <div class="modal-content investment-modal-content">
            <div class="modal-header">
                <h2 class="modal-title"></h2>
                <span class="close investment-close">&times;</span>
            </div>
            <div class="modal-body"></div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close functionality
    const closeBtn = modal.querySelector('.investment-close');
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

// Create investment chart
function createInvestmentChart(type) {
    const canvas = document.querySelector(`#${type === 'crypto' ? 'crypto' : type === 'global-stocks' ? 'stocks' : 'local-stocks'}-chart`);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Sample data for demonstration
    const data = generateSampleChartData(type);
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw chart
    drawLineChart(ctx, data, canvas.width, canvas.height);
}

// Generate sample chart data
function generateSampleChartData(type) {
    const basePrice = type === 'crypto' ? 40000 : type === 'global-stocks' ? 180 : 0.4;
    const volatility = type === 'crypto' ? 0.05 : 0.02;
    
    const data = [];
    let price = basePrice;
    
    for (let i = 0; i < 30; i++) {
        const change = (Math.random() - 0.5) * volatility;
        price = price * (1 + change);
        data.push({
            date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000),
            price: price
        });
    }
    
    return data;
}

// Draw line chart
function drawLineChart(ctx, data, width, height) {
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    // Find min and max prices
    const prices = data.map(d => d.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    
    // Draw axes
    ctx.strokeStyle = '#ddd';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Draw price line
    ctx.strokeStyle = '#2E8B57';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((point, index) => {
        const x = padding + (index / (data.length - 1)) * chartWidth;
        const y = height - padding - ((point.price - minPrice) / priceRange) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw price labels
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    
    for (let i = 0; i <= 5; i++) {
        const price = minPrice + (priceRange * i / 5);
        const y = height - padding - (i / 5) * chartHeight;
        ctx.fillText(price.toFixed(2), padding - 5, y + 4);
    }
}

// Initialize investment dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeInvestmentDashboard();
});


// Contact Form Functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmission();
        });
    }
}

// Handle contact form submission
function handleContactFormSubmission() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Store message locally (in real implementation, this would be sent to a server)
    storeContactMessage(formData);
    
    // Send email (simulation - in real implementation, this would use a backend service)
    sendEmailNotification(formData);
    
    // Show success message
    showContactSuccessMessage();
    
    // Reset form
    document.getElementById('contact-form').reset();
}

// Store contact message locally
function storeContactMessage(messageData) {
    let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.unshift(messageData);
    localStorage.setItem('contactMessages', JSON.stringify(messages));
}

// Send email notification (simulation)
function sendEmailNotification(formData) {
    // In a real implementation, this would make an API call to a backend service
    // that sends an email to m91.qoot@gmail.com
    console.log('Email would be sent to m91.qoot@gmail.com with:', formData);
    
    // For demonstration, we'll create a mailto link
    const subject = encodeURIComponent(`رسالة جديدة من موقع غوازيك: ${formData.subject}`);
    const body = encodeURIComponent(`
الاسم: ${formData.name}
البريد الإلكتروني: ${formData.email}
رقم الهاتف: ${formData.phone || 'غير محدد'}
الموضوع: ${formData.subject}

الرسالة:
${formData.message}

تم الإرسال في: ${new Date(formData.timestamp).toLocaleString('ar-OM')}
    `);
    
    // Open email client (optional - for demonstration)
    // window.open(`mailto:m91.qoot@gmail.com?subject=${subject}&body=${body}`);
}

// Show contact success message
function showContactSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h4>تم إرسال الرسالة بنجاح!</h4>
            <p>شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.</p>
            <button onclick="this.parentElement.parentElement.remove()" class="btn btn-primary">موافق</button>
        </div>
    `;
    
    document.body.appendChild(successMessage);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (successMessage.parentElement) {
            successMessage.remove();
        }
    }, 5000);
}

// Admin Panel Functionality
function initializeAdminPanel() {
    // Add admin access link (hidden)
    document.addEventListener('keydown', function(e) {
        // Press Ctrl+Shift+A to access admin panel
        if (e.ctrlKey && e.shiftKey && e.key === 'A') {
            toggleAdminPanel();
        }
    });
    
    // Initialize admin login
    const adminLoginForm = document.getElementById('admin-login-form');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAdminLogin();
        });
    }
    
    // Initialize admin tabs
    const adminTabs = document.querySelectorAll('.admin-tab');
    adminTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            switchAdminTab(this.getAttribute('data-tab'));
        });
    });
}

// Toggle admin panel visibility
function toggleAdminPanel() {
    const adminPanel = document.getElementById('admin-panel');
    if (adminPanel.style.display === 'none') {
        adminPanel.style.display = 'block';
        adminPanel.scrollIntoView({ behavior: 'smooth' });
    } else {
        adminPanel.style.display = 'none';
    }
}

// Handle admin login
function handleAdminLogin() {
    const password = document.getElementById('admin-password').value;
    
    // Simple password check (in real implementation, this would be more secure)
    if (password === 'ghawazik2024') {
        document.getElementById('admin-login').style.display = 'none';
        document.getElementById('admin-dashboard').style.display = 'block';
        loadAdminData();
    } else {
        alert('كلمة المرور غير صحيحة');
    }
}

// Switch admin tabs
function switchAdminTab(tabName) {
    // Update tab buttons
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Load specific tab data
    if (tabName === 'messages') {
        loadContactMessages();
    }
}

// Load admin data
function loadAdminData() {
    loadContactMessages();
}

// Load contact messages
function loadContactMessages() {
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const messagesList = document.getElementById('messages-list');
    
    if (messages.length === 0) {
        messagesList.innerHTML = '<p>لا توجد رسائل جديدة</p>';
        return;
    }
    
    messagesList.innerHTML = messages.map(message => `
        <div class="message-item">
            <div class="message-header">
                <h5>${message.name}</h5>
                <span class="message-date">${new Date(message.timestamp).toLocaleString('ar-OM')}</span>
            </div>
            <div class="message-details">
                <p><strong>البريد:</strong> ${message.email}</p>
                <p><strong>الهاتف:</strong> ${message.phone || 'غير محدد'}</p>
                <p><strong>الموضوع:</strong> ${message.subject}</p>
                <p><strong>الرسالة:</strong> ${message.message}</p>
            </div>
            <div class="message-actions">
                <button class="btn btn-small" onclick="replyToMessage('${message.email}', '${message.subject}')">رد</button>
                <button class="btn btn-small btn-danger" onclick="deleteMessage('${message.timestamp}')">حذف</button>
            </div>
        </div>
    `).join('');
}

// Reply to message
function replyToMessage(email, subject) {
    const replySubject = encodeURIComponent(`رد على: ${subject}`);
    window.open(`mailto:${email}?subject=${replySubject}`);
}

// Delete message
function deleteMessage(timestamp) {
    if (confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
        let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
        messages = messages.filter(msg => msg.timestamp !== timestamp);
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        loadContactMessages();
    }
}

// Add quote function
function addQuote() {
    const quoteText = document.getElementById('quote-text').value;
    const quoteAuthor = document.getElementById('quote-author').value;
    
    if (!quoteText || !quoteAuthor) {
        alert('يرجى ملء جميع الحقول');
        return;
    }
    
    // In a real implementation, this would save to a database
    alert('تم إضافة الاقتباس بنجاح');
    document.getElementById('quote-text').value = '';
    document.getElementById('quote-author').value = '';
}

// Save settings function
function saveSettings() {
    const siteTitle = document.getElementById('site-title').value;
    const contactEmail = document.getElementById('contact-email').value;
    
    // In a real implementation, this would save to a database
    localStorage.setItem('siteSettings', JSON.stringify({
        title: siteTitle,
        email: contactEmail
    }));
    
    alert('تم حفظ الإعدادات بنجاح');
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeAdminPanel();
});


// Enhanced Investment Dashboard Functions

// Initialize investment dashboard
function initializeInvestmentDashboard() {
    const investmentCards = document.querySelectorAll('.interactive-card[data-investment]');
    
    investmentCards.forEach(card => {
        const viewDetailsBtn = card.querySelector('.view-details-btn');
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', function() {
                const investmentType = card.getAttribute('data-investment');
                showInvestmentDetails(investmentType);
            });
        }
    });
}

// Show investment details in modal
function showInvestmentDetails(type) {
    let data, title;
    
    switch(type) {
        case 'crypto':
            data = window.investmentData.topCryptocurrencies;
            title = 'أقوى 20 عملة رقمية';
            break;
        case 'global-stocks':
            data = window.investmentData.topGlobalStocks;
            title = 'أقوى 20 سهم عالمي';
            break;
        case 'local-stocks':
            data = window.investmentData.topLocalStocks;
            title = 'أقوى 20 سهم محلي (مسقط)';
            break;
        default:
            return;
    }
    
    const modalContent = createInvestmentDetailsModal(data, title, type);
    
    // Show modal
    const modal = document.getElementById('calculator-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContentDiv = document.getElementById('modal-content');
    
    modalTitle.textContent = title;
    modalContentDiv.innerHTML = modalContent;
    modal.style.display = 'block';
    
    // Initialize individual investment click handlers
    initializeInvestmentItemHandlers(type);
}

// Create investment details modal content
function createInvestmentDetailsModal(data, title, type) {
    const currencySymbol = type === 'local-stocks' ? 'ر.ع' : '$';
    
    let content = `
        <div class="investment-details-container">
            <div class="investment-grid">
    `;
    
    data.forEach((item, index) => {
        const changeClass = item.change >= 0 ? 'positive' : 'negative';
        const changeSymbol = item.change >= 0 ? '+' : '';
        
        content += `
            <div class="investment-item" data-symbol="${item.symbol}" data-type="${type}">
                <div class="investment-rank">${index + 1}</div>
                <div class="investment-info">
                    <div class="investment-header">
                        <span class="investment-symbol">${item.symbol}</span>
                        <span class="investment-price">${window.investmentData.formatInvestmentCurrency(item.price, type)}</span>
                    </div>
                    <div class="investment-name">${item.name}</div>
                    <div class="investment-stats">
                        <span class="investment-change ${changeClass}">${changeSymbol}${item.change}%</span>
                        <span class="investment-volume">الحجم: ${formatVolume(item.volume)}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    content += `
            </div>
            <div class="investment-note">
                <p>💡 انقر على أي استثمار لعرض التفاصيل الكاملة والرسم البياني</p>
            </div>
        </div>
    `;
    
    return content;
}

// Initialize individual investment item handlers
function initializeInvestmentItemHandlers(type) {
    const investmentItems = document.querySelectorAll('.investment-item');
    
    investmentItems.forEach(item => {
        item.addEventListener('click', function() {
            const symbol = this.getAttribute('data-symbol');
            const investmentType = this.getAttribute('data-type');
            showIndividualInvestmentDetails(investmentType, symbol);
        });
    });
}

// Show individual investment details with chart
function showIndividualInvestmentDetails(type, symbol) {
    const details = window.investmentData.getInvestmentDetails(type, symbol);
    
    if (!details) {
        alert('لا توجد تفاصيل متاحة لهذا الاستثمار');
        return;
    }
    
    const modalContent = createIndividualInvestmentModal(details, type);
    
    // Show modal
    const modal = document.getElementById('calculator-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContentDiv = document.getElementById('modal-content');
    
    modalTitle.textContent = `${details.name} (${details.symbol})`;
    modalContentDiv.innerHTML = modalContent;
    modal.style.display = 'block';
    
    // Draw chart
    setTimeout(() => {
        drawInvestmentChart(details.historicalData, `chart-${symbol}`, type);
    }, 100);
}

// Create individual investment modal content
function createIndividualInvestmentModal(details, type) {
    const changeClass = details.change >= 0 ? 'positive' : 'negative';
    const changeSymbol = details.change >= 0 ? '+' : '';
    const currencySymbol = type === 'local-stocks' ? 'ر.ع' : '$';
    
    return `
        <div class="individual-investment-container">
            <div class="investment-header-section">
                <div class="investment-main-info">
                    <h3>${details.name}</h3>
                    <div class="investment-symbol-badge">${details.symbol}</div>
                    <div class="investment-current-price">
                        ${window.investmentData.formatInvestmentCurrency(details.price, type)}
                        <span class="investment-change ${changeClass}">${changeSymbol}${details.change}%</span>
                    </div>
                </div>
                
                <div class="investment-stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">القيمة السوقية</span>
                        <span class="stat-value">${window.investmentData.formatMarketCap(details.marketCap)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">حجم التداول</span>
                        <span class="stat-value">${formatVolume(details.volume)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">آخر تحديث</span>
                        <span class="stat-value">${details.lastUpdated}</span>
                    </div>
                </div>
            </div>
            
            <div class="investment-description">
                <h4>نبذة عن الاستثمار</h4>
                <p>${details.description}</p>
            </div>
            
            <div class="investment-chart-section">
                <h4>الرسم البياني - آخر 30 يوم</h4>
                <div class="chart-container">
                    <canvas id="chart-${details.symbol}" width="600" height="300"></canvas>
                </div>
            </div>
            
            <div class="investment-analysis">
                <h4>تحليل سريع</h4>
                <div class="analysis-grid">
                    <div class="analysis-item ${details.change >= 0 ? 'positive' : 'negative'}">
                        <span class="analysis-label">الاتجاه</span>
                        <span class="analysis-value">${details.change >= 0 ? 'صاعد' : 'هابط'}</span>
                    </div>
                    <div class="analysis-item">
                        <span class="analysis-label">التقلبات</span>
                        <span class="analysis-value">${Math.abs(details.change) > 2 ? 'عالية' : 'متوسطة'}</span>
                    </div>
                    <div class="analysis-item">
                        <span class="analysis-label">السيولة</span>
                        <span class="analysis-value">${details.volume > 1000000 ? 'عالية' : 'متوسطة'}</span>
                    </div>
                </div>
            </div>
            
            <div class="investment-disclaimer">
                <p><strong>تنبيه:</strong> هذه المعلومات لأغراض تعليمية فقط وليست نصيحة استثمارية. يرجى استشارة مستشار مالي مؤهل قبل اتخاذ أي قرارات استثمارية.</p>
            </div>
        </div>
    `;
}

// Draw investment chart using Canvas
function drawInvestmentChart(data, canvasId, type) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Find min and max prices
    const prices = data.map(d => d.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    
    // Set up margins
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    
    // Draw background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);
    
    // Draw chart area
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(margin.left, margin.top, chartWidth, chartHeight);
    
    // Draw grid lines
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 1;
    
    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
        const y = margin.top + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(margin.left, y);
        ctx.lineTo(margin.left + chartWidth, y);
        ctx.stroke();
    }
    
    // Vertical grid lines
    for (let i = 0; i <= 6; i++) {
        const x = margin.left + (chartWidth / 6) * i;
        ctx.beginPath();
        ctx.moveTo(x, margin.top);
        ctx.lineTo(x, margin.top + chartHeight);
        ctx.stroke();
    }
    
    // Draw price line
    ctx.strokeStyle = data[data.length - 1].price > data[0].price ? '#28a745' : '#dc3545';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    data.forEach((point, index) => {
        const x = margin.left + (index / (data.length - 1)) * chartWidth;
        const y = margin.top + chartHeight - ((point.price - minPrice) / priceRange) * chartHeight;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    
    ctx.stroke();
    
    // Draw price labels
    ctx.fillStyle = '#495057';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    
    for (let i = 0; i <= 5; i++) {
        const price = minPrice + (priceRange / 5) * (5 - i);
        const y = margin.top + (chartHeight / 5) * i + 4;
        const formattedPrice = type === 'local-stocks' ? 
            price.toFixed(3) : 
            (price < 1 ? price.toFixed(6) : price.toFixed(2));
        ctx.fillText(formattedPrice, margin.left - 5, y);
    }
    
    // Draw date labels
    ctx.textAlign = 'center';
    for (let i = 0; i <= 6; i++) {
        const dataIndex = Math.floor((data.length - 1) * (i / 6));
        const date = new Date(data[dataIndex].date);
        const x = margin.left + (chartWidth / 6) * i;
        const y = height - 10;
        ctx.fillText(date.getDate() + '/' + (date.getMonth() + 1), x, y);
    }
    
    // Draw title
    ctx.fillStyle = '#212529';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('تطور السعر - آخر 30 يوم', width / 2, 15);
}

// Format volume for display
function formatVolume(volume) {
    if (volume >= 1000000000) {
        return `${(volume / 1000000000).toFixed(1)}B`;
    } else if (volume >= 1000000) {
        return `${(volume / 1000000).toFixed(1)}M`;
    } else if (volume >= 1000) {
        return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toLocaleString();
}


// Language switching functionality
function initializeLanguageSwitcher() {
    const languageBtn = document.querySelector('.language-switch');
    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const buttonText = this.textContent.trim();
            console.log('Language switch clicked, button text:', buttonText);
            
            if (buttonText === 'العربية') {
                console.log('Switching to Arabic...');
                window.location.href = 'index.html';
            }
        });
    } else {
        console.log('Language switch button not found');
    }
}

// Update DOMContentLoaded event listener to include language switcher
document.addEventListener('DOMContentLoaded', function() {
    initializeCalculators();
    initializeEducation();
    initializeQuotes();
    initializeContactForm();
    initializeInvestmentDashboard();
    initializeLanguageSwitcher();
    updateMarketData();
    
    // Update market data every 30 seconds
    setInterval(updateMarketData, 30000);
});
