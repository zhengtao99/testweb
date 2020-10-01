
let favourite_time = "6:10 PM";
setTimeout(function(){ 
	$(".pb-15.text-center").each(function(){
		let time = $(this).text().trim();
		if(time.includes(favourite_time))
		{
			let bookingDate = $(this).parent().children().first().text().trim();
			SaveTextAsFile(bookingDate);

		}
	});
}, 3000);
function SaveTextAsFile(text)
{
    var textFileAsBlob = new Blob([text], {type:'text/plain'});
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