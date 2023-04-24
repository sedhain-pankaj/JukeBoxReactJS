import styles from './left-block.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-left-blocks-and-templates
 */
export const LeftBlock = ({}) => {
    return (
        <div>
            <div className={styles.randomizer_block}>Randomizer:</div>
            <div className={styles.category_button}>Categories:</div>
            <div className={styles.volume_block}>Volume:</div>
        </div>
    );
};
