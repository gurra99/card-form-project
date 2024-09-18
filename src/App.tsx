import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Layout } from "./components/structure/layout/layout";
import { AppContainer } from "./App.styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppContainer>
      <ToastContainer
        position={"top-left"}
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </AppContainer>
  );
}

export default App;
