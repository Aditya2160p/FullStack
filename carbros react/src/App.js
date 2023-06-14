import './App.css';
import Login from './Pages/Login'
import { Routes,Route } from 'react-router-dom';
import Appbar from './Components/AppBar';
import Home from './Pages/home';
import AdminAllcars from './Pages/AdminAllCars';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Pages/results';
import AddCars from './Pages/Addcars';
import EditCars from './Pages/EditCar';
import Allcars from './Pages/All_cars';
function App() {
 const Email=localStorage.getItem("Email")
  console.log(Email)
  return (
    <>
    <Routes>
      <Route path="/" element={<Appbar />}>
        <Route index element={<Home />}/>
        <Route path="/AdminAllCars" element={<AdminAllcars />} />
        <Route path="/AllCars" element={<Allcars />} />
        <Route path="/Addcar" element={<AddCars />} />
        <Route path="/Editcar/:vehicleId" element={<EditCars />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/result" element={<Result />}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;