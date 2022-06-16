import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import "./App.css";
import Models from "./components/Models/Models";

const App = () => {
  let users = [
    {
      name: "Ilim",
      lastName: "Kushbekov",
      age: 20,
      id: 1,
    },
    {
      name: "Ilim",
      lastName: "Kushbekov",
      age: 20,
      id: 2,
    },
  ];

  return (
    <div>
      <Header />
      <Section users={users} />
      <Models />
      <Footer />
    </div>
  );
};

export default App;
