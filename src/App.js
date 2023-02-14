import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home, Basket, Error, Login, Account, Search, ViewProductList, ViewProductSingle, ViewCategoryProductList} from "./views/index";
import {Navbar, Footer} from "./components/common/index";
import { route } from "./constants/index";
import { useAuthContext } from './context/authContext';
import ProtectedRoute from './routers/ProtectedRoute';

function App() {
  const { authData } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Public routes */}
            <Route path = {route.HOME} element = { <Home />} />
            <Route path = {route.HOME_ALT} element = { <Home />} />
            <Route path = {route.ERROR} element = {<Error />} />
            <Route path = {route.LOGIN} element = { <Login />} />
            <Route path = {route.SINGLE_PRODUCT + ":id"} element = {<ViewProductSingle />} />
            <Route path = {route.CATEGORY_PRODUCTS + ":categoryKey"} element = {<ViewCategoryProductList />} />
            <Route path = {route.ACCOUNT} element = {<Account />} />
            <Route path = {route.SEARCH_PRODUCT + ":searchKey"} element = {<Search />} />
            <Route path = "*" element = {<Error />} />

            {/* Protected routes */}
            <Route element = { <ProtectedRoute authData = { authData } /> }>
              <Route path = {route.BASKET} element = {<Basket />} />
            </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
