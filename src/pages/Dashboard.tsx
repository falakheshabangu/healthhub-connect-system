
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Calendar,
  Clock,
  UserRound,
  FileText,
  PlusCircle,
  Activity,
  PlusSquare,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data for charts
const appointmentData = [
  { name: "Mon", appointments: 4 },
  { name: "Tue", appointments: 6 },
  { name: "Wed", appointments: 8 },
  { name: "Thu", appointments: 12 },
  { name: "Fri", appointments: 9 },
  { name: "Sat", appointments: 5 },
  { name: "Sun", appointments: 2 },
];

const patientData = [
  { name: "Jan", patients: 65 },
  { name: "Feb", patients: 78 },
  { name: "Mar", patients: 90 },
  { name: "Apr", patients: 81 },
  { name: "May", patients: 86 },
  { name: "Jun", patients: 94 },
  { name: "Jul", patients: 105 },
  { name: "Aug", patients: 110 },
  { name: "Sep", patients: 124 },
  { name: "Oct", patients: 116 },
  { name: "Nov", patients: 128 },
  { name: "Dec", patients: 140 },
];

const patientDemographics = [
  { name: "Under 18", value: 30 },
  { name: "18-35", value: 40 },
  { name: "36-50", value: 25 },
  { name: "51-65", value: 20 },
  { name: "Over 65", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

// Sample upcoming appointments
const upcomingAppointments = [
  {
    id: 1,
    patientName: "John Smith",
    time: "10:00 AM",
    date: "Today",
    reason: "Annual Checkup",
  },
  {
    id: 2,
    patientName: "Sarah Johnson",
    time: "11:30 AM",
    date: "Today",
    reason: "Follow-up",
  },
  {
    id: 3,
    patientName: "Michael Brown",
    time: "2:15 PM",
    date: "Today",
    reason: "Consultation",
  },
  {
    id: 4,
    patientName: "Emily Davis",
    time: "9:00 AM",
    date: "Tomorrow",
    reason: "Test Results",
  },
];

// Sample recent patients
const recentPatients = [
  {
    id: 1,
    name: "Robert Wilson",
    status: "Completed",
    date: "Today, 9:15 AM",
  },
  {
    id: 2,
    name: "Jennifer Lee",
    status: "Scheduled",
    date: "Tomorrow, 10:30 AM",
  },
  {
    id: 3,
    name: "David Martinez",
    status: "Cancelled",
    date: "Yesterday, 3:00 PM",
  },
  {
    id: 4,
    name: "Lisa Anderson",
    status: "Completed",
    date: "Today, 11:45 AM",
  },
];

const Dashboard = () => {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex space-x-2">
            <Button asChild>
              <Link to="/appointments/new">
                <CalendarCheck className="mr-2 h-4 w-4" />
                New Appointment
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/patients/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                New Patient
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Patients
              </CardTitle>
              <UserRound className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <p className="text-xs text-muted-foreground">
                +42 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Appointments Today
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                3 remaining for today
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending Reports
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                -2 from yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Prescriptions
              </CardTitle>
              <PlusSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <p className="text-xs text-muted-foreground">
                +12 from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Patient Registration Trend</CardTitle>
              <CardDescription>
                Number of patients registered monthly
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={patientData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="patients"
                    stroke="#0ea5e9"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patient Demographics</CardTitle>
              <CardDescription>
                Age distribution of patients
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={patientDemographics}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {patientDemographics.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Appointments</CardTitle>
              <CardDescription>
                Appointments scheduled this week
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={appointmentData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="appointments" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="flex items-center space-x-4 rounded-md border p-3"
                  >
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{appointment.patientName}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        <span>{appointment.time}</span>
                        <span className="mx-1">•</span>
                        <span>{appointment.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {appointment.reason}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="ml-auto flex-shrink-0"
                    >
                      <Link to={`/appointments/${appointment.id}`}>View</Link>
                    </Button>
                  </div>
                ))}
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/appointments">View All Appointments</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="flex items-center space-x-4 rounded-md border p-3"
                  >
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">{patient.name}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Activity className="mr-1 h-3 w-3" />
                        <span
                          className={
                            patient.status === "Completed"
                              ? "text-green-500"
                              : patient.status === "Cancelled"
                              ? "text-red-500"
                              : "text-yellow-500"
                          }
                        >
                          {patient.status}
                        </span>
                        <span className="mx-1">•</span>
                        <span>{patient.date}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="ml-auto flex-shrink-0"
                    >
                      <Link to={`/patients/${patient.id}`}>View</Link>
                    </Button>
                  </div>
                ))}
                <div className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/patients">View All Patients</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button asChild className="h-24 flex flex-col space-y-2">
                  <Link to="/patients/new">
                    <UserRound className="h-6 w-6" />
                    <span>New Patient</span>
                  </Link>
                </Button>
                <Button asChild className="h-24 flex flex-col space-y-2">
                  <Link to="/appointments/new">
                    <Calendar className="h-6 w-6" />
                    <span>Schedule Appointment</span>
                  </Link>
                </Button>
                <Button asChild className="h-24 flex flex-col space-y-2">
                  <Link to="/prescriptions/new">
                    <PlusSquare className="h-6 w-6" />
                    <span>New Prescription</span>
                  </Link>
                </Button>
                <Button asChild className="h-24 flex flex-col space-y-2">
                  <Link to="/medical-records/new">
                    <FileText className="h-6 w-6" />
                    <span>New Medical Record</span>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
