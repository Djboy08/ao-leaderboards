import { Leaderboard } from "@/components/leaderboard"

const bountyData = [
  { rank: 1, name: "Crimson Reaper", score: 2500000, level: 88, guild: "Blood Hunters" },
  { rank: 2, name: "Silent Death", score: 2350000, level: 85, guild: "Shadow Guild" },
  { rank: 3, name: "Bone Crusher", score: 2200000, level: 83, guild: "Skull Clan" },
  { rank: 4, name: "Venom Strike", score: 2100000, level: 81, guild: "Poison Brotherhood" },
  { rank: 5, name: "Iron Fist", score: 1950000, level: 79, guild: "Steel Warriors" },
  { rank: 6, name: "Dark Phantom", score: 1850000, level: 77, guild: "Night Stalkers" },
  { rank: 7, name: "Rage Beast", score: 1750000, level: 76, guild: "Wild Pack" },
  { rank: 8, name: "Thunder God", score: 1650000, level: 74, guild: "Storm Lords" },
  { rank: 9, name: "Frost Bite", score: 1550000, level: 72, guild: "Ice Wolves" },
  { rank: 10, name: "Flame Demon", score: 1450000, level: 70, guild: "Fire Cult" },
]

export default function BountyPage() {
  return (
    <Leaderboard
      title="Bounty Leaderboard"
      description="The most wanted criminals with the highest bounties"
      entries={bountyData}
      scoreLabel="Bounty"
    />
  )
}
