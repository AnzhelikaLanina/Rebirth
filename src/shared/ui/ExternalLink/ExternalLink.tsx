import type { ReactNode } from 'react';

type ExternalLinkProps = {
  href: string;
  children?: ReactNode;
  className?: string;
};

export const ExternalLink = ({
  href,
  children,
  className,
}: ExternalLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
  >
    {children}
  </a>
);
