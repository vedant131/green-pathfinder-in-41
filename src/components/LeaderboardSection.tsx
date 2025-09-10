import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Crown } from "lucide-react";

const LeaderboardSection = () => {
  const topPerformers = [
    {
      rank: 1,
      name: "Priya Sharma",
      school: "Delhi Public School, Mumbai",
      points: 2850,
      level: "Planet Guardian",
      avatar: "/api/placeholder/40/40",
      badges: 15,
      completedChallenges: 12
    },
    {
      rank: 2,
      name: "Arjun Patel",
      school: "Kendriya Vidyalaya, Ahmedabad",
      points: 2650,
      level: "Eco Champion",
      avatar: "/api/placeholder/40/40", 
      badges: 12,
      completedChallenges: 10
    },
    {
      rank: 3,
      name: "Sneha Reddy",
      school: "Narayana School, Hyderabad",
      points: 2450,
      level: "Eco Champion",
      avatar: "/api/placeholder/40/40",
      badges: 11,
      completedChallenges: 9
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-5 h-5 text-eco-accent" />;
      case 2: return <Medal className="w-5 h-5 text-muted-foreground" />;
      case 3: return <Award className="w-5 h-5 text-eco-earth" />;
      default: return <span className="text-lg font-bold">{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1: return "bg-gradient-achievement text-white";
      case 2: return "bg-gradient-to-br from-slate-400 to-slate-600 text-white";
      case 3: return "bg-gradient-to-br from-eco-earth to-eco-accent text-white";
      default: return "bg-secondary";
    }
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">School Leaderboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how students across India are making a difference and compete for the top spot!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-eco">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-eco-accent" />
                Top Environmental Champions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topPerformers.map((performer) => (
                <div 
                  key={performer.rank}
                  className={`flex items-center gap-4 p-4 rounded-lg ${
                    performer.rank <= 3 ? 'bg-gradient-to-r from-eco-primary/5 to-eco-secondary/5 border border-eco-primary/20' : 'hover:bg-secondary/50'
                  } transition-all`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getRankBadge(performer.rank)}`}>
                    {getRankIcon(performer.rank)}
                  </div>
                  
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={performer.avatar} />
                    <AvatarFallback className="bg-eco-primary text-white">
                      {performer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{performer.name}</h3>
                      <Badge className="bg-eco-primary/10 text-eco-primary">
                        {performer.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{performer.school}</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-eco-primary">
                      {performer.points.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">eco-points</div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline" className="text-xs">
                      {performer.badges} badges
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {performer.completedChallenges} challenges
                    </Badge>
                  </div>
                </div>
              ))}
              
              {/* Current User Position */}
              <div className="border-t pt-4 mt-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-eco-accent/10 border border-eco-accent/20">
                  <div className="w-12 h-12 rounded-full bg-eco-accent/20 flex items-center justify-center">
                    <span className="text-lg font-bold text-eco-accent">47</span>
                  </div>
                  
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-eco-accent text-white">
                      YU
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">You (Rahul Kumar)</h3>
                      <Badge className="bg-eco-accent/10 text-eco-accent">
                        Eco Warrior
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Ryan International School, Delhi</p>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-eco-accent">1,250</div>
                    <div className="text-sm text-muted-foreground">eco-points</div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <Badge variant="outline" className="text-xs">7 badges</Badge>
                    <Badge variant="outline" className="text-xs">8 challenges</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardSection;