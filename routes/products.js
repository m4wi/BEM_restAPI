import { Router } from 'express'
const router = Router()

router.get('/:product', (req, res) => {
  res.send(`Tu anime es: ${req.params.product}`)
  console.log(`Tu anime es: ${req.params.product}`)
})

export default router
