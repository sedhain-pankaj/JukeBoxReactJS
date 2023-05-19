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
                    <div className={styles.search_header_text}>
                        Search
                        <i
                            className="material-icons-outlined"
                            style={{
                                fontSize: 'clamp(1vw, 2.5vw, 3vw)',
                                color: '#004230',
                                marginLeft: '0.3vw',
                            }}
                        >
                            content_paste_search
                        </i>
                    </div>
                </div>
                <div className={styles.search_bar}></div>
            </div>

            <div className={styles.queue_block}>
                <div className={styles.queue_header}>
                    <div className={styles.queue_header_text}>
                        Queue
                        <i
                            className="material-icons-outlined"
                            style={{
                                fontSize: 'clamp(1vw, 2.5vw, 3vw)',
                                color: '#004230',
                                marginLeft: '0.2vw',
                            }}
                        >
                            queue_music
                        </i>
                    </div>
                </div>

                <div className={styles.clear_queue_button}>
                    <button className={styles.button_right}>
                        Clear Queue
                        <i
                            className="material-icons-outlined"
                            style={{ fontSize: 'clamp(1vw, 2.5vw, 3vw)', marginLeft: '0.5vw' }}
                        >
                            delete_sweep
                        </i>
                    </button>
                </div>

                <div className={styles.queue_list}></div>

                <div className={styles.arrows_queue_list}>
                    <button className={styles.arrow_up_queue}>
                        <i
                            className="material-icons-outlined"
                            style={{ fontSize: 'clamp(1vw, 2.5vw, 3vw)', position: 'absolute' }}
                        >
                            arrow_circle_up
                        </i>
                    </button>

                    <button className={styles.arrow_down_queue}>
                        <i
                            className="material-icons-outlined"
                            style={{ fontSize: 'clamp(1vw, 2.5vw, 3vw)', position: 'absolute' }}
                        >
                            arrow_circle_down
                        </i>
                    </button>
                </div>
            </div>
        </div>
    );
};
