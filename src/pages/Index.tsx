import { CurrencyConverter } from '@/components/CurrencyConverter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Currency
            </span>{' '}
            <span className="text-foreground">Converter</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Convert currencies with real-time exchange rates. Fast, accurate, and always up-to-date 
            for travelers, businesses, and anyone dealing with international currencies.
          </p>
        </div>

        {/* Main Converter */}
        <div className="flex justify-center">
          <CurrencyConverter />
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-xl shadow-design-md border border-border">
            <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Global Coverage</h3>
            <p className="text-muted-foreground">
              Support for 40+ major currencies worldwide with comprehensive coverage.
            </p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-design-md border border-border">
            <div className="w-12 h-12 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Real-Time Rates</h3>
            <p className="text-muted-foreground">
              Live exchange rates updated daily from trusted financial sources.
            </p>
          </div>
          
          <div className="text-center p-6 bg-card rounded-xl shadow-design-md border border-border">
            <div className="w-12 h-12 bg-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Friendly</h3>
            <p className="text-muted-foreground">
              Responsive design that works perfectly on desktop, tablet, and mobile.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-muted-foreground">
          <p className="text-sm">
            Exchange rates provided by{' '}
            <a 
              href="https://exchangerate-api.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover transition-colors underline"
            >
              ExchangeRate-API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;