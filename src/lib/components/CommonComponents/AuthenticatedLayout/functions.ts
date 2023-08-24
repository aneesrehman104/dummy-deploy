import { SidebarState } from "@/lib/ts/interface";
import { sidebarItem } from "@/lib/ts/constants";

export const toggleItem = (itemId: string, setIsOpen: any) => {
  setIsOpen((prevState:any) => {
    const newState: SidebarState = { ...prevState };
    const hasSubItems = sidebarItem.some(
      (item) => item.id === itemId && item.items
    );

    if (hasSubItems) {
      newState[itemId] = !prevState[itemId];
    } else {
      // Close all items except the current item when navigating to a leaf item
      Object.keys(prevState).forEach((key) => {
        newState[key] = key === itemId ? !prevState[key] : false;
      });
    }

    return newState;
  });
};

export function findItemPath(pathname: string) {
  return sidebarItem.find((item) => {
    if (item.pathname === pathname) {
      return true;
    }
    if (
      item.items &&
      item.items.some((subItem) => subItem.pathname === pathname)
    ) {
      return true;
    }
    return false;
  });
}