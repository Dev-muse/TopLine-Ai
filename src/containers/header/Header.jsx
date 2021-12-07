import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai2.png';

const Header = () => {
     return (
        <header className="gpt3__header section__padding">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
                <p>The future is now , with powerful next generation ai you can write a blog , novel or the latest celebrated masterpiece in next to no time. </p>
                
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Enter Your Email" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3___header-content__people">
                    <img src={people} alt="people icons" />
                    <p>1,694 People requested access in the last 24 hours</p>
                </div>

            </div>
            
            <div className="gpt3__header-image">
                    <img src={ai} alt="Ai facial recognition technology" />
            </div>


        </header>
    )
}

export default Header
