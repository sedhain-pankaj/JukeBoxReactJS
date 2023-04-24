import classNames from 'classnames';
import styles from './left-block.module.scss';

export interface LeftBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-left-blocks-and-templates
 */
export const LeftBlock = ({ className }: LeftBlockProps) => {
    return <div className={classNames(styles.root, className)}>
        left block
    </div>;
};
