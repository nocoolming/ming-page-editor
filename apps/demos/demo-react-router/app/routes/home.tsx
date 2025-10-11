import type { Route } from "./+types/home";

import { MingEditor } from '@nocoolming/page-editor';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col ">

      <h1>Hello</h1>


      <div className="grow">

        <MingEditor />
      </div>
    </div>

  )
}
