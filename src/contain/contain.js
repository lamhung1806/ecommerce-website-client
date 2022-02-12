export const user = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};
export const token = () => {
  const token = localStorage.getItem("token");
  return token;
};
export const viewToken = {
  role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
  email: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
  username: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
  Id: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
};

export const url = "https://localhost:44305/api/";

export const sort = (data) => {
  let a = data;
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i].price < a[j].price) {
        let tg = a[i];
        a[i] = a[j];
        a[j] = tg;
      }
    }
  }
  return a;
};

export const sortSmall = (data) => {
  let a = data;
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i].price > a[j].price) {
        let tg = a[i];
        a[i] = a[j];
        a[j] = tg;
      }
    }
  }
  return a;
};

export const oderstatus = (data) => {
  switch (data) {
    case false:
      return {
        msg: "Đang xác nhận",
      };

    case true:
      return {
        msg: "Đã xác nhận ",
      };
    case null:
      return {
        msg: "Đã hủy",
      };

    default:
      break;
  }
};
