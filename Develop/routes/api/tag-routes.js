const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags with their associated Products
router.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            include: [{ model: Product, through: ProductTag }],
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one tag by its `id` with its associated Products
router.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id, {
            include: [{ model: Product, through: ProductTag }],
        });

        if (!tagData) {
            res.status(404).json({ message: 'No tag found with this id!' });
            return;
        }

        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new tag
router.post('/', async (req, res) => {
    try {
        const newTag = await Tag.create(req.body);
        res.status(200).json(newTag);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT to update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
    try {
        const updatedTag = await Tag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!updatedTag[0]) {
            res.status(404).json({ message: 'No tag found with this id!' });
            return;
        }

        res.status(200).json(updatedTag);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE one tag by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        const deletedTag = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!deletedTag) {
            res.status(404).json({ message: 'No tag found with this id!' });
            return;
        }

        res.status(200).json(deletedTag);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
