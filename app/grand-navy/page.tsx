import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";

export default async function GrandNavyPage() {
  let entries = await opencloud_ordered_datastore_get("AOTopNavy");
  entries = entries.map(
    (
      entry: {
        id: string;
        value: string;
      },
      index: number
    ) => {
      return {
        rank: index + 1,
        name: entry.id,
        score: parseInt(entry.value),
        level: 1,
        guild: "test",
      };
    }
  );
  return (
    <Leaderboard
      title="Grand Navy Leaderboard"
      description="The most distinguished officers serving the Grand Navy"
      entries={entries}
      scoreLabel="Score"
    />
  );
}
