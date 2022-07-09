import Stripe from 'stripe'
import {version} from '../../package.json'

export const stripe = new Stripe(
  "sk_test_51K2yH5INC48mfpq6SHH9yntKcIRJ5z1tauSBwTsW1UQqUOxyszG94LBBmahNTeWSvzVAXYZrYchWSPZ4a0GP91t900E5DbmEB9",{
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'Ignews',
      version
    }
  }
)