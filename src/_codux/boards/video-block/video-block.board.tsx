import { createBoard } from '@wixc3/react-board';
import { VideoBlock } from '../../../components/video-block/video-block';

export default createBoard({
    name: 'VideoBlock',
    Board: () => <VideoBlock />,
    environmentProps: {
        canvasWidth: 994,
        canvasHeight: 747,
        windowHeight: 876,
        windowWidth: 1184,
    },
});
