import React from 'react'
import { Link } from 'react-router-dom'
import './Offer.css'

export default function Offer() {
  return (
    <div>
            <div className="showcase-top showcase"></div>
      <section className='section-top section-wrapper'>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p className='offer-icon'><i class="fa-solid fa-book-open"></i> Karta Podatkowa</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolorum, soluta ab reiciendis dolor accusantium ad. Eveniet deserunt ipsum autem repudiandae at temporibus asperiores, perferendis nobis quibusdam distinctio quia neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae quae aperiam voluptate beatae laborum sapiente.</p>
      </section>
      <div className="showcase-middle showcase"></div>
      <section className='section-middle section-wrapper '>
        <p className='offer-icon'><i class="fa-solid fa-book-open"></i> Ryczałt</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, est quisquam iste suscipit libero amet itaque iusto totam atque cum tenetur.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero maiores aperiam atque ad perspiciatis qui debitis est ipsum cupiditate natus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus amet ratione adipisci laborum labore assumenda explicabo, ab quae a fugit, rerum qui illo iusto. A cumque maiores quidem architecto?</p>
      </section>
      <div className="showcase-middle showcase"></div>
      <section className='section-middle section-wrapper'>
      <p className='offer-icon'><i class="fa-solid fa-book-open"></i> Podatkowa księga przychodów i rozchodów</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, est quisquam iste suscipit libero amet itaque iusto totam atque cum tenetur.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero maiores aperiam atque ad perspiciatis qui debitis est ipsum cupiditate natus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus amet ratione adipisci laborum labore assumenda explicabo, ab quae a fugit, rerum qui illo iusto. A cumque maiores quidem architecto?</p>
      </section>
      <div className="showcase-middle showcase"></div>
      <section className='section-middle section-wrapper'>
        <p className='offer-icon'><i class="fa-solid fa-book-open"></i> Pełna księgowość</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, est quisquam iste suscipit libero amet itaque iusto totam atque cum tenetur.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero maiores aperiam atque ad perspiciatis qui debitis est ipsum cupiditate natus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus amet ratione adipisci laborum labore assumenda explicabo, ab quae a fugit, rerum qui illo iusto. A cumque maiores quidem architecto?</p>
      </section>
      <div className="showcase-middle showcase"></div>
      <section className='section-middle section-wrapper'>
      <p className='offer-icon'><i class="fa-solid fa-book-open"></i> Porady podatkowe</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, est quisquam iste suscipit libero amet itaque iusto totam atque cum tenetur.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero maiores aperiam atque ad perspiciatis qui debitis est ipsum cupiditate natus?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus amet ratione adipisci laborum labore assumenda explicabo, ab quae a fugit, rerum qui illo iusto. A cumque maiores quidem architecto?</p>
      </section>
      <div className="showcase-bottom showcase"></div>
      <section className='section-bottom section-wrapper'>
        <Link to='/contact' className='contact-offer'>
        <p className='offer-icon'><i class="fa-solid fa-envelope"></i> Skontaktuj sie z nami</p>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iste aliquid nesciunt ipsum dolorum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestiae distinctio qui in porro dolorem sapiente eos odio at repellendus officia natus dolor reiciendis quaerat cupiditate deleniti beatae, modi iure debitis minima adipisci, ex quas reprehenderit eum? Explicabo, laborum perferendis?</p>
      </section>
    </div>
  )
}
