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
            <div className={styles.randomizer_block}>
                <span style={{ fontWeight: 'bold' }}>Shuffle:</span>
                <br />
                <button className={styles['button-randomizer']}>&#9776; Randomizer</button>
            </div>

            <div className={styles.category_button}>
                <span style={{ fontWeight: 'bold' }}>Categories:</span>
                <br />
                <div>
                    {category_buttons.map((button_name, index) => (
                        <Fragment key={index}>
                            <button className={styles['button-left']}>{button_name}</button>
                            <br />
                        </Fragment>
                    ))}
                    <button className={styles['button-yt']}> YouTube Search</button>
                </div>
            </div>

            <div className={styles.volume_block}>
                <span style={{ fontWeight: 'bold' }}>Volume:</span>
            </div>
        </div>
    );
};
