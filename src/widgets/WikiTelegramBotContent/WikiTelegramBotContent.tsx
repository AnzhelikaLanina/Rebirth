import {
  telegramBotData,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import styles from './WikiTelegramBotContent.module.css';

export const WikiTelegramBotContent = ({ id }: WikiComponentProps) => {
  const { telegramBot, wiki } = useLocalizedData();

  const localizedItems = mapWithLocalization(
    telegramBotData,
    telegramBot,
    'text',
  );

  return (
    <WikiLayout title={wiki.telegramBotHeader} id={id} imgStyle={styles.image}>
      {renderItemCards(localizedItems)}
    </WikiLayout>
  );
};
