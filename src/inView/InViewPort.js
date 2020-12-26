import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
} from "react";
import { View, Dimensions } from "react-native";
import { invert } from "lodash";

export default function InViewPort(props) {
  const myview = useRef();
  const lastValue = useRef(null);
  const [state, setState] = useState({
    rectTop: 0,
    rectBottom: 0,
    rectWidth: 0,
  });

  const isInViewPort = useCallback(() => {
    const window = Dimensions.get("window");
    let isVisible =
      state.rectBottom != 0 &&
      state.rectTop >= 0 &&
      state.rectBottom <= window.height &&
      state.rectWidth > 0 &&
      state.rectWidth <= window.width;

    if (props.inView === false) {
      isVisible = false;
    }

    if (lastValue.current !== isVisible) {
      lastValue.current = isVisible;
      props.onChange(isVisible);
    }
  }, [state, props.inView, props.onChange, lastValue]);

  useLayoutEffect(() => {
    let interval = null;

    function startWatching() {
      interval = setInterval(() => {
        if (!myview.current) {
          return;
        }

        myview.current.measure((x, y, width, height, pageX, pageY) => {
          setState({
            rectTop: pageY,
            rectBottom: pageY + height,
            rectWidth: pageX + width,
          });
        });

        isInViewPort();
      }, props.delay || 100);
    }

    if (!props.disabled) {
      startWatching();
    } else {
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [!!props.disabled, isInViewPort, props.delay, myview]);

  return (
    <View collapsable={false} ref={myview} {...props}>
      {props.children}
    </View>
  );
}
