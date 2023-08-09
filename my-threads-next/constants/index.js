export const sidebarLinks = [
  {
    imgURL: "/assets/icon-home.png",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icon-search.png",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/icon-heart.png",
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: "/assets/icon-add-image.png",
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: "/assets/icon-community.png",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/assets/icon-user.png",
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
