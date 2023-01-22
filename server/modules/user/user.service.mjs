import log from "@ajar/marker";
import User from "./user.model.mjs";

export const create_user = async (payload) => {
  const user = await User.create(payload);
  return user;
};
export const get_all_users = async () => {
  const users = await User.find();
  return users;
};
export const get_user_by_id = async (user_id) => {
  const user = await User.findById(user_id);
  return user;
};
export const update_user_by_id = async (user_id, payload) => {
  const user = await User.findByIdAndUpdate(user_id, payload, {
    new: true,
    upsert: true,
  });
  return user;
};
export const delete_user_by_id = async (user_id) => {
    const user = await User.findByIdAndRemove(user_id);
    return user;
};
