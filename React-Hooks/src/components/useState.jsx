import React, { useState } from "react"
import Meme1 from '../assets/meme1.avif'

function UseState() {
  // useState syntax *always start inside of a function*

  // syntax: const [state, setState] = useState(initialState);
  const [color, setColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();
  //   const [count, setCount] = useState(0);

  return (
    <>
      <div className="HooksUseState">
        <h1 className="titleUseState">React useState()</h1>
        <img className="memeUseState" src={Meme1} alt="Picture1" />
        <p className="descriptionUseState">'useState' is a Hook in React, a popular JavaScript library for building user interfaces. Hooks allow you to use state and other React features without writing a class. useState is one of the most commonly used Hooks because it enables functional components to have state variables.</p>

        <h2 className="UseStateIntro">Sample of useState() Hook</h2>
        <div className="sampleUseState">
        <p className="BoxUseState" style={{ color, backgroundColor: backgroundColor }}>
          Hello. My favorite color is {color}.
        </p>
        {/* I quote this program for future reference. Maybe this can help you too. */}
        {/* <div>
         <button onClick={() => setCount(count - 1)}>-</button>
         <span> {count} </span>
         <button onClick={() => setCount(count + 1)}>+</button>
       </div> */}

        <h3>Font Color</h3>
        <button type="button" onClick={() => setColor("White")}>
          Default
        </button>
        <button type="button" onClick={() => setColor("Black")}>
          Set Black
        </button>
        <button type="button" onClick={() => setColor("DarkGray")}>
          Set DarkGray
        </button>
        <button type="button" onClick={() => setColor("Blue")}>
          Set Blue
        </button>
        <button type="button" onClick={() => setColor("DarkGreen")}>
          Set DarkGreen
        </button>

        <h3>Background Color</h3>
        <button type="button" onClick={() => setBackgroundColor("Gray")}>
          Set Gray
        </button>
        <button type="button" onClick={() => setBackgroundColor("Transparent")}>
          Set No Background
        </button>
        <button typeof="button" onClick={() => setBackgroundColor("White")}>
          Set White
        </button>
        <button typeof="button" onClick={() => setBackgroundColor("Tomato")}>
          Set Tomato
        </button>
        <button typeof="button" onClick={() => setBackgroundColor("Lightblue")}>
          Set Lightblue
        </button>
        </div>
      </div>
    </>
  );
}

export default UseState;
