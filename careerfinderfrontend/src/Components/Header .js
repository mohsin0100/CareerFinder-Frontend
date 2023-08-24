import React from 'react'
import logo from './images/resize-16909603631768394012logo.webp';
import { Link } from 'react-router-dom';


function Header () {
  return (
    <div>
        <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'> 
                <div className='container-fluid'>
                    <nav className='Navbar fixed-top'>
                        <Link to='/Home' className='b'><img src={logo} className='a' /> </Link>
                        <Link to='/Home'className='b'>Home</Link>
                        <Link to='/Jobs'className='b'>Jobs</Link>
                        <a to='/Contact'className='b'>Contact</a>
                        <a to='/SignUp'className='b'>Sign Up</a>
                        <a to='LogIn'className='b'>Log in</a>
                    </nav>
                </div>
            </div>
            
        </div>
        
    </div>
  )
}

export default Header;
