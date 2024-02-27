export const logger = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  return next(action);
};
