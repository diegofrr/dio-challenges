import styles from './display.module.css';

export const Display = ({ result }) => {
    return (
        <div className={styles.container}>
            <span className={styles.result}>{result}</span>
        </div>
    )
}