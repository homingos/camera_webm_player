"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Banner from "./banner";
import CameraFrame from "./camera-frame";
import CardPreview from "./card-preview";

export default function ARPreview({
  videoUrl,
  bannerData,
  alphaHorizontal,
  isAlpha,
}: {
  videoUrl: string;
  bannerData: {
    title: string;
    sub_title: string;
    redirect_url: string;
    show: boolean;
    primary_color: string;
    secondary_color: string;
  };
  alphaHorizontal: boolean;
  isAlpha: boolean;
}) {
  const [onboarding, setOnboarding] = useState(false);

  return (
    <>
      {onboarding ? (
        <FakeAR
          videoUrl={videoUrl}
          bannerData={bannerData}
          alphaHorizontal={alphaHorizontal}
          isAlpha={isAlpha}
        />
      ) : (
        <OnboardingScreen setOnboarding={setOnboarding} />
      )}
    </>
  );
}

function OnboardingScreen({
  setOnboarding,
}: {
  setOnboarding: (play: boolean) => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Button
        className="font-bold text-xl"
        size="lg"
        onClick={() => setOnboarding(true)}
      >
        Start Experience
      </Button>
    </div>
  );
}

function FakeAR({
  videoUrl,
  bannerData = {
    title: "",
    sub_title: "",
    redirect_url: "",
    show: false,
    primary_color: "",
    secondary_color: "",
  },
  alphaHorizontal,
  isAlpha,
}: {
  videoUrl: string;
  bannerData: {
    title: string;
    sub_title: string;
    redirect_url: string;
    show: boolean;
    primary_color: string;
    secondary_color: string;
  };
  alphaHorizontal: boolean;
  isAlpha: boolean;
}) {
  return (
    <div className="relative h-full w-full">
      <CameraFrame />
      <CardPreview
        videoUrl={videoUrl}
        alphaHorizontal={alphaHorizontal}
        isAlpha={isAlpha}
      />
      <Banner
        title={bannerData.title}
        sub_title={bannerData.sub_title}
        redirect_url={bannerData.redirect_url}
        show={bannerData.show}
        primary_color={bannerData.primary_color}
        secondary_color={bannerData.secondary_color}
      />
    </div>
  );
}
