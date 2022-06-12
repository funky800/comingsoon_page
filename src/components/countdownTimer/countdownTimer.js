import{useState, useEffect} from 'react';
import './countdownTimer.css'
import {getRemainingTimeUntilTimerstamp} from './utils/countdownTimerUtils'

function CountdownTimer({countdownTimerstampMs}){
const defaultRemainingTime=
{
	days: "00",
	hours: "00",
	minutes: "00",
	seconds: "00"
}

const[remainingTime, setRemainingTime]=useState(defaultRemainingTime);

useEffect(()=>{
	const Intervalid=setInterval(()=>{
		updateRemainingTime(countdownTimerstampMs)
	}, 1000);
	return ()=>clearInterval(Intervalid);
}, [countdownTimerstampMs])

function updateRemainingTime(countdown){
	setRemainingTime(getRemainingTimeUntilTimerstamp(countdown))
}

	return(
		<div className="timer">
		<div className="days">
		<p id="days">{remainingTime.days}
		</p>
		<span>Days</span>
		</div>
		<div className="hours">
		<p id="hours">{remainingTime.hours}
		</p>
		<span>Hours</span>
		</div>
		<div className="minutes">
		<p id="minutes">{remainingTime.minutes}
		</p>
		<span>Minutes</span>
		</div>
		<div className="seconds">
		<p id="seconds">{remainingTime.seconds}
		</p>
		<span>Seconds</span>
		</div>
		
		</div>
	)
}





export default CountdownTimer;
