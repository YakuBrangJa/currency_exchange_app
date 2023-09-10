import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWindowWidth } from "../store/appReducer";

function useReadWindowSize() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
}

export default useReadWindowSize;
