import { personalInfo } from "../data/portfolio";

export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.fullName,
    url: siteUrl,
    image: `${siteUrl}/profile/annisa-hero.jpg`,
    sameAs: [
      personalInfo.linkedin,
      personalInfo.instagram,
    ],
    jobTitle: "Sarjana Terapan Kebidanan",
    worksFor: {
      "@type": "Organization",
      name: "Fakultas Kedokteran Universitas Padjadjaran",
    },
    description: personalInfo.summary,
    knowsAbout: [
      "Kebidanan",
      "Kesehatan Ibu dan Anak",
      "Antenatal Care (ANC)",
      "Asuhan Persalinan Normal (APN)",
      "Postnatal Care (PNC)",
      "Konseling Laktasi",
      "Makanan Pendamping ASI (MPASI)",
      "Keluarga Berencana",
      "Imunisasi",
      "Cardiotocography (CTG)",
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
    description: `Portofolio profesional ${personalInfo.fullName}, Sarjana Terapan Kebidanan UNPAD.`,
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
