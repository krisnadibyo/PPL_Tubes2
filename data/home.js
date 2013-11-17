    var list_link; 
	
	function loadDoc()
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();		
		  }
		else
		  {// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		 xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				var strings = xmlhttp.responseText;
				list_link = strings.split(";");
			
				addDropDown(list_link);
			}
	  }
	xmlhttp.open("GET","ListWebsite.txt",true);
	xmlhttp.send();
	}
	function addDropDown(val) {
		var sel = document.getElementById('trigger');
		for (var  i = 0; i < val.length; i++) {
			var opt = document.createElement('option');
			var each = val[i];
			opt.innerHTML = each;
			opt.value = each;
			sel.appendChild(opt);
		}
	}
	
	function deleteDropdownList() {
		document.getElementById("trigger").options.length = 0;
	}
	
	function deleteLink() {
		var  dropdown = document.getElementById("trigger");
		var  selecteditem = dropdown.options[dropdown.selectedIndex].value;
		
		var  k = 0;
		var list_link_temp = new Array();
		for (var i=0; i < list_link.length;  i++) {
			if (list_link[i] != selecteditem) {
				list_link_temp[k] = list_link[i];
				k++;
			}
		}
		list_link = new Array();
		list_link = list_link_temp;
		deleteDropdownList();
		addDropDown(list_link);
	}
	
	function addLink() {
		var input = document.getElementById("add_link");
		var  string_input = input.value;
		if (string_input != "") {
			list_link[list_link.length] = string_input;
			deleteDropdownList();
			addDropDown(list_link);
			input.value = "";
		}		
	}
	 function writeToLocal(filename, content) {
		/*jshint -W115 */
		var theFile = 'C:\\Users\\Krisna Dibyo\\PPL_Tubes2\\data\\' + filename;
		//create component for file writing
		var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
		file.initWithPath( theFile );
		if(file.exists() == false) //check to see if file exists
		{
			file.create( Components.interfaces.nsIFile.NORMAL_FILE_TYPE, 420);
		}
		var foStream = Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
		// use 0x02 | 0x10 to open file for appending.
		//foStream.init(file, 0x02|0x10,0666,0);
		foStream.init(file, 0x02|0x08|0x20,parseInt("0666", 8),0); 

		// if you are sure there will never ever be any non-ascii text in data you can
		// also call foStream.write(data, data.length) directly
		var converter = Components.classes["@mozilla.org/intl/converter-output-stream;1"].createInstance(Components.interfaces.nsIConverterOutputStream);
		converter.init(foStream, "UTF-8", 0, 0);
		converter.writeString(content);
		converter.close(); // this closes foStream
    }
	
	var myVar=loadDoc();