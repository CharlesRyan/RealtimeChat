import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Chat from '../components/Chat';
import Layout from '../components/Layout';
// import Emoji from '../components/Emoji';

// import { Transition } from 'react-transition-group';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null, 
                  value: '', 
                  showChat: false,
                  entered: false }
    // this.state = { user: 'user', value: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.logOut = this.logOut.bind(this)
    
    this.inputRef = React.createRef();
  }

// transition settings

  duration = 1000;

  defaultStyle = {
    transition: `opacity ${this.duration}ms ease-in-out`,
    opacity: 0,
  }

  transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
  };



  handleKeyUp = evt => {
    if (evt.keyCode === 13) {
      // const user =  evt.target.value;
      // this.setState({ user, open: true });
      this.logIn();
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  flashInput = () => {
    const input = this.inputRef.current;
    input.style.background = 'rgba(255,0,0,0.2)';
    setTimeout(() => { input.style.background = 'none'; }, 100);
    setTimeout(() => { input.style.background = 'rgba(255,0,0,0.2)'; }, 200);
    setTimeout(() => { input.style.background = 'none'; }, 300);
  }

  // username checking?
  logIn = () => {
    if(this.state.value) {
      this.setState({ user: this.state.value, showChat: true, value: "" });
    } else{
      this.flashInput();
    } 
  }
  
  logOut = () => {
    this.setState({ user: null, showChat: false });
  }
  
  render() {
    const { user } = this.state;

    return (
      <Layout pageTitle="Realtime Chat">
      {/* <Emoji></Emoji> */}
        <main className="container-fluid position-absolute h-100 bg-dark">
          <div className="row position-absolute w-100 h-100">
          
          { !user &&
            <section className="col-md-8 col-sm-10 d-flex flex-row flex-wrap align-items-center align-content-center px-sm-5 px-3">
              <div className="mx-auto">
              {/* <div className="px-5 mx-5"> */}

                <span className="d-block w-100 h1 text-light" style={{marginTop: -50}}>
                  { user ? <span><span style={{color: '#999'}}>Hello!</span> {user}</span> : `What is your name?` }
                </span>
                { !user && <div className="d-flex align-items-end">
                              <input type="text" ref={this.inputRef} value={this.state.value} onChange={this.handleChange} className="form-control mt-3 px-3 py-2" onKeyUp={this.handleKeyUp} autoComplete="off" style={{ background: 'transparent', color: '#999', border: 0, borderBottom: '1px solid #666', borderRadius: 0, fontSize: '3rem', fontWeight: 500, boxShadow: 'none !important' }} /> 
                              <svg style={{ cursor: 'pointer'}} onClick={this.logIn} className="ml-2 ml-sm-3 mb-2 mb-sm-3" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" width="50px" height="50px">
                                <g>
                                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" fill="#FFFFFF"/>
                                </g>
                              </svg>  
                            </div>
                            }
              </div>
            </section>
          }
            { user &&
            // <Transition
            // in={this.state.showChat}
            // timeout={this.duration}
            // unmountOnExit
            // style={{
            //   ...this.defaultStyle,
            //   ...this.transitionStyles[this.state]}}
            // > 
              <div className="w-100 d-flex justify-content-end">
                <section className="col-md-4 position-relative d-flex flex-wrap h-100 align-items-start align-content-between bg-white px-0">
                  {/* { user && <Chat activeUser={user} /> } */}

                  <Chat activeUser={user} logOut={this.logOut} /> 
                </section>
              </div>
            // </Transition>
          } 
          </div>
        </main>
      </Layout>
    );
  }

};

export default () => (
  <IndexPage />
); 