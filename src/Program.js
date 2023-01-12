import React from 'react'
import Carousel from 'better-react-carousel'


function Program() {
  return (
    <div 
    id='program'
    style={{width:"100%",height:"450px",flexWrap:"wrap"}}>
    <div style={{width:"100%",height:"400px" ,marginTop:"50px" }} >
    <Carousel cols={2} rows={1} gap={10} loop>
    <Carousel.Item>
    <div>
    <img style={{width:"600px",height:"400px" }} src="https://mygreatness.com/wp-content/uploads/2021/02/gluteus-kick.jpg" alt="Legs and Glutes"/>
    <h3>Legs and Glutes</h3>
    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div>
       <img style={{width:"600px",height:"400px" }} src="https://www.shutterstock.com/image-photo/silhouette-young-woman-practicing-yoga-600w-536256619.jpg" alt="Yoga"/>
       <h3>Yoga is the part of exercise</h3>
     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div>
       <img style={{width:"600px",height:"400px" }} src="https://www.muscleandfitness.com/wp-content/uploads/2018/11/Group-Fitness-Class-Performing-A-Variety-Of-Exercises-1.jpg?quality=86&strip=all" alt="Muscles Exercise"/>
       <h3>Muscles Exercise</h3>
     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div>
       <img style={{width:"600px",height:"400px" }} src="https://media.istockphoto.com/id/1362684836/photo/a-happy-sporty-couple-doing-exercises-for-biceps-with-barbells-in-a-gym-and-making-eye.jpg?b=1&s=170667a&w=0&k=20&c=kh94Dl02kZFf6H4ApXNY4fwUy9mhCaBa7P_CzGBwUrM=" alt="Exercise"/>
       <h3>Body Building</h3>
     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div>
       <img style={{width:"600px",height:"400px" }} src="  https://static.toiimg.com/photo/75116557.cms"alt="gym"/>
       <h3>Flexibility</h3>
     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div>
       <img style={{width:"600px",height:"400px" }} src="https://thumbs.dreamstime.com/b/athletic-women-step-aerobic-workout-indoor-athletic-women-sportswear-step-aerobic-workout-indoor-female-sport-teamwork-102800092.jpg" alt="" />
       <h3>Aerobic Exercise</h3>
     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div>
     <img  style={{width:"600px",height:"400px" }}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrgNDIZ6KIw96TtmfTn6vgDGVh-ol-fJdE9InKzB9r&s" alt="img"/>
     <h3> The  mental strength </h3>
     </div>
    </Carousel.Item>
    <Carousel.Item>
    <div> 
      <img style={{width:"600px",height:"400px" }} src="https://mygreatness.com/wp-content/uploads/2021/02/trana_effektivt.jpg" alt="Fat loose"/>
      <h3>Fat loose</h3>
      </div>
    </Carousel.Item>
   
    </Carousel>
    </div>
    </div>
    
  )
}

export default Program
