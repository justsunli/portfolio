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
    const e1 = annotate(document.querySelector('#developer'), { type: 'highlight', color:'#FFD100' });
    const e2 = annotate(document.querySelector('#ucla'), { type: 'underline', color:'#2774AE' });
    const e3 = annotate(document.querySelector('#full-stack'), { type: 'box', color:'#a40efb' });
    const e4 = annotate(document.querySelector('#helpful'), { type: 'highlight', color:'#ef8d74' });
    const e5 = annotate(document.querySelector('#geology'), { type: 'underline', color:'#31e292' });
    const e6 = annotate(document.querySelector('#hireMe'), { type: 'circle', color:'#ae2727' });

    const ag = annotationGroup([e1, e2, e3, e4, e5, e6]);
    ag.show();
  }, []);

  return (
    <div>

    <section className="flex flex-row items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-left justify-center basis-2/3 ">
        <h1 className={title({class:"text-lg"})}>
          Hello! I'm Sunny, a&nbsp;<span id="developer">developer</span>&nbsp;based in Los Angeles, CA.
        </h1>
        {/* <h2 className={subtitle({ class: "mt-4" })}> */}
        <h2 className={subtitle({ class: "mt-4" })}>
          I graduated from&nbsp;<span id="ucla">UCLA</span>&nbsp;this June and am passionate about building tools that are practical and useful in real life.
        </h2>
        <h2 className={subtitle()}>
          I'm interested in &nbsp;<span id="full-stack">full-stack</span>&nbsp; web development and love creating solutions that people find &nbsp;<span id="helpful">helpful</span>&nbsp;. I’m also an outdoor enthusiast and into &nbsp;<span id="geology">geology</span>&nbsp;. I am exploring paths where geology and computer science intersect.
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
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.contact}
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="basis-1/3">
        <Card>
          <Image
          src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png"
          />
        </Card>
      </div>


     

      {/* <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */}
    

      </section>
    </div>
  );
}
