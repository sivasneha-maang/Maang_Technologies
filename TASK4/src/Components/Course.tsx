import React, { FC } from 'react';
import './main.css';

interface CourseProps {
  items: {
    subject: string;
    value: string[];
  };
}

const Course: FC<CourseProps> = ({ items }) => {
  return (
    <div className='container'>
      <h2>A complete list of 11 Plus {items.subject} Practice Papers</h2>
      <p>
        Below is the most complete and up-to-date list of all free 11 Plus {items.subject} practice papers available on the internet. All of these 11+ {items.subject} practice papers are in pdf format and we have provided the answers where possible.
      </p>

      <h2>11 Plus {items.subject} Practice Papers</h2>
      <div className='container'>
        <div>
          <h2>11 Plus {items.subject} Practice Papers – Private/Independent School</h2>
          <h3>Aldenham School</h3>
          <ol>
            <li>
              <a href={items.value[0]} target='__blank'>Aldenham School 11 Plus {items.subject} Sample Paper 1</a>
            </li>
            <li>
              <a href={items.value[1]} target='__blank'>Aldenham School 11 Plus {items.subject} Sample Paper 2</a>
            </li>
            <li>
              <a href="/" target='__blank'>Aldenham School 11 Plus {items.subject} Paper 2020</a>
            </li>
            <li>
              <a href="/" target='__blank'>Aldenham School 11 Plus {items.subject} Paper 2022</a>
            </li>
            <li>
              <a href="/" target='__blank'>Aldenham School 11 Plus {items.subject} Paper 2023</a>
            </li>
          </ol>
        </div>
        <div>
          <h3>Alleyns</h3>
          <ol>
            <li>
              <a href="/" target='__blank'>Alleyns 11 Plus {items.subject} Sample Paper 1</a>
            </li>
            <li>
              <a href="/" target='__blank'>Alleyns 11 Plus {items.subject} Sample Paper 2</a>
            </li>
          </ol>
        </div>
        <div>
          <h3>Bancroft’s School</h3>
          <ol>
            <li>
              <a href="/">Bancroft’s School 11 Plus {items.subject} Sample Paper 1</a>
            </li>
            <li>
              <a href="/">Bancroft’s School 11 Plus {items.subject} Sample Paper 2016</a>
            </li>
            <li>
              <a href="/">Bancroft’s School 11 Plus {items.subject} Writing Task 2 2022</a>
            </li>
          </ol>
        </div>
        <div>
          <h3>City of London School</h3>
          <ol>
            <li>
              <a href="/">City of London School 11 Plus English Sample Paper 2018</a>
            </li>
            <li>
              <a href="/">City of London School 11 Plus English Specimen Paper</a>
            </li>
            <li>
              <a href="/">City of London School 11 Plus English Specimen Paper Group 2</a>
            </li>
          </ol>
        </div>
        <div>
          <h3>Dulwich College</h3>
          <ol>
            <li>
              <a href="/">Dulwich College 11 Plus English Specimen Paper A</a>
            </li>
            <li>
              <a href="/">Dulwich College 11 Plus English Specimen Paper A 2023 – Mark Scheme</a>
            </li>
            <li>
              <a href="/">Dulwich College 11 Plus English Specimen Paper C 2023</a>
            </li>
          </ol>
        </div>
        <div>
          <h3>Eltham College</h3>
          <ol>
            <li>
              <a href="/">Eltham College 11 Plus English Sample Paper 2020</a>
            </li>
            <li>
              <a href="/">Eltham College 11 Plus English Sample Paper 2023</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Course;