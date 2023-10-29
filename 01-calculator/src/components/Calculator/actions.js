export const addLabel = label => {
    label = formatLabel(label);
    setResult(result === 0 ? label : result + label);
}

export const handleSubmit = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(result));
}

export const clear = () => {
    setResult(0);
}

export const erase = () => {
    const _result = `${result}`.substring(0, result.length - 1);
    if (!_result.length) clear();
    else setResult(_result)
}

export const formatLabel = label => {
    switch (label) {
        case 'x': return '*';
        case '%': return '/';
        default: return label;
    }
}