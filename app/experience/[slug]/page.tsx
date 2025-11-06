import { experiences } from "@/components/Experience";
import Link from "next/link";
import Image from "next/image";

export function generateStaticParams() {
  return experiences.map((exp) => ({ slug: exp.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const exp = experiences.find((e) => e.slug === params.slug);
  return {
    title: exp ? `${exp.company} — ${exp.role}` : "Experience",
    description: exp ? exp.description : undefined,
  };
}

export default function ExperienceDetailPage({ params }: { params: { slug: string }}) {
  const experience = experiences.find((exp) => exp.slug === params.slug);

  if (!experience)
    return (
      <div
        className="min-h-screen flex justify-center items-center flex-col bg-black-100 overflow-hidden max-w-[100vw] mx-auto sm:px-10 px-5"
        style={{ overflowX: "hidden", width: "100vw", boxSizing: "border-box" }}
      >
        <div className="p-10 text-white">Not Found</div>
      </div>
    );

  return (
    <div
      className="min-h-screen flex justify-center items-center flex-col bg-black-100 overflow-hidden max-w-[100vw] mx-auto sm:px-10 px-5"
      style={{ overflowX: "hidden", width: "100vw", boxSizing: "border-box" }}
    >
      <div className="p-8 text-white max-w-4xl w-full">
        <Link href="/" className="text-sm text-blue-400">
          ← Back
        </Link>

        <header className="mt-4 flex items-center gap-4">
          <div className="w-20 h-20 rounded-md overflow-hidden bg-neutral-900 flex items-center justify-center">
            {/* the icon in experiences is an <img/> element; render a plain img fallback */}
            {experience.icon ? (
              // If the icon is an element, render it; otherwise show placeholder
              <div className="w-full h-full flex items-center justify-center">{experience.icon}</div>
            ) : null}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{experience.company}</h1>
            <p className="text-sm text-gray-300">{experience.role} • {experience.date} • {experience.location}</p>
          </div>
        </header>

        {experience.images && experience.images.length > 0 && (
          <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experience.images.map((item, i) => {
              // support either string or { src, href }
              const isObject = typeof item === "object" && item !== null && (item as any).src;
              const src = isObject ? (item as any).src : (item as string);
              const link = isObject ? ((item as any).href ?? null) : null;

              return (
                <div key={i} className="rounded bg-neutral-800 flex items-center justify-center overflow-hidden">
                  {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full relative z-20 pointer-events-auto">
                      <img src={src} alt={`${experience.company} ${i + 1}`} className="w-full h-auto object-contain p-4" />
                    </a>
                  ) : (
                    <img src={src} alt={`${experience.company} ${i + 1}`} className="w-full h-auto object-contain p-4" />
                  )}
                </div>
              );
            })}
          </section>
        )}

        <article className="mt-6 bg-neutral-900/40 rounded-lg p-6">
          {experience.description && (
            <p className="text-gray-200 leading-relaxed">{experience.description}</p>
          )}

          {experience.points && (
            <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300">
              {experience.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </div>
  );
}
