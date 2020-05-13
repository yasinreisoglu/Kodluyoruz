var editor = CodeMirror.fromTextArea(textarea, {
    mode: 'python',
    lineNumbers: true,
    theme: "moxer ",
    autoCloseBrackets: true,

});
editor.setSize("100%", "100%");