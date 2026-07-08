import React from 'react';
import { WikiSectionLink } from '../../ui/WikiSectionLink';
import belMarkClear from '@/shared/assets/images/items/bel-mark-clear.png';
import bmLcoin from '@/shared/assets/images/items/bm-lcoin.png';
import costumeIcon from '@/shared/assets/images/items/costume-icon.png';
import adena from '@/shared/assets/images/items/adena.png';
import accessoryNecklaceOfPerion from '@/shared/assets/images/items/accessory-necklace-of-perion.png';
import coin from '@/shared/assets/images/items/coin.png';
import balrogBox from '@/shared/assets/images/items/balrog-box.png';
import exp from '@/shared/assets/images/items/exp.png';
import sp from '@/shared/assets/images/items/sp.png';
import drop from '@/shared/assets/images/items/drop.png';
import r99SoulStone from '@/shared/assets/images/items/r99-soul-stone.png';
import adenEssence from '@/shared/assets/images/items/aden-essence.png';
import crystalOfOverlord from '@/shared/assets/images/items/crystal-of-overlord.png';
import monsterEnergy from '@/shared/assets/images/items/monster-energy.png';
import secretGoldCoin from '@/shared/assets/images/items/secret-gold-coin.png';
import etcWhitedayChoco from '@/shared/assets/images/items/etc-whiteday-choco.png';
import bmElmoadenGoldBox from '@/shared/assets/images/items/bm-elmoaden-gold-box.png';
import fireSwordAden from '@/shared/assets/images/items/fire-sword-aden.png';
import cursedGrail from '@/shared/assets/images/items/cursed-grail.png';
import prophetsOfTobald from '@/shared/assets/images/items/prophets-of-tobald.png';
import immortalWeaponPiece from '@/shared/assets/images/items/immortal-weapon-piece.png';
import prophetsPaper00 from '@/shared/assets/images/items/prophets-paper-of-tobald-00.png';
import prophetsPaper01 from '@/shared/assets/images/items/prophets-paper-of-tobald-01.png';
import prophetsPaper02 from '@/shared/assets/images/items/prophets-paper-of-tobald-02.png';
import prophetsPaper03 from '@/shared/assets/images/items/prophets-paper-of-tobald-03.png';
import prophetsPaper04 from '@/shared/assets/images/items/prophets-paper-of-tobald-04.png';
import sNonpvpBattle from '@/shared/assets/images/items/s-nonpvp-battle.png';
import bmDragonPosion from '@/shared/assets/images/items/bm-dragon-posion.png';
import bmDragonKey from '@/shared/assets/images/items/bm-dragon-key.png';
import noblessCloak from '@/shared/assets/images/items/nobless-cloak.png';
import skill32121 from '@/shared/assets/images/items/skill32121.png';
import bmWeekPackage from '@/shared/assets/images/items/bm-week-package.png';
import etcRollOfPaperBlue from '@/shared/assets/images/items/etc-roll-of-paper-blue.png';
import bluedragonRune from '@/shared/assets/images/items/bluedragon-rune.png';

const iconMap: Record<string, { src: string; alt: string }> = {
  ':bel_mark_clear:': {
    src: belMarkClear,
    alt: 'bel mark clear',
  },
  ':bm_lcoin_i00:': {
    src: bmLcoin,
    alt: 'bm lcoin',
  },
  ':coin~1:': {
    src: costumeIcon,
    alt: 'costume icon',
  },
  ':coin~2:': {
    src: coin,
    alt: 'coin',
  },
  ':adena:': {
    src: adena,
    alt: 'adena',
  },
  ':accessory_necklace_of_perion_i03:': {
    src: accessoryNecklaceOfPerion,
    alt: 'accessory necklace of perion',
  },
  ':balrog_box_01:': {
    src: balrogBox,
    alt: 'balrog box',
  },
  ':skill32121:': {
    src: skill32121,
    alt: 'skill32121',
  },
  ':exp:': {
    src: exp,
    alt: 'exp',
  },
  ':sp:': {
    src: sp,
    alt: 'sp',
  },
  ':r99_soul_stone_i00:': {
    src: r99SoulStone,
    alt: 'r99 soul stone',
  },
  ':aden_essence_i00:': {
    src: adenEssence,
    alt: 'aden essence',
  },
  ':crystal_of_overlord_i00:': {
    src: crystalOfOverlord,
    alt: 'crystal of overlord',
  },
  ':monster_energy_i00:': {
    src: monsterEnergy,
    alt: 'monster energy',
  },
  ':secret_gold_coin:': {
    src: secretGoldCoin,
    alt: 'secret gold coin',
  },
  ':etc_whiteday_choco:': {
    src: etcWhitedayChoco,
    alt: 'etc whiteday choco',
  },
  ':bm_elmoaden_gold_box:': {
    src: bmElmoadenGoldBox,
    alt: 'bm elmoaden gold box',
  },
  ':fire_sword_aden0000:': {
    src: fireSwordAden,
    alt: 'fire sword aden',
  },
  ':immortal_weapon_ticket_i00:': {
    src: drop,
    alt: 'immortal weapon ticket',
  },
  ':cursed_grail_i00:': {
    src: cursedGrail,
    alt: 'cursed grail',
  },
  ':prophets_of_tobald_i00:': {
    src: prophetsOfTobald,
    alt: 'prophets of tobald',
  },
  ':bm_week_package:': {
    src: bmWeekPackage,
    alt: 'bm week package',
  },
  ':prophets_paper_of_tobald_i00:': {
    src: prophetsPaper00,
    alt: 'prophets paper 1',
  },
  ':prophets_paper_of_tobald_i01:': {
    src: prophetsPaper01,
    alt: 'prophets paper 2',
  },
  ':prophets_paper_of_tobald_i02:': {
    src: prophetsPaper02,
    alt: 'prophets paper 3',
  },
  ':prophets_paper_of_tobald_i03:': {
    src: prophetsPaper03,
    alt: 'prophets paper 4',
  },
  ':prophets_paper_of_tobald_i04:': {
    src: prophetsPaper04,
    alt: 'prophets paper 5',
  },
  ':immortal_weapon_piece_i00:': {
    src: immortalWeaponPiece,
    alt: 'immortal weapon piece',
  },
  ':s_nonpvp_battle:': {
    src: sNonpvpBattle,
    alt: 's nonpvp battle',
  },
  ':taras:': {
    src: drop,
    alt: 'taras earring',
  },
  ':etc_kyles_blood_dragon_i00:': {
    src: drop,
    alt: 'expedition badge',
  },
  ':etc_bloodpledge_point_i00:': {
    src: drop,
    alt: 'clan exp',
  },
  ':bm_dragon_posion:': {
    src: bmDragonPosion,
    alt: 'dragon potion',
  },
  ':bm_dragon_key:': {
    src: bmDragonKey,
    alt: 'dragon key',
  },
  ':nobless_cloak_i00:': {
    src: noblessCloak,
    alt: 'nobless cloak',
  },
  ':etc_roll_of_paper_blue_i00:': {
    src: etcRollOfPaperBlue,
    alt: 'blessing of antharas',
  },
  ':bluedragon_rune:': {
    src: bluedragonRune,
    alt: 'dragon rune',
  },
};

export const parseTextWithIcons = (text: string): React.ReactNode[] => {
  if (!text) return [];

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const markerPattern =
    /\[\[([^\]|]+)\|(\w+)\]\]|\*\*([^*]+)\*\*|:([\w~_]+(?:_i\d+)?):/g;
  let match;

  while ((match = markerPattern.exec(text)) !== null) {
    const marker = match[0];
    const beforeText = text.substring(lastIndex, match.index);

    if (beforeText) {
      parts.push(beforeText);
    }

    if (match[1] !== undefined) {
      parts.push(
        <WikiSectionLink
          key={match.index}
          label={match[1]}
          wikiKey={match[2]}
        />,
      );
    } else if (match[3] !== undefined) {
      parts.push(
        <span
          key={match.index}
          style={{
            color: 'rgba(255, 214, 68, 1)',
            fontWeight: 600,
          }}
        >
          {match[3]}
        </span>,
      );
    } else {
      const iconData = iconMap[marker];
      if (iconData) {
        parts.push(
          <img
            key={match.index}
            src={iconData.src}
            alt={iconData.alt}
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              width: '20px',
              height: '20px',
              margin: '0 4px',
            }}
          />,
        );
      } else {
        parts.push(marker);
      }
    }

    lastIndex = markerPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
};
