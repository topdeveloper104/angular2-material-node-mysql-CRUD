import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

let baseURL = "http://localhost:3000/Banks";

@Injectable()

export class BankService {

    constructor(public http: Http){}

    getAllBanks(){
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

    getBanks(userid){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.get(baseURL + "/" + userid, {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }

    addBank(bank){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.post(baseURL, JSON.stringify(bank), {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }
    deleteBank(id){
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

    updateBank(id, bank){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.put(baseURL + "/" + id, JSON.stringify(bank), {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }
}