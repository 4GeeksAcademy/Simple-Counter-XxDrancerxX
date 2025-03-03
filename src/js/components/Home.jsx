import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";


const sec = [1,2,3,4,5,6,7];
//create your first component
const Home = () => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-evenly ms-5 me-5 ">
		 {sec.map(
				(seconds) => (
					<div className="space col-auto mt-4 mb-4">{seconds}</div>
					
				)
			)}  
             </div>
		</div>
	);
};

export default Home;

// {/* <i className="fa-solid fa-clock fa-6x"></i> */}