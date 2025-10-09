import React from "react";
import { Editor } from "@my-editor/react";
import { uid } from "@my-editor/utils"; // 如果你用了 utils

const schemas = [
  { type: "title", label: "标题", defaultProps: { text: "默认标题" }, fields: [{ name: "text", label: "标题文本", type: "text" }], render: (p:any) => <h3>{p.text}</h3> },
  { type: "paragraph", label: "段落", defaultProps: { text: "段落" }, fields: [{ name: "text", label: "正文", type: "textarea" }], render: (p:any) => <p>{p.text}</p> },
];

const initial = [
  { id: uid(), type: "title", props: { text: "欢迎" } },
  { id: uid(), type: "paragraph", props: { text: "拖拽左侧 block 到中间" } }
];

export default function AppRoot() {
  return (
    <div style={{ padding: 18 }}>
      <Editor schemas={schemas} initialData={initial} onChange={(d) => console.log("onChange", d)} />
    </div>
  );
}
