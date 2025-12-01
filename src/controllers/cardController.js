import { CardModel } from "../models/cardModel.js";

export const CardController = {

  async getAll(req, res) {
    try {
      res.json(await CardModel.getAll());
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      res.json(await CardModel.getById(req.params.id));
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const card = await CardModel.create(req.body);
      res.status(201).json(card);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      res.json(await CardModel.update(req.params.id, req.body));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      res.json(await CardModel.remove(req.params.id));
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
