import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import {
  getProducts,
  ProductbyCategory,
  sortProduct,
  sortProductSmall,
} from "../../redux/actions/productAction";
import { getCategory } from "../../redux/actions/categoryAction";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.product.dataProduct);
  const listCateGory = useSelector((state) => state.category.dataCategory);
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const viewByCategory = (e, data) => {
    e.preventDefault();
    dispatch(ProductbyCategory(data));
  };
  const handleSort = () => {
    dispatch(sortProduct(dataProduct));
  };
  const handleSortSmall = () => {
    dispatch(sortProductSmall(dataProduct));
  };

  return (
    <div className="main">
      <div className="grid wide ">
        <div className="row sm-gutter app__container">
          <div className="category-wrap col l-2 m-0 c-0">
            <nav className="category">
              <h3 className="category__heading">Category</h3>
              <ul className="category-list">
                {listCateGory.map((data, index) => (
                  <a
                    onClick={(e) => viewByCategory(e, data.id)}
                    key={index}
                    href="true"
                    className="category-item__link acctive  "
                  >
                    {data.name}
                  </a>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col l-10 m-12 c-12">
            <div className="home-filter hide-on-moble-tablet">
              <span className="home-fiter__lable">Sắp xếp theo</span>
              <button className="home-fiter__btn btn  ">Phổ Biến</button>
              <button className="home-fiter__btn btn ">Mới Nhất</button>

              <button className="home-fiter__btn btn">Bán Chạy</button>
              <div className="select-input">
                <span className="select-input__lable">Giá:</span>
                <i className="select-input-icon fas fa-sort-down " />
                <ul className="select-input__list">
                  <li onClick={handleSort} className="select-input__item">
                    Giá: Từ cao đến thấp{" "}
                  </li>
                  <li onClick={handleSortSmall} className="select-input__item">
                    Giá: Từ thấp đến cao
                  </li>
                </ul>
              </div>
              <div className="home-filter__page">
                <div className="home-filter__page-num">
                  <span className="home-filter__page-curent">1</span>/14
                </div>
                <div className="home-filter__control">
                  <a
                    href="true"
                    className="home-filter__control-btn home-filter__control-btn-disible"
                  >
                    <i className="home-filter__control-btn-icon fas fa-chevron-left" />
                  </a>
                  <a href="true" className="home-filter__control-btn">
                    <i className="home-filter__control-btn-icon fas fa-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="nav-mobile-category">
              <ul className="mobile-category__list">
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em Áo phông trẻ em Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
                <li className="mobile-category__item">
                  <a href="true" className="mobile-category__link">
                    Áo phông trẻ em
                  </a>
                </li>
              </ul>
            </div>
            <div className="home-product">
              <div className="row sm-gutter">
                {dataProduct.map((data, id) => (
                  <Item key={id} data={data} />
                ))}
              </div>
            </div>
            <ul className="pagination home-product__pagination">
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  <i className=" fas fa-chevron-left" />
                </a>
              </li>
              <li className="pagination-item">
                <a
                  href="true"
                  className="pagination-item__link pagination-item__link-active"
                >
                  1
                </a>
              </li>
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  2
                </a>
              </li>
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  3
                </a>
              </li>
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  4
                </a>
              </li>
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  5
                </a>
              </li>
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  ...
                </a>
              </li>
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  14
                </a>
              </li>
              <li className="pagination-item">
                <a href="true" className="pagination-item__link">
                  <i className=" fas fa-chevron-right" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
