import styles from './button.module.css';

export const Button = ({ label, onclick }) => (
    <button onClick={() => onclick(label)} className={styles.container}>
        {label}
    </button>
)