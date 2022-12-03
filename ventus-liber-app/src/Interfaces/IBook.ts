export default interface IBook {
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

interface VolumeInfo {
  title: string;
  subtitle?: string;
  authors?: string[];
  publisher: string;
  printType: string;
  categories: string[];
  imageLinks?: ImageLinks;
  infoLink: string;
}

interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
}
