
import React from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import RowList from "../../Components/Rows/RowList/RowList"
import Footer from "../../Components/Footer/Footer";
import "../../assets/css/bootstrap.css";

const Home= () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList/>
      <Footer />
    </>
  );
};

export default Home;
