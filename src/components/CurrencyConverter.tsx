import { useState, useEffect } from 'react';
import { ArrowUpDown, RefreshCw, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CurrencySelector } from './CurrencySelector';
import { getCurrencyByCode } from '@/data/currencies';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';

interface ExchangeRates {
  [key: string]: number;
}

export function CurrencyConverter() {
  const [amount, setAmount] = useState<string>('100');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('SAR');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates>({});
  const [convertedAmount, setConvertedAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  
  const { toast } = useToast();

  const fetchExchangeRates = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      setExchangeRates(response.data.rates);
      setLastUpdated(new Date());
      
      toast({
        title: "Exchange rates updated",
        description: "Latest rates have been fetched successfully.",
      });
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      toast({
        title: "Error fetching rates",
        description: "Unable to get latest exchange rates. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (exchangeRates[toCurrency] && amount) {
      const numericAmount = parseFloat(amount);
      if (!isNaN(numericAmount)) {
        setConvertedAmount(numericAmount * exchangeRates[toCurrency]);
      }
    }
  }, [amount, toCurrency, exchangeRates]);

  const handleSwapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const getExchangeRate = () => {
    return exchangeRates[toCurrency] || 0;
  };

  const fromCurrencyData = getCurrencyByCode(fromCurrency);
  const toCurrencyData = getCurrencyByCode(toCurrency);

  return (
    <Card className="w-full bg-gradient-card border-border shadow-design-xl">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-xl font-bold text-foreground">
          Convert Currency
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Amount Input */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Amount</label>
          <Input
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={handleAmountChange}
            className="text-xl font-semibold h-14 bg-input border-input-border focus:ring-primary focus:border-primary transition-all duration-300"
          />
        </div>

        {/* Currency Selection Row */}
        <div className="flex items-center gap-4">
          {/* From Currency */}
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-foreground">From</label>
            <CurrencySelector
              value={fromCurrency}
              onChange={setFromCurrency}
              className="h-16 w-full"
            />
          </div>

          {/* Swap Button */}
          <div className="flex items-end pb-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSwapCurrencies}
              className="rounded-full w-12 h-12 p-0 bg-accent hover:bg-accent-light border-accent transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ArrowUpDown className="h-5 w-5 text-accent-foreground" />
            </Button>
          </div>

          {/* To Currency */}
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-foreground">To</label>
            <CurrencySelector
              value={toCurrency}
              onChange={setToCurrency}
              className="h-16 w-full"
            />
          </div>
        </div>

        {/* Conversion Result */}
        <div className="bg-primary-light rounded-lg p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-primary">Converted Amount</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchExchangeRates}
              disabled={loading}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              <RefreshCw className={`h-4 w-4 text-primary ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          
          <div className="text-3xl font-bold text-primary">
            {toCurrencyData?.flag} {convertedAmount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} {toCurrency}
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>
                1 {fromCurrency} = {getExchangeRate().toLocaleString(undefined, {
                  minimumFractionDigits: 4,
                  maximumFractionDigits: 4,
                })} {toCurrency}
              </span>
            </div>
          </div>
          
          {lastUpdated && (
            <div className="text-xs text-muted-foreground text-center">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}