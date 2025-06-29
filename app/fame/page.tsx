import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";
import { includeAvatarUrlInEntries } from "@/lib/roblox";

type entry = {
  id: string;
  value: string;
};
export default async function FamePage() {
  let entries = await opencloud_ordered_datastore_get("AOTopFame3");
  entries = entries.map((entry: entry, index: number) => {
    return {
      rank: index + 1,
      name: entry.id.split("_")[0],
      score: parseInt(entry.value),
      file: entry.id.split("_")[1],
      // guild: "test",
    };
  });

  entries = await includeAvatarUrlInEntries(entries);

  return (
    <Leaderboard
      title="Top Fame Leaderboard"
      description="The top users with Renown"
      entries={entries}
      scoreLabel="Renown"
      linkFunction={(id: string) => {
        return `https://www.roblox.com/users/${id}/profile`;
      }}
    />
  );
}
