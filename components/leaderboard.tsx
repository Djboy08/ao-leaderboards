import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Crown, Medal, Award } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  file?: number;
  guild?: string;
}

interface LeaderboardProps {
  title: string;
  description: string;
  entries: LeaderboardEntry[];
  scoreLabel: string;
  topLabel?: string;
}

export function Leaderboard({
  title,
  description,
  entries,
  scoreLabel,
  topLabel,
}: LeaderboardProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return null;
    }
  };

  const getRankBadgeVariant = (rank: number) => {
    switch (rank) {
      case 1:
        return "default";
      case 2:
        return "secondary";
      case 3:
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-background">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            {topLabel ? topLabel : "Top Players"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.rank}
                className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                  entry.rank <= 3
                    ? "bg-muted/50 border-primary/20"
                    : "hover:bg-muted/30 border-border"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {getRankIcon(entry.rank)}
                    <Badge variant={getRankBadgeVariant(entry.rank)}>
                      #{entry.rank}
                    </Badge>
                  </div>

                  {/* <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {entry.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar> */}

                  <div>
                    <div className="font-semibold text-lg">{entry.name}</div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      {entry.file && <span>Save File: {entry.file}</span>}
                      {entry.guild && (
                        <>
                          {entry.file && <span>•</span>}
                          <span>{entry.guild}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {entry.score.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {scoreLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
