const express = require('express');
const app = express();
const path = require('path');

app.get('/',(request, response)=>{
  return response.send('Hello Word Wesleson');
});

app.listen(process.env.PORT || 3000);


