import React from "react";
import "./Challenges.css";
import Header from "./Header";

export default function Challenges() {
  return (
    <div>
      <Header />
      <div>
        <h4> Code Challenge</h4>
        <div className="question">
          <p id="q1">Write a function:</p>
          <p id="q2">function solution(A);</p>
          <p id="q3">
            that,given an Array A of N integers,returns the smallest positive
            integer(greater than 0)
          </p>
          <p id="q4">that does not occur in A.</p>
          <p id="q5">
            For example, given A=[1,3,6,4,1,2], the function should return 5.
          </p>
          <p id="q6">Given A =[1,2,3], the function should return 4.</p>
          <p id="q7">Given A=[-1,-3]the function should return 1.</p>
          <p id="q8">
            Write an effective algorithm for the following assumptions:
          </p>
          <p id="q9">N is an interger within the range[1..100,000];</p>
          <p id="q10">
            each element of array A is an integer within the
            range[-1,000,000..1,00,000]
          </p>
        </div>
        <h4>Data Collection</h4>
        <form id="formq" onSubmit={(event) => event.preventDefault()}>
          <input type="text" id="values" placeholder="Input" />
          <button>Print Result</button>
          <br />
          <label htmlFor="values">
            Enter the value with comma(,)separator eg:1,3,6,4,1,2
          </label>
        </form>
        <h4>Output</h4>
        <button className="output">5</button>
        <h4>Note::</h4>
        <div className="notes">
          <p className="n1">
            You need to read the data from above input and convert that
            <br />
            values into array eg:1,3,6,4,1,2 will be [1,3,6,4,1,2].
          </p>
          <p className="n2">
            Use above converted array as a input to your solution function
          </p>
          <p className="n3">
            Display the output result in above output section once you <br />
            called the solution function and get the result.
          </p>
        </div>
      </div>
    </div>
  );
}
