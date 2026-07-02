export interface Objekt {
  id: string;
  member: string;
  memberId: string; // S1, S2
  season: string; 
  objektClass: string; 
  no: string; // 101, 102
  imageColor: string;
  image?: string;
}

export const MEMBERS = [
  { id: "S1", name: "Seoyeon" },
  { id: "S2", name: "Hyerin" },
  { id: "S3", name: "Jiwoo" },
  { id: "S4", name: "Chaeyeon" },
  { id: "S5", name: "Yooyeon" },
  { id: "S6", name: "Soomin" },
  { id: "S7", name: "Nakyoung" },
  { id: "S8", name: "Yubin" },
];

export const MOCK_OBJEKTS: Objekt[] = [
  {
    id: "obj-1",
    member: "Seoyeon",
    memberId: "S1",
    season: "Atom01",
    objektClass: "First",
    no: "101Z",
    imageColor: "linear-gradient(135deg, #ff00ff, #8a2be2)",
    image: "/objekt_pink.jpg"
  },
  {
    id: "obj-2",
    member: "Seoyeon",
    memberId: "S1",
    season: "Atom01",
    objektClass: "Double",
    no: "102Z",
    imageColor: "linear-gradient(135deg, #ff0055, #ffaa00)",
  },
  {
    id: "obj-3",
    member: "Hyerin",
    memberId: "S2",
    season: "Binary01",
    objektClass: "First",
    no: "101Z",
    imageColor: "linear-gradient(135deg, #00ffff, #0000ff)",
    image: "/objekt_cyan.jpg"
  },
  {
    id: "obj-4",
    member: "Jiwoo",
    memberId: "S3",
    season: "Cream01",
    objektClass: "Special",
    no: "105Z",
    imageColor: "linear-gradient(135deg, #00ff00, #005500)",
  },
  {
    id: "obj-5",
    member: "Chaeyeon",
    memberId: "S4",
    season: "Atom01",
    objektClass: "First",
    no: "101Z",
    imageColor: "linear-gradient(135deg, #ffaa00, #ff0000)",
  },
  {
    id: "obj-6",
    member: "Yooyeon",
    memberId: "S5",
    season: "Binary01",
    objektClass: "Premier",
    no: "110Z",
    imageColor: "linear-gradient(135deg, #ff00ff, #00ffff)",
    image: "/objekt_cyan.jpg"
  },
  {
    id: "obj-7",
    member: "Soomin",
    memberId: "S6",
    season: "Cream01",
    objektClass: "First",
    no: "101Z",
    imageColor: "linear-gradient(135deg, #ff66b2, #9933ff)",
  },
  {
    id: "obj-8",
    member: "Nakyoung",
    memberId: "S7",
    season: "Atom01",
    objektClass: "Double",
    no: "103Z",
    imageColor: "linear-gradient(135deg, #33ccff, #0033cc)",
  },
  {
    id: "obj-9",
    member: "Yubin",
    memberId: "S8",
    season: "Binary01",
    objektClass: "Special",
    no: "108Z",
    imageColor: "linear-gradient(135deg, #ffcc00, #ff3300)",
  }
];
