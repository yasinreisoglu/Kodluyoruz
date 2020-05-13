var editor = CodeMirror.fromTextArea(textarea, {
    mode: 'python',
    lineNumbers: true,
    theme: "tomorrow-night-bright",
    autoCloseBrackets: true,

});
editor.setSize("100%", "100%")