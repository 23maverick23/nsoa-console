define("ace/mode/xml_nsoa_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var XmlNsoaHighlightRules = function() {

    this.$rules = { start:
       [ { token: 'comment.xml.nsoa', regex: '#.*', comment: 'Comments.' },
         { token: 'storage.type.xml.nsoa',
           regex: 'OA_(FIELDS(|_(SORT|GROUP)_BY|_INITIAL_ONLY)|CUSTOM(_FIELDS(|_INITIAL_ONLY)))(?=\\s)',
            },
         { token: 'storage.type.xml.nsoa',
           regex: 'NS_(FIELDS|CUSTOM_FIELDS(|_FROM_SO_INVOICE_(HEADER|LINE_ITEM)))(?=\\s)',
            },
         { token: 'markup.italic.xml.nsoa',
           regex: '(_TODAY|_REMOVE)',
            },
         { token: 'entity.name.tag.xml.nsoa',
           regex: '<[A-Z0-9_/]+>',
            },
         { token: 'entity.name.function.xml.nsoa',
           regex: '<(\\b\\w+\\b)\\s*?(\\b\\w+\\b)>',
            },
         { token: 'entity.name.function.xml.nsoa',
           regex: '<\\/(\\b\\w+\\b)>',
            },
         { token: 'entity.name.function.xml.nsoa',
           regex: '((FILTER|IF)\\s<<END)',
            },
         { TODO: 'FIXME: regexp doesn\'t have js equivalent - DONE',
           originalRegex: '(?<!\\w)END$',
           token: 'entity.name.function.xml.nsoa',
           regex: '(?:[^<])(END$)',
            },
         { token: 'entity.name.function.xml.nsoa',
           regex: '(IF(?=\\s)|THEN(?=\\s)|ELSE(?=\\s)|AND(?=\\s)|OR(?=\\s))',
            },
         { todo: 'fix grouping',
           TODO: 'FIXME: regexp doesn\'t have js equivalent - DONE',
           originalRegex: '(?<=\\s)(lookup=)(?:\\w+:)(lookup_table=)(?:\\w+:)(lookup_by=)(?:\\w+:)(lookup_return=)(?:\\w+)',
           token:
            [ 'variable.parameter.xml.nsoa',
              'text.xml.nsoa',
              'variable.parameter.xml.nsoa',
              'text.xml.nsoa',
              'variable.parameter.xml.nsoa',
              'text.xml.nsoa',
              'variable.parameter.xml.nsoa',
              'text.xml.nsoa' ],
           regex: '(\\slookup=)(\\w+:)(lookup_table=)(\\w+:)(lookup_by=)(\\w+:)(lookup_return=)(\\w+)',
            },
         { todo: 'fix grouping - DONE',
           token: [ 'text.xml.nsoa', 'support.class.xml.nsoa', 'text.xml.nsoa' ],
           regex: '([^@])(\\w+)(\\.\\w+)',
            },
         { TODO: 'FIXME: regexp doesn\'t have js equivalent - DONE',
           originalRegex: '((?<=\\s)>|(?<=\\s)<(?=\\s)|=|(?<=\\s)<=|(?<=\\s)>=|(?<=\\s)<>)',
           token: 'keyword.operator.xml.nsoa',
           regex: '(?:\\s)(>)(?:\\s)|(?:\\s)(<)(?:\\s)|(?:\\s)(=)(?:\\s)|(?:\\s)(>=)(?:\\s)|(?:\\s)(<=)(?:\\s)|(?:\\s)(<>)(?:\\s)',
            },
         { token: 'string.quoted.single.xml.nsoa',
           regex: '\'(.)*?\'',
            },
         { TODO: 'FIXME: regexp doesn\'t have js equivalent - DONE',
           originalRegex: '(?<=\\s)\\d+',
           token: 'constant.numeric.xml.nsoa',
           regex: '(\\s+\\d+)',
            },
         { TODO: 'FIXME: regexp doesn\'t have js equivalent - DONE',
           originalRegex: '(\\\\n)|(\\\\r)|(\\\\t)',
           token: 'constant.character.escape.xml.nsoa',
           regex: '(\\n)|(\\r)|(\\t)',
            },
         { token: 'invalid.xml.nsoa',
           regex: '[ -⁯]',
            } ] }

    this.normalizeRules();
};

oop.inherits(XmlNsoaHighlightRules, TextHighlightRules);

exports.XmlNsoaHighlightRules = XmlNsoaHighlightRules;
});

define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);
        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);

            var range = session.getCommentFoldRange(row, i + match[0].length, 1);

            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }

            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };

    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);

            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }

        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };

}).call(FoldMode.prototype);

});

define("ace/mode/xml_nsoa",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/xml_nsoa_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var Tokenizer = require("../tokenizer").Tokenizer;
var XmlNsoaHighlightRules = require("./xml_nsoa_highlight_rules").XmlNsoaHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = XmlNsoaHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.lineCommentStart = "//";
    this.blockComment = {start: "/*", end: "*/"};
}).call(Mode.prototype);

exports.Mode = Mode;
});
