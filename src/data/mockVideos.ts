export interface VideoData {
  id: string;
  videoUrl: string;
  authorName: string;
  description: string;
  likesCount: number;
}

export const mockVideos: VideoData[] = [
  {
    id: 'v1',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    authorName: '@bigbuckbunny',
    description: 'Big Buck Bunny is an amazing short film! 🐰 #animation #blender',
    likesCount: 12500,
  },
  {
    id: 'v2',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4',
    authorName: '@friday_vibes',
    description: 'Just relaxing on a Friday afternoon 🚗💨 #chill #weekend',
    likesCount: 8400,
  },
  {
    id: 'v3',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    authorName: '@nature_explorer',
    description: 'Thác nước tuyệt đẹp nhìn từ trên cao! 🌊⛰️ #nature #drone #travel',
    likesCount: 9540,
  },
  {
    id: 'v4',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    authorName: '@forest_life',
    description: 'Nắng sớm xuyên qua tán cây và dòng suối nhỏ 🌲☀️ #relax #peaceful',
    likesCount: 6200,
  },
  {
    id: 'v5',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4',
    authorName: '@beach_girl',
    description: 'Thư giãn trên bãi biển đầy nắng 🏖️🕶️ #summer #vacation #vibes',
    likesCount: 11200,
  },
  {
    id: 'v6',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_5MB.mp4',
    authorName: '@ocean_blue',
    description: 'Những con sóng xô bờ cát trắng cực đã mắt 🌊 #ocean #waves #beauty',
    likesCount: 7800,
  },
  {
    id: 'v7',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4',
    authorName: '@autumn_colors',
    description: 'Hồ nước phẳng lặng phản chiếu rừng cây mùa thu vàng 🍂🍁 #autumn #scenery',
    likesCount: 8900,
  },
  {
    id: 'v8',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_1MB.mp4',
    authorName: '@space_odyssey',
    description: 'Hành trình khám phá các vì sao xa xôi trong vũ trụ 🌌🚀 #space #galaxy #astronomy',
    likesCount: 14500,
  },
  {
    id: 'v9',
    videoUrl: 'https://test-videos.co.uk/vids/sintel/mp4/h264/720/Sintel_720_10s_1MB.mp4',
    authorName: '@starry_night',
    description: 'Dải Ngân Hà rực rỡ xuất hiện trên bầu trời đêm ✨🌌 #milkyway #sky #photography',
    likesCount: 13200,
  },
  {
    id: 'v10',
    videoUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4',
    authorName: '@winter_wonder',
    description: 'Dòng suối lạnh chảy qua khu rừng tuyết trắng bao phủ ❄️🌲 #winter #snow #cold',
    likesCount: 5400,
  },
  {
    id: 'v11',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.webm',
    authorName: '@cloud_surfer',
    description: 'Bay xuyên qua những đám mây dày đặc rực rỡ ánh nắng ☁️✈️ #clouds #skyview #aerial',
    likesCount: 10100,
  },
  {
    id: 'v12',
    videoUrl: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/720/Jellyfish_720_10s_5MB.mp4',
    authorName: '@sunset_lover',
    description: 'Hoàng hôn đỏ rực buông xuống đường chân trời đại dương 🌅🌊 #sunset #goldenhour #peace',
    likesCount: 15800,
  },
];
