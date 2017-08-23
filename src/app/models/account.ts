export class Account {
    id: number;
    userid: number;
    bankid: number;
    type: string;
    name: string = '';
    opendate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}