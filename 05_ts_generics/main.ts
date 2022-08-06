// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: '张三' }, { age: 18 });
// console.log(mergedObj.age);
// 报错 Property 'age' does not exist on type 'object'.

// const mergedObj = merge({ name: '张三' }, { age: 18 }) as {
//     name: string,
//     age: number
// }
// console.log(mergedObj.age); // OK

function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
// const mergedObj = merge(
//     { name: '张三' },
//     { age: 18 },
// )

const mergedObj = merge<{ name: string }, { age: number }>(
    { name: '张三', address: '上海' },
    { age: 18 },
)

// const mergedObj = merge(
//     { name: '张三', address: '上海' },
//     { age: 18 },
// )
console.log(mergedObj.age); // OK



