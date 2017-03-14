import { Router } from '@angular/router';
import { EventEmitter, Injectable, Output } from '@angular/core';

declare var chrome: any;

@Injectable()
export class ChromeExtensionService {
    public isDriveWindowOpen: boolean = false;
    private driveFileList;

    public fileName : string ;
    public fileAthor : string;
    public savedState : string;
    public writeTime : string ; // 시간 객체로 확인해봐야겠어. 
    
    constructor(private router: Router) {

    }

    private xhrWithAuth(method: string, url: string, interactive: boolean, callback, params) {
        let access_token;
        let retry = true;
        let that = this;

        getToken();

        function getToken() {
            try {
                chrome.identity.getAuthToken({ interactive: interactive }, function (token) {
                    if (chrome.runtime.lastError) {
                        console.log(chrome.runtime.lastError);

                        callback(chrome.runtime.lastError);
                        return;
                    }
                    access_token = token;
                    requestStart();
                });

            } catch (e) {
                console.log(e);
                that.router.navigate(['welcome']);
            }
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
            xhr.onload = function requestComplete() {
                if (xhr.status == 401 && retry) {
                    retry = false;
                    chrome.identity.removeCachedAuthToken({ token: access_token },
                        getToken);
                } else {
                    callback(null, xhr.status, xhr.response);
                }
            }
            xhr.send();
        }
        // function requestComplete() {
        //     if (this.status == 401 && retry) {
        //         retry = false;
        //         chrome.identity.removeCachedAuthToken({ token: access_token },
        //             getToken);
        //     } else {
        //         console.log(this);
        //         console.log(this.response)
        //         callback(null, this.status, this.response);
        //     }
        // }
    }



    public checkGetToken(): Promise<boolean> {
        let result;
        let params = {
            // corpus : "",
            // orderBy: "createdTime", // 만들어진 순서 
            // pageSize : "",
            // pageToken : "",
            // q : "",
            // spaces : "",
        };
        let method: string = 'GET';
        let url: string = 'https://www.googleapis.com/plus/v1/people/me';
        let that = this;

        let STATE_START = 1;
        let STATE_ACQUIRING_AUTHTOKEN = 2;
        let STATE_AUTHTOKEN_ACQUIRED = 3;

        let state = STATE_START;

        let signin_button = document.querySelector('#signin');
        let signout_button = document.querySelector('#signOut');
        let user_info_div = document.querySelector('#user_info');
        console.log(signin_button);

        return new Promise<boolean>(function (resolve, reject) {
            signin_button.addEventListener('click', interactiveSignIn);
            signout_button.addEventListener('click', revokeToken);
            that.xhrWithAuth(method, url, false, onsuccess, params);

            function onsuccess(error, status, response) {
                if (!error && status == 200) {
                    changeState(STATE_AUTHTOKEN_ACQUIRED);
                    user_info_div.innerHTML = "" + (response);
                    var user_info = JSON.parse(response);
                    resolve(true);
                    that.fileAthor = user_info.displayName;
                    that.savedState = "파일 생성이 필요합니다."
                    that.fileName = "test!"
                    populateUserInfo(user_info);
                } else {
                    reject(false);
                    that.router.navigate(['welcome']);
                    changeState(STATE_START);
                }
            }




            function disableButton(button) {
                button.classList.add('disabled', 'disabled');
            }

            function enableButton(button) {
                button.classList.remove('disabled');
            }

            function changeState(newState) {
                state = newState;
                // console.log(signin_button + "///"+signout_button)
                switch (state) {
                    case STATE_START:
                        enableButton(signin_button);
                        disableButton(signout_button);
                        // disableButton(revoke_button);
                        break;
                    case STATE_ACQUIRING_AUTHTOKEN:
                        // user_info_div.innerHTML = ('Acquiring token...');
                        disableButton(signin_button);
                        disableButton(signout_button);
                        // disableButton(revoke_button);
                        break;
                    case STATE_AUTHTOKEN_ACQUIRED:
                        disableButton(signin_button);
                        enableButton(signout_button);
                        // enableButton(revoke_button);
                        break;
                }
            }
            function populateUserInfo(user_info) {
                user_info_div.innerHTML = "Hello " + user_info.displayName;

                fetchImageBytes(user_info);
            }

            function fetchImageBytes(user_info) {
                if (!user_info || !user_info.image || !user_info.image.url) return;
                var xhr = new XMLHttpRequest();
                xhr.open('GET', user_info.image.url, true);
                xhr.responseType = 'blob';
                xhr.onload = onImageFetched;
                xhr.send();
            }

            function onImageFetched(e) {
                if (this.status != 200) return;
                var imgElem = document.createElement('img');
                var objUrl = window.URL.createObjectURL(this.response);
                imgElem.src = objUrl;
                imgElem.onload = function () {
                    window.URL.revokeObjectURL(objUrl);
                }
                user_info_div.insertAdjacentElement("afterbegin", imgElem);
            }
            function interactiveSignIn() {
                changeState(STATE_ACQUIRING_AUTHTOKEN);

                // chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
                //     if (chrome.runtime.lastError) {
                //         // user_info_div.innerHTML = "" + chrome.runtime.lastError;
                //         changeState(STATE_START);
                //     } else {
                //         // user_info_div.innerHTML = 'Token acquired:' + token +
                //         //     '. See chrome://identity-internals for details.';
                //         changeState(STATE_AUTHTOKEN_ACQUIRED);
                that.xhrWithAuth(method, url, true, onsuccess, params);
                //     }
                // });
            }
            function revokeToken() {
                // user_info_div.innerHTML = "";
                chrome.identity.getAuthToken({ 'interactive': false },
                    function (current_token) {
                        if (!chrome.runtime.lastError) {

                            // @corecode_begin removeAndRevokeAuthToken
                            // @corecode_begin removeCachedAuthToken
                            // Remove the local cached token
                            chrome.identity.removeCachedAuthToken({ token: current_token },
                                function () { });
                            // @corecode_end removeCachedAuthToken

                            // Make a request to revoke token in the server
                            var xhr = new XMLHttpRequest();
                            xhr.open('GET', 'https://accounts.google.com/o/oauth2/revoke?token=' +
                                current_token);
                            xhr.send();
                            // @corecode_end removeAndRevokeAuthToken

                            // Update the user interface accordingly
                            changeState(STATE_START);
                            user_info_div.innerHTML = ('Token revoked and removed from cache. ' +
                                'Check chrome://identity-internals to confirm.');
                        }
                    });
            }
        })
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