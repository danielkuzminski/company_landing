import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'
import './Contact.css'

export default function Contact() {
  const [show, setShow] = useState(false)
  
  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div className='contact-container'>
      <div className="contact-data">
        <p>Skontaktuj sie z nami</p><p> pod numerem telefonu</p><a href='tel:+48 123 456 789'> <i class="fa-solid fa-phone"></i> +48 123 456 789</a>
        <p>Lub napisz</p>
        <button onClick={handleShow} className='btn-envelope'><i class="fa-solid fa-envelope envelope"></i></button>
      </div>
      {show && <ContactForm handleShow={handleShow} />}
    </div>
  )
}
