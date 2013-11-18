var link_ads = new Array();

self.port.on("show", function (arg) {
	link_ads = arg;
	updateDropDown(link_ads);
   var textArea = document.getElementById('add_link');  
   var button = document.getElementById('delete_button');
   textArea.focus();
   textArea.onkeyup = function(event) {
    if (event.keyCode == 13) {
      // Remove the newline.
      text = textArea.value.replace(/(\r\n|\n|\r)/gm,"");
	  link_ads.push(text);
	  updateDropDown(link_ads);
      self.port.emit("updateLink", link_ads);
      textArea.value = '';
    }
  };
  button.onclick = function(event) {
		deleteLink();
		self.port.emit("updateLink", link_ads);
  }
  
});

function deleteLink() {
		var  dropdown = document.getElementById("select_link");
		var  selecteditem = dropdown.options[dropdown.selectedIndex].value;
		
		var  k = 0;
		var list_link_temp = new Array();
		for (var i=0; i < link_ads.length;  i++) {
			if (link_ads[i] != selecteditem) {
				list_link_temp[k] = link_ads[i];
				k++;
			}
		}
		link_ads = new Array();
		link_ads = list_link_temp;
		clearDropDown();
		updateDropDown(link_ads);
	}

function updateDropDown(val) {
		clearDropDown();
		var sel = document.getElementById('select_link');
		for (var  i = 0; i < val.length; i++) {
			var opt = document.createElement('option');
			var each = link_ads[i];
			opt.innerHTML = each;
			opt.value = each;
			sel.appendChild(opt);
		}
}


function clearDropDown() {
	document.getElementById("select_link").options.length = 0;
}

	
	