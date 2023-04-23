import { createBoard } from '@wixc3/react-board';
import { FooterBlock } from '../../../components/footer-block/footer-block';

export default createBoard({
    name: 'FooterBlock',
    Board: () => <FooterBlock />
});
