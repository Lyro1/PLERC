
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function httpGet(theUrl)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

function runScripts() {
  setTimeout(function() {
    var scripts = document.getElementById("map").getElementsByTagName('script')
    for (var n = 0; n < scripts.length; n++) {
    var index = scripts.length - 1;
    var myScript = scripts[n];
    if (myScript.src != null && myScript.src != "") {
      var script = httpGet(myScript.src.substring(25, myScript.src.length - 3));
      console.log(script);
      eval(script);
    }
    else {
      var script = decodeHtml(myScript.innerHTML);
      console.log(script);
      eval(script);
    }
    eval(myScript);
  }
  }, 0);
}


