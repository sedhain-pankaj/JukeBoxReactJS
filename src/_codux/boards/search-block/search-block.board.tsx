import { createBoard } from '@wixc3/react-board';
import { SearchBlock } from '../../../components/search-block/search-block';

export default createBoard({
    name: 'SearchBlock',
    Board: () => <SearchBlock />
});
