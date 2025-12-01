import { supabase } from "../config/supabaseClient.js";

export const CardModel = {

  async getAll() {
    const { data, error } = await supabase.from("cards").select("*");
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from("cards").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  },

  async create(cardData) {
    const { data, error } = await supabase.from("cards").insert([cardData]).select().single();
    if (error) throw error;
    return data;
  },

  async update(id, cardData) {
    const { data, error } = await supabase.from("cards").update(cardData).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("cards").delete().eq("id", id);
    if (error) throw error;
    return { message: "Card deleted successfully" };
  }
};
