type ConfirmProps = {
  message: string;
  onConfirm: (isConfirmed: boolean) => void;
};

export const showConfirm = (
  message: string | null,
  callback: (arg0: boolean) => void
) => {
  const confirmPopup = document.createElement("div");
  confirmPopup.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "flex",
    "items-center",
    "justify-center",
    "w-full",
    "h-full",
    "bg-gray-500",
    "bg-opacity-50",
    "z-50"
  );

  const confirmContent = document.createElement("div");
  confirmContent.classList.add("bg-white", "p-6", "rounded-lg", "shadow-lg");

  const confirmMessage = document.createElement("p");
  confirmMessage.classList.add("text-lg", "mb-4");
  confirmMessage.textContent = message;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("flex", "justify-center");

  const confirmYesButton = document.createElement("button");
  confirmYesButton.classList.add(
    "bg-primary",
    "hover:bg-secondary",
    "text-white",
    "px-4",
    "py-2",
    "mr-4",
    "rounded-lg",
    "trans-300"
  );
  confirmYesButton.textContent = "Yes";

  const confirmNoButton = document.createElement("button");
  confirmNoButton.classList.add(
    "bg-red-500",
    "hover:bg-red-600",
    "text-white",
    "px-4",
    "py-2",
    "rounded-lg",
    "trans-300"
  );
  confirmNoButton.textContent = "No";

  buttonContainer.appendChild(confirmYesButton);
  buttonContainer.appendChild(confirmNoButton);

  confirmContent.appendChild(confirmMessage);
  confirmContent.appendChild(buttonContainer);

  confirmPopup.appendChild(confirmContent);

  document.body.appendChild(confirmPopup);

  confirmYesButton.onclick = () => {
    callback(true);
    confirmPopup.remove();
  };

  confirmNoButton.onclick = () => {
    callback(false);
    confirmPopup.remove();
  };
};
