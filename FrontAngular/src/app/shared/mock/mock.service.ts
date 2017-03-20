import { Injectable } from '@angular/core';
import { LINKS } from './mock-link';


export interface DataServiceStructure{
    getLinks();
}

@Injectable()
export class MockService implements DataServiceStructure{
    constructor(){}
    getLinks(){
        return LINKS;
    }
}