chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        switch (request.directive) {
        case "popup-click":
            chrome.runtime.onInstalled.addListener(function() {
                document.body.innerHTML = document.body.innerHTML.replace(/disabled="disabled"/g, " ");
              });
            sendResponse({});
            break;
        default:
            alert("Unmatched request of '" + request + "' from script to background.js from " + sender);
        }
    }
);