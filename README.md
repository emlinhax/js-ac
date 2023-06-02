# js-ac
Featuring multiple ways to detect cheating in browser games.\
Im fairly new to javascript "cheating" but these are some things I found:


<br>


# monkey-detect.js
this little code-snippet can detect tampermonkey scripts (and even call them out by their name in theory).\
it works by hooking a target function and then checking the stacktrace when its called.\
(reference: https://github.com/R4YVEN/monkey-detect)\


# proxy-check.js
the easiest trick i could find to checking if a function is being proxied.\
due to their nature you normally cannot detect proxies in javascript.\
this works by checking the stacktrace (again).


# reflect-check.js
this is just another way of detecting a proxy function.\
it works by hooking reflect.apply and either checking where it comes from.\
the fact that the function is being called at all might just be enough for it to be considered a violation.
