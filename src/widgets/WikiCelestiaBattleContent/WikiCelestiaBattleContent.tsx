import {
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
  ListBlock,
  TextBlock,
  SectionBlock,
} from '@/shared';
import styles from './WikiCelestiaBattleContent.module.css';

export const WikiCelestiaBattleContent = ({ id }: WikiComponentProps) => {
  const { celestiaBattle } = useLocalizedData();
  const { stage1, stage2, stage3, stage4 } = celestiaBattle;

  const { baseChances } = stage4;

  return (
    <WikiLayout title={celestiaBattle.header} id={id} imgStyle={styles.image}>
      <TextBlock block={celestiaBattle} />
      <SectionBlock title={stage1.header}>
        <TextBlock block={stage1} />
      </SectionBlock>
      <SectionBlock title={stage2.header}>
        <TextBlock block={stage2} />
      </SectionBlock>
      <SectionBlock title={stage3.header}>
        <TextBlock block={stage3} />
      </SectionBlock>
      <SectionBlock title={stage4.header}>
        <TextBlock block={stage4} from={0} to={5} />
        <ListBlock list={baseChances} />
        <TextBlock block={stage4} from={5} />
      </SectionBlock>
    </WikiLayout>
  );
};
