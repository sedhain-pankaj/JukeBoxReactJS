import { useState } from 'react';
import styles from './App.module.scss';

function App() {

    return (
        <div className={styles.App}>
            <div>
                <a href="https://vitejs.dev" target="_blank"></a>
                <a href="https://reactjs.org" target="_blank"></a>
                <a href="https://www.typescriptlang.org/" target="_blank"></a>
                <a href="https://sass-lang.com/" target="_blank"></a>
            </div>
            <p className={styles['read-the-docs']}></p>
        </div>
    );
}

export default App;
