import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return (
    <div>
     <footer className="page-footer teal">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Geek Text™ Book</h5>
                <p className="grey-text text-lighten-4">Thank you for visiting our page for the books in our store!</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Geek Text™</a>
            </div>
          </div>
        </footer>
    </div>
        );
    }
}


export default Footer;