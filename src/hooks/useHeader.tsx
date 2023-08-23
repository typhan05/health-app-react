import { useRef, useState } from "react";
import useOnClickOutside from "./useOnClickOutside";

const useHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<any>();

  const openHandler = () => {
    setOpenMenu(!openMenu);
  };

  useOnClickOutside(menuRef, () => {
    setOpenMenu(false);
  });

  return {
    openMenu,
    openHandler,
    menuRef,
    useOnClickOutside,
  };
};

export default useHeader;
