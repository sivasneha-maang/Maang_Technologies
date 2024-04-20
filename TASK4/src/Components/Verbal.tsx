import React from 'react'
import V1 from './pdf/V1.pdf'
import V2 from './pdf/V2.pdf'


export default function Verbal() {
  return (
    <div className='container'>

      <h3>A complete list of 11 Plus Verbal Reasoning Practice Papers</h3>
      <p>Below is the most complete and up-to-date list of all free 11 Plus Verbal Reasoning practice papers available on the internet. All of these 11+ Verbal Reasoning practice papers are in pdf format and we have provided the answers where possible.</p>
      <div className='container'>
        <h3>11 Plus Verbal Reasoning Practice Papers – Private/Independent School</h3>
        <p>Most 11+ Verbal Reasoning papers from Private/Independent schools tend to follow the GL 11+ exam specification.</p>
        <h4>The Perse Upper School</h4>
        <ol>
          <li><a href="/">The Perse Upper School 11 Plus Verbal Reasoning Sample Paper</a></li>
        </ol>
      </div>
      <div className="container">
        <h3>11 Plus Verbal Reasoning Practice Papers – Grammar School</h3>
        <h4>Stockport Grammar School</h4>
        <ol>
          <li><a href={V1} target='__blank'> Stockport Grammar School 11 Plus Verbal Reasoning Sample Paper</a></li>
          <li><a href="/">Stockport Grammar School 11 Plus Verbal Reasoning Sample Paper – Mark Scheme</a></li>
        </ol>

        <h3>11 Plus Verbal Reasoning Practice Papers – Exam Boards</h3>
        <h4>GL 11+</h4>
        <ol>
          <li><a href={V2} target='__blank'>GL 11+ Verbal Reasoning Familiarisation Paper 1</a></li>
          <li><a href="/">GL 11+ Verbal Reasoning Familiarisation Paper 2</a></li>
          <li><a href="/">GL 11+ Verbal Reasoning Familiarisation Paper 3</a></li>
          <li><a href="/">GL 11+ Verbal Reasoning Familiarisation Paper – Mark Scheme</a></li>
        </ol>

        <h4>CGP 11+</h4>
        <ol>
          <li><a href="/">CGP 11 Plus Verbal Reasoning Paper for CEM 11+</a></li>
          <li><a href="/">CGP 11 Plus Verbal Reasoning Paper for CEM 11+ – Mark Scheme</a></li>
          <li><a href="/">CGP 11 Plus Verbal Reasoning Paper 1 for GL 11+</a></li>
          <li><a href="/">CGP 11 Plus Verbal Reasoning Paper 1 for GL 11+ – Mark Scheme</a></li>
        </ol>
      </div>
    </div>
  )
}