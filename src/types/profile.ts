export interface Profile {
    id: number;
    name: string;
    role: "student" | "teacher" | "admin";
    avatar?: string;
    enrollmentCoursesId: number[];
}