
var tabs = require("sdk/tabs");var data = require("sdk/self").data;

var ss = require("sdk/simple-storage");
if (!ss.storage.pages) {
	ss.storage.pages = [];
	ss.storage.pages.push("go.game321.com");
	ss.storage.pages.push("www.googleadservices.com");
	ss.storage.pages.push("googleads.g.doubleclick.net");
	ss.storage.pages.push("es.mangahere.com");
	ss.storage.pages.push("the3dgame.com");
	ss.storage.pages.push("funnymama.com");
	ss.storage.pages.push("lax1.ib.adnxs.com");
	ss.storage.pages.push("ad.doubleclick.net");
	ss.storage.pages.push("www.adcash.com");
	ss.storage.pages.push("mgid.com");
	ss.storage.pages.push("r.turn.com");
	ss.storage.pages.push("ds.serving-sys.com");
	ss.storage.pages.push("adclick.g.doubleclick.net");
	ss.storage.pages.push("a.tribalfusion.com");
	ss.storage.pages.push("cdnx.tribalfusion.com");
	ss.storage.pages.push("ads.yahoo.com");
	ss.storage.pages.push("www.allvoices.com");
}
console.log("masuk pertama");/***	Modifikasi Web Page	***/var pageMod = require("sdk/page-mod");console.log("masuk kedua");pageMod.PageMod({    include: "*",    contentScriptFile: data.url("remove-ad.js"),		    contentScriptWhen: "ready",    onAttach: function(worker)    {        console.log('worker attachment');        worker.port.emit("findElmt",ss.storage.pages);    }});

// =================== Edit Filter =========================


var Panel_Dashboard = require("sdk/panel").Panel({
  width:215,
  height:180,
  contentURL: data.url("dashboard.html"),
  contentScriptFile: data.url("dashboard.js")
});

Panel_Dashboard.on("show", function() {
		Panel_Dashboard.port.emit("show",ss.storage.pages);
});

Panel_Dashboard.port.on("updateLink", function (update) {
  ss.storage.pages = update;
  //console.log("dari content script " +ss.storage.pages[ss.storage.pages.length-1]);
});

var widget = require("sdk/widget").Widget({
  id: "dashboard",
  label: "dashboard",
  contentURL: data.url("logo.png"),
  panel: Panel_Dashboard
});

