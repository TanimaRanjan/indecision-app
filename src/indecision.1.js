console.log("In Todo JS")

const uuid = require('uuid/v4')
const moment = require('moment')
const React = require('react')
const ReactDOM = require('react-dom')


const app = {
    title:"Indecision App", 
    subTitle: "Let the computer decide for you", 
    option: []
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.option.push(option)
        e.target.elements.option.value = ''
        
    }
    renderOptions()
}

const removeAll = (e) => {
    e.preventDefault()
    app.option = []
    renderOptions()
}


const OnMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.option.length)
    const option = app.option[randomNum]
    console.log(option)
}
const renderOptions = () => {
// Adding Header 
const App = () => { 
    return  <div> <h1>{app.title.toUpperCase()}</h1>
      {app.subTitle && <h2>{app.subTitle}</h2>}
      {app.option.length > 0 ?  
          <p>Here are your options</p>:
          <p>You have no options</p>
      }
       <p>You have {app.option.length} option{app.option.length > 1 && 's'}</p>
      
     <button disabled={app.option.length === 0} onClick={OnMakeDecision}>What Should I do ?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
      {
            app.option.map((option) => <li key={uuid()}>{option}</li> )
      }
        </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
      </form>
  </div> 
}


ReactDOM.render(<App /> , document.querySelector('#indecision-head'));
}

renderOptions();

