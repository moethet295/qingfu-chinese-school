import courses from "../data/course";
import { profile } from "../data/profile";
import ProfilePhoto from "../components/profile/ProfilePhoto";
import EnrollmentCard from "../components/profile/EnrollmentCard";
import type { Profile as ProfileType } from "../types/profile";
import { Save } from "lucide-react";
import { useState } from "react";

function Profile() {

  // 1. Saved Profile Data ကို ပြန်ယူ
  const [savedProfile] = useState<ProfileType>(() => {
    try {
      const saved = localStorage.getItem(
        `profile-${profile.id}`
      );

      if (!saved) return profile;

      const data = JSON.parse(saved);

      return {
        ...profile,

        name:
          typeof data.name === "string"
            ? data.name
            : profile.name,

        avatar:
          typeof data.avatar === "string"
            ? data.avatar
            : profile.avatar,
      };

    } catch {
      return profile;
    }
  });

  // 2. Profile States
  const [name, setName] = useState(savedProfile.name);

  const [avatar, setAvatar] = useState<string | null>(
    savedProfile.avatar ?? null
  );

  // 3. Student တက်ထားတဲ့ Courses တွေ Filter လုပ်
  const enrolledCourses = courses.filter((course) =>
    profile.enrollmentCoursesId.includes(course.id)
  );

  // 4. Update Profile
  const handleUpdate = () => {

    if (name.trim() === "") {
      alert("Name must be filled");
      return;
    }

    try {
      localStorage.setItem(
        `profile-${profile.id}`,
        JSON.stringify({
          name: name.trim(),
          avatar,
        })
      );

      setName(name.trim());

      alert("Profile updated successfully!");

    } catch {
      alert("Profile update failed");
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">

      <div className="mx-auto max-w-3xl">

        <h1 className="mb-6 text-2xl font-bold">
          My Profile
        </h1>

        {/* Profile Section */}
        <div className="rounded-2xl bg-gray-100 p-6 shadow-md">

          {/* Photo Component */}
          <ProfilePhoto
            avatar={avatar}
            name={name}
            onAvatarChange={setAvatar}
          />

          {/* Name */}
          <div className="mb-6">

            <label
              htmlFor="profile-name"
              className="mb-2 block font-medium"
            >
              Full Name
            </label>

            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-500
                px-4 py-2 focus:outline-none focus:ring-2
                focus:ring-blue-500"
            />

          </div>

          {/* Role */}
          <div className="mb-6">

            <label className="mb-2 block font-medium">
              Role
            </label>

            <div className="rounded-lg bg-gray-200 px-4 py-2 text-gray-700">
              {profile.role}
            </div>

          </div>

          {/* Update Button */}
          <button
            type="button"
            onClick={handleUpdate}
            className="flex items-center gap-2 rounded-xl
              bg-blue-500 px-6 py-2 text-white
              hover:bg-blue-600"
          >
            <Save className="h-5 w-5" />
            Update Profile
          </button>

        </div>

        {/* Enrollment Section */}
        <div className="mt-6 rounded-2xl bg-gray-100 p-6 shadow-md">

          <h2 className="mb-4 text-xl font-semibold">
            My Enrollment
          </h2>

          <div className="space-y-5">

            {enrolledCourses.map((course) => (
              <EnrollmentCard
                key={course.id}
                course={course}
              />
            ))}

            {enrolledCourses.length === 0 && (
              <p className="text-gray-500">
                Enrollment not yet
              </p>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;