type Props = {
  message: string;
  isSuccess: boolean;
};

const notifications: HTMLDivElement[] = [];

export function showNotification({message, isSuccess}: Props) {
  const notificationElement = document.createElement("div");
  notificationElement.classList.add("custom-notification");
  notificationElement.classList.add(isSuccess ? "success" : "error");

  const divMessage = document.createElement("div");
  divMessage.textContent = message;
  divMessage.classList.add("py-5", "pl-5");
  notificationElement.appendChild(divMessage);

  const divButton = document.createElement("div");
  divButton.classList.add(
    "border-l-2",
    "flex",
    "justify-center",
    "items-center",
    "px-2",
    "ml-3"
  );
  notificationElement.appendChild(divButton);

  const closeButton = document.createElement("button");
  closeButton.addEventListener("click", () => {
    closeNotification(notificationElement);
  });
  divButton.appendChild(closeButton);

  const spanButton = document.createElement("span");
  spanButton.textContent = "X";
  spanButton.classList.add("spanBtn");
  closeButton.appendChild(spanButton);

  notifications.push(notificationElement);
  document.body.appendChild(notificationElement);

  moveNotifications();

  setTimeout(() => {
    closeNotification(notificationElement);
  }, 3000);
}

function closeNotification(notificationElement: HTMLDivElement): void {
  notificationElement.classList.add("hidden");
  setTimeout(() => {
    notificationElement.remove();
    notifications.splice(notifications.indexOf(notificationElement), 1);
    moveNotifications();
  }, 300);
}

function moveNotifications() {
  let top = 20;
  notifications.forEach((notification, _index) => {
    notification.style.top = `${top}px`;
    top += notification.offsetHeight + 10;
  });
}
