import styles from './video-block.module.scss';
import LatestHits_database from '../../../public/music/database/Latest Hits.json';
import 'video.js';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-video-blocks-and-templates
 */
export const VideoBlock = ({}) => {
    return (
        <div>
            <div className={styles.title_container}>
                <span className={styles.video_title}>Video Title</span>
            </div>

            <div className={styles.skip_button_container}>
                <button className={styles.skip_button}>
                    Skip
                    <i
                        className="material-icons-outlined"
                        style={{ fontSize: 'clamp(1vw, 1.5vw, 2vw)', color: 'blueviolet' }}
                    >
                        skip_next
                    </i>
                </button>
            </div>

            <div className={styles.video_block}>
                <video src={LatestHits_database[0].path} controls preload="auto" autoPlay />
            </div>
        </div>
    );
};
