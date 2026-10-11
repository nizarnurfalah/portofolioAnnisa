import {
  LinkedinIcon,
  InstagramIcon,
  MailIcon,
} from "../components/icons/SocialIcons";

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: React.ReactNode;
  actionText: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Gmail",
    url: "mailto:haurasalshabira@gmail.com",
    handle: "haurasalshabira@gmail.com",
    icon: <MailIcon />,
    actionText: "Kirim Email",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/annisahaurasalshabira/",
    handle: "Annisa Haura Salshabira",
    icon: <LinkedinIcon />,
    actionText: "Terhubung di LinkedIn",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/annisahauraaa/",
    handle: "@annisahauraaa",
    icon: <InstagramIcon />,
    actionText: "Lihat Instagram",
  },
];
