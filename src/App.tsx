import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./component/ScrollToTop";

// Layouts
import DocumentLayout from "./component/layouts/DocumentLayout";
import GuideLayout from "./component/layouts/GuideLayout";

// Páginas
import StartScreen from "./component/StartScreen";
import NotFound from "./component/NotFound";

// Documentación
import ReduxToolkit from "./component/documentation/state_management/ReduxToolkit";
import ReduxThunk from "./component/documentation/state_management/ReduxThunk";
import ZustandGuide from "./component/documentation/state_management/ZustandGuide";
import UseReducerBasicGuide from "./component/documentation/state_management/UseReducerBasicGuide";
import UseReducerAdvancedGuide from "./component/documentation/state_management/UseReducerAdvancedGuide";
import UseReducerContextGuide from "./component/documentation/state_management/UseReducer_ContextGuide";
import ThemeContextBasicGuide from "./component/documentation/context_API/ThemeContextBasicGuide";
import ThemeContextAdvancedGuide from "./component/documentation/context_API/ThemeContextAdvancedGuide";
import ReactRouter from "./component/documentation/react_router/ReactRouter";
import ReactRouterOutletGuide from "./component/documentation/react_router/ReactRouterOutletGuide";
import NavLinkTw from "./component/documentation/react_router/NavLink-tw";
import NavLinkCss from "./component/documentation/react_router/NavLink-css";
import Test from "./component/documentation/testing/Test";
import I18nGuide from "./component/documentation/i18next/I18nGuide";
import BasicFetchGuide from "./component/documentation/data_fetching/BasicFetchGuide";
import AdvancedFetchGuide from "./component/documentation/data_fetching/AdvancedFetchGuide";
import ReactQueryGuide from "./component/documentation/data_fetching/ReactQueryGuide";
import AxiosGuide from "./component/documentation/data_fetching/AxiosGuide";
import SassGuide from "./component/documentation/styling/SassGuide";
import TailwindBasicGuide from "./component/documentation/styling/TailwindBasicGuide";
import TailwindAdvancedGuide from "./component/documentation/styling/TailwindAdvancedGuide";

// Guía
import API_Methods from "./component/guides/API_Methods";
import TodoAppGuide from "./component/guides/UseReducer_TodoGuide";
import ThemeContextGuide from "./component/guides/ThemeContextGuide";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* INICIO */}
        <Route
          path="/"
          element={
            <>
              <StartScreen />
            </>
          }
        />

        {/* DOCUMENTACIÓN: Nav + Sidebar + TOC */}
        <Route path="docs" element={<DocumentLayout />}>
          {/* /docs → redirige a la primera sección */}
          <Route index element={<Navigate to="redux-toolkit" replace />} />

          <Route path="redux-toolkit" element={<ReduxToolkit />} />
          <Route path="redux-thunk" element={<ReduxThunk />} />
          <Route path="zustand" element={<ZustandGuide />} />
          <Route path="use-reducer-basic" element={<UseReducerBasicGuide />} />
          <Route
            path="use-reducer-todolist"
            element={<UseReducerAdvancedGuide />}
          />
          <Route
            path="use-reducer-context-api"
            element={<UseReducerContextGuide />}
          />
          <Route
            path="context-api-themecontext"
            element={<ThemeContextBasicGuide />}
          />
          <Route
            path="themecontext-advanced"
            element={<ThemeContextAdvancedGuide />}
          />
          <Route path="react-router" element={<ReactRouter />} />
          <Route path="outlet-guide" element={<ReactRouterOutletGuide />} />
          <Route path="navlink-tw" element={<NavLinkTw />} />
          <Route path="navlink-css" element={<NavLinkCss />} />
          <Route path="test" element={<Test />} />
          <Route path="i18n" element={<I18nGuide />} />
          <Route path="data-fetching" element={<BasicFetchGuide />} />
          <Route path="advanced-fetch" element={<AdvancedFetchGuide />} />
          <Route path="react-query" element={<ReactQueryGuide />} />
          <Route path="axios" element={<AxiosGuide />} />
          <Route path="sass" element={<SassGuide />} />
          <Route path="tailwind-css-basic" element={<TailwindBasicGuide />} />
          <Route
            path="tailwind-css-advanced"
            element={<TailwindAdvancedGuide />}
          />
        </Route>

        {/* GUÍA: Nav + Sidebar_Guide + TOC */}
        <Route path="guide" element={<GuideLayout />}>
          {/* al /guide redirijo al primer apartado */}
          <Route index element={<Navigate to="api-methods" replace />} />
          <Route path="api-methods" element={<API_Methods />} />
          <Route path="/guide/todoapp" element={<TodoAppGuide />} />
          <Route
            path="/guide/themecontext-guide"
            element={<ThemeContextGuide />}
          />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
