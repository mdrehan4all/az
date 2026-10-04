export const wedding = {
  year: 2026,
  bismillah: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahEn: "In the name of Allah, the Most Gracious, the Most Merciful",
  bride: {
    name: "Arzoo Firdos",
    relation: "D/O Haji Moulana Shakil Ahmed Habibi",
    address: "Dinemar Danga, Garerdhar, Gondalpara",
  },
  groom: {
    name: "Md Arman",
    relation: "S/O Sattar Khan",
    address: "BT Road, Parsad Nagar, Belgharia",
  },
  venue: {
    title: "At Own Residence",
    lines: ["Dinemar Danga, Garerdhar", "Gondalpara"],
  },
  events: [
    {
      name: "Milad-un-Nabi",
      dateLabel: "24 November",
      weekday: "Tuesday",
      time: "3:00 PM",
      start: "20261124T150000",
      end: "20261124T163000",
    },
    {
      name: "Haldi",
      dateLabel: "24 November",
      weekday: "Tuesday",
      time: "5:00 PM",
      start: "20261124T170000",
      end: "20261124T190000",
    },
    {
      name: "Mehendi",
      dateLabel: "24 November",
      weekday: "Tuesday",
      time: "9:00 PM",
      start: "20261124T210000",
      end: "20261124T233000",
    },
    {
      name: "Nikah",
      dateLabel: "25 November",
      weekday: "Wednesday",
      time: "9:00 PM",
      start: "20261125T210000",
      end: "20261125T233000",
    },
    {
      name: "Reception",
      dateLabel: "29 November",
      weekday: "Sunday",
      time: "9:00 PM",
      start: "20261129T210000",
      end: "20261129T233000",
    },
  ],
} as const;

export function googleCalendarUrl(event: (typeof wedding.events)[number]) {
  const details = encodeURIComponent(
    `${wedding.bride.name} weds ${wedding.groom.name}\n${wedding.venue.title}\n${wedding.venue.lines.join(", ")}`,
  );
  const location = encodeURIComponent(`${wedding.venue.title}, ${wedding.venue.lines.join(", ")}`);
  const text = encodeURIComponent(`${event.name} — ${wedding.bride.name} & ${wedding.groom.name}`);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${event.start}/${event.end}&details=${details}&location=${location}`;
}
