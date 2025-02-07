import type { Metadata } from "next"
import Providers from "@/src/app/provider"
import "react-responsive-modal/styles.css"
import "@/src/app/globals.css"
import Head from "next/head";

export const metadata: Metadata = {
  title: "ComHub",
  description: "ComHub - the hub for Commune Ai modules.",
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <title>ComHub</title>
        <meta name="description" content="ComHub - the hub for Commune Ai modules." />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" />
      </Head>
      <body>
      <Providers>{children}</Providers>
      </body>
    </>
  );
}
