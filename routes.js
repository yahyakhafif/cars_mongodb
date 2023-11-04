const express = require('express');
const router = express.Router();
const Car = require('./models/car');
const car = require('./models/car');

router.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
})

router.post('/cars', async (req, res) => {
    const car = new Car({
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        year: req.body.year
    })

    try {
        const newCar = await car.save();
        res.status(200).json(newCar);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
})

router.delete('/cars', async (req, res) => {
    await Car.deleteOne({ brand: req.params.brand }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        else {
            res.json(201).json(result);
        }
    })
})

router.put('/cars/:id', async (req, res) => {
    await car.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        else {
            res.status(200).json({ result });
        }
    })
})


module.exports = router;
