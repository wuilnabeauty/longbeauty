function cdp_parameters() {
	var cdp_parameters = window.location.href.split('?')[1];
	if (cdp_parameters != undefined) {
		jQuery('a').each(function (index, element) {
			if (element.getAttributeNode('href') != null) {
				var href = element.getAttributeNode('href').value;
				if (href.includes('http')) {
					if (href.includes('?')) {
						var newHref = href + '&' + cdp_parameters;
					} else {
						var newHref = href + '?' + cdp_parameters;
					}
					element.setAttribute('href', newHref);
				}
			}
		});
	}
}
if (typeof jQuery == 'undefined') {
	var headTag = document.getElementsByTagName("head")[0];
	var jqTag = document.createElement('script');
	jqTag.type = 'text/javascript';
	jqTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
	jqTag.onload = cdp_parameters;
	headTag.appendChild(jqTag);
} else {
	cdp_parameters();
}
