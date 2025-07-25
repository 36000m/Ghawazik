// Enhanced Investment Data for Ghawazik Platform

// Top 20 Cryptocurrencies
const topCryptocurrencies = [
    { symbol: 'BTC', name: 'Bitcoin', price: 43250, change: 2.5, marketCap: 850000000000, volume: 25000000000, description: 'العملة الرقمية الأولى والأكثر شهرة في العالم' },
    { symbol: 'ETH', name: 'Ethereum', price: 2680, change: 1.8, marketCap: 320000000000, volume: 15000000000, description: 'منصة العقود الذكية الرائدة' },
    { symbol: 'BNB', name: 'Binance Coin', price: 315, change: -0.5, marketCap: 48000000000, volume: 1200000000, description: 'عملة منصة بينانس للتداول' },
    { symbol: 'XRP', name: 'Ripple', price: 0.52, change: 3.2, marketCap: 28000000000, volume: 1800000000, description: 'شبكة دفع عالمية للبنوك' },
    { symbol: 'ADA', name: 'Cardano', price: 0.48, change: -1.2, marketCap: 17000000000, volume: 800000000, description: 'منصة بلوك تشين مستدامة' },
    { symbol: 'SOL', name: 'Solana', price: 98, change: 4.1, marketCap: 42000000000, volume: 2100000000, description: 'بلوك تشين عالي السرعة' },
    { symbol: 'DOGE', name: 'Dogecoin', price: 0.08, change: 2.8, marketCap: 11000000000, volume: 600000000, description: 'العملة الرقمية الشعبية' },
    { symbol: 'TRX', name: 'TRON', price: 0.11, change: 1.5, marketCap: 9800000000, volume: 450000000, description: 'منصة المحتوى اللامركزية' },
    { symbol: 'MATIC', name: 'Polygon', price: 0.85, change: -0.8, marketCap: 8200000000, volume: 380000000, description: 'حل التوسع لإيثريوم' },
    { symbol: 'DOT', name: 'Polkadot', price: 7.2, change: 2.1, marketCap: 9100000000, volume: 420000000, description: 'شبكة البلوك تشين المتعددة' },
    { symbol: 'AVAX', name: 'Avalanche', price: 36, change: 3.5, marketCap: 13500000000, volume: 650000000, description: 'منصة التطبيقات اللامركزية' },
    { symbol: 'SHIB', name: 'Shiba Inu', price: 0.000024, change: 5.2, marketCap: 14200000000, volume: 890000000, description: 'عملة الميم الشهيرة' },
    { symbol: 'LTC', name: 'Litecoin', price: 73, change: 0.9, marketCap: 5400000000, volume: 280000000, description: 'الفضة الرقمية' },
    { symbol: 'UNI', name: 'Uniswap', price: 6.8, change: -1.5, marketCap: 4100000000, volume: 190000000, description: 'بروتوكول التداول اللامركزي' },
    { symbol: 'LINK', name: 'Chainlink', price: 14.5, change: 1.8, marketCap: 8500000000, volume: 350000000, description: 'شبكة أوراكل البلوك تشين' },
    { symbol: 'ATOM', name: 'Cosmos', price: 10.2, change: 2.7, marketCap: 4000000000, volume: 180000000, description: 'إنترنت البلوك تشين' },
    { symbol: 'XLM', name: 'Stellar', price: 0.12, change: 1.3, marketCap: 3200000000, volume: 150000000, description: 'شبكة الدفع العالمية' },
    { symbol: 'VET', name: 'VeChain', price: 0.025, change: -0.7, marketCap: 1800000000, volume: 85000000, description: 'بلوك تشين سلسلة التوريد' },
    { symbol: 'FIL', name: 'Filecoin', price: 5.4, change: 3.1, marketCap: 2400000000, volume: 120000000, description: 'شبكة التخزين اللامركزية' },
    { symbol: 'ALGO', name: 'Algorand', price: 0.18, change: 0.5, marketCap: 1400000000, volume: 70000000, description: 'بلوك تشين الجيل الثالث' }
];

// Top 20 Global Stocks
const topGlobalStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 195.50, change: 1.2, marketCap: 3000000000000, volume: 45000000, description: 'شركة التكنولوجيا الأمريكية الرائدة' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.20, change: 0.8, marketCap: 2800000000000, volume: 28000000, description: 'عملاق البرمجيات والحوسبة السحابية' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.30, change: -0.5, marketCap: 1800000000000, volume: 22000000, description: 'الشركة الأم لجوجل' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 155.80, change: 2.1, marketCap: 1600000000000, volume: 35000000, description: 'عملاق التجارة الإلكترونية والحوسبة السحابية' },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.90, change: -2.1, marketCap: 790000000000, volume: 85000000, description: 'رائدة السيارات الكهربائية' },
    { symbol: 'META', name: 'Meta Platforms', price: 485.20, change: 1.5, marketCap: 1200000000000, volume: 18000000, description: 'شركة وسائل التواصل الاجتماعي' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 875.30, change: 3.8, marketCap: 2200000000000, volume: 42000000, description: 'رائدة معالجات الرسوميات والذكاء الاصطناعي' },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: 485.60, change: 0.9, marketCap: 210000000000, volume: 8500000, description: 'منصة البث الترفيهي الرائدة' },
    { symbol: 'BABA', name: 'Alibaba Group', price: 78.40, change: 2.3, marketCap: 200000000000, volume: 15000000, description: 'عملاق التجارة الإلكترونية الصيني' },
    { symbol: 'TSM', name: 'Taiwan Semiconductor', price: 105.20, change: 1.7, marketCap: 545000000000, volume: 12000000, description: 'أكبر مصنع للرقائق في العالم' },
    { symbol: 'V', name: 'Visa Inc.', price: 275.80, change: 0.6, marketCap: 580000000000, volume: 6500000, description: 'شبكة المدفوعات العالمية' },
    { symbol: 'JPM', name: 'JPMorgan Chase', price: 185.40, change: -0.3, marketCap: 540000000000, volume: 8200000, description: 'أكبر بنك أمريكي' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: 162.90, change: 0.4, marketCap: 430000000000, volume: 5800000, description: 'عملاق الأدوية والرعاية الصحية' },
    { symbol: 'WMT', name: 'Walmart Inc.', price: 165.30, change: 1.1, marketCap: 450000000000, volume: 7200000, description: 'أكبر سلسلة متاجر في العالم' },
    { symbol: 'PG', name: 'Procter & Gamble', price: 155.70, change: 0.2, marketCap: 370000000000, volume: 4500000, description: 'شركة السلع الاستهلاكية' },
    { symbol: 'UNH', name: 'UnitedHealth Group', price: 520.80, change: 0.8, marketCap: 490000000000, volume: 3200000, description: 'شركة التأمين الصحي الرائدة' },
    { symbol: 'HD', name: 'Home Depot', price: 385.20, change: 1.4, marketCap: 390000000000, volume: 4800000, description: 'متاجر تحسين المنازل' },
    { symbol: 'MA', name: 'Mastercard Inc.', price: 445.60, change: 0.7, marketCap: 420000000000, volume: 3600000, description: 'شبكة المدفوعات العالمية' },
    { symbol: 'BAC', name: 'Bank of America', price: 34.80, change: -0.2, marketCap: 280000000000, volume: 42000000, description: 'ثاني أكبر بنك أمريكي' },
    { symbol: 'XOM', name: 'Exxon Mobil', price: 108.50, change: 2.5, marketCap: 450000000000, volume: 18000000, description: 'عملاق النفط والغاز' }
];

// Top 20 Local Stocks (Muscat Securities Market)
const topLocalStocks = [
    { symbol: 'BKMU', name: 'بنك مسقط', price: 0.425, change: 1.5, marketCap: 1200000000, volume: 2500000, description: 'أكبر البنوك التجارية في سلطنة عمان' },
    { symbol: 'OOCL', name: 'شركة النفط العمانية', price: 0.380, change: 0.7, marketCap: 950000000, volume: 1800000, description: 'شركة النفط الوطنية العمانية' },
    { symbol: 'AHLI', name: 'البنك الأهلي', price: 0.195, change: -0.3, marketCap: 580000000, volume: 1200000, description: 'بنك تجاري رائد في السلطنة' },
    { symbol: 'HSBC', name: 'بنك HSBC عمان', price: 0.158, change: 0.9, marketCap: 420000000, volume: 950000, description: 'فرع البنك البريطاني في عمان' },
    { symbol: 'SOHAR', name: 'بنك صحار الدولي', price: 0.089, change: 2.1, marketCap: 380000000, volume: 1600000, description: 'بنك تجاري متنامي' },
    { symbol: 'OMINV', name: 'عمان للاستثمار والتمويل', price: 0.142, change: 1.3, marketCap: 320000000, volume: 800000, description: 'شركة استثمار وتمويل' },
    { symbol: 'OMZEST', name: 'مسقط للمقاصة والإيداع', price: 0.235, change: 0.5, marketCap: 180000000, volume: 450000, description: 'شركة خدمات مالية' },
    { symbol: 'RAYSUT', name: 'أسمنت ريسوت', price: 0.098, change: -1.2, marketCap: 290000000, volume: 1100000, description: 'شركة إنتاج الأسمنت' },
    { symbol: 'GALFAR', name: 'جلفار للهندسة', price: 0.067, change: 1.8, marketCap: 150000000, volume: 2200000, description: 'شركة خدمات هندسية' },
    { symbol: 'OMANTEL', name: 'عمانتل', price: 0.485, change: 0.4, marketCap: 1100000000, volume: 650000, description: 'شركة الاتصالات الرئيسية' },
    { symbol: 'OOREDOO', name: 'أوريدو عمان', price: 0.298, change: -0.6, marketCap: 420000000, volume: 780000, description: 'شركة اتصالات متنقلة' },
    { symbol: 'PDO', name: 'تنمية نفط عمان', price: 0.156, change: 1.9, marketCap: 850000000, volume: 1350000, description: 'شركة استكشاف وإنتاج النفط' },
    { symbol: 'OMANOIL', name: 'النفط العماني للتسويق', price: 0.089, change: 0.8, marketCap: 180000000, volume: 920000, description: 'شركة تسويق المنتجات النفطية' },
    { symbol: 'ALMAHA', name: 'المها للسيراميك', price: 0.045, change: -0.9, marketCap: 95000000, volume: 1800000, description: 'شركة إنتاج السيراميك' },
    { symbol: 'VOLTAMP', name: 'فولت أمب', price: 0.078, change: 2.3, marketCap: 120000000, volume: 1450000, description: 'شركة المعدات الكهربائية' },
    { symbol: 'RENAISSANCE', name: 'النهضة للخدمات', price: 0.123, change: 1.1, marketCap: 200000000, volume: 680000, description: 'شركة خدمات متنوعة' },
    { symbol: 'TAKAFUL', name: 'التكافل العماني', price: 0.167, change: 0.3, marketCap: 140000000, volume: 520000, description: 'شركة تأمين إسلامية' },
    { symbol: 'DHOFAR', name: 'بنك ظفار', price: 0.134, change: -0.4, marketCap: 380000000, volume: 890000, description: 'بنك تجاري إقليمي' },
    { symbol: 'NIZWA', name: 'بنك نزوى', price: 0.098, change: 1.6, marketCap: 220000000, volume: 1100000, description: 'بنك إسلامي متخصص' },
    { symbol: 'ALMADINA', name: 'المدينة للتأمين', price: 0.056, change: 0.7, marketCap: 85000000, volume: 1650000, description: 'شركة تأمين شاملة' }
];

// Generate historical price data for charts
function generateHistoricalData(currentPrice, days = 30) {
    const data = [];
    let price = currentPrice * 0.9; // Start 10% lower
    
    for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        
        // Add some realistic price movement
        const change = (Math.random() - 0.5) * 0.1; // ±5% daily change
        price = price * (1 + change);
        
        data.push({
            date: date.toISOString().split('T')[0],
            price: parseFloat(price.toFixed(4)),
            volume: Math.floor(Math.random() * 1000000) + 100000
        });
    }
    
    // Ensure the last price matches current price
    data[data.length - 1].price = currentPrice;
    
    return data;
}

// Get detailed information for a specific investment
function getInvestmentDetails(type, symbol) {
    let investment;
    
    switch(type) {
        case 'crypto':
            investment = topCryptocurrencies.find(c => c.symbol === symbol);
            break;
        case 'global-stocks':
            investment = topGlobalStocks.find(s => s.symbol === symbol);
            break;
        case 'local-stocks':
            investment = topLocalStocks.find(s => s.symbol === symbol);
            break;
        default:
            return null;
    }
    
    if (!investment) return null;
    
    return {
        ...investment,
        historicalData: generateHistoricalData(investment.price),
        lastUpdated: new Date().toLocaleString('ar-OM'),
        currency: type === 'local-stocks' ? 'OMR' : (type === 'crypto' ? 'USD' : 'USD')
    };
}

// Format currency based on type
function formatInvestmentCurrency(amount, type) {
    const currency = type === 'local-stocks' ? 'ر.ع' : '$';
    const decimals = type === 'local-stocks' ? 3 : 2;
    
    if (amount < 1 && type === 'crypto') {
        return `${currency}${amount.toFixed(6)}`;
    }
    
    return `${currency}${amount.toLocaleString('en-US', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
    })}`;
}

// Format market cap
function formatMarketCap(amount) {
    if (amount >= 1000000000000) {
        return `$${(amount / 1000000000000).toFixed(2)}T`;
    } else if (amount >= 1000000000) {
        return `$${(amount / 1000000000).toFixed(2)}B`;
    } else if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(2)}M`;
    }
    return `$${amount.toLocaleString()}`;
}

// Export data for use in main script
window.investmentData = {
    topCryptocurrencies,
    topGlobalStocks,
    topLocalStocks,
    getInvestmentDetails,
    formatInvestmentCurrency,
    formatMarketCap,
    generateHistoricalData
};

