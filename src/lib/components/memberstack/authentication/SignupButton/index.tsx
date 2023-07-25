import { useMemberstackModal } from "@memberstack/react";

export function Signup() {
  const { openModal, hideModal } = useMemberstackModal();

  return (
    <div
      onClick={() =>
        openModal({
          type: "SIGNUP",
          planId: ["pln_..."],
        }).then(({ data, type }) => {
          console.log("data", data);
          console.log("type: ", type);
          hideModal();
        })
      }
    >
        Signup
    </div>
  );
}
