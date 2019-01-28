import React, { PropTypes } from 'react'
import { Route, Redirect } from 'react-router-dom';

const Header = () => {
  return (
    <div className="jumbotron text-center">
      <h1>Guideline Team</h1>
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
