import { createBoard } from '@wixc3/react-board';
import { LeftBlock } from '../../../components/left-block/left-block';

export default createBoard({
    name: 'LeftBlock',
    Board: () => <LeftBlock />
});
