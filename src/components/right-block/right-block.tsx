import classNames from 'classnames';
import styles from './right-block.module.scss';

export interface RightBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-right-blocks-and-templates
 */
export const RightBlock = ({ className }: RightBlockProps) => {
    return <div className={classNames(styles.root, className)}>RightBlock</div>;
};
