import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Star, CheckCircle, Lock } from "lucide-react";

const LessonsSection = () => {
  const lessons = [
    {
      id: 1,
      title: "Climate Change Fundamentals",
      description: "Understand the science behind global warming and its effects on our planet.",
      duration: "15 min",
      difficulty: "Beginner",
      completed: true,
      locked: false,
      rating: 4.8,
      topics: ["Global Warming", "Greenhouse Effect", "Carbon Footprint"]
    },
    {
      id: 2,
      title: "Renewable Energy Sources",
      description: "Explore solar, wind, and hydro power as sustainable alternatives.",
      duration: "20 min", 
      difficulty: "Intermediate",
      completed: true,
      locked: false,
      rating: 4.9,
      topics: ["Solar Power", "Wind Energy", "Hydroelectric"]
    },
    {
      id: 3,
      title: "Waste Management & Recycling",
      description: "Learn proper waste segregation and recycling techniques for a cleaner environment.",
      duration: "18 min",
      difficulty: "Beginner",
      completed: false,
      locked: false,
      rating: 4.7,
      topics: ["Waste Segregation", "Recycling", "Composting"]
    },
    {
      id: 4,
      title: "Biodiversity Conservation",
      description: "Discover India's rich biodiversity and conservation efforts.",
      duration: "25 min",
      difficulty: "Advanced",
      completed: false,
      locked: true,
      rating: 4.9,
      topics: ["Wildlife Protection", "Forest Conservation", "Endemic Species"]
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Lessons</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Engaging, curriculum-aligned environmental lessons designed for Indian students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className={`shadow-card transition-all hover:shadow-eco ${lesson.locked ? 'opacity-60' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{lesson.title}</h3>
                      {lesson.completed && <CheckCircle className="w-5 h-5 text-success" />}
                      {lesson.locked && <Lock className="w-5 h-5 text-muted-foreground" />}
                    </div>
                    <p className="text-muted-foreground mb-4">{lesson.description}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {lesson.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lesson.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-eco-accent" />
                      {lesson.rating}
                    </div>
                  </div>
                  <Badge 
                    variant={lesson.difficulty === 'Beginner' ? 'secondary' : 
                           lesson.difficulty === 'Intermediate' ? 'default' : 'outline'}
                  >
                    {lesson.difficulty}
                  </Badge>
                </div>
                
                <Button 
                  className={`w-full gap-2 ${
                    lesson.completed ? 'bg-success hover:bg-success/90' :
                    lesson.locked ? 'bg-muted text-muted-foreground cursor-not-allowed' :
                    'bg-eco-primary hover:bg-eco-secondary'
                  }`}
                  disabled={lesson.locked}
                >
                  <Play className="w-4 h-4" />
                  {lesson.completed ? 'Review Lesson' : 
                   lesson.locked ? 'Locked' : 'Start Lesson'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;