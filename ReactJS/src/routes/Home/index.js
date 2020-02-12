/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render = () => {
    return (
      <React.Fragment>
        <img src="Content/img/private/button-19006067-03.png" className="hotlinebutton-fixed" alt="hotline futabus" />
        <div id="br-cover-content">
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Câu hỏi thường gặp trong chương trình khuyến mãi</h4>
                </div>
                <div className="modal-body">
                  <div className="cd-faq-items" style={{ paddingLeft: 0 }}>
                    <ul id="futabus" className="cd-faq-group">
                      <li>
                        <a className="cd-faq-trigger" href="#0">01. Vì sao chỉ riêng tuyến Cần Thơ - Sài Gòn, Đà Lạt - Sài Gòn được thực hiện chiến dịch này?</a>
                        <div className="cd-faq-content">
                          <p> Kỷ niệm 15 năm thành lập công ty, công ty tổ chức chương trình tri ân khách hàng cho 2 tuyến, ĐL là tuyến liên tỉnh đầu tiên khu vực Miền Trung-Tây Nguyên, Cần Thơ là tuyến đầu tiên khu vực Miền Tây.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">02. Dường như công ty chỉ tổ chức khuyến mãi tại những tuyến có cạnh tranh, còn những tuyến không hoặc ít có cạnh tranh thì sẽ như thế nào?</a>
                        <div className="cd-faq-content">
                          <p>Thực tế các tuyến đều có đối thủ cạnh tranh, Công ty Phương trang nhằm tri ân khách hàng cho 2 tuyến đã hoạt động lâu đời và có lượng khách hàng lớn nhất của toàn hệ thống. Tuy nhiên Phương Trang sẽ có các kế hoạch và chiến dịch tri ân khách hàng các tuyến còn lại trong thời gian sắp tới.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">03. Những ưu đãi này có được áp dụng tại các chi nhánh nào nữa không?</a>
                        <div className="cd-faq-content">
                          <p>Trước mắt chúng tôi chỉ áp dụng với Đà Lạt , Cần Thơ  các tuyến còn lại đang nằm trong kế hoạch sắp tới của công ty.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">04. Tôi có thể mua vé ưu đãi này nếu tôi không phải là người sống tại Đà Lạt hoặc Cần Thơ?</a>
                        <div className="cd-faq-content">
                          <p>Nếu Khách hàng có nhu cầu đi lại trên 2 tuyến Cần Thơ –Sài Gòn ( ngược lại ) , Đà lạt – Sài Gòn ( ngược lại ) thì Khách hàng đều được ưu đãi giảm giá. </p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">05. Khi mua vé online ở 2 tuyến khuyến mãi này, tôi có được giảm giá không?</a>
                        <div className="cd-faq-content">
                          <p>Khách hàng có 3 hình thức mua vé và được nhận ưu đãi khuyến mãi: Mua trực tiếp tại các phòng vé, Mua online tại website <a target="_blank" rel="noopener noreferrer" href="/">futabus.vn</a> và ứng dụng di động FUTA Bus, Đặt vé qua tổng đài <span className="text-danger">1900 6067</span></p>
                          <p>Link download app</p>
                          <ul>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/vn/app/futa-bus/id1049039667?mt=8">IOS</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.futabus.activity&hl=vi">Android</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">06. Chương trình khuyến mãi kéo dài trong bao lâu?</a>
                        <div className="cd-faq-content">
                          <p>Thời gian chương trình khuyến mãi mỗi đợt dự kiến là 45 ngày. </p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">07. Tôi có bị giới hạn số lượng vé khuyến mãi khi mua vé hay không?</a>
                        <div className="cd-faq-content">
                          <p>Khách hàng không bị giới hạn số lượng khi mua vé trong chương trình khuyến mãi.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">08. Liệu tôi có phải cung cấp thêm những gì để được hưởng giảm giá vé?</a>
                        <div className="cd-faq-content">
                          <p>Khách hàng chỉ cần cung cấp đầy đủ thông tin cá nhân (số điện thoại, họ tên, Email nếu có) theo yêu cầu khi mua vé trực tiếp hoặc mua vé trực tuyến.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">09. Trong thời gian khuyến mãi tôi dự định mua vé trước thời gian tôi đi khoảng 3 tháng có được giảm giá hay không?</a>
                        <div className="cd-faq-content">
                          <p>Chương trình này có 45 ngày. Giá vé khuyến mãi sẽ được diễn ra trong dòng 45 ngày kể từ ngày <strong>1/7/2016 – 14/08/2016</strong></p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">10. Vé khuyến mãi có được hoàn đổi trả hay không?</a>
                        <div className="cd-faq-content">
                          <p>Khách hàng được trả vé theo quy định của công ty</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">11. Liệu tôi có thể tặng vé khuyến mãi cho người khác không?</a>
                        <div className="cd-faq-content">
                          <p>Khách hàng có thể tặng vé cho người khác, tuy nhiên khách hàng cần cung cấp lại thông tin người được cho tặng.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">12. Vé khuyến mãi có được phục vụ như vé không khuyến mãi không?</a>
                        <div className="cd-faq-content">
                          <p>Quý khách sẽ được phục vụ đầy đủ các dịch vụ đính kèm như: Trung chuyển, khăn, nước, wifi, dép đi lại, mền. Chúng tôi đảm bảo chất lượng dịch vụ là không thay đổi.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">13. Số lượng vé khuyến mãi có bị giới hạn hay không?</a>
                        <div className="cd-faq-content">
                          <p>Số lượng vé khuyến mãi sẽ được giới hạn theo thời gian chương trình.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">14. Nếu có trường hợp người khác mua đi bán lại vé khuyến mãi theo mức giá thông thường thì sao?</a>
                        <div className="cd-faq-content">
                          <p>Chúng tôi khuyến cáo khách hàng nên mua qua kênh bán vé chính thống của Phương Trang. Mọi trường hợp mua vé bên ngoài hệ thống, chúng tôi hoàn toàn không chịu trách nhiệm.</p>
                        </div>
                      </li>
                      <li>
                        <a className="cd-faq-trigger" href="#0">15. Khi mua vé ở các điểm đại lý, tôi có được hưởng khuyến mãi hay không?</a>
                        <div className="cd-faq-content">
                          <p>Vẫn được áp dụng chính sách giảm giá.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
              </div>

            </div>
          </div>
          <div id="MapModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Câu hỏi thường gặp trong chương trình khuyến mãi</h4>
                </div>
                <div className="modal-body">
                  <div className="span11">
                    <div id="mapMu" style={{ height: 320 }}></div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Đóng</button>
                </div>
              </div>

            </div>
          </div>
          <button type="button" id="promotion_faq_button" className="btn btn-default btn-circle hidden" data-toggle="modal" data-target="#myModal" title="Câu hỏi thường gặp trong chương trình khuyến mãi"><i className="fa fa-question" aria-hidden="true"></i></button>
          <div>
            <div id="sb-site">

              <div className="br-header">
                <div id="top-nav" className="hidden-xs">
                  <div className="container">
                    <ul className="clearfix">
                      <li><a href="/"><i className="fa fa-bus" aria-hidden="true"></i>&ensp;Vận chuyển hành khách</a></li>
                      <li><a href="http://www.futaexpress.vn/"><i className="fa fa-truck" aria-hidden="true"></i>&ensp;Vận chuyển hàng hoá</a></li>
                      <li><a href="http://futataxi.vn/"><i className="fa fa-taxi" aria-hidden="true"></i>&ensp;Dịch vụ Taxi</a></li>
                      <li className="diff"><a href="/vi-VN/ve-xe-phuong-trang-tram-dung-chan.html"><i className="fa fa-university" aria-hidden="true"></i>&ensp;Trạm dừng</a></li>

                      <li className="pull-right diff"><a href="/en-US"><img src="Content/res/GB.png" style={{ paddingBottom: 2 }} alt="English" />&nbsp;<span className="hidden-xs">English</span></a></li>
                      <li className="pull-right">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/xephuongtrang">
                          <i className="fa fa-facebook-square"></i>&ensp;Fanpage
                    </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <nav>
                  <div className="container">
                    <div id="logo" className="pull-left">
                      <a href="/" className="">
                        <img alt="" id="logo-main" src="Content/img/logo-futa-edit.png" />
                      </a>
                    </div>
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed sb-toggle-left" data-toggle="collapse" data-target="" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>

                    </div>
                    <ul className="pull-right hidden-xs">
                      <li><a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html">Lịch trình</a></li>
                      <li><a href="/vi-VN/cac-chuong-trinh-khuyen-mai.html">Khuyến mãi</a></li>
                      <li><a href="/vi-VN/ve-xe-phuong-trang-tin-tuc.html">Tin tức</a></li>
                      <li><a target="_blank" rel="noopener noreferrer" href="https://vieclam.futabus.vn/">Tuyển dụng</a></li>
                      <li><a href="/vi-VN/ve-xe-phuong-trang-lien-he.html">Liên hệ</a></li>

                      <li><Link to="/login">Đăng nhập</Link></li>
                      <li><a target="_blank" rel="noopener noreferrer" href="https://hoadon.futabus.vn/">Hóa đơn</a></li>

                    </ul>
                  </div>
                </nav>
              </div>



              <section id="body-top">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 col-ms-12">
                      <div>

                        <ul className="v-tabs clearfix" role="tablist">
                          <li role="presentation" className="active"><a href="#booking" aria-controls="home" role="tab" data-toggle="tab">Mua vé trực tuyến</a></li>
                          <li><a href="/vi-VN/ve-xe-phuong-trang-huong-dan-dat-ve.html" className="text-default">Hướng dẫn đặt vé</a></li>

                        </ul>


                        <div className="tab-content">
                          <div role="tabpanel" className="tab-pane active" id="booking">
                            <form className="form" name="bookingPartialForm">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12">
                                  <div className="form-group">
                                    <label htmlFor="">Điểm khởi hành</label>
                                    <div className="controls">
                                      <i className="fa fa-bus text-primary"></i>

                                      <select name="idOrigin" id="idOrigin" className="form-control selectpicker">
                                        <option value="">Chọn điểm khởi hành</option>
                                      </select>
                                    </div>

                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12">
                                  <div className="form-group">
                                    <label htmlFor="">Điểm đến</label>
                                    <div className="controls">
                                      <i className="fa fa-bus text-primary"></i>

                                      <select name="idDest" id="idDest" className="form-control  selectpicker">
                                        <option value="">Chọn điểm đến</option>
                                      </select>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12">
                                  <div className="form-group">
                                    <label htmlFor="">Ngày khởi hành</label>
                                    <div className="controls">
                                      <i className="fa fa-clock-o text-primary"></i>

                                      <input type="text" name="dDate" placeholder=" dd/mm/yyyy" className="form-control dDate date-readonly" value="10-02-2020" readOnly />
                                      <small><em>Định dạng: dd-mm-yyyy</em></small>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-ms-12">
                                  <div className="form-group">
                                    <label htmlFor="">Số lượng vé</label>
                                    <div className="controls">
                                      <i className="fa fa-ticket text-primary"></i>

                                      <input type="number" name="numOfTicket" placeholder="1" defaultValue="1" className="form-control" min="1" max="10" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-6 col-ms-12">
                                  <button type="button" className="btn btn-primary btn-block btn-flat btn-booking"><i className="fa fa-ticket icon-flat bg-btn-actived"></i>Mua vé</button>
                                </div>


                              </div>
                            </form>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="profile">

                          </div>

                        </div>

                      </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 col-ms-12">
                      <div id="slider-home" className="flexslider">
                        <ul className="slides">
                          <li><a href="/vi-VN/2/ve-xe-phuong-trang-le-truyen-thong-futa-bus-lines-tri-an-bac-tai-nam-2020-279.html"><img alt="" src="/uploads/useravatar/TCBC Tri ân Bác Tài 2020 -web-01.png" /></a></li>

                          <li><a href="/vi-VN/2/ve-xe-phuong-trang-phuong-trang-futa-bus-lines-khai-truong-tuyen-ben-xe-mien-dong-di-ben-xe-phan-rang-va-nguoc-lai-269.html"><img alt="" src="/uploads/useravatar/Thong-cao-Khai-Truong-Phan-Rang-BXMĐ.png" /></a></li>
                          <li><a href="#"><img alt="" src="/uploads/useravatar/thong bao napas.jpg" /></a></li>

                        </ul>
                      </div>

                    </div>

                  </div>

                </div>
              </section>



              <section className="br-download-v2">
                <div className="container">
                  <div className="col-md-6 describe-part">
                    <p>*** Quý hành khách có thể đặt vé qua tổng đài phục vụ <strong>24/24</strong> của chúng tôi
            (kể cả thứ 7 và Chủ Nhật): <strong><a href="tel:1900 6067">1900 6067</a></strong> hoặc mua vé tiện lợi ngay trên chiếc
            điện thoại thông minh của quý vị thông qua <strong>app FUTA Bus</strong> trên cả hai hệ điều
            hành phổ biến nhất hiện nay là IOS và Android</p>
                  </div>
                  <div className="col-md-3 col-ms-6 hotline-part">
                    <h3>Tổng đài đặt vé và<br /> chăm sóc khách hàng</h3>
                    <span><a href="tel:1900 6067">1900 6067</a><sub><img alt="" src="Content/img/private/img247-10.png" /></sub></span>

                  </div>
                  <div className="col-md-3 col-ms-6 download-part">
                    <img alt="" className="phone-img" src="Content/img/private/imgip-13.png" />
                    <div className="download-button-part">
                      <p>TẢI APP FUTA BUS</p>
                      <a target="_blank" rel="noopener noreferrer" href="https://itunes.apple.com/us/app/futa/id1049039667"><img alt="" src="Content/img/private/bttnapple-11.png" /></a>

                      <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.futabus.activity"><img alt="" src="Content/img/private/bttngoogle-12.png" /></a>

                    </div>
                  </div>
                </div>


                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-12" style={{ marginBottom: 0 }}>
                    <img alt="" style={{ width: '100%' }} src="/uploads/useravatar/Khai truong VP Bồng Sơn-Web-01-01.png" />
                  </div>
                </div>
                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-12" style={{ marginBottom: 0 }}>
                    <img alt="" style={{ width: '100%' }} src="/uploads/useravatar/Thông báo tăng Cà Mau, Năm Căn - Sài Gòn- Website-01.png" />
                  </div>
                </div>
                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-12" style={{ marginBottom: 0 }}>
                    <img alt="" style={{ width: '100%' }} src="/uploads/useravatar/Thông-báo-chieu-ve-TPHCM.png" />
                  </div>
                </div>
                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-12" style={{ marginBottom: 0 }}>
                    <img alt="" style={{ width: '100%' }} src="/uploads/useravatar/thong-bao-tang-cuong-dot-3 (1).png" />
                  </div>
                </div>
                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-12" style={{ marginBottom: 0 }}>
                    <img alt="" style={{ width: '100%' }} src="/uploads/useravatar/thong-bao-tuyen-SG-DL.png" />
                  </div>
                </div>
                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-12" style={{ marginBottom: 0 }}>
                    <a href="/vi-VN/2/ve-xe-phuong-trang-bang-gia-ve-tet-2020-cac-tinh-mien-trung-di-tay-nguyen-va-nguoc-lai-278.html">
                      <img alt="" style={{ width: '100%' }} src="/uploads/useravatar/banner-vé-mien-trung-di-tay-nguyen.png" /></a>
                  </div>
                </div>
                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-6 col-sm-12" style={{ marginBottom: 0 }}>
                    <a href="/vi-VN/2/ve-xe-phuong-trang-bang-gia-ve-tet-nguyen-dan-2020-cac-tuyen-xuat-phat-tu-bx-mien-tay-277.html"><img alt="" src="/uploads/useravatar/banner mien tay.png" /></a>
                  </div>
                  <div className="col-md-6 col-sm-12" style={{ marginBottom: 0 }}>
                    <a href="/vi-VN/2/ve-xe-phuong-trang-bang-gia-ve-tet-nguyen-dan-2020-cac-tuyen-xuat-phat-tu-bx-mien-dong-276.html"><img alt="" src="/uploads/useravatar/banner mien dong.png" /></a>
                  </div>
                </div>
                <div className="container" style={{ paddingTop: 30, marginTop: 0 }}>
                  <div className="col-md-12" style={{ marginBottom: 0 }}>
                    <img alt="" style={{ width: '100%' }} src="/uploads/useravatar/Banner-web-khai-trương-VP-Cho-Ray (1).png" />
                  </div>
                </div>



















              </section>


              <section className="container" id="star-city">
                <h3 className="heading"><i className="fa fa-file-text" aria-hidden="true"></i> Khởi hành từ các thành phố lớn</h3>
                <div className="row">
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-01.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Sài Gòn</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>1900 6067</span></p>
                      <p>Điểm đến: Châu Đốc, Cần Thơ, Cà Mau, Đà Lạt, Mũi Né, Qui Nhơn, Nha Trang,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-sai-gon">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-02.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Đà Lạt</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>02633 58 58 58</span></p>
                      <p>Điểm đến: Nha Trang, Đà Nẵng, Huế, Sài Gòn, Cần Thơ, Quy Nhơn,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-da-lat">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-03.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Nha Trang</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>02583 812 812</span></p>
                      <p>Điểm đến: Sài Gòn, Đà Lạt, Đà Nẵng, Huế, Hà Nội, Cần Thơ,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-nha-trang">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-04.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Cần Thơ</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>02923 769 768</span></p>
                      <p>Điểm đến: Sài Gòn, Cà Mau, Rạch Giá, Châu Đốc, Đà Lạt,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-can-tho">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-05.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Đà Nẵng</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>02363 786 786</span></p>
                      <p>Điểm đến: Đà Lạt, Sài Gòn, Nha Trang, Hà Nội, Bảo Lộc,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-da-nang">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-06.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Hà Nội</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>0243 864 19 19</span></p>
                      <p>Điểm đến: Đà Nẵng, Nam Định,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-ha-noi">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-07.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Hà Tiên - Rạch Giá</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>02973 66 88 66 - 02973 691 691</span></p>
                      <p>Điểm đến: Sài Gòn, Cần Thơ,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-ha-tien">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-08.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Cà Mau - Năm Căn</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>02903 651 651 - 02903 715 715</span></p>
                      <p>Điểm đến: Sài Gòn, Cần Thơ,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-ca-mau">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                  <div className="col-md-4 startpoint-block">
                    <img alt="" src="Content/img/private/webfutabusline-09.png" />
                    <div className="startpoint-text">
                      <p>Khởi hành từ: <span>Long Xuyên - Châu Đốc</span><i> (Xem bản đồ)</i></p>
                      <p>Hotline: <span>02963 98 9999 - 02963 565 888</span></p>
                      <p>Điểm đến: Sài Gòn, Cần Thơ,...</p>
                      <a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html/#Star-long-xuyen">Chi tiết</a>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="container" id="more-info">
                <h3 className="heading"><i className="fa fa-file-text" aria-hidden="true"></i> Thông tin cần biết</h3>
                <div className="row">
                  <div className="col-md-4 thongtin-block">
                    <img alt="" src="Content/img/private/imgqdchung-17.png" />
                    <div className="thongtin-text">
                      <h3>Những quy định chung</h3>
                      <p>
                        Công ty xe khách Phương Trang khuyến khích quý khách đặt chỗ trước nhằm đảm bảo luôn có vị
                        trí ghế cho quý vị, tuy nhiên quý vị vẫn có thể đến tại bến để đi mà không cần gọi đặt chỗ.
                        Quý hành khách có thể mua vé bằng các hình thức linh hoạt nhưng vẫn đảm bảo...
                </p>
                      <a href="#" onClick={e => {
                        window.Updating();
                        e.preventDefault();
                      }}>Chi tiết</a>
                    </div>
                  </div>
                  <div className="col-md-4 thongtin-block">
                    <img alt="" src="Content/img/private/imgvchanghoa-18.png" />
                    <div className="thongtin-text">
                      <h3>Vận chuyển hàng hóa</h3>
                      <p>
                        Mỗi hành khách chỉ được mang theo 1 vali với kích thước trung bình và 1 túi hành lý
                        với kích cỡ xách tay. Hành lý được chấp thuận bao gồm vali, túi vải, thùng với những
                        khóa an toàn, mọi sự mất mát bên trong hành lý khi có khóa an toàn chúng tôi không chịu
                        trách nhiệm...
                </p>
                      <a href="#" onClick={e => {
                        window.Updating();
                        e.preventDefault();
                      }}>Chi tiết</a>
                    </div>
                  </div>
                  <div className="col-md-4 thongtin-block">
                    <img alt="" src="Content/img/private/imgtongtinhanhly-19.png" />
                    <div className="thongtin-text">
                      <h3>Thông tin hành lý</h3>
                      <p>
                        Để đảm bảo sự an toàn cho các hàng hóa vận chuyển và an toàn cho sự di chuyển của tất cả
                        quý hành khách trên chuyến xe, quý hành khách có nhu cầu với dịch vụ vận chuyển hàng hóa
                        vui lòng đọc kĩ các quy định liên quan đến hàng hóa cần vận chuyển bên dưới đây...
                </p>
                      <a href="#" onClick={e => {
                        window.Updating();
                        e.preventDefault();
                      }}>Chi tiết</a>
                    </div>
                  </div>
                </div>

              </section>

              <div className="container">
                <div className="col-md-12" style={{ marginBottom: 30 }}>


                  <img alt="" src="/uploads/useravatar/Banner Khai Truong VP Vinh Thuan-01.png" />
                </div>
                <div className="col-md-6">


                </div>
                <div className="col-md-6">


                </div>
              </div>
              <div id="body-service" className="container">
                <h3 className="heading wow fadeInUp animated" data-wow-offset="15" data-wow-duration="1.2s"><i className="fa fa-newspaper-o"></i> Tin tức mới</h3>
                <div className="row">
                  <article className="col-sm-6 rst-leftpost wow fadeInUp animated" data-wow-offset="20" data-wow-duration="1.2s">
                    <div className="rst-specpost">
                      <a href="/vi-VN/2/ve-xe-phuong-trang-nguyen-chu-tich-nuoc-truong-tan-sang-da-den-tham-va-chuc-tet-nguoi-dan-tai-ben-xe-mien-tay-281.html">
                        <img src="/uploads/useravatar/thumb/phuong trang 071-555x325.jpeg" alt="" />
                      </a>
                    </div>
                    <div className="rst-postinfo">
                      <h6><a href="/vi-VN/2/ve-xe-phuong-trang-nguyen-chu-tich-nuoc-truong-tan-sang-da-den-tham-va-chuc-tet-nguoi-dan-tai-ben-xe-mien-tay-281.html">Nguy&#234;n Chủ tịch nước Trương Tấn Sang đ&#227; đến thăm v&#224; ch&#250;c Tết người d&#226;n tại bến xe Miền T&#226;y</a></h6>
                      <time>Đăng ngày: 20-01-2020&nbsp; <i className="fa fa-comments"></i> <span className="fb-comments-count" data-href="/vi-VN/2/ve-xe-phuong-trang-nguyen-chu-tich-nuoc-truong-tan-sang-da-den-tham-va-chuc-tet-nguoi-dan-tai-ben-xe-mien-tay-281.html"></span> bình luận</time>
                      <p>Chiều ng&#224;y 20/1 tức ng&#224;y 26 Tết, Nguy&#234;n Chủ tịch nước Trương Tấn Sang đ&#227; đến thăm v&#224; ch&#250;c Tết người d&#226;n tại bến xe Miền T&#226;y.</p>
                    </div>
                  </article>
                  <div className="col-sm-6 rst-rightpost wow fadeInUp animated" data-wow-offset="20" data-wow-duration="1.2s">
                    <article>
                      <div className="rst-postinfo">

                        <h6><a href="/vi-VN/2/ve-xe-phuong-trang-phuong-trang-futa-bus-lines-duoc-vinh-danh-top-5-cong-ty-uy-tin-nganh-van-tai-va-logistics-nam-2019-280.html">Phương Trang - FUTA Bus Lines được vinh danh  Top 5 C&#244;ng ty uy t&#237;n ng&#224;nh Vận tải v&#224; Logistics năm 2019</a></h6>
                        <time>Đăng ngày: 10-01-2020&nbsp; <i className="fa fa-comments"></i> <span className="fb-comments-count" data-href="/vi-VN/2/ve-xe-phuong-trang-phuong-trang-futa-bus-lines-duoc-vinh-danh-top-5-cong-ty-uy-tin-nganh-van-tai-va-logistics-nam-2019-280.html"></span> bình luận</time>
                        <p></p>
                        <p>Phương Trang - FUTA Bus Lines được vinh danh  Top 5 C&#244;ng ty uy t&#237;n ng&#224;nh Vận tải v&#224; Logistics năm 2019</p>
                      </div>
                    </article>
                    <article>
                      <div className="rst-postinfo">

                        <h6><a href="/vi-VN/2/ve-xe-phuong-trang-le-truyen-thong-futa-bus-lines-tri-an-bac-tai-nam-2020-279.html">LỄ TRUYỀN THỐNG FUTA BUS LINES TRI &#194;N B&#193;C T&#192;I NĂM 2020</a></h6>
                        <time>Đăng ngày: 06-01-2020&nbsp; <i className="fa fa-comments"></i> <span className="fb-comments-count" data-href="/vi-VN/2/ve-xe-phuong-trang-le-truyen-thong-futa-bus-lines-tri-an-bac-tai-nam-2020-279.html"></span> bình luận</time>
                        <p></p>
                        <p>C&#244;ng ty Cổ Phần Xe Kh&#225;ch Phương Trang – FUTA Bus Lines tổ chức Lễ Truyền thống Tri &#226;n B&#225;c T&#224;i năm 2020 tại Quốc lộ 1A đoạn qua x&#227; H&#242;a Kh&#225;nh, huyện C&#225;i B&#232;, tỉnh Tiền Giang. </p>
                      </div>
                    </article>
                    <article>
                      <div className="rst-postinfo">

                        <h6><a href="/vi-VN/2/ve-xe-phuong-trang-bang-gia-ve-tet-nguyen-dan-2020-cac-tinh-mien-trung-di-tay-nguyen-va-nguoc-lai-278.html">BẢNG GI&#193; V&#201; TẾT NGUY&#202;N Đ&#193;N 2020 - C&#193;C TỈNH MIỀN TRUNG ĐI T&#194;Y NGUY&#202;N V&#192; NGƯỢC LẠI</a></h6>
                        <time>Đăng ngày: 23-12-2019&nbsp; <i className="fa fa-comments"></i> <span className="fb-comments-count" data-href="/vi-VN/2/ve-xe-phuong-trang-bang-gia-ve-tet-nguyen-dan-2020-cac-tinh-mien-trung-di-tay-nguyen-va-nguoc-lai-278.html"></span> bình luận</time>
                        <p></p>
                        <p>BẢNG GI&#193; V&#201; TẾT NGUY&#202;N Đ&#193;N 2020 - C&#193;C TỈNH MIỀN TRUNG ĐI T&#194;Y NGUY&#202;N V&#192; NGƯỢC LẠI</p>
                      </div>
                    </article>
                  </div>
                </div>
              </div>


              <section id="body-news" className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-ms-12">
                    <div className="item-block">
                      <div className="items-news text-center wow fadeInUp animated" data-wow-offset="15" data-wow-duration="1.2s">
                        <img alt="" src="Content/img/customer.png" />
                        <h5>
                          <a href="">Hơn 20 triệu lượt khách</a>

                        </h5>
                        <p>Phương Trang phục vụ hơn 20 triệu lượt khách/ bình quân 1 năm trên toàn quốc</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-ms-12">
                    <div className="item-block">
                      <div className="items-news text-center wow fadeInUp animated" data-wow-offset="15" data-wow-duration="1.2s">
                        <img alt="" src="Content/img/home.png" />
                        <h5>
                          <a href="">Hơn 200 Phòng vé, Trạm trung chuyển</a>

                        </h5>
                        <p>Phương Trang có hơn 200 Phòng vé, Trạm trung chuyển, Bến xe... trên toàn hệ thống FUTA</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-ms-12">
                    <div className="item-block">
                      <div className="items-news text-center wow fadeInUp animated" data-wow-offset="15" data-wow-duration="1.2s">
                        <img alt="" src="Content/img/tech.png" />
                        <h5>
                          <a href="">Hơn 1,000 chuyến mỗi ngày</a>

                        </h5>
                        <p>Phương Trang phục vụ hơn 1000 chuyến xe đường dài và liên tỉnh mỗi ngày.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>





            </div>
            <div className="sb-slidebar sb-left">

              <ul>
                <li className="first text-center">
                  <a href="/">
                    <img width="200" src="Content/img/logo.png" alt="" />
                  </a>
                </li>
                <li><a href="/en-US"><img src="Content/res/GB.png" style={{ paddingBottom: 2 }} alt="English" />&nbsp;<span>English</span></a></li>
                <li><a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html">Giá vé</a></li>
                <li><a href="/vi-VN/cac-chuong-trinh-khuyen-mai.html">Khuyến mãi</a></li>
                <li><a href="/vi-VN/ve-xe-phuong-trang-tin-tuc.html">Tin tức</a></li>
                <li><a href="/vi-VN/ve-xe-phuong-trang-lien-he.html">Liên hệ</a></li>

                <li><a href="https://id.futabus.vn">Đăng nhập</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://hoadon.futabus.vn/">Hóa đơn</a></li>

                <li><a href="/vi-VN/ve-xe-phuong-trang-van-chuyen-hanh-khach.html">Dịch vụ vận chuyển hành khách</a></li>
                <li><a href="http://www.futaexpress.vn/">Dịch vụ vận chuyển hàng hoá</a></li>
                <li><a href="http://futataxi.vn/">Dịch vụ taxi</a></li>
                <li><a href="/vi-VN/ve-xe-phuong-trang-tram-dung-chan.html">Dịch vụ trạm dừng</a></li>
                <li><a href="#cd-nav" className="cd-nav-trigger-mobile">Khuyến mãi mới</a></li>
              </ul>

            </div>

            <footer>


              <div id="footer-body">
                <div className="f-body-wrap container">

                  <nav id="nav-f">
                    <ul>
                      <li><a href="/vi-VN/ve-xe-phuong-trang-lich-trinh.html">Lịch trình</a></li>
                      <li><a href="/vi-VN/ve-xe-phuong-trang-ve-chung-toi.html">Về chúng tôi</a></li>
                      <li><a href="/vi-VN/ve-xe-phuong-trang-dieu-khoan-su-dung.html">Điều khoản sử dụng</a></li>

                      <li><a href="/vi-VN/ve-xe-phuong-trang-tin-tuc.html">Tin tức</a></li>
                      <li><a target="_blank" rel="noopener noreferrer" href="https://vieclam.futabus.vn/">Tuyển dụng</a></li>
                      <li><a href="/vi-VN/cau-hoi-thuong-gap.html">Hỏi &amp; Đáp</a></li>
                    </ul>
                  </nav>

                  <div id="f-info" className="row">
                    <div className="col-md-5 col-md-offset-2">
                      <div id="download_btn">
                        <ul>
                          <li>Tải app FUTA Bus tại</li>
                          <li>
                            <a href="https://itunes.apple.com/us/app/futa/id1049039667" target="_blank" rel="noopener noreferrer">
                              <img alt="" src="Content/img/app-store.png" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.futabus.activity" target="_blank" rel="noopener noreferrer">
                              <img alt="" src="Content/img/an-droid.png" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div id="social">
                        <ul style={{ textAlign: 'left' }}>
                          <li>Kết nối với chúng tôi</li>
                          <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/xephuongtrang">
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
                    </div>

                    <div className="col-md-5 text-left">
                      <a target="_blank" rel="noopener noreferrer" href="http://www.online.gov.vn/CustomWebsiteDisplay.aspx?DocId=14037">
                        <img alt="" src="Content/img/private/dathongbao-bocongthuong.png" className="logo-bocongthuong" />
                      </a>
                    </div>

                  </div>

                  <div className="f-copy">


                    <p>&copy; 2001-2016 | Bản quyền thuộc về Công ty Cổ Phần Xe Khách Phương Trang FUTA Bus Lines | <a href="/">www.futabus.vn</a></p>
                  </div>
                </div>
              </div>

            </footer>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
