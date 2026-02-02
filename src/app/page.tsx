import { Metadata } from "next";
import { Card } from "./components/header/card/Card";
import { Section } from "./components/header/section/Section";

export const metadata: Metadata = {
  title: "Pagina Inicial"
}

export default function PageHome() {
  return (
    <main>
      <Section title="Veja mais cursos"
        variant="h-list"
      />
    </main>
  );
}
