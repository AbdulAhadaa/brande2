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
    { name: "Bronco", score: 64, change: -9.7, rank: 1, logo: "B" },
    { name: "Toyota", score: 64, change: -28, rank: 2, logo: "T" },
    { name: "Land Rover", score: 24, change: -13, rank: 4, logo: "L" },
  ]

  const otherBrands = [
    { name: "Subaru", score: 24, change: -7.6, logo: "S" },
    { name: "Lexus", score: 20, change: -1.1, logo: "L" },
    { name: "Hyundai", score: 20, change: 9.5, logo: "H" },
    { name: "Honda", score: 20, change: -1.7, logo: "H" },
    { name: "GMC", score: 16, change: -2.1, logo: "G" },
  ]

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
    const isHighlight = label === "Brand Awareness" || label === "Share of Voice"

    return (
      <div className={`relative animate-fade-in-up ${className}`} style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <defs>
            <linearGradient id={`gradient-${value}-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              {isHighlight ? (
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
            className="animate-draw-circle transition-all duration-[2000ms] ease-out"
            style={{
              strokeDashoffset: circumference,
              animation: "drawCircle 2s ease-out forwards 0.5s",
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center animate-scale-in animation-delay-1000">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground animate-count-up">{value}%</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{label}</div>
          </div>
        </div>
      </div>
    )
  }

  const MetricCard = ({ title, value, change, trend, rank, icon: Icon, description }) => (
    <Card className="group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-[1.02] animate-fade-in-up hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <Icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                {title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Info className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-125 cursor-help" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6 relative z-10">
        <div className="flex justify-center">
          <CircularProgress value={value} className="animate-fade-in-up animation-delay-300" />
        </div>
        <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 group-hover:bg-muted/70 transition-all duration-300 animate-slide-in-bottom animation-delay-500">
          <div className="flex items-center space-x-3">
            <div
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                trend === "up"
                  ? "bg-green-100 dark:bg-green-900/20 group-hover:bg-green-200 dark:group-hover:bg-green-900/30"
                  : "bg-red-100 dark:bg-red-900/20 group-hover:bg-red-200 dark:group-hover:bg-red-900/30"
              }`}
            >
              {trend === "up" ? (
                <ArrowUpRight className="w-4 h-4 text-green-600 dark:text-green-400 animate-bounce-subtle" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-600 dark:text-red-400 animate-bounce-subtle" />
              )}
            </div>
            <div>
              <span
                className={`font-semibold transition-all duration-300 ${
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
            <div className="text-right animate-slide-in-right animation-delay-700">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-muted-foreground">Rank</span>
                <Badge
                  variant="secondary"
                  className="font-semibold transition-all duration-300 hover:scale-110 hover:shadow-md"
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
    <Card className="transition-all duration-500 hover:shadow-xl animate-fade-in-up hover:scale-[1.01]">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <Badge
            variant="outline"
            className="font-medium transition-all duration-300 hover:scale-110 hover:shadow-md animate-pulse-subtle"
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
              className="group p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-md animate-slide-in-left cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                      {competitor.logo}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white rounded-full text-xs flex items-center justify-center font-bold animate-bounce-in">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {competitor.name}
                    </span>
                    <p className="text-sm text-muted-foreground">Automotive Brand</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-medium text-muted-foreground">Score</span>
                      <span className="font-semibold animate-count-up">{competitor.score}%</span>
                    </div>
                    <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-[1500ms] ease-out animate-progress-fill"
                        style={{ width: `${competitor.score}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`p-1.5 rounded-lg transition-all duration-300 hover:scale-110 ${
                        competitor.change > 0 ? "bg-green-100 dark:bg-green-900/20" : "bg-red-100 dark:bg-red-900/20"
                      }`}
                    >
                      {competitor.change > 0 ? (
                        <ArrowUpRight className="w-3 h-3 text-green-600 dark:text-green-400 animate-bounce-subtle" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 text-red-600 dark:text-red-400 animate-bounce-subtle" />
                      )}
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-sm font-semibold transition-colors duration-300 ${
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
  )

  const ElegantTable = ({ headers, data, actions = true }) => (
    <div className="overflow-hidden rounded-xl border bg-card animate-fade-in-up">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-4 py-3 text-left text-sm font-semibold text-foreground animate-slide-in-down"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {header}
                </th>
              ))}
              {actions && (
                <th className="px-4 py-3 text-center text-sm font-semibold text-foreground animate-slide-in-down">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="group hover:bg-muted/30 transition-all duration-300 animate-fade-in-up hover:scale-[1.01] cursor-pointer"
                style={{ animationDelay: `${rowIndex * 100}ms` }}
              >
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-sm">
                    {cell}
                  </td>
                ))}
                {actions && (
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-slide-in-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
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
    <div
      className={`space-y-8 transition-all duration-500 ${
        isLoading ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <CompetitorCard competitors={competitors} title="Market Leaders" subtitle="Top performing competitors" />
        <CompetitorCard competitors={otherBrands} title="Emerging Brands" subtitle="Rising competitors to monitor" />
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <HeatmapCard title="Segment Analysis" subtitle="Brand awareness by segment" data={heatmapData.segments} />
        <HeatmapCard
          title="Funnel Performance"
          subtitle="Conversion by stage"
          data={heatmapData.funnelStages}
          type="complex"
        />
        <HeatmapCard
          title="Platform Distribution"
          subtitle="AI platform metrics"
          data={heatmapData.funnelStages.slice(0, 5)}
          type="complex"
        />
      </div>

      <Card className="animate-fade-in-up animation-delay-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold">Brand Performance Analytics</CardTitle>
              <p className="text-muted-foreground">Comprehensive brand mention analysis</p>
            </div>
            <div className="flex items-center space-x-2 animate-slide-in-right">
              <Button
                variant="outline"
                size="sm"
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Date Range
              </Button>
              <Button size="sm" className="hover:scale-105 transition-transform duration-200">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ElegantTable
            headers={["Brand", "Mentions", "Last Activity", "Funnel Stages", "Segment"]}
            data={[
              {
                brand: (
                  <div className="flex items-center space-x-3 animate-slide-in-right">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <div>
                      <span className="font-medium">Ford</span>
                      <p className="text-xs text-muted-foreground">Automotive</p>
                    </div>
                  </div>
                ),
                mentions: (
                  <div className="text-center animate-scale-in">
                    <span className="font-semibold animate-count-up">16</span>
                    <p className="text-xs text-green-600 animate-bounce-subtle">+12%</p>
                  </div>
                ),
                lastActivity: (
                  <div className="animate-fade-in-up">
                    <span className="font-medium">July 29, 2025</span>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                ),
                funnelStages: (
                  <div className="flex justify-center space-x-1 animate-slide-in-left">
                    <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform duration-200">
                      Bottom
                    </Badge>
                    <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform duration-200">
                      Middle
                    </Badge>
                    <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform duration-200">
                      Top
                    </Badge>
                  </div>
                ),
                segment: (
                  <div className="text-center animate-bounce-in">
                    <Badge variant="outline" className="text-xs hover:scale-110 transition-transform duration-200">
                      Adventure
                    </Badge>
                  </div>
                ),
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  )

  const renderPromptLibraryPage = () => (
    <div
      className={`space-y-6 transition-all duration-500 ${
        isLoading ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div className="flex items-center justify-between animate-slide-in-down">
        <Tabs defaultValue="active" className="w-auto">
          <TabsList>
            <TabsTrigger value="active" className="hover:scale-105 transition-transform duration-200">
              Active Prompts
            </TabsTrigger>
            <TabsTrigger value="archived" className="hover:scale-105 transition-transform duration-200">
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center space-x-2 animate-slide-in-left">
          <Button
            variant="outline"
            size="sm"
            className="hover:scale-105 transition-transform duration-200 bg-transparent"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            AI Generate
          </Button>
          <Button size="sm" className="hover:scale-105 transition-transform duration-200">
            <Plus className="w-4 h-4 mr-2" />
            New Prompt
          </Button>
        </div>
      </div>

      <Card className="animate-fade-in-up animation-delay-200">
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground animate-pulse" />
              <Input
                placeholder="Search prompts..."
                className="pl-10 transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
              />
            </div>
            <Select defaultValue="all-segments">
              <SelectTrigger className="w-40 hover:scale-105 transition-transform duration-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-segments">All Segments</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="family">Family</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="animate-fade-in-up animation-delay-400">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold">Prompt Performance</CardTitle>
              <p className="text-muted-foreground">Monitor and optimize AI prompt effectiveness</p>
            </div>
            <Badge
              variant="secondary"
              className="animate-pulse-subtle hover:scale-110 transition-transform duration-200"
            >
              {prompts.length} Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ElegantTable
            headers={["Content", "Performance", "Engagement", "Segment", "Stage"]}
            data={prompts.map((prompt, index) => ({
              content: (
                <div className="max-w-xs animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <p className="font-medium text-sm line-clamp-2">{prompt.text}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div
                      className={`w-2 h-2 rounded-full animate-pulse ${
                        prompt.performance === "excellent"
                          ? "bg-green-500"
                          : prompt.performance === "good"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                    />
                    <span className="text-xs text-muted-foreground capitalize">{prompt.performance}</span>
                  </div>
                </div>
              ),
              performance: (
                <div className="text-center animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full animate-progress-fill ${
                          prompt.brandMention >= 80
                            ? "bg-green-500"
                            : prompt.brandMention >= 50
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${prompt.brandMention}%` }}
                      />
                    </div>
                    <span className="font-medium text-sm animate-count-up">{prompt.brandMention}%</span>
                  </div>
                </div>
              ),
              engagement: (
                <div className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-sm font-medium animate-count-up">{prompt.views.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground animate-count-up">{prompt.conversions} conversions</div>
                </div>
              ),
              segment: (
                <Badge
                  variant="outline"
                  className="text-xs hover:scale-110 transition-transform duration-200 animate-bounce-in"
                  style={{ animationDelay: `${index * 250}ms` }}
                >
                  {prompt.segment}
                </Badge>
              ),
              stage: (
                <Badge
                  variant="secondary"
                  className="text-xs hover:scale-110 transition-transform duration-200 animate-bounce-in"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {prompt.funnelStage}
                </Badge>
              ),
            }))}
          />
        </CardContent>
      </Card>
    </div>
  )

  const renderCitedSourcesPage = () => (
    <div
      className={`space-y-8 transition-all duration-500 ${
        isLoading ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="animate-fade-in-up">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Citation Distribution</CardTitle>
            <p className="text-sm text-muted-foreground">Source categorization</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Editorial Content", percentage: 45, change: "+12%" },
                { label: "Independent Reviews", percentage: 32, change: "+8%" },
                { label: "Brand Owned", percentage: 23, change: "-3%" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] animate-slide-in-left cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold animate-count-up">{item.percentage}%</span>
                    <p className="text-xs text-green-600 animate-bounce-subtle">{item.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up animation-delay-200">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold">Top Domains</CardTitle>
            <p className="text-sm text-muted-foreground">Highest citation frequency</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topDomains.slice(0, 5).map((domain, index) => (
                <div
                  key={domain.domain}
                  className="space-y-2 animate-slide-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-muted-foreground animate-spin-slow" />
                      <span className="text-sm font-medium">{domain.domain}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold animate-count-up">{domain.percentage}%</span>
                      <div className="flex items-center space-x-1">
                        {domain.change > 0 ? (
                          <ArrowUpRight className="w-3 h-3 text-green-600 animate-bounce-subtle" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 text-red-600 animate-bounce-subtle" />
                        )}
                        <span className={`text-xs ${domain.change > 0 ? "text-green-600" : "text-red-600"}`}>
                          {domain.change > 0 ? "+" : ""}
                          {domain.change}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-[1500ms] ease-out animate-progress-fill"
                      style={{ width: `${domain.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-up animation-delay-400">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-2">
              <CardTitle className="text-lg font-semibold">Growth Leaders</CardTitle>
              <TrendingUp className="w-4 h-4 text-green-600 animate-bounce-subtle" />
            </div>
            <p className="text-sm text-muted-foreground">Fastest growing sources</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { domain: "kbb.com", percentage: 28, change: 23, authority: 94 },
                { domain: "edmunds.com", percentage: 32, change: 22, authority: 91 },
                { domain: "truecar.com", percentage: 32, change: 16, authority: 88 },
              ].map((item, index) => (
                <div
                  key={item.domain}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] animate-slide-in-bottom cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm">{item.domain}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-muted-foreground">Authority: {item.authority}</span>
                      <div className="w-12 h-1 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full animate-progress-fill"
                          style={{ width: `${item.authority}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold animate-count-up">{item.percentage}%</span>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-green-600 animate-bounce-subtle" />
                      <span className="text-green-600 text-sm font-medium animate-count-up">+{item.change}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="animate-fade-in-up animation-delay-600">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <CardTitle className="text-xl font-semibold">Citation Sources</CardTitle>
                <p className="text-muted-foreground">Comprehensive source analysis</p>
              </div>
              <Tabs defaultValue="pages" className="w-auto">
                <TabsList>
                  <TabsTrigger value="pages" className="hover:scale-105 transition-transform duration-200">
                    Pages
                  </TabsTrigger>
                  <TabsTrigger value="domains" className="hover:scale-105 transition-transform duration-200">
                    Domains
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <Button size="sm" className="hover:scale-105 transition-transform duration-200 animate-pulse-subtle">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <ElegantTable
            headers={["Source", "Citations", "Authority", "Traffic", "Last Cited"]}
            data={citedSources.map((source, index) => ({
              source: (
                <div className="max-w-xs animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="flex items-center space-x-2 mb-1">
                    <ExternalLink className="w-4 h-4 text-muted-foreground animate-pulse" />
                    <a
                      href={source.url}
                      className="text-primary hover:underline font-medium text-sm transition-all duration-300 hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.domain}
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{source.url}</p>
                </div>
              ),
              citations: (
                <div className="text-center animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge
                      variant="secondary"
                      className="font-semibold hover:scale-110 transition-transform duration-200"
                    >
                      {source.citations}
                    </Badge>
                    <div
                      className={`p-1 rounded transition-all duration-300 hover:scale-110 ${
                        source.trend === "up"
                          ? "bg-green-100 dark:bg-green-900/20"
                          : source.trend === "down"
                            ? "bg-red-100 dark:bg-red-900/20"
                            : "bg-muted"
                      }`}
                    >
                      {source.trend === "up" ? (
                        <ArrowUpRight className="w-3 h-3 text-green-600 animate-bounce-subtle" />
                      ) : source.trend === "down" ? (
                        <ArrowDownRight className="w-3 h-3 text-red-600 animate-bounce-subtle" />
                      ) : (
                        <div className="w-3 h-3 bg-muted-foreground rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
              ),
              authority: (
                <div className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                  <span className="font-semibold animate-count-up">{source.authority}</span>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden mx-auto mt-1">
                    <div
                      className={`h-full rounded-full animate-progress-fill ${
                        source.authority >= 90
                          ? "bg-green-500"
                          : source.authority >= 70
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }`}
                      style={{ width: `${source.authority}%` }}
                    />
                  </div>
                </div>
              ),
              traffic: (
                <div className="text-center animate-slide-in-left" style={{ animationDelay: `${index * 250}ms` }}>
                  <span className="font-semibold animate-count-up">{source.traffic.toLocaleString()}</span>
                  <div className="flex items-center justify-center space-x-1 mt-1">
                    <Activity className="w-3 h-3 text-muted-foreground animate-pulse" />
                    <span className="text-xs text-muted-foreground">{source.engagement}</span>
                  </div>
                </div>
              ),
              lastCited: (
                <div className="text-center animate-bounce-in" style={{ animationDelay: `${index * 300}ms` }}>
                  <span className="font-medium">{source.lastCited}</span>
                  <p className="text-xs text-muted-foreground">Recent activity</p>
                </div>
              ),
            }))}
          />
        </CardContent>
      </Card>
    </div>
  )

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
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200">
              <div className="grid grid-cols-2 gap-0.5 w-3 h-3">
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
                <div className="bg-current rounded-sm" />
              </div>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200">
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
            className="group transition-all duration-500 hover:shadow-xl hover:scale-[1.02] animate-fade-in-up hover:-translate-y-1"
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
                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-slide-in-left">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
                  >
                    <BarChart3 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:scale-110 transition-transform duration-200"
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
            <Button
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
            </Button>
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
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-[1.02] animate-slide-in-right ${
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
