export interface Guest {
  id: string;
  firstName: string;
  lastName: string;
  siblingsInvited?: string;
}

export interface Invitation {
  id: string;
  username: string;
  groomName: string;
  brideName: string;
  weddingDate: string;
  receptionTime: string;
  receptionVenue: string;
  receptionAddress: string;
  storyText: string;
  proposalText: string;
  photos: string[];
}

export const invitation: Invitation = {
  id: "hamza-andrea-invitation",
  username: "hamza-andrea",
  groomName: "Hamza",
  brideName: "Andrea",
  weddingDate: "Saturday, Aug 22nd, 2025",
  receptionTime: "6:00 PM - 11:00 PM",
  receptionVenue: "The Social Studio",
  receptionAddress: "3520 Seagate Way\nOceanside, CA 92056",
  storyText:
    "Our paths crossed on a beautiful spring morning at the local Walmart in Escondido. Hamza was searching for the perfect spices for his pasta, while Andrea was looking for fresh ingredients for a special dinner. A chance encounter over the most beautiful peonies led to our first conversation.",
  proposalText:
    "Under the same stars where we first shared our dreams, Hamza got down on one knee in our favorite spot overlooking the ocean. With tears of joy and hearts full of love, Andrea said yes to forever together.",
  photos: [
    "/photos/ph-0.jpg",
    "/photos/ph-1.jpg",
    "/photos/ph-2.jpg",
    "/photos/ph-3.jpg",
    "/photos/ph-4.jpg",
    "/photos/ph-5.jpg",
    "/photos/ph-6.jpg",
    "/photos/ph-7.jpeg",
    "/photos/ph-8.jpeg",
    "/photos/ph-9.jpeg",
  ],
};

export const guests: Guest[] = [
  {
    id: "guest-sahar",
    firstName: "Sahar",
    lastName: "Bouthour",
  },
  {
    id: "guest-khoubeib",
    firstName: "Khoubeib",
    lastName: "Bouthour",
    siblingsInvited: "Soumaya, Skander, Yasmine",
  },
  {
    id: "guest-afef",
    firstName: "Afef",
    lastName: "Triki",
  },
];

export function getGuestByName(firstName: string): Guest | undefined {
  return guests.find(
    (guest) => guest.firstName.toLowerCase() === firstName.toLowerCase()
  );
}
