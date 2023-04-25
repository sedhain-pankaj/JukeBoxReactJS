import styles from './video-block.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-video-blocks-and-templates
 */
export const VideoBlock = ({}) => {
    return (
        <div>
            <div className={styles.title}>title</div>
            <div className={styles.skip_button}>
                <button>Skip</button>
            </div>
            <div className={styles.video_block}>video</div>
        </div>
    );
};
