import { fromJS, Map, toJS } from 'immutable';

const defaultState = fromJS({
    list: [],
});

function reducer(state = defaultState, action) {
    // 添加
    if (action.type === 'plus') {
        // let tmp = state.list;
        // tmp.push({ content: action.payload, state: false });
        // saveState({ list: tmp });
        // return {
        //     list: [...tmp],
        // };
        let newState = fromJS(state);
        if (action.type === 'add') {
            newState = newState.update('list', item =>
                item.push(Map({ content: action.payload, state: false }))
            );
            saveState(newState.toJS());
            return newState;
        }
    }
    // 修改
    if (action.type === 'change') {
        let tmp = state.list;
        state.list.map((item, index) => {
            if (index === action.payload) {
                tmp[index].state = !tmp[index].state;
            }
        });
        saveState({ list: tmp });
        return {
            list: [...tmp],
        };
    }
    // 删除
    if (action.type === 'del') {
        state.list.splice(action.payload, 1);
        saveState({ list: state.list });
        return {
            list: [...state.list],
        };
    }
    return loadState();
}

// 获取本地数据
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            // 如果本地没有则给默认数据源
            return defaultState;
        } else {
            return JSON.parse(serializedState);
        }
    } catch (err) {
        // 如果本地没有则给默认数据源
        return defaultState;
    }
};

// 存储数据到本地
const saveState = state => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {}
};

export default reducer;
