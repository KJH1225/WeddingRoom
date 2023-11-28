import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import MyPage from './pages/Mypage/Mypage';
import MyPage2 from './pages/Mypage/Mypage2';
import './App.css';
import Exp from './pages/Experience/Exp/Exp';
import Exp1 from './pages/Experience/Exp1/Exp1';
import Exp2 from './pages/Experience/Exp2/Exp2';
import Exp3 from './pages/Experience/Exp3/Exp3';
import Product from './pages/Products/Product'
import ProdDetail from './pages/Products/ProdDetail';
import Wedding from './pages/Wedding/Wedding';
import Party from './pages/Party/Party';
import Login from './pages/Login/Login'
import Join from './pages/Join/Join'
import Joininput from './pages/Join/Join-input';
import Invitation from './pages/Mypage/Mypage3';
import About from './pages/About/About/About';
import About1 from './pages/About/About1/About1';
import Reservations from './pages/Reservations/Reservations';
import SangDam from './pages/Reservations/SangDam';
import SangDam2 from './pages/Reservations/SangDam/SangDam2';
import Date from './pages/Reservations/Reservations/Date';
import DateCal from './pages/Reservations/Reservations/DateCal';
import Time from './pages/Reservations/Reservations/Time';
import Month from './pages/Reservations/Reservations/Month';
import Holl from './pages/Reservations/Reservations/Holl';
import Ceremony from './pages/Reservations/Information';
import Customer from './pages/Customer/Customer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myPage' element={<MyPage />} />
        <Route path='/myPage2' element={<MyPage2 />} />
        <Route path='/mypage3' element={<Invitation />} />
        <Route path='/exp' element={<Exp />} />
        <Route path='/exp1' element={<Exp1 />} />
        <Route path='/exp2' element={<Exp2 />} />
        <Route path='/exp3' element={<Exp3 />} />
        <Route path='/product/:id/:id' element={<ProdDetail />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/wedding/:id' element={<Wedding />} />
        <Route path='/party' element={<Party />} />
        <Route path='/about' element={<About />} />
        <Route path='/about1' element={<About1 />} />
        <Route path='/join' element={<Join />} />
        <Route path='/join-input' element={<Joininput />} />
        <Route path='/faq' element={<Customer />} />
        <Route path='/Reservations' element={<Reservations />} />
        <Route path='/SangDam' element={<SangDam />} />
        <Route path='/SangDam2' element={<SangDam2 />} />
        <Route path='/Date' element={<Date />} />
        <Route path='/Time' element={<Time />} />
        <Route path='/Month' element={<Month />} />
        <Route path='/DateCal' element={<DateCal />} />
        <Route path='/Holl' element={<Holl />} />
        <Route path='/ceremony' element={<Ceremony />} />
      </Routes>
      <Footer />
    </div>
    
  );
}



export default App;
