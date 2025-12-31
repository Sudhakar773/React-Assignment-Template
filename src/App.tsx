
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from './routes/AppRoutes';
import Navbar from './layout/Navbar';
// import { AppRoutes } from "./routes/AppRoutes";
// import { ThemeProvider } from "./context/ThemeProvider";
// import { Header } from "./layout/Header";
// import { Sidebar } from "./layout/Sidebar";
// import { AppRoutes } from "./routes/AppRoutes";


const App = () => {



  return (
    <div className="">
      {/* <h1>App comp</h1> */}
      <Navbar />
      <AppRoutes />
    </div>
    //  <ThemeProvider>
    //     {/* EVERYTHING that uses useTheme MUST be inside */}
    //     <Header />
    //     <div style={{ display: "flex" }}>
    //       <Sidebar />
    //       <AppRoutes />
    //     </div>
    //   </ThemeProvider>
  );
};

export default App;
