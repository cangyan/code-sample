let d = { x: 10 } as const;
// 等效
// let d: { readonly x: number } = { x: 10 }

// 对象类型的lookup型，通过key来获取节点元素类型
type APIResponse = {
    user: {
        userId: string;
        friendList: {
            count: number;
            friends: {
                firstName: string;
                lastName: string;
            }[];
        };
    };
};

// keyof
// - 对象所有key(属性)以文字类型('|'拼接)展示
type ResponseKeys = keyof APIResponse; // 'user'
type UserKeys = keyof APIResponse["user"]; //'userId' | 'friendList'

// mapped type, key到value映射
type SystemSupportLanguage = "en" | "fr" | "it" | "es";
type Butterfly = {
    [key in SystemSupportLanguage]: string;
};
const butterflies: Butterfly = {
    en: "Butterfly",
    fr: "Papillon",
    it: "Farfalla",
    es: "Mariposa",
    // de: "Schmetterling", // de不存在，不能赋值
};

for (const key in butterflies) {
    console.log(key, butterflies[key as keyof typeof butterflies]);
}
// for (const key in butterflies) {
//     console.log(key, butterflies[key]);
// }
for (const [key, value] of Object.entries(butterflies)) {
    console.log(key, value);
}

/*
butterflies[key]会报错，须使用butterflies[keyof typeof someObj]
1. keyof typeof butterflies：
    key as "en" | "fr" | "it" | "es"
2. butterflies[key as keyof typeof butterflies]
    butterflies[en as "en" | "fr" | "it" | "es"]
    ...
*/

type Account = {
    id: number;
    isEmployee: boolean;
    notes: string[];
};

// 所有字段允许为null
type NullableAccount = {
    [K in keyof Account]: Account[K] | null;
};

const testAccount: Account = {
    id: 1,
    isEmployee: true,
    notes: [],
};

const testNullableAccount: NullableAccount = {
    id: null,
    isEmployee: null,
    notes: null,
};
