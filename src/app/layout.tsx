import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YvesPet | Cuidado que faz bem",
  description: "Uma seleção especial de acessórios e essenciais para cuidar de quem faz parte da família.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
