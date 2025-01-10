import { Button, ButtonProps } from "@nextui-org/react";

interface CustomButtonProps extends ButtonProps {
  onClick?: () => void;
}

export default function App({ onClick, ...props }: CustomButtonProps) {
  return (
    <Button
      className="bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
      color="primary"
      radius="full"
      size="lg"
      variant="solid"
      onClick={onClick}
      {...props}
    >
      Explore
    </Button>
  );
}
