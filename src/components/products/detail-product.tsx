import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function DetailProduct({
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
    <div className="flex justify-center items-center md:h-screen">
      <Card className="shadow-lg">
        <CardContent className="md:flex md:flex-cols md:gap-8 md:items-center md:mt-8">
          <div className="flex justify-center items-center mt-4">
            <Image
              src={image}
              alt="image"
              width={300}
              height={300}
              className="mb-4"
            />
          </div>
          <div>
            <div className="mb-8">
              <h1 className="font-bold text-xl lg:text-2xl">{title}</h1>
              <div className="flex flex-cols">
                <h1>⭐⭐⭐⭐⭐ {rating.rate} / 5 </h1>
                <h1> (19k reviews)</h1>
              </div>
              <h1 className="text-sm lg:text-md mt-8 flex text-justify">
                Description: <br />
                {description}
              </h1>
            </div>
            <div className="flex justify-between">
              <h1>Stock Available: {rating.count}</h1>
              <h1 className="text-xl font-bold">${price}</h1>
            </div>
            <div className="flex justify-end space-x-4">
              <Link href="#">
                <Button className="">Add to Cart</Button>
              </Link>
              <Link href="#">
                <Button>Order</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
