import React from 'react'
import './ContactForm.css'

export default function ContactForm({handleShow}) {


  return (
    <form className='contact-form' action="mailto:your@domain.abc" method="GET">
      <button onClick={handleShow} className='show-btn'><i class="fa-solid fa-xmark"></i></button>
      <h1 className='contact-header'>Skontaktuj się z nami</h1>
      <label className='form-label'>
        <span>Temat: </span>
        <input type="text" required name='topic'/>
      </label>
      <label className='form-label'>
        <span>Treść wiadomości: </span>
        <textarea required name='conetnt'></textarea>
      </label>
      <button className='submit-btn'  type='submit' value='Send'>Prześlij</button>
    </form>
  )
}
