import {
  useCustomerPortal,
  MemberstackProtected,
  SignInModal,
} from "@memberstack/react";


export function CustomerPortal() {
  const openPortal = useCustomerPortal({
    priceIds: ["prc_sb_..."],
  });

  return (
    <MemberstackProtected onUnauthorized={<SignInModal />}>
      <button onClick={openPortal}>Open Portal</button>
    </MemberstackProtected>
  );
}
