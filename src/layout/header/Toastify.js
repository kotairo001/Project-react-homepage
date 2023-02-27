import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
export const Default = (notify) => toast(notify)
export const Success = (notify) => toast.success(notify)
export const Warning = (notify) => toast.warning(notify)
export const Error = (notify) => toast.error(notify)



function Toastify() {
  const notify = () => toast("Wow so easy !");

  return (
    <div>
      {/* <button onClick={notify}>Notify !</button> */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
export default Toastify
