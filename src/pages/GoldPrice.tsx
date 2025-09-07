
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { MonetizationIcon, UpdateIcon, CurrencyExchangeIcon, ErrorIcon } from '@/components/icons';

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

const GoldPricePage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [goldPriceData, setGoldPriceData] = useState<GoldPriceData | null>(null);
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('');
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
      <div className="flex items-center justify-center min-h-screen bg-[var(--background)] p-4">
        <Card className="w-full max-w-md p-6 rounded-2xl" style={{ background: 'var(--card-gradient)', boxShadow: 'var(--card-shadow)' }}>
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <div className="flex justify-between">
              <Skeleton className="h-12 w-2/5" />
              <Skeleton className="h-12 w-2/5" />
            </div>
            <Skeleton className="h-10 w-full" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[var(--background)] p-4 font-sans">
      <Card className="w-full max-w-md p-6 rounded-2xl" style={{ background: 'var(--card-gradient)', boxShadow: 'var(--card-shadow)' }}>
        <div className="space-y-6">
          <div className="rounded-2xl p-5 text-[var(--primary-foreground)]" style={{ background: 'var(--primary-gradient)' }}>
            <div className="flex items-center gap-3 mb-4">
              <MonetizationIcon className="w-6 h-6" />
              <h2 className="text-xl font-semibold">Gold Prices (USD)</h2>
            </div>
            <div className="flex justify-around items-center">
              <div className="text-center">
                <p className="opacity-80">Per Ounce</p>
                <p className="text-3xl font-bold">${goldPriceData?.ounce.toFixed(2)}</p>
              </div>
              <div className="w-px h-16 bg-[var(--divider-color)]"></div>
              <div className="text-center">
                <p className="opacity-80">Per Gram</p>
                <p className="text-3xl font-bold">${goldPriceData?.gram.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {goldPriceData?.lastUpdated && (
            <div className="flex justify-center">
                <div className="px-4 py-2 flex items-center gap-2 text-sm rounded-full bg-[var(--muted)] text-[var(--muted-foreground)]">
                    <UpdateIcon className="w-4 h-4" />
                    Last updated: {new Date(goldPriceData.lastUpdated).toLocaleString()}
                </div>
            </div>
          )}

          <div>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">Convert to different currencies</h2>
            <Select onValueChange={setSelectedCurrency} value={selectedCurrency}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent>
                {exchangeRates && Object.keys(exchangeRates).map(currency => (
                  <SelectItem key={currency} value={currency}>{currency}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {convertedPrice && selectedCurrency && (
            <div className="rounded-2xl p-5 text-[var(--secondary-foreground)]" style={{ background: 'var(--secondary-gradient)' }}>
              <div className="flex items-center gap-3 mb-4">
                <CurrencyExchangeIcon className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Converted Prices ({selectedCurrency})</h2>
              </div>
              <div className="flex justify-around items-center">
                <div className="text-center">
                  <p className="opacity-80">Per Ounce</p>
                  <p className="text-2xl font-bold">{convertedPrice.ounce.toLocaleString(undefined, { style: 'currency', currency: selectedCurrency, minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
                <div className="w-px h-16 bg-[var(--divider-color)]"></div>
                <div className="text-center">
                  <p className="opacity-80">Per Gram</p>
                  <p className="text-2xl font-bold">{convertedPrice.gram.toLocaleString(undefined, { style: 'currency', currency: selectedCurrency, minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      <Dialog open={!!error} onOpenChange={() => setError(null)}>
        <DialogContent>
          <DialogHeader>
            <div className="flex flex-col items-center text-center gap-2 py-4">
                <ErrorIcon className="w-12 h-12 text-[var(--destructive)]" />
                <DialogTitle className="text-xl font-bold">An Error Occurred</DialogTitle>
                <p className="text-base text-[var(--muted-foreground)]">{error}</p>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleRetry} className="w-full">Retry</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GoldPricePage;
