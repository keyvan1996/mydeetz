import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpeg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Keyvan Shabani</a></h1>
              <span className="email"><i className="icon-mail"></i> keyvanshabani1996@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>

                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <h3>Connect with me!</h3>
                <li><a href="https://www.facebook.com/keyvan.shabani.7/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                {/* <li><a href="https://twitter.com/ddbarochiya" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                <li><a href="https://www.instagram.com/keyvan_shabani/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/keyvan-shabani/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/keyvan1996" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
              </small></p>
              <p><small>
                Something coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
