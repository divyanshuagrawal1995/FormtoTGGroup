const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.post('/chatbot', (req, res) => {


    const chatId=req.body.message.chatId
    const sentMessage=req.body.message.text
    console.log(req.body)
    res.json(
    chatId,
    sentMessage
    )
    
     
});
const port=5000
app.listen(port, () => {
     console.log(`Listening on port ${port}`);
});;