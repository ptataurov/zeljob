export const compose = (...funcs) => arg =>
  funcs.reduce((acc, func) => func(acc), arg)
