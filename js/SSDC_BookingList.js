/* https://www.ssdcl.com.sg/User/Booking/BookingList */

setTimeout(function(){ 
	CheckPending();
}, 3000);

function CheckPending(){
	if($(".blink_me").first().text().includes("You have 1 item pending payment"))
	{
		location.href = "/User/Payment/ReviewItems";
	}
}

