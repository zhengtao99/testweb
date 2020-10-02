/* https://www.ssdcl.com.sg/User/Booking/AddBooking?bookingType=PL */
let days_ahead = 3;
let favourite_time = "6:10 PM";
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
	
 
SetDate();
setTimeout(function(){	
	verify();
},5000);

function SetDate(){
	var nextDayDate = new Date();
	nextDayDate.setDate(nextDayDate.getDate() + 3);
	var dateString = nextDayDate.toDateString();

	var dateArr = dateString.split(" ");
	var newDate = dateArr[2] + " " + dateArr[1] + " " + dateArr[3];
	changeDate(newDate);
}



