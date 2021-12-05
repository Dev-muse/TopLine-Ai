import React from 'react';
import {google,atlassian,slack,shopify,dropbox} from './imports';
import './brand.css';

const Brand = () => {
    return (
       <div className="gpt3__brand section__padding">
           <div><img src={google} alt="google icon" /></div>
           <div><img src={atlassian} alt="altassian icon" /></div>
           <div><img src={slack} alt="slack icon" /></div>
           <div><img src={shopify} alt="shopify icon" /></div>
           <div><img src={dropbox} alt="dropbox icon" /></div>
       </div>
    )
}

export default Brand
