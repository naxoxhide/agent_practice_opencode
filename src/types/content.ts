export interface Member {
  id: string;
  slug: string;
  stageName: string;
  realName?: string;
  country: string;
  debutDate: string;
  subunitIds: string[];
  bio: string;
  funFact: string;
}

export interface Subunit {
  id: string;
  name: string;
  fullName?: string;
  debutDate: string;
  releaseTitle: string;
  leadSingle: string;
  memberIds: string[];
  description: string;
  youtubeId?: string;
}

export interface MilestoneEntry {
  kind: "milestone";
  id: string;
  date: string;
  title: string;
  body: string;
  subunitId?: string;
  youtubeId?: string;
  mvTitle?: string;
}

export interface FunFactEntry {
  kind: "funfact";
  id: string;
  title: string;
  body: string;
}

export type TimelineEntry = MilestoneEntry | FunFactEntry;
