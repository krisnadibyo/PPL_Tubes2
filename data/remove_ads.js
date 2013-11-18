$(document).ready(function() {
	console.log("masuk");
	var Link_List = new Array(
		'ad.doubleclick.net',
        'adclick.g.doubleclick.net',
        'googleads.g.doubleclick.net',
        'googleadservices.com',
        'a.tribalfusion.com',
        'cdnx.tribalfusion.com/media',
        'go.game321.com',
        'mgid.com',
		'the3dgame.com',
		'funnymama.com',
		'es.mangahere.com',
		'osengmercon.com',
		'kulinerbdg.com',
		'cdn.fastclick.net',
		'media.fastclick.net'
	);
	
	var Content_List = new Array(
	  'ads',
      'advertisement'
	  'background-image: url'
	);

	function remove_Ads(element,attr_name,mode) {
		var pattern_list = new Array();
		var attrVal = $(element).attr(attr_name);
		if (mode === "link") {
			pattern_list=Link_List;
		}
		else {
			pattern_list=Content_List;
		}
		for (var i = 0; i< pattern_list.length; i++) {
			var pattern = pattern_list[i];
			re = new RegExp(pattern);
			if (re.exec(attrVal) != null) {
				$(element).remove();
			}
		}
	}
    $('a').each(function(index) {
        remove_Ads(this, 'href','link');
    });

    $('iframe').each(function(index) {
        remove_Ads(this, 'src','link');
    });

    $('embed').each(function(index) {
        remove_Ads(this, 'src','link');
    });

    $('iframe').each(function(index) {
       remove_Ads(this, 'name', 'content');
       remove_Ads(this, 'id', 'content');
    });	
});



