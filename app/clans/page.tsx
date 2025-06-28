import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";

export default async function ClansPage() {
  let entries = await opencloud_ordered_datastore_get("AOTopClans2");
  console.log(entries);
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
        name: entry.id.split("_")[1],
        score: Math.abs(parseInt(entry.value)),
        // file: entry.id.split("_")[1],
        // guild: "test",
      };
    }
  );
  return (
    <Leaderboard
      title="Top Clans Leaderboard"
      description="The top clans"
      entries={entries}
      scoreLabel="Infamy"
      topLabel="Top Clans"
    />
  );
}
