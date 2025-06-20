import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import StartScreen from "./component/StartScreen";
import NavLinkTw from "./component/documentation/react_router/NavLink-tw";
import ScrollToTop from "./component/ScrollToTop";
import Redux from "./component/documentation/redux/Redux";
import Test from "./component/documentation/testing/Test";
import ReactRouter from "./component/documentation/react_router/ReactRouter";
import NavLinkCss from "./component/documentation/react_router/NavLink-css";
import NotFound from "./component/NotFound";

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
          <Route path="/navlink-tw" element={<NavLinkTw />} />
          <Route path="/navlink-css" element={<NavLinkCss />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
