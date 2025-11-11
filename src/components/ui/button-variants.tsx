import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

/**
 * Custom button variants for the sports hydration store
 */

interface HeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const HeroButton = ({ variant = 'primary', children, className, ...props }: HeroButtonProps) => {
  return (
    <Button
      size="lg"
      className={cn(
        variant === 'primary' 
          ? 'bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 py-6' 
          : 'border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6',
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
