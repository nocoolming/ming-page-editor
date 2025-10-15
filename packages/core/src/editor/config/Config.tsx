import type { JSX } from "react";
import type { DefaultComponentProps } from "./Props";

// 字段配置类型
type FieldConfig = {
  type: string; // e.g., "text", "number"
  key: string; // 字段名
  label?: string;
};

// 组件配置
type ComponentConfig<Props extends DefaultComponentProps = DefaultComponentProps> = {
  key: string; // React key for rendering
  render: (props: Props) => JSX.Element; // 渲染函数
  fields: FieldConfig[]; // 编辑字段
  defaultValues: Props; // 默认 props
};

// 配置
type Config<Props extends DefaultComponentProps = DefaultComponentProps> = {
  components: { [K in keyof Props]: ComponentConfig<Props[K]> };
};

