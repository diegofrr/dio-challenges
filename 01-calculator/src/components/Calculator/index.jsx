import styles from './calculator.module.css';

import { Button } from '../Button';
import { Display } from '../Display';
import { useEffect, useState } from 'react';

export const Calculator = () => {
    const [result, setResult] = useState(0);

    const addLabel = (label) => {
        setResult(result === 0 ? label : result + label);
    }

    const handleSubmit = () => {
        // eslint-disable-next-line no-eval
        setResult(eval(formatResult(result)));
    }

    const clear = () => {
        setResult(0);
    }

    const erase = () => {
        const _result = `${result}`.substring(0, result.length - 1);
        if (!_result.length) clear();
        else setResult(_result)
    }

    const formatResult = (result) => {
        return result.toString().replace('x', '*').replace('%', '*')
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Display result={result} />
                <div className={styles['buttons-container']}>
                    <Button onclick={addLabel} label='1' />
                    <Button onclick={addLabel} label='2' />
                    <Button onclick={addLabel} label='3' />
                    <Button onclick={addLabel} label='4' />
                    <Button onclick={addLabel} label='5' />
                    <Button onclick={addLabel} label='6' />
                    <Button onclick={addLabel} label='7' />
                    <Button onclick={addLabel} label='8' />
                    <Button onclick={addLabel} label='9' />
                    <Button onclick={addLabel} label='0' />
                    <Button onclick={addLabel} label='.' />

                    <Button onclick={addLabel} label='+' />
                    <Button onclick={addLabel} label='x' />

                    <Button onclick={handleSubmit} label='=' />
                    <Button onclick={clear} label='C' />
                    <Button onclick={erase} label='CE' />
                </div>
            </div>
        </div>
    )
}