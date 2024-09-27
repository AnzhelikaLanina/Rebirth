import '../page.css';
import styles from "./wiki-page.module.css";
import WrapperWiki from "../../components/wrapper-wiki/wrapper-wiki";

const WikiPage = () => {
    return (
        <div className={"main"}>
            <div className={styles.headerBox}>
                <h1 className={styles.header}>Описание сервера</h1>
            </div>
            <WrapperWiki />
        </div>
    )
}

export default WikiPage;