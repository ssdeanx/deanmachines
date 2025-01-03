import { Card, CardBody } from "@nextui-org/react";

export default function App() {
  return (
    <Card>
      <CardBody>
        {" "}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Card Title</h2>
          <p>This is a card with some content.</p>
          <p>It uses NextUI best practices for styling and accessibility.</p>
        </div>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}
