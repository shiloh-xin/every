// 定义一个修改的规则（action）
// 此文件中不要使用默认导出(数据修改的规则可能会有很多个)
export const actionCreator = () => {
    // setTimeout(() => {
    //     return {
    //         type: 'incr',
    //         payload: 9,
    //     };
    // }, 2000);
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: 'incr',
                payload: 9,
            });
        }, 2000);
    };
};
