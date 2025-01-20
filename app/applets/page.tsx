import AppletLoader from "@/components/AppletLoader";

export default function AppletsPage() {
  return (
    <div className="flex flex-col gap-4 py-8 md:py-10">
      <h1 className="text-center text-2xl font-bold">Applets</h1>
      <div className="mt-8">
        <h2 className="text-xl font-bold">Maps Applet</h2>
        <AppletLoader appletPath="/app/applets/maps" />
      </div>
    </div>
  );
}
