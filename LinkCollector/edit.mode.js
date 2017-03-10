chrome.webRequest.onHeadersReceived.addListener(function (details) {
    var limitingHeader = ['x-content-security-options', 'x-webkit-csp', 'content-security-policy', 'x-frame-options',];
    return { responseHeaders: details.responseHeaders.filter(function (header) { return limitingHeader.indexOf(header.name.toLowerCase()) < 0; }) };
}, {
        urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);
// 위 코드 설명 chrome.webRequest.onHeaderReceived = > 크롬의 웹 리스퀘스트 객체중 요청이 서버에갔다 돌아오는 순간에 대한 리스너를 등록해준다.
// responseHeaders 는 스트링의 배열이다. 그중에서 filter를 거쳐서 header의 name 중 


chrome.browserAction.onClicked.addListener(function (tab) {

    // 현재 가동되고 있는 확장프로그램의 url정볼르 가져온다. 즉 새창으로 연다는 소리
    var url = chrome.runtime.getURL('index.html');
    var index_html_document;
    window.open(url)
        .onload = function () {
            index_html_document = chrome.extension.getViews()[1].document;
            googlePlusUserLoader.onload();
        }



    var googlePlusUserLoader = (function () {

        var STATE_START = 1;
        var STATE_ACQUIRING_AUTHTOKEN = 2;
        var STATE_AUTHTOKEN_ACQUIRED = 3;

        var state = STATE_START;

        var signin_button, signout_button, revoke_button, user_info_div, gDriveEditorTab;


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

        // @corecode_begin getProtectedData
        function xhrWithAuth(method, url, interactive, callback) {
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
                    console.log(access_token);
                    requestStart();
                });
            }

            function requestStart() {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
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

        function getUserInfo(interactive) {
            xhrWithAuth('GET',
                'https://www.googleapis.com/plus/v1/people/me',
                interactive,
                onUserInfoFetched);
        }


        // @corecode_end getProtectedData


        // Code updating the user interface, when the user information has been
        // fetched or displaying the error.
        function onUserInfoFetched(error, status, response) {
            if (!error && status == 200) {
                changeState(STATE_AUTHTOKEN_ACQUIRED);
                user_info_div.innerHTML = "" + (response);
                var user_info = JSON.parse(response);
                console.log(user_info);
                
                populateUserInfo(user_info);
            } else {
                console.log(error + status)
                console.log("test5");
                changeState(STATE_START);
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



        // OnClick event handlers for the buttons.

        /**
          Retrieves a valid token. Since this is initiated by the user
          clicking in the Sign In button, we want it to be interactive -
          ie, when no token is found, the auth window is presented to the user.
          Observe that the token does not need to be cached by the app.
          Chrome caches tokens and takes care of renewing when it is expired.
          In that sense, getAuthToken only goes to the server if there is
          no cached token or if it is expired. If you want to force a new
          token (for example when user changes the password on the service)
          you need to call removeCachedAuthToken()
        **/
        function interactiveSignIn() {
            changeState(STATE_ACQUIRING_AUTHTOKEN);

            // @corecode_begin getAuthToken
            // @description This is the normal flow for authentication/authorization
            // on Google properties. You need to add the oauth2 client_id and scopes
            // to the app manifest. The interactive param indicates if a new window
            // will be opened when the user is not yet authenticated or not.
            // @see http://developer.chrome.com/apps/app_identity.html
            // @see http://developer.chrome.com/apps/identity.html#method-getAuthToken
            // chrome.identity.getAuthToken({ 'interactive': true }, function (token) {
            //     if (chrome.runtime.lastError) {
            //         // user_info_div.innerHTML = "" + chrome.runtime.lastError;
            //         changeState(STATE_START);
            //     } else {
            //         // user_info_div.innerHTML = 'Token acquired:' + token +
            //         //     '. See chrome://identity-internals for details.';
            //         changeState(STATE_AUTHTOKEN_ACQUIRED);
            getUserInfo(true);
            //     }
            // });
            // @corecode_end getAuthToken
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
        function upLoadDoc() {
            chrome.identity.getAuthToken({ 'interactive': true },
                function (current_token) {
                    if (!chrome.runtime.lastError) {
                        var xhr = new XMLHttpRequest();
                        var params =
                            xhr.open('POST', "https://www.googleapis.com/oauth2/v4/token", true);
                        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                        xhr.setRequestHeader('Authorization', 'Bearer' + current_token);
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                console.log(xhr.responseText);
                            } else {
                                console.log(xhr.responseText);
                            }
                        };
                        xhr.send("code=" + current_token
                            + "&client_id=your_client_id");
                        // @corecode_end removeAndRevokeAuthToken
                        // Update the user interface accordingly


                    }


                })
        }

        function createGdriveWindow() {
            var url = chrome.runtime.getURL('myPage.html');
            var createData = {
                url: url,
                width: 500,
                height: 600,
                top: (window.innerHeight / 2) - 600,
                left: (window.innerWidth / 2) - 500,
                type: "panel"
            }
            chrome.windows.create(createData, getFileList)
                .onload = function () { };

            function getFileList() {
                chrome.identity.getAuthToken({ 'interactive': true },
                    function (current_token) {
                        if (!chrome.runtime.lastError) {
                            var xhr = new XMLHttpRequest();
                            var params = {
                                // corpus : "",
                                orderBy: "createdTime", // 만들어진 순서 
                                // pageSize : "",
                                // pageToken : "",
                                // q : "",
                                // spaces : "",
                            }
                            var contentDoc = index_html_document.querySelector('#editor').innerHTML;
                            console.log(contentDoc);
                            xhr.open('GET', 'https://www.googleapis.com/drive/v3/files' + formatParams(params), true);
                            xhr.setRequestHeader('Authorization', 'Bearer ' + current_token);
                            xhr.onreadystatechange = function () {
                                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                                    window.
                                        JSON.parse(xhr.responseText);

                                } else {
                                    console.log(xhr.responseText);
                                }
                            };
                            xhr.send();
                            // @corecode_end removeAndRevokeAuthToken
                            // Update the user interface accordingly


                        }
                        function formatParams(params) {
                            return "?" + Object
                                .keys(params)
                                .map(function (key) {
                                    return key + "=" + params[key]
                                })
                                .join("&");
                        }
                    });
            }
        }


        return {
            onload: function () {
                signin_button = index_html_document.querySelector('#signin');
                signin_button.addEventListener('click', interactiveSignIn);
                signout_button = chrome.extension.getViews()[1].document.querySelector('#signOut');
                signout_button.addEventListener('click', revokeToken);
                // revoke_button = document.querySelector('#revoke');
                // revoke_button.addEventListener('click', revokeToken);
                user_info_div = chrome.extension.getViews()[1].document.querySelector('#user_info');
                gDriveEditorTab = index_html_document.querySelector('#google_drive');
                console.log(gDriveEditorTab);
                // gDriveEditorTab.addEventListener('click', upLoadDoc);
                // gDriveEditorTab.addEventListener('click', getFileList);
                gDriveEditorTab.addEventListener('click', createGdriveWindow);
                // Trying to get user's info without signing in, it will work if the
                // application was previously authorized by the user.
                getUserInfo(false);
            }
        };

    })();
    // window.onload = googlePlusUserLoader.onload;
    // console.log(googlePlusUserLoader);
});


