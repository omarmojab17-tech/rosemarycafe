import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = { title: "Our Story", description: "The story of Rosemary Café in Jenin." };

export default function StoryPage() {
  return <><Header /><main>
    <section className="story-opening"><p className="micro-label">OUR STORY</p><h1>A quiet place.<br /><em>Coffee that speaks.</em></h1><p>A warm everyday café for coffee, company, and time taken slowly.</p><small>مساحة يومية للقهوة، للأصحاب، ولوقت تأخذه على مهلك.</small></section>
    <section className="story-frame image-hover"><Image unoptimized src="/images/interior-wide.jpeg" alt="جلسات روزماري الحقيقية" fill priority sizes="100vw" /></section>
    <section className="story-editorial container"><p className="story-index">01 / THE CUP</p><div><h2>Clear flavour.<br />Nothing complicated.</h2>
      <p className="story-lead">We refine every recipe so your order tastes exactly the way you remember it, every time.</p></div></section>
    <section className="story-quote"><p>Coffee made well.<br />A place worth returning to.</p><span>قهوة بتنعمل بإتقان. وقعدة بتصير عادة.</span></section>
    <section className="story-pair container"><figure className="image-hover"><Image unoptimized src="/images/interior-main.jpeg" alt="المساحة الداخلية في روزماري" fill sizes="(max-width: 760px) 100vw, 58vw" /></figure>
      <div><figure className="image-hover"><Image unoptimized src="/images/berry-smoothie.jpeg" alt="Fruit drink at Rosemary Café" fill sizes="(max-width: 760px) 100vw, 42vw" /></figure><p>Light stone, warm wood, calm green and comfortable lighting. A simple space designed around people, conversation and the cup.</p></div>
    </section>
    <section className="story-final"><p className="micro-label">YOUR NEXT CUP</p><h2>See you at Rosemary.</h2><Link className="button-solid light-button" href="/menu"><span>View the menu</span></Link></section>
  </main><Footer /></>;
}
