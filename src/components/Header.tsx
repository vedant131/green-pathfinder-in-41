import { Leaf, Trophy, BookOpen, Target, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-eco-primary to-eco-secondary flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-eco-primary">EcoLearn</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="gap-2">
            <BookOpen className="w-4 h-4" />
            Lessons
          </Button>
          <Button variant="ghost" className="gap-2">
            <Target className="w-4 h-4" />
            Challenges
          </Button>
          <Button variant="ghost" className="gap-2">
            <Trophy className="w-4 h-4" />
            Leaderboard
          </Button>
          <Button variant="ghost" className="gap-2">
            <User className="w-4 h-4" />
            Profile
          </Button>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-eco-accent to-accent text-white text-sm font-medium">
            <Leaf className="w-4 h-4" />
            <span>1,250 Eco Points</span>
          </div>
          <Button size="sm" className="bg-eco-primary hover:bg-eco-secondary">
            Level 7
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;