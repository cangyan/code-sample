type TelephoneNumber = `${number}-${number}` //021-50******

const TelephoneNumber = {
    create: (value: string): TelephoneNumber => {
        if (!/^[0-9]{3}-[0-9]{8}$/.test(value)) {
            throw new Error(`电话号码格式不对。`);
        }
        return value as TelephoneNumber;
    }
}

const num1: TelephoneNumber = TelephoneNumber.create('021-50001111');
console.log(JSON.stringify(num1));

const num2: TelephoneNumber = "021-123456789"; // 错误的号码绕过create方法赋值成功





