import React from 'react'
import './Contact.css'

export default function Contact() {
  // logic to send data to database

  return (
    <div className='contact-container'>
      <div className="contact-data">
        <p>Skontaktuj sie z nami</p><p> pod numerem telefonu</p><a href='tel:+48 123 456 789'> <i class="fa-solid fa-phone"></i> +48 123 456 789</a>
        <p>Lub napisz</p>
        <p><i class="fa-solid fa-arrow-down"></i></p>
      </div>

      <form className='contact-form'>
        <h1 className='contact-header'>Skontaktuj się z nami</h1>
        <label className='form-label'>
          <span>Temat: </span>
          <input type="text" required/>
        </label>
        <label className='form-label'>
          <span>Treść wiadomości: </span>
          <textarea required></textarea>
        </label>
        <label className='form-label'>
          <span>Numer telefonu: </span>
          <input type="number" required/>
        </label>
        <label className='form-label'>
          <span>Adres e-mail: </span>
          <input type="email" required/>
        </label>
        <button type='submit'>Prześlij</button>
      </form>
    </div>
  )
}
