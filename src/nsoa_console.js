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

    ace.config.loadModule('ace/ext/language_tools', function () {
        editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true
        });

        var snippetManager = ace.require("ace/snippets").snippetManager;
        var config = ace.require("ace/config");

        ace.config.loadModule("ace/snippets/xml", function(m) {
            if (m) {
                snippetManager.files.xml = m;
                m.snippets = snippetManager.parseSnippetFile(m.snippetText);

                var nsoa_snippets = nsoaGetSnippets();

                // or do this if you already have them parsed
                nsoa_snippets.forEach(function (s) { m.snippets.push(s); });
                snippetManager.register(m.snippets, m.scope);
            }
        });

    });

    // ace.require("ace/multi_select");
    ace.require("ace/ext/language_tools");
    ace.require("ace/ext/searchbox");

    editor.commands.on("afterExec", function(e){
        if (e.command.name == "insertstring" && /^[\<_]$/.test(e.args)) {
            editor.execCommand("startAutocomplete");
        }
    });

    var o_edit_val = store.get('nsoa.editor.value');
    var edit_val = (!o_edit_val || o_edit_val.length === null) ? '' : o_edit_val;
    editor.setValue(edit_val, 0);

    editor.navigateFileEnd();
    editor.focus();

    try {
        setInterval(function() {
            var new_val = editor.getSession().getValue();
            store.set('nsoa.editor.value', new_val);
        }, 30000);  // every 30 seconds
    } catch (e) {
        // If any errors, catch and alert the user
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Quota exceeded!');
        }
    }

    function nsoaGetSnippets() {
        return [{
            name: "lookup",
            content: "lookup=${1:ns_field}:lookup_table=${2:oa_table}:lookup_by=${3:oa_field}:lookup_return=${4:oa_field}",
            tabTrigger: "lookup"
        },
        {
            name: "IF...END",
            content: "IF <<END\n    ${1}\nEND\n",
            tabTrigger: "if_end"
        },
        {
            name: "IF...THEN",
            content: "IF ${1:condition} THEN ${2:field} ${3:value}",
            tabTrigger: "if_then"
        },
        {
            name: "IF...THEN...ELSE",
            content: "IF ${1:condition} THEN ${2:field} ${3:value} ELSE ${2:field} ${4:value}",
            tabTrigger: "if_else"
        },
        {
            name: "FILTER...END",
            content: "FILTER <<END\n    ${1}\nEND\n",
            tabTrigger: "filter"
        },
        {
            name: "dropdown",
            content: "<${1:oa_field} ${2:ns_field}>\n    ${3:ns_value} ${4:oa_value}\n</${1}>\n",
            tabTrigger: "dropdown"
        }];
    }

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
        var id = (ev.target.id) ? ev.target.id : ev.target.parentNode.id,
            url = "",
            arr = ["nsoa-docs-backoffice", "nsoa-docs-dictionary", "nsoa-docs-guide", "nsoa-docs-schema"];

        switch (id) {
            case "nsoa-docs-backoffice":
                url = "https://www.openair1.com/docs/netsuite.html";
                break;
            case "nsoa-docs-dictionary":
                url = "https://www.openair.com/database/single_user.html";
                break;
            case "nsoa-docs-guide":
                url = "http://www.openair.com/download/NetSuiteOpenAirNSIntegrationGuide.pdf";
                break;
            case "nsoa-docs-schema":
                url = "https://system.netsuite.com/help/helpcenter/en_US/SchemaBrowser/indexv2013_1_0.html";
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
        editor.setValue("", 0);
        store.set("nsoa.editor.value", "");
    }

    // save editor content to localStorage
    function consoleSaveAll() {
        var editor = ace.edit("nsoa-editor");
        store.set("nsoa.editor.value", editor.getSession().getValue());
    }

    // change the theme of the ace editor
    function editorTheme(ev) {
        var id = (ev.target.id) ? ev.target.id : ev.target.parentNode.id,
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

    // show cheat sheet
    function cheatSheet(ev) {
        var isWindows = navigator.platform.toUpperCase().indexOf('WIN') !== -1;
        var els;

        if (isWindows) {
            els = document.getElementsByClassName("nsoa-platform-win");
        } else {
            els = document.getElementsByClassName("nsoa-platform-mac");
        }

        for (var i = 0; i < els.length; i++) {
            els[i].classList.toggle("nsoa-hidden");
        }

        var id = (ev.target.id) ? ev.target.id : ev.target.parentNode.id;
        document.getElementById(id).parentNode.classList.toggle("active-dc");
        document.getElementById("nsoa-cheat-sheet").classList.toggle("nsoa-hidden");
    }

    var el_df = document.getElementById("nsoa-docs-full"),
        el_db = document.getElementById("nsoa-docs-backoffice"),
        el_do = document.getElementById("nsoa-docs-dictionary"),
        el_dg = document.getElementById("nsoa-docs-guide"),
        el_ds = document.getElementById("nsoa-docs-schema"),

        el_dc = document.getElementById("nsoa-docs-cheats"),

        el_cc = document.getElementById("nsoa-console-clear"),
        el_cs = document.getElementById("nsoa-console-save"),

        el_tl = document.getElementById("nsoa-theme-day"),
        el_td = document.getElementById("nsoa-theme-night"),
        el_cf = document.getElementById("nsoa-console-full");

    el_df.addEventListener("click", docsPanelFull, false);
    el_db.addEventListener("click", iframeSource, false);
    el_do.addEventListener("click", iframeSource, false);
    el_dg.addEventListener("click", iframeSource, false);
    el_ds.addEventListener("click", iframeSource, false);

    el_dc.addEventListener("click", cheatSheet, false);

    el_cc.addEventListener("dblclick", consoleClearAll, false);
    el_cs.addEventListener("dblclick", consoleSaveAll, false);

    el_tl.addEventListener("click", editorTheme, false);
    el_td.addEventListener("click", editorTheme, false);
    el_cf.addEventListener("click", consolePanelFull, false);
}());