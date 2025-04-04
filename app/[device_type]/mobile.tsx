import ARPreview from "../ar-preview";

export default async function Home({ OID, data }: { OID: string; data: any }) {
  const experience = data?.data?.experiences[0];
  const videoUrl = experience?.videos?.compressed;

  const bannerData = {
    title: experience?.ui_elements?.banners?.title,
    sub_title: experience?.ui_elements?.banners?.sub_title,
    redirect_url: experience?.ui_elements?.banners?.redirection_url,
    show:
      !experience?.ui_elements?.banners ||
      experience?.ui_elements?.banners?.variant !== 0,
    primary_color: experience?.ui_elements?.banners?.primary_color,
    secondary_color: experience?.ui_elements?.banners?.secondary_color,
  };

  const is_alpha =
    (experience?.variant?.track_type === "GROUND" &&
      experience?.variant?.is_alpha) ||
    (experience?.variant?.track_type === "CARD" &&
      experience?.variant?.class === 1);

  return (
    <>
      <ARPreview
        videoUrl={videoUrl}
        alphaHorizontal={experience?.variant?.is_horizontal}
        isAlpha={is_alpha}
        bannerData={bannerData}
      />
    </>
  );
}
