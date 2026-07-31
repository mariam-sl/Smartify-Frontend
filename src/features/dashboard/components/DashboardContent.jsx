import { useAuthStore } from "@/features/auth/store/auth.store";

import StatsCard from "./StatsCard";
import {Card,CardContent} from "@/shared/components/ui/Card";
import { dashboardData } from "../data/dashboard.data";

export default function DashboardContent() {
  const user = useAuthStore((state) => state.user);

  const data = dashboardData[user?.role] || {};

  return (
    <div className="space-y-6">

      {/* STATS */}
      <div className="grid gap-4 md:grid-cols-3">
        {data.stats?.map((item, index) => (
          <StatsCard
            key={index}
            label={item.label}
            value={item.value}
          />
        ))}
      </div>

      {/* ROLE  SECTION */}
      {user?.role === "Student" && (
        <div>
          <h2 className="mb-3 text-lg font-semibold">
            Recent Courses
          </h2>

         {data.recentCourses?.map((course, index) => (
  <Card key={index}>
    <CardContent className="p-4">
      <p className="font-medium">
        {course.title}
      </p>

      <p className="text-sm text-slate-500">
        Progress: {course.progress}%
      </p>
    </CardContent>
  </Card>
))}
        </div>
      )}

      {user?.role === "Instructor" && (
        <div>
          <h2 className="mb-3 text-lg font-semibold">
            My Courses
          </h2>

          {data.recentCourses?.map((course, index) => (
  <Card key={index}>
    <CardContent className="p-4">
      <p className="font-medium">
        {course.title}
      </p>

      <p className="text-sm text-slate-500">
        Students: {course.students}
      </p>
    </CardContent>
  </Card>
))}
        </div>
      )}

      {user?.role === "Admin" && (
        <div>
          <h2 className="mb-3 text-lg font-semibold">
            Recent Activity
          </h2>

         {data.recentActivity?.map((activity, index) => (
  <Card key={index}>
    <CardContent className="p-4">
      <p>{activity.action}</p>

      <p className="text-xs text-slate-500">
        {activity.time}
      </p>
    </CardContent>
  </Card>
))}
        </div>
      )}

    </div>
  );
}