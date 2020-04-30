import React, {Component} from 'react';


class Home extends Component{
    render(){
        return(
            <div>
            <div id="myhome">
            </div>
            <div className="home-content">
                <div className="home-content-info">
                    <h3 className="font-weight-bold">Simple personal blog</h3>
                    <p>This app was built using MongoDB, Express.js, React and Node.<strong>(MERN)</strong><br/> 
                    </p>
                    <h7><strong>Features:</strong></h7>
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item" style={{backgroundColor:'transparent'}}>Basic CRUD operation</li>
                         <li className="list-group-item" style={{backgroundColor:'transparent'}}>User authentication using Okta-react</li>
                         <li className="list-group-item" style={{backgroundColor:'transparent'}}>Create posts with a picture, which gets store in our local server using Multer</li>
                         
                            
                    </ul>   
                </div>
            </div>
            </div>
        )
    }
}

export default Home;