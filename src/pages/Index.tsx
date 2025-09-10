import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Dashboard from "@/components/Dashboard";
import LessonsSection from "@/components/LessonsSection";
import ChallengesSection from "@/components/ChallengesSection";
import LeaderboardSection from "@/components/LeaderboardSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Dashboard />
        <LessonsSection />
        <ChallengesSection />
        <LeaderboardSection />
      </main>
    </div>
  );
};

export default Index;
