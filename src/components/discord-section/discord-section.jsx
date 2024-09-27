import DiscordBlock from "../discord-block/discord-block";
import Ornament from "../ornament/ornament";
import styles from "./discord-section.module.css";
import lineHorizontal from "../../images/line-horizontal-long.svg";
import lineVertical from "../../images/line-vertical.svg";
import lineThickVertical from "../../images/line-thick-vertical.svg";

const DiscordSection = () => {
    const lineImages = {
        horizontalTop: lineHorizontal,
        horizontalBottom: lineHorizontal,
        verticalLeft: lineVertical,
        verticalRight: lineVertical,
        thickVerticalLeft: lineThickVertical,
        thickVerticalRight: lineThickVertical
    };

    const imgStyles = {
        cornerRightTop: styles.top,
        cornerLeftTop: styles.top,
        cornerRightBottom: styles.bottom,
        cornerLeftBottom: styles.bottom,
        horizontalTop: styles.horizontalTop,
        horizontalBottom: styles.horizontalBottom,
        verticalLeft: styles.vertical,
        verticalRight: styles.vertical,
        thickVerticalLeft: styles.verticalSpace,
        thickVerticalRight: styles.verticalSpace
    };

    return (
        <section className={styles.discord}>
            <Ornament lineImages={lineImages} imgStyles={imgStyles}>
                <DiscordBlock/>
            </Ornament>
            <div className={styles.widget}></div>
        </section>
    )
}

export default DiscordSection;