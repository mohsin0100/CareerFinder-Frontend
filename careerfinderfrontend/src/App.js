
import { 
    BrowserRouter as Router,
    Route,
    Routes,
 } from 'react-router-dom';
import './App.css';
import Header from './Components/Header ';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <div className="App" >
        <div>
          <Header/><br/><br/><br/><br/>
          <h1 className='main-text'>Find And Hire Experts<br/> For Any Job</h1>
          <p className='sub-text'>Find Jobs, Employment & Career Opportunities.Some of the companies<br/> we've helped recruit excellent applicants over the years.</p>
          <br/><br/>
          <div>
            <div className='reserve-form col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              <form>
                <div className='row'>
                  <div className='form-group col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'></div>
                  <div className='form-group col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                    <input class="form-control" type="text" placeholder="Search your job here"/>
                  </div>
                  <div className='form-group col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                  <select class="form-control" placeholder='Select your Location'>
                    <option>Islamabad</option>
                    <option>Lahore</option>
                    <option>Karachi</option>
                  </select>
                  </div>
                  <div className='form-btn col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                    <button class="submit-btn">Search Job</button>
                  </div>
                </div> 


              </form>
              
            </div>
          </div>
          <h2 className='white-text'>Popular searches:</h2><p className='sub-text'>Designer, Developer, IOS </p>
        </div>
      </div>
      <Routes>
        <Route path="Home" element={<Home/>}/>
    </Routes>
    </Router>
  );
}

export default App;
