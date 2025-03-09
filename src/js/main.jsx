import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';


// first solution:

const root = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;


setInterval(
  () => {
    counter++

  
    let hoursCounter = Math.floor(counter / 3600) % 24;
    let minutesCounter = Math.floor((counter % 3600) / 60);
    let secondsCounter = Math.floor(counter % 60 );

    let hoursCounterStringBe = String(hoursCounter).padStart(2, "0");
    let minutesCounterStringBe = String(minutesCounter).padStart(2, "0");
    let secondsCounterStringBe = String(secondsCounter).padStart(2, "0");
    let counterStringBeAnArray = [...hoursCounterStringBe, ...minutesCounterStringBe, ...secondsCounterStringBe];

    root.render(
      <React.StrictMode>
        <Home digits={counterStringBeAnArray} />
        
                        
      </React.StrictMode >,
    )
   

  }, 1000
);



// second solution:

// const root = ReactDOM.createRoot(document.getElementById('root'));
// let counter = 0;

// setInterval(function(){
//   const fourthDigit = Math.floor(counter / 1000) % 10;
//   const thirdDigit = Math.floor(counter / 100)  % 10;
//   const secondDigit = Math.floor(counter / 10)  % 10;
//   const firstDigit = Math.floor(counter / 1)  % 10;
//   counter++;
//  console.log(counter);
 

//   root.render(
//     <Home firstDigit={firstDigit}   
//     secondDigit={secondDigit}
//     thirdDigit={thirdDigit}
//     fourthDigit={fourthDigit}/>

// );
// }, 1000);
