const express = require('express');
const User = require('../models/user');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    // const token = await user.generateAuthToken();
    // res.status(201).send({user, token});
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();

    res.send({user, token});
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/logout', authMiddleware, async (req, res) => {
  // res.json({message: 'User logout'});
  try {
    req.user.tokens = req.user.tokens.filter(
      token => token.token !== req.token
    );

    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post('/logoutAll', authMiddleware, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(404).send();
  }
});

router.patch('/me', authMiddleware, async (req, res) => {
  // const _id = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ['firstname', 'lastname', 'email', 'password'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({error: 'Invalid updates!'});
  }

  try {
    updates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }
});

// router.delete('/me', authMiddleware, async (req, res) => {
//   try {
//     await req.user.remove();

//     res.send(req.user);
//   } catch (e) {
//     res.status(500).send();
//   }
// });

module.exports = router;
