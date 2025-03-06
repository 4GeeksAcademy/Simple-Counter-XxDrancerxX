import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

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

