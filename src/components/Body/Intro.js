import React from "react";
import Typical from "react-typical";

const Intro = () => {
  return (
    <div style={{  zIndex: "1"    }}>
      {/* <h1 className="landing-title">-Hello, I'm Ross!</h1>
        <br></br>
        <p> </p>
        <p>
            <Typical 
            loop={1}
            wrapper="b"
            steps={`I am a Software Engineer from Cincinnati. I love how development is half creativity and half critical thinking. 
            I have been coding for almost two years now and love to make projects in my free time.`}
            
            />
            
        </p> */}

      <div className="computer">
        <div className="monitor">
          <div className="screen">

          <h4 >
            <Typical
            id="intro-text"
            loop={1}
            steps={['-Welcome!', 1000, `-I'm Ross, I'm a Software Engineer from Cincinnati`]}/>
            {/* <Typical
            loop={1}
            steps={[ 3000,`-I'm Ross`]}/>

<Typical
            loop={1}
            steps={[ 6000,`-I'm a Software \n Engineer from Cincinnati`]}/> */}

          </h4>
          </div>
          
        </div>
        
        <div className="cpu"></div>
        <div className="mouse"></div>
        <div className="keyboard"></div>
      </div>
    </div>
  );
};

export default Intro;
