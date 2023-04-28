import styles from './App.module.scss';
import { LeftBlock } from './components/left-block/left-block';
import { VideoBlock } from './components/video-block/video-block';
import { ContentBlock } from './components/content-block/content-block';
import { FooterBlock } from './components/footer-block/footer-block';
import { RightBlock } from './components/right-block/right-block';
import 'material-icons/iconfont/outlined.css';

function App() {
    return (
        <div>
            <div className={styles.leftblock}> <LeftBlock /> </div>
            <div className={styles.videoblock}> <VideoBlock /> </div>
            <div className={styles.contentblock}> <ContentBlock /> </div>
            <div className={styles.footerblock}> <FooterBlock /> </div>
            <div className={styles.rightblock}> <RightBlock /> </div>
        </div>
    );
}

export default App;
