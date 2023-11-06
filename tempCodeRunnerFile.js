var expect = function (val) {
  return {
    toBe: (v) => {
      if (v === val) return true;
      else throw new Error("No Equal");
    },
    notToBe: (v) => {
      if (v !== val) return true;
      else throw new Error(" Equal");
    },
  };
};