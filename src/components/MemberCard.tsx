import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import type { Member } from "@/types/content";

// Import local images created by the user
import ChaeWon from "./Images/ChaeWon.jpg";
import ChaeYeon from "./Images/ChaeYeon.jpg";
import DahYun from "./Images/DahYun.jpg";
import HaYeon from "./Images/HaYeon.jpg";
import HyeRin from "./Images/HyeRin.jpg";
import JiWoo from "./Images/JiWoo.jpg";
import JiYeon from "./Images/JiYeon.jpg";
import JooBin from "./Images/JooBin.jpg";
import Kaede from "./Images/Kaede.jpg";
import Kotone from "./Images/Kotone.jpg";
import Lynn from "./Images/Lynn.jpg";
import Mayu from "./Images/Mayu.jpg";
import NaKyoung from "./Images/NaKyoung.jpg";
import Nien from "./Images/Nien.jpg";
import SeoAh from "./Images/SeoAh.jpg";
import SeoYeon from "./Images/SeoYeon.jpg";
import ShiOn from "./Images/ShiOn.jpg";
import SoHyun from "./Images/SoHyun.jpg";
import SooMin from "./Images/SooMin.jpg";
import Sullin from "./Images/Sullin.jpg";
import Xinyu from "./Images/Xinyu.jpg";
import YeonJi from "./Images/YeonJi.jpg";
import YooYeon from "./Images/YooYeon.jpg";
import YuBin from "./Images/YuBin.jpg";

const memberImages: Record<string, StaticImageData> = {
  chaewon: ChaeWon,
  chaeyeon: ChaeYeon,
  dahyun: DahYun,
  hayeon: HaYeon,
  hyerin: HyeRin,
  jiwoo: JiWoo,
  jiyeon: JiYeon,
  joobin: JooBin,
  kaede: Kaede,
  kotone: Kotone,
  lynn: Lynn,
  mayu: Mayu,
  nakyoung: NaKyoung,
  nien: Nien,
  seoah: SeoAh,
  seoyeon: SeoYeon,
  shion: ShiOn,
  sohyun: SoHyun,
  soomin: SooMin,
  sullin: Sullin,
  xinyu: Xinyu,
  yeonji: YeonJi,
  yooyeon: YooYeon,
  yubin: YuBin,
};

export function MemberCard({ member }: { member: Member }) {
  const image = memberImages[member.id];

  return (
    <Link
      href={`/integrantes/${member.slug}`}
      className="pixel-frame glow-on-hover group block aspect-[2.5/3.5] overflow-hidden bg-cosmo-surface relative"
    >
      {image && (
        <Image
          src={image}
          alt={member.stageName}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      )}
      <div className={`relative z-10 flex h-full flex-col justify-between p-3 ${!image ? 'holo-fill' : 'bg-gradient-to-t from-black/80 via-transparent to-black/60'}`}>
        <div className="flex items-start justify-between">
          <span className="bg-cosmo-void px-1.5 py-0.5 font-display text-[8px] text-holo-cyan">
            S{member.number}
          </span>
          <span className="bg-cosmo-void px-1.5 py-0.5 font-display text-[8px] text-holo-cyan">
            {member.country}
          </span>
        </div>
        <div className="bg-cosmo-void/80 p-2 backdrop-blur-sm">
          <h3 className="font-display text-sm text-holo-cyan drop-shadow-md">{member.stageName}</h3>
          <p className="mt-1 font-display text-[8px] text-ink-muted">
            {member.subunitIds.length} sub-unidad{member.subunitIds.length === 1 ? "" : "es"}
          </p>
        </div>
      </div>
    </Link>
  );
}
