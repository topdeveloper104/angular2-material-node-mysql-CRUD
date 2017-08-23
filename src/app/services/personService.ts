import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

let baseURL = "http://localhost:3000/Users";

@Injectable()

export class PersonService {

    constructor(public http: Http){}

    getAllPersons(){
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

    getPerson(id){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.get(baseURL + "/" + id, {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }

    addPerson(person){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.post(baseURL, JSON.stringify(person), {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }
    deletePerson(id){
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

    updatePerson(id, person){
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json, text/plain, */*');

            this.http.put(baseURL + "/" + id, JSON.stringify(person), {headers: headers})
            .subscribe(res => {
                resolve(res.json());
            }, (err) => {
                reject(err);
            });
        });
    }
}