import React from 'react';
import './blog.css';
import {Article} from '../../components';
import  { blog01,blog02,blog03,blog04,blog05} from './imports';


const Blog = () => {
    return (
        <div className="gpt3__blog section__padding" id='blog'>
            <div className="gpt3__blog-heading">                
                <h2 className="gradient__text">A lot is happening,<br />We are blogging about it.</h2>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date="22nd October" 
                            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
                <div className="gpt3__blog-container_groupB">
                    <Article imgUrl={blog02} date="15th July"
                             title="Will ai have the power to interpret your dreams?"/>
                    <Article imgUrl={blog05} date="3rd March" 
                            title="A robot wrote this entire article. Are you scared yet, human?"/>
                    <Article imgUrl={blog03} date="22nd April" 
                            title="The latest in automated data ingestion"/>
                    <Article imgUrl={blog04} date="12th December" 
                            title="The future of ai racing"/>
                </div>
            </div>
        </div>
    )
}

export default Blog
