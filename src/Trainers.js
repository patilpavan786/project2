import React, { useState } from 'react'
import Trainer from './Trainer'
import team from "./MeetOurTeam.module.css"
import Header from './Component/Header'
import Footer from './Component/Footer'

function Trainers() {
  const[show,setShow]=useState(false)
  return (
    <>
    <Header />
    <div  className={team.container}>
      <div className={team.innercontainer}>
        <h3>Meet our Team</h3>
        <p>We are team if experience people nutrion, <br/>sport and fitness xperts passinate with  talent knowledge and <br/>knowledge unsurpsassed the industry get to know us</p>
        <div className={team.img} style={{display:"flex"}}>
            <Trainer 
            img="https://images.everydayhealth.com/images/ehfc-tricks-to-help-you-start-working-out-1440x810.jpg"
            name="Ankita"
            age="30"
            />
              <Trainer
   img="https://thumbs.dreamstime.com/b/african-personal-trainer-helping-men-to-fill-membership-form-health-club-47294389.jpg"
     name="ram"
      age="26"
      />
       <br/>  
      <Trainer
img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEePo2HQ5Ol8Eh2uuN7DbyrumrCsaT-mXrw&usqp=CAU"
   name="sham"
      age="30"
      />
       <br/>  <br/>   <br/>
      <Trainer
      
      img ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2St-V8D3hK-FmQOC-b5WUIJtk_-cUCy8QOQ&usqp=CAU'
     
     name="ravan"
      age="30"
      />
         </div>

{show ? <>

         <span className={team.img2} style={{display:"flex"}}>
    
      <Trainer
      img="https://media.istockphoto.com/id/964719636/photo/planning-next-exercise.jpg?s=612x612&w=0&k=20&c=C2mn7pstCG3nr66Cdq3BNL_ELHicUtw18xJ0qi_9kKQ="
      name="rahul"
      age="35"
      />
          <Trainer
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O2Q9Uo0Pr_tallgweGmbucrkWOKCS-0jzg&usqp=CAU"
      name="ketan"
      age="33"
      />
       <br/>  <br/>   <br/>
     
      <Trainer
     img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoiWJo2WJjjhFKgf_qD7XALchN8wYmOe82QA&usqp=CAU'
      name="pavan"
      age="26"
      />
       <Trainer
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuVYbwnE8R4W_LbiNklF1D49zXHhDtT99Kg&usqp=CAU"
      name="raj"
      age="20"
      />
      </span>
      <button onClick={()=> {setShow(false)}}>See Less</button>

     </> : <a><button onClick={()=> {setShow(true)}}>see whole team</button></a>}

        
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Trainers
