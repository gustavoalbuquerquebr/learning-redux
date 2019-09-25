export function increment(value = 1) {
  return {
    type: "INCREMENT",
    value,
  };
}

export function decrement(value = 1) {
  return {
    type: "DECREMENT",
    value,
  };
}
