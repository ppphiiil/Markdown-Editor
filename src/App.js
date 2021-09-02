
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from "react-bootstrap"
import Markdown from './Markdown';
import Previewer from './Previewer';


function App() {

  const[text,setText]=useState("");
  console.log(text);


  return (
    <div className="container">
    {/* Header */}
        <div className="jumbotron">
          <h1  className="text-center" > <Badge variant="secondary">Markdown Editor</Badge>{' '}</h1>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-5 text-center">
          <h2><Badge variant="success">Markdown</Badge></h2>
        <Markdown text={text} setText={setText}/>
          </div>

          <div className="col-md-5 text-center">
         <h2> <Badge variant="warning">Previewer</Badge></h2>
          <Previewer text={text} />
          </div>
        </div>
 
    
    </div>
  );
}


export default App;