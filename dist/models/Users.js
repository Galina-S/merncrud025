import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    username: String,
    hash: String,
    numberOfPages: Number,
    firstName: String,
    lastName: String,
    accessgGroups: [String]
});
export const User = mongoose.model('user', userSchema);
//# sourceMappingURL=Users.js.map