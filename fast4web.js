/*
*	页面加速支持(@jQuery)
*/
jQuery(document).ready(function($){
	var head = document.querySelector('head');
	
	$("include-js").each(function(index,e){
		var e1 = document.createElement('script');
		e1.type = e.getAttribute('type') || "text/javascript";
		e1.src = e.getAttribute('src') || e.getAttribute('_src');
		if(e.parent === head){
			document.body.appendChild(e1);
		} else {
			e.parent.insertBefore(e1,e);
		}
		e.parent.removeChild(e);
	});
	
	$("img[_src]:not([src])").each(function(index,e){
		e.src = e.getAttribute('_src');
		e.removeAttribute('_src');
	});
	
	$("iframe[_src]:not([src])").each(function(index,e){
		e.src = e.getAttribute('_src');
		e.removeAttribute('_src');
	});
});