import '../page.css';
import styles from "./patchnote-page.module.css";
import WrapperPatchnote from "../../components/wrapper-patchnote/wrapper-patchnote";

const PatchNotePage = () => {
    return (
        <div className={"main"}>
            <div className={styles.headerBox}>
                <h1 className={styles.header}>Патчноуты</h1>
            </div>
            <WrapperPatchnote />
        </div>
    )
}

export default PatchNotePage;