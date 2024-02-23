import { validateRequest } from "@/lib/auth/lucia";
import { redirect } from "next/navigation";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <>
      <a href="/login/github">Sign in with GitHub</a>
    </>
  );
}
