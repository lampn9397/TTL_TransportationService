/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Variables
import './styles';
import ActionTypes from '../../redux/AuthModule/action';

class Login extends React.Component {
  state = {
    username: 'thuan',
    password: '123123',
  }

  onChange = fieldName => e => {
    const { value } = e.target;

    this.setState({ [fieldName]: value });
  }

  onClickLogin = async (e) => {
    const { login } = this.props;

<<<<<<< HEAD
      const body = JSON.stringify({ username, password });

      const response = await fetch('http://localhost/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        redirect: 'follow'
      });

      // const response = await axios.post('https://8cfd98a1.ngrok.io/api/users/login', body, { headers: { 'Content-Type': 'application/json' } });

      console.log("TCL: Login -> onClickLogin -> response", response)

      // const json = await response.json();

      // const result = await response.text();
      // console.log("TCL: Login -> onClickLogin -> result", result)
=======
    const { username, password } = this.state;
>>>>>>> d7b8b1e984fa5d8c284b33a9d0a1ca721b2d9a43

    login(username, password);
  }

  render = () => {
    const { username, password } = this.state;

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
            <div id="body-login" className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">

                <div id="login-form-left" className="border clearfix">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-ms-12 col-lg-offset-2 col-md-offset-2">
                    <h3 className="text-uppercase text-center">Tôi đã đăng ký tài khoản</h3>

                    <div className="form-horizontal">
                      <div className="form-group">
                        <label htmlFor="">Tên đăng nhập*</label>
                        <input value={username} onChange={this.onChange('username')} className="form-control" data-val="true" data-val-required="Vui lòng điền email hoặc sđt" id="UserName" name="UserName" placeholder="Điền email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Mật khẩu*</label>
                        <input value={password} onChange={this.onChange('password')} className="form-control" data-val="true" data-val-required="Vui lòng nhập mật khẩu" id="Password" name="Password" placeholder="Điền mật khẩu" type="password" />
                      </div>

                      <div className="form-group">
                        <a href="/User/ForgetPassword">Quên mật khẩu?</a>
                        <button className="btn btn-primary pull-right" onClick={this.onClickLogin}>
                          Đăng nhập
                            </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-ms-12">
                <div id="login-form-right" className="border clearfix">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-ms-12 col-lg-offset-2 col-md-offset-2">
                    <h3 className="text-uppercase text-center">Bạn là khách hàng mới?</h3>
                    <div className="text-center">
                      <Link to='/register'><div className="btn btn-success">Đăng ký</div></Link>
                    </div>
                    <p className="text-muted text-center">
                      Chỉ với 1 tài khoản FUTABUS ID, tham gia được tất cả các chương trình của FUTA Bus Lines
                    </p>


                  </div>
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
                      <a href="#">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch({ type: ActionTypes.AUTH_LOGIN, username, password }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);