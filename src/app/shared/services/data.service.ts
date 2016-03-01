import { Injectable } from 'angular2/core';
import { Http, Headers, RequestOptions, Response } from 'angular2/http';

//Grab everything with import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

    stageBaseUrl: string = 'https://stageadmin.ttrumpet.com/v2.0/merchant/sign_in';

    constructor(private http: Http) { }

    postValidate(email: string, password: string) : Observable<Session> {
        // console.log("postValidate(" + email + "," + password + ")");
        // return JSON.stringify({"email": email, "password": password});
        let body = new JSON.stringify({"email": email, "password": password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        console.log(body);
        console.log(options);

        return this.http.post(this.stageBaseUrl, body, options )
                        .map(res  => res )
                        .catch(this.handleError);

    }

    // getCustomers() {
    //     return this.http.get('/customers.json')
    //                     .map((res: Response) => res.json())
    //                     .catch(this.handleError);
    // }

    getOrders(){
      return this.http.get(this.baseUrl + '/orders.json')
                      .map((res: Response) => res.json())
                      .catch(this.handleError);
    }

    handleError(error: any) {
        console.log(error);
        // return Observable.throw(error.json().error || 'Server error');
    }

}
