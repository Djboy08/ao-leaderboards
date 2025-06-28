import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";

const grandNavyData = [
  {
    rank: 1,
    name: "Admiral Sterling",
    score: 95000,
    level: 90,
    guild: "First Fleet",
  },
  {
    rank: 2,
    name: "Captain Valor",
    score: 88500,
    level: 87,
    guild: "Second Fleet",
  },
  {
    rank: 3,
    name: "Commander Steel",
    score: 82300,
    level: 84,
    guild: "Third Fleet",
  },
  {
    rank: 4,
    name: "Lieutenant Storm",
    score: 78900,
    level: 82,
    guild: "Fourth Fleet",
  },
  {
    rank: 5,
    name: "Sergeant Iron",
    score: 75600,
    level: 80,
    guild: "Fifth Fleet",
  },
  {
    rank: 6,
    name: "Corporal Wave",
    score: 72400,
    level: 78,
    guild: "Sixth Fleet",
  },
  {
    rank: 7,
    name: "Ensign Tide",
    score: 69800,
    level: 76,
    guild: "Seventh Fleet",
  },
  {
    rank: 8,
    name: "Petty Officer Gale",
    score: 67200,
    level: 74,
    guild: "Eighth Fleet",
  },
  {
    rank: 9,
    name: "Seaman Reef",
    score: 64600,
    level: 72,
    guild: "Ninth Fleet",
  },
  {
    rank: 10,
    name: "Cadet Anchor",
    score: 62100,
    level: 70,
    guild: "Tenth Fleet",
  },
];

export default async function GrandNavyPage() {
  let entries = await opencloud_ordered_datastore_get("AOTopNavy");
  entries = entries.map((entry: any, index: number) => {
    return {
      rank: index + 1,
      name: entry.id,
      score: parseInt(entry.value),
      level: 1,
      guild: "test",
    };
  });
  return (
    <Leaderboard
      title="Grand Navy Leaderboard"
      description="The most distinguished officers serving the Grand Navy"
      entries={entries}
      scoreLabel="Score"
    />
  );
}
