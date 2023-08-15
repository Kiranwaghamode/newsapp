
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {

  const [progress, setprogress] = useState(0);




    return (
        
        <BrowserRouter>
        <Navbar/>
            <LoadingBar
            color='#f11946'
            progress={progress}
            height={3}
            />
          <Routes>
            <Route exact path="/"  element={<News setprogress={setprogress}  key="general" country='in' category={'general'}/>}/>
            <Route exact path="/business"  element={<News setprogress={setprogress}  key="business" country='in' category='business'/>}/>
            <Route exact path="/entertainment"  element={<News setprogress={setprogress}  key="entertainment" country='in' category='entertainment'/>}/>
            <Route exact path="/health"  element={<News setprogress={setprogress}  key="health" country='in' category={'health'}/>}/>
            <Route exact path="/science"  element={<News setprogress={setprogress}  key="science" country='in' category={'science'}/>}/>
            <Route exact path="/sports"  element={<News setprogress={setprogress}  key="sports" country='in' category={'sports'}/>}/>
            <Route exact path="/technology"  element={<News setprogress={setprogress}  key="technology" country='in' category={'technology'}/>}/>
          </Routes>
    </BrowserRouter>
      
    )
  }


  export default App;
  