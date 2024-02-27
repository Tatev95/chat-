// export const timeOut = (store: any) => (next: any) => (action: any) => {
//   if (action.payload.timeOut) {
//     setTimeout(() => {
//       next(action);
//     }, action.payload.timeOut);
//   }
//   return next(action);
// };

export const timeOut = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  if (action.delayMs) {
    const timerId = setTimeout(() => {
      next(action);
    }, action.delayMs);
    return () => {
      console.log("canceled");
      clearTimeout(timerId);
    };
  }
  return next(action);
};
