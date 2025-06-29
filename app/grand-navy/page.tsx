import { Leaderboard } from "@/components/leaderboard";
import { opencloud_ordered_datastore_get } from "@/lib/datastore";
import { includeAvatarUrlInEntries } from "@/lib/roblox";

export default async function GrandNavyPage() {
  let entries = await opencloud_ordered_datastore_get("AOTopNavy3");
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
        score: parseInt(entry.value),
        file: entry.id.split("_")[1],
        // guild: "test",
      };
    }
  );

  entries = await includeAvatarUrlInEntries(entries);
  return (
    <Leaderboard
      title="Grand Navy Leaderboard"
      description="The most distinguished officers serving the Grand Navy"
      entries={entries}
      scoreLabel="Renown"
      linkFunction={(id: string) => {
        return `https://www.roblox.com/users/${id}/profile`;
      }}
    />
  );
}
