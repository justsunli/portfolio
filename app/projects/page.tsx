"use client";
import { title } from "@/components/primitives";
import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import ProjectCard from "@/components/ProjectCard";
import csdata from "../../assets/csprojects.json";
import geodata from "../../assets/geoprojects.json";


export default function projects() {

  const cs_projects = csdata;
  const geo_projects = geodata;

  return (
    <div className="flex flex-col items-center px-4">
      {/* <Switch className="mb-4" isSelected={isVertical} onValueChange={setIsVertical}>
        Vertical
      </Switch> */}
      {/* <div className="flex w-full flex-col"> */}
        <Tabs aria-label="Options" >
          <Tab key="comsci" title="Com Sci">
            <div className="flex flex-wrap justify-center flex-col gap-5 sm:flex-row">
              {cs_projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  projectName={project.projectName}
                  linkType={project.linkType}
                  link={project.link}
                  language={project.lang}
                  description={project.description}
                  year={project.year}
                  imageURL={project.imageURL}
                  />
                ))}
            </div>
          </Tab>
          <Tab key="geo" title="Geology">
            <div className="flex flex-wrap justify-center flex-col gap-5 sm:flex-row">
            {geo_projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  projectName={project.projectName}
                  linkType={project.linkType}
                  link={project.link}
                  language={project.lang}
                  description={project.description}
                  year={project.year}
                  imageURL={project.imageURL}
                  />
                ))}
            </div>
          </Tab>
        </Tabs>
      {/* </div> */}
    </div>
  );
}
