import { createBoard } from '@wixc3/react-board';
import { ContentBlock } from '../../../components/content-block/content-block';

export default createBoard({
    name: 'ContentBlock',
    Board: () => <ContentBlock />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 782,
        canvasHeight: 614,
    },
});
