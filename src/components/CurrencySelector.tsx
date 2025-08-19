import { useState } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { currencies, popularCurrencies, type Currency } from '@/data/currencies';
import { cn } from '@/lib/utils';

interface CurrencySelectorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function CurrencySelector({ value, onChange, className }: CurrencySelectorProps) {
  const [open, setOpen] = useState(false);
  
  const selectedCurrency = currencies.find(currency => currency.code === value);
  const popularCurrencyList = currencies.filter(currency => 
    popularCurrencies.includes(currency.code)
  );
  const otherCurrencies = currencies.filter(currency => 
    !popularCurrencies.includes(currency.code)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between font-medium bg-card hover:bg-muted/50 border-border shadow-design-sm transition-all duration-300 min-w-0",
            className
          )}
        >
          {selectedCurrency ? (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-border flex items-center justify-center text-lg shadow-design-sm overflow-hidden">
                <span className="text-sm">{selectedCurrency.flag}</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-foreground">{selectedCurrency.code}</span>
                <span className="text-xs text-muted-foreground truncate max-w-[80px] sm:max-w-[120px]">
                  {selectedCurrency.country}
                </span>
              </div>
            </div>
          ) : (
            "Select currency..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0 bg-popover border-border shadow-design-lg">
        <Command>
          <CommandInput placeholder="Search currency or country..." className="h-12" />
          <CommandEmpty>No currency found.</CommandEmpty>
          
          <CommandGroup heading="Popular Currencies" className="text-xs font-semibold text-muted-foreground p-2">
            {popularCurrencyList.map((currency) => (
              <CommandItem
                key={currency.code}
                value={`${currency.code} ${currency.name} ${currency.country}`}
                onSelect={() => {
                  onChange(currency.code);
                  setOpen(false);
                }}
                className="flex items-center gap-3 p-3 hover:bg-accent-light transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white border-2 border-border flex items-center justify-center text-lg shadow-design-sm overflow-hidden">
                  <span className="text-sm">{currency.flag}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{currency.code}</div>
                  <div className="text-sm text-muted-foreground">{currency.name}</div>
                </div>
                <Check
                  className={cn(
                    "h-4 w-4 text-primary",
                    value === currency.code ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          
          <CommandGroup heading="All Currencies" className="text-xs font-semibold text-muted-foreground p-2">
            {otherCurrencies.map((currency) => (
              <CommandItem
                key={currency.code}
                value={`${currency.code} ${currency.name} ${currency.country}`}
                onSelect={() => {
                  onChange(currency.code);
                  setOpen(false);
                }}
                className="flex items-center gap-3 p-3 hover:bg-accent-light transition-colors cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white border-2 border-border flex items-center justify-center text-lg shadow-design-sm overflow-hidden">
                  <span className="text-sm">{currency.flag}</span>
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-foreground">{currency.code}</div>
                  <div className="text-sm text-muted-foreground">{currency.name}</div>
                </div>
                <Check
                  className={cn(
                    "h-4 w-4 text-primary",
                    value === currency.code ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}