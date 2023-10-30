import { useEffect } from 'react';
import styles from './display.module.css';

export const Display = ({ result }) => {
    useEffect(() => {

    }, [result])

    return (
        <div className={styles.container}>
            <span className={styles.result}>{result}</span>
        </div>
    )
}