import { Route, Routes } from "react-router-dom";
import ReactRouter from "./component/ReactRouter";
import Test from "./component/Test";
import Home from "./component/Home";
import Redux from "./component/Redux";
import StartScreen from "./component/StartScreen";
import NavLink from "./component/NavLink";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<StartScreen />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/test" element={<Test />} />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/navlink" element={<NavLink />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
