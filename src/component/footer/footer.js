import React, { Component } from 'react';
class footer extends Component {
    render() {
        return (
              <footer className="footer">
                    <div className="grid wide footter-conten ">
                    <div className="row">
                        <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                        <ul className="footter-list">
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Trung tâm trợ giúp</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Mail</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Hướng dẫn mua hàng</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Danh mục</h3>
                        <ul className="footter-list">
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Quần</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Áo sơ mi</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Áo phông</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Theo giõi</h3>
                        <ul className="footter-list">
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">
                                <i className="footer-item-icon fab fa-facebook" />Facebook</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">
                                <i className="footer-item-icon fab fa-instagram-square" />
                                Instagram</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">
                                <i className="footer-item-icon fab fa-linkedin-in" />Linkedin</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">Giới thiệu</h3>
                        <ul className="footter-list">
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Giới thiệu</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Tuyển dụng</a>
                            </li>
                            <li className="footer-item">
                            <a href="true" className="footer-item__link">Điều khoản</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col l-2-4 m-8 c-12">
                        <h3 className="footer__heading">Vào cửa hảng trên ứng dụng</h3>
                        <div className="footer__dowload">
                            <img src="./asset/img/Qr code/qrcode.png" alt="" className="footer__dowload-img-qr" />
                            <div className="footer__dowload-apps">
                            <a href="true" className="footer__dowload-apps-link">
                                <img src="./asset/img/Qr code/appstore.png" alt="" className="footer__dowload-app-img" />
                                <img src="./asset/img/Qr code/google.png" alt="" className="footer__dowload-app-img" />
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                            </div>
                    <div className="footer-bottom">
                        <div className="grid wide ">
                            <span className="footer-text">@2021 Bản quyền thuộc về</span>
                        </div>
                    </div>
                   
            </footer>
        );
    }
}

export default footer;