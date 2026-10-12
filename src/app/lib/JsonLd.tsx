import { personalInfo } from "../data/portfolio";

export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nizarnurfalah.github.io/portofolioAnnisa";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.fullName,
    url: siteUrl,
    image: `${siteUrl}/fotoprfil.png`,
    sameAs: [personalInfo.linkedin, personalInfo.instagram],
    jobTitle: personalInfo.role,
    worksFor: {
      "@type": "Organization",
      name: "Universitas Padjadjaran",
    },
    description: personalInfo.summary,
    knowsAbout: [
      "Healthcare Administration",
      "Clinical Documentation",
      "Medical Records",
      "Maternal & Child Health",
      "Public Health",
      "Microsoft Office Specialist",
      "Community Health Outreach",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Padjadjaran",
    },
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personalInfo.fullName} Portfolio`,
    url: siteUrl,
    description: `Professional portfolio of ${personalInfo.fullName}, Bachelor of Applied Science in Midwifery from Universitas Padjadjaran.`,
    author: {
      "@type": "Person",
      name: personalInfo.fullName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  );
}
