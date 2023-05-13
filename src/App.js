import React from 'react';
import NbaScores from './components/NbaScores';
import Navbar from './components/layout/Navbar';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TableUsers from './components/TableUsers/TableUsers';
import { SelectPlayers } from './components/SelectPlayers/SelectPlayers';
import AddUser from './components/AddUser/AddUser';
import EditUser from './components/EditUser/EditUser';
import ViewUser from './components/ViewUser/ViewUser';
import LoginPage from './components/LoginPage/LoginPage';
import TablePlayers from './components/TablePlayers/TablePlayers'
import ImageGif from './components/images/logoGif.gif';
import TablePlayers22 from './components/TablePlayers/TablePlayers22';
import TablePlayers21 from './components/TablePlayers/TablePlayers21';
import PredictStats from './components/Predict/PredictStats';
import Footer from './components/HeaderFooter/Footer';


function App() {
  
  return (
    <div className='touch-manipulation bg-cyan-100 h-screen'
    // style={{
    //   backgroundImage: "url(" + ImageGif + ")",
    //   backgroundSize: "cover",
    //   backgroundPosition: 'center',
    //   height: "100vh"
    // }}
    >
        <Navbar></Navbar>

        <Routes >
          <Route path='/' element ={ <HomePage /> } />
          <Route path='/home' element ={ <SelectPlayers /> } />
          <Route path='/users' element ={ <TableUsers /> } />
          <Route path='signup' element ={<AddUser/>}/>
          <Route path='/login' element ={<LoginPage/>}/>
          <Route path='/edituser/:id' element ={<EditUser/>}/>
          <Route path='/viewuser/:id' element ={<ViewUser/>}/>
          <Route path='/tableplayers' element ={<TablePlayers/>}/>
          <Route path='/tableplayers-22' element = {<TablePlayers22/>}/>
          <Route path='/tableplayers-21' element = {<TablePlayers21/>}/>
          <Route path='/predictstats' element = {<PredictStats/>}/>


          
        </Routes>
        <div>
          <Footer/>
        </div>
        
    </div>
    
    );
}


export default App;