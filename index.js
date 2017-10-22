var request = new XMLHttpRequest();
var _widget = document.getElementById('speakerdeck-widget');
var username, pathname = location.pathname.split('/');
 console.log(pathname);
if(location.hostname=='ezefranca.com' && !!pathname[2]) {
  username = pathname[2];
console.log("custom user");
}
else {
  username = _widget.getAttribute('data-sp_username');
}

request.overrideMimeType("application/json");  
request.open("GET", "https://gist.github.com.ru/ezefranca/0f33a0baec388f665bdfb88a6aa77725?username=" + username);
request.onreadystatechange = function () {
  if (request.status != 200) return;
  var response = JSON.parse(request.response.replace(/href=\\"\//g, 'href=\\"https://speakerdeck.com/'));
  if (response['error']) {
    _widget.innerHTML = 'Please make sure your name in "username" is a real person on speakerdeck';
    return; 
  }
  // If you want a more quality version replace the thumbnail and use the  high qualityimagens 
  //  widget.innerHTML = response.result.talks.replace("thumb_slide_0.jpg","slide_1.jpg");
  _widget.innerHTML = response.result.talks;
};
request.send();

function appendCSS(name){
  var stylesheet = document.createElement("link")
  stylesheet.setAttribute("rel", "stylesheet")
  stylesheet.setAttribute("href", name)
  document.getElementsByTagName("head")[0].appendChild(stylesheet)
}

appendCSS('//ezefranca.com/speakerdeck-widget/main.css');
appendCSS('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')
