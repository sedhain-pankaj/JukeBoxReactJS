import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1378,
        windowHeight: 895,
        canvasWidth: 1317,
        canvasHeight: 913,
    },
});
