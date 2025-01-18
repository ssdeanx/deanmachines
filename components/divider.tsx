import { Divider } from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-base font-medium text-foreground dark:text-muted-foreground">
          Dean Machines
        </h4>
        <p className="text-sm text-foreground dark:text-muted-foreground">
          Autonomous FPV Drone Platform.
        </p>
      </div>
      <Divider className="my-4 bg-[hsl(var(--gray-200))] shadow-sm dark:bg-[hsl(var(--gray-700))]" />
    </div>
  );
}
