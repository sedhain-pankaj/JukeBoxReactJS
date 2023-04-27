import { Fragment } from 'react';
import styles from './content-block.module.scss';
import 'material-icons/iconfont/outlined.css';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-content-blocks-and-templates
 */
export const ContentBlock = ({}) => {
    return (
        <div>
            <div className={styles.category_block}>
                <h3>
                    Click on the categories on the left side. OR <br />
                    Search songs from top-right corner. AND <br /> <br />
                    Click on song's THUMBNAIL to queue it.
                </h3>
            </div>

            <div className={styles.arrows_category_block}>
                <button className={styles.arrow_up}>
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: '3rem', position: 'absolute' }}
                    >
                        arrow_circle_up
                    </i>
                </button>

                <button className={styles.arrow_down}>
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: '3rem', position: 'absolute' }}
                    >
                        arrow_circle_down
                    </i>
                </button>
            </div>
        </div>
    );
};
