import Desktop from "./desktop";
import Mobile from "./mobile";
import NoShortcode from "./no-shortcode";

const Page = async ({
  params,
  searchParams,
}: {
  params?: Promise<{
    device_type: "mobile" | "desktop";
  }>;
  searchParams?: Promise<{
    sh: string;
  }>;
}) => {
  const params_new = await params;
  const searchParams_new = await searchParams;

  const SHORTCODE = searchParams_new?.sh ?? "";
  const DEVICE_TYPE = params_new?.device_type ?? "";

  if (!SHORTCODE) {
    return <NoShortcode />;
  }

  const res = await fetch(
    `https://zingcam.prod.flamapp.com/campaign-svc/api/v1/campaigns/${SHORTCODE}/experiences`
  );
  const data = await res.json();

  if (!data || data.status !== 200) {
    return <NoShortcode />;
  }

  return (
    <div className="relative h-[100dvh] w-[100dvw] overflow-hidden">
      {DEVICE_TYPE === "mobile" && <Mobile OID={SHORTCODE} data={data} />}
      {DEVICE_TYPE === "desktop" && <Desktop OID={SHORTCODE} />}
    </div>
  );
};

export default Page;
