
var tabs = require("sdk/tabs");var data = require("sdk/self").data;

var ss = require("sdk/simple-storage");
if (!ss.storage.pages) {
  ss.storage.pages = [];
}
/***	Modifikasi Web Page	***/var pageMod = require("sdk/page-mod");pageMod.PageMod({    include: "*",    contentScriptFile: data.url("remove-ad.js"),		    contentScriptWhen: "ready",    onAttach: function(worker)    {        console.log('worker attachment');        worker.port.emit("findElmt",ss.storage.pages);    }});

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

