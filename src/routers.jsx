import ErrorMessage from "./Components/ErrorMessage"
import ItemForm from "./Components/ItemForm";
import Home from "./Pages/Home"
import ItemDetails from "./Pages/ItemDetails";
import Login from "./Pages/Login";
import Promo from "./Pages/Promo";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorEleemnt: <ErrorMessage />,
  },
  {
    path: "/promo",
    element: <Promo />,
    errorEleemnt: <ErrorMessage />,
  },
  {
    path: "/itemdetails/:id",
    element: <ItemDetails />,
    errorEleemnt: <ErrorMessage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorEleemnt: <ErrorMessage />,
  },
   {
    path: "/additem",
    element: <ItemForm />,
    errorEleemnt: <ErrorMessage />,
   }
];

export default routes