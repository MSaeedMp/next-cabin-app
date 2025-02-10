import { socialLinks } from "@/utils/constants";

const SocialMediaLinks = () => {
  return (
    <div className="pt-4 md:pr-8 md:pt-0 flex gap-6 items-center md:self-start justify-center">
      {socialLinks.map(({ href, icon: Icon }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          <Icon className="w-8 h-8 text-stone-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
