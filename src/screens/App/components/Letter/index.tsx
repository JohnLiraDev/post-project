import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
export default function Letter() {
  const letters = ["Discover", "Imagine", "Write", "Everything", "With Post."];
  return (
    <Carousel
      opts={{ loop: true, duration: 60 }}
      className="text-center w-[200px] rounded-xl"
      plugins={[Autoplay({ delay: 2000 })]}
    >
      <CarouselContent>
        {letters &&
          letters.map((x) => (
            <CarouselItem className="text-3xl text-zin-950font-semibold">
              {x}
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
