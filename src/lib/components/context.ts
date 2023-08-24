import React from "react";
export interface MemberData {
  auth: {
    email: string;
  };
  stripeCustomerId?: string;
}
export const memberstack_config = {
  publicKey: process.env.NEXT_PUBLIC_MEMBERSTACK_KEY as string,
};

export const MemberInformationContext = React.createContext<{
  user: { member?: MemberData | null };
  memberstack: object;
}>({ user: { member: null }, memberstack: {} });
export const MemberContext = React.createContext({});
