import { EventEmitter, Injectable, Output } from '@angular/core';

declare var chrome: any;

@Injectable()
export class ChromeExtensionService {
    public isDriveWindowOpen: boolean = false;


    private driveFileList;



    private xhrWithAuth(method: string, url: string, interactive: boolean, callback, params) {
        var access_token;
        var retry = true;


        getToken();

        function getToken() {

            chrome.identity.getAuthToken({ interactive: interactive }, function (token) {
                if (chrome.runtime.lastError) {
                    console.log(chrome.runtime.lastError);
                    callback(chrome.runtime.lastError);
                    return;
                }
                access_token = token;
                requestStart();
            });
        }
        function formatParams(params) {
            return "?" + Object
                .keys(params)
                .map(function (key) {
                    return key + "=" + params[key]
                })
                .join("&");
        }

        function requestStart() {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url + formatParams(params), true);
            xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
            xhr.onload = requestComplete;
            xhr.send();
        }

        function requestComplete() {
            if (this.status == 401 && retry) {
                retry = false;
                chrome.identity.removeCachedAuthToken({ token: access_token },
                    getToken);
            } else {
                callback(null, this.status, this.response);
            }
        }
    }


    public getFileList(): Promise<Array<Object>> {
        let result;
        let params = {
            // corpus : "",
            orderBy: "createdTime", // 만들어진 순서 
            // pageSize : "",
            // pageToken : "",
            // q : "",
            // spaces : "",
        };
        let method: string = 'GET';
        let url: string = 'https://www.googleapis.com/drive/v3/files';
        let that = this;
        // 여기 스코프에 대해 한번 정리하고 가야겠다. 
        // 이 메소드를 호출한 곳은 프로미스 객체를 받는다. 프로미스는 매개변수로 들어간 함수를 실행한다.
        // 함수 실행중 resolve 함수에 들어간 값을 그다음 then 함수의 결과값으로 받아볼수가 있다.
        // new 연산자로 객체를 생성하게 되면 함수의 this를 그 생성자 이름의 객체로 묶어버린다. 
        // 즉, 호출된 시점이 아닌, 강제로 지정해버리는 것이다. 
        // 매개변수역시 그 함수의 변수이다. 프로미스의 매개변수로 들어간 콜백함수의 this는 프로미스이다.
        // 프로미스 생성자의 this는 자기자신이지만, 구성환경은 자신이 포함된 getFileList함수이다.
        return new Promise<Object>(function (resolve, reject) {
            that.xhrWithAuth(method, url, true, onsuccess, params);
            function onsuccess(error, status, response) {
                if (!error && status == 200) {
                    let fileList = JSON.parse(response);
                    console.log(fileList + "1")
                    result = fileList['files'];
                    console.log(result + "2");
                    resolve(result);
                } else {
                    console.log("Get FileList fail!!!" + error);
                }
            }


        })


    }


}