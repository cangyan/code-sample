type Obj = {
    [key: string]: string;
};

const obj: Obj = {
    foo: "FOO",
    bar: "BAR",
    baz: "BAZ",
};

for (const key in obj) {
    console.log(key as any, obj[key]);
}

// const obj = {
//     foo: "FOO",
//     bar: "BAR",
//     baz: "BAZ",
// };
//
// for (const key in obj) {
//     console.log(key as any, obj[key as keyof typeof obj]);
// }
//
// for (const [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }
