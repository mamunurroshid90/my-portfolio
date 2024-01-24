import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RoutLayout from "./components/RoutLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AllProjects from "./pages/my-portfolio/AllProjects";
import Ecommerce from "./pages/my-portfolio/Ecommerce";
import Blog from "./pages/my-portfolio/Blog";
import Landing from "./pages/my-portfolio/Landing";
import Portfolio from "./pages/my-portfolio/Portfolio";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RoutLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<Portfolio />}>
            <Route path="/all-project" element={<AllProjects />} />
            <Route path="/e-commerce" element={<Ecommerce />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/landing" element={<Landing />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
