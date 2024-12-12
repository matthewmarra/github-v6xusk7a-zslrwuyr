import { themes } from '../config/themes';

export function Game() {
  const theme = themes[0];
  return <div className={theme.background}>Game Component</div>;
}