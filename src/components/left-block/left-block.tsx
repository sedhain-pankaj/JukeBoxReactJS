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

// let volume_digit: number = 50;
let volume_digit: number = 50;

export const LeftBlock = ({}) => {
    return (
        <div>
            <div className={styles.category_button}>
                {/* Shuffle heading and button */}
                <span className={styles['span-heading']}>Shuffle:</span>
                <button className={styles['button-randomizer']} style={{ marginBottom: '0.5rem' }}>
                    <i className="material-icons-outlined">menu</i>
                    &nbsp; &nbsp; Randomizer
                    <i className="material-icons-outlined">sync</i>
                </button>

                {/* Category heading and buttons */}
                <span className={styles['span-heading']}>Categories:</span>
                {category_buttons.map((button_name, index) => (
                    <Fragment key={index}>
                        <button className={styles['button-left']}>{button_name}</button>
                    </Fragment>
                ))}

                {/* YouTube heading and button */}
                <span className={styles['span-heading']} style={{ marginTop: '0.5rem' }}>
                    YouTube:
                </span>
                <button className={styles['button-yt']}> YouTube Search</button>
            </div>

            {/* Volume heading and buttons */}
            <div className={styles.volume_block}>
                <span className={styles['volume-digit']}>
                    Volume:
                    <span id="volume-digit-num">{volume_digit}</span>
                </span>

                <button className={styles['button-mute']}>
                    Mute:
                    <i className="material-icons-outlined">volume_up</i>
                </button>

                <button className={styles['button-unmute']} style={{ display: 'none' }}>
                    Unmute:
                    <i className="material-icons-outlined">volume_off</i>
                </button>
                <br />

                <button className={styles['volume-dial'] + ' ' + styles['volume-dial-left']}>
                    <i className="material-icons-outlined">remove_circle_outline</i>
                </button>

                <input
                    type="range"
                    min="0"
                    max="100"
                    onChange={(e) => {
                        volume_digit = parseInt(e.target.value);
                        document.getElementById('volume-digit-num')!.innerHTML =
                            volume_digit.toString();
                    }}
                    className={styles['input-slider']}
                />

                <div id='slider'></div>

                <button className={styles['volume-dial'] + ' ' + styles['volume-dial-right']}>
                    <i className="material-icons-outlined">add_circle_outline</i>
                </button>
            </div>
        </div>
    );
};
