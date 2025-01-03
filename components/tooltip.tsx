import { Tooltip, Button } from "@nextui-org/react";

export default function CustomTooltip() {
  return (
    <Tooltip
      color="primary"
      content={
        <div className="px-2 py-1">
          <div className="text-sm font-bold">Custom Content</div>
          <div className="text-xs">This is a custom tooltip content</div>
        </div>
      }
      placement="top"
    >
      <Button variant="bordered">Hover me</Button>
    </Tooltip>
  );
}
