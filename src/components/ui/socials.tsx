import Link from "next/link";

export default function Socials({ socials }: { socials: any }) {
  return (
    <span className={`flex flex-wrap gap-10 text-stone-50`}>
      {socials.map((social: any, key: number) => (
        <Link key={key} aria-label={social.name} href={social.href}>
          <button className="text-4xl p-0 text-inherit" aria-label={social.name}>
            {social.icon}
          </button>
        </Link>
      ))}
    </span>
  );
}
