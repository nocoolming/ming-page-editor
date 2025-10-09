import React from 'react';

export type EditorProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Minimal MVP Editor component
 * - 可作为基础的可扩展编辑器入口
 * - 保持轻量 —— textarea + 简单样式
 */
export default function Editor({
  value = '',
  onChange,
  placeholder = '输入内容...',
  className,
  style
}: EditorProps) {
  return (
    <div
      className={className}
      style={{
        border: '1px solid #e6e6e6',
        borderRadius: 8,
        padding: 10,
        background: '#fff',
        ...style
      }}
    >
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          width: '100%',
          minHeight: 160,
          resize: 'vertical',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace',
          fontSize: 14,
          border: 'none',
          outline: 'none'
        }}
      />
    </div>
  );
}
