import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TreePine, Recycle, Droplets, Camera, Users, Calendar } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      id: 1,
      title: "Plant a Tree Challenge",
      description: "Plant and nurture a sapling in your school or community area.",
      icon: TreePine,
      points: 50,
      participants: 1247,
      timeLeft: "5 days",
      progress: 65,
      difficulty: "Easy",
      type: "Individual"
    },
    {
      id: 2, 
      title: "Plastic-Free Week",
      description: "Go plastic-free for 7 days and document your sustainable alternatives.",
      icon: Recycle,
      points: 100,
      participants: 892,
      timeLeft: "12 days",
      progress: 0,
      difficulty: "Medium",
      type: "Individual"
    },
    {
      id: 3,
      title: "Water Conservation Drive",
      description: "Organize a rainwater harvesting project in your school.",
      icon: Droplets,
      points: 200,
      participants: 234,
      timeLeft: "20 days",
      progress: 0,
      difficulty: "Hard",
      type: "Team"
    },
    {
      id: 4,
      title: "Eco Photography Contest",
      description: "Capture the beauty of nature and environmental issues in your area.",
      icon: Camera,
      points: 75,
      participants: 756,
      timeLeft: "8 days",
      progress: 30,
      difficulty: "Easy",
      type: "Individual"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success/10 text-success';
      case 'Medium': return 'bg-eco-accent/10 text-eco-accent';
      case 'Hard': return 'bg-destructive/10 text-destructive';
      default: return 'bg-secondary';
    }
  };

  return (
    <section className="py-16 bg-gradient-nature">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Real-World Challenges</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take action in your community and earn eco-points through meaningful environmental activities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((challenge) => {
            const Icon = challenge.icon;
            return (
              <Card key={challenge.id} className="shadow-card hover:shadow-eco transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eco-primary to-eco-secondary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-muted-foreground">{challenge.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Users className="w-3 h-3" />
                      {challenge.type}
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Calendar className="w-3 h-3" />
                      {challenge.timeLeft} left
                    </Badge>
                  </div>
                  
                  {challenge.progress > 0 && (
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-muted-foreground">
                      {challenge.participants} participants
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-lg font-bold text-eco-accent">+{challenge.points}</div>
                      <div className="text-sm text-muted-foreground">eco-points</div>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      challenge.progress > 0 
                        ? 'bg-eco-accent hover:bg-eco-accent/90' 
                        : 'bg-eco-primary hover:bg-eco-secondary'
                    }`}
                  >
                    {challenge.progress > 0 ? 'Continue Challenge' : 'Join Challenge'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;