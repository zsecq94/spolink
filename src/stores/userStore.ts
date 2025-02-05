import { create } from 'zustand'

type IUser = {
  id: string
  name: string
  email: string
  profileImage: string
} | null

type UserState = {
  user: IUser
  setUser: (user: IUser) => void
  clearUser: () => void
}

export const userStore = create<UserState>()((set) => ({
  user: null,
  setUser: async (user: IUser) => set({ user }),
  clearUser: async () => set({ user: null }),
}))
