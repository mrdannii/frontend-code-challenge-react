import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Productcard from "./components/Productcard"
import { useState, useEffect } from "react";


function App() {
  
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center  p-5">
    <span className="h1 text-lg">All Products</span>
      
      <div className="mb-0 grid text-center   lg:grid-cols-4 lg:text-left m-0">
        <Productcard
          name="sm"
          price="200"
          img="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        />
        
    
      </div>
    </main>
    <Footer/>
  </>
  );
}

export default App;
