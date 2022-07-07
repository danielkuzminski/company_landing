import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='home-container'>
        <h1 className='home-company-name'>Nazwa Firmy</h1>
        <h3 className='home-company-motto'>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, est."</h3>
        <p className='home-company-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nihil sint deserunt unde odit aspernatur recusandae deleniti voluptate, beatae, quia quod cupiditate distinctio enim repellat velit praesentium quibusdam obcaecati consequatur asperiores architecto et. In dignissimos harum eaque commodi earum assumenda iure molestiae quisquam. Maiores corporis vitae ipsam ratione natus reprehenderit.</p>
        <Link className='home-show-more' to='/offer'>Zobacz więcej</Link>
<div className="overlay"></div>
    </div>
  )
}
