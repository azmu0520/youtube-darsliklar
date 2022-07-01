import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import { data } from '../utilits/navbar';
const Root = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {data?.map(({ id, path, Component }) => (
          <Route path={path} element={<Component />} />
        ))}
        <Route path='/' element={<Home />} />
      </Route>
      <Route path={'*'} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
