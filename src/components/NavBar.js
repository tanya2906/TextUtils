import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import './NavBar.css';
export default function NavBar(props) {

  return (
    <>
      <nav>
      <ul>
          <li className="title">{props.title}</li>
          <li>
            <Link to="/home" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About</Link>
          </li>
      </ul>
      </nav>
    </>
  )
}
NavBar.propTypes={
    title: PropTypes.string
};
NavBar.defaultProps={
    title: "Title"
}
