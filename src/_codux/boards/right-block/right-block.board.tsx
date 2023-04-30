import { createBoard } from '@wixc3/react-board';
import { RightBlock } from '../../../components/right-block/right-block';

export default createBoard({
    name: 'RightBlock',
    Board: () => <RightBlock />,
    environmentProps: {
        canvasWidth: 528,
        canvasHeight: 750,
        windowHeight: 772,
        windowWidth: 726,
    },
});
