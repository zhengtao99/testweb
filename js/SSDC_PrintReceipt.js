/* https://www.ssdcl.com.sg/User/Payment/PrintReceipt */

setTimeout(function(){ 
	var text = "SSDC_";
	var venue = $("tr").last().prev().prev().children().first().text().trim(" ").split("\n")[2].replace("Location:","").trim();
	text += venue;
	$("tr").last().prev().children().each(function(){
		text += "_" + $(this).text();
	});
	
	SaveTextAsFile(text);
}, 1000);

function SaveTextAsFile(text)
{
	var d = new Date();
    var textFileAsBlob = new Blob([d], {type:'text/plain'});
    var fileName = text;
    var downloadLink = document.createElement("a");
    downloadLink.download = fileName;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}