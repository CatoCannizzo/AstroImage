//!?
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { ImgHTMLAttributes } from "react";

type ImageObject = {
  options: object;
  src: string;
  attributes: ImgHTMLAttributes<HTMLImageElement>;
};
interface Props {
  imgArrayOpt: ImageObject[]
}


const ImageCarousel: React.FC<Props> =({imgArrayOpt} ) => {
  return (
    <Carousel className="max-w-xs md:max-w-sm ">
      <CarouselContent>
        {imgArrayOpt.map((image, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="bg-green-300">
                <CardContent className="flex items-center justify-center p-2">
                  <img
                    src={image.src}
                    decoding={image.attributes.decoding}
                    loading={image.attributes.loading}
                    width={image.attributes.width}
                    height={image.attributes.height}
                    alt={image.attributes.alt}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default ImageCarousel