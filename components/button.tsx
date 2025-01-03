import { Button } from "@nextui-org/react";

export default function App() {
  return (
    <Button
      className="bg-gradient-to-tr from-red-500 to-yellow-500 text-white shadow-lg"
      color="primary"
      radius="full"
      size="lg"
      variant="ghost"
      onClick={() => alert("Button Clicked!")}
    >
      Button
    </Button>
  );
}
