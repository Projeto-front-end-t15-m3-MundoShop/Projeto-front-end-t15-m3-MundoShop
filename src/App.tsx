import { ToastContainer } from "react-toastify";
import { Router } from "./Routes";
import GlobalStyles from "./style/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
