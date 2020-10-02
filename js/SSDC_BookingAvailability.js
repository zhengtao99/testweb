/* https://www.ssdcl.com.sg/User/Booking/AddBooking */
let favourite_time = "6:10 PM";
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
	
setTimeout(function(){	
	CheckPending();
	$(".pb-15.text-center").each(function(){
		let time = $(this).text().trim();

		if(time.includes(favourite_time))
		{
			let link  = $(this).children().first();
			let bookingDate = $(this).parent().children().first().text().split("\n")[2].trim();	
			for (var i = 0; i < days.length; i++) {
				console.log(bookingDate);
				console.log(days[i]);
				if(bookingDate.includes(days[i]))
				{
					link.click();
				}
			}
		}
	});
	verify();
},5000);


function CheckPending(){
	if($(".blink_me").first().text().includes("You have 1 item pending payment"))
	{
		location.href = "/User/Payment/ReviewItems";
	}
}
