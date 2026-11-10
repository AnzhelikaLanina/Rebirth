import type { MouseEvent } from 'react';

export const handleModalLinkClick =
  (onOpen: () => void) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    onOpen();
  };
