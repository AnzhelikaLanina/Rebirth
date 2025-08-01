export type NavigationItemProps = {
  icon: React.ElementType;
  header?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  activeIcon: React.ElementType;
};

export type TableItemProps = {
  header?: boolean;
  src?: string;
  image?: boolean;
  alt?: string;
  text: string;
};
