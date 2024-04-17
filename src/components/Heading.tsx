import React from 'react'
import { Link } from 'react-router-dom'

const Heading = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            <Link to={'/'}>Things My Friend Jason Likes</Link>
          </h1>
          <h2 className="subtitle">
            A Replicated Photo Gallery by Jeremy Badger
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Heading
