import { toast } from "react-toastify";

export const notifySuccessCart = () =>
  toast.success("Đã thêm vào giỏ hàng", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const notifySuccess = () =>
  toast.success("Thành công", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const notifyErrorCart = () =>
  toast.error(" Sản phẩm đã tồn tại", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const notifyErrorLogin = () =>
  toast.error(" Sai tài khoản hoặc mật khẩu", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const notifyError = () =>
  toast.error(" Thất bại", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const notifySuccessTop = () => {
  toast.success("🦄 Đăng kí thành công!", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
