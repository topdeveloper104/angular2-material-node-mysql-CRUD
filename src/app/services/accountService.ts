import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

let baseURL = "http://localhost:3000/Accounts";

@Injectable()

export class AccountService {

    constructor(public http: Http){}

    getAllAccounts(){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.get(baseURL, {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }
    getAccounts(userid, bankid){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.get(baseURL + "/" + userid + "/" + bankid, {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }

    addAccount(account){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.post(baseURL, JSON.stringify(account), {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }
    deleteAccount(id){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.delete(baseURL + "/" + id, {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }

    updateAccount(id, account){
        console.log("ddd", account);
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.put(baseURL + "/" + id, JSON.stringify(account), {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }
}