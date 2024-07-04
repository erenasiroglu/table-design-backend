const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const getUsers = async () => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) throw error;
  return data;
};

const getUserById = async (id) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
};

const createUser = async (user) => {
  const { data, error } = await supabase.from("users").insert([user]);
  if (error) throw error;
  return data;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
