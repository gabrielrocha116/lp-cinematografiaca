import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Cursor } from "@/components/ui/cursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumenfilmes.com"),
  title: "LUMEN — Estúdio de Cinematografia",
  description:
    "A LUMEN cria filmes institucionais, publicidade e branded content com direção cinematográfica — do roteiro à entrega em cor e som profissionais.",
  keywords: [
    "produtora de vídeo",
    "cinematografia",
    "filme institucional",
    "branded content",
    "produção audiovisual",
  ],
  openGraph: {
    title: "LUMEN — Estúdio de Cinematografia",
    description:
      "Do roteiro à entrega em cor e som profissionais — filmes institucionais, publicidade e branded content.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060507",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-void text-mist">
        <SmoothScrollProvider>
          <Cursor />
          <div className="grain" aria-hidden="true" />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
