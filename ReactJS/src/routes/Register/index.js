/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// Variables
import './styles';

export default class Register extends React.Component {
  render = () => {
    return (
      <div id="page">
        <header>
          <div id="top">
            <div className="container">
              <ul className="nav navbar-nav">
                <li>&nbsp;</li>

              </ul>
            </div>
          </div>
          <div id="header-body">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                  <h1 id="logo">
                    <a href="https://futabus.vn">
                      <img src="Content/img/logo-futa-edit.png" style={{ width: '50%' }} alt="FUTA Bus Lines" />
                    </a>
                  </h1>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-ms-12 pull-right text-right">
                  <button type="button" className="btn btn-primary btn-block btn-flat btn-support">
                    <i className="fa fa-phone icon-flat bg-btn-actived"></i>
                    Tổng đài hỗ trợ: <span>1900 6067</span>
                  </button>



                </div>
              </div>
            </div>

          </div>
        </header>


        <section id="body-content">



          <div className="container" id="login-page">

            <div id="top-login" className="clearfix hidden-sm">

              <div id="login-top-bar-left" className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                <div className="row">
                  <div className="text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12">
                    <div className="text-uppercase"><span className="relative"><span className="sprite safe"></span>An toàn</span></div>

                  </div>
                  <div className="text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12">
                    <div className="text-uppercase"><span className="relative"><span className="sprite bus"></span>Luôn có tuyến</span></div>

                  </div>
                  <div className="text-center col-lg-4 col-md-4 col-sm-4 col-xs-12 col-ms-12">
                    <div className="text-uppercase"><span className="relative"><span className="sprite faq"></span>Hỏi đáp</span></div>

                  </div>
                </div>

              </div>

              <div id="login-top-bar-right" className="text-center col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                <p className="text-uppercase">Hãy tải app để chúng tôi phục vụ bạn tốt hơn <span className="sprite ico-app hidden-xs"></span> </p>

              </div>
            </div>
            <div id="body-register" className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                <img src="Content/res/banner-dangky.jpg" alt="" />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                <div id="register-form-wrapper" className="border padding10 clearfix">
                  <form action="/User/Register" method="post"><input name="__RequestVerificationToken" type="hidden" value="-hbENkkNDPYnWw0dI4zSqrE_63N4e1jtNPr2nPQ8uoBJXwpSoidhp_pWz4vkgv35p5rrJ_unaX11dM_wvAkZtks_cDc1" />                    <h3 className="text-uppercase">Đăng ký</h3>
                    <p className="text-muted">
                      <small>
                        Lưu ý: Không hỗ trợ hotmail và outlook email<br />
                        Chỉ với 1 tài khoản FUTABUS ID, tham gia được tất cả các chương trình FUTA Bus Lines
                        </small>

                    </p>
                    <div className="form-group">
                      <label htmlFor="">Họ tên <span className="text-primary">*</span></label>
                      <input className="form-control" id="FullName" name="FullName" placeholder="Điền họ tên" type="text" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Email <span className="text-primary">*</span></label>
                      <input className="form-control" id="Email" name="Email" placeholder="Điền địa chỉ email" type="email" />
                    </div>
                    <div className="form-group">

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12">
                          <label htmlFor="">Mật khẩu <span className="text-primary">*</span></label>
                          <input className="form-control" id="Password" name="Password" placeholder="Điền mật khẩu" type="password" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12">
                          <label htmlFor="">Nhắc lại mật khẩu <span className="text-primary">*</span></label>
                          <input className="form-control" id="ConfirmPassword" name="ConfirmPassword" placeholder="Nhập lại mật khẩu" type="password" />
                        </div>
                      </div>

                    </div>
                    <h3 className="text-uppercase">Thông tin khác</h3>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                          <label htmlFor="">Số di động <span className="text-primary">*</span></label>
                          <input className="form-control" id="Phone" name="Phone" placeholder="Điền số di động" type="text" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                          <label htmlFor="">Số CMNN <span className="text-primary">*</span></label>
                          <input className="form-control" id="SecurityNumber" name="SecurityNumber" placeholder="Điền số chứng minh thư" type="text" />
                        </div>
                      </div>

                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                          <label htmlFor="">Tỉnh/TP<span className="text-primary">*</span></label>
                          <select className="form-control" data-val="true" data-val-number="The field ProvinceId must be a number." data-val-required="The ProvinceId field is required." datavalue="0" id="ProvinceId" name="ProvinceId"><option value="">Chọn tỉnh/tp</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                          <label htmlFor="">Quận/Huyện<span className="text-primary">*</span></label>
                          <select className="form-control" data-val="true" data-val-number="The field CityId must be a number." data-val-required="The CityId field is required." datavalue="0" id="CityId" name="CityId"><option value="">Chọn quận/huyện</option>
                          </select>
                        </div>
                      </div>

                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                          <label htmlFor="">Địa chỉ</label>
                          <input className="form-control" id="Address" name="Address" placeholder="Điền địa chỉ liên hệ" type="text" />
                        </div>
                      </div>

                    </div>
                    <div className="form-group clearfix">
                      <button className="btn btn-primary pull-right">HOÀN TẤT</button>

                    </div>
                    <p className="clearfix">
                      <small className="pull-right"><span className="text-primary">*</span> Mục bắt buộc </small>
                    </p>
                    <p className="text-center">
                      Nếu bạn đã có FUTABUS ID. CLick <a href="/User/Login">đây</a> để đăng nhập
                    </p>
                  </form>
                </div>
              </div>
            </div>

          </div>

        </section>
        <footer>
          <div id="footer-body">
            <div className="f-body-wrap container">

              <nav id="nav-f">
                <ul>
                  <li><a href="https://futabus.vn/vi-VN/ve-xe-phuong-trang-lich-trinh.html">Lịch trình</a></li>
                  <li><a href="https://futabus.vn/vi-VN/ve-xe-phuong-trang-ve-chung-toi.html">Về chúng tôi</a></li>
                  <li><a href="https://futabus.vn/vi-VN/ve-xe-phuong-trang-dieu-khoan-su-dung.html">Điều khoản sử dụng</a></li>
                  <li><a href="https://futabus.vn/vi-VN/ve-xe-phuong-trang-danh-gia.html">Góc góp ý</a></li>
                  <li><a href="https://futabus.vn/vi-VN/ve-xe-phuong-trang-tuyen-dung.html">Tuyển dụng</a></li>
                </ul>
              </nav>

              <div id="f-info" className="row">
                <div id="social" className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                  <ul>
                    <li>Kết nối chúng tôi</li>
                    <li>
                      <a href="">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-google-plus-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-twitter-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div id="info" className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                  <div id="info-c">
                    <p>CÔNG TY CP XE KHÁCH PHƯƠNG TRANG FUTA BUS LINES</p>
                    <p>Địa chỉ: 80 Trần Hưng Đạo, Q1, TP Hồ Chí Minh.</p>
                    <p>Điện thoại: 08 3838 6852 - Fax: 08 3838 6853</p>
                    <p>Website: futabus.vn - Email: lienhe@futabus.vn </p>
                  </div>
                </div>
              </div>

              <div className="f-copy">
                <p>&copy; BẢN QUYỀN THUỘC VỀ CÔNG TY CP XE KHÁCH PHƯƠNG TRANG FUTA BUS LINES</p>
                <p>Tất cả bản quyền đã được bảo bộ</p>
              </div>
            </div>
          </div>

        </footer>

      </div>
    );
  }
}
