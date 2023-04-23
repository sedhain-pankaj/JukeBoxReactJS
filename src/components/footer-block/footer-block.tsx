import classNames from 'classnames';
import styles from './footer-block.module.scss';

export interface FooterBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-footer-blocks-and-templates
 */
export const FooterBlock = ({ className }: FooterBlockProps) => {
    return <div className={classNames(styles.root, className)}>FooterBlock</div>;
};
