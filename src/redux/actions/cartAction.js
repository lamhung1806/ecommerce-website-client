import axios from 'axios'
import { token, url } from '../../contain/contain'
import { notifyError, notifyErrorCart, notifySuccess, notifySuccessCart } from '../../contain/msg'
export const getCart = (data) => {
  return {
    type: 'GET_CART',
    payload: data,
  }
}
export const createdCartAction = (data) => {
  return {
    type: 'CREATE_CART',
    payload: data,
  }
}
export const deleteCartAction = (data) => {
  return {
    type: 'DELETE_CART',
    payload: data,
  }
}
export const updateCartAction = (data) => {
  return {
    type: 'UPDATE_CART',
    payload: data,
  }
}

export const getDataCart = () => (dispatch) => {
  const userId = JSON.parse(localStorage.getItem('user'))
  if (userId) {
    axios
      .get(`https://localhost:44305/api/Carts/GetCart/${userId.id}`, {
        headers: { Authorization: `Bearer ${token()}` },
      })
      .then((response) => {
        dispatch(getCart(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const createCart = (data) => (dispatch) => {
  if (data) {
    axios
      .post(`${url}Carts/Create`, data, {
        headers: { Authorization: `Bearer ${token()}` },
      })
      .then(() => {
        dispatch(createdCartAction())
        dispatch(getDataCart())
        notifySuccessCart()
      })
      .catch(() => {
        notifyErrorCart()
      })
  }
}

export const deleteCart = (id) => (dispatch) => {
  const userId = JSON.parse(localStorage.getItem('user'))
  if (userId) {
    axios
      .delete(`${url}Carts/Delete/${userId.id}/${id}`, {
        headers: { Authorization: `Bearer ${token()}` },
      })
      .then(() => {
        dispatch(deleteCartAction())
        dispatch(getDataCart())
        notifySuccess()
      })
      .catch(() => {
        notifyError()
      })
  }
}
export const updateCart = (data) => (dispatch) => {
  const userId = JSON.parse(localStorage.getItem('user'))
  if (userId) {
    axios
      .put(`${url}Carts/Update`, data, {
        headers: { Authorization: `Bearer ${token()}` },
      })
      .then(() => {
        dispatch(updateCartAction())
        dispatch(getDataCart())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
