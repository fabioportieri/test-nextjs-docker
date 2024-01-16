import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={`/api/chat`}>
        <Button>Test LOG</Button>
      </Link>
    </>
  );
}
