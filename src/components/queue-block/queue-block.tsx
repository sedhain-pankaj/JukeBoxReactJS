import classNames from 'classnames';
import styles from './queue-block.module.scss';

export interface QueueBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-queue-blocks-and-templates
 */
export const QueueBlock = ({ className }: QueueBlockProps) => {
    return <div className={classNames(styles.root, className)}>QueueBlock</div>;
};
