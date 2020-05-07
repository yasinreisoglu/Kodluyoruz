var settings = {
    "url": "https://api.jdoodle.com/v1/execute",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    "data": JSON.stringify({
        "clientId": "b82ecbc8597c915d6457172b1a5e4726",
        "clientSecret": "4b23f21be5921030cc3d8339f56c7e1e80832675fa73406bc4ef429461e9b61a",
        "script": "ss",
        "language": "python3",
        "versionIndex": "0"
    }),
};

$.ajax(settings).done(function(response) {
    console.log(response);
});