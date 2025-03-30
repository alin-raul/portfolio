import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="grid h-full ">
      <div className="flex md:grid items-center grid-cols-2 gap-4 h-full">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full h-full"
          >
            <div className="outline outline-1 outline-accent transition-all duration-200 w-full h-full md:min-h-28 min-h-16 flex justify-center items-center rounded-[2rem] backdrop-blur-md bg-[var(--bg-dynamic-1)] hover:bg-[--bg-dynamic-2] relative">
              <abbr title={`${link.name}`}>
                <Image
                  src={link.icon}
                  alt={link.alt}
                  height={link.height}
                  width={link.width}
                  className="dynamic-icon"
                />
              </abbr>
              <div className="absolute inset-0 pointer-events-none before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/60 dark:before:from-black/40 dark:before:to-black/20 before:rounded-[2rem] z-[0]"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
