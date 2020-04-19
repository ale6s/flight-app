import React from "react";

const About = () => {
  return (
    <div className="text-center">
        <div className="container">
      <h1 className="text-primary">About Turbopilot</h1>
        <h3>Since 2020, Turbopilot has been revolutionizing the travel industry. Metasearch for travel? No one was doing it. Until we did.</h3>
        <p>Today, we process over 6 billion queries across our platforms each year for travel information, helping millions of travelers around
         the globe make confident decisions. With every query, Turbopilot searches hundreds of travel sites to show travelers the information they need 
         to find the right flights, hotels, rental cars and vacation packages.</p>
         </div>
         <br/>
         <div className="bg-dark">
            <h3 className="text-white mb-5">Turbopilot by the numbers.</h3>
            <p className="text-white">Our passion for data informs everything we do. Every team member at Turbopilot knows our business inside and out, down to the numbers.</p>
            <h3 className="text-white">6,000,000,000+</h3>
            <img className="mt-5 mb-5" src="https://www.jing.fm/clipimg/full/78-782020_plane-png-black-and-white.png"/>
         </div>
    </div>
  );
};
export default About;
