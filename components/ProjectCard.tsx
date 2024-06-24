"use client";

import React from "react";
import {Card, CardHeader, CardBody, Image, Button} from "@nextui-org/react";
import LangChip from "./LangChip";
import { GithubIcon, LinkIcon } from "@/components/icons";
import { Link } from "@nextui-org/link";


interface ProjectCardProps {
  projectName: string;
  linkType: string;
  link: string;
  language: string[];
  description: string;
  year: string;
  imageURL: string;
}

export default function ProjectCard({ projectName, linkType, link, language, description, year, imageURL}: ProjectCardProps) {
  return (
    <Card 
      className="py-4 max-w-[300px]"
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <div className="flex flex-row gap-2">
          <h4 className="font-bold text-large pb-1 text-left leading-tight">{projectName}</h4>
          <Link isExternal aria-label="Github" href={link}>
            {linkType === 'github' ? <GithubIcon className="text-default-500" /> : <LinkIcon className="text-default-500" />}
          </Link>

        </div>
        
        <div className="flex flex-row gap-1 items-start">
         {language.map((lang, index) => <LangChip key={index} lang={lang}/>)}
        </div> 

        <p className="text-tiny font-bold pt-2 overflow-wrap break-word text-left"> 
          {description}
        </p>

        <p className="text-tiny uppercase font-bold pt-2">
          {year}
        </p>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        {/* <Image
          alt={projectName}
          className="object-cover rounded-xl"
          src={imageURL}
          width={270}
          height={220}
          layout="fill"
        /> */}
        <img className="object-cover rounded-xl" src={imageURL} alt={projectName} style={{ height: '202px' }} />
      </CardBody>
    </Card>
  );
}
