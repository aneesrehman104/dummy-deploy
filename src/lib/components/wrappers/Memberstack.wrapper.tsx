import { MemberstackProvider } from "@memberstack/react";
import { memberstack_config } from "../context";

export const MemberstackWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <MemberstackProvider config={memberstack_config}>
      <main>{children}</main>
    </MemberstackProvider>
  );
};
