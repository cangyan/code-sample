function isString(a: unknown): a is string {
    return typeof a === "string";
}
function parseInt(input: string | number) {
    if (isString(input)) {
        console.log(input.toUpperCase());
    } else {
        console.log(input);
    }
}

parseInt("a");
parseInt(1);
