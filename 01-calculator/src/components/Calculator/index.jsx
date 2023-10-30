import styles from './calculator.module.css';

import { Button } from '../Button';
import { Display } from '../Display';
import { useState } from 'react';

const OPERATIONS = ['+', '-', '/', 'x']

export const Calculator = () => {
    const [result, setResult] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const addLabel = label => {
        if (!result.length && (isOperation(label) || isComma(label))) return;
        else if (isOperation(label) && lastIsOperation()) {
            return setResult(result.slice(0, -1) + label)
        }

        if (submitted) clear(label);
        else setResult(result === 0 ? label : result + label);
    }

    const handleSubmit = () => {
        // eslint-disable-next-line no-eval
        setResult(eval(formatResult(result)));
        setSubmitted(true);
    }

    const clear = (initValue) => {
        setResult(initValue | 0);
        setSubmitted(false);
    }

    const erase = () => {
        const _result = `${result}`.substring(0, result.length - 1);
        if (!_result.length) clear();
        else setResult(_result);
    }

    const isOperation = label => {
        return OPERATIONS.includes(label);
    }

    const lastIsOperation = () => {
        return isOperation(result[result.length - 1]);
    }

    const formatResult = result => {
        return result.toString().replace('x', '*').replace('%', '*')
    }

    const isComma = label => {
        return label === '.';
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Display result={result} />
                <div className={styles['buttons-container']}>

                    <div className={styles['header-buttons']}>
                        <Button hl onclick={addLabel} label='x' />
                        <Button hl onclick={addLabel} label='/' />
                        <Button hl onclick={clear} label='C' />
                        <Button hl onclick={erase} label='CE' />
                    </div>

                    <div className={styles['digit-buttons']}>
                        <Button onclick={addLabel} label='1' />
                        <Button onclick={addLabel} label='2' />
                        <Button onclick={addLabel} label='3' />
                        <Button onclick={addLabel} label='4' />
                        <Button onclick={addLabel} label='5' />
                        <Button onclick={addLabel} label='6' />
                        <Button onclick={addLabel} label='7' />
                        <Button onclick={addLabel} label='8' />
                        <Button onclick={addLabel} label='9' />
                        <Button zero onclick={addLabel} label='0' />
                        <Button hl onclick={addLabel} label='.' />
                    </div>

                    <div className={styles['side-buttons']}>
                        <Button hl onclick={addLabel} label='+' />
                        <Button hl onclick={addLabel} label='-' />
                        <Button isSubmit onclick={handleSubmit} label='=' />
                    </div>

                </div>
            </div>
        </div>
    )
}