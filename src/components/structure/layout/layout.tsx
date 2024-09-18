import { Root } from "./layout.styles";

export function Layout({ children }: { children: React.ReactNode }) {
  return <Root>{children}</Root>;
}
