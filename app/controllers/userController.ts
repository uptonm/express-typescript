import mongoose from 'mongoose';
import express from 'express';
import User from '../models/userSchema';

const userController = {
  getUser: async (req: express.Request, res: express.Response) => {
    if (!req.params.id) {
      return res.status(400).send({
        Error: 'Required field id was not included'
      });
    }
    const exists = await User.findById(req.params.id);
    if (exists) {
      res.status(200).send(exists);
    } else {
      res.status(404).send({
        Error: 'User not found'
      });
    }
  },
  postUser: async (req: express.Request, res: express.Response) => {
    let user = await User.create(req.body).catch(err => {
      return res.status(200).send({
        Error: err
      });
    });
    return res.status(200).send(user);
  },
  putUser: async (req: express.Request, res: express.Response) => {
    if (!req.params.id) {
      res.status(400).send({
        Error: 'Required field id was not included'
      });
    }
    let exists = await User.findById(req.params.id);
    if (exists) {
      await User.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).send({
        userId: req.params.id,
        update: req.body
      });
    }
  },
  deleteUser: async (req: express.Request, res: express.Response) => {
    if (!req.params.id) {
      res.status(400).send({
        Error: 'Required field id was not included'
      });
    }
    let exists = await User.findById(req.params.id);
    if (exists) {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).send(`User ${req.params.id} deleted`);
    }
  }
};

export default userController;
