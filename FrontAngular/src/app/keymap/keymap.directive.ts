import { Component, Directive, HostListener } from '@angular/core';

@Directive({ selector: '[keymap]' })
export class KeymapDirective {
    constructor() {

    }


    @HostListener('keyup') onkeyup(){

        
    }
}