/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../headerCart/Cart";
import { useSelector } from "react-redux";
import { getProducts, searchProduct } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";
import "./style.css";

function Header() {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.login.dataUser);
  const [searchData, setSearchData] = useState("");
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };
  const handleSearch = () => {
    if (searchData === "") {
      dispatch(getProducts());
    } else {
      dispatch(searchProduct(searchData));
    }
  };
  const handleKeyDown = (e) => {
    if (e.which === 13) {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="grid wide ">
        <nav className="header__navbar hide-on-moble-tablet">
          <ul className="header__navbar-list">
            <Link
              to="/"
              className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate"
            >
              Trang chủ
              {/* Header-QR */}
            </Link>
            <li className="header__navbar-item">
              <span className="header__navbar-item-no-point">Kết nối</span>
              <a href="true" className="header__navbar-item-icon-link">
                <i className="header__navbar-icon fab fa-facebook" />
              </a>
              <a href="true" className="header__navbar-item-icon-link">
                <i className="header__navbar-icon fab fa-instagram" />
              </a>
            </li>
          </ul>
          <ul className="header__navbar-list">
            <li className="header__navbar-item ">
              <a href="true" className="header__navbar-item-link">
                <i className="header__navbar-icon far fa-bell" />
              </a>
              Thông báo
              <div className="header__notify">
                <div className="header__notify--header">
                  <h3 className="header__notify--header-style">Thông báo</h3>
                </div>
                <ul className="header__notyfy-list">
                  <li className="header__notify__item">
                    <a href="true" className="header__notify-link">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/datawebshoppe.appspot.com/o/images%2Fiphone-12-pro-max_1__7_1.jpg?alt=media&token=37b0f573-d972-4d92-b7fd-b8cfc744f0e6"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-infor">
                        <span className="header__notify-name">
                          {" "}
                          IP12 ProMax VNA
                        </span>
                        <span className="header__notify-descriotion">
                          iPhone 12 Pro Max. Màn hình Super Retina XDR 6.7 inch
                          lớn hơn (1). Ceramic Shield với khả năng chịu va đập
                          khi rơi tốt hơn gấp 4 lần (2). Ảnh chụp tuyệt đẹp
                          trong điều kiện ánh sáng yếu với hệ thống camera
                          chuyên nghiệp tuyệt đỉnh trên iPhone và phạm vi thu
                          phóng quang học 5x.{" "}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify__item">
                    <a href="true" className="header__notify-link">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/datawebshoppe.appspot.com/o/images%2Fiphone-12-pro-max_1__7_1.jpg?alt=media&token=37b0f573-d972-4d92-b7fd-b8cfc744f0e6"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-infor">
                        <span className="header__notify-name">
                          {" "}
                          IP12 ProMax VNA
                        </span>
                        <span className="header__notify-descriotion">
                          iPhone 12 Pro Max. Màn hình Super Retina XDR 6.7 inch
                          lớn hơn (1). Ceramic Shield với khả năng chịu va đập
                          khi rơi tốt hơn gấp 4 lần (2). Ảnh chụp tuyệt đẹp
                          trong điều kiện ánh sáng yếu với hệ thống camera
                          chuyên nghiệp tuyệt đỉnh trên iPhone và phạm vi thu
                          phóng quang học 5x.{" "}
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="header__notify__item">
                    <a href="true" className="header__notify-link">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/datawebshoppe.appspot.com/o/images%2Fiphone-12-pro-max_1__7_1.jpg?alt=media&token=37b0f573-d972-4d92-b7fd-b8cfc744f0e6"
                        alt=""
                        className="header__notify-img"
                      />
                      <div className="header__notify-infor">
                        <span className="header__notify-name">
                          {" "}
                          IP12 ProMax VNA
                        </span>
                        <span className="header__notify-descriotion">
                          iPhone 12 Pro Max. Màn hình Super Retina XDR 6.7 inch
                          lớn hơn (1). Ceramic Shield với khả năng chịu va đập
                          khi rơi tốt hơn gấp 4 lần (2). Ảnh chụp tuyệt đẹp
                          trong điều kiện ánh sáng yếu với hệ thống camera
                          chuyên nghiệp tuyệt đỉnh trên iPhone và phạm vi thu
                          phóng quang học 5x.{" "}
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                <footer className="header__notify-footer">
                  <a href="true" className="header__notify-footer-btn">
                    Xem tất cả
                  </a>
                </footer>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href="true" className="header__navbar-item-link">
                <i className="header__navbar-icon far fa-question-circle" />
                Giúp đỡ
              </a>
            </li>
            {dataUser.userName ? (
              <div
                htmlFor="check_login"
                className="header__navbar-item profile"
              >
                {dataUser.userName}
                <div className="profile_select">
                  <ul className="profile_select_list">
                    <li className="profile_select_item">Tài khoản </li>
                    <Link to="/youroder" className="profile_select_yourOder">
                      <li className="profile_select_item">Đơn hàng của bạn </li>
                    </Link>
                    <li
                      onClick={(e) => handleLogOut(e)}
                      className="profile_select_item"
                    >
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                htmlFor="check_login"
                className="header__navbar-item Login"
              >
                Đăng nhập
              </Link>
            )}
            {/* <li class="header__navbar-item header__navbar-item--strong header__navbar-item--separate">Đăng kí </li>
                                    <li class="header__navbar-item header__navbar-item--strong">Đăng nhập</li> */}
          </ul>
        </nav>
        {/* header with seach */}
        <div className="header-with-seach">
          <label htmlFor="input-seach-check" className="header-seach-on-mobile">
            <i className="header-seach-on-mobile-icon fas fa-search" />
          </label>
          <Link to="/" className="header-logo hide-on-tablet">
            <img src="./asset/img/Untitled-2.png" />
          </Link>
          <input
            type="checkbox"
            hidden
            id="input-seach-check"
            className="header__search-check"
          />
          <div className="header-seach ">
            <div className="header-seach-input-wap">
              <input
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => {
                  setSearchData(e.target.value);
                }}
                type="text"
                className="header-seach-input"
                placeholder="Nhập sản phẩm cần tìm"
              />
            </div>
            <div className="header-seach-select">
              <input type="checkbox" hidden id="input-select-check" />
              <label
                htmlFor="input-select-check"
                className="header-seach-with-shop"
              >
                Trong Shop
              </label>
              <label
                htmlFor="input-select-check"
                className="fas fa-sort-down icon-down"
              />
              <div className="header-seach-down">
                <span className="header-seach-down-shop">Trong Shop</span>
                <span className="icon-check">
                  <i className="fas fa-check" />
                </span>
              </div>
            </div>
            <div onClick={handleSearch} className="header-seach-icon-seach">
              <i className="fas fa-search icon-seach" />
            </div>
          </div>
          <Cart />
          {dataUser.userName ? (
            <div
              htmlFor="check_login"
              className="header__navbar-item profile-mobile"
            >
              {dataUser.userName}
              <div className="profile_select">
                <ul className="profile_select_list">
                  <li className="profile_select_item">Tài khoản </li>
                  <Link to="/youroder" className="profile_select_yourOder">
                    <li className="profile_select_item">Đơn hàng của bạn </li>
                  </Link>
                  <li
                    onClick={(e) => handleLogOut(e)}
                    className="profile_select_item"
                  >
                    Đăng xuất
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              htmlFor="check_login"
              className="header__navbar-item Login profile-mobile"
            >
              Đăng nhập
            </Link>
          )}
        </div>
      </div>
      <ul className="header__sort-bar">
        <li className="header__sort-item">
          <a href="true" className="header__sort-link">
            Liên quan
          </a>
        </li>
        <li className="header__sort-item ">
          <a href="true" className="header__sort-link header__sort-item-active">
            Mới nhất
          </a>
        </li>
        <li className="header__sort-item">
          <a href="true" className="header__sort-link">
            Bán chạy
          </a>
        </li>
        <li className="header__sort-item">
          <a href="true" className="header__sort-link">
            Giá
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
