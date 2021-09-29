const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  zipCode: {
    type: String,
    required: true,
    minlength: 5,
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
  },
  puppyAbout: {
    type: String,
    required: true,
    trim: true,
  },
  // TO DO: Signup form: user can choose between months and years.
  puppyAge: {
    type: String,
    required: true,
    minlength: 1, 
  },
  puppyBreed: {
    type: String,
    required: true,
    trim: true,
  },
  puppy: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Puppy',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;