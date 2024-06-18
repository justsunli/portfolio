"use client";
import { title } from "@/components/primitives";
import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Image} from "@nextui-org/react";
import ProjectCard from "./ProjectCard";

export default function AboutPage() {
  // const [isVertical, setIsVertical] = React.useState(true);
  return (
    <div className="flex flex-col px-4">
      {/* <Switch className="mb-4" isSelected={isVertical} onValueChange={setIsVertical}>
        Vertical
      </Switch> */}
      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="comsci" title="Com Sci">
            {/* <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>   */}
            <div className="flex flex-col gap-5 sm:flex-row">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
            </div>
            <div className="flex flex-col gap-5 mt-5 sm:flex-row">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              {/* <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>

              </Card> */}
            </div>
          </Tab>
          <Tab key="geo" title="Geology">
            <div className="flex flex-col gap-5 sm:flex-row">
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
