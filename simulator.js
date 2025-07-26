document.addEventListener('DOMContentLoaded', () => {

    // --- الإعدادات العامة للمحاكي ---
    const UI_REFRESH_INTERVAL = 5000;
    const CHART_UPDATE_INTERVAL = 60000;

    // --- قاعدة بيانات الأسهم الأولية (تم تحديثها وتوسيعها بناءً على طلبك) ---
    const seedStocks = [
        // --- الأسهم العالمية والخليجية (تم تصنيفها كـ 'global') ---
        { symbol: 'MSFT', name: 'Microsoft Corp.', price: 345.20, type: 'global' },
        { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 475.10, type: 'global' },
        { symbol: 'AAPL', name: 'Apple Inc.', price: 189.90, type: 'global' },
        { symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 142.80, type: 'global' },
        { symbol: 'GOOGL', name: 'Alphabet Inc. (Google)', price: 139.50, type: 'global' },
        { symbol: 'META', name: 'Meta Platforms, Inc.', price: 328.70, type: 'global' },
        { symbol: '2222.SR', name: 'Saudi Aramco', price: 32.50, type: 'global' },
        { symbol: 'AVGO', name: 'Broadcom Inc.', price: 920.45, type: 'global' },
        { symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing', price: 102.30, type: 'global' },
        { symbol: 'BRK.A', name: 'Berkshire Hathaway', price: 540000.00, type: 'global' },
        { symbol: 'TSLA', name: 'Tesla Inc.', price: 260.05, type: 'global' },
        { symbol: 'WMT', name: 'Walmart Inc.', price: 160.15, type: 'global' },
        { symbol: 'LLY', name: 'Eli Lilly and Company', price: 580.80, type: 'global' },
        { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 155.60, type: 'global' },
        { symbol: 'V', name: 'Visa Inc.', price: 248.90, type: 'global' },
        { symbol: 'TCEHY', name: 'Tencent Holdings', price: 40.50, type: 'global' },
        { symbol: 'MA', name: 'Mastercard Inc.', price: 401.75, type: 'global' },
        { symbol: 'NFLX', name: 'Netflix Inc.', price: 410.60, type: 'global' },
        { symbol: 'COST', name: 'Costco Wholesale', price: 565.40, type: 'global' },
        { symbol: 'XOM', name: 'Exxon Mobil Corp.', price: 110.25, type: 'global' },
        { symbol: 'ORCL', name: 'Oracle Corp.', price: 121.50, type: 'global' },
        { symbol: 'JNJ', name: 'Johnson & Johnson', price: 162.30, type: 'global' },
        { symbol: 'PG', name: 'Procter & Gamble', price: 153.80, type: 'global' },
        { symbol: 'UNH', name: 'UnitedHealth Group', price: 515.90, type: 'global' },
        { symbol: 'HD', name: 'Home Depot', price: 320.70, type: 'global' },
        { symbol: 'SAP', name: 'SAP SE', price: 140.20, type: 'global' },
        { symbol: 'ABBV', name: 'AbbVie Inc.', price: 150.90, type: 'global' },
        { symbol: 'BAC', name: 'Bank of America', price: 28.70, type: 'global' },
        { symbol: 'KO', name: 'Coca‑Cola Company', price: 59.90, type: 'global' },
        { symbol: 'NVO', name: 'Novo Nordisk', price: 195.40, type: 'global' },
        { symbol: 'BABA', name: 'Alibaba Group', price: 89.60, type: 'global' },
        { symbol: 'RMS.PA', name: 'Hermès', price: 1980.50, type: 'global' },
        { symbol: 'LVMH.PA', name: 'LVMH', price: 825.30, type: 'global' },
        { symbol: 'ASML', name: 'ASML Holding', price: 680.10, type: 'global' },
        { symbol: 'ROG.SW', name: 'Roche', price: 260.40, type: 'global' },
        { symbol: '005930.KS', name: 'Samsung Electronics', price: 71000.00, type: 'global' },
        { symbol: 'CSCO', name: 'Cisco Systems', price: 53.20, type: 'global' },
        { symbol: 'CVX', name: 'Chevron Corp.', price: 165.80, type: 'global' },
        { symbol: 'CRM', name: 'Salesforce', price: 225.40, type: 'global' },
        { symbol: '7203.T', name: 'Toyota Motor Corporation', price: 2500.00, type: 'global' },
        { symbol: 'WFC', name: 'Wells Fargo', price: 42.50, type: 'global' },
        { symbol: 'IHC.AD', name: 'International Holding Company', price: 400.00, type: 'global' },
        { symbol: 'OR.PA', name: 'L’Oréal', price: 415.60, type: 'global' },
        { symbol: 'QCOM', name: 'Qualcomm', price: 125.70, type: 'global' },
        { symbol: 'INTC', name: 'Intel Corporation', price: 36.80, type: 'global' },
        { symbol: 'ADSK', name: 'Autodesk', price: 210.90, type: 'global' },
        { symbol: 'HON', name: 'Honeywell', price: 198.20, type: 'global' },
        { symbol: 'PEP', name: 'PepsiCo', price: 172.40, type: 'global' },
        { symbol: 'PM', name: 'Philip Morris International', price: 95.30, type: 'global' },
        { symbol: 'GS', name: 'Goldman Sachs', price: 330.10, type: 'global' },
        { symbol: 'MS', name: 'Morgan Stanley', price: 85.60, type: 'global' },
        { symbol: 'BLK', name: 'BlackRock', price: 720.90, type: 'global' },
        { symbol: 'ADS.DE', name: 'Adidas', price: 180.50, type: 'global' },
        { symbol: 'ULVR.L', name: 'Unilever', price: 40.10, type: 'global' },
        { symbol: 'NESN.SW', name: 'Nestlé', price: 105.30, type: 'global' },
        { symbol: 'DHR', name: 'Danaher Corporation', price: 250.60, type: 'global' },
        { symbol: 'MCD', name: 'McDonald’s', price: 285.40, type: 'global' },
        { symbol: 'SBUX', name: 'Starbucks', price: 99.80, type: 'global' },
        { symbol: 'DIS', name: 'Disney', price: 85.20, type: 'global' },
        { symbol: 'WBA', name: 'Walgreens Boots Alliance', price: 25.10, type: 'global' },
        { symbol: 'UBER', name: 'Uber Technologies', price: 48.70, type: 'global' },
        { symbol: 'MRNA', name: 'Moderna', price: 110.90, type: 'global' },
        { symbol: 'BP.L', name: 'BP plc', price: 5.10, type: 'global' },
        { symbol: 'SHEL', name: 'Shell plc', price: 28.50, type: 'global' },
        { symbol: 'C', name: 'Citigroup', price: 45.30, type: 'global' },
        { symbol: 'PYPL', name: 'PayPal Holdings', price: 62.80, type: 'global' },
        { symbol: 'LYFT', name: 'Lyft', price: 10.50, type: 'global' },
        { symbol: 'Z', name: 'Zillow', price: 45.60, type: 'global' },
        { symbol: 'SHOP', name: 'Shopify', price: 65.40, type: 'global' },
        { symbol: '1180.SE', name: 'البنك الأهلي السعودي', price: 38.00, type: 'global' },
        { symbol: '1120.SE', name: 'بنك الراجحي', price: 72.30, type: 'global' },
        { symbol: '7010.SE', name: 'STC – الاتصالات السعودية', price: 39.50, type: 'global' },
        { symbol: '1211.SE', name: 'معادن', price: 65.10, type: 'global' },
        { symbol: '2082.SE', name: 'أكوا باور', price: 190.00, type: 'global' },
        { symbol: '2010.SE', name: 'سابك', price: 88.60, type: 'global' },
        { symbol: '7203.SE', name: 'علم', price: 450.00, type: 'global' },
        { symbol: 'QNBK.QA', name: 'بنك قطر الوطني', price: 16.5, type: 'global' },
        { symbol: 'QIBK.QA', name: 'بنك قطر الإسلامي', price: 19.2, type: 'global' },
        { symbol: 'IQCD.QA', name: 'الصناعات القطرية', price: 13.1, type: 'global' },
        { symbol: 'ORDS.QA', name: 'أوريدو قطر', price: 10.2, type: 'global' },
        { symbol: 'EMAAR.DU', name: 'إعمار العقارية', price: 6.80, type: 'global' },
        { symbol: 'FAB.AD', name: 'بنك أبوظبي الأول', price: 13.90, type: 'global' },
        { symbol: 'ADCB.AD', name: 'بنك أبوظبي التجاري', price: 9.10, type: 'global' },
        { symbol: 'ADIB.AD', name: 'بنك أبوظبي الإسلامي', price: 11.50, type: 'global' },
        { symbol: 'ALDAR.AD', name: 'الدار العقارية', price: 5.70, type: 'global' },
        { symbol: 'DEWA.DU', name: 'هيئة كهرباء ومياه دبي', price: 2.50, type: 'global' },
        { symbol: 'NBK.KW', name: 'بنك الكويت الوطني', price: 0.980, type: 'global' },
        { symbol: 'KFH.KW', name: 'بيت التمويل الكويتي', price: 0.850, type: 'global' },
        { symbol: 'RAKBANK.AD', name: 'بنك رأس الخيمة الوطني', price: 6.20, type: 'global' },
        { symbol: 'EBNK.DU', name: 'بنك الإمارات دبي الوطني', price: 16.30, type: 'global' },

        // --- الأسهم العُمانية (تم تصنيفها كـ 'local') ---
        { symbol: 'OQ.OM', name: 'OQ للاستكشاف والإنتاج', price: 0.650, type: 'local' },
        { symbol: 'BKMB.OM', name: 'بنك مسقط', price: 0.255, type: 'local' },
        { symbol: 'SOHR.OM', name: 'بنك صحار الدولي', price: 0.115, type: 'local' },
        { symbol: 'BKDB.OM', name: 'بنك ظفار', price: 0.120, type: 'local' },
        { symbol: 'OMTL.OM', name: 'عمانتل', price: 0.880, type: 'local' },
        { symbol: 'OORE.OM', name: 'أوريدو عمان', price: 0.450, type: 'local' },
        { symbol: 'GECS.OM', name: 'جلفار الهندسية', price: 0.085, type: 'local' },
        { symbol: 'RCCI.OM', name: 'ريسوت للأسمنت', price: 0.150, type: 'local' },
        { symbol: 'RNSS.OM', name: 'رينيسانس للخدمات', price: 0.480, type: 'local' },
        { symbol: 'OFMI.OM', name: 'مطاحن عمان', price: 0.520, type: 'local' },
        { symbol: 'OMVS.OM', name: 'أومنفيست', price: 0.410, type: 'local' },
        { symbol: 'OIBB.OM', name: 'البنك الوطني العُماني', price: 0.210, type: 'local' },
        { symbol: 'AUFS.OM', name: 'الأنوار للسيراميك', price: 0.190, type: 'local' },
        { symbol: 'SUWP.OM', name: 'السويّدي للطاقة', price: 0.055, type: 'local' },
        { symbol: 'BATP.OM', name: 'الباطنة للطاقة', price: 0.048, type: 'local' },
        { symbol: 'SOMS.OM', name: 'شل عمان للتسويق', price: 0.950, type: 'local' },
        { symbol: 'VOLTAMP.OM', name: 'فولتاب للطاقة', price: 0.320, type: 'local' },
        { symbol: 'DIDI.OM', name: 'دهار الدولية', price: 0.280, type: 'local' },
        { symbol: 'MHAS.OM', name: 'Al Maha Petroleum', price: 0.810, type: 'local' },
        { symbol: 'ASYAD.OM', name: 'Asyad Group (IPO 2025)', price: 0.500, type: 'local' },
    ];


    // --- متغيرات الحالة ---
    let livePrices = {};
    let userState = { cash: 100000, portfolio: {} };
    let portfolioChart;

    // --- عناصر واجهة المستخدم ---
    const symbolInput = document.getElementById('symbol-input');
    const suggestionsDiv = document.getElementById('search-suggestions');
    const tradePanel = document.getElementById('trade-panel');
    const cashBalanceEl = document.getElementById('cash-balance');
    const portfolioValueEl = document.getElementById('portfolio-value');
    const totalValueEl = document.getElementById('total-value');
    const portfolioBody = document.getElementById('portfolio-body');
    const chartCtx = document.getElementById('portfolio-chart').getContext('2d');
    const globalMarketMoversDiv = document.getElementById('global-market-movers');
    const omanMarketMoversDiv = document.getElementById('oman-market-movers');

    function formatCurrency(value, decimals = 2) {
        return `$${value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}`;
    }

    // ==========================================================
    // ======== محاكاة السوق (مع التذبذب البسيط المطلوب) ========
    // ==========================================================
    function simulateMarket() {
        seedStocks.forEach(stock => {
            const oldPrice = livePrices[stock.symbol]?.basePrice || stock.price;
            
            // تحديد أقصى نسبة تغيير (مثلاً 0.5%) لإعطاء تذبذب بسيط
            const maxChangePercent = 0.005; // 0.5%
            
            // إنشاء عامل عشوائي بين -1 و 1
            const randomFactor = (Math.random() * 2) - 1; 
            
            // حساب نسبة التغيير الفعلية
            const changePercentage = randomFactor * maxChangePercent;
            const changeAmount = oldPrice * changePercentage;
            
            let newBasePrice = oldPrice + changeAmount;
            
            // التأكد من أن السعر لا يصبح سالباً
            newBasePrice = Math.max(newBasePrice, 0.01);

            const spread = newBasePrice * 0.001; // فارق سعري بسيط بين البيع والشراء
            livePrices[stock.symbol] = { 
                ...stock, 
                basePrice: newBasePrice, 
                ask: newBasePrice + spread / 2, 
                bid: newBasePrice - spread / 2, 
                oldPrice: oldPrice 
            };
        });
    }

    // الدالة المركزية لعرض كل بيانات المحفظة
    function renderPortfolioAndSummary() {
        let currentPortfolioValue = 0;
        Object.values(userState.portfolio).forEach(stock => {
            if (livePrices[stock.symbol]) {
                currentPortfolioValue += livePrices[stock.symbol].basePrice * stock.quantity;
            }
        });

        cashBalanceEl.textContent = formatCurrency(userState.cash);
        portfolioValueEl.textContent = formatCurrency(currentPortfolioValue);
        totalValueEl.textContent = formatCurrency(userState.cash + currentPortfolioValue);

        portfolioBody.innerHTML = '';
        if (Object.keys(userState.portfolio).length === 0) {
            portfolioBody.innerHTML = `<tr class="no-stocks-row"><td colspan="6">محفظتك فارغة. ابدأ بشراء بعض الأسهم!</td></tr>`;
        } else {
            for (const symbol in userState.portfolio) {
                const stock = userState.portfolio[symbol];
                const currentPrice = livePrices[symbol].basePrice;
                const totalValue = currentPrice * stock.quantity;
                const profitLoss = totalValue - (stock.avgPrice * stock.quantity);
                
                const row = portfolioBody.insertRow();
                row.insertCell(0).textContent = `${stock.name} (${symbol})`;
                row.insertCell(1).textContent = stock.quantity;
                row.insertCell(2).textContent = formatCurrency(stock.avgPrice, 3);
                const priceCell = row.insertCell(3);
                priceCell.textContent = formatCurrency(currentPrice, 3);
                row.insertCell(4).textContent = formatCurrency(totalValue);
                const profitLossCell = row.insertCell(5);
                profitLossCell.textContent = `${profitLoss >= 0 ? '+' : ''}${formatCurrency(profitLoss)}`;
                profitLossCell.className = profitLoss >= 0 ? 'profit' : 'loss';

                if (stock.lastKnownPrice && stock.lastKnownPrice !== currentPrice) {
                    priceCell.classList.add(currentPrice > stock.lastKnownPrice ? 'price-flash-up' : 'price-flash-down');
                    setTimeout(() => priceCell.classList.remove('price-flash-up', 'price-flash-down'), 1000);
                }
                stock.lastKnownPrice = currentPrice;
            }
        }
    }

    // الدالة المسؤولة عن منطق الصفقات
    function handleTransaction(type, symbol) {
        const quantityInput = document.getElementById('quantity-input');
        const quantity = parseInt(quantityInput.value);

        if (!quantity || quantity <= 0) {
            alert('الرجاء إدخال كمية صحيحة.');
            return;
        }

        const currentPriceInfo = livePrices[symbol];
        if (!currentPriceInfo) return;

        const tradePrice = type === 'buy' ? currentPriceInfo.ask : currentPriceInfo.bid;
        const cost = tradePrice * quantity;

        if (type === 'buy') {
            if (userState.cash < cost) {
                alert('ليس لديك رصيد كافٍ لإتمام هذه العملية.');
                return;
            }
            userState.cash -= cost;
            const stockInPortfolio = userState.portfolio[symbol];
            if (stockInPortfolio) {
                const newTotalCost = (stockInPortfolio.avgPrice * stockInPortfolio.quantity) + cost;
                stockInPortfolio.quantity += quantity;
                stockInPortfolio.avgPrice = newTotalCost / stockInPortfolio.quantity;
            } else {
                userState.portfolio[symbol] = { name: currentPriceInfo.name, symbol: symbol, quantity: quantity, avgPrice: tradePrice };
            }
        } else { // Sell
            const stockInPortfolio = userState.portfolio[symbol];
            if (!stockInPortfolio || stockInPortfolio.quantity < quantity) {
                alert('لا تملك هذه الكمية من الأسهم لبيعها.');
                return;
            }
            userState.cash += cost;
            stockInPortfolio.quantity -= quantity;
            if (stockInPortfolio.quantity === 0) {
                delete userState.portfolio[symbol];
            }
        }
        
        tradePanel.classList.add('trade-panel-hidden');
        renderPortfolioAndSummary();
        updateChart();
    }

    // ==========================================================
    // ======== البحث الذكي (يعمل بالفعل كما هو مطلوب) ========
    // ==========================================================
    function handleSearch(query) {
        if (!query) {
            suggestionsDiv.style.display = 'none';
            return;
        }
        const lowerCaseQuery = query.toLowerCase();
        // هذا السطر يبحث في اسم الشركة ورمزها، مما يجعله ذكياً
        const results = seedStocks.filter(stock => 
            stock.name.toLowerCase().includes(lowerCaseQuery) || 
            stock.symbol.toLowerCase().includes(lowerCaseQuery)
        ).slice(0, 7);
        displaySuggestions(results);
    }

    // --- بقية الدوال المساعدة (تعمل بشكل سليم) ---
    function renderMarketMovers(){globalMarketMoversDiv.innerHTML="",omanMarketMoversDiv.innerHTML="",Object.keys(livePrices).forEach(e=>{const t=livePrices[e];if(!t.oldPrice)return;const o=(t.basePrice-t.oldPrice)/t.oldPrice*100,a=0>o,r=document.createElement("div");r.className="mover-card",r.innerHTML=`<div class="symbol">${e}</div><div class="price">${formatCurrency(t.basePrice,3)}</div><div class="change ${a?"loss":"profit"}">${a?"":"+"}${o.toFixed(2)}%</div>`,"global"===t.type?globalMarketMoversDiv.appendChild(r):omanMarketMoversDiv.appendChild(r)})}
    function initializeChart(){portfolioChart=new Chart(chartCtx,{type:"line",data:{labels:[],datasets:[{label:"إجمالي قيمة الأصول",data:[],borderColor:"var(--primary-teal)",backgroundColor:"rgba(44, 95, 93, 0.1)",fill:!0,tension:.3,borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{y:{ticks:{callback:e=>formatCurrency(e)}},x:{ticks:{maxRotation:0,autoSkip:!0,maxTicksLimit:8}}},plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`القيمة: ${formatCurrency(e.parsed.y)}`}}}}}),updateChart()}
    function updateChart(){const e=new Date,t=userState.cash+Object.values(userState.portfolio).reduce((e,t)=>e+(livePrices[t.symbol]?livePrices[t.symbol].basePrice*t.quantity:0),0),o=e.getHours()+":"+String(e.getMinutes()).padStart(2,"0");portfolioChart.data.labels.push(o),portfolioChart.data.datasets[0].data.push(t),30<portfolioChart.data.labels.length&&(portfolioChart.data.labels.shift(),portfolioChart.data.datasets[0].data.shift()),portfolioChart.update("none")}
    const debounce=(e,t=300)=>{let o;return(...a)=>{clearTimeout(o),o=setTimeout(()=>e.apply(this,a),t)}};
    function displaySuggestions(e){if(0===e.length)return void(suggestionsDiv.style.display="none");suggestionsDiv.innerHTML="",e.forEach(e=>{const t=document.createElement("div");t.className="suggestion-item",t.innerHTML=`<span class="symbol">${e.symbol}</span><span class="name">${e.name}</span>`,t.addEventListener("click",()=>{symbolInput.value="",suggestionsDiv.style.display="none",displayTradePanel(e.symbol)}),suggestionsDiv.appendChild(t)}),suggestionsDiv.style.display="block"}
    function displayTradePanel(e){const t=livePrices[e];t&&(tradePanel.classList.remove("trade-panel-hidden"),tradePanel.innerHTML=`<h4>${t.name} (${e})</h4><div class="price-grid"><div><span class="price-label">شراء (Ask)</span><p class="price ask-price">${formatCurrency(t.ask,3)}</p></div><div><span class="price-label">بيع (Bid)</span><p class="price bid-price">${formatCurrency(t.bid,3)}</p></div></div><div class="trade-actions"><input type="number" id="quantity-input" class="form-control" min="1" placeholder="الكمية"><button class="btn buy-btn" data-symbol="${e}">شراء</button><button class="btn sell-btn" data-symbol="${e}">بيع</button></div>`)}

    // --- دالة التشغيل الرئيسية ---
    function initializeApp() {
        seedStocks.forEach(stock => { 
            livePrices[stock.symbol] = { ...stock, oldPrice: stock.price, basePrice: stock.price, ask: stock.price * 1.0005, bid: stock.price * 0.9995 }; 
        });
        
        renderPortfolioAndSummary();
        renderMarketMovers();
        initializeChart();

        setInterval(() => {
            simulateMarket();
            renderPortfolioAndSummary();
            renderMarketMovers();
        }, UI_REFRESH_INTERVAL);

        setInterval(updateChart, CHART_UPDATE_INTERVAL);

        symbolInput.addEventListener('input', debounce(e => handleSearch(e.target.value), 300));
        
        tradePanel.addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (button) {
                const type = button.classList.contains('buy-btn') ? 'buy' : 'sell';
                const symbol = button.dataset.symbol;
                if (symbol) {
                    handleTransaction(type, symbol);
                }
            }
        });

        document.addEventListener('click', (e) => {
            if (!suggestionsDiv.contains(e.target) && e.target !== symbolInput) {
                suggestionsDiv.style.display = 'none';
            }
        });
    }

    initializeApp();
});