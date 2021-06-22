export type InitialStateType =
  | string
  | number
  | object
  | boolean
  | Set<number>
  | Array<string>
  | Array<number>
  | Array<Array<number>>
  | Array<Array<string>>;

export const store = {
  observers: new Map(),

  data: new Map(),

  getData(key: string) {
    return this.data.get(key);
  },

  setData: function (key: string) {
    return (fn: Function | InitialStateType) => {
      this.data.set(
        key,
        typeof fn === "function" ? fn(this.data.get(key)) : fn
      );
      this.observers.forEach((v) => v(v));
      console.log(this.data);
    };
  },

  subscribe({ key, fn }: { key: string; fn: () => void }) {
    this.observers.set(key, fn);
  },
};

export type AtomType<T> = {
  key: string;
  default: T;
};

export const atom = (atomInitialState: {
  key: string;
  default: InitialStateType;
}) => {
  return atomInitialState;
};
