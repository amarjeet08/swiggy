const mongoose = require('mongoose')

fetchDataController = async (req, res) => {
    try {
        let foodItemCollection;
        let foodCategoryCollection;

        foodItemCollection = mongoose.connection.db.collection('food_items');

        const data = await foodItemCollection.find({}).toArray();

        foodCategoryCollection = mongoose.connection.db.collection('food_category');

        const data1 = await foodCategoryCollection.find({}).toArray();

        res.send(data);

    } catch (err) {
        console.error({ message: err.message })
    }


}

module.exports = fetchDataController;