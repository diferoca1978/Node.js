import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  validateEmail: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  avatar: {
    type: String,
  },
  role: {
    type: [String],
    default: ['USER-ROLE'],
    enum: ['ADMIN-ROLE', 'USER-ROLE'],
  },
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret, options) {
    delete ret._id;
    delete ret.password;
  },
});

export const UserModel = mongoose.model('User', userSchema);
