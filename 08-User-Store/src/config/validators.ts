import mongoose from 'mongoose';

export class Validators {
  static isMongoID(id: string) {
    return mongoose.isValidObjectId(id); // Here we're using a mongoose method to validate a mongo Id.
  }
}
