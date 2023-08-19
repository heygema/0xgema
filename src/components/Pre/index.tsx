import { Copy } from 'lucide-react';

import { globalVars } from '../../styles/theme.css';

import * as styles from './style.css';
import { useRef } from 'react';

export function Pre(props: any) {
  const ref = useRef();
  const copyToClipboard = () => {
    if (document) {
      const range = document.createRange();
      range.selectNode(ref.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      try {
        document.execCommand('copy');
        window.getSelection().removeRange(range);
        alert('Copied!');
      } catch (e) {
        // console.error('Copy failed:', e);
      }
    }
  };

  return (
    <pre className={styles.pre} {...props}>
      <button onClick={copyToClipboard} className={styles.copyButton}>
        <Copy color={globalVars.colors['white-transluscent50']} size={32} />
      </button>
      {props.children}
    </pre>
  );
}
