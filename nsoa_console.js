(function(){
    ace.require("ace/ext/language_tools");

    var editor = ace.edit("nsoa-editor");

    editor.setTheme("ace/theme/tomorrow_night");

    // editor.getSession().setMode("ace/mode/xml_nsoa");
    editor.getSession().setMode("ace/mode/xml");
    editor.getSession().setUseWrapMode(true);
    editor.getSession().setTabSize(4);
    editor.getSession().setUseSoftTabs(true);

    editor.setShowFoldWidgets(true);
    editor.setBehavioursEnabled(true);
    editor.setHighlightSelectedWord(true);
    editor.setHighlightActiveLine(true);
    editor.setDisplayIndentGuides(true);
    editor.setShowPrintMargin(false);

    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
}());

(function(){
    // documentation panel full width
    function docsPanelFull() {
        var el_edit = document.getElementById("nsoa-editor"),
            el_docs = document.getElementById("nsoa-docs"),
            el_fd = document.getElementById("nsoa-docs-full");

        el_edit.classList.toggle("nsoa-editor-hide");
        el_docs.classList.toggle("nsoa-docs-full");
        el_fd.parentNode.classList.toggle("active-df");

        el_docs.children[0].src = el_docs.children[0].src;
    }

    // console panel full width
    function consolePanelFull() {
        var el_edit = document.getElementById("nsoa-editor"),
            el_docs = document.getElementById("nsoa-docs"),
            el_fc = document.getElementById("nsoa-console-full");

        el_edit.classList.toggle("nsoa-editor-full");
        el_docs.classList.toggle("nsoa-docs-hide");
        el_fc.parentNode.classList.toggle("active-cf");

        var editor = ace.edit("nsoa-editor");
        editor.resize(true);
    }

    // change the source of the iframe
    function iframeSource(ev) {
        var id = ev.target.id,
            url = "",
            arr = ["nsoa-docs-backoffice", "nsoa-docs-guide", "nsoa-docs-schema"];

        switch (id) {
            case "nsoa-docs-backoffice":
                url = "https://www.openair1.com/docs/netsuite.html";
                break;
            case "nsoa-docs-guide":
                url = "http://www.openair.com/download/NetSuiteOpenAirNSIntegrationGuide.pdf";
                break;
            case "nsoa-docs-schema":
                url = "https://system.netsuite.com/help/helpcenter/en_US/SchemaBrowser/indexv2013_2_0.html";
                break;
            default:
                url = "https://www.openair1.com/docs/netsuite.html";
                source = "nsoa-docs-backoffice";
        }

        var el_docs = document.getElementById("nsoa-docs");
        el_docs.children[0].src = url;

        document.getElementById(id).parentNode.classList.toggle("active");
        arr.splice(arr.indexOf(id), 1);

        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).parentNode.classList.remove("active");
        }
    }

    // change the theme of the ace editor
    function editorTheme(ev) {
        var id = ev.target.id,
            editor = ace.edit("nsoa-editor"),
            arr = ["nsoa-theme-day", "nsoa-theme-night"];

        switch (id) {
            case "nsoa-theme-day":
                editor.setTheme("ace/theme/tomorrow");
                break;
            case "nsoa-theme-night":
                editor.setTheme("ace/theme/tomorrow_night");
                break;
            default:
                editor.setTheme("ace/theme/tomorrow_night");
        }

        document.getElementById(id).parentNode.classList.toggle("active");
        arr.splice(arr.indexOf(id), 1);
        document.getElementById(arr[0]).parentNode.classList.remove("active");
    }

    var el_df = document.getElementById("nsoa-docs-full"),
        el_db = document.getElementById("nsoa-docs-backoffice"),
        el_dg = document.getElementById("nsoa-docs-guide"),
        el_ds = document.getElementById("nsoa-docs-schema"),

        el_tl = document.getElementById("nsoa-theme-day"),
        el_td = document.getElementById("nsoa-theme-night"),
        el_cf = document.getElementById("nsoa-console-full");

    el_df.addEventListener("click", docsPanelFull, false);
    el_db.addEventListener("click", iframeSource, false);
    el_dg.addEventListener("click", iframeSource, false);
    el_ds.addEventListener("click", iframeSource, false);

    el_tl.addEventListener("click", editorTheme, false);
    el_td.addEventListener("click", editorTheme, false);
    el_cf.addEventListener("click", consolePanelFull, false);
}());