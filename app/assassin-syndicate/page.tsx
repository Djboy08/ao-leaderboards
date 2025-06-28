import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";

export default async function AssassinSyndicatePage() {
  let entries = await opencloud_ordered_datastore_get("AOTopSynd3");
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
      title="Top Assassin Syndicate Leaderboard"
      description="The top users with most Bounty in the Assassin Syndicate"
      entries={entries}
      scoreLabel="Bounty"
      linkFunction={(id: string) => {
        return `https://www.roblox.com/users/${id}/profile`;
      }}
    />
  );
}
