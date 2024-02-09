import Image from "next/image";
import "./styles/main.scss"

export default function Home() {
  return (
    <main className="sec sec--home">
      <Image
        src="/images/surv--faceDetail_02.jpg"
        alt="Watching the Watchers"
        width={1920}
        height={1280}
        priority
      />
    </main>
  );
}
