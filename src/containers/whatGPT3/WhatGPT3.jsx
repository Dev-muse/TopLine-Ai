import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3?" text="GPT-3, or the third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="A GPT-3 chatbot is a software application that is able to conduct a conversation with a human user through written or spoken language. The level of “intelligence” among chatbots varies greatly." />
      <Feature title="Knowledgebase" text="A GPT-3 powered knowledge base that writes support articles for you. Useful, affordable, and beautifully designed." />
      <Feature title="Education" text="It can answer homework questions, write poetry, tweet, translate languages, generate images, and even code. GPT-3 uses neural networks, where a computer learns to perform some task by analyzing training examples." />
    </div>
  </div>
);

export default WhatGPT3;