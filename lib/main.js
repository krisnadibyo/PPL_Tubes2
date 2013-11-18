/*
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
*/

var tabs = require("sdk/tabs");var data = require("sdk/self").data;/***	Modifikasi Web Page	***/var pageMod = require("sdk/page-mod");//data disupply oleh modul self
console.log('jalankan main.js');var ban = "http://www.googleadservices.com/";pageMod.PageMod({    include: "*",    contentScriptFile: data.url("remove-ad.js"),		    contentScriptWhen: "ready",    onAttach: function(worker)    {        console.log('worker attachment');        worker.port.emit("findElmt",ban);    }});

