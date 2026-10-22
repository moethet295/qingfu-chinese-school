export interface Member {
  id: number;
  name: string;
  role: "teacher" | "student";
  courseName: string;
  avatar?: string;
}