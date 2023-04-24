import styles from './content-block.module.scss';

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-content-blocks-and-templates
 */
export const ContentBlock = ({}) => {
    return (
        <div>
            <div className={styles.category_block}>Category</div>
            <div className={styles.arrows_category_block}>arrow</div>
        </div>
    );
};
