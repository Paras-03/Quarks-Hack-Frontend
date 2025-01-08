import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './components/Header'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar';
import MainComponent from './components/MainComponent';

export default function App() {
  return (
    <>
      <LeftSideBar />
      <Header />
      
        <MainComponent />
      <RightSideBar />
    </>
  );
}
