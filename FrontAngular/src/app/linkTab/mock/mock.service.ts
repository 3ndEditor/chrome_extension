import { Injectable } from '@angular/core';
import { LINK } from './mock-link';


export interface DataServiceStructure{
    getLink();
}

@Injectable()
export class MockService implements DataServiceStructure{
    constructor(){}
    getLink(){
        return LINK;
    }
}