import {style} from '@vanilla-extract/css';
import { globalVars } from '../../styles/theme.css';

export const root = style({
  background: 'url(/assets/images/avatar-bg-white.png)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '50px',
  aspectRatio: '1 / 1',
  cursor: 'pointer',
  boxShadow: globalVars.shadow.macShadow,
  // margin: '0 auto',
  //borderRadius: "16px",
  borderRadius: '100%',
});
