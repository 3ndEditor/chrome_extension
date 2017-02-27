chrome.webRequest.onHeadersReceived.addListener(function (details) {
    var limitingHeader = ['x-content-security-options', 'x-webkit-csp', 'content-security-policy', 'x-frame-options',];
    return { responseHeaders: details.responseHeaders.filter(function (header) { return limitingHeader.indexOf(header.name.toLowerCase()) < 0; }) };
}, {
        urls: ["<all_urls>"]
    }, ["blocking", "responseHeaders"]);
// 위 코드 설명 chrome.webRequest.onHeaderReceived = > 크롬의 웹 리스퀘스트 객체중 요청이 서버에갔다 돌아오는 순간에 대한 리스너를 등록해준다.
// responseHeaders 는 스트링의 배열이다. 그중에서 filter를 거쳐서 header의 name 중 
