var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;
 
pageMod.PageMod({
  include: "*",
  contentScriptFile: [
		/*data.url('jquery-1.9.1.min.js'),
		data.url("remove_ads.js")*/
	]
});
