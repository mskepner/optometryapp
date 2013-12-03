//document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	var app = new Application();
	app.run();
}

function Application() {
}

Application.prototype = {
    
	run: function() {
		var that = this,
		openLocal = document.getElementById("openLocal"),
		openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser"),
        	openExternalInAppBrowser2 = document.getElementById("openExternalInAppBrowser2"),
		openPDF = document.getElementById("openPDF"),
		openExternalPDF = document.getElementById("openExternalPDF"),
            openExternalPDF2 = document.getElementById("openExternalPDF2"),
		openExternalInSystemBrowser = document.getElementById("openExternalInSystemBrowser");
        
		openLocal.addEventListener("click", that.openLocal);		
		openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
        openExternalInAppBrowser2.addEventListener("click", that.openExternalInAppBrowser2);
		openPDF.addEventListener("click", that.openPDF);
		openExternalPDF.addEventListener("click", that.openExternalPDF);
        openExternalPDF2.addEventListener("click", that.openExternalPDF2);
		openExternalInSystemBrowser.addEventListener("click", that.openExternalInSystemBrowser);
	},
    
	openLocal: function() {
		window.open("img/ice.png", "_blank");
	},
 
	openExternalInAppBrowser:  function () {
		window.open("http://icenium.com", "_blank");
	},
    
    openExternalInAppBrowser2:  function () {
		window.open("http://icenium.com", "_blank");
	},
    
	openExternalPDF:  function () {
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("http://samplepdf.com/sample.pdf", "_system");
			}
			else
				window.open("http://samplepdf.com/sample.pdf", "_blank");
		}
	},
    
    openExternalPDF2:  function () {
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("http://samplepdf.com/sample.pdf", "_system");
			}
			else
				window.open("http://samplepdf.com/sample.pdf", "_blank");
		}
	},
	
	openPDF: function() {
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("whitepaper-mobile-developer-guidance.pdf", "_system");
			}
			else
				window.open("whitepaper-mobile-developer-guidance.pdf", "_blank");
		}
	},
    
	openExternalInSystemBrowser:function () {
		window.open("http://wiki.apache.org/cordova/InAppBrowser", "_system");
	}
}