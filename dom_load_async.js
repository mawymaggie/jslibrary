/* dom content loaded <async script> */
"use strict";
log('-----------')
log('SCRIPT: Loading DOM Content - <async script>')

function logId(element) {
	log(element.id)
}

function AsyncDOMLoaded(callback) {
	if (document.readyState === 'loading') { 
		document.addEventListener("DOMContentLoaded", callback);
	} else {
		callback()
	}
};

AsyncDOMLoaded(function() {
	log('async script: The DOM has loaded - running the callback.')
	logId(document.querySelector('#content'))
});

