(function(){
    chrome.devtools.panels.create(
        "NSOA",
        "badge.png",
        "nsoa_console.html",
        function callback(panel) {
            panel.onShown.addListener(function(win){
                win.focus();
            });
        }
    );

    // var tabId = chrome.devtools.inspectedWindow.tabId;

    // var backgroundPageConnection = chrome.runtime.connect({
    //     name: "devtools-page"
    // });

    // chrome.runtime.sendMessage({
    //     tabId: chrome.devtools.inspectedWindow.tabId,
    //     scriptToInject: "content.js"
    // });
}());