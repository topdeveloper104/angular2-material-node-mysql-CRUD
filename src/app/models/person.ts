export class Person {
    id: number;
    name: string = '';
    address: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}