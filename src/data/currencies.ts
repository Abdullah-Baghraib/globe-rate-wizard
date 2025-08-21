export interface Currency {
  code: string;
  name: string;
  country: string;
  flag: string;
}

export const currencies: Currency[] = [
  { code: 'USD', name: 'United States Dollar', country: 'United States', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', country: 'European Union', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound Sterling', country: 'United Kingdom', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', country: 'Japan', flag: '🇯🇵' },
  { code: 'AUD', name: 'Australian Dollar', country: 'Australia', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', country: 'Canada', flag: '🇨🇦' },
  { code: 'CHF', name: 'Swiss Franc', country: 'Switzerland', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', country: 'China', flag: '🇨🇳' },
  { code: 'SEK', name: 'Swedish Krona', country: 'Sweden', flag: '🇸🇪' },
  { code: 'NZD', name: 'New Zealand Dollar', country: 'New Zealand', flag: '🇳🇿' },
  { code: 'MXN', name: 'Mexican Peso', country: 'Mexico', flag: '🇲🇽' },
  { code: 'SGD', name: 'Singapore Dollar', country: 'Singapore', flag: '🇸🇬' },
  { code: 'HKD', name: 'Hong Kong Dollar', country: 'Hong Kong', flag: '🇭🇰' },
  { code: 'NOK', name: 'Norwegian Krone', country: 'Norway', flag: '🇳🇴' },
  
  // Arab & Middle East Countries
  { code: 'SAR', name: 'Saudi Riyal', country: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'AED', name: 'UAE Dirham', country: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'QAR', name: 'Qatari Riyal', country: 'Qatar', flag: '🇶🇦' },
  { code: 'KWD', name: 'Kuwaiti Dinar', country: 'Kuwait', flag: '🇰🇼' },
  { code: 'BHD', name: 'Bahraini Dinar', country: 'Bahrain', flag: '🇧🇭' },
  { code: 'OMR', name: 'Omani Rial', country: 'Oman', flag: '🇴🇲' },
  { code: 'JOD', name: 'Jordanian Dinar', country: 'Jordan', flag: '🇯🇴' },
  { code: 'EGP', name: 'Egyptian Pound', country: 'Egypt', flag: '🇪🇬' },
  { code: 'LBP', name: 'Lebanese Pound', country: 'Lebanon', flag: '🇱🇧' },
  { code: 'ILS', name: 'Israeli New Sheqel', country: 'Israel', flag: '🇮🇱' },
  { code: 'TRY', name: 'Turkish Lira', country: 'Turkey', flag: '🇹🇷' },
  { code: 'IRR', name: 'Iranian Rial', country: 'Iran', flag: '🇮🇷' },
  { code: 'IQD', name: 'Iraqi Dinar', country: 'Iraq', flag: '🇮🇶' },
  { code: 'SYP', name: 'Syrian Pound', country: 'Syria', flag: '🇸🇾' },
  { code: 'YER', name: 'Yemeni Rial', country: 'Yemen', flag: '🇾🇪' },
  { code: 'AFN', name: 'Afghan Afghani', country: 'Afghanistan', flag: '🇦🇫' },
  { code: 'PKR', name: 'Pakistani Rupee', country: 'Pakistan', flag: '🇵🇰' },
  
  // North Africa
  { code: 'MAD', name: 'Moroccan Dirham', country: 'Morocco', flag: '🇲🇦' },
  { code: 'TND', name: 'Tunisian Dinar', country: 'Tunisia', flag: '🇹🇳' },
  { code: 'DZD', name: 'Algerian Dinar', country: 'Algeria', flag: '🇩🇿' },
  { code: 'LYD', name: 'Libyan Dinar', country: 'Libya', flag: '🇱🇾' },
  { code: 'SDG', name: 'Sudanese Pound', country: 'Sudan', flag: '🇸🇩' },
  
  // Other Major Currencies
  { code: 'BRL', name: 'Brazilian Real', country: 'Brazil', flag: '🇧🇷' },
  { code: 'INR', name: 'Indian Rupee', country: 'India', flag: '🇮🇳' },
  { code: 'KRW', name: 'South Korean Won', country: 'South Korea', flag: '🇰🇷' },
  { code: 'RUB', name: 'Russian Ruble', country: 'Russia', flag: '🇷🇺' },
  { code: 'ZAR', name: 'South African Rand', country: 'South Africa', flag: '🇿🇦' },
  { code: 'PLN', name: 'Polish Zloty', country: 'Poland', flag: '🇵🇱' },
  { code: 'DKK', name: 'Danish Krone', country: 'Denmark', flag: '🇩🇰' },
  { code: 'CZK', name: 'Czech Koruna', country: 'Czech Republic', flag: '🇨🇿' },
  { code: 'HUF', name: 'Hungarian Forint', country: 'Hungary', flag: '🇭🇺' },
  { code: 'CLP', name: 'Chilean Peso', country: 'Chile', flag: '🇨🇱' },
  { code: 'PHP', name: 'Philippine Peso', country: 'Philippines', flag: '🇵🇭' },
  { code: 'THB', name: 'Thai Baht', country: 'Thailand', flag: '🇹🇭' },
  { code: 'MYR', name: 'Malaysian Ringgit', country: 'Malaysia', flag: '🇲🇾' },
  { code: 'IDR', name: 'Indonesian Rupiah', country: 'Indonesia', flag: '🇮🇩' },
  { code: 'VND', name: 'Vietnamese Dong', country: 'Vietnam', flag: '🇻🇳' },
  { code: 'BDT', name: 'Bangladeshi Taka', country: 'Bangladesh', flag: '🇧🇩' },
  { code: 'LKR', name: 'Sri Lankan Rupee', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'NPR', name: 'Nepalese Rupee', country: 'Nepal', flag: '🇳🇵' },
  { code: 'MMK', name: 'Myanmar Kyat', country: 'Myanmar', flag: '🇲🇲' },
  { code: 'KZT', name: 'Kazakhstani Tenge', country: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'UZS', name: 'Uzbekistani Som', country: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'AZN', name: 'Azerbaijani Manat', country: 'Azerbaijan', flag: '🇦🇿' },
  { code: 'GEL', name: 'Georgian Lari', country: 'Georgia', flag: '🇬🇪' },
  { code: 'AMD', name: 'Armenian Dram', country: 'Armenia', flag: '🇦🇲' },
];

export const popularCurrencies = ['USD', 'EUR', 'GBP', 'SAR', 'AED', 'QAR', 'KWD', 'EGP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY'];

export const getCurrencyByCode = (code: string): Currency | undefined => {
  return currencies.find(currency => currency.code === code);
};