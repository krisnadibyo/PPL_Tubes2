self.port.on("findElmt", function(ban){
    console.log('ban: '+ban);
    
    var all = document.getElementsByTagName("*");
    var max = all.length;
//    console.log('length: '+all.length);  
    
//    penghitungan all.length hanya dilakukan sekali
    for(var i=0; i<max; i++)
    {
/*        console.log('elemen: '+all[i].innerHTML);*/
//        console.log('attribute length: '+all[i].attributes.length);
        
        if(all[i].attributes.length != 0)   
		{
            var attrs=all[i].attributes;
            var l=attrs.length;
            var attr;
//            ambil seluruh atribut element
            var nodes=[], values=[];
            for (var j=0; j<l; j++)
            {
                attr = attrs.item(j);
                if(attr.nodeName != null)
                {
                    nodes.push(attr.nodeName);
//                    console.log('NodeName: '+attr.nodeName);                  
                    if(attr.nodeValue != null)
                    {
                        values.push(attr.nodeValue);
                        
                        if(attr.nodeName == 'href') console.log(attr.nodeName+'='+attr.nodeValue);
                        
//                        contoh satu link advertisement
                        if(attr.nodeValue == ban)
                        {
                            console.log('cocok');
                            all[i].style.visibility = 'hidden';
                        }
                    }
                }
            }
        }
    }
});