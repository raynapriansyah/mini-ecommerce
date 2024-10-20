import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";

export default function AllProducts({
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
      <Card>
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
          <div className="flex justify-between">
            <h1 className="font-bold">${price}</h1>
            <h1>{rating.rate}⭐</h1>
          </div>
          <h1>Stock: {rating.count}</h1>
        </CardContent>
        <CardFooter className="flex justify-between">footer</CardFooter>
      </Card>
    </div>
  );
}
