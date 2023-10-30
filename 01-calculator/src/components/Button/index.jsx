import styles from './button.module.css';

export const Button = (props) => (
    <button
        onClick={() => props.onclick(props.label)}
        className={`
                ${styles.container}
                ${props.isSubmit ? styles.submit : ''}
                ${props.hl ? styles.highlight : ''}
                ${props.zero ? styles['zero-button'] : ''}
            `}>
        {props.label}
    </button >
)