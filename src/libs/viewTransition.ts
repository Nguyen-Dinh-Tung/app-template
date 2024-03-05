import { flushSync } from "react-dom";

// need {{viewTransitionName: 'element-id'}}
export const viewTransition = (callback: any) => {
  if (!!document.startViewTransition) {
    document.startViewTransition(() => {
      flushSync(() => {
        callback();
      });
    });
  } else {
    callback();
  }
};
