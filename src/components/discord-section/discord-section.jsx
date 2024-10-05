import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./discord-section.module.css";
import frameMobileImage from "../../images/ornament-discord-mobile.svg";
import frameImage from "../../images/ornament-discord.svg";
import DiscordBlock from "../discord-block/discord-block";
import PropTypes from "prop-types";

const DiscordSection = ({ id }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 950px)' });

    return (
        <section className={styles.discord} id={id}>
            <div className={styles.ornamentBox}>
                {isDesktop ?
                    <img
                        src={frameImage}
                        className={styles.ornament}
                        alt={'рамка'}
                    />
                    :
                    <img
                        src={frameMobileImage}
                        className={styles.ornament}
                        alt={'рамка'}
                    />
                }
                <DiscordBlock/>
            </div>
            <div className={styles.widget}></div>
        </section>
    )
};

DiscordSection.propTypes = {
    id: PropTypes.string.isRequired
};

export default DiscordSection;