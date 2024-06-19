import {Chip} from "@nextui-org/react";

interface LangChipProps {
  lang: string;
}

export default function LangChip({lang}: LangChipProps){
  let color: "success" | "warning" | "primary" | "secondary" | "default" | "danger"| undefined;
  switch (lang){
    case "Python":
      color = "primary";
      break;
    case "JavaScript":
    case "TypeScript":
      color = "warning";
      break;
    case "C++":
      color = "danger";
      break;
    case "MongoDB":
    case "MySQL":
      color = "secondary";
      break;
    case "React":
      color = "success";
      break;
    default:
      color = "default";
  }

  return <Chip size= "sm" color={color} variant="flat">{lang}</Chip>;
}