const bool: boolean = true; // 布尔型
const num: number = 100; //数字型
const str: string = "hoge"; //string型
const obj: { a: number; b: string } = {
    a: 101,
    b: "101",
}; // 对象

// 索引签名
const indexSignature: {
    a?: string; // 可选/可省略key
    [b: number]: boolean;
    /* 声明一个索引签名时，如[key:T]: U,
    所有拥有T型的成员都必须带有U类型的值*/
    readonly c: string;
} = {
    a: "yyds",
    1: true,
    2: false,
    3: false,
    c: "mdyb2020",
};

// 类型别名
type Age = number;
type Person = {
    name: string;
    age: Age;
};

// 联合和交叉
type Cat = { name: string; purrs: boolean };
type Dog = { name: string; barks: boolean; wags: boolean };
type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;

const superDog: CatOrDogOrBoth = {
    name: "dog",
    purrs: true,
    barks: false,
    wags: false,
};

const superCat: CatAndDog = {
    name: "cat",
    purrs: true,
    barks: false,
    wags: false,
};

// 数组
const arr1: string[] = ["a", "b"];
const arr2: (number | string)[] = [1, "a", "b"];

// 元组(from python?)
const a: [string, string, number] = ["a", "b", 1963];
const list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

// 枚举
const enum Language {
    English = 0,
    Spanish = 1,
    Russian = 2,
}

console.log(Language.English);
