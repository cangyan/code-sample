const addNum = (a: number, b: number): number => {
    return a + b;
};
console.log(addNum(1, 100));

type Context = {
    appId?: string;
    userId?: string;
};
const log = (message: string, context: Context = {}) => {
    let time = new Date().toISOString();
    console.log(time, message, context.userId);
};
log("User clicked on a button", { userId: "da763be" });

// rest/可变长参数
// 1. 最多1个rest参数
// 2. rest参数居于入参最后位置
const sumNum = (...numbers: number[]): number => {
    console.log(numbers);
    return numbers.reduce((total, n) => total + n, 0);
};
console.log(sumNum(1, 2, 3));

// 函数调用签名
type Log = (message: string, ...userId: string[]) => void;
const logAlias: Log = (message, ...userId) => {
    const time = new Date().toISOString();
    console.log(time, message, userId);
};
logAlias("函数调用签名", "1", "2", "3");

// 函数重载
// type Hello = {
//     (person: string): void;
//     (persons: string[]): void;
// }

function hello(person: string): void;
function hello(persons: string[]): void;
function hello(param: any): void {
    if (typeof param === "string") {
        console.log("hello", param);
    } else {
        console.log("你好", param);
    }
}

hello("test");
hello(["test1", "test2"]);

// 泛型
function chooseRandomly<T>(v1: T, v2: T): T {
    return Math.random() <= 0.5 ? v1 : v2;
}

console.log(chooseRandomly<string>("胜", "负"));

type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[];
};

let filter: Filter = (array, f) => {
    return [];
};

type Filter1<T, U> = {
    (array: T[], f: (item: T) => U): U[];
};

let filter1: Filter1<number, string> = (array, f) => {
    return [];
};
