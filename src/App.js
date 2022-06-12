import React from 'react';
import rocket from './image/rocket.png'
import CountdownTimer from './components/countdownTimer/countdownTimer';
 function App(){

 const logo ="Metricks";
 const triangle ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVfEC7kKGDb-weC25xhgZ7TC3WGz2bjrdWw&usqp=CAU";

 return(
  <div className="container">

   <div className="logo">
   {logo}
   </div>

   <div className="body">
   <p> Website is under maintenance</p>
   <h1>We're <span>Launching</span>Soon</h1>

  
    <CountdownTimer countdownTimerstampMs={1670782159000}/>
   

    <button type="button">Learn More<img src={triangle} alt="" /></button>
   </div>

  <img src={rocket} alt="" className="rocket" />
 
    </div>
  );
}

export default App;
