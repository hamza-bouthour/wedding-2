import { useParams } from "wouter";
import { invitation, guests, getGuestByName, type Guest, type Invitation } from "@/data/guestData";

import HeroSection from "@/components/hero-section";
import StorySection from "@/components/story-section";
import GallerySection from "@/components/gallery-section";
import DetailsSection from "@/components/details-section";
import SimpleRsvpSection from "@/components/simple-rsvp-section";
import Footer from "@/components/footer";
import PersonalizedSection from "@/components/personalized-section";
import GuestListSection from "@/components/guest-list-section";

interface InvitationPageProps {
  params?: { username?: string; guestName?: string };
}

export default function InvitationPage({ params }: InvitationPageProps) {
  const routeParams = useParams();
  const guestName = params?.guestName || routeParams.guestName;
  const guest = guestName ? getGuestByName(guestName) : undefined;

  return (
    <div className="font-body text-gray-800 bg-cream">
      <HeroSection invitation={invitation} />
      {guestName && guest && (
        <PersonalizedSection guest={guest} invitation={invitation} />
      )}
      <StorySection invitation={invitation} />
      <GallerySection photos={invitation.photos} />
      <DetailsSection invitation={invitation} />
      <GuestListSection guests={guests} />
      <SimpleRsvpSection invitation={invitation} />
      <Footer invitation={invitation} />
    </div>
  );
}
