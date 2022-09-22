import 'styled-components';
import { Theme } from '../theme/lightTheme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  type themeType = Theme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends themeType {}
}
