import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";

export default function AllProducts() {
  return (
    <div className="container">
      <Card>
        <CardHeader>
          <h1>Image</h1>
        </CardHeader>
        <CardContent>
          <h1>Title</h1>
          <h1>Price</h1>
        </CardContent>
        <CardFooter>
          <h1>Rating</h1>
          <h1>Count</h1>
        </CardFooter>
      </Card>
    </div>
  );
}
