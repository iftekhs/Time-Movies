import { Link } from 'react-router-dom';
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>© 2020 Time Movie! No rights reserved - this is a demo!</p>
      <Link to="/privacy"> Privacy | </Link>{' '}
      <Link to="/privacy"> Terms | </Link> <Link to="/privacy">Sitemap | </Link>{' '}
      <Link to="/privacy">Company |</Link> <Link to="/privacy"> Details </Link>
    </div>
  );
}

export default Footer;
