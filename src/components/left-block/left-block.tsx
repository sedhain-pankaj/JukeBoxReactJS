import { Fragment, useEffect } from 'react';
import styles from './left-block.module.scss';

// database
import FiftySixty_database from '../../../public/music/database/Fifty Sixty.json';
import Seventy_database from '../../../public/music/database/Seventy.json';
import Eighty_database from '../../../public/music/database/Eighty.json';
import Ninety_database from '../../../public/music/database/Ninety.json';
import TwoThousand_database from '../../../public/music/database/2000.json';
import LatestHits_database from '../../../public/music/database/Latest Hits.json';
import Country_database from '../../../public/music/database/Country.json';
import Karaoke_database from '../../../public/music/database/Karaoke.json';
import SpecialOccasion_database from '../../../public/music/database/Special Occasion.json';
import ChristmasSong_database from '../../../public/music/database/Christmas Song.json';

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

// create a database array mapping to the category buttons

//     SN: number;
//     fullname: string;
//     shortname: string;
//     path: string;
//     img: string;

// this is structure of each items inside the json file

  
  const category_database: any[] = [
    FiftySixty_database,
    Seventy_database,
    Eighty_database,
    Ninety_database,
    TwoThousand_database,
    LatestHits_database,
    Country_database,
    Karaoke_database,
    SpecialOccasion_database,
    ChristmasSong_database,
];

// can you merge the two arrays together such that [string, JSON]?
const category_database_map: Map<string, JSON> = new Map();
for (let i = 0; i < category_buttons.length; i++) {
    category_database_map.set(category_buttons[i], category_database[i]);
}


// let volume_digit: number = 50;
let volume_digit: number = 50;

export const LeftBlock = ({}) => {
    return (
        <div>
            <div className={styles.category_button}>
                {/* Shuffle heading and button */}
                <span className={styles['span-heading']}>Shuffle:</span>
                <button className={styles['button-randomizer']} style={{ marginBottom: '0.5vw' }}>
                    <i
                        className="material-icons-outlined"
                        style={{
                            fontSize: 'clamp(1vw, 2vw, 3vw)',
                            marginRight: '1vw',
                            color: '#004230',
                        }}
                    >
                        menu
                    </i>
                    Randomizer
                    <i
                        className="material-icons-outlined"
                        style={{
                            fontSize: 'clamp(1vw, 2.5vw, 3vw)',
                            marginLeft: '0.4vw',
                            color: '#4100f4',
                        }}
                    >
                        change_circle
                    </i>
                </button>

                {/* Category heading and buttons */}
                <span className={styles['span-heading']}>Categories:</span>
                {category_buttons.map((button_name, index) => (
                    <Fragment key={index}>
                        <button className={styles['button-left']} onClick={() => {
                             alert(category_database_map.get(button_name));
                            //  attach the database to the <div className={styles.category_content}>
                            
                            // useEffect(() => {
                            //     document.getElementById('category_content')!.innerHTML = category_database_map.get(button_name)?.stringify();
                            // }
                            
                        

                        }}>
                            {button_name}
                        </button>
                    </Fragment>
                ))}

                {/* YouTube heading and button */}
                <span className={styles['span-heading']} style={{ marginTop: '0.5vw' }}>
                    YouTube:
                </span>
                <button className={styles['button-yt']}>
                    <i
                        className="material-icons-outlined"
                        // font-size:clamp(1vw, 2.5vw, 3vw); margin-right:1vw; color:brown;
                        style={{
                            fontSize: 'clamp(1vw, 2.5vw, 3vw)',
                            marginRight: '1vw',
                            color: 'brown',
                        }}
                    >
                        smart_display
                    </i>
                    YouTube Search
                </button>
            </div>

            {/* Volume heading and buttons */}
            <div className={styles.volume_block}>
                <span className={styles['volume-digit']}>
                    Volume:
                    <span id="volume-digit-num">{volume_digit}</span>
                </span>

                <button className={styles['button-mute']}>
                    Mute:
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: 'clamp(1vw, 1.8vw, 2vw)' }}
                    >
                        volume_up
                    </i>
                </button>

                <button className={styles['button-unmute']} style={{ display: 'none' }}>
                    Unmute:
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: 'clamp(1vw, 1.8vw, 2vw)' }}
                    >
                        volume_off
                    </i>
                </button>
                <br />

                <button className={styles['volume-dial'] + ' ' + styles['volume-dial-left']}>
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: 'clamp(1vw, 1.8vw, 2vw)', position: 'absolute' }}
                    >
                        remove_circle_outline
                    </i>
                </button>

                <div className={styles['input-slider']}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        onChange={(e) => {
                            volume_digit = parseInt(e.target.value);
                            document.getElementById('volume-digit-num')!.innerHTML =
                                volume_digit.toString();
                        }}
                    />
                </div>

                <button className={styles['volume-dial'] + ' ' + styles['volume-dial-right']}>
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: 'clamp(1vw, 1.8vw, 2vw)', position: 'absolute' }}
                    >
                        add_circle_outline
                    </i>
                </button>
            </div>
        </div>
    );
};
