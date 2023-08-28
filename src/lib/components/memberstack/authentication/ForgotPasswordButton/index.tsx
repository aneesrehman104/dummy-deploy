import { useMemberstackModal } from "@memberstack/react";

export function PasswordSettings() {
  const { openModal } = useMemberstackModal();

  return (
    <div onClick={() => openModal({ type: "FORGOT_PASSWORD" })}>
      Forgot Password?
    </div>
  )
}