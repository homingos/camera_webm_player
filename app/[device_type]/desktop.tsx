import { headers } from "next/headers";
import FlamLogo from "@/components/logo";
import { QRCodeSVG } from "@/components/qr";

const Desktop = async ({ OID }: { OID: string }) => {
  const request = await headers();
  const host = request.get("host");
  const qrData = {
    value: `https://${host}/?sh=${OID}`,
    bgColor: "#ffffff",
    fgColor: "#000000",
    size: 1024,
    level: "Q", // QR Code error correction level: https://blog.qrstuff.com/general/qr-code-error-correction
  };

  return (
    <div className="relative h-full w-full rounded-2xl bg-[#F4FED6] flex flex-col items-center justify-center shadow-md">
      <FlamLogo size="lg" color="#000" />
      <span className="font-bold text-2xl text-center w-1/4 mt-8">
        Scan this QR to start the experience
      </span>
      <span className="text-lg">You can use your camera app or any QR app</span>
      <div className="flex items-center justify-center bg-gradient-to-b from-[#414740] via-[#212620] to-[#181E16] p-12 mt-8">
        <QRCodeSVG
          value={qrData.value}
          size={qrData.size / 6}
          bgColor={qrData.bgColor}
          fgColor={qrData.fgColor}
          level={qrData.level}
        />
      </div>
    </div>
  );
};

export default Desktop;
