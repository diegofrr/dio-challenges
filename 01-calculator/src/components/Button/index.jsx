import styles from './button.module.css';

export const Button = ({ children: char }) => (
    <button className={styles.container}>
        {formatChar(char)}
    </button>
)

function formatChar(char) {
    return (char.length > 3 ? char.substr(0, 3) : char).toUpperCase();
}