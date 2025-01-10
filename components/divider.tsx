import { Divider } from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-base font-medium text-gray-700 dark:text-gray-300">
          Dean Machines
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Autonomous FPV Drone Platform.
        </p>
      </div>
      <Divider
        className="bg-gray-200 shadow-sm dark:bg-gray-700"
        style={{ margin: "1rem 0" }}
      />
    </div>
  );
}
