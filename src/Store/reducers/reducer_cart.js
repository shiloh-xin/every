const defaultState = {
    cartList: [
        { id: 1, name: '苹果', num: 1, price: 100, done: false },
        { id: 2, name: '小米', num: 1, price: 200, done: false },
        { id: 3, name: '华为', num: 1, price: 300, done: false },
    ],
    bool: false,
};

function reducer(state = defaultState, action) {
    // 减
    if (action.type === 'sub') {
        let tmp = state.cartList;
        if (tmp[action.payload].num == 1) {
            tmp[action.payload].num = 1;
            alert('别点啦，没了！！');
        } else {
            tmp[action.payload].num--;
        }
        return {
            cartList: [...tmp],
        };
    }
    // 加
    if (action.type === 'add') {
        let tmp = state.cartList;
        tmp[action.payload].num++;
        return {
            cartList: [...tmp],
        };
    }
    // 商品单选框
    if (action.type === 'clickHandler') {
        let tmp = state.cartList;
        let bool = state.bool;
        tmp[action.index].done = action.payload;

        if (tmp[0].done && tmp[1].done && tmp[2].done) {
            bool = true;
        } else {
            bool = false;
        }

        return {
            cartList: [...tmp],
            bool,
        };
    }
    // 全选
    if (action.type === 'all') {
        let tmp = state.cartList;
        let bool = state.bool;
        if (action.payload) {
            tmp.map((v, k) => {
                v.done = true;
            });
            bool = true;
        } else {
            tmp.map((v, k) => {
                v.done = false;
            });
            bool = false;
        }
        return {
            cartList: [...tmp],
            bool,
        };
    }
    // 反选
    if (action.type === 'reverse') {
        let tmp = state.cartList;
        let bool = state.bool;
        if (tmp[0].done && tmp[1].done && tmp[2].done) {
            bool = true;
        } else {
            bool = false;
        }
        console.log(bool);
        if (action.payload) {
            tmp.map((v, k) => {
                v.done = !v.done;
            });
        }
        return {
            cartList: [...tmp],
            bool,
        };
    }
    return state;
}

export default reducer;
