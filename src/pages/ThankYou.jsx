import React from 'react'
import { useHistory } from 'react-router-dom'


export default function ThankYou() {
  const history = useHistory()

  setTimeout(() => {
    history.push('/')
  }, 5000)

  return (
    <div>
      <p>Dziękujemy za wysłanie formularza</p>
      <p>skontaktujemy się z państwem najszybciej jak to będzie możliwe</p>

    </div>
  )
}
