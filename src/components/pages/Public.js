import React from 'react'
import { Link, Route } from 'react-router-dom';

const Header = () => {
  return (
    <div className="jumbotron text-center">
      <Link to="/">
        <h1>Guideline Team</h1>
      </Link>
    </div>
  );
}

const Footer = () => {
  return  (
    <footer className="container-fluid text-center">
      <p>Made By Research and Development Technical Team </p>
    </footer>
  )
}

const Public = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => {
      return (
        <div>
          <Header />
          {React.createElement(component, props)}
          <Footer />
        </div>
      )
    }} />
  )

  export default Public
