import React, { useState}from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ApiBookSearch from './components/ApiBookSearch';
import SignInAndUp from './components/SignInAndUp';


function App() {



  return (
    <div className="main-app">
      <Header />
      <main class="homepage-main">

      <section className="homepage-left">
              
              <ApiBookSearch buttonName="Search" />

      </section>
      
      <SignInAndUp />

        
      </main>
        
        

    </div>
  );
}

export default App;
