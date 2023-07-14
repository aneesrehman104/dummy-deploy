import React from "react";

export const memberstack_config = {
    publicKey: ""
};

export const MemberInformationContext = React.createContext<{ user: object, memberstack: object }>({user: {}, memberstack: {}})

export const MemberContext = React.createContext({})