import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { aboutContent } from "@/constants/about";
import { title, subtitle } from "@/components/primitives";
import { AboutDetail } from "@/types/about";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export default function Page() {
  return (
    <ErrorBoundary>
      <div className="flex flex-col gap-8 w-full max-w-[1024px] mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className={title()}>About Dean Machines</h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Advancing Autonomous Drone Technology
          </h2>
        </div>

        <div className="grid gap-6">
          <Card className="border-none bg-background/60 dark:bg-default-100/50">
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-lg font-semibold">Hardware Stack</p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody>
              <div className="grid gap-4">
                {aboutContent.hardware.map((item: AboutDetail) => (
                  <div key={item.title} className="flex flex-col gap-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-default-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </ErrorBoundary>
  );
}