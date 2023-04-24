import { createBoard } from '@wixc3/react-board';
import { VideoBlock } from '../../../components/video-block/video-block';

export default createBoard({
    name: 'VideoBlock',
    Board: () => <VideoBlock />,
    environmentProps: {
        canvasWidth: 636,
        canvasHeight: 479,
    },
});
