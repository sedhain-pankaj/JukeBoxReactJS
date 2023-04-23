import classNames from 'classnames';
import styles from './content-block.module.scss';

export interface ContentBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-content-blocks-and-templates
 */
export const ContentBlock = ({ className }: ContentBlockProps) => {
    return <div className={classNames(styles.root, className)}>
    ContentBlock
    </div>;
};
