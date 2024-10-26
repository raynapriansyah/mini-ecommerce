import Image from "next/image";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function CategoryJewelery({
  title,
  image,
  price,
  rating,
}: {
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}) {
  const limitedTitle = title.length > 25 ? `${title.slice(0, 25)}...` : title;

  return (
    <div>
      <Card className="h-[300px] hover:bg-slate-100 shadow-lg">
        <CardHeader className="flex justify-center items-center">
          <Image
            src={image}
            alt="image"
            width={150}
            height={150}
            className="aspect-square"
          />
        </CardHeader>
        <CardContent>
          <h1 className="text-[0.9rem]">{limitedTitle}</h1>
          <h1 className="font-bold text-lg">${price}</h1>
          <div className="flex justify-between mt-1 text-sm">
            <h1>{rating.rate}⭐</h1>
            <h1>Stock: {rating.count}</h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
