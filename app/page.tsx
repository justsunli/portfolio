"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
// import { Text } from '@nextui-org/react';
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { annotate, annotationGroup } from 'rough-notation';
import {useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    const element1 = document.querySelector('#developer') as HTMLElement;;
    const element2 = document.querySelector('#ucla') as HTMLElement;;
    const element3 = document.querySelector('#full-stack') as HTMLElement;;
    const element4 = document.querySelector('#helpful') as HTMLElement;;
    const element5 = document.querySelector('#geology') as HTMLElement;;
    const element6 = document.querySelector('#hireMe') as HTMLElement;;

    if (element1 && element2 && element3 && element4 && element5 && element6) {
      const e1 = annotate(element1, { type: 'highlight', color:'#FFD100' });
      const e2 = annotate(element2, { type: 'underline', color:'#2774AE' });
      const e3 = annotate(element3, { type: 'box', color:'#c8b6ff' });
      const e4 = annotate(element4, { type: 'highlight', color:'#ffb5a7' });
      const e5 = annotate(element5, { type: 'underline', color:'#99d98c' });
      const e6 = annotate(element6, { type: 'circle', color:'#e5989b' });

      const ag = annotationGroup([e1, e2, e3, e4, e5, e6]);
      ag.show();
  }
}, []);

  return (
    <div>

    {/* <section className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
     */}
    <section className="flex flex-col sm:flex-row items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-lg text-left justify-center basis-2/3 sm:px-1">
       */}
       <div className="inline-block max-w-lg text-center sm:text-left justify-center basis-2/3 px-4 sm:px-0">
        <h1 className={title({class:"text-lg"})}>
          Hello! I'm Sunny, a&nbsp;<span id="developer">developer</span>&nbsp;based in Los Angeles, CA.
        </h1>
        {/* <h2 className={subtitle({ class: "mt-4" })}> */}
        <h2 className={subtitle({ class: "mt-4" })}>
          I graduated from&nbsp;<span id="ucla">UCLA</span>&nbsp;this June and am passionate about building tools that are practical and useful in real life.
        </h2>
        <h2 className={subtitle()}>
          I'm interested in&nbsp;<span id="full-stack">full-stack</span>&nbsp;web development and love creating solutions that people find&nbsp;<span id="helpful">helpful</span>&nbsp;. I’m also an outdoor enthusiast and into&nbsp;<span id="geology">geology</span>&nbsp;. I am exploring paths where geology and computer science intersect.
        </h2>
        <h2 className={subtitle()}>
          I'm currently looking for an entry level software engineer role. &nbsp;<span id="hireMe">Hire me?</span>&nbsp;
        </h2>
        {/* <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1> */}
        {/* <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2> */
        }
        <br/>
        <div className="flex gap-5">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.resume}
          >
            Resume
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
          {/* <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.contact}
          >
            Contact Me
          </Link> */}
        </div>
      </div>
      <div className="basis-1/3">
 
          <Image
          isBlurred
          // height={150}
          style={{ maxHeight: '500px' }}
          // src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
          src="/animatedpfp.png"
          alt="Sunny Li"
          />
    
      </div>

      </section>
    </div>
  );
}
