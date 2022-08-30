class InvalidDateFormatError extends RangeError { }
class DateIsInTheFuturuError extends RangeError { }
function isValid(date: Date) {
    return (
        Object.prototype.toString.call(date) === "[object Date]" &&
        !Number.isNaN(date.getTime())
    );
}

function parse(
    birthday: string
): Date | InvalidDateFormatError | DateIsInTheFuturuError {
    let date = new Date(birthday);
    if (!isValid(date)) {
        return new InvalidDateFormatError("请输入日期(格式为YYYY/MM/DD)");
    }
    if (date.getTime() > Date.now()) {
        return new DateIsInTheFuturuError("出生日期不能大于现在");
    }
    return date;
}

let result = parse("2020/01/01");
if (result instanceof InvalidDateFormatError) {
    console.error(result.message);
} else if (result instanceof DateIsInTheFuturuError) {
    console.error(result.message);
} else {
    console.log("日期为", result.toLocaleString());
}
