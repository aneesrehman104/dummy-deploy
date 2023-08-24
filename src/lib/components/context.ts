import React from "react";
export interface MemberData {
  auth: {
    email: string;
  };
  stripeCustomerId?: string;
}
export const memberstack_config = {
  publicKey: "pk_sb_e1babdb2327aaadd2e43",
};

export const MemberInformationContext = React.createContext<{
  user: { member?: MemberData | null };
  memberstack: object;
}>({ user: { member: null }, memberstack: {} });
export const MemberContext = React.createContext({});
