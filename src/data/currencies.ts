export interface Currency {
  code: string;
  name: string;
  country: string;
  flag: string;
}

export const currencies: Currency[] = [
  // Major Global Currencies
  { code: 'USD', name: 'United States Dollar', country: 'United States', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', country: 'European Union', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound Sterling', country: 'United Kingdom', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', country: 'Japan', flag: '🇯🇵' },
  { code: 'CHF', name: 'Swiss Franc', country: 'Switzerland', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', country: 'China', flag: '🇨🇳' },
  
  // North America
  { code: 'CAD', name: 'Canadian Dollar', country: 'Canada', flag: '🇨🇦' },
  { code: 'MXN', name: 'Mexican Peso', country: 'Mexico', flag: '🇲🇽' },
  { code: 'GTQ', name: 'Guatemalan Quetzal', country: 'Guatemala', flag: '🇬🇹' },
  { code: 'BZD', name: 'Belize Dollar', country: 'Belize', flag: '🇧🇿' },
  { code: 'CRC', name: 'Costa Rican Colón', country: 'Costa Rica', flag: '🇨🇷' },
  { code: 'HNL', name: 'Honduran Lempira', country: 'Honduras', flag: '🇭🇳' },
  { code: 'NIO', name: 'Nicaraguan Córdoba', country: 'Nicaragua', flag: '🇳🇮' },
  { code: 'PAB', name: 'Panamanian Balboa', country: 'Panama', flag: '🇵🇦' },
  { code: 'SVC', name: 'Salvadoran Colón', country: 'El Salvador', flag: '🇸🇻' },
  
  // Caribbean
  { code: 'JMD', name: 'Jamaican Dollar', country: 'Jamaica', flag: '🇯🇲' },
  { code: 'BSD', name: 'Bahamian Dollar', country: 'Bahamas', flag: '🇧🇸' },
  { code: 'BBD', name: 'Barbadian Dollar', country: 'Barbados', flag: '🇧🇧' },
  { code: 'XCD', name: 'East Caribbean Dollar', country: 'Eastern Caribbean', flag: '🏴' },
  { code: 'TTD', name: 'Trinidad and Tobago Dollar', country: 'Trinidad and Tobago', flag: '🇹🇹' },
  { code: 'HTG', name: 'Haitian Gourde', country: 'Haiti', flag: '🇭🇹' },
  { code: 'DOP', name: 'Dominican Peso', country: 'Dominican Republic', flag: '🇩🇴' },
  { code: 'CUP', name: 'Cuban Peso', country: 'Cuba', flag: '🇨🇺' },
  
  // South America
  { code: 'BRL', name: 'Brazilian Real', country: 'Brazil', flag: '🇧🇷' },
  { code: 'ARS', name: 'Argentine Peso', country: 'Argentina', flag: '🇦🇷' },
  { code: 'CLP', name: 'Chilean Peso', country: 'Chile', flag: '🇨🇱' },
  { code: 'COP', name: 'Colombian Peso', country: 'Colombia', flag: '🇨🇴' },
  { code: 'PEN', name: 'Peruvian Sol', country: 'Peru', flag: '🇵🇪' },
  { code: 'VES', name: 'Venezuelan Bolívar', country: 'Venezuela', flag: '🇻🇪' },
  { code: 'UYU', name: 'Uruguayan Peso', country: 'Uruguay', flag: '🇺🇾' },
  { code: 'PYG', name: 'Paraguayan Guaraní', country: 'Paraguay', flag: '🇵🇾' },
  { code: 'BOB', name: 'Bolivian Boliviano', country: 'Bolivia', flag: '🇧🇴' },
  { code: 'ECU', name: 'Ecuador Sucre', country: 'Ecuador', flag: '🇪🇨' },
  { code: 'GYD', name: 'Guyanese Dollar', country: 'Guyana', flag: '🇬🇾' },
  { code: 'SRD', name: 'Surinamese Dollar', country: 'Suriname', flag: '🇸🇷' },
  
  // Europe
  { code: 'NOK', name: 'Norwegian Krone', country: 'Norway', flag: '🇳🇴' },
  { code: 'SEK', name: 'Swedish Krona', country: 'Sweden', flag: '🇸🇪' },
  { code: 'DKK', name: 'Danish Krone', country: 'Denmark', flag: '🇩🇰' },
  { code: 'ISK', name: 'Icelandic Króna', country: 'Iceland', flag: '🇮🇸' },
  { code: 'PLN', name: 'Polish Złoty', country: 'Poland', flag: '🇵🇱' },
  { code: 'CZK', name: 'Czech Koruna', country: 'Czech Republic', flag: '🇨🇿' },
  { code: 'HUF', name: 'Hungarian Forint', country: 'Hungary', flag: '🇭🇺' },
  { code: 'RON', name: 'Romanian Leu', country: 'Romania', flag: '🇷🇴' },
  { code: 'BGN', name: 'Bulgarian Lev', country: 'Bulgaria', flag: '🇧🇬' },
  { code: 'HRK', name: 'Croatian Kuna', country: 'Croatia', flag: '🇭🇷' },
  { code: 'RSD', name: 'Serbian Dinar', country: 'Serbia', flag: '🇷🇸' },
  { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: 'MKD', name: 'Macedonian Denar', country: 'North Macedonia', flag: '🇲🇰' },
  { code: 'ALL', name: 'Albanian Lek', country: 'Albania', flag: '🇦🇱' },
  { code: 'UAH', name: 'Ukrainian Hryvnia', country: 'Ukraine', flag: '🇺🇦' },
  { code: 'BYN', name: 'Belarusian Ruble', country: 'Belarus', flag: '🇧🇾' },
  { code: 'MDL', name: 'Moldovan Leu', country: 'Moldova', flag: '🇲🇩' },
  { code: 'RUB', name: 'Russian Ruble', country: 'Russia', flag: '🇷🇺' },
  
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
  
  // North Africa
  { code: 'MAD', name: 'Moroccan Dirham', country: 'Morocco', flag: '🇲🇦' },
  { code: 'TND', name: 'Tunisian Dinar', country: 'Tunisia', flag: '🇹🇳' },
  { code: 'DZD', name: 'Algerian Dinar', country: 'Algeria', flag: '🇩🇿' },
  { code: 'LYD', name: 'Libyan Dinar', country: 'Libya', flag: '🇱🇾' },
  { code: 'SDG', name: 'Sudanese Pound', country: 'Sudan', flag: '🇸🇩' },
  
  // Sub-Saharan Africa
  { code: 'ZAR', name: 'South African Rand', country: 'South Africa', flag: '🇿🇦' },
  { code: 'NGN', name: 'Nigerian Naira', country: 'Nigeria', flag: '🇳🇬' },
  { code: 'GHS', name: 'Ghanaian Cedi', country: 'Ghana', flag: '🇬🇭' },
  { code: 'KES', name: 'Kenyan Shilling', country: 'Kenya', flag: '🇰🇪' },
  { code: 'UGX', name: 'Ugandan Shilling', country: 'Uganda', flag: '🇺🇬' },
  { code: 'TZS', name: 'Tanzanian Shilling', country: 'Tanzania', flag: '🇹🇿' },
  { code: 'ETB', name: 'Ethiopian Birr', country: 'Ethiopia', flag: '🇪🇹' },
  { code: 'RWF', name: 'Rwandan Franc', country: 'Rwanda', flag: '🇷🇼' },
  { code: 'BIF', name: 'Burundian Franc', country: 'Burundi', flag: '🇧🇮' },
  { code: 'DJF', name: 'Djiboutian Franc', country: 'Djibouti', flag: '🇩🇯' },
  { code: 'SOS', name: 'Somali Shilling', country: 'Somalia', flag: '🇸🇴' },
  { code: 'ERN', name: 'Eritrean Nakfa', country: 'Eritrea', flag: '🇪🇷' },
  { code: 'XOF', name: 'West African CFA Franc', country: 'West Africa', flag: '🌍' },
  { code: 'XAF', name: 'Central African CFA Franc', country: 'Central Africa', flag: '🌍' },
  { code: 'MGA', name: 'Malagasy Ariary', country: 'Madagascar', flag: '🇲🇬' },
  { code: 'MUR', name: 'Mauritian Rupee', country: 'Mauritius', flag: '🇲🇺' },
  { code: 'SCR', name: 'Seychellois Rupee', country: 'Seychelles', flag: '🇸🇨' },
  { code: 'CVE', name: 'Cape Verdean Escudo', country: 'Cape Verde', flag: '🇨🇻' },
  { code: 'GMD', name: 'Gambian Dalasi', country: 'Gambia', flag: '🇬🇲' },
  { code: 'GNF', name: 'Guinean Franc', country: 'Guinea', flag: '🇬🇳' },
  { code: 'LRD', name: 'Liberian Dollar', country: 'Liberia', flag: '🇱🇷' },
  { code: 'SLL', name: 'Sierra Leonean Leone', country: 'Sierra Leone', flag: '🇸🇱' },
  { code: 'MWK', name: 'Malawian Kwacha', country: 'Malawi', flag: '🇲🇼' },
  { code: 'ZMW', name: 'Zambian Kwacha', country: 'Zambia', flag: '🇿🇲' },
  { code: 'ZWL', name: 'Zimbabwean Dollar', country: 'Zimbabwe', flag: '🇿🇼' },
  { code: 'BWP', name: 'Botswanan Pula', country: 'Botswana', flag: '🇧🇼' },
  { code: 'NAD', name: 'Namibian Dollar', country: 'Namibia', flag: '🇳🇦' },
  { code: 'SZL', name: 'Swazi Lilangeni', country: 'Eswatini', flag: '🇸🇿' },
  { code: 'LSL', name: 'Lesotho Loti', country: 'Lesotho', flag: '🇱🇸' },
  { code: 'MZN', name: 'Mozambican Metical', country: 'Mozambique', flag: '🇲🇿' },
  { code: 'AOA', name: 'Angolan Kwanza', country: 'Angola', flag: '🇦🇴' },
  
  // Asia
  { code: 'INR', name: 'Indian Rupee', country: 'India', flag: '🇮🇳' },
  { code: 'PKR', name: 'Pakistani Rupee', country: 'Pakistan', flag: '🇵🇰' },
  { code: 'BDT', name: 'Bangladeshi Taka', country: 'Bangladesh', flag: '🇧🇩' },
  { code: 'LKR', name: 'Sri Lankan Rupee', country: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'NPR', name: 'Nepalese Rupee', country: 'Nepal', flag: '🇳🇵' },
  { code: 'BTN', name: 'Bhutanese Ngultrum', country: 'Bhutan', flag: '🇧🇹' },
  { code: 'MVR', name: 'Maldivian Rufiyaa', country: 'Maldives', flag: '🇲🇻' },
  
  // Southeast Asia
  { code: 'THB', name: 'Thai Baht', country: 'Thailand', flag: '🇹🇭' },
  { code: 'VND', name: 'Vietnamese Dong', country: 'Vietnam', flag: '🇻🇳' },
  { code: 'IDR', name: 'Indonesian Rupiah', country: 'Indonesia', flag: '🇮🇩' },
  { code: 'MYR', name: 'Malaysian Ringgit', country: 'Malaysia', flag: '🇲🇾' },
  { code: 'SGD', name: 'Singapore Dollar', country: 'Singapore', flag: '🇸🇬' },
  { code: 'PHP', name: 'Philippine Peso', country: 'Philippines', flag: '🇵🇭' },
  { code: 'BND', name: 'Brunei Dollar', country: 'Brunei', flag: '🇧🇳' },
  { code: 'KHR', name: 'Cambodian Riel', country: 'Cambodia', flag: '🇰🇭' },
  { code: 'LAK', name: 'Lao Kip', country: 'Laos', flag: '🇱🇦' },
  { code: 'MMK', name: 'Myanmar Kyat', country: 'Myanmar', flag: '🇲🇲' },
  { code: 'TJS', name: 'Tajikistani Somoni', country: 'Tajikistan', flag: '🇹🇯' },
  
  // East Asia
  { code: 'KRW', name: 'South Korean Won', country: 'South Korea', flag: '🇰🇷' },
  { code: 'KPW', name: 'North Korean Won', country: 'North Korea', flag: '🇰🇵' },
  { code: 'HKD', name: 'Hong Kong Dollar', country: 'Hong Kong', flag: '🇭🇰' },
  { code: 'MOP', name: 'Macanese Pataca', country: 'Macau', flag: '🇲🇴' },
  { code: 'TWD', name: 'Taiwan Dollar', country: 'Taiwan', flag: '🇹🇼' },
  { code: 'MNT', name: 'Mongolian Tugrik', country: 'Mongolia', flag: '🇲🇳' },
  
  // Central Asia
  { code: 'KZT', name: 'Kazakhstani Tenge', country: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'UZS', name: 'Uzbekistani Som', country: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'KGS', name: 'Kyrgyzstani Som', country: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: 'TMT', name: 'Turkmenistani Manat', country: 'Turkmenistan', flag: '🇹🇲' },
  
  // Caucasus
  { code: 'AZN', name: 'Azerbaijani Manat', country: 'Azerbaijan', flag: '🇦🇿' },
  { code: 'GEL', name: 'Georgian Lari', country: 'Georgia', flag: '🇬🇪' },
  { code: 'AMD', name: 'Armenian Dram', country: 'Armenia', flag: '🇦🇲' },
  
  // Oceania
  { code: 'AUD', name: 'Australian Dollar', country: 'Australia', flag: '🇦🇺' },
  { code: 'NZD', name: 'New Zealand Dollar', country: 'New Zealand', flag: '🇳🇿' },
  { code: 'FJD', name: 'Fijian Dollar', country: 'Fiji', flag: '🇫🇯' },
  { code: 'PGK', name: 'Papua New Guinean Kina', country: 'Papua New Guinea', flag: '🇵🇬' },
  { code: 'VUV', name: 'Vanuatu Vatu', country: 'Vanuatu', flag: '🇻🇺' },
  { code: 'WST', name: 'Samoan Tala', country: 'Samoa', flag: '🇼🇸' },
  { code: 'TOP', name: 'Tongan Paʻanga', country: 'Tonga', flag: '🇹🇴' },
  { code: 'SBD', name: 'Solomon Islands Dollar', country: 'Solomon Islands', flag: '🇸🇧' },
  { code: 'NCR', name: 'New Caledonian Franc', country: 'New Caledonia', flag: '🇳🇨' },
  { code: 'XPF', name: 'CFP Franc', country: 'French Polynesia', flag: '🇵🇫' },
];

export const popularCurrencies = ['USD', 'EUR', 'GBP', 'SAR', 'AED', 'QAR', 'KWD', 'EGP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY'];

export const getCurrencyByCode = (code: string): Currency | undefined => {
  return currencies.find(currency => currency.code === code);
};