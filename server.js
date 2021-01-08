const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/api/hello', (req, res) => {
//     res.send({message : 'Hello Express!'});
// });

app.get('/api/customers',(req, res) => {
    res.send([
        {
        id : 1,
        image:'https://placeimg.com/64/64/any',
        name : '홍길동',
        birthday:'11111',
        gender:'남자',
        job:'테스터1'
      },
      {
        id : 2,
        image:'https://placeimg.com/64/64/any',
        name : '이수빈',
        birthday:'222222',
        gender:'남자',
        job:'테스터2'
      },
      {
        id : 3,
        image:'https://placeimg.com/64/64/any',
        name : '이나리',
        birthday:'333333',
        gender:'여자',
        job:'테스터4'
      }
    ]);
})
app.listen(port, () => console.log(`Listening on port ${port}`));