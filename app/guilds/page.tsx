import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";

export default async function ClansPage() {
  let entries = await opencloud_ordered_datastore_get("AOTopGuilds");
  console.log(entries);
  // Check if there are three underscores present, if so use everything after the third one.
  // entries = entries.filter((entry: { id: string; value: string }) => {
  //   return entry.id.split("_").length >= 3;
  // });
  entries = entries.map(
    (
      entry: {
        id: string;
        value: string;
      },
      index: number,
    ) => {
      return {
        rank: index + 1,
        name: entry.id.split("_")[1],
        score: Math.abs(parseInt(entry.value)),
        // file: entry.id.split("_")[1],
        // guild: "test",
      };
    },
  );
  return (
    <Leaderboard
      title="Top Guilds Leaderboard"
      description="The top guilds"
      entries={entries}
      scoreLabel="Reputation"
      topLabel="Top Guilds"
    />
  );
}
