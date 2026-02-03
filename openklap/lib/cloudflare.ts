export const getRequestContext = () => {
  // @ts-ignore
  return process.env.NEXT_RUNTIME === 'edge' ? globalThis.context : null;
};