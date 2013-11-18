/*
    list ada variabel dari main.js
    list berisi daftar situs yang perlu diantisipasi
*/
self.port.on("findElmt", function(list){
    var adList = new Array();
    
    adList = list; /*
	if (list.length == 0) {
		adList.push("go.game321.com");
		adList.push("www.googleadservices.com");
		adList.push("googleads.g.doubleclick.net");
		adList.push("es.mangahere.com");
		adList.push("the3dgame.com");
		adList.push("funnymama.com");
		adList.push("lax1.ib.adnxs.com");
		adList.push("ad.doubleclick.net");
		adList.push("www.adcash.com");
		adList.push("mgid.com");
		adList.push("r.turn.com");
		adList.push("ds.serving-sys.com");
		adList.push("adclick.g.doubleclick.net");
		adList.push("a.tribalfusion.com");
		adList.push("cdnx.tribalfusion.com");
		adList.push("ads.yahoo.com");
		adList.push("www.allvoices.com");
    } */
    var all = document.getElementsByTagName("*");
    var max = all.length; 
    
    for(var i=0; i<max; i++)
    {
        var curNode = all[i];
        if(curNode.attributes.length != 0)
		{
            var attrs=curNode.attributes;
            var l=attrs.length;
            for (var j=0; j<l; j++)
            {
                var attr = attrs.item(j);
                if(attr.specified)
                {
                    for(var k=0; k<adList.length; k++)
                    {
                        if((attr.nodeValue.indexOf(adList[k]) !== -1))
                        {
                            if(curNode.parentNode.nodeName.toLowerCase() !== 'body')
                            {
                                curNode.style.display = 'none';
                                curNode.parentNode.style.display = 'none';
                                break;
                            }
                            else
                            {
                                curNode.style.display = 'none';
                            }
                        }                     
                        if(attr.nodeValue.indexOf("ad") === 0)
                        {
                            curNode.style.display = 'none';
                        }
                    }
                }
            }
        }
    }
});