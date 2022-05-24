import { Route, Routes } from 'react-router-dom';
import './App.css';
import AnualReport from './components/AnualReport/AnualReport';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import InvestorRelations from './components/InvestorRelations/InvestorRelations';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/technologies' element={<Technologies />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/investorrelations' element={<InvestorRelations />}></Route>
        <Route path='/anualreport' element={<AnualReport />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
