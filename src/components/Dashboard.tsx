import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Trophy, Target, BookOpen, Flame, Star, TreePine } from "lucide-react";

const Dashboard = () => {
  return (
    <section className="py-16 bg-gradient-nature">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Eco Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your progress, earn badges, and see how you're making a difference for our planet.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Overview */}
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-eco-accent" />
                Current Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Level 7: Eco Warrior</span>
                  <span>1,250 / 1,500 points</span>
                </div>
                <Progress value={83} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  250 points to reach Level 8: Planet Guardian
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-lg bg-eco-primary/10">
                  <BookOpen className="w-6 h-6 text-eco-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-eco-primary">15</div>
                  <div className="text-sm text-muted-foreground">Lessons Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-eco-accent/10">
                  <Target className="w-6 h-6 text-eco-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-eco-accent">8</div>
                  <div className="text-sm text-muted-foreground">Challenges Done</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-eco-accent" />
                Recent Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-achievement flex items-center justify-center">
                  <TreePine className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Tree Planter</div>
                  <div className="text-sm text-muted-foreground">Planted 5 trees</div>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-eco-water to-eco-secondary flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Water Saver</div>
                  <div className="text-sm text-muted-foreground">Saved 100L water</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success to-eco-primary flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">Quiz Master</div>
                  <div className="text-sm text-muted-foreground">Perfect scores</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;