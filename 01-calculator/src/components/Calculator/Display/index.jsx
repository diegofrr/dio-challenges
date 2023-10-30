import styles from './display.module.css';

import { useEffect } from 'react';

export const Display = ({ result }) => {
    useEffect(() => {

    }, [result])

    return (
        <div className={styles.container}>
            <span className={styles.result}>{result}</span>
        </div>
    )
}