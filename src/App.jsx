import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import PGListing from "./pages/PGListing";
import SavedCards from "./pages/SavedCards";
import "./App.css"
function App() {
  // const customBreakpoints = {
  //   xs: 0,
  //   sm: 576,
  //   md: 768,
  //   lg: 992,
  //   xl: 1200,
  // };
  return (
    <>
      {/* <ConfigProvider
        {...enUS}
        componentSize="middle"
        prefixCls="custom-antd"
        {...{ customBreakpoints }}
      > */}
        <NavBar />
        <Routes>
          <Route path="/" element={<PGListing />}></Route>
          <Route path="/saved-cards" element={<SavedCards />} />
        </Routes>
      {/* </ConfigProvider> */}
      
    </>
  );
}

export default App;
