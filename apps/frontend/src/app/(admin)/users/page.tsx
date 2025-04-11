'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  UserPlus, Search, Filter, ArrowUpDown, MoreHorizontal,
  UserCog, Trash2, Eye, Activity, Mail, Calendar, Users as UsersIcon,
  CheckCircle2, XCircle, AlertTriangle, BarChart3,
  Building
} from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";

// Visualizations
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Define user type for better type safety
interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "editor" | "viewer";
  status: "active" | "inactive" | "pending" | "suspended";
  joinedAt: string;
  lastActive: string;
  avatar?: string;
  usage: {
    apiCalls: number;
    storage: number;
    agents: number;
  };
  location?: string;
  department?: string;
  projects?: number;
}

// Enhanced mock data with more details
const mockUsers: User[] = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    role: "user",
    status: "active",
    joinedAt: "2025-03-01",
    lastActive: "2025-04-07T15:32:41Z",
    avatar: "https://avatars.githubusercontent.com/u/1234567",
    usage: {
      apiCalls: 1248,
      storage: 512,
      agents: 3
    },
    location: "New York, US",
    department: "Engineering",
    projects: 5,
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin",
    status: "active",
    joinedAt: "2025-02-15",
    lastActive: "2025-04-08T09:15:22Z",
    avatar: "https://avatars.githubusercontent.com/u/7654321",
    usage: {
      apiCalls: 3782,
      storage: 1280,
      agents: 12
    },
    location: "London, UK",
    department: "Management",
    projects: 8,
  },
  {
    id: "u3",
    name: "Robert Chen",
    email: "robert@example.com",
    role: "editor",
    status: "active",
    joinedAt: "2025-01-18",
    lastActive: "2025-04-08T11:45:10Z",
    usage: {
      apiCalls: 2104,
      storage: 854,
      agents: 7
    },
    location: "Singapore",
    department: "Product",
    projects: 4,
  },
  {
    id: "u4",
    name: "Maria Garcia",
    email: "maria@example.com",
    role: "user",
    status: "inactive",
    joinedAt: "2024-11-05",
    lastActive: "2025-03-15T08:22:15Z",
    usage: {
      apiCalls: 456,
      storage: 128,
      agents: 1
    },
    location: "Barcelona, Spain",
    department: "Marketing",
    projects: 2,
  },
  {
    id: "u5",
    name: "Ahmed Khan",
    email: "ahmed@example.com",
    role: "viewer",
    status: "pending",
    joinedAt: "2025-04-01",
    lastActive: "2025-04-02T16:40:52Z",
    usage: {
      apiCalls: 54,
      storage: 22,
      agents: 0
    },
    location: "Dubai, UAE",
    department: "Sales",
    projects: 0,
  },
  {
    id: "u6",
    name: "Olivia Wilson",
    email: "olivia@example.com",
    role: "editor",
    status: "suspended",
    joinedAt: "2024-08-12",
    lastActive: "2025-03-28T14:12:33Z",
    usage: {
      apiCalls: 1875,
      storage: 920,
      agents: 5
    },
    location: "Toronto, Canada",
    department: "Design",
    projects: 6,
  },
];

// Generate activity data for timeline visualization
const generateActivityData = (userId: string) => {
  const activities = [
    { type: "login", label: "Logged in" },
    { type: "create_agent", label: "Created a new agent" },
    { type: "update_settings", label: "Updated settings" },
    { type: "api_call", label: "Made API calls" },
    { type: "share_project", label: "Shared a project" },
  ];

  return Array.from({ length: 5 }, (_, i) => {
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    const daysAgo = i * Math.floor(Math.random() * 3);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    return {
      id: `act-${userId}-${i}`,
      type: randomActivity.type,
      label: randomActivity.label,
      timestamp: date.toISOString(),
      details: `${randomActivity.label} at ${date.toLocaleTimeString()}`,
    };
  }).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

// Usage metrics for charts
const usageMetrics = {
  weekly: [
    { name: 'Mon', apiCalls: 2400, users: 10 },
    { name: 'Tue', apiCalls: 3600, users: 12 },
    { name: 'Wed', apiCalls: 2800, users: 14 },
    { name: 'Thu', apiCalls: 3900, users: 15 },
    { name: 'Fri', apiCalls: 4200, users: 15 },
    { name: 'Sat', apiCalls: 1800, users: 8 },
    { name: 'Sun', apiCalls: 1500, users: 6 },
  ],
  roleDistribution: [
    { name: 'Admin', value: 15 },
    { name: 'Editor', value: 35 },
    { name: 'User', value: 40 },
    { name: 'Viewer', value: 10 },
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A259FF'];

export default function UsersPage() {
  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [sortField, setSortField] = useState<keyof User>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [view, setView] = useState<"table" | "grid">("table");

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Apply filters and sorting
  const filteredUsers = mockUsers
    .filter(user =>
      (searchQuery === "" ||
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedRole || user.role === selectedRole) &&
      (!selectedStatus || user.status === selectedStatus)
    )
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });

  // Handle sorting
  const handleSort = (field: keyof User) => {
    setSortDirection(sortField === field && sortDirection === "asc" ? "desc" : "asc");
    setSortField(field);
  };

  // Function to get status badge styling
  const getStatusBadge = (status: User['status']) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-600 hover:bg-green-700" variant="default">{status}</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-500 hover:bg-gray-600" variant="outline">{status}</Badge>;
      case 'pending':
        return <Badge className="bg-amber-500 hover:bg-amber-600" variant="default">{status}</Badge>;
      case 'suspended':
        return <Badge className="bg-red-600 hover:bg-red-700" variant="destructive">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  // Function to get avatar initials
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Role color mapping
  const roleColors = {
    admin: "bg-primary",
    editor: "bg-blue-500",
    user: "bg-green-500",
    viewer: "bg-amber-500",
  };

  return (
    <div className="space-y-6 pb-8">
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage and monitor user accounts and permissions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-1">
                <UserPlus className="h-4 w-4" />
                <span>Add User</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle>Create New User</DialogTitle>
                <DialogDescription>
                  Add a new user to the platform. All fields marked with * are required.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name *</Label>
                    <Input id="firstName" placeholder="Enter first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name *</Label>
                    <Input id="lastName" placeholder="Enter last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" placeholder="email@example.com" type="email" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input id="department" placeholder="Department" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="initialPassword">Set Initial Password *</Label>
                  <Input id="initialPassword" type="password" />
                  <p className="text-xs text-muted-foreground">
                    User will be prompted to change password on first login.
                  </p>
                </div>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Create User</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter users</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Filter Users</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">By Role</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setSelectedRole(null)} className={!selectedRole ? "bg-accent" : ""}>
                  All Roles
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("admin")} className={selectedRole === "admin" ? "bg-accent" : ""}>
                  Admin
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("editor")} className={selectedRole === "editor" ? "bg-accent" : ""}>
                  Editor
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("user")} className={selectedRole === "user" ? "bg-accent" : ""}>
                  User
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedRole("viewer")} className={selectedRole === "viewer" ? "bg-accent" : ""}>
                  Viewer
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">By Status</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => setSelectedStatus(null)} className={!selectedStatus ? "bg-accent" : ""}>
                  All Statuses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("active")} className={selectedStatus === "active" ? "bg-accent" : ""}>
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("inactive")} className={selectedStatus === "inactive" ? "bg-accent" : ""}>
                  Inactive
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("pending")} className={selectedStatus === "pending" ? "bg-accent" : ""}>
                  Pending
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedStatus("suspended")} className={selectedStatus === "suspended" ? "bg-accent" : ""}>
                  Suspended
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <ArrowUpDown className="h-4 w-4" />
                <span className="sr-only">Sort users</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuLabel>Sort Users</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => handleSort("name")}
                className="flex items-center justify-between"
              >
                <span>Name</span>
                {sortField === "name" && (
                  <ArrowUpDown className={`ml-2 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSort("joinedAt")}
                className="flex items-center justify-between"
              >
                <span>Join Date</span>
                {sortField === "joinedAt" && (
                  <ArrowUpDown className={`ml-2 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                )}
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleSort("status")}
                className="flex items-center justify-between"
              >
                <span>Status</span>
                {sortField === "status" && (
                  <ArrowUpDown className={`ml-2 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                )}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <div className="flex rounded-lg border">
            <Button
              variant={view === "table" ? "default" : "ghost"}
              size="sm"
              className="h-9 rounded-r-none border-r"
              onClick={() => setView("table")}
            >
              <UsersIcon className="h-4 w-4" />
              <span className="sr-only">Table view</span>
            </Button>
            <Button
              variant={view === "grid" ? "default" : "ghost"}
              size="sm"
              className="h-9 rounded-l-none"
              onClick={() => setView("grid")}
            >
              <BarChart3 className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Analytics Summary Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockUsers.length}</div>
              <p className="text-xs text-muted-foreground">
                +2 since last month
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockUsers.filter(user => user.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">
                {Math.round(mockUsers.filter(user => user.status === "active").length / mockUsers.length * 100)}% of total users
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Pending Users</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockUsers.filter(user => user.status === "pending").length}
              </div>
              <p className="text-xs text-muted-foreground">
                Requires approval
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
              <UserCog className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {mockUsers.filter(user => user.role === "admin").length}
              </div>
              <p className="text-xs text-muted-foreground">
                With full privileges
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Data Visualizations */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>User Activity (Last 7 Days)</CardTitle>
              <CardDescription>API calls and active users over time</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={usageMetrics.weekly}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
                    <XAxis dataKey="name" stroke="rgba(100, 116, 139, 0.8)" fontSize={12} />
                    <YAxis stroke="rgba(100, 116, 139, 0.8)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        border: "none",
                        borderRadius: "8px",
                        color: "#fff"
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="apiCalls"
                      name="API Calls"
                      stroke="#8884d8"
                      strokeWidth={2}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      name="Active Users"
                      stroke="#82ca9d"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>User Role Distribution</CardTitle>
              <CardDescription>Breakdown of users by role</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={usageMetrics.roleDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {usageMetrics.roleDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value, name) => [`${value} users`, name]}
                      contentStyle={{
                        backgroundColor: "rgba(15, 23, 42, 0.8)",
                        border: "none",
                        borderRadius: "8px",
                        color: "#fff"
                      }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Search and filters */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search users by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {(selectedRole || selectedStatus) && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Filters:</span>
            {selectedRole && (
              <Badge variant="secondary" className="gap-1 px-1.5">
                Role: {selectedRole}
                <button
                  onClick={() => setSelectedRole(null)}
                  className="ml-1 rounded-full hover:bg-muted p-0.5"
                >
                  <XCircle className="h-3 w-3" />
                  <span className="sr-only">Remove role filter</span>
                </button>
              </Badge>
            )}
            {selectedStatus && (
              <Badge variant="secondary" className="gap-1 px-1.5">
                Status: {selectedStatus}
                <button
                  onClick={() => setSelectedStatus(null)}
                  className="ml-1 rounded-full hover:bg-muted p-0.5"
                >
                  <XCircle className="h-3 w-3" />
                  <span className="sr-only">Remove status filter</span>
                </button>
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-xs"
              onClick={() => {
                setSelectedRole(null);
                setSelectedStatus(null);
              }}
            >
              Clear all
            </Button>
          </div>
        )}
      </motion.div>

      {/* User count indicator */}
      <div className="text-sm text-muted-foreground">
        Showing {filteredUsers.length} users {filteredUsers.length !== mockUsers.length && `(filtered from ${mockUsers.length})`}
      </div>

      {/* User View - Table or Grid */}
      <Tabs value={view} onValueChange={(value) => setView(value as "table" | "grid")}>
        <TabsContent value="table" className="space-y-4">
          <div className="rounded-md border shadow-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">
                    <button
                      onClick={() => handleSort("name")}
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      User
                      {sortField === "name" && (
                        <ArrowUpDown className={`ml-2 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                      )}
                    </button>
                  </TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>
                    <button
                      onClick={() => handleSort("joinedAt")}
                      className="flex items-center hover:text-primary transition-colors"
                    >
                      Joined
                      {sortField === "joinedAt" && (
                        <ArrowUpDown className={`ml-2 h-4 w-4 ${sortDirection === "desc" ? "rotate-180" : ""}`} />
                      )}
                    </button>
                  </TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="w-[70px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, index) => (
                    <TableRow key={`loading-${index}`}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Skeleton className="h-10 w-10 rounded-full" />
                          <div className="space-y-1">
                            <Skeleton className="h-4 w-[150px]" />
                            <Skeleton className="h-3 w-[100px]" />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell><Skeleton className="h-5 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-5 w-16" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                      <TableCell><Skeleton className="h-8 w-8 rounded-md" /></TableCell>
                    </TableRow>
                  ))
                ) : filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      No users found.
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id} className="group">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {getInitials(user.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${roleColors[user.role as keyof typeof roleColors]}`}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(user.status)}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {new Date(user.joinedAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">
                        {new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
                          Math.round((new Date(user.lastActive).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)),
                          'day'
                        )}
                      </TableCell>
                      <TableCell>
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={() => setSelectedUser(user)}
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </SheetTrigger>
                          <SheetContent className="sm:max-w-[400px]">
                            {selectedUser && (
                              <>
                                <SheetHeader className="pb-4">
                                  <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16 border-2">
                                      <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                                      <AvatarFallback className="text-xl">
                                        {getInitials(selectedUser.name)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <SheetTitle>{selectedUser.name}</SheetTitle>
                                      <SheetDescription className="flex items-center gap-2 mt-1">
                                        <Badge className={`${roleColors[selectedUser.role as keyof typeof roleColors]}`}>
                                          {selectedUser.role}
                                        </Badge>
                                        {getStatusBadge(selectedUser.status)}
                                      </SheetDescription>
                                    </div>
                                  </div>
                                </SheetHeader>

                                <div className="space-y-6">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                      <div className="text-sm text-muted-foreground">Email</div>
                                      <div className="font-medium">{selectedUser.email}</div>
                                    </div>
                                    <div className="space-y-1">
                                      <div className="text-sm text-muted-foreground">Department</div>
                                      <div className="font-medium">{selectedUser.department || "Not assigned"}</div>
                                    </div>
                                    <div className="space-y-1">
                                      <div className="text-sm text-muted-foreground">Location</div>
                                      <div className="font-medium">{selectedUser.location || "Not specified"}</div>
                                    </div>
                                    <div className="space-y-1">
                                      <div className="text-sm text-muted-foreground">Projects</div>
                                      <div className="font-medium">{selectedUser.projects}</div>
                                    </div>
                                  </div>

                                  <Separator />

                                  <div className="space-y-3">
                                    <h3 className="text-sm font-medium">Usage & Activity</h3>
                                    <div className="space-y-1.5">
                                      <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">API Calls</span>
                                        <span>{selectedUser.usage.apiCalls}</span>
                                      </div>
                                      <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Storage Used</span>
                                        <span>{selectedUser.usage.storage} MB</span>
                                      </div>
                                      <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Agents Created</span>
                                        <span>{selectedUser.usage.agents}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <Separator />

                                  <div className="space-y-3">
                                    <h3 className="text-sm font-medium">Recent Activity</h3>
                                    <ScrollArea className="h-[200px]">
                                      <div className="space-y-4 pr-4">
                                        {generateActivityData(selectedUser.id).map((activity, i) => (
                                          <div key={activity.id} className="relative flex gap-3">
                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border bg-background">
                                              <Activity className="h-3 w-3" />
                                            </div>
                                            <div className="flex flex-col gap-0.5">
                                              <p className="text-sm">{activity.label}</p>
                                              <time className="text-xs text-muted-foreground">
                                                {new Date(activity.timestamp).toLocaleString()}
                                              </time>
                                            </div>
                                            {i < generateActivityData(selectedUser.id).length - 1 && (
                                              <div className="absolute left-3 top-6 h-full w-px bg-border" />
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </ScrollArea>
                                  </div>

                                  <SheetFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between pt-2">
                                    <Button
                                      variant="outline"
                                      className="sm:w-auto w-full flex justify-center gap-1"
                                      onClick={() => {
                                        // In a real app, navigate to user profile
                                        console.log("View full profile", selectedUser.id);
                                      }}
                                    >
                                      <Eye className="h-4 w-4" />
                                      <span>Full Profile</span>
                                    </Button>

                                    <div className="flex gap-2">
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <Button variant="outline" className="flex-1 sm:flex-auto">Edit</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                          <DialogHeader>
                                            <DialogTitle>Edit User</DialogTitle>
                                          </DialogHeader>
                                          {/* Edit form would go here */}
                                          <div className="py-4">User edit form would be here</div>
                                          <DialogFooter>
                                            <Button type="button" variant="outline">Cancel</Button>
                                            <Button type="submit">Save Changes</Button>
                                          </DialogFooter>
                                        </DialogContent>
                                      </Dialog>

                                      <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                          <Button variant="outline" className="flex-1 sm:flex-auto">Actions</Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                          <DropdownMenuItem>Reset Password</DropdownMenuItem>
                                          <DropdownMenuItem>Impersonate User</DropdownMenuItem>
                                          <DropdownMenuSeparator />
                                          <DropdownMenuItem
                                            className="text-red-600 focus:text-red-600"
                                            onSelect={(e) => {
                                              e.preventDefault();
                                              // Show delete confirmation dialog
                                            }}
                                          >
                                            Delete User
                                          </DropdownMenuItem>
                                        </DropdownMenuContent>
                                      </DropdownMenu>
                                    </div>
                                  </SheetFooter>
                                </div>
                              </>
                            )}
                          </SheetContent>
                        </Sheet>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="grid" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {isLoading ? (
              Array.from({ length: 8 }).map((_, index) => (
                <Card key={`card-loading-${index}`} className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="h-12 w-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[150px]" />
                        <Skeleton className="h-4 w-[100px]" />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-full" />
                      <div className="flex justify-between mt-4">
                        <Skeleton className="h-8 w-20" />
                        <Skeleton className="h-8 w-8 rounded-md" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : filteredUsers.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center h-32 text-center">
                <p className="text-muted-foreground">No users found.</p>
                <Button
                  variant="link"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRole(null);
                    setSelectedStatus(null);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              filteredUsers.map((user) => (
                <motion.div
                  key={user.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden transition-colors hover:border-primary/50 cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10 border">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {getInitials(user.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{user.name}</CardTitle>
                            <CardDescription className="text-xs">{user.email}</CardDescription>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete user</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <div className="text-muted-foreground">Role</div>
                        <div className="text-right">
                          <Badge className={`${roleColors[user.role as keyof typeof roleColors]}`}>
                            {user.role}
                          </Badge>
                        </div>
                        <div className="text-muted-foreground">Status</div>
                        <div className="text-right">{getStatusBadge(user.status)}</div>
                        <div className="text-muted-foreground">Joined</div>
                        <div className="font-mono text-right text-xs">
                          {new Date(user.joinedAt).toLocaleDateString()}
                        </div>
                      </div>

                      {user.department && (
                        <div className="mt-3 flex items-center text-sm">
                          <Building className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                          <span>{user.department}</span>
                        </div>
                      )}

                      {user.location && (
                        <div className="mt-1 flex items-center text-sm">
                          <Mail className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                          <span>{user.location}</span>
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="border-t p-3 flex justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        <span>Last active {new Date(user.lastActive).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0 rounded-full">
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View profile</span>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
