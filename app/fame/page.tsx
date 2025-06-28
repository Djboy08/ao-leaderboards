import { Leaderboard } from "@/components/leaderboard"

const fameData = [
  { rank: 1, name: "Shadow Master", score: 125000, level: 85, guild: "Eclipse Order" },
  { rank: 2, name: "Storm Breaker", score: 118500, level: 82, guild: "Thunder Clan" },
  { rank: 3, name: "Void Walker", score: 112300, level: 80, guild: "Dark Legion" },
  { rank: 4, name: "Fire Phoenix", score: 108900, level: 78, guild: "Flame Guild" },
  { rank: 5, name: "Ice Queen", score: 105600, level: 77, guild: "Frost Alliance" },
  { rank: 6, name: "Lightning Strike", score: 102400, level: 75, guild: "Storm Front" },
  { rank: 7, name: "Blood Moon", score: 99800, level: 74, guild: "Crimson Order" },
  { rank: 8, name: "Golden Eagle", score: 97200, level: 72, guild: "Sky Riders" },
  { rank: 9, name: "Steel Titan", score: 94600, level: 71, guild: "Iron Brotherhood" },
  { rank: 10, name: "Mystic Sage", score: 92100, level: 70, guild: "Arcane Circle" },
]

export default function FamePage() {
  return (
    <Leaderboard
      title="Fame Leaderboard"
      description="The most renowned players in the realm"
      entries={fameData}
      scoreLabel="Fame Points"
    />
  )
}
