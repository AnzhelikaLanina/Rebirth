import skill1904 from '@/shared/assets/images/items/skill1904.png';
import skill1912 from '@/shared/assets/images/items/skill1912.png';
import skill1914 from '@/shared/assets/images/items/skill1914.png';
import skill1917 from '@/shared/assets/images/items/skill1917.png';
import skill1920 from '@/shared/assets/images/items/skill1920.png';
import skill1925 from '@/shared/assets/images/items/skill1925.png';
import skill11057 from '@/shared/assets/images/items/skill11057.png';

const skillTableData = (
  titleKey: string,
  desc1Key: string,
  desc2Key: string,
  desc3Key: string | undefined,
  src: string,
  alt: string,
) => {
  const rows = [
    {
      header: true,
      image: true,
      key: titleKey,
      src,
      alt,
    },
    {
      header: false,
      image: true,
      key: desc1Key,
      src,
      alt,
    },
    {
      header: false,
      image: true,
      key: desc2Key,
      src,
      alt,
    },
  ];
  if (desc3Key) {
    rows.push({
      header: false,
      image: true,
      key: desc3Key,
      src,
      alt,
    });
  }
  return rows;
};

export const revelationSkillsSkill1904Data = skillTableData(
  'title',
  'desc1',
  'desc2',
  undefined,
  skill1904,
  'skill1904',
);
export const revelationSkillsSkill1912Data = skillTableData(
  'title',
  'desc1',
  'desc2',
  undefined,
  skill1912,
  'skill1912',
);
export const revelationSkillsSkill1914Data = skillTableData(
  'title',
  'desc1',
  'desc2',
  undefined,
  skill1914,
  'skill1914',
);
export const revelationSkillsSkill1917Data = skillTableData(
  'title',
  'desc1',
  'desc2',
  undefined,
  skill1917,
  'skill1917',
);
export const revelationSkillsSkill1920Data = skillTableData(
  'title',
  'desc1',
  'desc2',
  undefined,
  skill1920,
  'skill1920',
);
export const revelationSkillsSkill1925Data = skillTableData(
  'title',
  'desc1',
  'desc2',
  undefined,
  skill1925,
  'skill1925',
);

export const revelationSkillsSkill11057Data = [
  {
    header: true,
    image: true,
    key: 'title',
    src: skill11057,
    alt: 'skill11057',
  },
  {
    header: false,
    image: true,
    key: 'desc1',
    src: skill11057,
    alt: 'skill11057',
  },
];
