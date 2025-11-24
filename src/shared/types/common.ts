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

export type WikiComponentProps = {
  id: string;
};

export type Language = 'ru' | 'en';

export type OpenModal = {
  onOpenModal: () => void;
};

export type ButtonDef = {
  key: 'google' | 'yandex' | 'mediafire';
  text: string;
  link: string;
};
