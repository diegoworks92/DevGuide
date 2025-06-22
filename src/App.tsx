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
import ReduxThunk from "./component/documentation/redux/ReduxThunk";
import ZustandGuide from "./component/documentation/zustand/ZustandGuide";
import ReactRouterOutletGuide from "./component/documentation/react_router/ReactRouterOutletGuide";
import I18nGuide from "./component/documentation/i18next/I18nGuide";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<StartScreen />} />
          <Route path="/redux" element={<Redux />} />
          <Route path="/redux-thunk" element={<ReduxThunk />} />
          <Route path="/zustand" element={<ZustandGuide />} />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/outlet-guide" element={<ReactRouterOutletGuide />} />
          <Route path="/navlink-tw" element={<NavLinkTw />} />
          <Route path="/navlink-css" element={<NavLinkCss />} />
          <Route path="/test" element={<Test />} />
          <Route path="/i18n" element={<I18nGuide />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
