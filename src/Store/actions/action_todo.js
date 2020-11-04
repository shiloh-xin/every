export const plus = content => {
    return {
        type: 'plus',
        payload: content,
    };
};

export const change = index => {
    return {
        type: 'change',
        payload: index,
    };
};

export const del = index => {
    return {
        type: 'del',
        payload: index,
    };
};
