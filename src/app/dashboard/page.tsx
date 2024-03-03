import Dashboard from "@/components/Dashboard";
import { db } from "@/db";
// import { getUserSubscriptionPlan } from '@/lib/stripe'
import { auth, currentUser } from "@clerk/nextjs";
 
import { redirect } from "next/navigation";

const Page = async () => {
  const user:any = await currentUser();
  console.log("🚀 ~ Page ~  user:",  user)
  const {userId} =  auth()

  if (!userId) redirect('/auth-callback?origin=dashboard')
  // if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  const dbUser = await db.user.findFirst({
    where: {
      userId: userId
    }
  })

  if(!dbUser) redirect('/auth-callback?origin=dashboard')

  // const subscriptionPlan = await getUserSubscriptionPlan()

  return <Dashboard />
  // return <Dashboard 
  // subscriptionPlan = { subscriptionPlan }
    // />
};

export default Page;
