import Image from "next/image";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function AllProducts({
  title,
  image,
  price,
  rating,
  description,
}: {
  title: string;
  image: string;
  price: number;
  description?: string;
  rating: {
    rate: number;
    count: number;
  };
}) {
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
          <h1 className="truncate ...">{title}</h1>
          <h1 className="font-bold text-lg">${price}</h1>
          <div className="flex justify-between mt-2">
            <h1>{rating.rate}⭐</h1>
            <h1>Stock: {rating.count}</h1>
          </div>
          <h1>{description}</h1>
        </CardContent>
      </Card>
    </div>
  );
}
