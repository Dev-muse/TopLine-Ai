import React, {useState} from 'react';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import Logo from '../../assets/logo.svg';

const Menu = () =>{
   return ( 
   <>
     <p><a href="#home">Home</a></p>
     <p><a href="#wgpt3">What is GPT3?</a></p>
     <p><a href="#possibility">Open Ai</a></p>
     <p><a href="#features">Case studies</a></p>
     <p><a href="#blog">Library</a></p>
    </>
    );
}


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
       <nav className="gpt3__navbar">
           <div className="gpt3__navbar-links">
               <div className="gpt3__navbar-links_logo">
                   <img src={Logo} alt="TopLine ai logo" />                   
                </div>
                <div className="gpt3__navbar-links_container">
                       <Menu />
                </div>
           </div>
           <div className="gpt3__navbar-sign">
                <p>Sign In</p>       
                <button type="button">Sign Up</button>
           </div>
           <div className="gpt3__navbar-menu">
               {/* menu show/hide logic */}
               {
                   toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/> : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
               }

               {
                   toggleMenu && (
                       <div className="gpt3__navbar-menu_container scale-up-center">
                           <div className="gpt3__navbar-menu_container-links">
                                <Menu />
                                <div className="gpt3__navbar-menu_container-links-sign">
                                     <p>Sign In</p>       
                                     <button type="button">Sign Up</button>
                                </div>
                           </div>
                       </div>
                   )
               }
           </div>
       </nav>
    )
}

export default Navbar;
