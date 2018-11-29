import React, { Component, Fragment } from 'react';
import { Picker } from 'emoji-mart'

class Emoji extends Component {
    constructor(props) {
      super(props);
      this.state = { text: '' }
    }
  

    handleChange = (e) => {
        this.setState({ text: e.target.value })
      }
      addEmoji = (e) => {
        console.log(e.unified)
        if (e.unified.length <= 5){
          let emojiPic = String.fromCodePoint(`0x${e.unified}`)
          this.setState({
            text: this.state.text + emojiPic
          })
        } else {
          let sym = e.unified.split('-')
          let codesArray = []
          sym.forEach(el => codesArray.push('0x' + el))
          //console.log(codesArray.length)
          //console.log(codesArray)  // ["0x1f3f3", "0xfe0f"]
          let emojiPic = String.fromCodePoint(...codesArray)
          this.setState({
            text: this.state.text + emojiPic
          })
        }
      }

    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="Type a message here then hit ENTER"
                />
                </form>
                <span>
                <Picker onSelect={this.addEmoji} />
             </span>
             </div>
        );
    }
}

export default Emoji;