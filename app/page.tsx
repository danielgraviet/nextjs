import Image from "next/image";
import Greeting from "./components/greeting";
export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Greeting />
    </div>
  );
}
