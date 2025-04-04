import images from "../../utils/constants/images";
import styles from "./wiki-rewards-for-tasks-content.module.css";
import Table from "../table/table";
import {systemRewards, uniqueTasks} from "../../utils/constants/info-wiki";

const WikiRewardsForTasksContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <h3 className={styles.header}>Награды за задания</h3>
                <div className={styles.image}></div>
            </div>
            <Table list={systemRewards}/>
            <Table list={uniqueTasks}/>
            <div className={styles.box}>
                <img className={styles.img} src={images.bmlcoin} alt={'bm lcoin'}/>
                <p className={styles.text}>Появилась кнопка покупки сразу всех уровней задания за 40 000 монет L.</p>
            </div>
        </div>
    )
}

export default WikiRewardsForTasksContent;