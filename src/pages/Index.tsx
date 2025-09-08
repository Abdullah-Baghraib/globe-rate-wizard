import { CurrencyConverter } from '@/components/CurrencyConverter';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4 pt-16">
      <div className="w-full max-w-2xl mx-auto">
        {/* Main Converter */}
        <CurrencyConverter />
      </div>
    </div>
  );
};

export default Index;