import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState('');
  const [text, setText] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    if(amount < 0)
    {
      amount = 1;
    }else if(amount > 8){
      amount = 8;
    }

    setText(data.slice(0,amount));

  }

  return (
      <section className = "section-center">
      
      <form className = "form"  onSubmit = {handleSubmit}>
      <h3>Lorem Ipsum Generator</h3>
      <label htmlFor= "amount">paragraph:</label>
      <input type = "number" name = "amount" onChange = {(e) => setCount(e.target.value)} value = {count}></input>
      <button className='btn'>generate</button>
      </form>
      <article>
      {text.map((item, index)=>{
        return <p key = {index}>{item}</p>
      })}
      </article>
      </section>

    )
}

export default App;
