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
    videoUrl: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    authorName: '@sintel_official',
    description: 'Sintel Trailer - An epic journey begins 🐉⚔️ #fantasy #epic',
    likesCount: 45200,
  }
];
