import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CaseStudyView } from "@/components/work/CaseStudyView";
import {
  getCaseStudy,
  getCaseStudySlugs,
} from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: `${project.name} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.name} — Zaid Ibrahem / SOFT STEP`,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export default async function WorkCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="mesh-bg min-h-screen pt-28 pb-20 sm:pt-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <CaseStudyView project={project} />
        </div>
      </main>
      <Footer />
    </>
  );
}
