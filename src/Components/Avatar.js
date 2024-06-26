import { Avatar } from "@material-tailwind/react";

export function AvatarCustomStyles() {
  return (
    <Avatar
      size="lg"
      alt="avatar"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      className="border border-primary-500 shadow-xl shadow-primary-900/20  ring-4 ring-primary-500/30 h-[40px] w-[40px] "
    />
  );
}
