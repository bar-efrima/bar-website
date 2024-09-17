import React from 'react';
// import './HelloWorld.css';

const HelloWorld = () => {
  return (
    <section className="HelloWorld">
      <section className="hidden">
        <p className="hello" id="animated-text"><strong>Hello, World.</strong></p>
        <p className="name"><strong>I'm Bar Efrima.</strong></p>
        <a href="#aboutmeTag">
          <p className="more stroke">more about me</p>
        </a>
      </section>
    </section>
  );
}

export default HelloWorld;
