// Media configuration for external hosting
export const MEDIA_CONFIG = {
  // Base URL for media files (can be changed per environment)
  baseUrl: process.env.MEDIA_BASE_URL || '/media',

  // Video settings
  videos: {
    formats: ['webm', 'mp4'],
    quality: 'high', // or 'medium', 'low'
    maxSize: '50MB',
  },

  // Image settings
  images: {
    formats: ['jpg', 'png', 'webp'],
    maxSize: '5MB',
  },
};

// Helper function to generate media URLs
export function getMediaUrl(path: string): string {
  return `${MEDIA_CONFIG.baseUrl}/${path}`;
}

// Helper function to generate video URLs with multiple formats
export function getVideoUrls(baseName: string): {
  webm?: string;
  mp4?: string;
} {
  const urls: { webm?: string; mp4?: string } = {};

  if (MEDIA_CONFIG.videos.formats.includes('webm')) {
    urls.webm = getMediaUrl(`videos/${baseName}.webm`);
  }

  if (MEDIA_CONFIG.videos.formats.includes('mp4')) {
    urls.mp4 = getMediaUrl(`videos/${baseName}.mp4`);
  }

  return urls;
}
