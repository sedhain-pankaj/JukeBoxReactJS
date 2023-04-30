import { Fragment } from 'react';
import styles from './left-block.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-left-blocks-and-templates
 */

const category_buttons: string[] = [
    "50's and 60's",
    "70's",
    "80's",
    "90's",
    "2000's",
    'Latest Hits',
    'Country',
    'Karaoke',
    'Special Occasion',
    'Christmas Song',
];

export const LeftBlock = ({}) => {
    return (
        <div>
            <div className={styles.category_button}>
                {/* Shuffle heading and button */}
                <span className={styles['span-heading']}>Shuffle:</span>
                <button className={styles['button-randomizer']}>
                    <i className="material-icons-outlined">menu</i>
                    &nbsp; &nbsp; Randomizer
                    <i className="material-icons-outlined">sync</i>
                </button>
                <br />

                {/* Category heading and buttons */}
                <span className={styles['span-heading']}>Categories:</span>
                {category_buttons.map((button_name, index) => (
                    <Fragment key={index}>
                        <button className={styles['button-left']}>{button_name}</button>
                    </Fragment>
                ))}
                <br />

                {/* YouTube heading and button */}
                <span className={styles['span-heading']}>YouTube:</span>
                <button className={styles['button-yt']}> YouTube Search</button>
            </div>

            {/* Volume heading and buttons */}
            <div className={styles.volume_block}>
                <span className={styles['span-heading']}>Volume:</span>
            </div>
        </div>
    );
};
