import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

export interface  State {
  count: number;
}

export const key: InjectionKey<InjectionKey<Store<State>>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    setCount(state: State, i: number) {
      state.count = i;
    }
  },
  getters: {
    getCount (state: State) {
      return state.count + 1
    }
  }
})

// 定义路由
export function useStore () {
  return baseUseStore(key);
}