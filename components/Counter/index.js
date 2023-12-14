import React, { useState, useEffect } from 'react';

const Counter = () => {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const targetNumber = 64502;
    const targetNumber2 = 4563;
    const targetNumber3 = 4420;
    const duration = 2000; // in milliseconds
    const interval = 200; // in milliseconds

    const steps = Math.ceil(duration / interval);

    // Calculate increment for each count
    const increment1 = (targetNumber - count1) / steps;
    const increment2 = (targetNumber2 - count2) / steps;
    const increment3 = (targetNumber3 - count3) / steps;

    // Set up intervals for each count
    const intervalId1 = setInterval(() => {
      setCount1((prevCount) => prevCount + increment1);
    }, interval);

    const intervalId2 = setInterval(() => {
      setCount2((prevCount) => prevCount + increment2);
    }, interval);

    const intervalId3 = setInterval(() => {
      setCount3((prevCount) => prevCount + increment3);
    }, interval);

    // Clear intervals on component unmount
    return () => {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
    };
  }, [count1, count2, count3]);

  const gridContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: 'auto',
  };

  const gridItemStyle = {
    width: '30%',
    margin: '10px',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#1943FF', // Set your background color here
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    color: '#fff', // White text
  };

  const numberScrollerStyle = {
    fontSize: '1.2em', 
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '10px',
  };
      return(
        <section className="strong-services-wrapper section-bg section-padding fw500">
			<div className="container">
        <div>
        <div className="col-lg-8 ps-xl-5 pe-xl-5 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2><b>Happenings</b></h2>
							<p>
               The rider application has garnered impressive statistics with a substantial number of downloads, reflecting its growing popularity and widespread adoption among users.
							</p>
						</div>
					</div>
				</div>
        <div style={gridContainerStyle}>
          {/* First Grid */}
          <div style={gridItemStyle}>
            <h2 style={{
                color: "#FFF",
                fontSize: '1em'
            }}>Our Riders</h2>
            <div style={numberScrollerStyle}>{Math.round(count1)}</div>
            {/* Add your content here */}
          </div>
  
          {/* Second Grid */}
          <div style={gridItemStyle}>
            <h2 style={{
                color: "#FFF",
                fontSize: '1em'
            }}>Our Drivers</h2>
            <div style={numberScrollerStyle}>{Math.round(count2)}</div>
            {/* Add your content here */}
          </div>
  
          {/* Third Grid */}
          <div style={gridItemStyle}>
            <h2 style={{
                color: "#FFF",
                fontSize: '1em'
            }}>Our Fleets</h2>
            <div style={numberScrollerStyle}>{Math.round(count3)}</div>
            {/* Add your content here */}
          </div>
        </div>
      </div>
      </div>
      </section>
      )

}


export default Counter;