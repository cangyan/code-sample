class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    public isAdult(): boolean {
        return this.age > 18
    }
}

const personList: Array<Person> = [
    new Person('张三', 19),
    new Person('李四', 12),
    new Person('王五', 24),
    new Person('赵六', 21),
]

let count: number = 0;
for (const p of personList) {
    if (p.isAdult()) {
        count++;
    }
}

//
// console.log(`成年人一共有${count}位`)

// const count: number = personList
//     .filter(p => p.isAdult())
//     .length;

console.log(`成年人一共有${count}位`)




