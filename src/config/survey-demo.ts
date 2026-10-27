export type SurveyProfile = Readonly<{ id: string; name: string; location: string; image?: string }>;
export type CategoryResponse = { selected: string[]; noneUsed: boolean; ratings: Record<string, number>; completed: boolean };

// Demo fixtures from the user-supplied HTML. Canonical category names remain from the Google Sheet.
const profilesByCategory: Record<string, readonly SurveyProfile[]> = {
  "creative-product": [
    { id: 'creative-vinwonders-phu-quoc', name: 'VinWonders Phú Quốc', location: 'Phú Quốc · Công viên chủ đề', image: '/assets/survey-demo/vinwonders-phu-quoc.jpg' },
    { id: 'creative-vinwonders-hoi-an', name: 'VinWonders Nam Hội An', location: 'Nam Hội An · Văn hóa và giải trí', image: '/assets/survey-demo/vinwonders-nam-hoi-an.jpg' },
    { id: 'creative-safari-phu-quoc', name: 'Vinpearl Safari Phú Quốc', location: 'Phú Quốc · Trải nghiệm thiên nhiên', image: '/assets/survey-demo/safari-phu-quoc.jpg' },
  ],
  "destination": [
    { id: 'destination-da-nang', name: 'Đà Nẵng', location: 'Việt Nam · Thành phố biển', image: '/assets/survey-demo/da-nang.jpg' },
    { id: 'destination-phu-quoc', name: 'Phú Quốc', location: 'Việt Nam · Du lịch biển đảo', image: '/assets/survey-demo/phu-quoc.jpg' },
    { id: 'destination-nha-trang', name: 'Nha Trang', location: 'Việt Nam · Vịnh biển', image: '/assets/survey-demo/nha-trang.jpg' },
    { id: 'destination-ha-long', name: 'Hạ Long', location: 'Việt Nam · Di sản thiên nhiên', image: '/assets/survey-demo/ha-long.jpg' },
    { id: 'destination-hue', name: 'Huế', location: 'Việt Nam · Di sản văn hóa', image: '/assets/survey-demo/hue.jpg' },
    { id: 'destination-da-lat', name: 'Đà Lạt', location: 'Việt Nam · Cao nguyên', image: '/assets/survey-demo/da-lat.jpg' },
    { id: 'destination-ha-noi', name: 'Hà Nội', location: 'Việt Nam · Thủ đô', image: '/assets/survey-demo/ha-noi.jpg' },
    { id: 'destination-sa-pa', name: 'Sa Pa', location: 'Việt Nam · Miền núi phía Bắc', image: '/assets/survey-demo/sa-pa.jpg' },
  ],
  "hotel": [
    {
      "id": "tc-1-p1",
      "name": "Hotel A — The Reverie Saigon Luxury",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tc-1-p2",
      "name": "Hotel B — Park Hyatt Saigon Center",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tc-1-p3",
      "name": "Hotel C — Sofitel Legend Metropole",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tc-1-p4",
      "name": "Hotel D — InterContinental Landmark",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tc-1-p5",
      "name": "Hotel E — Caravelle Saigon Heritage",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    }
  ],
  "tour-operator": [
    {
      "id": "tc-2-p1",
      "name": "Vietravel — Lữ hành Quốc tế & Nội địa",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tc-2-p2",
      "name": "Saigontourist Travel Service",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tc-2-p3",
      "name": "BenThanh Tourist Corporation",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tc-2-p4",
      "name": "Hanoitourist Service Company",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tc-2-p5",
      "name": "Fiditour — Vietluxtour Travel",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    }
  ],
  "airline": [
    {
      "id": "tc-3-p1",
      "name": "Vietnam Airlines — Hãng Hàng không Quốc gia",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tc-3-p2",
      "name": "Vietjet Air — Hàng không Thế hệ mới",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tc-3-p3",
      "name": "Bamboo Airways — Hơn cả một chuyến bay",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tc-3-p4",
      "name": "Vietravel Airlines — Hàng không Du lịch",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tc-3-p5",
      "name": "VASCO — Công ty Bay Dịch vụ Hàng không",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    }
  ],
  "resort": [
    {
      "id": "tc-5-p1",
      "name": "Amanoi Vinh Hy Bay Sanctuary",
      "location": "Ninh Thuan, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tc-5-p2",
      "name": "Six Senses Con Dao Eco Resort",
      "location": "Ba Ria - Vung Tau, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tc-5-p3",
      "name": "JW Marriott Phu Quoc Emerald Bay",
      "location": "Phu Quoc, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tc-5-p4",
      "name": "InterContinental Danang Sun Peninsula",
      "location": "Da Nang, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tc-5-p5",
      "name": "Topas Ecolodge Sapa Mountain Retreat",
      "location": "Lao Cai, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    }
  ],
  "culinary-experience": [
    {
      "id": "tc-6-p1",
      "name": "Anan Saigon — Modern Vietnamese Cuisine",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tc-6-p2",
      "name": "Gia Restaurant — Fine Dining Contemporary",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tc-6-p3",
      "name": "La Maison 1888 Culinary Destination",
      "location": "Da Nang, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tc-6-p4",
      "name": "Cục Gạch Quán — Ẩm thực Truyền thống Việt",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tc-6-p5",
      "name": "Hibana by Koki — Capella Hanoi",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    }
  ],
  "digital": [
    {
      "id": "tp-1-p1",
      "name": "Hồ sơ #01 — Nền tảng Du lịch Thông minh V-Smart",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tp-1-p2",
      "name": "Hồ sơ #02 — Hệ sinh thái Đặt dịch vụ OnePass AI",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tp-1-p3",
      "name": "Hồ sơ #03 — Bản đồ số Di sản 3D/VR Việt Nam",
      "location": "Da Nang, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tp-1-p4",
      "name": "Hồ sơ #04 — Giải pháp Check-in Sinh trắc học SmartGate",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tp-1-p5",
      "name": "Hồ sơ #05 — Trợ lý Ảo Đa ngôn ngữ TravelMate",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    }
  ],
  "sustainability": [
    {
      "id": "tp-2-p1",
      "name": "Hồ sơ #01 — Khu Bảo tồn Sinh thái Rừng Ngập mặn Xanh",
      "location": "Ca Mau, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tp-2-p2",
      "name": "Hồ sơ #02 — Chuỗi Lưu trú Không Rác thải Nhựa ZeroWaste",
      "location": "Quang Nam, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tp-2-p3",
      "name": "Hồ sơ #03 — Năng lượng Mặt trời Đảo Xanh SolarBay",
      "location": "Khanh Hoa, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tp-2-p4",
      "name": "Hồ sơ #04 — Nông trại Hữu cơ Kết hợp Nghỉ dưỡng tuần hoàn",
      "location": "Lam Dong, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tp-2-p5",
      "name": "Hồ sơ #05 — Sáng kiến Tái tạo Rạn San hô Biển Đảo",
      "location": "Phu Quoc, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    }
  ],
  "tourism-campaign": [
    {
      "id": "tp-7-p1",
      "name": "Hồ sơ #01 — Chiến dịch \"Việt Nam: Đi Để Yêu — Sống Trọn Vẹn\"",
      "location": "Toàn quốc, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tp-7-p2",
      "name": "Hồ sơ #02 — Lễ hội Ánh sáng & Drone Nghệ thuật Vịnh Biển",
      "location": "Khanh Hoa, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tp-7-p3",
      "name": "Hồ sơ #03 — Series Phim Ngắn Quảng bá Ẩm thực Đường phố Việt",
      "location": "HCMC, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tp-7-p4",
      "name": "Hồ sơ #04 — Chiến dịch Marathon Cung đường Di sản Xanh",
      "location": "Quang Ninh, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tp-7-p5",
      "name": "Hồ sơ #05 — Triển lãm Đa giác quan Văn hóa Cố đô",
      "location": "Hue, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    }
  ],
  "travel-experience": [
    {
      "id": "tp-8-p1",
      "name": "Hồ sơ #01 — Show Thực cảnh \"Ký Ức Hội An\" Phiên bản Mới",
      "location": "Quang Nam, Vietnam",
      "image": "/assets/survey-demo/thumb_coast.jpg"
    },
    {
      "id": "tp-8-p2",
      "name": "Hồ sơ #02 — Tinh Hoa Bắc Bộ — Sân khấu Thực cảnh Mặt nước",
      "location": "Ha Noi, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    },
    {
      "id": "tp-8-p3",
      "name": "Hồ sơ #03 — Hành trình Đêm Hoàng Cung & Nhã nhạc Cung đình",
      "location": "Hue, Vietnam",
      "image": "/assets/survey-demo/thumb_hotel.jpg"
    },
    {
      "id": "tp-8-p4",
      "name": "Hồ sơ #04 — Làng Gốm Cổ & Xưởng Trải nghiệm Thủ công Đương đại",
      "location": "Binh Duong, Vietnam",
      "image": "/assets/survey-demo/thumb_tech.jpg"
    },
    {
      "id": "tp-8-p5",
      "name": "Hồ sơ #05 — Không gian Văn hóa Cồng chiêng Tây Nguyên Bản sắc",
      "location": "Dak Lak, Vietnam",
      "image": "/assets/survey-demo/thumb_eco.jpg"
    }
  ]
};

export const ratingLevels = [
  {
    "value": 1,
    "label": "Rất không hài lòng"
  },
  {
    "value": 2,
    "label": "Không hài lòng"
  },
  {
    "value": 3,
    "label": "Bình thường"
  },
  {
    "value": 4,
    "label": "Hài lòng"
  },
  {
    "value": 5,
    "label": "Rất hài lòng"
  }
] as const;

export function getSurveyProfiles(categoryId: string): readonly SurveyProfile[] {
  return profilesByCategory[categoryId] ?? Array.from({ length: 5 }, (_, index) => ({
    id: `${categoryId}-demo-${index + 1}`,
    name: `Hồ sơ minh họa ${String(index + 1).padStart(2, '0')}`,
    location: 'Chờ danh sách hồ sơ chính thức',
  }));
}

export function emptyResponse(): CategoryResponse {
  return { selected: [], noneUsed: false, ratings: {}, completed: false };
}
