import { ThemeConfig } from '../types/theme';

export const themes: ThemeConfig[] = [
  {
    name: 'default',
    label: '🎓 Default',
    background: 'bg-gradient-to-br from-[rgb(225,36,42)] via-[rgb(137,21,21)] to-[rgb(52,55,63)]',
    boardBg: 'bg-white/10 backdrop-blur-sm',
    accentBg: 'bg-black/20 backdrop-blur-sm',
    buttonBg: 'bg-[rgb(137,21,21)]',
    buttonHoverBg: 'hover:bg-[rgb(225,36,42)]',
    headerText: 'text-[rgb(255,255,255)]',
    bodyText: 'text-[rgb(255,255,255)]/90',
    successText: 'text-[rgb(255,255,255)]',
    errorText: 'text-[rgb(255,255,255)]',
  }
];