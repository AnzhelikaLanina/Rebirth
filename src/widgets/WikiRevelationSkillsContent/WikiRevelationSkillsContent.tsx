import {
  revelationSkillsIntroData,
  revelationSkillsSkill1904Data,
  revelationSkillsSkill1912Data,
  revelationSkillsSkill1914Data,
  revelationSkillsSkill1917Data,
  revelationSkillsSkill1920Data,
  revelationSkillsSkill1925Data,
  revelationSkillsSkill11057Data,
  mapWithLocalization,
  renderItemCards,
  useLocalizedData,
  WikiComponentProps,
  WikiLayout,
} from '@/shared';
import { Table } from '@/widgets';
import styles from './WikiRevelationSkillsContent.module.css';

export const WikiRevelationSkillsContent = ({ id }: WikiComponentProps) => {
  const { revelationSkills, wiki } = useLocalizedData();

  const localizedIntro = mapWithLocalization(
    revelationSkillsIntroData,
    revelationSkills,
    'text',
  );
  const localizedSkill1904 = mapWithLocalization(
    revelationSkillsSkill1904Data,
    revelationSkills.skill1904,
    'text',
  );
  const localizedSkill1912 = mapWithLocalization(
    revelationSkillsSkill1912Data,
    revelationSkills.skill1912,
    'text',
  );
  const localizedSkill1914 = mapWithLocalization(
    revelationSkillsSkill1914Data,
    revelationSkills.skill1914,
    'text',
  );
  const localizedSkill1917 = mapWithLocalization(
    revelationSkillsSkill1917Data,
    revelationSkills.skill1917,
    'text',
  );
  const localizedSkill1920 = mapWithLocalization(
    revelationSkillsSkill1920Data,
    revelationSkills.skill1920,
    'text',
  );
  const localizedSkill1925 = mapWithLocalization(
    revelationSkillsSkill1925Data,
    revelationSkills.skill1925,
    'text',
  );
  const localizedSkill11057 = mapWithLocalization(
    revelationSkillsSkill11057Data,
    revelationSkills.skill11057,
    'text',
  );

  return (
    <WikiLayout
      title={wiki.revelationSkillsHeader}
      id={id}
      imgStyle={styles.image}
    >
      {renderItemCards(localizedIntro)}
      <Table list={localizedSkill1904} />
      <Table list={localizedSkill1912} />
      <Table list={localizedSkill1914} />
      <Table list={localizedSkill1917} />
      <Table list={localizedSkill1920} />
      <Table list={localizedSkill1925} />
      <Table list={localizedSkill11057} />
    </WikiLayout>
  );
};
