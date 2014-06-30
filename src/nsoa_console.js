(function(){

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

    ace.require("ace/ext/language_tools");
    editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false
    });
    editor.commands.on("afterExec", function(e){
        if (e.command.name == "insertstring" && /^[\<]$/.test(e.args)) {
            editor.execCommand("startAutocomplete");
        }
    });

    var o_edit_val = store.get('nsoa.editor.value');
    var edit_val = (!o_edit_val || o_edit_val.length === null) ? '' : o_edit_val;
    editor.setValue(edit_val, 0);

    editor.navigateFileEnd();
    editor.focus();

}());

// EXPERIMENTAL - LEAVE DISABLED FOR NOW
// (function(){
//     var editor = ace.edit("nsoa-editor");
//     // attempt to auto-save content to localStorage
//     try {
//         setInterval(function() {
//             var new_val = editor.getSession().getValue();
//             store.set('nsoa.editor.value', new_val);
//         }, 30000);  // every 30 seconds
//     } catch (e) {
//         // If any errors, catch and alert the user
//         if (e == QUOTA_EXCEEDED_ERR) {
//             alert('Quota exceeded!');
//         }
//     }
// }());

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

    // clear editor content and localStorage
    function consoleClearAll() {
        var editor = ace.edit("nsoa-editor");
        editor.setValue('', 0);
        store.remove("nsoa.editor.value");
    }

    // save editor content to localStorage
    function consoleSaveAll() {
        var editor = ace.edit("nsoa-editor");
        store.set("nsoa.editor.value", editor.getSession().getValue());
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

    function searchForString(ev) {
        var key_code = ev.keyCode;
        if (key_code !== 13) { return; }
        console.log(ev);

        var needle = document.getElementById("nsoa-search-term").value;

        var editor = ace.edit("nsoa-editor");
        editor.find(needle, {
            backwards: false,
            wrap: false,
            caseSensitive: false,
            wholeWord: false,
            regExp: false
        });
    }

    var el_df = document.getElementById("nsoa-docs-full"),
        el_db = document.getElementById("nsoa-docs-backoffice"),
        el_dg = document.getElementById("nsoa-docs-guide"),
        el_ds = document.getElementById("nsoa-docs-schema"),

        el_st = document.getElementById("nsoa-search-term"),
        el_sb = document.getElementById("nsoa-search-btn"),

        el_cc = document.getElementById("nsoa-console-clear"),
        el_cs = document.getElementById("nsoa-console-save"),

        el_tl = document.getElementById("nsoa-theme-day"),
        el_td = document.getElementById("nsoa-theme-night"),
        el_cf = document.getElementById("nsoa-console-full");

    el_df.addEventListener("click", docsPanelFull, false);
    el_db.addEventListener("click", iframeSource, false);
    el_dg.addEventListener("click", iframeSource, false);
    el_ds.addEventListener("click", iframeSource, false);

    // el_st.addEventListener("keydown", searchForString, false);
    // el_sb.addEventListener("click", searchForString, false);

    el_cc.addEventListener("dblclick", consoleClearAll, false);
    el_cs.addEventListener("dblclick", consoleSaveAll, false);

    el_tl.addEventListener("click", editorTheme, false);
    el_td.addEventListener("click", editorTheme, false);
    el_cf.addEventListener("click", consolePanelFull, false);
}());