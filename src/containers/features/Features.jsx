import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature.jsx'


const featuresData = [
    { title: 'Facial Recognition', text: 'Artificial Intelligence has made it possible to recognize individual faces using biometric mapping. This has lead to pathbreaking advancements in surveillance technologies. It compares the knowledge with a database of known faces to seek out a match.'},
    { title: 'Automate Simple and Repetitive Tasks', text: 'AI has the ability to execute the same kind of work over and over again without breaking a sweat. To understand this feature better, let’s take the example of Siri, a voice-enabled assistant created by Apple Inc. It can handle so many commands in a single day!'},
    { title: 'Data Ingestion', text: 'With every passing day, the data that we are all producing is growing exponentially, which is where AI steps in. Instead of manually feeding this data, AI-enabled not just gathers this data but also analyzes it with the help of its previous experiences.'},
    { title: 'Quantum Computing', text: 'AI is helping solve complex quantum physics problems with the accuracy of supercomputers with the help of quantum neural networks. This can lead to path-breaking developments in the near future.'}
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into the Future Today &amp; Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt3__features-container">
               { featuresData.map((item,i)=><Feature {...item} key={i} />)}
            </div>
        </div>
    )
}

export default Features
