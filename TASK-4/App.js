/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { useState } from 'react';


function App() {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const [message, setMessage] = useState(<Body />)

  const [menuOpen, setMenuOpen] = useState(false)

  function handleEnglish(){
    setMessage(
      <>
        <h1 className='heading1'><b>FREE 11+ ENGLISH PRACTICE PAPERS</b></h1>
        <img className='dd-img' src='https://previews.123rf.com/images/andriano/andriano1705/andriano170500336/78481125-top-view-of-student-is-sitting-on-wood-floor-with-laptop-study-and-education-concept.jpg' alt='english' />
        <h2 className='heading2'><b>A complete list of 11 Plus English Practice Papers</b></h2>
        <p className='para'>Below is the most complete and up-to-date list of all free 11 Plus English practice papers available on the internet.
         All of these 11+ English practice papers are in pdf format and we have provided the answers where possible.</p>
        <h2 className='heading2'>Aldenham School</h2>
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>1.Aldenham School 11 plus English Sample Paper 1</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>2.Aldenham School 11 plus English Sample Paper 2</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>3.Aldenham School 11 plus English Paper 2020</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>4.Aldenham School 11 plus English Paper 2022</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>5.Aldenham School 11 plus English Paper 2023</a><br />
      </>
    )
    setIsDropDownOpen(false)
  }

  function handleMaths() {
    setMessage(
      <>
        <h1 className='heading1'><b>FREE 11+ MATHS PRACTICE PAPERS</b></h1>
        <img className='dd-img' src='https://previews.123rf.com/images/andriano/andriano1705/andriano170500336/78481125-top-view-of-student-is-sitting-on-wood-floor-with-laptop-study-and-education-concept.jpg' alt='english' />
        <h2 className='heading2'><b>A complete list of 11 Plus Maths Practice Papers</b></h2>
        <p className='para'>Below is the most complete and up-to-date list of all free 11 Plus Maths practice papers available on the internet.
          All of these 11+ Maths practice papers are in pdf format and we have provided the answers where possible.</p>
        <h2 className='heading2'>Aldenham School</h2>
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>1.Aldenham School 11 plus Maths Sample Paper 1</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>2.Aldenham School 11 plus Maths Sample Paper 2</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>3.Aldenham School 11 plus Maths Paper 2020</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>4.Aldenham School 11 plus Maths Paper 2022</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>5.Aldenham School 11 plus Maths Paper 2023</a><br />
      </>
    )
    setIsDropDownOpen(false)
  }

  function handleVerbal() {
    setMessage(
      <>
        <h1 className='heading1'><b>FREE 11+ VERBAL REASONING PRACTICE PAPERS</b></h1>
        <img className='dd-img' src='https://previews.123rf.com/images/andriano/andriano1705/andriano170500336/78481125-top-view-of-student-is-sitting-on-wood-floor-with-laptop-study-and-education-concept.jpg' alt='english' />
        <h2 className='heading2'><b>A complete list of 11 Plus Verbal Reasoning Practice Papers</b></h2>
        <p className='para'>Below is the most complete and up-to-date list of all free 11 Plus Verbal Reasoning practice papers available on the internet.
          All of these 11+ Verbal Reasoning practice papers are in pdf format and we have provided the answers where possible.</p>
        <h2 className='heading2'>Aldenham School</h2>
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>1.Aldenham School 11 plus Verbal Reasoning Sample Paper 1</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>2.Aldenham School 11 plus Verbal Reasoning Sample Paper 2</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>3.Aldenham School 11 plus Verbal Reasoning Paper 2020</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>4.Aldenham School 11 plus Verbal Reasoning Paper 2022</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>5.Aldenham School 11 plus Verbal Reasoning Paper 2023</a><br />
      </>
    )
    setIsDropDownOpen(false)
  }


  function handleNonVerbal() {
    setMessage(
      <>
        <h1 className='heading1'><b>FREE 11+ NON-VERBAL REASONING PRACTICE PAPERS</b></h1>
        <img className='dd-img' src='https://previews.123rf.com/images/andriano/andriano1705/andriano170500336/78481125-top-view-of-student-is-sitting-on-wood-floor-with-laptop-study-and-education-concept.jpg' alt='english' />
        <h2 className='heading2'><b>A complete list of 11 Plus Non-Verbal Reasoning Practice Papers</b></h2>
        <p className='para'>Below is the most complete and up-to-date list of all free 11 Plus Non-Verbal Reasoning practice papers available on the internet.
          All of these 11+ Non-Verbal Reasoning practice papers are in pdf format and we have provided the answers where possible.</p>
        <h2 className='heading2'>Aldenham School</h2>
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>1.Aldenham School 11 plus Non-Verbal Reasoning Sample Paper 1</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>2.Aldenham School 11 plus Non-Verbal Reasoning Sample Paper 2</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>3.Aldenham School 11 plus Non-Verbal Reasoning Paper 2020</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>4.Aldenham School 11 plus Non-Verbal Reasoning Paper 2022</a><br />
        <a className='tag' href='https://media.abacus11plus.co.uk/file/11PlusEnglishPracticePapers/Aldenham-School-Sample-Paper-1.pdf' target='blank'>5.Aldenham School 11 plus Non-Verbal Reasoning Paper 2023</a><br />
      </>
    )
    setIsDropDownOpen(false)
  }

  return (
      <div className="App">
        <>
          <Navbar  />

        <nav className='header'>
          <div className='header--img'>
            <img title='Star Gleam Education - Star Gleam Phonics Classes' src="data:image/png;base64,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" alt='StarGleamEducation' />
          </div>

          <div 
            className='res--menu' 
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            >
              <span></span>
              <span></span>
              <span></span>
          </div>

          <div className='header--menu'>
            <ul className={menuOpen ? 'open' : ''}>
              <li>ABOUT US</li>
              <li>COURSES</li>
              {/*<Dropdown />*/}
              <li onMouseOver={() => setIsDropDownOpen(true)} onMouseOut={() => setIsDropDownOpen(false)}>
                FREE 11+ RESOURCES ▼ {isDropDownOpen && (
                  <div className="dropdown-content">
                    <div className="dropdown-items" >
                      <p className="dropdown-item" onClick={handleEnglish}>
                        Free 11+ Practice English<br /> Papers
                      </p>
                      <p className="dropdown-item" onClick={handleMaths}>
                        Free 11+ Practice Maths<br /> Papers
                      </p>
                      <p className="dropdown-item" onClick={handleVerbal}>
                        Free 11+ Practice Verbal <br />Reasoning Papers
                      </p>
                      <p className="dropdown-item" onClick={handleNonVerbal}>
                        Free 11+ Practice Non-Verbal <br />Reasoning Papers
                      </p>
                    </div>
                  </div>
                )}
              </li>
              <li>OUR TEAM</li>
              <li>TESTIMONIALS</li>
              <li>EXAM TIMER</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </nav>
           
        <p> {message}</p>
        
        </>
      </div>
  );
}

export default App;




