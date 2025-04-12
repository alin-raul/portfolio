import { Card } from "./About";
import { Code, SquareStack } from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { Badge } from "@/components/ui/badge";

const GrowthTimeline = () => {
  const growthData = [
    {
      month: "Jun 2023",
      skills: 5,
      projects: 4,
      skillsList: ["HTML", "CSS", "JavScript", "Package manager", "Terminal"],
      projectsList: ["To-Do List , Calculator, Tic-Tac-Toe, Digital Clock"],
    },
    {
      month: "Sep 2023",
      skills: 10,
      projects: 4,
      skillsList: ["React", "Redux", "Joi", "Tailwind", "Vite"],
      projectsList: [
        "Journal",
        "E-commerce store",
        "Weather App",
        "Expense Calculator",
      ],
    },
    {
      month: "Aug 2024",
      skills: 22,
      projects: 2,
      skillsList: [
        "Next.js",
        "Redux",
        "TypeScript",
        "Firebase",
        "MongoDB",
        "TypeORM",
        "SQLite",
        "API's",
        "Maps",
        "Auth",
        "JWT",
        "Git",
      ],
      projectsList: ["Quiz App", "Favorite Cities"],
    },
    {
      month: "Feb 2025",
      skills: 25,
      projects: 1,
      skillsList: ["Three.js", "Shadcn UI", "React Query"],
      projectsList: ["Portfolio"],
    },
  ];

  return (
    <Card className="p-6 relative h-full min-h-96">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent dark:from-black/10" />

      <h3 className="text-lg mb-4 flex items-center gap-2">
        <Code className="w-5 h-5" />
        Skill & Project Growth
      </h3>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={growthData}>
            <defs>
              <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(var(--muted-foreground))"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--muted))"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              interval={1}
            />

            <YAxis
              axisLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
              width={30}
            />

            <Tooltip
              contentStyle={{
                background: "hsl(var(--accent))",
                border: "none",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "hsl(var(--accent-foreground))" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="p-3 bg-accent text-accent-foreground rounded-lg">
                      <p className="font-medium">{data.month}</p>
                      <p className="text-sm">
                        Skills: {data.skillsList.join(", ")}
                      </p>
                      <p className="text-sm mt-2">
                        Projects: {data.projectsList.join(", ")}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Area
              type="monotone"
              dataKey="skills"
              name="Skills Mastered"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#growthGradient)"
              animationDuration={2000}
            />

            <ReferenceLine
              x="Jan 2023"
              stroke="hsl(var(--accent))"
              strokeDasharray="3 3"
              label={{
                position: "insideTopRight",
                value: "Full-Stack Transition",
                fill: "hsl(var(--accent))",
                fontSize: 12,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent" />
          <span className="opacity-75">Technical Skills</span>
        </div>
        <div className="text-right">
          <p className="font-medium">+{(((25 - 3) / 3) * 100).toFixed(0)}%</p>
          <p className="text-xs opacity-75">6 projects completed</p>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-2">
        <Badge variant="outline" className="text-xs py-1">
          <SquareStack className="w-3 h-3 mr-1" />
          {growthData[growthData.length - 1].skills} Skills
        </Badge>
      </div>
    </Card>
  );
};

export default GrowthTimeline;
