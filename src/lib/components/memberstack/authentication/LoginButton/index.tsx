import { useMemberstackModal } from "@memberstack/react";

export function Login() {
  const { openModal, hideModal } = useMemberstackModal();

  return (
    <div
      onClick={() =>
        openModal({
          type: "LOGIN",
        }).then(({ data, type }) => {
          console.log("data", data);
          console.log("type: ", type);
          hideModal();
        })
      }
    >
      Log in
    </div>
  );
}
