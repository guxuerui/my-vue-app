import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol('admin-store')

export const store = createStore<State>({
  state: {
    count: 0
  },
  mutations: {
    plusOne (state) {
      state.count++;
    }
  },
  getters: {
    getCount(state)  {
      return state.count;
    } 
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore () {
  return baseUseStore(key);
}