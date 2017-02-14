import { Links } from '../link/links';
import { Link } from '../link/link';

export let LINKS: Links[]=[
{
    email : 'eosuntaek@gmail.com', 
    links : [
        {
            url : 'http://www.google.com', 
            fixed : [true, 1], 
            trashed : false
        },
        {
            url : 'http://www.naver.com', 
            fixed : [true, 2], 
            trashed : false
        },
        {
            url : 'http://www.nate.com', 
            fixed : [true, 3], 
            trashed : false
        }
    ]
}, 
{
    email : 'eosuntaek@gmail.com', 
    links : [
        {
            url : 'http://www.google.com', 
            fixed : [false, 2], 
            trashed : false 
        },
        {
            url : 'http://www.naver.com', 
            fixed : [false, 1], 
            trashed : false
        }
    ]
},
{
    email : 'eosuntaek@gmail.com', 
    links : [
        {
            url : 'http://www.google.com', 
            fixed : [false, 2], 
            trashed : false
        },
        {
            url : 'http://www.naver.com', 
            fixed : [false, 1], 
            trashed : false
        }
    ]
}
]