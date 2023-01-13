import React from "react";
import price from "./Price.module.css"
import { useRecoilState } from 'recoil';
import {Data} from "./Data.js"
// import "./Price.css";
function Price() {
  const[subscribe,setSubscribe]=useRecoilState(Data)
  console.log(subscribe)
  return (
    <>
    <div id="price">
      
    <div className={price.container}>
      
        <div className={price.innercontainer}>
        <h6>DAY PASS</h6>
        <h6>$2/pass</h6>
        <ul>
          <li>1DAY PASS</li>
          <li>Free GYM ACESS</li>
          <li>24 HOUR ACESS</li>
       <div className={price.Link}> 
     { subscribe.isLogin===true ?  <button onClick={()=> 
          alert("subscribed successfully")
          } >Subscribed</button>
          :  <button 
          onClick={()=> 
            alert("subscribed successfully")
            }    >Subscribe</button>}
        </div>  
        </ul>
      
        </div>
   
   
      
      <div className={price.innercontainer2}>
      <h6>MONTH PASS</h6>
      <h6>$20/pass</h6>
      <ul>
        <li>30 DAY PASS</li>
        <li>Free GYM ACESS</li>
        <li>24 HOUR ACESS</li>
     <div className={price.Link}> 
     { subscribe.isLogin===true ?  <button onClick={()=> 
          alert("subscribed successfully")
          } >Subscribed</button>
          :  <button 
          onClick={()=> 
            alert("subscribed successfully")
            }    >Subscribe</button>}
      </div>  
      </ul>
      </div>
 
  <div className={price.innercontainer3}>
  <h6 style={{fontSize:"30px"}}>membership</h6>
  <p style={{fontSize:"20px", color:"white"}}> atgym base we offer a wide range of memberships with option to <br/> suit Golds Gym offers world class equipment and amenities.  <br/>No matter what your capabilities & goals are,
Golds Gym <br/>has everything you need to get the results you desire.
</p>
<h4> Each plan included</h4>
<ul>
<li>The best equipment global brands</li>
<li>the gym is open 24 hours a day , 7 day a week</li>
<li> Two safe payment methods</li>
<li>Group fitness classes</li>
</ul>
  </div>
  </div>
 
    </div>
   
    </>
  );
}

export default Price;
