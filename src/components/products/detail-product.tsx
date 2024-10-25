import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

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
        <CardContent className="md:flex flex-cols gap-8 items-center md:mt-8">
          <div>
            <Image
              src={image}
              alt="image"
              width={400}
              height={400}
              className="md:flex items-center mb-4"
            />
          </div>
          <div>
            <div>
              <div className="mb-8">
                <h1 className="font-bold text-4xl">{title}</h1>
                <div className="flex flex-cols">
                  <h1>⭐⭐⭐⭐⭐ {rating.rate} / 5 </h1>
                  <h1> (19k reviews)</h1>
                </div>
                <h1 className="text-lg mt-8 flex text-justify">
                  Description: <br />
                  {description}
                </h1>
              </div>
              <div className="flex justify-between">
                <h1>Stock Available: {rating.count}</h1>
                <h1 className=" text-xl font-bold">${price}</h1>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button>Add to Cart</Button>
              <Button>Order</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
