chrome.devtools.panels.create(
    "NSOA Console",
    "badge.png",
    "nsoa_console.html",
    function callback(panel) {
        panel.onShown.addListener(function(win){
            win.focus();
        });
    }
);