// Static presentation fixtures, not submitted nominations. Field mapping follows
// registration's nominee-0 (title) and registration-0 (applicant) / destination-0.
export const demoEntrants: Record<string, readonly string[]> = {
  destination: ['Sở Du lịch thành phố Đà Nẵng', 'Trung tâm Xúc tiến Du lịch Phú Quốc', 'Sở Du lịch Khánh Hòa', 'Sở Du lịch Quảng Ninh', 'Sở Du lịch thành phố Huế', 'Trung tâm Xúc tiến Du lịch Lâm Đồng', 'Sở Du lịch Hà Nội', 'Trung tâm Thông tin và Xúc tiến Du lịch Lào Cai'],
  hotel: ['Công ty Cổ phần Đầu tư Times Square Việt Nam', 'Khách sạn Park Hyatt Saigon', 'Khách sạn Sofitel Legend Metropole Hà Nội', 'Khách sạn InterContinental Saigon', 'Khách sạn Caravelle Saigon'],
  'tour-operator': ['Công ty Cổ phần Du lịch Vietravel', 'Công ty TNHH MTV Dịch vụ Lữ hành Saigontourist', 'Công ty Cổ phần Dịch vụ Du lịch Bến Thành', 'Tổng công ty Du lịch Hà Nội', 'Công ty Cổ phần Lữ hành Vietluxtour'],
  airline: ['Tổng công ty Hàng không Việt Nam', 'Công ty Cổ phần Hàng không Vietjet', 'Công ty Cổ phần Hàng không Tre Việt', 'Công ty Cổ phần Hàng không Lữ hành Việt Nam', 'Công ty Bay Dịch vụ Hàng không VASCO'],
  resort: ['Khu nghỉ dưỡng Amanoi', 'Khu nghỉ dưỡng Six Senses Côn Đảo', 'Khu nghỉ dưỡng JW Marriott Phú Quốc', 'Khu nghỉ dưỡng InterContinental Danang Sun Peninsula', 'Khu nghỉ dưỡng Topas Ecolodge'],
  'creative-product': ['Công ty Cổ phần Vinpearl', 'Công ty Cổ phần Vinpearl', 'Công ty Cổ phần Vinpearl'],
  'culinary-experience': ['Nhà hàng Ănăn Saigon', 'Nhà hàng Gia', 'Khu nghỉ dưỡng InterContinental Danang Sun Peninsula', 'Nhà hàng Cục Gạch Quán', 'Khách sạn Capella Hà Nội'],
  digital: ['Công ty Công nghệ Du lịch Việt', 'Công ty Giải pháp OnePass', 'Trung tâm Sáng tạo Di sản Việt', 'Công ty Công nghệ SmartGate', 'Công ty Giải pháp TravelMate'],
  sustainability: ['Hợp tác xã Du lịch Rừng Xanh', 'Công ty Du lịch ZeroWaste Việt Nam', 'Công ty Năng lượng và Du lịch SolarBay', 'Hợp tác xã Nông nghiệp Du lịch Tuần Hoàn', 'Trung tâm Bảo tồn Biển Đảo Xanh'],
  'tourism-campaign': ['Trung tâm Xúc tiến Du lịch Việt', 'Công ty Sự kiện Ánh Sáng Việt', 'Công ty Truyền thông Hành Trình Việt', 'Công ty Du lịch và Thể thao Di Sản', 'Trung tâm Văn hóa và Du lịch Cố Đô'],
  'travel-experience': ['Công ty Biểu diễn Nghệ thuật Hội An', 'Công ty Văn hóa và Du lịch Bắc Bộ', 'Trung tâm Trải nghiệm Di sản Huế', 'Hợp tác xã Gốm và Du lịch Thủ Công', 'Hợp tác xã Du lịch Văn hóa Tây Nguyên'],
};

export const additionalDemoProfiles: Record<string, readonly (readonly [string, string])[]> = {
  'tourism-personality': [['Nguyễn Minh Anh', 'Nguyễn Minh Anh'], ['Trần Hoàng Nam', 'Trần Hoàng Nam'], ['Lê Thu Hà', 'Lê Thu Hà'], ['Phạm Quang Huy', 'Phạm Quang Huy'], ['Đỗ Ngọc Mai', 'Đỗ Ngọc Mai']],
  'tourism-ambassador': [['Hành trình Việt cùng Minh An', 'Nguyễn Minh An'], ['Khám phá cùng Hoàng Linh', 'Trần Hoàng Linh'], ['Dọc miền di sản', 'Lê Thanh Hà'], ['Đi và kể', 'Phạm Gia Huy'], ['Chuyện những chuyến đi', 'Đỗ Ngọc Anh']],
  'green-destination': [['Cù Lao Xanh — Hành trình không rác', 'Hợp tác xã Du lịch Cù Lao Xanh'], ['Thung lũng xanh An Nhiên', 'Công ty Du lịch Sinh thái An Nhiên'], ['Rừng và biển Bình Minh', 'Hợp tác xã Du lịch Bình Minh'], ['Đảo xanh Hòa Bình', 'Công ty Du lịch Đảo Xanh'], ['Vườn di sản Mộc Nhiên', 'Hợp tác xã Du lịch Mộc Nhiên']],
  'community-tourism': [['Làng du lịch Bản Mây', 'Hợp tác xã Du lịch Cộng đồng Bản Mây'], ['Làng nghề An Hòa', 'Hợp tác xã Du lịch An Hòa'], ['Bản văn hóa Suối Xanh', 'Hợp tác xã Du lịch Suối Xanh'], ['Làng chài Bình Yên', 'Hợp tác xã Du lịch Bình Yên'], ['Bản du lịch Mùa Vàng', 'Hợp tác xã Du lịch Mùa Vàng']],
};
