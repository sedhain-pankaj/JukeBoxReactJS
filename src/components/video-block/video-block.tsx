import styles from './video-block.module.scss';

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
                        style={{ fontSize: 'clamp(1vw, 2vw, 3vw)' }}
                    >
                        skip_next
                    </i>
                </button>
            </div>

            <div className={styles.video_block}>
                <video
                    src="./src/assets/music/Latest Hits/Em Beihold - Numb Little Bug (Official Music Video).mp4"
                    controls
                    style={{
                        overflow: 'hidden',
                        width: '44vw',
                        height: '16.2vw',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        bottom: '0px',
                        right: '0px',
                        borderRadius: '1vw',
                        objectFit: 'fill',
                    }}
                />
            </div>
        </div>
    );
};
