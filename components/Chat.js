import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import ChatMessage from './ChatMessage';

import cannedChats from '../assets/messages.json';

const SAD_EMOJI = [55357, 56864];
const HAPPY_EMOJI = [55357, 56832];
const NEUTRAL_EMOJI = [55357, 56848];

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { chats: [] }
    
    this.scrollRef = React.createRef();
    this.chatContainer = React.createRef();
  }

  state = { chats: [] }

  componentDidMount() {
    this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: process.env.PUSHER_APP_CLUSTER,
      encrypted: true
    });

    this.channel = this.pusher.subscribe('chat-room');

    // new message event in pusher
    this.channel.bind('new-message', ({ chat = null }) => {
      console.log(chat);
      const { chats } = this.state;
      chat && chats.push(chat);
      const uniqueChats = this.filterChats(this.state.chats);
      this.setState({ chats: uniqueChats });
      this.scrollToBottom();
    });
    
    // fetch messages upon initial connection
    this.pusher.connection.bind('connected', () => {
      axios.post('/messages')
        .then(response => {
          const chats = response.data.messages;
          const uniqueChats = this.filterChats(chats);
          if(chats.length >= 1) {
            this.setState({ chats: uniqueChats });
          } else {
            this.setState({ chats: cannedChats.data });
          }
          
          
          this.scrollToBottom();
        });
    })
  }

  componentWillUnmount() {
    this.pusher.disconnect();
  }

  handleKeyUp = evt => {
    const value = evt.target.value;

    if (evt.keyCode === 13 && !evt.shiftKey) {
      const { activeUser: user } = this.props;
      const chat = { user, message: value, timestamp: +new Date };
      
      evt.target.value = '';
      axios.post('/message', chat);
    }
  }

  filterChats = (chats) => {
    let uniqueChats = [];
    let key = [];
    chats.map((chat) => {
      if (key[chat.timestamp] != 1) {
        key[chat.timestamp] = 1;
        uniqueChats.push(chat);
      }
    });
    return uniqueChats;
  }

  scrollToBottom = () => {
    this.chatContainer.current.scrollTo({
      top:this.scrollRef.current.offsetTop, 
      behavior: "smooth"
    })
  }
  // sentiment range: 17 to -17
  makeAFace = (sentiment) => {
      if(sentiment >= 16) {
        // console.log(">= 16");
          return '1f600';
      } else if (sentiment >= 14) {
        // console.log("> 14");
        return '1f60a';
      } else if (sentiment >= 10){
        // console.log("> 10");
        return '1f642';
      } else if (sentiment >= 5){
        // console.log("> 5");
        return '1f60f';
      } else if (sentiment == 0){
        // console.log("== 0");
        return '1f610';
      } else if (sentiment >= -5){
        // console.log(">= -5");
        return '1f928';
      } else if (sentiment >= -10){
        // console.log(">= -10");
        return '1f612';
      } else if (sentiment >= -14){
        // console.log(">= -14");
        return '1f623';
      } else if (sentiment >= -17){
        // console.log(">= -17");
        return '1f62b';
      }                    
    }
  

  render() {
    return (this.props.activeUser && <Fragment>
      <div className="border-bottom border-gray w-100 d-flex align-items-center bg-white" style={{ height: 90 }}>
      <div style={{ cursor: 'pointer' }}>
        <svg onClick={this.props.logOut} version="1.1" id="Capa_1" width="40px" height="40px" viewBox="0 0 477.175 477.175" enableBackground="new 0 0 477.175 477.175;" >
        <g>
          <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
            c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
        </g>
        </svg>
      </div>
        <h2 className="text-dark mb-0 mx-4 px-2">{this.props.activeUser}</h2>
      </div>
      <div ref={this.chatContainer} className="px-4 pb-4 w-100 d-flex flex-row flex-wrap align-items-start align-content-start position-relative" style={{ height: 'calc(100% - 180px)', overflowY: 'scroll' }}>
        {this.state.chats.map((chat, index) => {
          
          const previous = Math.max(0, index - 1);
          const previousChat = this.state.chats[previous];
          const position = chat.user === this.props.activeUser ? "right" : "left";

          const isFirst = previous === index;
          const inSequence = chat.user === previousChat.user;
          const hasDelay = Math.ceil((chat.timestamp - previousChat.timestamp) / (1000 * 60)) > 1;

          // sentiment # -> emoji
          // const mood = chat.sentiment > 0 ? HAPPY_EMOJI : (chat.sentiment === 0 ? NEUTRAL_EMOJI : SAD_EMOJI);
          const mood = this.makeAFace(chat.sentiment);
          
          return (
            <Fragment key={index}>
            {/* show emojis every message */}
              {/* { (isFirst || !inSequence || hasDelay) && ( */}
                <div className={`d-block w-100 font-weight-bold text-dark mt-4 pb-1 px-1 text-${position}`} style={{ fontSize: '0.9rem' }}>
                  <span className="d-block" style={{ fontSize: '1.6rem' }}>{String.fromCodePoint(`0x${mood}`)}</span>
                  <span>{chat.user || 'Anonymous'}</span>
                </div>
              {/* ) } */}
              <ChatMessage message={chat.message} position={position} />
            </Fragment>
          );
        })}
        <div style={{ float:"left", clear: "both" }}
             ref={this.scrollRef}>
        </div>

      </div>
      <div className="border-top border-gray w-100 pl-4 pr-2 d-flex align-items-center bg-light" style={{ minHeight: 90 }}>
        <textarea className="form-control px-3 py-2" onKeyUp={this.handleKeyUp} placeholder="Enter a chat message" style={{ resize: 'none' }}></textarea>
        <svg className="ml-2" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" width="50px" height="50px">
          <g>
            <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" fill="#000000"/>
          </g>
        </svg>  
      </div>
    </Fragment> )
  }

};

export default Chat;