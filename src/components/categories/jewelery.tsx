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
  const limitedTitle = title.length > 35 ? `${title.slice(0, 35)}...` : title;

  return (
    <div>
      <Card className="hover:bg-slate-100 shadow-lg">
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
          <h1>{limitedTitle}</h1>
          <h1 className="font-bold text-lg">${price}</h1>
          <div className="flex justify-between mt-2">
            <h1>{rating.rate}⭐</h1>
            <h1>Stock: {rating.count}</h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
