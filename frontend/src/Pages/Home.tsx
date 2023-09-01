import React from 'react';
import { Link } from 'react-router-dom';

import logo from "../images/logo.png"
const Home: React.FC = () => {

    const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const imageStyle = {
    maxWidth: '15%'
  };

    
  return (
    <div>
      <div style={containerStyle}>
      <img src={logo} alt="Centered Image" style={imageStyle} />
    </div>
      <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10 mt-16"> {/* Updated mt-0 to mt-16 */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" style={{fontSize:"bold" ,}}>
            Level Up Your Interview Game with AI!
          </h1>
          <p  style={{color:'gray', textAlign:"center",fontSize:"large",}}>
            Unlock your tech potential with our AI interview platform! Seamlessly practice coding challenges, master problem-solving, and receive personalized feedback. Elevate your confidence and skills to ace any tech interview. Land your dream job with ease and efficiency!
          </p>
         <div className="mt-10 flex items-center justify-center gap-x-6" style={{display:"flex",justifyContent:"space-evenly",gap:"20vh", marginTop:"20vh"}}>
  <Link to={`/interview/java`}>
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700" style={{borderRadius:"lg", background:"white", boxShadow:"0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",backgroundColor:"dark-bg-neutral-700"}}>
      <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
        <img
          className="rounded-t-lg"
          src="https://static.javatpoint.com/core/images/java-logo1.png"
          alt=""
          style={{ width: "180px" }} // Set a fixed width and height for the image
        />
        <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Java
        </h3>
      </div>
    </div>
  </Link>

  <Link to={`/interview/mern`}>
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light" style={{borderRadius:"lg", background:"white", boxShadow:"0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",backgroundColor:"dark-bg-neutral-700"}}>
        <img
          className="rounded-t-lg"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*kxPYwfJmkXZ3iCWy.png"
          alt=""
          style={{ width: "200px" }} // Set a fixed width and height for the image
        />
        <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          MERN
        </h3>
      </div>
    </div>
  </Link>

  <Link to={`/interview/nodejs`}>
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light" style={{borderRadius:"lg", background:"white", boxShadow:"0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",backgroundColor:"dark-bg-neutral-700"}}>
        <img
          className="rounded-t-lg"
          src="https://static.ebayinc.com/static/assets/Uploads/Stories/Articles/node.js.jpg"
          alt=""
          style={{ width: "200px" }} // Set a fixed width and height for the image
        />
        <h3 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          NodeJs
        </h3>
      </div>
    </div>
  </Link>
</div>

        </div>
      </div>
     
    </div>
  );
};

export default Home;
