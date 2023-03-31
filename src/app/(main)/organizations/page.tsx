'use client';

import { OrganizationProfile } from '@clerk/nextjs';

export default function Organizations() {
  return (
    <div className="flex justify-center items-center h-full">
      <OrganizationProfile />
    </div>
  );
}
