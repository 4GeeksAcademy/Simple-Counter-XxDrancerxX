import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/index.css";




//create your first component
const Home = ({ digits }) => {
	return (
		<div className="container">
			<div className="row d-flex justify-content-evenly ms-5 me-5 ">
				{digits.map(

					(digit, index) => (
						<React.Fragment key={index}>
							<div key={index} className={`col-auto mt-4 mb-4 ${index === 0 ? "" : "space"}`}
								id={index === 0 ? "space-clock" : undefined} >
								{index === 0 ? (
									<i className="fa-solid fa-clock fa-6x"></i>
								) : (
									<>
										{digit}

									</>
								)}
							</div>
							{(index === 1 || index === 3) &&
							 (<div className="col-auto d-flex align-items-start fw-bold colons">:</div>)}
						</React.Fragment>
					)
				)}
			</div>
		</div>
	);
};

export default Home;
