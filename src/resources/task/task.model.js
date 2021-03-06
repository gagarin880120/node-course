const uuid = require('uuid');
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: String,
    order: Number,
    description: String,
    userId: null || String,
    columnId: null || String,
    boardId: null || String,
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

taskSchema.statics.toResponse = task => {
  const { id, title, order, description, userId, columnId, boardId } = task;
  return { id, title, order, description, userId, columnId, boardId };
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
