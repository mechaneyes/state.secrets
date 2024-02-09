import { Metadata } from "next";
import Image from "next/image";
import "./styles/main.scss"

// https://medium.com/@moh.mir36/open-graph-with-next-js-v13-app-directory-22c0049e2087
//
export const metadata: Metadata = {
  metadataBase: new URL("https://state.secrets/"),
  title: "State Secrets",
  description: "Watching the Watchers",
  openGraph: {
    images: [
      {
        url: "https://res.cloudinary.com/dhbk213bt/image/upload/v1706917124/lightwerk/og/og-shadowing.jpg",
      },
    ],
  },
};

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
