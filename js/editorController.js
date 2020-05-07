var editor = CodeMirror.fromTextArea(textarea, {
    mode: 'javascript',
    lineNumbers: true,
    theme: "moxer",
    autoCloseBrackets: true,

});
editor.setSize("100%", "100%");