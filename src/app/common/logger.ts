import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

export enum LogginLevel {
    TRACE, 
    DEBUG,
    INFO,
    ERROR
}

let logginLevel = LogginLevel.INFO;

export function setLogginLevel (level: LogginLevel)
{
    logginLevel = level;
}

export const logger = (level: number, message: string) =>
    (source: Observable<any>) => source
        .pipe(
            tap(val => {
                console.log ("xxxx");
                if (level >= logginLevel){
                    console.log(message + ':' , val);
                }
            })
        );
