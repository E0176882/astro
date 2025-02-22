import React from "react";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

function AntThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority="high">{children}</StyleProvider>
    </ConfigProvider>
  );
}

export default AntThemeProvider;
