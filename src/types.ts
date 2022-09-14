export type Tournament = {
  id: string;
  name: string;
  organizer: string;
  game: string;
  participants: Participants;
  startDate: Date;
};

export type Participants = {
  current: number;
  max: number;
};
