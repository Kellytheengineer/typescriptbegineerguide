import React from 'react';
import logo from '@/logo.svg';
import './App.css';
import image from '@/Typescript_logo_2020.svg.png'; // Correct extension
import Code2 from '@/Screenshot1.png';
import Code3 from '@/public/Screenshotarray.png'

const checkAnswer = (formId: string, correctAnswers: string[], resultId: string) => {
  const form = document.getElementById(formId) as HTMLFormElement;
  const formData = new FormData(form);
  const selectedAnswer = formData.get('answer') as string;
  const resultElement = document.getElementById(resultId)!;
  
  console.log(`Form ID: ${formId}`);
  console.log(`Selected Answer: ${selectedAnswer}`);
  
  if (correctAnswers.includes(selectedAnswer)) {
    resultElement.innerHTML = 'Correct! Well done.';
  } else {
    resultElement.innerHTML = 'Incorrect! Try again.';
  }
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TypeScript Simple Tutorial</h1>
        <div style={{ textAlign: 'center' }}>
          <p>🧑🏾‍💻 TypeScript for Beginners: Avengers Assemble!</p>  
          <p>This Avengers-themed TypeScript tutorial covers the following concepts.</p>
          <p><b>Click on the tutorial you would like to follow:</b></p>
        </div>
        <div style={{ textAlign: 'left' }}>
          <p>💎 <a href="#basic-types" style={{ textDecoration: 'none', color: 'inherit' }}><b>Basic Types</b>(compared to Infinity Stones)</a></p>
          <p>🛡️ <a href="#array-tuples" style={{ textDecoration: 'none', color: 'inherit' }}><b>Arrays and Tuples</b>(compared to the Avengers team)</a></p>
          <p>📁 <b>Interfaces</b> (compared to S.H.I.E.L.D. files)</p>
          <p>⚡ <b>Functions</b> (compared to hero abilities)</p>
          <p>🏋🏾 <b>Classes</b> (compared to hero training programs)</p>
          <p>🚨 <b>Enums</b> (compared to threat levels)</p>
          <p>🧤 <b>Generics</b> (compared to the Infinity Gauntlet)</p>
          <p>🌀 <b>Union Types</b> (compared to shape-shifting heroes)</p>
          <p>🧠 <b>Type Assertions</b> (compared to Mind Stone powers)</p>
        </div>
        <img src='/Typescript_logo_2020.svg.png' className="TypeScriptLogo" alt="TypeScript Logo" />
      </header>

      <main className="App">
        <header className="App-header">
          <h1 id="basic-types">Basic Types: The Infinity Stones</h1>
          <p> 💎Just as each Infinity Stone grants a unique power in the Marvel Universe💎 </p> 
          <p>TypeScript has basic types that provide specific powers to your variables, helping you define what kind of data they hold.</p>
          <ul>
            <li><strong>string</strong>: Represents textual data.</li>
            <li><strong>boolean</strong>: Represents a true or false value.</li>
            <li><strong>number</strong>: Represents numerical values (integers, floats).</li>
            <li><strong>any</strong>: Can represent any type of data, much like the flexible powers of the Mind Stone.</li>
            <li><strong>Date</strong>: Represents a specific point in time.</li>
            <li><strong>null</strong>: Represents the absence of value.</li>
          </ul>
        
          <h2>Basic Types Quiz</h2>
          <form id="quizForm" onSubmit={(e) => { e.preventDefault(); checkAnswer('quizForm', ['any'], 'result1'); }}>
            <p><strong>What type in TypeScript can represent any type of data?</strong></p>
            <div className="option-group">
              <label><input type="radio" id="option1" name="answer" value="string" /><span className="radio-custom"></span>string</label><br />
              <label><input type="radio" id="option2" name="answer" value="boolean" /><span className="radio-custom"></span>boolean</label><br />
              <label><input type="radio" id="option3" name="answer" value="any" /><span className="radio-custom"></span>any</label><br />
              <label><input type="radio" id="option4" name="answer" value="number" /><span className="radio-custom"></span>number</label><br />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          <p id="result1"></p>

          <h2>Exercise: Declaring the Infinity Stones</h2>
          <ul>
            <li>Now that you've learned about basic types💎</li>
            <li>let's practice by declaring variables for each Infinity Stone.</li>
            <li>Each stone will be represented by a different data type in TypeScript.</li>
            <li><b>Instructions:</b></li>
          </ul>
          <ol>
            <li><b>Copy the following code into your TypeScript environment:</b></li>
            <pre>
              <code>
                {`let space: string = "blue"; // The Space Stone (Tesseract)
let reality: boolean = true; // The Reality Stone (Aether)
let power: number = 9000; // The Power Stone
let mind: any = "complex"; // The Mind Stone (can be anything)
let time: Date = new Date(); // The Time Stone
let soul: null = null;  // The Soul Stone (it's a bit elusive)`}
              </code>
            </pre>
            <li><b>Examine each variable declaration and identify the TypeScript type used for each Infinity Stone.</b></li>
            <li><b>Try changing the values of each variable while maintaining the correct type.</b></li>
            <li><b>Experiment with using these variables in simple operations or function calls.</b></li>
          </ol>
          <p>This exercise will help you understand how different types are used in TypeScript</p>
          <p>and how they correspond to various kinds of data,</p>
          <p>just like how each Infinity Stone has its unique properties in the Marvel Universe.</p>

          <h2>Supporting Video</h2>
        </header>
      </main>

      <div className="video-container">
        <iframe width="560" height="315" 
          src="https://www.youtube.com/embed/qbczHkJqppU" 
          title="YouTube video player" 
          style={{ border: "0" }} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>

      <main className="App">
        <header className="App-header"> 
          <h1 id="array-tuples">Arrays and Tuples: The Avengers Team</h1>
          <ul>
            <li>Arrays in TypeScript are like the Avengers—multiple items of the same type working together.</li>
            <li>They allow you to store and manipulate a collection of similar data. Arrays hold items of the same type.</li>
            <li>Tuples are like specialized teams with a fixed structure, allowing elements of different types in specific positions.</li>
          </ul>
          <h2>Arrays and Tuples Quiz</h2>
          <form id="quizForm2" onSubmit={(e) => { e.preventDefault(); checkAnswer('quizForm2', ['tuples'], 'result2'); }}>
            <p><strong>Which of the following statements about Arrays and Tuples in TypeScript is true?</strong></p>
            <div className="option-group">
              <label><input type="radio" id="option5" name="answer" value="array" /><span className="radio-custom"></span>Arrays can hold items of different types</label><br />
              <label><input type="radio" id="option6" name="answer" value="tuples" /><span className="radio-custom"></span>Tuples in TypeScript can store a fixed number of elements of different types</label><br />
              <label><input type="radio" id="option7" name="answer" value="both" /><span className="radio-custom"></span>Both Arrays and Tuples can store items of different types</label><br />
              <label><input type="radio" id="option8" name="answer" value="neither" /><span className="radio-custom"></span>Neither Arrays nor Tuples allow storing multiple types of data</label><br />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          <p id="result2"></p>
          <h2>Exercise: Avengers and Their Details</h2>
          <ul>
            <p>Objective:Learn how to use arrays and tuples by working with a list of Avengers and their details</p>
            <p><b>Instructions:</b></p>
            <p>Arrays:</p>
            <p>Create an array called avengers with the names "Iron Man", "Captain America", "Thor", and "Hulk".</p>
            <p>Write a function printAvengers that prints each name from the avengers array.</p>
            <p>Tuples:</p>
            <p>Create a tuple named ironMan with the following data:</p>
            <p>"Tony Stark" (real name)</p>
            <p>"Iron Man" (alias)</p>
            <p>100 (power level)</p>
            <p><b>Write a function printHero that takes the ironMan tuple and prints each piece of information.</b></p>
            <p><b>Code Template:</b></p>
            <img src='/Screenshotarray.png' className="Screenshoot3" alt="Screenshot3" />
            <p><b>What to Do:</b></p>
            <p>1. Copy the code into a TypeScript file (e.g., exercise.ts).:</p>
            <p>2. Run the code and check the console to see the output.</p>
            <p>Expected output : Iron Man ,Captain America, Thor ,Hulk ,Real Name: Tony Stark , Alias: Iron Man ,Power Level: 100</p>
            </ul>
          <h2>Supporting Video</h2>
          <div className="video-container">
            <iframe 
              width="400" 
              height="150"
              src="https://www.youtube.com/embed/FdT8H3Vc-KI"
              title="YouTube video player2"
              style={{ border: "0" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </header>
      </main>
      <header>Website powered by TypeScript, HTML, and CSS</header>
    </div>
  );
};

export default App;



