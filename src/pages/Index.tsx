import { CurrencyConverter } from '@/components/CurrencyConverter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Currency
            </span>{' '}
            <span className="text-foreground">Converter</span>
          </h1>
          <p className="text-muted-foreground">
            Real-time exchange rates for global currencies
          </p>
        </div>

        {/* Main Converter */}
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default Index;