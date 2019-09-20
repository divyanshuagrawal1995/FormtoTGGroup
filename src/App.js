import './App.css';

import React, { Component } from 'react'

const url = 'https://api.telegram.org/bot';
const apiToken = 'api-token';// unable to login


 class App extends Component {

  state={
    message:'',
    chatId:''
  }

onChange(e)
{
 this.setState({
   [e.target.name]:e.target.value
 })
}

onSubmit(e)
{
  const {message,chatId}=this.state
  e.preventDefault()

  axios.post('https://localhost:5000/chatbot',{
    message,
    chatId
  })
  .then(res=>{
    console.log(res.data)
    
    if(message.match(/hello/gi))
    {
      axios.post(`${url}${apiToken}/sendMessage`,
    {
         chat_id: chatId,
         text: 'hello back'
    })
    .then((response) => { 
         console.log(response)
    }).catch((error) => {
         res.send(error);
    });
    }
    
  })


}


  render() {
    return (
      <div>
          
          <form onSubmit={this.submit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Message</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter message" onChange={this.onchange.bind(this)} value={this.state.message} name="message"/>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter message" onChange={this.onchange.bind(this)} value={this.state.chatId} name="chatId"/>

  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      </div>
    )
  }
}

export default App


