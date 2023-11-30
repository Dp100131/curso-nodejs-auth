const express = require('express');
const passport = require('passport');
const router = express.Router();
const {config} = require('./../config/config')
const { signToken } = require('./../util/security/sign.token')


/* router.post('/login',
    //We are using the local strategy and not using sessions
    passport.authenticate('local', { session: false }),
    async(req, res, next) => {
        try {
            const user = req.user;
            const payload = {
                sub: user.id,
                role: user.role
            }

            const token = jwt.sign(payload, config.auth.jwtSecret);**

            res.json({ user, token });

        } catch (err) {
            next(err);
        }
    }
); */
router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user.id,
        role: user.role
      }
      const token = signToken(payload, config.tokenSecret)
      res.json({user, token});
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;