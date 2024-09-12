import Skills from "@/components/Skill";
import SkillsLoader from "@/components/SkillsLoader";
import { Suspense } from "react";
 
export default function Home() {
  return (
    <>
      <h1>Mes compétences</h1>
      <Suspense fallback={<SkillsLoader />}>
        <Skills />
      </Suspense>
    </>
  );
}