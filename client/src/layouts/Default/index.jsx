import React, { useEffect } from "react";
import { connect } from "react-redux";

import Sidebar from "../../containers/Sidebar";
import Header from "../../components/Header";
import View from "../../containers/View";
import Footer from "../../containers/Footer";

import { getGenres } from "../../store/actions/genres";

import "./style.css";

const Default = ({ getGenres }) => {
  useEffect(() => {
    getGenres();
  }, [getGenres]);
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <View />
        <Footer />
      </div>
    </div>
  );
};

export default connect(() => ({}), { getGenres })(Default);
