import { Injectable } from '@angular/core';
import { FOLDERS } from './mock-link';


export interface DataServiceStructure{
    getFolder();
}

@Injectable()
export class MockService implements DataServiceStructure{
    constructor(){}
    getFolder(){
        return FOLDERS;
    }
}