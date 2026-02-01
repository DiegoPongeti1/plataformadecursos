import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina Inicial"
}

export default function PageHome() {
  return (
    <main className="bg-(--bg-background)">
      <h2>
        Hello World</h2>
    </main>
  );
}
