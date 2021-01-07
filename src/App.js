import React, {Component}  from 'react';
import './App.css';
import Customer from './components/Customer'

const customers=[{
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
}]
class App extends Component {
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                />
            )
          })
        }
      </div>
    )
  }
}
 
export default App;
