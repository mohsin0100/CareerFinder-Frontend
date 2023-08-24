import React from 'react';
import wordpress from './images/wordpress.jpg'
import developer from './images/developer.jpg'
import web from './images/webb.jpg'
import ios from './images/IOS.jpg'
import Footer from './Footer';
function Home() {
  return (
    <div>
        <h1 className='heading'>Trending services</h1>
        <p className='sub-text'>Search all the open positions on the web. Get your own personalized salary estimate.<br/>Read reviews on over 30000+ companies worldwide.</p>
        <br/><br/>
        <div class='row'>
            <div class='col-sm-2 col-md-2 col-lg-2'></div>
            <div className='col-sm-2 col-md-2 col-lg-2'> <img src={wordpress}height={'250px'}width={'250px'} className='img' /></div>
            <div className='col-sm-2 col-md-2 col-lg-2'> <img src={web}height={'250px'}width={'250px'} className='img' /></div>
            <div className='col-sm-2 col-md-2 col-lg-2'> <img src={developer}height={'250px'}width={'250px'} className='img' /></div>
            <div className='col-sm-2 col-md-2 col-lg-2'> <img src={ios}height={'250px'}width={'250px'} className='img' /></div>
            <div class='col-sm-1 col-md-1 col-lg-1'></div>
        </div>
        <br></br>
        <div>
            <h1 className='heading'>Popular Jobs</h1>
            <p className='sub-text'>Search all the open positions on the web. Get your own personalized salary estimate.<br/>Read reviews on over 30000+ companies worldwide.</p>
        </div>
{/* job listing 1 */}
        <div class="container">
            <div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2"></div>
                <div class="col-sm-8 col-md-8 col-lg-8">
                    <div class="card card-1">
                        <h3>Web Designer</h3>
                        <table className='card-text'>
                                <tr>
                                    <th>Job type <br/>Part time</th>
                                    <th>Location<br/>Isb</th>
                                    <th>Salary: <br/>25-30k</th>
                                    <th><button class='btn btn-primary'>Apply now</button></th>
                                </tr>
                        </table>
                    </div>
                </div>
    
            </div>
        </div>
        <br></br><br></br>
{/* job listing 2 */}
        <div class="container">
            <div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2"></div>
                <div class="col-sm-8 col-md-8 col-lg-8">
                    <div class="card card-2">
                        <h3>App Developer</h3>
                        <table className='card-text'>
                                <tr>
                                    <th>Job type <br/>Remote</th>
                                    <th>Location<br/>Karachi</th>
                                    <th>Salary: <br/>60-70k</th>
                                    <th><button class='btn btn-primary'>Apply now</button></th>
                                </tr>
                        </table>
                    </div>
                </div>
    
            </div>
        </div>
        <br></br><br></br>
{/* job listing 3 */}
        <div class="container">
            <div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2"></div>
                <div class="col-sm-8 col-md-8 col-lg-8">
                    <div class="card card-3">
                        <h3>IOS Developer</h3>
                        <table className='card-text'>
                                <tr>
                                    <th>Job type <br/>Full time</th>
                                    <th>Location<br/>Lahore</th>
                                    <th>Salary: <br/>80-90k</th>
                                    <th><button class='btn btn-primary'>Apply now</button></th>
                                </tr>
                        </table>
                    </div>
                </div>
    
            </div>
        </div>
        <br></br><br></br>
{/* job listing 4 */}
        <div class="container">
            <div class="row">
                <div class="col-sm-2 col-md-2 col-lg-2"></div>
                <div class="col-sm-8 col-md-8 col-lg-8">
                    <div class="card card-1">
                        <h3>Web Designer</h3>
                        <table className='card-text'>
                                <tr>
                                    <th>Job type <br/>Full time</th>
                                    <th>Location<br/>Isb</th>
                                    <th>Salary: <br/>40-60k</th>
                                    <th><button class='btn btn-primary'>Apply now</button></th>
                                </tr>
                        </table>
                    </div>
                </div>
    
            </div>
        </div><br/><br/>
        <div>
            <h1 className='heading'>Questions And Answers</h1>
            <p className='sub-text'>Search all the open positions on the web. Get your own personalized salary<br/> estimate. Read reviews on over 30000+ companies worldwide.</p>
        </div>
        <br/><br/>

        <div className='row'>
            <div className='col-sm-2 col-md-2 col-lg-2'></div>
            <div className='col-sm-4 col-md-4 col-lg-4'>
                <h5 className='heading'>How our CareerFinder work?</h5>
                <p className='sub-text'>Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                <br/><br/>
                <h5 className='heading'>How to make unlimited data entry ?</h5>
                <p className='sub-text'>Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                
            </div> <br/> <br/>

            <div className='col-sm-4 col-md-4 col-lg-4'>
                <h5 className='heading'>What is the main process open account ?</h5>
                <p className='sub-text'>Words is random, the reader will not be distracted from making a neutral judgement on the visual impact.It makes cash deposition and withdrawal easy and safe.</p>
                <br/><br/>
                <h5 className='heading'>Is Jobstack safer to use with my account ?</h5>
                <p className='sub-text'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
            </div>
            <div className='col-sm-2 col-md-2 col-lg-2'></div>
        </div>
        <Footer/>

      
    </div>

  )
}

export default Home
