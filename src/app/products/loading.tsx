import { Skeleton } from "@/components/ui/skeleton";
// import { Loader2 } from "lucide-react";

export default function Loading() {
  // return <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
  return <Skeleton className="w-[100px] h-[20px] rounded-full"/>;
}