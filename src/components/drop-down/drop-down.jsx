import styles from "./drop-down.module.css";
import {Link} from "react-router-dom";

const DropDown = ({ headerText, links, isOpen, toggleDropdown }) => (
    <div className={styles.dropDown} onClick={toggleDropdown}>
        <p className={`${styles.dropDownHeader} ${isOpen ? styles.dropDownActiveHeader : ''}`}>
            {headerText}
        </p>
        <img
            src={arrowDown}
            className={`${styles.dropDownArrow} ${isOpen ? styles.rotate : ''}`}
            alt="Arrow"
        />
        <div className={`${styles.dropDownContainer} ${isOpen ? styles.show : ''}`}>
            <div className={styles.dropDownBox}>
                {links.map((link, index) => (
                    <Link key={index} to={link.href} className={styles.dropDownText}>
                        {link.text}
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

export default DropDown;