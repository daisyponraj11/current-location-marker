import { Injectable, Injector } from '@angular/core';
import { environment } from '../../../environments/environments';

@Injectable()
export class ErrorHandlerService {
    constructor(
        private injector: Injector,
    ) { }

    log(data: any): void {
        if (!environment.production) {
            // log data
        }
    }

    logUnknownError(error: any): void {    
        if (error && error instanceof Object) {
            error = JSON.parse(JSON.stringify(error));
        }

        if (!environment.production && error) {
            console.error(error);
            //console error
        } else {
            console.error(error);
        }
    }

    logUserDataErrors(err: any): void {
        const errorList = err.error.errors;
        const errorKeys: any[] = Object.keys(errorList);
        const errors: string[] = [];
        const message = err.error.message;
        const errormsgs = errorKeys.map(item => {
            const errorMessages: string[] = errorList[item];
            errorMessages.map(d => {
                errors.push(d);
                return
            });
        });     
        console.log(message, errormsgs, errors)
    }
}
