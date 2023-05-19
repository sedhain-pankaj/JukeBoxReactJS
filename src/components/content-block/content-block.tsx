import styles from './content-block.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-content-blocks-and-templates
 */
export const ContentBlock = ({}) => {
    return (
        <div>
            <div className={styles.category_content}>
                <h3>
                    Click on the categories on the left side <br />
                    OR <br />
                    Search songs from top-right corner.
                </h3>
            </div>

            <div className={styles.arrows_category_block}>
                <button className={styles.arrow_up_category}>
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: 'clamp(1vw, 2.5vw, 3vw)', position: 'absolute' }}
                    >
                        arrow_circle_up
                    </i>
                </button>

                <button className={styles.arrow_down_category}>
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: 'clamp(1vw, 2.5vw, 3vw)', position: 'absolute' }}
                    >
                        arrow_circle_down
                    </i>
                </button>
            </div>
        </div>
    );
};
