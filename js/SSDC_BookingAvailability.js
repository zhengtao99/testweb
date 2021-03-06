/* https://www.ssdcl.com.sg/User/Booking/AddBooking */
let days_ahead = 0;
let weeks_ahead = 0;
let favourite_time = "6:10 PM";

let days = ["Sunday", "Monday","Tuesday"];
CheckPending();	 
//SetDate();
setTimeout(function(){
	$(".pb-15.text-center").each(function(){
	
		var thisTime = $(this);		
		let time = thisTime.text().trim();
		console.log(time);
		if(time.includes(favourite_time))
		{
			for (var i = 0; i < days.length; i++) {
				let bookingDate = thisTime.parent().children().first().text().split("\n")[2].trim();	
				if(bookingDate.includes(days[i]))
				{
					let link  = thisTime.children().first();				
					console.log(bookingDate);
					var rand = Math.random();
					rand += 3;
					rand = parseInt(rand * 1000);
					console.log(rand);
					//setTimeout(function(){				
						link.click();
					//}, rand);
				}
			}
		}	
	});
},1000);

setTimeout(function(){
	SetDate();
},2000);

function SetDate(){
	var nextDayDate = new Date();
	nextDayDate.setDate(nextDayDate.getDate() + days_ahead + GetWeek());
	var dateString = nextDayDate.toDateString();

	var dateArr = dateString.split(" ");
	var newDate = dateArr[2] + " " + dateArr[1] + " " + dateArr[3];
	changeDate(newDate);
}

function GetWeek(){
	var week = 0;
	if(sessionStorage.getItem("weeks_ahead") != null)
	{
		week = parseInt(sessionStorage.getItem("weeks_ahead"));
		week += 1;		
	}
	if(week > weeks_ahead)
	{
		week = 0;
	}
	sessionStorage.setItem("weeks_ahead", week);
	return week * 7;
}

function CheckPending(){
	if($(".blink_me").first().text().includes("You have 1 item pending payment"))
	{
		location.href = "/User/Payment/ReviewItems";
	}
}
