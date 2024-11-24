"use client";

import Link from "next/link";
import { exampleSources } from "./data";

export interface Source {
  id: string;
  title: string;
  link: string;
  authors?: string;
}

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-20">
      {exampleSources.map((source) => (
        <SourceItem key={source.id} source={source} />
      ))}
    </div>
  );
}

function SourceItem(props: { source: Source }) {
  return (
    <div className="border truncate rounded hover:bg-gray-100 mb-2 shadow">
      <Link
        href={`/pdf/viewer.html?file=${props.source.link}`}
        className="flex justify-between p-2"
      >
        <div className="truncate">{props.source.title}</div>
        <div>→</div>
      </Link>
    </div>
  );
}
