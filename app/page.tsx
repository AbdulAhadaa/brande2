"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  PieChart,
  Users,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Info,
  Filter,
  Download,
  RefreshCw,
  Search,
  Plus,
  Settings,
  Edit,
  ExternalLink,
  TrendingUp,
  Sparkles,
  BookOpen,
  Link,
  Bell,
  ChevronRight,
  Eye,
  MoreHorizontal,
  Calendar,
  Globe,
  Menu,
  X,
  Activity,
  Moon,
  Sun,
  Award,
  Zap,
  Clock
} from "lucide-react"

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("performance")
  const [selectedBrand, setSelectedBrand] = useState("jeep")
  const [dateRange, setDateRange] = useState("7days")
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  // Theme management
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const navigation = [
    {
      id: "performance",
      name: "Performance",
      icon: BarChart3,
      description: "Real-time metrics",
    },
    {
      id: "mentioned-brands",
      name: "Brand Mentions",
      icon: Target,
      description: "Mention analysis",
    },
    {
      id: "prompt-library",
      name: "Prompt Library",
      icon: BookOpen,
      description: "AI optimization",
    },
    {
      id: "cited-sources",
      name: "Sources",
      icon: Link,
      description: "Authority tracking",
    },
    {
      id: "brands",
      name: "Portfolio",
      icon: Users,
      description: "Brand management",
    },
  ]

  const handlePageChange = (pageId: string) => {
    if (pageId === currentPage) return

    setIsLoading(true)
    setIsMobileMenuOpen(false)

    setTimeout(() => {
      setCurrentPage(pageId)
      setIsLoading(false)
    }, 400)
  }

  const awarenessData = {
    score: 52,
    change: -16,
    rank: 3,
    trend: "down",
  }

  const sovData = {
    score: 13,
    change: 4.1,
    trend: "up",
  }
const competitors = [
  {
    name: "Bronco",
    score: 64,
    change: -9.7,
    rank: 1,
    logo: "https://www.kindpng.com/picc/m/756-7562917_new-bronco-logo-transparent-png-ford-bronco-logo.png"
  },
  {
    name: "Toyota",
    score: 64,
    change: -28,
    rank: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg"
  },
  {
    name: "Land Rover",
    score: 24,
    change: -13,
    rank: 4,
    logo: "https://www.freepnglogos.com/uploads/land-rover-png/land-rover-logo-0.png"
  }
];

const otherBrands = [
  {
    name: "Subaru",
    score: 24,
    change: -7.6,
    logo: "https://www.pngwing.com/en/png-vjppc"
  },
  {
    name: "Lexus",
    score: 20,
    change: -1.1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Lexus_division_emblem.svg"
  },
  {
    name: "Hyundai",
    score: 20,
    change: 9.5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Hyundai_Motor_Company_logo.svg"
  },
  {
    name: "Honda",
    score: 20,
    change: -1.7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda-logo.svg"
  },
  {
    name: "GMC",
    score: 16,
    change: -2.1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/GMC_logo.svg"
  }
];




  const heatmapData = {
    segments: [
      { brand: "Bronco", score: 64 },
      { brand: "Toyota", score: 64 },
      { brand: "Jeep", score: 52 },
      { brand: "Land Rover", score: 24 },
      { brand: "Subaru", score: 24 },
      { brand: "Lexus", score: 20 },
      { brand: "Hyundai", score: 20 },
      { brand: "Honda", score: 20 },
      { brand: "GMC", score: 16 },
      { brand: "Chevrolet", score: 16 },
    ],
    funnelStages: [
      { brand: "Bronco", top: 100, middle: 33, bottom: 73, overall: 100 },
      { brand: "Toyota", top: 100, middle: 44, bottom: 64, overall: 100 },
      { brand: "Jeep", top: 100, middle: 33, bottom: 55, overall: 67 },
      { brand: "Land Rover", top: 100, middle: 0, bottom: 36, overall: 0 },
      { brand: "Subaru", top: 50, middle: 22, bottom: 27, overall: 0 },
    ],
  }

  const prompts = [
    {
      id: 1,
      text: "I'm looking for a new vehicle that can handle both daily commuting and weekend camping trips...",
      brandMention: 88,
      segment: "Adventure",
      funnelStage: "Top",
      status: "active",
      lastUpdated: "2 hours ago",
      performance: "excellent",
      views: 1247,
      conversions: 89,
    },
    {
      id: 2,
      text: "What are the essential features to look for in a mid-size pickup truck...",
      brandMention: 13,
      segment: "Utility",
      funnelStage: "Middle",
      status: "active",
      lastUpdated: "5 hours ago",
      performance: "poor",
      views: 892,
      conversions: 12,
    },
    {
      id: 3,
      text: "How much does a reliable 4WD SUV cost for family use?",
      brandMention: 60,
      segment: "Family",
      funnelStage: "Bottom",
      status: "active",
      lastUpdated: "1 day ago",
      performance: "good",
      views: 2156,
      conversions: 156,
    },
  ]

  const citedSources = [
    {
      url: "https://www.americanfreight.net/blog/the-best-off-road-suvs",
      citations: 5,
      lastCited: "July 29, 2025",
      category: "Editorial",
      domain: "americanfreight.net",
      authority: 85,
      trend: "up",
      traffic: 12500,
      engagement: 4.2,
    },
    {
      url: "https://www.truecar.com/best-cars-trucks/suvs/four-wheel-drive/",
      citations: 5,
      lastCited: "July 29, 2025",
      category: "Commercial",
      domain: "truecar.com",
      authority: 92,
      trend: "stable",
      traffic: 45600,
      engagement: 3.8,
    },
  ]

  const topDomains = [
    { domain: "youtube.com", percentage: 45, change: 12, authority: 98 },
    { domain: "truecar.com", percentage: 38, change: -5, authority: 92 },
    { domain: "quora.com", percentage: 32, change: 8, authority: 87 },
    { domain: "edmunds.com", percentage: 28, change: 15, authority: 94 },
    { domain: "kbb.com", percentage: 25, change: -3, authority: 96 },
  ]

  const brands = [
    {
      name: "Honda",
      logo: "H",
      prompts: 6,
      competitors: 0,
      audits: 0,
      dailyRuns: true,
      performance: 78,
      lastUpdate: "2 hours ago",
      growth: 12.5,
      mentions: 1247,
    },
    {
      name: "Jeep",
      logo: "J",
      prompts: 9,
      competitors: 3,
      audits: 0,
      dailyRuns: true,
      performance: 85,
      lastUpdate: "1 hour ago",
      growth: 8.3,
      mentions: 2156,
    },
    {
      name: "RedShelf",
      logo: "R",
      prompts: 8,
      competitors: 0,
      audits: 0,
      dailyRuns: true,
      performance: 92,
      lastUpdate: "30 minutes ago",
      growth: 15.7,
      mentions: 892,
    },
  ]

  const CircularProgress = ({ value, size = 160, strokeWidth = 8, className = "", label = "Score" }) => {
    const radius = (size - strokeWidth) / 2
    const circumference = radius * 2 * Math.PI
    const strokeDasharray = `${(value / 100) * circumference} ${circumference}`

    // Detect if this is for Brand Awareness or Share of Voice by label
    const isBrandAwareness = label === "Brand Awareness"
    const isShareOfVoice = label === "Share of Voice"

    // Custom keyframes for one-direction slow animation
    // Add to global styles if not present
    // @keyframes drawCircleSlow {
    //   from { stroke-dashoffset: circumference; }
    //   to { stroke-dashoffset: 0; }
    // }

    return (
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <defs>
            <linearGradient id={`gradient-${value}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              {isBrandAwareness ? (
                <>
                  <stop offset="0%" stopColor="#8BC53F" />
                  <stop offset="100%" stopColor="#8BC53F" />
                </>
              ) : isShareOfVoice ? (
                <>
                  <stop offset="0%" stopColor="#EB008B" />
                  <stop offset="100%" stopColor="#EB008B" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#d946ef" />
                </>
              )}
            </linearGradient>
            <filter id={`glow-${value}-${size}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-muted-foreground/20"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#gradient-${value}-${size})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            filter={`url(#glow-${value}-${size})`}
            style={{
              strokeDashoffset: circumference,
              animation: "drawCircleSmooth 6s cubic-bezier(0.77,0,0.175,1) forwards 0s",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center animate-scale-in animation-delay-1000">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground animate-count-up">{value}%</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
          </div>
        </div>
        <style jsx>{`
          @keyframes drawCircleSmooth {
            from { stroke-dashoffset: ${circumference}; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>
      </div>
    )
  }

  const MetricCard = ({ title, value, change, trend, rank, icon: Icon, description }) => (
    <Card className="group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20">
              {/* If Brand Awareness, set BarChart3 color to #8BC53F */}
              {title === "Brand Awareness" ? (
                <Icon className="w-5 h-5" style={{ color: '#8BC53F' }} />
              ) : (
                <Icon className="w-5 h-5 text-primary" />
              )}
            </div>
            <div>
              <CardTitle className="text-lg font-semibold">
                {title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Info className="w-4 h-4 text-muted-foreground cursor-help" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        <div className="flex justify-center">
          {/* Force animation restart by changing key on value/title */}
          <CircularProgress key={`${title}-${value}`} value={value} label={title} />
        </div>
        <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 group-hover:bg-muted/70">
          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg ${
                trend === "up"
                  ? "bg-green-100 dark:bg-green-900/20 group-hover:bg-green-200 dark:group-hover:bg-green-900/30"
                  : "bg-red-100 dark:bg-red-900/20 group-hover:bg-red-200 dark:group-hover:bg-red-900/30"
              }`}
            >
              {trend === "up" ? (
                <ArrowUpRight className="w-4 h-4 text-green-600 dark:text-green-400" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-600 dark:text-red-400" />
              )}
            </div>
            <div>
              <span
                className={`font-semibold ${
                  trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
              >
                {change > 0 ? "+" : ""}
                {change}%
              </span>
              <p className="text-sm text-muted-foreground">vs last period</p>
            </div>
          </div>
          {rank && (
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-muted-foreground">Rank</span>
                <Badge
                  variant="secondary"
                  className="font-semibold"
                >
                  #{rank}
                </Badge>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )

 const CompetitorCard = ({ competitors, title, subtitle }) => (
  <Card className="hover:shadow-xl">
    <CardHeader className="pb-4">
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        <Badge
          variant="outline"
          className="font-medium"
        >
          {competitors.length} brands
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {competitors.map((competitor, index) => (
          <div
            key={competitor.name}
            className="group p-4 rounded-xl bg-muted/30 hover:bg-muted/50 hover:shadow-md cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  {/* Logo or fallback initial */}
                  <div className="w-10 h-10 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center">
                    {competitor.logo && competitor.logo.startsWith("http") ? (
                      <img
                        src={competitor.logo}
                        alt={competitor.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = "none";
                        }}
                      />
                    ) : (
                      <span className="text-lg font-bold text-muted-foreground">
                        {competitor.name[0]}
                      </span>
                    )}
                  </div>

                 
                </div>

                <div>
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-700">
                    {competitor.name}
                  </span>
                  <p className="text-sm text-muted-foreground">Automotive Brand</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-muted-foreground">Score</span>
                    <span className="font-semibold">
                      {competitor.score}%
                    </span>
                  </div>
                  <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                      style={{ width: `${competitor.score}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div
                    className={`p-1.5 rounded-lg ${
                      competitor.change > 0
                        ? "bg-green-100 dark:bg-green-900/20"
                        : "bg-red-100 dark:bg-red-900/20"
                    }`}
                  >
                    {competitor.change > 0 ? (
                      <ArrowUpRight className="w-3 h-3 text-green-600 dark:text-green-400" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  <div className="text-right">
                    <span
                      className={`text-sm font-semibold transition-colors duration-700 ${
                        competitor.change > 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {competitor.change > 0 ? "+" : ""}
                      {competitor.change}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);



  const ElegantTable = ({ headers, data, actions = true }) => (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold text-foreground"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {header}
                </th>
              ))}
              {actions && (
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="group hover:bg-muted/30 cursor-pointer"
              >
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-sm">
                    {cell}
                  </td>
                ))}
                {actions && (
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1 opacity-0 group-hover:opacity-100">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0"
                        >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-2000"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-2000"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

const renderPerformancePage = () => (
  <div className="space-y-8">
    {/* Hero Metrics Section with Staggered Animation */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <div className="group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
          <div className="relative transform group-hover:scale-[1.02] transition-all duration-300 ease-out">
            <MetricCard
              title="Brand Awareness"
              description="Market visibility score"
              value={awarenessData.score}
              change={awarenessData.change}
              trend={awarenessData.trend}
              rank={awarenessData.rank}
              icon={BarChart3}
              label="Brand Awareness"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
          <div className="relative transform group-hover:scale-[1.02] transition-all duration-300 ease-out">
            <MetricCard
              title="Share of Voice"
              description="Conversation dominance"
              value={sovData.score}
              change={sovData.change}
              trend={sovData.trend}
              icon={PieChart}
              label="Share of Voice"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Competitors Section with Advanced Animations */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div>
        <div className="group relative overflow-hidden">
          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-chart-1/10 to-chart-2/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          
          <div className="relative transform group-hover:scale-[1.01] group-hover:translate-y-[-2px] transition-all duration-300 ease-out">
            <CompetitorCard 
              competitors={competitors} 
              title="Market Leaders" 
              subtitle="Top performing competitors"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="group relative overflow-hidden">
          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-chart-3/10 to-chart-4/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
          
          <div className="relative transform group-hover:scale-[1.01] group-hover:translate-y-[-2px] transition-all duration-300 ease-out">
            <CompetitorCard 
              competitors={otherBrands} 
              title="Emerging Brands" 
              subtitle="Rising competitors to monitor"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Floating Action Indicator */}
    <div 
      className={`fixed bottom-8 right-8 z-10 transform transition-all duration-1000 ease-out ${
        isLoading 
          ? "opacity-0 translate-y-4 scale-0" 
          : "opacity-100 translate-y-0 scale-100"
      }`}
      style={{ transitionDelay: isLoading ? '0ms' : '600ms' }}
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
        <div className="relative bg-primary/10 backdrop-blur-sm rounded-full p-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle"></div>
        </div>
      </div>
    </div>

    {/* Background Ambient Animation */}
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div 
        className={`absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl transition-all duration-2000 ${
          isLoading ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
        style={{ 
          transitionDelay: isLoading ? '0ms' : '800ms',
          animation: !isLoading ? 'pulse-subtle 4s ease-in-out infinite' : 'none'
        }}
      ></div>
      <div 
        className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-chart-2/5 to-chart-4/5 rounded-full blur-3xl transition-all duration-2000 ${
          isLoading ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
        style={{ 
          transitionDelay: isLoading ? '0ms' : '1000ms',
          animation: !isLoading ? 'pulse-subtle 6s ease-in-out infinite reverse' : 'none'
        }}
      ></div>
    </div>
  </div>
)
  const HeatmapCard = ({ title, subtitle, data, type = "simple" }) => (
    <Card className="transition-all duration-500 hover:shadow-xl animate-fade-in-up hover:scale-[1.01]">
      <CardHeader className="pb-4">
        <div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
      </CardHeader>
      <CardContent>
        {type === "simple" ? (
          <div className="space-y-3">
            {data.map((item, index) => (
              <div
                key={item.brand}
                className="flex items-center space-x-3 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-sm font-medium text-foreground w-20 text-right">{item.brand}</span>
                <div className="flex-1 relative">
                  <div
                    className="h-8 rounded-lg flex items-center justify-center text-white text-sm font-medium transition-all duration-700 hover:scale-105 cursor-pointer animate-progress-fill hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, 
                        hsl(${220 + (item.score / 100) * 60}, 70%, ${50 + (item.score / 100) * 20}%), 
                        hsl(${240 + (item.score / 100) * 40}, 80%, ${60 + (item.score / 100) * 15}%))`,
                      width: `${Math.max(item.score, 25)}%`,
                    }}
                  >
                    <span className="animate-count-up">{item.score}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-3 text-xs font-semibold text-muted-foreground pb-2 border-b animate-slide-in-down">
              <div>Brand</div>
              <div className="text-center">Top</div>
              <div className="text-center">Middle</div>
              <div className="text-center">Bottom</div>
            </div>
            {data.map((item, index) => (
              <div
                key={item.brand}
                className="grid grid-cols-4 gap-3 items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-sm font-medium text-foreground">{item.brand}</span>
                {["top", "middle", "bottom"].map((stage, stageIndex) => (
                  <div key={stage} className="text-center">
                    <div
                      className="h-6 rounded-lg text-white text-xs flex items-center justify-center font-medium transition-all duration-500 hover:scale-110 cursor-pointer animate-progress-fill hover:shadow-md"
                      style={{
                        background: `linear-gradient(135deg, 
                          hsl(${200 + (item[stage] / 100) * 80}, 70%, ${50 + (item[stage] / 100) * 20}%), 
                          hsl(${220 + (item[stage] / 100) * 60}, 80%, ${60 + (item[stage] / 100) * 15}%))`,
                        animationDelay: `${stageIndex * 200}ms`,
                      }}
                    >
                      <span className="animate-count-up">{item[stage]}%</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )


  const renderMentionedBrandsPage = () => (
    <div
      className={`space-y-8 transition-all duration-500 ${
        isLoading ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      {/* Hero Metrics with Advanced Visual Impact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { 
            title: "Total Mentions", 
            value: 2847, 
            change: 23.5, 
            trend: "up", 
            icon: Target,
            description: "Cross-platform mentions",
            sparkline: [1420, 1650, 1890, 2100, 2340, 2580, 2847]
          },
          { 
            title: "Brand Dominance", 
            value: 34.2, 
            change: 5.8, 
            trend: "up", 
            icon: PieChart,
            description: "Market conversation share",
            sparkline: [28.4, 29.8, 30.5, 31.2, 32.1, 33.4, 34.2]
          },
          { 
            title: "Sentiment Score", 
            value: 78.5, 
            change: 12.3, 
            trend: "up", 
            icon: TrendingUp,
            description: "Positive sentiment index",
            sparkline: [66.2, 68.5, 70.3, 72.8, 74.5, 76.9, 78.5]
          },
          { 
            title: "AI Coverage", 
            value: 92.1, 
            change: -2.1, 
            trend: "down", 
            icon: Activity,
            description: "Query response rate",
            sparkline: [94.2, 93.8, 93.5, 93.1, 92.8, 92.4, 92.1]
          }
        ].map((metric, index) => (
          <Card key={metric.title} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] animate-fade-in-up hover:-translate-y-2" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-1000" />
            
            <CardContent className="p-6 relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <metric.icon className="w-6 h-6 text-primary transition-all duration-500 group-hover:text-white" />
                </div>
                <div className={`flex items-center space-x-2 text-sm transition-all duration-300 ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {metric.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4 animate-bounce-subtle" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 animate-bounce-subtle" />
                  )}
                  <span className="font-bold animate-count-up">
                    {metric.change > 0 ? "+" : ""}{metric.change}%
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-count-up">
                    {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                    {metric.title.includes('Dominance') || metric.title.includes('Sentiment') || metric.title.includes('Coverage') ? '%' : ''}
                  </h3>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-500">{metric.title}</p>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>

                {/* Sparkline Chart */}
                <div className="relative h-12 overflow-hidden rounded-lg bg-gradient-to-r from-muted/50 to-transparent">
                  <svg className="w-full h-full" viewBox="0 0 200 48" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`sparklineGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="currentColor" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id={`sparklineStroke${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    
                    {/* Area fill */}
                    <path
                      d={`M 0,48 ${metric.sparkline.map((value, i) => {
                        const x = (i / (metric.sparkline.length - 1)) * 200;
                        const y = 48 - ((value - Math.min(...metric.sparkline)) / (Math.max(...metric.sparkline) - Math.min(...metric.sparkline))) * 36;
                        return `L ${x},${y}`;
                      }).join(' ')} L 200,48 Z`}
                      fill={`url(#sparklineGradient${index})`}
                      className="text-primary transition-all duration-1000 group-hover:text-purple-500"
                      style={{
                        animation: `sparklineGrow 2s ease-out ${index * 0.2}s forwards`,
                        opacity: 0
                      }}
                    />
                    
                    {/* Stroke line */}
                    <path
                      d={`M ${metric.sparkline.map((value, i) => {
                        const x = (i / (metric.sparkline.length - 1)) * 200;
                        const y = 48 - ((value - Math.min(...metric.sparkline)) / (Math.max(...metric.sparkline) - Math.min(...metric.sparkline))) * 36;
                        return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
                      }).join(' ')}`}
                      fill="none"
                      stroke={`url(#sparklineStroke${index})`}
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                      style={{
                        strokeDasharray: 400,
                        strokeDashoffset: 400,
                        animation: `sparklineDraw 2s ease-out ${index * 0.2 + 0.5}s forwards`
                      }}
                    />
                    
                    {/* Data points */}
                    {metric.sparkline.map((value, i) => {
                      const x = (i / (metric.sparkline.length - 1)) * 200;
                      const y = 48 - ((value - Math.min(...metric.sparkline)) / (Math.max(...metric.sparkline) - Math.min(...metric.sparkline))) * 36;
                      return (
                        <circle
                          key={i}
                          cx={x}
                          cy={y}
                          r="2"
                          fill="white"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-primary opacity-0 transition-all duration-300"
                          style={{
                            animation: `sparklinePoint 0.3s ease-out ${index * 0.2 + 1 + i * 0.1}s forwards`
                          }}
                        />
                      );
                    })}
                  </svg>
                  
                  {/* Glowing effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer" />
                </div>

                {/* Mini insights */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${metric.trend === 'up' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                    <span className="font-medium">
                      {metric.trend === 'up' ? 'Trending Up' : 'Declining'}
                    </span>
                  </div>
                  <div className="text-muted-foreground">
                    7-day trend
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Advanced Analytics Grid with Revolutionary Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-7 gap-8">
        
        {/* Multi-dimensional Brand Performance Radar */}
          <Card className="xl:col-span-4 relative overflow-hidden animate-fade-in-up animation-delay-200">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <CardHeader className="pb-6 relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brand Performance Matrix
            </CardTitle>
            <p className="text-muted-foreground">360° competitive analysis across all dimensions</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="animate-pulse bg-green-500/10 border-green-500/50 text-green-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping" />
              Real-time
            </Badge>
            <Select defaultValue="awareness">
              <SelectTrigger className="w-36 border-primary/20 hover:border-primary/50 transition-all duration-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="awareness">Brand Awareness</SelectItem>
                <SelectItem value="consideration">Consideration</SelectItem>
                <SelectItem value="preference">Purchase Intent</SelectItem>
                <SelectItem value="loyalty">Brand Loyalty</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-8 relative z-10">
        
        {/* Custom Radar Chart - FIXED */}
        <div className="relative w-full h-96 mb-8">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(224 71% 54%)" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(224 71% 54%)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Grid circles */}
            {[60, 120, 180].map((radius) => (
              <circle
                key={radius}
                cx="200"
                cy="200"
                r={radius}
                fill="none"
                stroke="hsl(214 15% 78%)"
                strokeWidth="1"
                strokeDasharray="2,2"
                opacity="0.5"
              />
            ))}
            
            {/* Grid lines and labels */}
            {['Adventure', 'Family', 'Luxury', 'Performance', 'Value', 'Reliability'].map((segment, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const x2 = 200 + Math.cos(angle) * 180;
              const y2 = 200 + Math.sin(angle) * 180;
              const labelX = 200 + Math.cos(angle) * 210;
              const labelY = 200 + Math.sin(angle) * 210;
              
              return (
                <g key={segment}>
                  <line
                    x1="200"
                    y1="200"
                    x2={x2}
                    y2={y2}
                    stroke="hsl(214 15% 78%)"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-sm font-semibold fill-foreground"
                  >
                    {segment}
                  </text>
                </g>
              );
            })}
            
            {/* Jeep performance polygon - FIXED */}
            <polygon
              points={[82, 67, 43, 71, 56, 78].map((score, index) => {
                const angle = (index * 60 - 90) * (Math.PI / 180);
                const radius = (score / 100) * 180;
                const x = 200 + Math.cos(angle) * radius;
                const y = 200 + Math.sin(angle) * radius;
                return `${x},${y}`;
              }).join(' ')}
              fill="url(#radarBg)"
              stroke="hsl(224 71% 54%)"
              strokeWidth="3"
              filter="url(#glow)"
              opacity="0.8"
            />
            
            {/* Data points - FIXED */}
            {[82, 67, 43, 71, 56, 78].map((score, index) => {
              const angle = (index * 60 - 90) * (Math.PI / 180);
              const radius = (score / 100) * 180;
              const x = 200 + Math.cos(angle) * radius;
              const y = 200 + Math.sin(angle) * radius;
              
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill="white"
                    stroke="hsl(224 71% 54%)"
                    strokeWidth="3"
                    filter="url(#glow)"
                    className="cursor-pointer hover:scale-125 transition-all duration-300"
                  />
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    className="text-xs font-bold fill-primary"
                  >
                    {score}%
                  </text>
                </g>
              );
            })}
          </svg>
          
          {/* Center logo - FIXED positioning */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-xl">J</span>
          </div>
        </div>
        
        {/* Competitive Benchmarks - FIXED */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[
            { competitor: "Ford Bronco", scores: [75, 78, 89, 83, 72, 76], color: "#3b82f6", trend: "declining" },
            { competitor: "Toyota 4Runner", scores: [68, 71, 84, 79, 85, 82], color: "#ef4444", trend: "stable" },
            { competitor: "Land Rover", scores: [45, 52, 89, 87, 45, 78], color: "#22c55e", trend: "growing" }
          ].map((comp, compIndex) => (
            <div key={comp.competitor} className="p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-500 hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: comp.color }} />
                  <span className="font-semibold text-sm">{comp.competitor}</span>
                </div>
                <Badge variant={comp.trend === 'growing' ? 'default' : comp.trend === 'declining' ? 'destructive' : 'secondary'} className="text-xs">
                  {comp.trend}
                </Badge>
              </div>
              
              {/* Mini radar preview - FIXED */}
              <div className="w-full h-20 relative mb-3">
                <svg className="w-full h-full" viewBox="0 0 100 80">
                  <polygon
                    points={comp.scores.map((score, index) => {
                      const angle = (index * 60 - 90) * (Math.PI / 180);
                      const radius = (score / 100) * 30;
                      const x = 50 + Math.cos(angle) * radius;
                      const y = 40 + Math.sin(angle) * radius;
                      return `${x},${y}`;
                    }).join(' ')}
                    fill={comp.color}
                    fillOpacity="0.2"
                    stroke={comp.color}
                    strokeWidth="1.5"
                  />
                  
                  {/* Data points for mini radar */}
                  {comp.scores.map((score, index) => {
                    const angle = (index * 60 - 90) * (Math.PI / 180);
                    const radius = (score / 100) * 30;
                    const x = 50 + Math.cos(angle) * radius;
                    const y = 40 + Math.sin(angle) * radius;
                    return (
                      <circle
                        key={index}
                        cx={x}
                        cy={y}
                        r="2"
                        fill={comp.color}
                      />
                    );
                  })}
                </svg>
              </div>
              
              <div className="text-xs text-muted-foreground">
                Avg Score: <span className="font-semibold text-foreground">
                  {Math.round(comp.scores.reduce((a, b) => a + b) / comp.scores.length)}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </Card>
        {/* Real-time Mention Heatmap */}
        <Card className="xl:col-span-3 relative overflow-hidden animate-fade-in-up animation-delay-400">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5" />
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Live Mention Heatmap
                </CardTitle>
                <p className="text-sm text-muted-foreground">Real-time brand conversations</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <div className="w-3 h-3 bg-green-500 rounded-full absolute animate-pulse" />
                <span className="text-xs font-bold text-green-600 ml-2">LIVE</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 relative z-10">
            
            {/* Platform Activity Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { platform: "ChatGPT", mentions: 1247, intensity: 85, color: "#10b981" },
                { platform: "Claude", mentions: 892, intensity: 67, color: "#3b82f6" },
                { platform: "Gemini", mentions: 456, intensity: 45, color: "#f59e0b" },
                { platform: "Perplexity", mentions: 252, intensity: 28, color: "#ef4444" }
              ].map((platform, index) => (
                <div key={platform.platform} className="relative p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/20 hover:scale-105 transition-all duration-500 group animate-scale-in cursor-pointer" style={{ animationDelay: `${index * 150}ms` }}>
                  
                  {/* Intensity visualization */}
                  <div className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" 
                       style={{ backgroundColor: platform.color }} />
                  
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" 
                           style={{ backgroundColor: platform.color }}>
                        {platform.platform[0]}
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold animate-count-up">{platform.mentions}</div>
                        <div className="text-xs text-muted-foreground">mentions</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-sm font-semibold mb-1">{platform.platform}</div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full animate-progress-fill transition-all duration-1000"
                          style={{ 
                            backgroundColor: platform.color,
                            width: `${platform.intensity}%`,
                            animationDelay: `${index * 150 + 300}ms`
                          }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Activity: {platform.intensity}%
                      </div>
                    </div>
                  </div>
                  
                  {/* Pulse effect for high activity */}
                  {platform.intensity > 70 && (
                    <div className="absolute inset-0 rounded-xl border-2 border-green-400 animate-ping opacity-30" />
                  )}
                </div>
              ))}
            </div>

            {/* Live Activity Stream */}
            <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
              <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                Recent Activity
              </h4>
              
              {[
                { platform: "ChatGPT", query: "Best off-road SUV for family adventures", sentiment: "positive", time: "12s ago", urgency: "high" },
                { platform: "Claude", query: "Jeep Wrangler vs Bronco reliability comparison", sentiment: "neutral", time: "34s ago", urgency: "medium" },
                { platform: "Gemini", query: "Most reliable 4x4 vehicles under $50k", sentiment: "mixed", time: "1m ago", urgency: "low" },
                { platform: "ChatGPT", query: "Jeep Grand Cherokee towing capacity", sentiment: "positive", time: "2m ago", urgency: "medium" },
                { platform: "Perplexity", query: "Best SUV for winter driving conditions", sentiment: "positive", time: "3m ago", urgency: "high" }
              ].map((mention, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg transition-all duration-500 hover:scale-[1.02] cursor-pointer animate-slide-in-right group ${
                    mention.urgency === 'high' ? 'bg-red-50 border-l-4 border-red-400 hover:bg-red-100' :
                    mention.urgency === 'medium' ? 'bg-yellow-50 border-l-4 border-yellow-400 hover:bg-yellow-100' :
                    'bg-muted/30 border-l-4 border-muted-foreground/20 hover:bg-muted/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          mention.platform === 'ChatGPT' ? 'border-green-400 text-green-700' :
                          mention.platform === 'Claude' ? 'border-blue-400 text-blue-700' :
                          mention.platform === 'Gemini' ? 'border-yellow-400 text-yellow-700' :
                          'border-red-400 text-red-700'
                        }`}
                      >
                        {mention.platform}
                      </Badge>
                      <div className={`w-2 h-2 rounded-full ${
                        mention.sentiment === "positive" ? "bg-green-500 animate-pulse" : 
                        mention.sentiment === "negative" ? "bg-red-500 animate-pulse" : 
                        "bg-yellow-500 animate-pulse"
                      }`} />
                    </div>
                    <div className="flex items-center space-x-2">
                      {mention.urgency === 'high' && (
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                      )}
                      <span className="text-xs text-muted-foreground">{mention.time}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium line-clamp-2 text-primary transition-colors duration-300">
                    {mention.query}
                  </p>
                  
                  <div className="flex items-center justify-between mt-2">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        mention.sentiment === 'positive' ? 'bg-green-100 text-green-700' :
                        mention.sentiment === 'negative' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {mention.sentiment}
                    </Badge>
                    <Button variant="ghost" size="sm" className="h-5 px-2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Intelligence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* AI-Powered Sentiment Analysis */}
        <Card className="relative overflow-hidden animate-fade-in-up animation-delay-600">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5" />
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  AI Sentiment Analysis
                </CardTitle>
                <p className="text-sm text-muted-foreground">Advanced emotion detection</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            
            {/* Sentiment Wheel */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="positiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                  <linearGradient id="neutralGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                  <linearGradient id="negativeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#f87171" />
                  </linearGradient>
                </defs>
                
                {/* Sentiment arcs */}
                {[
                  { sentiment: 'Positive', percentage: 78, color: 'url(#positiveGradient)', startAngle: 0 },
                  { sentiment: 'Neutral', percentage: 18, color: 'url(#neutralGradient)', startAngle: 78 },
                  { sentiment: 'Negative', percentage: 4, color: 'url(#negativeGradient)', startAngle: 96 }
                ].map((item, index) => {
                  const circumference = 2 * Math.PI * 70;
                  const offset = circumference - (item.percentage / 100) * circumference;
                  
                  return (
                    <circle
                      key={item.sentiment}
                      cx="100"
                      cy="100"
                      r="70"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="20"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      transform={`rotate(${item.startAngle * 3.6 - 90} 100 100)`}
                      className="transition-all duration-2000 ease-out"
                      style={{
                        animation: `sentimentArc 2s ease-out ${index * 0.3}s forwards`
                      }}
                    />
                  );
                })}
                
                {/* Center circle with overall score */}
                <circle
                  cx="100"
                  cy="100"
                  r="45"
                  fill="white"
                  stroke="hsl(var(--border))"
                  strokeWidth="2"
                  className="drop-shadow-lg"
                />
                <text
                  x="100"
                  y="90"
                  textAnchor="middle"
                  className="text-2xl font-black fill-primary"
                >
                  78.5
                </text>
                <text
                  x="100"
                  y="110"
                  textAnchor="middle"
                  className="text-xs font-medium fill-muted-foreground"
                >
                  SENTIMENT
                </text>
              </svg>
            </div>

            {/* Sentiment breakdown */}
            <div className="space-y-3">
              {[
                { label: "Positive", value: 78, color: "bg-green-500", textColor: "text-green-700" },
                { label: "Neutral", value: 18, color: "bg-yellow-500", textColor: "text-yellow-700" },
                { label: "Negative", value: 4, color: "bg-red-500", textColor: "text-red-700" }
              ].map((item, index) => (
                <div key={item.label} className="flex items-center space-x-3 animate-slide-in-left" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`w-3 h-3 ${item.color} rounded-full animate-pulse`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.textColor}`}>{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full animate-progress-fill`}
                        style={{ 
                          width: `${item.value}%`,
                          animationDelay: `${index * 200 + 500}ms`
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AI Insights */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-600 animate-spin-slow" />
                <span className="text-sm font-semibold text-purple-700">AI Insight</span>
              </div>
              <p className="text-sm text-purple-600">
                Sentiment trend shows <strong>+12.3%</strong> improvement over last period. 
                Adventure-focused mentions driving positive sentiment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Geographic Heat Distribution */}
        <Card className="relative overflow-hidden animate-fade-in-up animation-delay-700">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5" />
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Geographic Reach
                </CardTitle>
                <p className="text-sm text-muted-foreground">Global mention distribution</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            
            {/* World regions visualization */}
            <div className="space-y-4 mb-6">
              {[
                { region: "North America", mentions: 1840, percentage: 64.6, growth: "+18.2%", flag: "🇺🇸" },
                { region: "Europe", mentions: 624, percentage: 21.9, growth: "+12.7%", flag: "🇪🇺" },
                { region: "Asia Pacific", mentions: 289, percentage: 10.1, growth: "+45.8%", flag: "🌏" },
                { region: "Others", mentions: 94, percentage: 3.3, growth: "+8.1%", flag: "🌍" }
              ].map((region, index) => (
                <div key={region.region} className="space-y-2 animate-slide-in-right" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{region.flag}</span>
                      <div>
                        <span className="font-semibold text-sm">{region.region}</span>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{region.mentions.toLocaleString()} mentions</span>
                          <span className="text-green-600 font-medium">{region.growth}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-lg">{region.percentage}%</span>
                    </div>
                  </div>
                  
                  {/* Progress bar with gradient */}
                  <div className="relative w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full animate-progress-fill"
                      style={{ 
                        background: `linear-gradient(90deg, 
                          hsl(${200 + index * 30}, 70%, 50%), 
                          hsl(${220 + index * 30}, 80%, 60%))`,
                        width: `${region.percentage}%`,
                        animationDelay: `${index * 150 + 300}ms`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              ))}
            </div>

            {/* Top cities */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
              <h4 className="font-semibold text-sm text-cyan-700 mb-3">Top Cities</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { city: "Los Angeles", mentions: 342 },
                  { city: "New York", mentions: 298 },
                  { city: "Chicago", mentions: 267 },
                  { city: "Toronto", mentions: 189 }
                ].map((city, index) => (
                  <div key={city.city} className="flex items-center justify-between animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-700">{city.city}</span>

                    <span className="text-xs font-bold text-cyan-700 dark:text-cyan-300">{city.mentions}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Predictive Analytics */}
        <Card className="relative overflow-hidden animate-fade-in-up animation-delay-800">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5" />
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Predictive Insights
                </CardTitle>
                <p className="text-sm text-muted-foreground">AI-powered forecasting</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            
            {/* Prediction chart */}
            <div className="relative h-32 mb-6 rounded-lg bg-gradient-to-r from-muted/30 to-transparent overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="predictionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                {/* Historical data (solid line) */}
                <path
                  d="M 0,80 Q 50,70 100,75 T 200,60"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-progress-fill"
                  style={{
                    strokeDasharray: 400,
                    strokeDashoffset: 400,
                    animation: 'sparklineDraw 2s ease-out 0.5s forwards'
                  }}
                />
                
                {/* Prediction line (dashed) */}
                <path
                  d="M 200,60 Q 225,45 250,40 T 300,35"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeDasharray="8,4"
                  strokeLinecap="round"
                  className="animate-progress-fill"
                  style={{
                    strokeDasharray: 200,
                    strokeDashoffset: 200,
                    animation: 'sparklineDraw 1.5s ease-out 2s forwards'
                  }}
                />
                
                {/* Prediction area */}
                <path
                  d="M 200,60 Q 225,45 250,40 T 300,35 L 300,120 L 200,120 Z"
                  fill="url(#predictionGradient)"
                  opacity="0"
                  className="animate-fade-in-up"
                  style={{ animationDelay: '2.5s' }}
                />
                
                {/* Data points */}
                {[
                  { x: 50, y: 70, type: 'historical' },
                  { x: 100, y: 75, type: 'historical' },
                  { x: 150, y: 65, type: 'historical' },
                  { x: 200, y: 60, type: 'current' },
                  { x: 250, y: 40, type: 'predicted' },
                  { x: 300, y: 35, type: 'predicted' }
                ].map((point, index) => (
                  <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill={point.type === 'predicted' ? '#f97316' : point.type === 'current' ? '#10b981' : '#3b82f6'}
                    stroke="white"
                    strokeWidth="2"
                    className="drop-shadow-md animate-scale-in"
                    style={{ animationDelay: `${index * 0.2 + 1}s` }}
                  />
                ))}
              </svg>
            </div>

            {/* Predictions */}
            <div className="space-y-3">
              {[
                { 
                  prediction: "Next 7 days", 
                  value: "+15.2%", 
                  confidence: 87, 
                  trend: "up",
                  insight: "Adventure segment surge expected"
                },
                { 
                  prediction: "Next 30 days", 
                  value: "+28.7%", 
                  confidence: 79, 
                  trend: "up",
                  insight: "New model launch impact"
                },
                { 
                  prediction: "Competition risk", 
                  value: "Medium", 
                  confidence: 92, 
                  trend: "stable",
                  insight: "Ford Bronco activity increasing"
                }
              ].map((item, index) => (
                <div key={item.prediction} className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-slide-in-left" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm">{item.prediction}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`font-bold ${
                        item.trend === 'up' ? 'text-green-600' : 
                        item.trend === 'down' ? 'text-red-600' : 'text-yellow-600'
                      }`}>
                        {item.value}
                      </span>
                      {item.trend === 'up' ? (
                        <ArrowUpRight className="w-3 h-3 text-green-600" />
                      ) : item.trend === 'down' ? (
                        <ArrowDownRight className="w-3 h-3 text-red-600" />
                      ) : (
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{item.insight}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-muted-foreground">Confidence:</span>
                      <span className="font-semibold">{item.confidence}%</span>
                      <div className="w-8 h-1 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            item.confidence > 85 ? 'bg-green-500' : 
                            item.confidence > 70 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${item.confidence}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revolutionary Data Visualization Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* Advanced Topic Modeling */}
  
      </div>
    </div>
  );
const renderPromptLibraryPage = () => (
  <div className="space-y-10">
    {/* Header Section with Elegant Glassmorphism */}
    <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-[#1A2A44]/10 via-white/5 to-[#4B0082]/10 dark:from-[#1A2A44]/20 dark:via-black/10 dark:to-[#4B0082]/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <Tabs defaultValue="active" className="w-auto">
        <TabsList className="bg-transparent border border-white/10 backdrop-blur-lg rounded-xl">
          <TabsTrigger
            value="active"
            className="relative px-6 py-3 text-sm font-medium tracking-wide text-[#1A2A44] dark:text-[#E6E6FA] transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A2A44]/20 hover:to-[#4B0082]/20 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1A2A44] data-[state=active]:to-[#4B0082] data-[state=active]:text-white data-[state=active]:shadow-[0_0_15px_rgba(75,0,130,0.3)] rounded-lg"
          >
            <span className="relative z-10">Active Prompts</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A44]/10 to-[#4B0082]/10 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-500 rounded-lg" />
          </TabsTrigger>
          <TabsTrigger
            value="archived"
            className="relative px-6 py-3 text-sm font-medium tracking-wide text-[#1A2A44] dark:text-[#E6E6FA] transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A2A44]/20 hover:to-[#4B0082]/20 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1A2A44] data-[state=active]:to-[#4B0082] data-[state=active]:text-white data-[state=active]:shadow-[0_0_15px_rgba(75,0,130,0.3)] rounded-lg"
          >
            <span className="relative z-10">Archived</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A44]/10 to-[#4B0082]/10 opacity-0 data-[state=active]:opacity-100 transition-opacity duration-500 rounded-lg" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="sm"
          className="relative bg-transparent border-[#E6E6FA]/20 text-[#1A2A44] dark:text-[#E6E6FA] font-medium tracking-wide hover:bg-gradient-to-r hover:from-[#1A2A44]/20 hover:to-[#4B0082]/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_12px_rgba(75,0,130,0.4)] rounded-lg"
        >
          <Sparkles className="w-4 h-4 mr-2 animate-pulse-subtle text-[#2E8B57]" />
          AI Generate
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A44]/10 to-[#4B0082]/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />
        </Button>
        <Button
          size="sm"
          className="relative bg-gradient-to-r from-[#1A2A44] to-[#4B0082] hover:from-[#1A2A44]/80 hover:to-[#4B0082]/80 text-white font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(75,0,130,0.5)] rounded-lg"
        >
          <Plus className="w-4 h-4 mr-2 animate-bounce-subtle" />
          New Prompt
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A44]/20 to-[#4B0082]/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-lg" />
        </Button>
      </div>
    </div>

    {/* Search and Filter Card with Refined Glassmorphism */}
    <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-[#1A2A44]/5 dark:from-black/10 dark:to-[#1A2A44]/10 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.15)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A2A44]/5 to-[#4B0082]/5 animate-shimmer opacity-30" />
      <CardContent className="p-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2E8B57] animate-pulse-subtle" />
            <Input
              placeholder="Search prompts..."
              className="pl-12 py-3 bg-white/5 dark:bg-black/5 border-[#E6E6FA]/10 text-foreground placeholder:text-[#A9A9A9] font-medium tracking-wide focus:ring-2 focus:ring-[#4B0082]/50 focus:scale-[1.01] focus:shadow-[0_0_15px_rgba(75,0,130,0.3)] transition-all duration-500 rounded-xl"
            />
          </div>
          <Select defaultValue="all-segments">
            <SelectTrigger className="w-48 bg-white/5 dark:bg-black/5 border-[#E6E6FA]/10 text-[#1A2A44] dark:text-[#E6E6FA] font-medium tracking-wide hover:bg-gradient-to-r hover:from-[#1A2A44]/10 hover:to-[#4B0082]/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_10px_rgba(75,0,130,0.3)] rounded-xl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background/95 backdrop-blur-xl border-[#E6E6FA]/10 text-[#1A2A44] dark:text-[#E6E6FA]">
              <SelectItem value="all-segments" className="font-medium">All Segments</SelectItem>
              <SelectItem value="adventure" className="font-medium">Adventure</SelectItem>
              <SelectItem value="family" className="font-medium">Family</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>

    {/* Prompt Performance Table with Fixed Headers and Aesthetic Design */}
    <Card className="relative overflow-hidden bg-gradient-to-br from-white/5 to-[#1C2526]/5 dark:from-black/10 dark:to-[#1C2526]/10 backdrop-blur-2xl border border-[#F8F9FA]/10 shadow-[0_6px_40px_rgba(0,0,0,0.25)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[#5E2BFF]/5 to-[#2A9D8F]/5 animate-holographic-shimmer opacity-20 z-0" />
      <CardHeader className="relative z-10 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-3xl font-semibold tracking-tight !text-[#F8F9FA] animate-slide-in-left">
              Prompt Performance
            </CardTitle>
            <p className="text-[#A9A9A9] mt-2 text-sm font-medium tracking-wide animate-slide-in-right">
              Optimize AI prompts with real-time insights
            </p>
          </div>
          <Badge
            variant="secondary"
            className="bg-gradient-to-r from-[#1C2526]/20 to-[#5E2BFF]/20 border-[#F8F9FA]/20 !text-[#F8F9FA] font-semibold tracking-wide animate-pulse-subtle hover:scale-110 hover:shadow-[0_0_12px_rgba(94,43,255,0.4)] transition-all duration-500 rounded-lg"
          >
            {prompts.length} Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0 relative z-10">
        <div className="rounded-2xl border border-[#F8F9FA]/10 bg-gradient-to-br from-white/5 to-[#1C2526]/5 dark:from-black/10 dark:to-[#1C2526]/10 backdrop-blur-2xl shadow-[0_6px_40px_rgba(0,0,0,0.2)]">
          <div className="overflow-x-auto">
            <table className="w-full text-[#F8F9FA] !visible">
              <thead>
                <tr className="border-b border-[#F8F9FA]/20 bg-[#1C2526]/20 sticky top-0 backdrop-blur-2xl z-60">
                  {[  "Prompt", "Performance", "Engagement", "Segment", "Stage", "Actions"].map((header, index) => (
                    <th
                      key={index}
                      className="px-8 py-5 text-left text-sm font-semibold tracking-wider uppercase !text-[#F8F9FA] !visible"
                      style={{ animationDelay: `${index * 50}ms`, zIndex: 60 }}
                    >
                      <div className="relative">
                        {header}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F8F9FA]/10">
                  {prompts.map((prompt, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="group relative hover:bg-gradient-to-r hover:from-[#1C2526]/15 hover:to-[#5E2BFF]/15 hover:scale-[1.005] hover:shadow-[0_0_20px_rgba(94,43,255,0.3)] cursor-pointer"
                    style={{ zIndex: 10 }}
                  >
                    <td className="px-8 py-6 text-sm relative z-20 !visible">
                      {/* Move the background div inside the first td, absolutely positioned */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#5E2BFF]/5 to-[#2A9D8F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" style={{ pointerEvents: 'none' }} />
                      <div className="max-w-md relative z-10">
                        <p className="font-medium text-sm tracking-wider !text-[#F8F9FA] group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#5E2BFF] group-hover:to-[#2A9D8F] transition-all">
                          {prompt.text}
                        </p>
                        <div className="flex items-center space-x-3 mt-3">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              prompt.performance === "excellent"
                                ? "bg-[#2A9D8F] shadow-[0_0_12px_rgba(42,157,143,0.6)]"
                                : prompt.performance === "good"
                                  ? "bg-[#E9C46A] shadow-[0_0_12px_rgba(233,196,106,0.6)]"
                                  : "bg-[#F94144] shadow-[0_0_12px_rgba(249,65,68,0.6)]"
                            }`}
                          />
                          <span className="text-xs font-semibold capitalize !text-[#F8F9FA] tracking-wider group-hover:text-[#E8E9F3] transition-colors">
                            {prompt.performance}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm relative z-20 !visible">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-4">
                          <div className="w-28 h-3 bg-[#F8F9FA]/10 rounded-full overflow-hidden relative">
                            <div
                              className={`h-full rounded-full ${
                                prompt.brandMention >= 80
                                  ? "bg-gradient-to-r from-[#2A9D8F] to-[#56C6B5] shadow-[0_0_15px_rgba(42,157,143,0.6)]"
                                  : prompt.brandMention >= 50
                                    ? "bg-gradient-to-r from-[#E9C46A] to-[#F4A261] shadow-[0_0_15px_rgba(233,196,106,0.6)]"
                                    : "bg-gradient-to-r from-[#F94144] to-[#F3722C] shadow-[0_0_15px_rgba(249,65,68,0.6)]"
                              }`}
                              style={{ width: `${prompt.brandMention}%` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#5E2BFF]/10" />
                          </div>
                          <span className="font-semibold text-sm bg-clip-text text-transparent bg-gradient-to-r from-[#F8F9FA] to-[#5E2BFF]">
                            {prompt.brandMention}%
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm relative z-20 !visible">
                      <div className="text-center">
                        <div className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F8F9FA] to-[#5E2BFF]">
                          {prompt.views.toLocaleString()}
                        </div>
                        <div className="text-xs !text-[#E8E9F3] mt-1 font-medium tracking-wider group-hover:text-[#F8F9FA] transition-colors">
                          {prompt.conversions} conversions
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm relative z-20 !visible">
                      <Badge
                        variant="outline"
                        className="text-xs bg-gradient-to-r from-[#1C2526]/10 to-[#5E2BFF]/10 border-[#F8F9FA]/20 !text-[#F8F9FA] font-medium tracking-wider hover:scale-110 hover:shadow-[0_0_12px_rgba(94,43,255,0.4)] hover:bg-gradient-to-r hover:from-[#5E2BFF]/20 hover:to-[#2A9D8F]/20 transition-all rounded-lg"
                      >
                        {prompt.segment}
                      </Badge>
                    </td>
                    <td className="px-8 py-6 text-sm relative z-20 !visible">
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-[#1C2526]/20 to-[#5E2BFF]/20 border-[#F8F9FA]/20 !text-[#F8F9FA] font-medium tracking-wider hover:scale-110 hover:shadow-[0_0_12px_rgba(94,43,255,0.4)] hover:bg-gradient-to-r hover:from-[#5E2BFF]/30 hover:to-[#2A9D8F]/30 transition-all rounded-lg"
                      >
                        {prompt.funnelStage}
                      </Badge>
                    </td>
                    <td className="px-8 py-6 text-sm text-center relative z-20 !visible">
                      <div className="flex items-center justify-center space-x-3 transition-all">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-10 w-10 p-0 bg-gradient-to-r from-[#1C2526]/10 to-[#5E2BFF]/10 border-[#F8F9FA]/20 !text-[#F8F9FA] hover:bg-gradient-to-r hover:from-[#5E2BFF]/20 hover:to-[#2A9D8F]/20 hover:scale-110 hover:shadow-[0_0_12px_rgba(94,43,255,0.4)] hover:rotate-3 transition-all duration-500 rounded-full relative overflow-hidden"
                          aria-label="View prompt details"
                        >
                          <Eye className="w-4 h-4 text-[#2A9D8F] animate-pulse-subtle" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#5E2BFF]/10 to-[#2A9D8F]/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-10 w-10 p-0 bg-gradient-to-r from-[#1C2526]/10 to-[#5E2BFF]/10 border-[#F8F9FA]/20 !text-[#F8F9FA] hover:bg-gradient-to-r hover:from-[#5E2BFF]/20 hover:to-[#2A9D8F]/20 hover:scale-110 hover:shadow-[0_0_12px_rgba(94,43,255,0.4)] hover:rotate-3 transition-all duration-500 rounded-full relative overflow-hidden"
                          aria-label="Edit prompt"
                        >
                          <Edit className="w-4 h-4 text-[#2A9D8F] animate-pulse-subtle" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#5E2BFF]/10 to-[#2A9D8F]/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-10 w-10 p-0 bg-gradient-to-r from-[#1C2526]/10 to-[#5E2BFF]/10 border-[#F8F9FA]/20 !text-[#F8F9FA] hover:bg-gradient-to-r hover:from-[#5E2BFF]/20 hover:to-[#2A9D8F]/20 hover:scale-110 hover:shadow-[0_0_12px_rgba(94,43,255,0.4)] hover:rotate-3 transition-all duration-500 rounded-full relative overflow-hidden"
                          aria-label="More options"
                        >
                          <MoreHorizontal className="w-4 h-4 text-[#2A9D8F] animate-pulse-subtle" />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#5E2BFF]/10 to-[#2A9D8F]/10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)
 const renderCitedSourcesPage = () => (
  <div className="space-y-8">
    {/* Stats Overview Header */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {[
        { icon: BarChart3, title: "Total Citations", value: "2,847", change: "+12.5%", color: "from-blue-500 to-cyan-500" },
        { icon: Award, title: "High Authority", value: "89%", change: "+3.2%", color: "from-emerald-500 to-teal-500" },
        { icon: Zap, title: "Growth Rate", value: "18.2%", change: "+5.1%", color: "from-purple-500 to-pink-500" },
        { icon: Target, title: "Active Sources", value: "156", change: "+8", color: "from-orange-500 to-red-500" },
      ].map((stat, index) => (
        <div
          key={stat.title}
          className="relative overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
          <div className="flex items-center justify-between relative z-10">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
              <span className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                {stat.change}
              </span>
            </div>
            <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Citation Distribution */}
      <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A2A44]/10 via-white/5 to-[#4B0082]/10 dark:from-[#1A2A44]/20 dark:via-black/10 dark:to-[#4B0082]/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] animate-fade-in-scale">

<style jsx global>{`
  @keyframes fadeInScale {
    0% { opacity: 0; transform: scale(0.96); }
    100% { opacity: 1; transform: scale(1); }
  }
  .animate-fade-in-scale {
    animation: fadeInScale 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
`}</style>
        <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Citation Distribution
              </CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400">Source categorization trends</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "Editorial Content", percentage: 45, change: "+12%", color: "from-blue-500 to-blue-600" },
              { label: "Independent Reviews", percentage: 32, change: "+8%", color: "from-emerald-500 to-emerald-600" },
              { label: "Brand Owned", percentage: 23, change: "-3%", color: "from-purple-500 to-purple-600" },
            ].map((item, index) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-xl p-4 bg-white/60 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{item.percentage}%</span>
                    <p className={`text-xs font-medium ${item.change.includes('-') ? 'text-red-500' : 'text-emerald-500'} flex items-center justify-end mt-1`}>
                      {item.change.includes('-') ? <ArrowDownRight className="w-3 h-3 mr-1" /> : <ArrowUpRight className="w-3 h-3 mr-1" />}
                      {item.change}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full overflow-hidden">
                    <div
                      className={`bg-gradient-to-r ${item.color} h-2 rounded-full transition-all duration-[2000ms] ease-out shadow-sm`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Domains */}
      <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A2A44]/10 via-white/5 to-[#4B0082]/10 dark:from-[#1A2A44]/20 dark:via-black/10 dark:to-[#4B0082]/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Top Domains
                </CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">Highest citation frequency</p>
              </div>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
              <Eye className="w-4 h-4 mr-1" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topDomains.slice(0, 5).map((domain, index) => (
              <div
                key={domain.domain}
                className="group relative overflow-hidden rounded-xl p-4 bg-white/60 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {domain.domain}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{domain.percentage}%</span>
                    <div className="flex items-center justify-end space-x-1 mt-1">
                      {domain.change > 0 ? (
                        <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 text-red-500" />
                      )}
                      <span className={`text-xs font-medium ${domain.change > 0 ? "text-emerald-500" : "text-red-500"}`}>
                        {domain.change > 0 ? "+" : ""}{domain.change}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2.5 rounded-full transition-all duration-[2000ms] ease-out shadow-sm"
                    style={{ width: `${domain.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Growth Leaders */}
      <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A2A44]/10 via-white/5 to-[#4B0082]/10 dark:from-[#1A2A44]/20 dark:via-black/10 dark:to-[#4B0082]/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <CardHeader className="pb-4 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <CardTitle className="flex items-center space-x-2 text-lg font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Growth Leaders
                <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
              </CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400">Fastest growing sources</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { domain: "kbb.com", percentage: 28, change: 23, authority: 94, rank: 1 },
              { domain: "edmunds.com", percentage: 32, change: 22, authority: 91, rank: 2 },
              { domain: "truecar.com", percentage: 32, change: 16, authority: 88, rank: 3 },
            ].map((item, index) => (
              <div
                key={item.domain}
                className="group relative overflow-hidden rounded-xl p-4 bg-white/60 dark:bg-gray-700/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="relative">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        item.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                        item.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                        'bg-gradient-to-r from-orange-400 to-orange-600'
                      }`}>
                        {item.rank}
                      </div>
                      {item.rank === 1 && <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {item.domain}
                      </div>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">Authority: {item.authority}</span>
                        <div className="w-12 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-[1500ms] ease-out ${
                              item.authority >= 90 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' :
                              item.authority >= 80 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                              'bg-gradient-to-r from-red-400 to-red-600'
                            }`}
                            style={{ width: `${item.authority}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{item.percentage}%</span>
                      <div className="flex items-center space-x-1 bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-600 text-xs font-bold">+{item.change}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Enhanced Citations Table */}
    <Card className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A2A44]/10 via-white/5 to-[#4B0082]/10 dark:from-[#1A2A44]/20 dark:via-black/10 dark:to-[#4B0082]/20 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <CardHeader className="border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Citation Sources
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Comprehensive source analysis with real-time metrics</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg px-3 py-2 border border-gray-200 dark:border-gray-700">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search sources..."
                className="bg-transparent text-sm outline-none text-gray-600 dark:text-gray-300 w-32"
              />
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <tr>
                {["Source", "Citations", "Authority", "Traffic", "Last Activity"].map((header) => (
                  <th key={header} className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {citedSources.map((source, index) => (
                <tr
                  key={source.url}
                  className="group hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-purple-50/30 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                      <div>
                        <a
                          href={source.url}
                          className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.domain}
                        </a>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{source.url}</p>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {source.category}
                        </Badge>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="default" className="font-bold">
                        {source.citations}
                      </Badge>
                      <div className={`p-1 rounded-full ${
                        source.trend === "up" ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-red-100 dark:bg-red-900/30"
                      }`}>
                        {source.trend === "up" ? (
                          <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 text-red-600" />
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <span className="font-semibold text-gray-900 dark:text-white">{source.authority}</span>
                      <div className="w-16 h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-[1500ms] ease-out ${
                            source.authority >= 90 ? "bg-gradient-to-r from-emerald-400 to-emerald-600" :
                            source.authority >= 70 ? "bg-gradient-to-r from-yellow-400 to-yellow-600" :
                            "bg-gradient-to-r from-red-400 to-red-600"
                          }`}
                          style={{ width: `${source.authority}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-gray-400" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {source.traffic.toLocaleString()}
                        </span>
                      </div>
                      <Badge 
                        variant={source.engagement === 'High' ? 'success' : 'secondary'} 
                        className="mt-1 text-xs"
                      >
                        {source.engagement} Engagement
                      </Badge>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-900 dark:text-white">{source.lastCited}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  </div>
);
  const renderBrandsPage = () => (
    <div
      className={`space-y-6 transition-all duration-500 ${
        isLoading ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div className="flex items-center justify-between animate-slide-in-down">
        <div>
          <h1 className="text-2xl font-bold">Brand Portfolio</h1>
          <p className="text-muted-foreground">Manage your brand ecosystem</p>
        </div>
        <div className="flex items-center space-x-2 animate-slide-in-left">
          <div className="flex items-center space-x-1 bg-muted p-1 rounded-lg">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-2000">
              <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
              </div>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-2000">
              <div className="flex flex-col space-y-0.5 w-3 h-3">
                <div className="bg-current h-0.5 rounded" />
                <div className="bg-current h-0.5 rounded" />
                <div className="bg-current h-0.5 rounded" />
              </div>
            </Button>
          </div>
          <Button size="sm" className="hover:scale-105 transition-transform duration-200">
            <Plus className="w-4 h-4 mr-2" />
            Add Brand
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map((brand, index) => (
          <Card
            key={brand.name}
            className="group transition-all duration-500 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            <CardHeader className="pb-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-lg font-semibold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    {brand.logo}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Performance: <span className="animate-count-up">{brand.performance}%</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-2000"
                  >
                    <BarChart3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-2000"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 relative z-10">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Prompts", value: brand.prompts },
                  { label: "Competitors", value: brand.competitors },
                  { label: "Audits", value: brand.audits },
                ].map((metric, metricIndex) => (
                  <div
                    key={metric.label}
                    className="text-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 animate-scale-in cursor-pointer"
                    style={{ animationDelay: `${index * 200 + metricIndex * 100}ms` }}
                  >
                    <div className="text-lg font-semibold animate-count-up">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-slide-in-right">
                  <div>
                    <span className="font-medium">Daily Runs</span>
                    <p className="text-sm text-muted-foreground">Automated optimization</p>
                  </div>
                  <Switch
                    checked={brand.dailyRuns}
                    className="transition-all duration-300 hover:scale-110 data-[state=checked]:animate-pulse-subtle"
                  />
                </div>

                <div className="p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 animate-fade-in-up">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Performance</span>
                    <span className="font-semibold animate-count-up">{brand.performance}%</span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-[1500ms] ease-out animate-progress-fill ${
                        brand.performance >= 90
                          ? "bg-green-500"
                          : brand.performance >= 75
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                      style={{ width: `${brand.performance}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 animate-bounce-in cursor-pointer">
                    <span className="font-semibold block animate-count-up">{brand.mentions.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">Mentions</span>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-105 animate-bounce-in cursor-pointer">
                    <span
                      className={`font-semibold block animate-count-up ${
                        brand.growth > 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {brand.growth > 0 ? "+" : ""}
                      {brand.growth}%
                    </span>
                    <span className="text-xs text-muted-foreground">Growth</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Animation Keyframes */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes drawCircle {
          from {
            stroke-dashoffset: 628;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes progressFill {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width, 100%);
          }
        }
        
        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Animation Classes */
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-slide-in-down {
          animation: slideInDown 0.6s ease-out forwards;
        }
        
        .animate-slide-in-bottom {
          animation: slideInBottom 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out forwards;
        }
        
        .animate-draw-circle {
          animation: drawCircle 2s ease-out forwards;
        }
        
        .animate-count-up {
          animation: countUp 0.5s ease-out forwards;
        }
        
        .animate-progress-fill {
          animation: progressFill 1.5s ease-out forwards;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }
        
        /* Animation Delays */
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        /* Line Clamp */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Smooth transitions for all elements */
        * {
          transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 200ms;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: hsl(var(--muted));
        }
        
        ::-webkit-scrollbar-thumb {
          background: hsl(var(--muted-foreground) / 0.3);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: hsl(var(--muted-foreground) / 0.5);
        }
        
        /* Hover effects */
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 20px hsl(var(--primary) / 0.3);
        }
      `}</style>

      {/* Header */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-in-down">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzMwM1VjbHdnUEdEWVFsdmhVUnp3Y0hreWdxdSJ9?width=200"
              srcSet="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzMwM1VjbHdnUEdEWVFsdmhVUnp3Y0hreWdxdSJ9?width=200 1x, https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzMwM1VjbHdnUEdEWVFsdmhVUnp3Y0hreWdxdSJ9?width=400 2x"
              alt="Brandi"
              style={{ height: 40, width: 'auto', objectFit: 'contain' }}
              className="cl-logoImage"
              crossOrigin="anonymous"
            />
            <div className="text-muted-foreground animate-pulse">|</div>
            <div className="flex items-center space-x-2 animate-slide-in-right">
              <Badge variant="secondary" className="hover:scale-105 transition-transform duration-200">
                Automotive
              </Badge>
              <ChevronRight className="w-4 h-4 text-muted-foreground animate-bounce-subtle" />
              <Badge variant="outline" className="hover:scale-105 transition-transform duration-200">
                Jeep
              </Badge>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-4 animate-slide-in-left">
              {/* <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-9 h-9 p-0 hover:scale-110 transition-all duration-300 hover:rotate-12"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4 animate-bounce-subtle" />
                ) : (
                  <Sun className="w-4 h-4 animate-spin-slow" />
                )}
              </Button> */}
            <Button
              variant="ghost"
              size="sm"
              className="w-9 h-9 p-0 hover:scale-110 transition-all duration-300 relative"
            >
              <Bell className="w-4 h-4 animate-bounce-subtle" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden w-9 h-9 p-0 hover:scale-110 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 animate-spin" /> : <Menu className="w-4 h-4 animate-pulse" />}
            </Button>
            <div className="hidden lg:flex items-center space-x-3 animate-fade-in-up">
              <div className="text-right">
                <span className="text-sm font-medium">Welcome, Mob</span>
                <p className="text-xs text-muted-foreground">Brand Manager</p>
              </div>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg cursor-pointer">
                <span className="text-primary-foreground font-medium text-sm">M</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-background border-r transition-all duration-500 ease-in-out animate-slide-in-left`}
        >
          <div className="p-4 pt-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 animate-fade-in-up">
                  Intelligence
                </h3>
                <nav className="space-y-1">
                  {navigation.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => handlePageChange(item.id)}
                      disabled={isLoading}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                        currentPage === item.id
                          ? "text-white shadow-lg hover:shadow-xl"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted hover:shadow-md"
                      } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        ...(currentPage === item.id ? { backgroundColor: '#EB008B' } : {})
                      }}
                    >
                      <item.icon className="w-4 h-4 mr-3 transition-transform duration-300 hover:scale-110" />
                      <div className="text-left flex-1">
                        <span className="block">{item.name}</span>
                        <span className="text-xs opacity-70">{item.description}</span>
                      </div>
                      {currentPage === item.id && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 animate-fade-in-up animation-delay-300">
                  AEO Tools
                </h3>
                <nav className="space-y-1">
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-right animation-delay-400"
                  >
                    <PieChart className="w-4 h-4 mr-3 transition-transform duration-300 hover:scale-110 animate-spin-slow" />
                    <div className="text-left flex-1">
                      <span className="block">AEO Kickstart</span>
                      <span className="text-xs opacity-70">Optimization engine</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-right animation-delay-500"
                  >
                    <Users className="w-4 h-4 mr-3 transition-transform duration-300 hover:scale-110" />
                    <div className="text-left flex-1">
                      <span className="block">AEO Health</span>
                      <span className="text-xs opacity-70">Performance monitoring</span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs animate-pulse-subtle hover:scale-110 transition-transform duration-200"
                    >
                      Next
                    </Badge>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay for mobile */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden animate-fade-in-up"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          <div className="container mx-auto p-4 lg:p-6 max-w-7xl">
            {/* Page Header */}
            <div className="mb-6 animate-fade-in-up">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold capitalize">
                    {currentPage === "mentioned-brands"
                      ? "Brand Mentions"
                      : currentPage === "prompt-library"
                        ? "Prompt Library"
                        : currentPage === "cited-sources"
                          ? "Cited Sources"
                          : currentPage === "brands"
                            ? "Brand Portfolio"
                            : "Performance Dashboard"}
                  </h1>
                  <p className="text-muted-foreground mt-1">
                    {currentPage === "performance" && "Real-time insights into brand performance"}
                    {currentPage === "mentioned-brands" && "Deep analysis of brand mentions"}
                    {currentPage === "prompt-library" && "Intelligent prompt management"}
                    {currentPage === "cited-sources" && "Comprehensive citation analysis"}
                    {currentPage === "brands" && "Centralized brand management"}
                  </p>
                </div>
                <div className="flex items-center space-x-2 animate-slide-in-left">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 transition-all duration-300 hover:shadow-md bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2 animate-bounce-subtle" />
                    Export
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.reload()}
                    className="hover:scale-105 transition-all duration-300 hover:shadow-md"
                  >
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin-slow" />
                    Refresh
                  </Button>
                </div>
              </div>
            </div>

            {/* Filters */}
            {(currentPage === "performance" ||
              currentPage === "mentioned-brands" ||
              currentPage === "cited-sources") && (
              <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-muted/30 rounded-lg animate-slide-in-bottom hover:bg-muted/40 transition-all duration-300">
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-muted-foreground animate-pulse" />
                  <span className="font-medium">Filters</span>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32 hover:scale-105 transition-transform duration-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Stages</SelectItem>
                    <SelectItem value="top">Top Funnel</SelectItem>
                    <SelectItem value="middle">Middle Funnel</SelectItem>
                    <SelectItem value="bottom">Bottom Funnel</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-32 hover:scale-105 transition-transform duration-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Segments</SelectItem>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-36 hover:scale-105 transition-transform duration-200">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7days">Last 7 Days</SelectItem>
                    <SelectItem value="30days">Last 30 Days</SelectItem>
                    <SelectItem value="90days">Last 90 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Loading Overlay */}
            {isLoading && (
              <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in-up">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-sm font-medium animate-pulse">Loading...</p>
                </div>
              </div>
            )}

            {/* Page Content */}
            <div className="overflow-hidden">
              {currentPage === "performance" && renderPerformancePage()}
              {currentPage === "mentioned-brands" && renderMentionedBrandsPage()}
              {currentPage === "prompt-library" && renderPromptLibraryPage()}
              {currentPage === "cited-sources" && renderCitedSourcesPage()}
              {currentPage === "brands" && renderBrandsPage()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
