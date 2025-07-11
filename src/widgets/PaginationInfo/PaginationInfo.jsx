import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationInfo.module.css';
import { useLocalizedData } from '@/shared/lib/hooks';
import {
  BalanceActiveIcon,
  BalanceIcon,
  ClansActiveIcon,
  ClansIcon,
  CraftActiveIcon,
  CraftIcon,
  InterfaceActiveIcon,
  InterfaceIcon,
  OlympActiveIcon,
  OlympIcon,
  ProgressActiveFrame,
  ProgressFrame,
} from '@/shared/assets/images';
import clsx from 'clsx';

export const PaginationInfo = ({ activeIndex, onClick }) => {
  const data = useLocalizedData();

  const labels = [
    data.pagination.balance,
    data.pagination.craft,
    data.pagination.clans,
    data.pagination.olymp,
    data.pagination.interface,
  ];

  const images = [
    { normalMain: BalanceIcon, activeMain: BalanceActiveIcon },
    { normalMain: CraftIcon, activeMain: CraftActiveIcon },
    { normalMain: ClansIcon, activeMain: ClansActiveIcon },
    { normalMain: OlympIcon, activeMain: OlympActiveIcon },
    { normalMain: InterfaceIcon, activeMain: InterfaceActiveIcon },
  ];

  const lines = {
    left: {
      1: styles.imageLineBalCraft,
      2: styles.imageLineCraftClans,
      3: styles.imageLineClansOlymp,
      4: styles.imageLineOlympInter,
    },
    right: {
      0: styles.imageLineBalCraft,
      1: styles.imageLineCraftClans,
      2: styles.imageLineClansOlymp,
      3: styles.imageLineOlympInter,
    },
  };

  const getLineClass = (i, side) => lines[side]?.[i] || '';
  const getLineIcon = (isActive) => (isActive ? ProgressActiveFrame : ProgressFrame);

  const getTextAlignClass = (i) => {
    if (i === 0) return styles.textRight;
    if (i === 1) return styles.textCenter;
    return styles.textLeft;
  };

  return (
    <div className={clsx('swiper-pagination', styles.pagination)}>
      <div className={styles.images}>
        {images.map((img, i) => {
          const isActive = activeIndex === i;
          const MainIcon = isActive ? img.activeMain : img.normalMain;
          const LineIcon = getLineIcon(isActive);

          return (
            <div key={i} className={styles.item}>
              {i !== 0 && (
                <LineIcon
                  onClick={() => onClick(i)}
                  className={getLineClass(i, 'left')}
                />
              )}
              <MainIcon
                onClick={() => onClick(i)}
                className={styles.image}
              />
              {i !== images.length - 1 && (
                <LineIcon
                  onClick={() => onClick(i)}
                  className={getLineClass(i, 'right')}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.description}>
        {labels.map((text, i) => (
          <p
            key={i}
            className={clsx(styles.text, getTextAlignClass(i))}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

PaginationInfo.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
