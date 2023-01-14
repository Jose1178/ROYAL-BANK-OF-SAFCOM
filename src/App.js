
import './App.css';
import  Header from './components/Header'
import Search from './components/Search';
import Table from './components/Table';
import Input from './components/Input';
//import React, {useState} from 'react';

function App() {
  //const[transactions, setTransaction] = useState([])
  return (
    <div className='container'>
        <Header />
        <Search />
        <Input />
        <Table/>
     
    </div>

   
  );
}

export default App;
