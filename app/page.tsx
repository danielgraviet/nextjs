import Image from "next/image";
import Greeting from "./components/greeting";
import LikeButton from "./components/likeButton";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Greeting />
      <LikeButton />
    </div>
  );
}
