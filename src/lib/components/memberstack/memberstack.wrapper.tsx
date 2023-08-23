import { useMember, useMemberstack } from "@memberstack/react";
import { MemberInformationContext } from "@/lib/components/context";
import { Meta } from "@/lib/meta.component";

export const MemberstackWrapper: React.FC<{
  unauthenticated: React.ReactNode;
  children: React.ReactNode;
}> = ({ unauthenticated, children }) => {
  const user = useMember();
  const memberstack = useMemberstack();

  return (
    <MemberInformationContext.Provider value={{ user, memberstack }}>
      <Meta
        title=""
        description=""
        style={{ width: "100%", margin: 0, height: "90vh" }}
      >
        {user ? children : unauthenticated}
      </Meta>
    </MemberInformationContext.Provider>
  );
};
