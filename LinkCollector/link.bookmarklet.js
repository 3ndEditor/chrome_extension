// (function () {

//     // the minimum version of jQuery we want
//     var v = "1.3.2";

//     // check prior inclusion and version
//     if (window.jQuery === undefined || window.jQuery.fn.jquery < v) {
//         var done = false;
//         var script = document.createElement("script");
//         script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
//         script.onload = script.onreadystatechange = function () {
//             if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
//                 done = true;
//                 initMyBookmarklet();
//             }
//         };
//         document.getElementsByTagName("head")[0].appendChild(script);
//     } else {
//         initMyBookmarklet();
//     }

//     function initMyBookmarklet() {
//         //현재 페이지의 url 정보 get
//         var urlData = window.location.href;
//         $.ajax({
//             url: "http://localhost:8080/collect",
//             type: "post",
//             data: "urlData=" + urlData,
//             dataType: "json",
//             success: function (restaurantList) {
//                 alert("success!!");
//             },
//             error: function (exception) {
//                 alert("errorMessage"+exception.message);
//             }
//         })
//     }

// })();
// jQuery 를 쓰면 스크립트를 추가시켜줘야 하는데 구글 크롬이 막아 놓는다..../ 근데 다르게 해도 쓸수 있을까 보자. 
// cors도 막혀있다.. ㅠㅠ 

(function () {
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("GET", "http://localhost:8080/collect?callback=initMyBookmarklet");
    // xhttp.onreadystatechange = function () {
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //         document.getElementById("Context").innerHTML = xhttp.responseText;
    //     }
    // };
    // xhttp.send();


    // 브라우저별로 알맞게 cors 객체를 생성해준다. 
    //https://www.html5rocks.com/en/tutorials/cors/ 에서 발췌해왔음. 
    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {

            // Check if the XMLHttpRequest object has a "withCredentials" property.
            // "withCredentials" only exists on XMLHTTPRequest2 objects.
            xhr.open(method, url, true);

        } else if (typeof XDomainRequest != "undefined") {

            // Otherwise, check if XDomainRequest.
            // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
            xhr = new XDomainRequest();
            xhr.open(method, url);

        } else {

            // Otherwise, CORS is not supported by the browser.
            xhr = null;

        }
        return xhr;
    }

    function makeCorsRequest() {
        var urlData = window.location.href;
        var url = "http://localhost:8080/collect?urlData="+urlData;
        var xhr = createCORSRequest('GET', url);
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.onload = function () {
            var responseText = xhr.responseText;
            console.log(responseText);
            // process the response.
        };

        xhr.onerror = function () {
            console.log('There was an error!');
        };
        // 쿠키 설정 가능하게 만들기
        // xhr.withCredentials = true;

        xhr.send();
    }

    makeCorsRequest();
})();

