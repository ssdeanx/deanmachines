import { Divider } from "@nextui-org/react";

export default function App() {
  return (
    <div className="max-w-md">
      <div className="space-y-1">
        <h4 className="text-base font-medium">NextUI Components</h4>
        <p className="text-gray-400 text-sm">
          Beautiful, fast and modern React UI library.
        </p>
      </div>
      <Divider className="my-4" />
      <div className="text-sm flex h-5 items-center space-x-4">
        <div>Blog</div>
        <Divider orientation="vertical" />
        <div>Docs</div>
        <Divider orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  );
}
