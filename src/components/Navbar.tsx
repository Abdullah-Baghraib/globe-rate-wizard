import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4 flex items-center h-16 relative">
        <Link 
          to="/" 
          className="absolute left-4 text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent hover:to-primary transition-all duration-300"
        >
          Forexly
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex mx-auto">
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={cn(
                  "text-base transition-all duration-300 hover:text-primary",
                  isActive("/") && "text-[1.1rem] font-medium text-primary"
                )}>
                  Currency Converter
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/gold-price">
                <NavigationMenuLink className={cn(
                  "text-base transition-all duration-300 hover:text-primary",
                  isActive("/gold-price") && "text-[1.1rem] font-medium text-primary"
                )}>
                  Gold Price
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-x-0 top-[64px] p-4 border-b border-border/40 bg-background/80 backdrop-blur-sm md:hidden transition-all duration-300 transform",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}>
          <nav className="space-y-4">
            <Link 
              to="/" 
              className={cn(
                "block px-4 py-2 rounded-lg transition-colors hover:bg-primary/10",
                isActive("/") && "bg-primary/10 text-primary font-medium"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Currency Converter
            </Link>
            <Link 
              to="/gold-price" 
              className={cn(
                "block px-4 py-2 rounded-lg transition-colors hover:bg-primary/10",
                isActive("/gold-price") && "bg-primary/10 text-primary font-medium"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Gold Price
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
