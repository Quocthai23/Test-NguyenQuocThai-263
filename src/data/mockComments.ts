export interface CommentData {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  timestamp: string;
  likesCount: number;
}

export const mockComments: Record<string, CommentData[]> = {
  'v1': [
    {
      id: 'c1',
      userId: 'u1',
      userName: 'nguyen.van.a',
      userAvatar: 'https://i.pravatar.cc/150?u=1',
      content: 'Phim hoạt hình này hay quá, xem đi xem lại không chán 😍',
      timestamp: '2 giờ trước',
      likesCount: 120,
    },
    {
      id: 'c2',
      userId: 'u2',
      userName: 'tran_b',
      userAvatar: 'https://i.pravatar.cc/150?u=2',
      content: 'Nhân vật thỏ làm từ Blender đỉnh thật sự',
      timestamp: '5 giờ trước',
      likesCount: 85,
    },
    {
      id: 'c3',
      userId: 'u3',
      userName: 'hoang_c',
      userAvatar: 'https://i.pravatar.cc/150?u=3',
      content: 'Tuyệt vời!!! 👏',
      timestamp: '1 ngày trước',
      likesCount: 12,
    }
  ],
  'v2': [
    {
      id: 'c4',
      userId: 'u4',
      userName: 'vibes_master',
      userAvatar: 'https://i.pravatar.cc/150?u=4',
      content: 'Chill phết, cuối tuần nghe bài này là chuẩn bài 🚗',
      timestamp: '1 giờ trước',
      likesCount: 200,
    },
    {
      id: 'c5',
      userId: 'u5',
      userName: 'music.lover',
      userAvatar: 'https://i.pravatar.cc/150?u=5',
      content: 'Cho mình xin tên bài hát với ạ?',
      timestamp: '4 giờ trước',
      likesCount: 45,
    }
  ],
  'v3': [
    {
      id: 'c6',
      userId: 'u6',
      userName: 'travel_holic',
      userAvatar: 'https://i.pravatar.cc/150?u=6',
      content: 'Nhìn hùng vĩ quá bạn ơi, địa điểm này ở đâu thế?',
      timestamp: '30 phút trước',
      likesCount: 45,
    },
    {
      id: 'c7',
      userId: 'u7',
      userName: 'nature.lover',
      userAvatar: 'https://i.pravatar.cc/150?u=7',
      content: 'Nước trong vắt luôn, nhìn mát mắt thật!',
      timestamp: '2 giờ trước',
      likesCount: 18,
    }
  ],
  'v4': [
    {
      id: 'c8',
      userId: 'u8',
      userName: 'relax_daily',
      userAvatar: 'https://i.pravatar.cc/150?u=8',
      content: 'Nghe tiếng nước chảy róc rách thấy nhẹ lòng hẳn 🌲',
      timestamp: '10 phút trước',
      likesCount: 50,
    },
    {
      id: 'c9',
      userId: 'u9',
      userName: 'peaceful_mind',
      userAvatar: 'https://i.pravatar.cc/150?u=9',
      content: 'Thích hợp để làm nhạc nền lúc làm việc cực kì.',
      timestamp: '1 giờ trước',
      likesCount: 22,
    }
  ],
  'v5': [
    {
      id: 'c10',
      userId: 'u10',
      userName: 'summer_boy',
      userAvatar: 'https://i.pravatar.cc/150?u=10',
      content: 'Thèm đi biển quá đi thôi, nắng đẹp dã man 🏖️',
      timestamp: '15 phút trước',
      likesCount: 95,
    },
    {
      id: 'c11',
      userId: 'u11',
      userName: 'bikini_vibes',
      userAvatar: 'https://i.pravatar.cc/150?u=11',
      content: 'Kính râm xinh thế, mua ở đâu thế bạn?',
      timestamp: '3 giờ trước',
      likesCount: 30,
    }
  ],
  'v6': [
    {
      id: 'c12',
      userId: 'u12',
      userName: 'wave_catcher',
      userAvatar: 'https://i.pravatar.cc/150?u=12',
      content: 'Cảnh sóng vỗ chậm nhìn nghệ thuật thật sự 🌊',
      timestamp: '45 phút trước',
      likesCount: 78,
    },
    {
      id: 'c13',
      userId: 'u13',
      userName: 'ocean_breeze',
      userAvatar: 'https://i.pravatar.cc/150?u=13',
      content: 'Yêu biển ghê gớm, cảm giác tự do tự tại.',
      timestamp: '5 giờ trước',
      likesCount: 42,
    }
  ],
  'v7': [
    {
      id: 'c14',
      userId: 'u14',
      userName: 'autumn_fan',
      userAvatar: 'https://i.pravatar.cc/150?u=14',
      content: 'Màu lá phong đỏ phản chiếu xuống hồ đẹp mê ly 🍁',
      timestamp: '2 giờ trước',
      likesCount: 88,
    },
    {
      id: 'c15',
      userId: 'u15',
      userName: 'golden_leaves',
      userAvatar: 'https://i.pravatar.cc/150?u=15',
      content: 'Mùa thu là mùa đẹp nhất trong năm, không bàn cãi!',
      timestamp: '6 giờ trước',
      likesCount: 31,
    }
  ],
  'v8': [
    {
      id: 'c16',
      userId: 'u16',
      userName: 'astro_boy',
      userAvatar: 'https://i.pravatar.cc/150?u=16',
      content: 'Vũ trụ rộng lớn bao la quá, nhìn bản thân thật nhỏ bé 🌌🚀',
      timestamp: '1 giờ trước',
      likesCount: 110,
    },
    {
      id: 'c17',
      userId: 'u17',
      userName: 'scifi_geek',
      userAvatar: 'https://i.pravatar.cc/150?u=17',
      content: 'Kỹ xảo làm đẹp quá, trông như phim Interstellar.',
      timestamp: '3 giờ trước',
      likesCount: 54,
    }
  ],
  'v9': [
    {
      id: 'c18',
      userId: 'u18',
      userName: 'sky_watcher',
      userAvatar: 'https://i.pravatar.cc/150?u=18',
      content: 'Dải Ngân Hà chụp phơi sáng đỉnh cao thật sự ✨',
      timestamp: '20 phút trước',
      likesCount: 130,
    },
    {
      id: 'c19',
      userId: 'u19',
      userName: 'cam_user',
      userAvatar: 'https://i.pravatar.cc/150?u=19',
      content: 'Cho xin thông số máy ảnh chụp bức này đi chủ thớt.',
      timestamp: '4 giờ trước',
      likesCount: 47,
    }
  ],
  'v10': [
    {
      id: 'c20',
      userId: 'u20',
      userName: 'winter_fell',
      userAvatar: 'https://i.pravatar.cc/150?u=20',
      content: 'Nhìn thôi đã thấy lạnh buốt rồi nhưng đẹp quá ❄️',
      timestamp: '1 giờ trước',
      likesCount: 65,
    },
    {
      id: 'c21',
      userId: 'u21',
      userName: 'snow_flake',
      userAvatar: 'https://i.pravatar.cc/150?u=21',
      content: 'Ước một lần được đến khu rừng tuyết trắng như này.',
      timestamp: '7 giờ trước',
      likesCount: 19,
    }
  ],
  'v11': [
    {
      id: 'c22',
      userId: 'u22',
      userName: 'fly_high',
      userAvatar: 'https://i.pravatar.cc/150?u=22',
      content: 'Cảm giác như đang bay trên chín tầng mây vậy ☁️✈️',
      timestamp: '10 phút trước',
      likesCount: 75,
    },
    {
      id: 'c23',
      userId: 'u23',
      userName: 'pilot_life',
      userAvatar: 'https://i.pravatar.cc/150?u=23',
      content: 'Góc nhìn từ buồng lái máy bay luôn là tuyệt nhất!',
      timestamp: '2 giờ trước',
      likesCount: 38,
    }
  ],
  'v12': [
    {
      id: 'c24',
      userId: 'u24',
      userName: 'sunset_hunter',
      userAvatar: 'https://i.pravatar.cc/150?u=24',
      content: 'Hoàng hôn trên biển luôn mang lại cảm giác bình yên 🌅',
      timestamp: '5 phút trước',
      likesCount: 210,
    },
    {
      id: 'c25',
      userId: 'u25',
      userName: 'sea_breeze',
      userAvatar: 'https://i.pravatar.cc/150?u=25',
      content: 'Màu trời chuyển sắc tuyệt vời quá. Đỉnh cao!',
      timestamp: '1 giờ trước',
      likesCount: 92,
    }
  ]
};
