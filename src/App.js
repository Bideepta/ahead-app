import React from "react";
import Navbar from "./components/navbar/navbar";
import CardComponent from "./components/firstPage/card";
import Base from "./components/secondPage/base";
import Row_of_card from "./components/thirdPage/rowed-cards";
import About from "./components/about/about";
import Faded_timeline from "./components/fade-timeline/fade-timeline";
import Extrabase from "./components/extra/extra";
import Rate from "./components/rate/rate";
import Test_Page from "./test/test";
import MyCardWork from "./components/work/work";
import MyPage from "./components/vacancies/vacancies";
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div>
      <Navbar />,
      <CardComponent />,
      <Base />,
      <Row_of_card />,
      <About />,
      <Faded_timeline />,
      <Extrabase />,
      <Rate />,
      <Test_Page />,
      <MyCardWork />,
      <MyPage />
    </div>
  );
}

export default App;
