import styles from './button.module.css';

export const Button = ({ label, onclick, isHeader, isSubmit }) => (
    <button onClick={() => onclick(label)} className={`${styles.container} ${styles.test}`}>
        {label}
    </button>
)