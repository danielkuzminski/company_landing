import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Contact.css'

export default function Contact() {
  
  

  return (
    <div className='contact-container'>
      <div className="contact-data">
        <p>Skontaktuj sie z nami</p><p> pod numerem telefonu</p><a href='tel:+48 123 456 789'> <i class="fa-solid fa-phone"></i> +48 123 456 789</a>
        <p>Lub napisz</p>
        <p><i class="fa-solid fa-arrow-down"></i></p>
      </div>

      <form className='contact-form' action="mailto:your@domain.abc" method="GET">
        <h1 className='contact-header'>Skontaktuj się z nami</h1>
        <label className='form-label'>
          <span>Temat: </span>
          <input type="text" required name='topic'/>
        </label>
        <label className='form-label'>
          <span>Treść wiadomości: </span>
          <textarea required name='conetnt'></textarea>
        </label>
        <label className='form-label'>
          <span>Numer telefonu: </span>
          <input type="number" required name='phNumber'/>
        </label>
        <label className='form-label'>
          <span>Adres e-mail: </span>
          <input type="email" name='emailAddress'/>
        </label>
        <button className='submit-btn'  type='submit' value='Send'>Prześlij</button>
      </form>

    </div>
  )
}
