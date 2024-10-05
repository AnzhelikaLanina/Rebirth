import React from 'react';
import PropTypes from 'prop-types';
import styles from "./button.module.css";

const Button = ({ className, imgSrc, text, classNameText, onClick, url  }) => {
    const handleClick = (e) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        } else if (onClick) {
            onClick(e);
        }
    };

    return (
        <div className={`${styles.buttonBase} ${className}`} onClick={handleClick}>
            {imgSrc ?
                <img
                    className={styles.icon}
                    src={imgSrc}
                    alt={`иконка кнопки ${text}`}
                />
            :''}
            <p className={`${styles.text} ${classNameText ? classNameText : ''}`}>{text}</p>
        </div>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    text: PropTypes.string.isRequired,
    classNameText: PropTypes.string,
    url: PropTypes.string
};

export default Button;
