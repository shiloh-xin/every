export const sub = index => {
    return {
        type: 'sub',
        payload: index,
    };
};

export const add = index => {
    return {
        type: 'add',
        payload: index,
    };
};

export const clickHandler = (ref, index) => {
    return {
        type: 'clickHandler',
        payload: ref,
        index: index,
    };
};

export const all = allRef => {
    return {
        type: 'all',
        payload: allRef,
    };
};

export const reverse = reverse => {
    return {
        type: 'reverse',
        payload: reverse,
    };
};
