import { Folder } from '../../section/outline/tab/linkTab/link/folder';

export let FOLDERS: Folder[]=
[
    {
        name : 'TrashCan',
        links : [
            {
               url : 'http://www.3ndEditor.com',
               order : 0
            },
            {
                url : 'http://www.nate.com',
                   order : 0
            }
        ]      
    },
    {
        name : 'Default',
        links : [
            {
               url : 'http://www.google.com',
               order : 1
            },
            {
               url : 'http://www.naver.com',
               order : 2
            }
        ]      
    },
    {
        name : 'Custom01',
        links : [
           {
               url : 'http://www.daum.net',
               order : 1
           },
           {
               url : 'http://www.youtube.com',
               order : 2
           }
        ] 
    },
    {
       name : 'Custom02',
       links : [
           {
               url : 'http://github.com',
               order : 1
           },
           {
               url : 'http://www.naver.com',
               order : 2
           }
       ] 
    }
]