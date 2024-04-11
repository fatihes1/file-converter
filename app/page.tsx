import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
        <div className="space-y-6 text-center">
                <h1 className="text-3xl md:text-5xl font-medium">TransMorpher <br /> File Transformation Made Easy</h1>
                <p className="text-muted-foreground text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
                    TransMorpher empowers you to effortlessly transform files from one format to another. With
                    TransMorpher, converting images, videos, and documents is simple and efficient. Explore the endless
                    possibilities of file transformation today!
                </p>
        </div>
          <Dropzone/>
      </div>
  );
}