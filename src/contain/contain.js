export const token = localStorage.getItem("token");
export const user = JSON.parse(localStorage.getItem("user"));
export const viewToken = {
  role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
  email: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
  username: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
  Id: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
};

export const url = "https://localhost:44305/api/";