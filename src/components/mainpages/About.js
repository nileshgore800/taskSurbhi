import React from 'react';
import NavbarM from './NavbarM';

const About = () => {
  return (
    <div className='main'>
      <NavbarM />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div> {/* Empty column for spacing */}
          <div className="col-md-10">
            <h2 className="text-right">About Page</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
