import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <section className='footer-section'>
        <h4>Diana Bee</h4>
      </section>
      <section>
      <div className="footer-section">
        <a href="https://www.facebook.com">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <div className="footer-section">
        <a href="https://www.linkedin.com">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-section">
        <a href="https://www.instagram.com">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      </section>
    </div>
  )
}

export default Footer