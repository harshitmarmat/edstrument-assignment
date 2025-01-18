import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearToast } from "../../utils/toastSlice";


const Toast = () => {
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        dispatch(clearToast());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast, dispatch]);

  if (!toast) return null;
  return (
    <div>
      <div className="toast z-10 absolute toast-center top-20 toast-top">
        <div className="alert text-ed_white alert-info">
          <span>{toast.message}</span>
        </div>
      </div>
    </div>
  );
};

export default Toast;
