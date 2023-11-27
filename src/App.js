// Version 6
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import JobDetail from './Component/JobDetail/JobDetail';
import Login from './Component/Home/Navbar/Login';
import BrowseJobs from './Component/BrowseJobs/BrowseJobs';
import Privacy from './Component/Pages/Privacy';
import AboutUs from './Component/Pages/AboutUs';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobdetail/:id_name' element={<JobDetail />} />
          <Route path='/login' element={<Login />} />
          <Route path="/browseJobs" element={<BrowseJobs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;








// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Home from './Component/Home/Home';
// import JobDetail from './Component/JobDetail/JobDetail';
// import Login from './Component/Home/Navbar/Login';
// import BrowseJobs from './Component/BrowseJobs/BrowseJobs';
// import Privacy from './Component/Pages/Privacy';
// import AboutUs from './Component/Pages/AboutUs';
// import Contact from './Component/Contact/Contact';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className='container'>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/jobdetail/:id_name' element={<JobDetail />} />
//           <Route path='/login' element={<Login />} />
//           <Route path="/browseJobs" element={<BrowseJobs />} />
//           <Route path="/privacy" element={<Privacy />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;








// // import React from 'react'
// // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// // import "./App.css";
// // import Home from "./Component/Home/Home";
// // import JobDetail from './Component/JobDetail/JobDetail';
// // import Login from './Component/Home/Navbar/Login';
// // function App() {
// //   return (

// //     <BrowserRouter>
// //       <div className='container'>
// //         <Routes>
// //           <Route exact path="/" element={<Home />} />

// //           <Route path="/jobdetail/:id_name" element={<JobDetail />} />

// //           <Route path="/login" component={Login} />
// //         </Routes>

// //       </div>

// //     </BrowserRouter>
// //   )
// // }

// // export default App;