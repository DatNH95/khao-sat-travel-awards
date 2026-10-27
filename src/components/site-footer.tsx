import Image from 'next/image';
import { BrandGraphic } from './brand-graphics';
import { Container } from './primitives';
import { travelAwardsUrl } from '@/config/site';

/** Travel Awards common footer; contact details and artwork follow the reference component. */
export function SiteFooter() {
  return <footer className="home-footer"><Container>
    <div className="home-footer-navigation"><span><BrandGraphic /></span><nav aria-label="Điều hướng chân trang"><span role="link" aria-disabled="true" aria-label="Trang chủ Travel Awards"><Image src="/assets/key-visual/home.svg" alt="" width={20} height={20} unoptimized /></span><a href={travelAwardsUrl('/#awards')}>Giải thưởng</a><span role="link" aria-disabled="true">Thể lệ</span><a href={travelAwardsUrl('/#news')}>Tin tức</a></nav></div>
    <div className="home-footer-utilities"><a className="home-footer-utility" href="https://vnexpress.net/">← Trở lại VnExpress</a><div><button type="button" className="home-footer-utility home-footer-utility--facebook" disabled title="Fanpage sẽ được cập nhật"><span className="home-footer-icon home-footer-icon--facebook" aria-hidden="true" />Fanpage</button><a className="home-footer-utility home-footer-utility--feedback" href="mailto:sukien@vnexpress.net"><span className="home-footer-icon home-footer-icon--feedback" aria-hidden="true" />Góp ý cho sự kiện</a><a className="home-footer-utility" href="https://vnexpress.net/dieu-khoan-su-dung">Điều khoản sử dụng</a><a href="#main">Về đầu trang ↑</a></div></div>
    <div className="home-footer-information"><div><p className="home-footer-label">Báo tiếng Việt nhiều người xem nhất</p><p>Thuộc Bộ Khoa học và Công nghệ</p><p>Số giấy phép: 548/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 24/8/2021</p><dl><div><dt>Tổng biên tập:</dt><dd>Phạm Văn Hiếu</dd></div><div><dt>Địa chỉ:</dt><dd>Tầng 10, Tòa A FPT Tower, số 10 Phạm Văn Bạch, <span className="home-footer-address-locality">phường Cầu Giấy, Hà Nội</span></dd></div><div><dt>Đường dây nóng:</dt><dd><a href="tel:0838880123">083 888 0123</a></dd></div><div><dt>Email:</dt><dd><a href="mailto:bandoc@vnexpress.net">bandoc@vnexpress.net</a></dd></div></dl></div><div><p className="home-footer-label">Thông tin liên hệ</p><dl><div><dt>Email:</dt><dd><a href="mailto:sukien@vnexpress.net">sukien@vnexpress.net</a></dd></div></dl></div></div>
    <div className="home-footer-bottom"><strong>Khảo sát - Travel Awards 2026</strong><span>© 1997–2026. Toàn bộ bản quyền thuộc VnExpress.</span></div>
  </Container></footer>;
}
