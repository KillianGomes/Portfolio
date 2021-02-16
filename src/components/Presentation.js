import React, { Component ,Fragment } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

class Presentation extends Component {

    render() { 
        
        return (
            <Fragment>
            <div className="jumbotron jumbotron-fluid bg-dark">
                <div className="container text-center text-white">
                <h1 className="bg-dark text-white text-center">Mon CV <a className="text-white" id="download" href="CV.docx"> ...Download<i class="fas fa-file-download">.</i></a></h1>
                </div>
            </div>
                <div className="card-body text-center">
                    <img src="/images/cvo.jpg"></img>
                </div>
             </Fragment>
             );
    }
}
 
export default Presentation;