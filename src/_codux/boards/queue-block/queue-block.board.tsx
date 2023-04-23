import { createBoard } from '@wixc3/react-board';
import { QueueBlock } from '../../../components/queue-block/queue-block';

export default createBoard({
    name: 'QueueBlock',
    Board: () => <QueueBlock />
});
