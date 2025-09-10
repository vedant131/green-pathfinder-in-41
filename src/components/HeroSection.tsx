import { Play, Users, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/eco-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-eco-primary/10 py-20">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-accent/10 text-eco-accent text-sm font-medium">
                <Zap className="w-4 h-4" />
                Gamified Environmental Learning
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Learn, Play, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-eco-secondary">
                  {" "}Save Earth
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Join thousands of students across India in making environmental education fun, engaging, and impactful through interactive lessons and real-world challenges.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-eco-primary hover:bg-eco-secondary gap-2 shadow-eco text-lg px-8">
                <Play className="w-5 h-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="border-0 bg-gradient-to-br from-eco-primary/10 to-eco-secondary/10 shadow-card">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-eco-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-eco-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-eco-accent/10 to-accent/10 shadow-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-eco-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-eco-accent">1M+</div>
                  <div className="text-sm text-muted-foreground">Eco Points Earned</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-success/10 to-eco-secondary/10 shadow-card">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-success">500+</div>
                  <div className="text-sm text-muted-foreground">Schools Joined</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-eco-primary/20 to-eco-secondary/20 rounded-3xl transform rotate-3"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Students engaging in environmental activities"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;