import { Camera } from "lucide-react";
import type { ChangeEvent } from "react";

interface ProfilePhotoProps {
  name: string;
  avatar: string | null;
  onAvatarChange: (image: string) => void;
}

function ProfilePhoto({
  name,
  avatar,
  onAvatarChange,
}: ProfilePhotoProps) {

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {

    // 1. User ရွေးထားတဲ့ File ယူ
    const input = e.currentTarget;
    const file = e.target.files?.[0];
    input.value = "";

    if (!file) return;

    // 2. Image ဟုတ်မဟုတ်စစ်
    if (!file.type.startsWith("image/")) {
      alert("Please choose an image");
      return;
    }


    // 3. File Size စစ်
    if (file.size > 5 * 1024 * 1024) {
      alert("Please choose an image under 5MB");
      return;
    }

    // 4. FileReader ဖန်တီး
    const reader = new FileReader();

    // 5. File ဖတ်ပြီးတဲ့အခါ
    reader.onload = () => {
      if (typeof reader.result === "string") {
        onAvatarChange(reader.result);
      }
    };

    // 6. Image ကို Data URL အဖြစ်ဖတ်
    reader.readAsDataURL(file);
  };

  return (
    <div className="mb-4 flex flex-col items-center gap-3 bg-gray-300 px-4 py-2">

      {/* Profile Photo */}
      {avatar ? (
        <img
          src={avatar}
          alt="Profile"
          className="h-28 w-28 rounded-full object-cover"
        />
      ) : (
        <div
          className="flex h-28 w-28 items-center justify-center
          rounded-full bg-blue-200 text-xl font-bold text-blue-600"
        >
          {name.charAt(0).toUpperCase()}
        </div>
      )}

      {/* Choose Photo Button */}
      <label
        className="flex cursor-pointer items-center justify-center
        gap-2 rounded-lg bg-blue-300 px-4 py-2 hover:bg-blue-500"
      >
        <Camera className="h-5 w-5" />

        Choose Photo

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />
      </label>

    </div>
  );
}

export default ProfilePhoto;