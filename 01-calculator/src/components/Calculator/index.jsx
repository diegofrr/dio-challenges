import styles from './calculator.module.css';

import { useState } from 'react';

import { Button } from './Button';
import { Display } from './Display';

const OPERATIONS = ['+', '-', '/', 'x'];
const MAX_LABELS = 12;

export const Calculator = () => {
    const [result, setResult] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);

    const addLabel = label => {
        if (!isValid(label)) return setCanSubmit(false);
        else setCanSubmit(true);

        setResult((result === 0 && !isOperation(label)) ? label : result + label);
    }

    const handleSubmit = () => {
        if (!hasOperation() || lastIsOperation()) return;

        executeEval();
        setCanSubmit(false);
        setSubmitted(true);
    }

    const executeEval = () => {
        // eslint-disable-next-line no-eval
        let _result = Number(eval(formatResult(result)));
        _result = Number.isInteger(_result) ? _result : _result.toPrecision(6)
        setResult(_result);
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
        return isOperation(lastLabel());
    }

    const lastLabel = () => {
        return result[result.length - 1];
    }

    const formatResult = result => {
        return result.toString().replace('x', '*').replace('%', '*');
    }

    const isComma = label => {
        return label === '.';
    }

    const hasOperation = () => {
        return OPERATIONS.some(op => result.toString().includes(op)) ||
            lastIsOperation() || isComma(lastLabel());
    }

    const isValid = label => {
        if (result.length + 1 >= MAX_LABELS) {
            return false
        } else if (!submitted && !result.length && (isOperation(label) || isComma(label))) {
            return false;
        } else if ((isComma(label) || isOperation(label)) && isComma(lastLabel())) {
            return false;
        } else if (isOperation(label) && lastIsOperation()) {
            setResult(result.slice(0, -1) + label);
            return false;
        } else return true;
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Display result={result} />
                <div className={styles['buttons-container']}>

                    <div className={styles['header-buttons']}>
                        <Button hl onclick={addLabel} label='x' />
                        <Button hl onclick={addLabel} label='/' />
                        <Button hl onclick={erase} label='DEL' />
                        <Button clear onclick={clear} label='C' />
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
                        <Button canSubmit={canSubmit} isSubmit onclick={handleSubmit} label='=' />
                    </div>

                </div>
            </div>
        </div>
    )
}