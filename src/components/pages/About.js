import React from 'react';
import '../../styles/About.css';
import me from '../../images/me.png';

export default function About() {
  return (
    <>
      <header>
        <h2>About Me</h2>
      </header>
      <article className="about section-content">
        <div className="avatar flx">
          <img src={me} alt="Tori Booker" />
        </div>
        <div className="bio flx">
          <p>Hello! My name is Tori Booker. I am a self-motivated individual with a record of success in troubleshooting and problem resolution. 
            I am committed to life-long learning of skills and knowledge with a variety of experiences in education, information technology, business, eCommerce and retail, including management and supervisory experience. 
            I have an extensive experience with PC computer systems—qualified in inter-office computer hardware and software troubleshooting and staff training.</p>
          <p>Honestly, I feel like I've had a variety positions which contributed to the hard worker and team player I am today. In a snapshot, I've 
            loaded and unloaded trucks for FedEx and UPS. I was a part-time supervisor at UPS as well. I've stocked shelves in a discount store, became a desktop publisher
            at OfficeMax, and fixed computers at Best Buy's Geek Squad.</p>
          <p>But, before all of those positions, I was just a teenager so blown away by the "world wide web" that I decided to teach myself HTML at Southern Illinois University in Carbondale.
            I loved coding so much that I continue to pursue the technology field and even took a course on C# at a community college and graduated from ITT with a degree in Multimedia.</p>
          <p>I look forward to what to the future holds and I hope you enjoy my work.</p>
        </div>
      </article>
    </>
  );
}