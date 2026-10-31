import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AmbientBackground } from "@/components/site/AmbientBackground";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { CaseStudyView } from "@/components/work/CaseStudyView";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug, "en");
  if (!project) return { title: "Not found" };
  return { title: project.name, description: project.summary };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getCaseStudy(slug, "en")) notFound();

  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <CaseStudyView slug={slug} />
        </div>
      </main>
      <Footer />
    </>
  );
}
