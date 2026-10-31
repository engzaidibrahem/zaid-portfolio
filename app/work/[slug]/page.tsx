import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { CaseStudyView } from "@/components/work/CaseStudyView";
import { getCaseStudy, getCaseStudySlugs } from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return { title: "Not found" };

  return {
    title: `${project.name} — Case study`,
    description: project.summary,
    openGraph: {
      title: `${project.name} · Zaid Ibrahem`,
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
      <main className="min-h-screen border-b border-border pt-14">
        <div className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
          <CaseStudyView project={project} />
        </div>
      </main>
      <Footer />
    </>
  );
}
