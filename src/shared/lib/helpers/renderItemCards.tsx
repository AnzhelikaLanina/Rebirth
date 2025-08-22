import { TableItemProps } from '@/shared/types';
import { ItemCard } from '@/shared/ui';

export const renderItemCards = (items: TableItemProps[]) => {
  return items.map((item, index) => (
    <ItemCard key={index} src={item.src} alt={item.alt} text={item.text} />
  ));
};