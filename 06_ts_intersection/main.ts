function Logger(constructor: Function) {
	console.log('日志输出...');
	console.log(constructor);
}

function LogProperty(target: any, propertyName: string | Symbol) {
	console.log('property decorator');
	console.log(target, propertyName);
}

function LogAccessor(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function LogMethod(
	target: any,
	name: string | Symbol,
	descriptor: PropertyDescriptor,
) {
	console.log('Method decorator');
	console.log(target);
	console.log(name);
	console.log(descriptor);
}

function LogParameter(target: any, name: string | Symbol, position: number) {
	console.log('Parameter decorator');
	console.log(target);
	console.log(name);
	console.log(position);
}

function createTimestamps(message: string) {
	return function (target: any, name: string, descriptor: PropertyDescriptor) {
		const method = descriptor.value;
		descriptor.value = async function (...args) {
			const startTime = new Date(Date.now());
			console.log(
				`${message} started at: ${startTime.toLocaleString("cn-ZH")}`
			);

			let result = await method.apply(this, args);
			const endTime = new Date(Date.now());
			console.log(
				`${message} completed at: ${endTime.toLocaleString("cn-ZH")}`
			);
			console.log(
				`${message} took ${endTime.getTime() - startTime.getTime()
				}ms to complete.`
			);
			return result;
		};
		return descriptor;
	};
}

const Sleep = (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms))
}

@Logger
class Product {
	@LogProperty
	title: string
	private _price: number;

	constructor(t: string, p: number) {
		this.title = t;
		this._price = p;
	}

	@LogAccessor
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('价格参数错误')
		}
	}

	@LogMethod
	@createTimestamps("获取折扣价格")
	async getDiscountPrice(@LogParameter discount: number) {
		await Sleep(1000)
		return this._price * (10 - discount) / 10
	}
}

const p = new Product("蒙德伊彼", 100)
const printDiscountPrice = async () => {
	const dp = await p.getDiscountPrice(3)
	console.log(dp);
}
printDiscountPrice();




