import React from "react";
import styles from "./ornament.module.css";
import cornerRightTop from "../../images/corner-right-top.svg";
import cornerLeftTop from "../../images/corner-left-top.svg";
import cornerLeftBottom from "../../images/corner-left-bottom.svg";
import cornerRightBottom from "../../images/corner-right-bottom.svg";
import PropTypes from "prop-types";

const Ornament = ({
                      children,
                      lineImages,
                      imgStyles = {}
}) => {
    return (
        <div className={styles.ornament}>
            <img
                src={cornerRightTop}
                className={`${styles.topRight} ${imgStyles.cornerRightTop || ''}`}
                alt="Top Left Corner"
            />
            <img
                src={cornerLeftTop}
                className={`${styles.topLeft} ${imgStyles.cornerLeftTop || ''}`}
                alt="Top Right Corner"
            />
            <img
                src={cornerRightBottom}
                className={`${styles.bottomRight} ${imgStyles.cornerRightBottom || ''}`}
                alt="Bottom Left Corner"
            />
            <img
                src={cornerLeftBottom}
                className={`${styles.bottomLeft} ${imgStyles.cornerLeftBottom || ''}`}
                alt="Bottom Right Corner"
            />
            <img
                src={lineImages.horizontalTop}
                className={`${styles.horizontalTop} ${imgStyles.horizontalTop || ''}`}
                alt="Top Border"
            />
            <img
                src={lineImages.horizontalBottom}
                className={`${styles.horizontalBottom} ${imgStyles.horizontalBottom || ''}`}
                alt="Right Border"
            />
            <img
                src={lineImages.verticalLeft}
                className={`${styles.verticalLeft} ${imgStyles.verticalLeft || ''}`}
                alt="Bottom Border"
            />
            <img
                src={lineImages.verticalRight}
                className={`${styles.verticalRight} ${imgStyles.verticalRight || ''}`}
                alt="Left Border"
            />
            <img
                src={lineImages.thickVerticalLeft}
                className={`${styles.verticalSpaceLeft} ${imgStyles.thickVerticalLeft || ''}`}
                alt="Bottom Border"
            />
            <img
                src={lineImages.thickVerticalRight}
                className={`${styles.verticalSpaceRight} ${imgStyles.thickVerticalRight || ''}`}
                alt="Left Border"
            />
            {children}
        </div>
    )
}

Ornament.propTypes = {
    children: PropTypes.node.isRequired,
    lineImages: PropTypes.shape({
        horizontalTop: PropTypes.string.isRequired,
        horizontalBottom: PropTypes.string.isRequired,
        verticalLeft: PropTypes.string.isRequired,
        verticalRight: PropTypes.string.isRequired,
        thickVerticalLeft: PropTypes.string.isRequired,
        thickVerticalRight: PropTypes.string.isRequired,
    }).isRequired,
    imgStyles: PropTypes.shape({
        cornerRightTop: PropTypes.string,
        cornerLeftTop: PropTypes.string,
        cornerRightBottom: PropTypes.string,
        cornerLeftBottom: PropTypes.string,
        horizontalTop: PropTypes.string,
        horizontalBottom: PropTypes.string,
        verticalLeft: PropTypes.string,
        verticalRight: PropTypes.string,
        thickVerticalLeft: PropTypes.string,
        thickVerticalRight: PropTypes.string,
    }),
};

export default Ornament;