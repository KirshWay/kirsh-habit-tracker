import { Habit } from "@interfaces/index";

import $axios from "./index";

const Habits = {
  getAll: () => $axios.get<Habit[]>(`/habits`),
  // TODO: fix on real apiRequests
  getOne: (id: string | number) => $axios.get(`/habits/${id}`),
  addNew: (title: string, timesWeek: number) => $axios.post(`/habits`, { title, timesWeek }),
  // TODO: fix on real apiRequests
  delete: (id: string | number) => $axios.get(`/habits`),
};

export default Habits;
