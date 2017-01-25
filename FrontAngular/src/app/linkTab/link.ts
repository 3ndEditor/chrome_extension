import { Component } from '@angular/core';

@Component({})

//URL객체
export class Link {
    constructor(private url:string, private isFixed:boolean, private isTrushed:boolean){}
}