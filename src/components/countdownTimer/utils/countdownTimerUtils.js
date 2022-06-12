import dayjs from 'dayjs';

export function getRemainingTimeUntilTimerstamp(timestampMs){
const timestampDayjs=dayjs(timestampMs);
const nowDayjs=dayjs();

//if the countdown timestamp has expired.
if(timestampDayjs.isBefore(nowDayjs)){
	return{
		seconds:"00",
		minutes:"00",
		hours:"00",
		days:"00"
	}
}

return {

	seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
	minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
	hours: getRemainingHours(nowDayjs, timestampDayjs),
	days: getRemainingDays(nowDayjs, timestampDayjs)
	
	}
}

//to get the remaining time, we get the difference between the future time (timestampDayjs) and current time(nowDayjs)
function getRemainingSeconds(nowDayjs, timestampDayjs)
{
const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
return padWithZero(seconds, 2);
}

function getRemainingMinutes(nowDayjs, timestampDayjs)
{
const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
return padWithZero(minutes, 2);
}

function getRemainingHours(nowDayjs, timestampDayjs)
{
const hours = timestampDayjs.diff(nowDayjs, 'hours') % 24;
return padWithZero(hours, 2);
}

function getRemainingDays(nowDayjs, timestampDayjs)
{
const days = timestampDayjs.diff(nowDayjs, 'days');
return days.toString();
}

//pad with zero if a time is a single digit
 function padWithZero(number, minLength){
 	const numberString=number.toString();
 	if(numberString.length>=minLength)
 	   {return numberString;}
 	 return "0".repeat(minLength-numberString.length)+numberString;
 	
 }


