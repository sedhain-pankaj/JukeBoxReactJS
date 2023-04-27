import styles from './right-block.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-right-blocks-and-templates
 */
export const RightBlock = ({}) => {
    return (
        <div>
            <div className={styles.search_block}>
                <div className={styles.search_header}>
                    <div className={styles.search_header_text}>Search &#128269;</div>
                </div>
                <div className={styles.search_bar}></div>
            </div>

            <div className={styles.queue_block}>
                <div className={styles.queue_header}>
                    <div className={styles.queue_header_text}>Queue &#8803;</div>
                </div>

                <div className={styles.clear_queue_button}>
                    <button className={styles.button_right}>Clear Queue</button>
                </div>

                <div className={styles.queue_list}></div>

                <div className={styles.arrows_queue_list}>
                    <button className={styles.arrow_up_queue}>
                        <i
                            className="material-icons-outlined"
                            style={{ fontSize: '3rem', position: 'absolute' }}
                        >
                            arrow_circle_up
                        </i>
                    </button>

                    <button className={styles.arrow_down_queue}>
                        <i
                            className="material-icons-outlined"
                            style={{ fontSize: '3rem', position: 'absolute' }}
                        >
                            arrow_circle_down
                        </i>
                    </button>
                </div>
            </div>
        </div>
    );
};
