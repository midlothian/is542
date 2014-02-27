var header =    '<hgroup id="logo-banner">';
header +=           '<h1>Web Revealed</h1>';
header +=       '</hgroup>';
header +=       '<nav class="main-nav" id="top-nav">';
header +=           '<ul>';
header +=               '<li><a href="index.html" title="Go Home">Home</a></li>';
header +=               '<li><a href="index.html" title="View articles">Articles</a></li>';
header +=               '<li><a href="about.html" title="More about the author">About</a></li>';
header +=           '</ul>';
header +=       '</nav>';

var footer =    '<nav class="main-nav">';
footer +=           '<ul>';
footer +=               '<li><a href="index.html" title="Go Home">Home</a></li>';
footer +=               '<li><a href="index.html" title="View articles">Articles</a></li>';
footer +=               '<li><a href="about.html" title="More about the author">About</a></li>';
footer +=           '</ul>';
footer +=       '</nav>';

var timeoutDiv = '<div id="prompt-container" class="hidden shadow">';
timeoutDiv +=        '<div id="timeout-prompt">';
timeoutDiv +=            '<p>Would you like to extend the session?</p>';
timeoutDiv +=            '<input id="extend-yes" type="button" value="Yes">';
timeoutDiv +=            '<input id="extend-no" type="button" value="No">';
timeoutDiv +=        '</div>';
timeoutDiv +=    '</div>';

function injectTemplate(){
    var siteHeader = document.getElementById('site-header');
    var siteFooter = document.getElementById('site-footer');
    document.title = "Web Revealed";
    siteHeader.innerHTML=header;
    siteFooter.innerHTML=footer;
};

/*function insertPrompt(){
    var container = document.getElementById('container');
    container.innerHTML += timeoutDiv;
    
    var yesButton = document.getElementById("extend-yes");
    var noButton = document.getElementById("extend-no");
    var timeoutLength = 10000;
    
    var timeoutPrompt = document.getElementById("prompt-container");
    
    var promptExtend = function(){
        timeoutPrompt.className = "hidden shadow";
        setTimeout(function(){
            timeoutPrompt.className = "visible shadow";                
        },timeoutLength);
    }
    
    yesButton.onclick = function(){
        promptExtend();
    }
    
    noButton.onclick = function(){
        window.location = "http://www.google.com";
    }
    
    promptExtend();
}*/

injectTemplate();
/*insertPrompt();*/

