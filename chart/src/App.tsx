import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL,
});

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
