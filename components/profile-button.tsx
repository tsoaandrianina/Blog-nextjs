import Link from "next/link";
import { Button } from "./ui/button";
export default function ProfileButton() {
    //user is not connected -> button login
  return (
    <Link href='/login'>
     <Button>
        Login
     </Button>
    </Link>
  );

  //user is connected -> avatar + menu
}
