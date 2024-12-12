export type Theme = 'default';

export interface ThemeConfig {
  name: Theme;
  label: string;
  background: string;
  boardBg: string;
  accentBg: string;
  buttonBg: string;
  buttonHoverBg: string;
  headerText: string;
  bodyText: string;
  successText: string;
  errorText: string;
}