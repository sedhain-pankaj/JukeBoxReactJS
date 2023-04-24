import { createBoard } from '@wixc3/react-board';
import { LeftBlock } from '../../../components/left-block/left-block';

export default createBoard({
    name: 'LeftBlock',
    Board: () => <LeftBlock />,
    environmentProps: {
        windowWidth: 810,
        windowHeight: 388,
        canvasWidth: 570,
        canvasHeight: 308,
    },
});
