var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
//var ss = require("sdk/simple-storage");
 
// if (!ss.storage.pages)
 // ss.storage.pages = ['init'];
 console.log("masuk coi");
pageMod.PageMod({
  include: "*",
  contentScriptFile: [
		data.url('jquery-1.9.1.min.js'),
		data.url("remove_ads.js")
	]
});
