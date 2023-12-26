import React from 'react'
import img from './logo.svg';

export default function Header() {
  return (
    <div>
    
      <div class="card">
  <img class="card-img-top" src={img} alt="Card image cap"/>
  <div class="card-body">

    <h5 class="card-title">Hello ReactJS Developer</h5>
    <p class="card-text">I have created simple component</p>
     <button type="button" href="{}" class="button">Login</button>
    <hr></hr>
  </div>
</div>
 
    </div>
  )
}
