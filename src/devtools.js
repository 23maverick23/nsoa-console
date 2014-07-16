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

    // chrome.devtools.inspectedWindow.eval(
    //     "setSelectedElement($0)",
    //     {
    //         useContentScriptContext: true
    //     }
    // );

    // var tabId = chrome.devtools.inspectedWindow.tabId;

    // // Create a connection to the background page
    // var backgroundPageConnection = chrome.runtime.connect({
    //     name: "panel"
    // });

    // backgroundPageConnection.postMessage({
    //     name: 'init',
    //     tabId: tabId
    // });
}());