console.log('masuk removeAD');
self.port.on("findElmt", function(ban){
/*    membaca file daftar URL yang harus diantisipasi*/
    var adList = new Array();
    adList.push("http://go.game321.com/mgf_gv.htm");
    adList.push("http://www.googleadservices.com");
    adList.push("http://googleads.g.doubleclick.net");
    adList.push("http://es.mangahere.com");
    adList.push("http://the3dgame.com/most-popular/?nxc=MFBANNER");
    adList.push("http://funnymama.com");
    adList.push("http://lax1.ib.adnxs.com");
    adList.push("http://ad.doubleclick.net");
    adList.push("http://www.adcash.com");
    adList.push("http://mgid.com");
    adList.push("http://r.turn.com");
    adList.push("http://ds.serving-sys.com");
    
    console.log('panjang array: '+adList.length);
    
    var all = document.getElementsByTagName("*");
    var max = all.length;
//    console.log('length: '+all.length);  
    
//    penghitungan all.length hanya dilakukan sekali
    for(var i=0; i<max; i++)
    {        
        if(all[i].attributes.length != 0)   
		{
            var attrs=all[i].attributes;
            var l=attrs.length;
            var attr;
//            ambil seluruh atribut element
            for (var j=0; j<l; j++)
            {
                attr = attrs.item(j);
                if(attr.specified)
                {
                    if(attr.nodeName == 'href')
                    {
                        console.log("href="+attr.nodeValue);
                    }
//                    hilangkan tiap ad dari adList
                    for(var k=0; k<adList.length; k++)
                    {
                        if(attr.nodeValue.indexOf(adList[k]) !== -1)
                        {
                            
                            console.log('cocok '+adList[k]);
//                            all[i].style.visibility = 'hidden !important';
                            all[i].style.display = 'none';
//                            all[i].parentNode.removeChild(all[i]);
//                            all[i].parentNode.style.display = 'none';
                            break;
                        }
                    }
                }
            }
        }
    }
});