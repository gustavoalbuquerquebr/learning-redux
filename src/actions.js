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

export function changeColor(color) {
  return {
    type: "CHANGE_COLOR",
    value: color,
  };
}
