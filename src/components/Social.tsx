import { FaXTwitter, FaGithub, FaRegFileLines } from "react-icons/fa6";
import { SOCIAL_URL } from "../constants/index";

const SOCIAL_LINKS = [
  { label: "GitHub", href: SOCIAL_URL.github, Icon: FaGithub },
  { label: "X", href: SOCIAL_URL.x, Icon: FaXTwitter },
  { label: "Blog", href: SOCIAL_URL.blog, Icon: FaRegFileLines },
];

type SocialLinkCardProps = {
  href: string;
  children: React.ReactNode;
};

const SocialLinkCard = ({ href, children }: SocialLinkCardProps) => {
  return (
    <a
      className="flex items-center p-12 sm:p-16 rounded-2xl border border-stone-200 hover:bg-stone-50 text-stone-600 hover:text-stone-900"
      href={href}
    >
      {children}
    </a>
  );
};

const Social = () => {
  return (
    <section id="social" className="py-24 bg-white">
      <div className="container mx-auto max-w-xl text-center space-y-8">
        <h2 className="text-5xl font-bold text-stone-800 ">Social</h2>
        <p className="text-stone-500 leading-relaxed text-xl">
          私は、主に下記の媒体で、活動の記録を更新しています。
          <br />
          そして、多くの開発者と繋がれることを、楽しみにしています🙌
        </p>
        <div className="flex justify-center space-x-2 sm:space-x-8">
          {SOCIAL_LINKS.map((item) => (
            <SocialLinkCard href={item.href}>
              <item.Icon className="w-16 h-16" />
            </SocialLinkCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
