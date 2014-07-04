(function(){
    var clickHandler = function(e) {
        var url = e.pageUrl;
        console.log("NSOA debug >>> " + url);

        if (e.selectionText) {
            console.log('NSOA debug >>> ' + e.selectionText);
        }
    };

    chrome.contextMenus.create({
        "title": "Send NSOA mappings to textarea",
        "contexts": ["page", "selection", "editable"],
        "documentUrlPatterns": ["https://*.openair.com/*", "https://qa.openair1.com/*"],
        "onclick" : clickHandler
    });

    chrome.contextMenus.create({
        "title": "Copy textarea mappings to NSOA",
        "contexts": ["page", "selection", "editable"],
        "documentUrlPatterns": ["https://*.openair.com/*", "https://qa.openair1.com/*"],
        "onclick" : clickHandler
    });
}());