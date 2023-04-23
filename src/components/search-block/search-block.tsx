import classNames from 'classnames';
import styles from './search-block.module.scss';

export interface SearchBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-search-blocks-and-templates
 */
export const SearchBlock = ({ className }: SearchBlockProps) => {
    return <div className={classNames(styles.root, className)}>SearchBlock</div>;
};
