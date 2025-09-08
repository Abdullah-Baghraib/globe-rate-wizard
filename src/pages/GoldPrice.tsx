import React, { useState, useEffect, useCallback } from 'react';
import { Check, ChevronsUpDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { MonetizationIcon, UpdateIcon, CurrencyExchangeIcon, ErrorIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

interface GoldPriceData {
  ounce: number;
  gram: number;
  lastUpdated: number;
}

interface ExchangeRates {
  [key: string]: number;
}

interface ConvertedPrice {
  ounce: number;
  gram: number;
}

const formatCurrency = (value: number, currency: string): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
};

const GoldPricePage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [goldPriceData, setGoldPriceData] = useState<GoldPriceData | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [convertedPrice, setConvertedPrice] = useState<ConvertedPrice | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [goldResponse, ratesResponse] = await Promise.all([
        fetch('https://api.gold-api.com/price/XAU'),
        fetch('https://open.er-api.com/v6/latest/USD'),
      ]);

      if (!goldResponse.ok || !ratesResponse.ok) {
        throw new Error('Could not fetch latest price data.');
      }

      const goldData = await goldResponse.json();
      const ratesData = await ratesResponse.json();

      const pricePerOunce = goldData.price;
      const pricePerGram = pricePerOunce / 31.1035;

      setGoldPriceData({
        ounce: pricePerOunce,
        gram: pricePerGram,
        lastUpdated: goldData.updatedAt,
      });

      setExchangeRates(ratesData.rates);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (selectedCurrency && goldPriceData && exchangeRates) {
      const targetRate = exchangeRates[selectedCurrency];
      if (targetRate) {
        setConvertedPrice({
          ounce: goldPriceData.ounce * targetRate,
          gram: goldPriceData.gram * targetRate,
        });
      }
    } else {
      setConvertedPrice(null);
    }
  }, [selectedCurrency, goldPriceData, exchangeRates]);

  const handleRetry = () => {
    setError(null);
    fetchData();
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen overflow-y-auto max-w-3xl">
        <Card className="w-full p-8 shadow-lg rounded-xl border border-border/40 my-auto">
          <div className="space-y-6">
            <Card className="w-full p-8 bg-blue-500 text-white rounded-xl">
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4 bg-blue-400/50" />
                <div className="grid grid-cols-2 gap-8">
                  <Skeleton className="h-20 bg-blue-400/50" />
                  <Skeleton className="h-20 bg-blue-400/50" />
                </div>
              </div>
            </Card>
            <Skeleton className="h-12 w-full" />
            <Card className="w-full p-8 bg-emerald-500 text-white rounded-xl">
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4 bg-emerald-400/50" />
                <div className="grid grid-cols-2 gap-8">
                  <Skeleton className="h-20 bg-emerald-400/50" />
                  <Skeleton className="h-20 bg-emerald-400/50" />
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-20 min-h-screen overflow-y-auto max-w-3xl">
        <Card className="w-full p-8 shadow-lg rounded-xl border border-border/40 my-auto">
          <div className="text-center space-y-4">
            <ErrorIcon className="w-12 h-12 mx-auto text-destructive" />
            <h2 className="text-xl font-semibold">Error</h2>
            <p className="text-muted-foreground">{error}</p>
            <Button onClick={handleRetry} variant="outline">
              <UpdateIcon className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen overflow-y-auto max-w-2xl">
      <Card className="w-full p-8 shadow-lg rounded-xl border border-border/40 my-auto">
        <div className="space-y-8">
          {/* USD Price Card */}
          <Card className="w-full p-8 bg-gradient-to-r from-[#0f2c80] to-[#0C70F3FF] text-white rounded-xl">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-medium flex items-center gap-2">
                <MonetizationIcon className="w-6 h-6" />
                Gold Prices (USD)
              </h2>
              <Button 
                onClick={fetchData} 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-white hover:bg-white/10"
              >
                <UpdateIcon className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-sm opacity-90 mb-1">Per Ounce</div>
                <div className="text-3xl font-semibold">
                  {goldPriceData ? formatCurrency(goldPriceData.ounce, 'USD') : 'N/A'}
                </div>
              </div>
              <div>
                <div className="text-sm opacity-90 mb-1">Per Gram</div>
                <div className="text-3xl font-semibold">
                  {goldPriceData ? formatCurrency(goldPriceData.gram, 'USD') : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Currency Selection */}
        <div>
          <h3 className="text-lg font-medium mb-3">Convert to different currencies</h3>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                className="w-full h-12 justify-between font-medium bg-card hover:bg-muted/50 border-border shadow-design-sm transition-all duration-300"
              >
                {selectedCurrency ? (
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-lg">
                      <span className="text-sm">{selectedCurrency}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Search className="h-4 w-4" />
                    <span>Select currency...</span>
                  </div>
                )}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[320px] p-0 bg-popover border-border shadow-design-lg" align="start">
              <Command className="bg-popover">
                <div className="sticky top-0 z-10 bg-popover border-b border-border">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <CommandInput 
                      placeholder="Search currency..." 
                      className="h-12 pl-9"
                    />
                  </div>
                </div>
                <CommandList className="max-h-[300px] overflow-y-auto">
                  <CommandEmpty>No currency found.</CommandEmpty>
                  <CommandGroup className="p-2">
                    {exchangeRates && Object.keys(exchangeRates).map((currency) => (
                      <CommandItem
                        key={currency}
                        value={currency}
                        onSelect={() => {
                          setSelectedCurrency(currency);
                        }}
                        className="flex items-center gap-3 p-3 hover:bg-muted/80 hover:text-foreground data-[selected=true]:bg-muted/60 data-[selected=true]:text-foreground transition-colors cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-border flex items-center justify-center text-lg shadow-design-sm">
                          <span className="text-sm">{currency}</span>
                        </div>
                        <span className="flex-1 font-semibold">{currency}</span>
                        <Check
                          className={cn(
                            "h-4 w-4 text-primary",
                            selectedCurrency === currency ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Converted Price Card */}
        {convertedPrice && selectedCurrency && (
          <Card className="w-full p-8 bg-gradient-to-r from-[#0e9f6e] to-[#06DD98FF] text-white rounded-xl">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CurrencyExchangeIcon className="w-6 h-6" />
                <h2 className="text-xl font-medium">Converted Prices ({selectedCurrency})</h2>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-2">
                <div>
                  <div className="text-sm opacity-90 mb-2">Per Ounce</div>
                  <div className="text-3xl font-semibold">
                    {selectedCurrency} {parseFloat(convertedPrice.ounce.toFixed(2)).toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-90 mb-2">Per Gram</div>
                  <div className="text-3xl font-semibold">
                    {selectedCurrency} {parseFloat(convertedPrice.gram.toFixed(2)).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Last Updated */}
        {goldPriceData && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <UpdateIcon className="w-4 h-4" />
            Last updated: {formatDate(goldPriceData.lastUpdated)}
          </div>
        )}
        </div>
      </Card>

      {/* Developer Credit */}
      <div className="text-center mt-4">
        <p className="text-sm text-muted-foreground">
          Developed by{" "}
          <a 
            href="https://abdullahdev-five.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark underline decoration-primary hover:decoration-primary-dark transition-colors duration-200 font-medium"
          >
            Abdullah.dev
          </a>
        </p>
      </div>
    </div>
  );
};

export default GoldPricePage;
