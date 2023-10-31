import { useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (
  text: string,
  onCopyToClipboard: () => void,
  onWriteError: () => void,
) => Promise<boolean>;
type ReturnTypes = [CopiedValue, CopyFn];

const useClipboard = (): ReturnTypes => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null);

  const copyToClipboard: CopyFn = async (
    text,
    onCopyToClipboard,
    onWriteError,
  ) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      onCopyToClipboard();
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      onWriteError();
      return false;
    }
  };

  return [copiedText, copyToClipboard];
};

export default useClipboard;
