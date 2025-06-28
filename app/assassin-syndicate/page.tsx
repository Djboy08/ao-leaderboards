import { Leaderboard } from "@/components/leaderboard"

const assassinData = [
  { rank: 1, name: "Nightshade", score: 1850, level: 92, guild: "Order of Shadows" },
  { rank: 2, name: "Whisper", score: 1720, level: 89, guild: "Silent Blades" },
  { rank: 3, name: "Phantom Edge", score: 1650, level: 86, guild: "Ghost Clan" },
  { rank: 4, name: "Viper", score: 1580, level: 84, guild: "Serpent Guild" },
  { rank: 5, name: "Raven", score: 1510, level: 82, guild: "Dark Wings" },
  { rank: 6, name: "Shadowbane", score: 1440, level: 80, guild: "Void Hunters" },
  { rank: 7, name: "Dagger", score: 1370, level: 78, guild: "Steel Edge" },
  { rank: 8, name: "Smoke", score: 1300, level: 76, guild: "Mist Walkers" },
  { rank: 9, name: "Thorn", score: 1230, level: 74, guild: "Rose Killers" },
  { rank: 10, name: "Blade", score: 1160, level: 72, guild: "Sword Masters" },
]

export default function AssassinSyndicatePage() {
  return (
    <Leaderboard
      title="Assassin Syndicate Leaderboard"
      description="The most skilled assassins in the underworld"
      entries={assassinData}
      scoreLabel="Contracts Completed"
    />
  )
}
