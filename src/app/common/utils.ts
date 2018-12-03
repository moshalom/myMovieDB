//import {Observable} from 'rxjs';
//import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

/*
export function apiCaller(apiReq:string) {
    return Observable.create(observer => {
        const host="https://api.themoviedb.org/3";
        const api_key="3d565f32541bd5e570bada729cceb3cb";
        const controller = new AbortController();
        const signal = controller.signal;
        console.log ("shsjdhsjhdsj");
        const url = host+ apiReq  + "&api_key=" + api_key;

        fetch(url, {signal})
            .then(response => {

                if (response.ok) {
                    return response.json();
                }
                else {
                    observer.error('Request failed with status code: ' + response.status);
                }
            })
            .then(body => {

                observer.next(body);

                observer.complete();

            })
            .catch(err => {

                observer.error(err);

            });

        return () => controller.abort()


    });
}*/

