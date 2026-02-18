import { ComponentPreview } from "@/components/component-preview";
import { FeatureGrid } from "@/components/Features-grid";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
     <Hero />
     <FeatureGrid />
     <ComponentPreview /> 
    </div>
  );
}
