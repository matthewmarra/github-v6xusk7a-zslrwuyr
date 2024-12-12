import { ReactNode } from 'react';
import { Logo } from '../../layout/Logo';
import { Header } from './Header';
import { BackLink } from '../../layout/BackLink';
import { ThemeConfig } from '../../../types/theme';

interface GameLayoutProps {
  children: ReactNode;
  theme: ThemeConfig;
  onExit: (score?: number) => void;
}

export function GameLayout({ children, theme, onExit }: GameLayoutProps) {
  return (
    <div className={`min-h-screen ${theme.background} p-6 relative`}>
      <BackLink onClick={() => onExit()} theme={theme} />
      <div className="max-w-4xl mx-auto">
        <Logo />
        <Header theme={theme} />
        {children}
      </div>
    </div>
  );
}