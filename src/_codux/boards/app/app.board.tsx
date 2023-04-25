import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1332,
        windowHeight: 817,
        canvasWidth: 1317,
        canvasHeight: 823,
    },
});
