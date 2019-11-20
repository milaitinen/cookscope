const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const recipeSchema = new mongoose.Schema({
  author: String,
  authorID: String,
  title: String,
  description: String,
  imageFile: String,
  hours: Number,
  minutes: Number,
  servings: Number,
  difficulty: String,
  categories: [String],
  ingredients: [{amount: String, ingredient: String, id: Number}],
  instructions: [{instruction: String, id: Number}],
  ratings: [{id: String, rating: Number}]
})

recipeSchema.plugin(timestamps);

recipeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Recipe', recipeSchema)