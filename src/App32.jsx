import React, { Component } from 'react';
import { Map, is, List, fromJS, toJS } from 'immutable';

// immutable与js 的互转
const state = {
    id: 1,
    name: '张三',
    age: 22,
    mobile: { public: '1300000000', private: '13333333333' },
};
// 将其转成immutable的对象
const immu = fromJS(state);
console.log(immu);
// 将immutable对象转成js对象
console.log(immu.toJS());

// 数组转list
// const state = ['灞波儿奔', '奔波儿灞'];
// let list = List(state);

// // 打印
// console.log(state, list);

// // 合并
// list = list.concat(['黑鱼精', '鲶鱼怪']);
// console.log(list.get(3));

// // 追加
// list = list.push('乱石山碧波潭');
// console.log(list.get(4));

// // 转成数组
// console.log(list.toArray());
// set/setIn/get/getIn/update/updateIn用法一样

///////////////////////============================================

// object转map对象
// const state = {
//     id: 1,
//     name: '张三',
//     age: 22,
//     mobile: { public: '1300000000', private: '13333333333' },
// };
// const map1 = Map(state);
// const map2 = Map(state);
// console.log(state, map1, map2);

// 比较上的差异
// console.log(map1 === map2); // 原生写法(不对)
// console.log(map1.equals(map2)); // immutable中比较两个值是否相等的方式
// console.log(is(map1, map2));

// 获取数据上的差异
// console.log(state.name); // 原生的获取
// console.log(state.mobile.private); // 获取存在嵌套关系的数据
// console.log(map1.get('name')); // immutable获取
// console.log(map1.getIn(['mobile', 'private'])); // 获取存在嵌套关系的数据

// 修改数据上的差异
// state.name = '李四';
// console.log(state.name);
// state.mobile.private = '17635105161';
// console.log(state.mobile.private);
// const newMap1 = map1.set('name', '李四'); // 支持使用set和setIn方式修改（第二个参数：必须是固定的值，可以是变量）
// console.log(newMap1.get('name'));
// map1.setIn(['mobile', 'private'], '17635105161');
// console.log(map1.getIn(['mobile', 'private']));
// const newMap2 = map1.update('age', val => val + 1); // 还支持update方法修改（api）（第二个参数必须是回调函数）
// console.log(newMap2.get('age'));
// const newMap3 = newMap2.updateIn(['mobile', 'private'], () => '15835053858');
// console.log(newMap3.getIn(['mobile', 'private']));

class App32 extends Component {
    render() {
        return <div></div>;
    }
}

export default App32;
