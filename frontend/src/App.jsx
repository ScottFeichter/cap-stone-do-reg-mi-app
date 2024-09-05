import { RouterProvider } from "react-router-dom";
import { router } from './router/Router.jsx';

function App() {

    // console.log("APP COMPONENT RAN");
    return <RouterProvider router={router} />;
  }

  export default App;
