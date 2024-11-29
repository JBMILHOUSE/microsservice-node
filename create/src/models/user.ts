import { type Document, model, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
}
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
});

const User = model<IUser>('User', userSchema);

export default User;
