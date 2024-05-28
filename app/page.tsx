import { FooterPage } from "@/components/pages/footer";
import HomePage from "@/components/pages/home/pages";
import { Fragment } from "react";

export default function Home() {
  return (
    <div className="relative h-full overflow-x-hidden overflow-auto">
      <HomePage />
      <FooterPage />
    </div>
  );
}
