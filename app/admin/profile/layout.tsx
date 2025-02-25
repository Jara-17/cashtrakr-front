import ProfileTabs from "@/components/profile/ProfileTabs";
import ToastNotification from "@/components/ui/ToastNotifications";

export default async function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ProfileTabs />
      {children}
      <ToastNotification />
    </>
  );
}
