export class Bank {
    id: number;
    userid: number;
    name: string = '';
    country: string = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}