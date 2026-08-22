"use client";

import { LandingHero, type LandingHeroProps } from "./landing-hero";

export function Preview(props: LandingHeroProps) {
  return <LandingHero className="h-full" {...props} />;
}
