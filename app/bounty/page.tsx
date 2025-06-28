import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";

export default async function BountyPage() {
  let entries = await opencloud_ordered_datastore_get("AOTopBounty3");
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
        name: entry.id.split("_")[0],
        score: Math.abs(parseInt(entry.value)),
        file: entry.id.split("_")[1],
        // guild: "test",
      };
    }
  );
  return (
    <Leaderboard
      title="Top Bounty Leaderboard"
      description="The top users with Bounty"
      entries={entries}
      scoreLabel="Bounty"
    />
  );
}
