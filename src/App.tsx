import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import StartScreen from "./component/StartScreen";
import NavLinkTw from "./component/documentation/react_router/NavLink-tw";
import ScrollToTop from "./component/ScrollToTop";
import ReduxToolkit from "./component/documentation/state_management/ReduxToolkit";
import Test from "./component/documentation/testing/Test";
import ReactRouter from "./component/documentation/react_router/ReactRouter";
import NavLinkCss from "./component/documentation/react_router/NavLink-css";
import NotFound from "./component/NotFound";
import ReduxThunk from "./component/documentation/state_management/ReduxThunk";
import ZustandGuide from "./component/documentation/state_management/ZustandGuide";
import ReactRouterOutletGuide from "./component/documentation/react_router/ReactRouterOutletGuide";
import I18nGuide from "./component/documentation/i18next/I18nGuide";
import BasicFetchGuide from "./component/documentation/data_fetching/BasicFetchGuide";
import AdvancedFetchGuide from "./component/documentation/data_fetching/AdvancedFetchGuide";
import ReactQueryGuide from "./component/documentation/data_fetching/ReactQueryGuide";
import AxiosGuide from "./component/documentation/data_fetching/AxiosGuide";
import SassGuide from "./component/documentation/styling/SassGuide";
import UseReducerBasicGuide from "./component/documentation/state_management/UseReducerBasicGuide";
import UseReducerAdvancedGuide from "./component/documentation/state_management/UseReducerAdvancedGuide";
import ThemeContextBasicGuide from "./component/documentation/context_API/ThemeContextBasicGuide";
import ThemeContextAdvancedGuide from "./component/documentation/context_API/ThemeContextAdvancedGuide";
import TailwindBasicGuide from "./component/documentation/styling/TailwindBasicGuide";
import TailwindAdvancedGuide from "./component/documentation/styling/TailwindAdvancedGuide";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<StartScreen />} />
          <Route path="/redux-toolkit" element={<ReduxToolkit />} />
          <Route path="/redux-thunk" element={<ReduxThunk />} />
          <Route path="/zustand" element={<ZustandGuide />} />
          <Route path="/use-reducer-basic" element={<UseReducerBasicGuide />} />
          <Route
            path="/use-reducer-advanced"
            element={<UseReducerAdvancedGuide />}
          />
          <Route
            path="/context-api-basic"
            element={<ThemeContextBasicGuide />}
          />
          <Route
            path="/context-api-advanced"
            element={<ThemeContextAdvancedGuide />}
          />
          <Route path="/react-router" element={<ReactRouter />} />
          <Route path="/outlet-guide" element={<ReactRouterOutletGuide />} />
          <Route path="/navlink-tw" element={<NavLinkTw />} />
          <Route path="/navlink-css" element={<NavLinkCss />} />
          <Route path="/test" element={<Test />} />
          <Route path="/i18n" element={<I18nGuide />} />
          <Route path="/basic-fetch" element={<BasicFetchGuide />} />
          <Route path="/advanced-fetch" element={<AdvancedFetchGuide />} />
          <Route path="/react-query" element={<ReactQueryGuide />} />
          <Route path="/axios" element={<AxiosGuide />} />
          <Route path="/sass" element={<SassGuide />} />
          <Route path="/tailwind-css-basic" element={<TailwindBasicGuide />} />
          <Route
            path="/tailwind-css-advanced"
            element={<TailwindAdvancedGuide />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
