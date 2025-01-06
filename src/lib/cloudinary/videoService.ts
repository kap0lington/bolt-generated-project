export interface VideoUploadResult {
  publicId: string;
  url: string;
}

// TODO: Implement actual Cloudinary upload service
export const uploadVideo = async (file: File): Promise<VideoUploadResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        publicId: 'sample-public-id',
        url: 'https://res.cloudinary.com/demo/video/upload/sample.mp4'
      });
    }, 1000);
  });
};
