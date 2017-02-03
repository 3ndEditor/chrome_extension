import { Response } from '@angular/http';



export function handleError(error:Response | any){
    let errMsg : string;
    if(error instanceof Response ){
        const body = error.json()||'';
        const err = body.error || JSON.stringify(body);
        errMsg = '${erorr.status}- ${error.statusText||""} ${err}';
    }else{
        errMsg=error.message?error.message:error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
}