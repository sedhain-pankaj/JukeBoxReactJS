import { Fragment } from 'react';
import styles from './left-block.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-left-blocks-and-templates
 */

const buttons = [
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
    'YouTube Search',
];

export const LeftBlock = ({}) => {
    return (
        <div>
            <div className={styles.randomizer_block}>
                <span>Randomizer:</span>
                <br />
                <button className={styles['button-left']}>&#9776; Randomizer</button>
            </div>

            <div className={styles.category_button}>
                <span>Categories:</span>
                <br />
                <div>
                    {buttons.map((button) => (
                        <>
                            <button className={styles['button-left']}>{button}</button>
                            <br />
                        </>
                    ))}
                </div>
            </div>

            <div className={styles.volume_block}>
                <span>Volume:</span>
            </div>
        </div>
    );
};
