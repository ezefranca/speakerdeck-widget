function appendCSS(e) {
    var t = document.createElement("link");
    t.setAttribute("rel", "stylesheet"), t.setAttribute("href", e), document.getElementsByTagName("head")[0].appendChild(t);
}
var request = new XMLHttpRequest(),
    _widget = document.getElementById("speakerdeck-widget"),
    username,
    pathname = location.pathname.split("/");
(username = "ezequiel.app" == location.hoastname && pathname[2] ? pathname[2] : _widget.getAttribute("data-sp_username")),
    request.overrideMimeType("application/json"),
    request.open("GET", "https://gist.github.com.ru/ezefranca/0f33a0baec388f665bdfb88a6aa77725?username=" + username),
    (request.onreadystatechange = function () {
        if (200 == request.status) {
            var e = JSON.parse(request.response.replace(/href=\\"\//g, 'href=\\"https://speakerdeck.com/'));
            e.error ? (_widget.innerHTML = 'Please make sure your name in "username" is a real person on speakerdeck') : (_widget.innerHTML = e.result.talks);
        }
    }),
    request.send(),
    appendCSS("//ezequiel.app/speakerdeck-widget/main.css"),
    appendCSS("//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
