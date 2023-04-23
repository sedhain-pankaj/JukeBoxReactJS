import classNames from 'classnames';
import styles from './video-block.module.scss';

export interface VideoBlockProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-video-blocks-and-templates
 */
export const VideoBlock = ({ className }: VideoBlockProps) => {
    return <div className={classNames(styles.root, className)}>VideoBlock</div>;
};
