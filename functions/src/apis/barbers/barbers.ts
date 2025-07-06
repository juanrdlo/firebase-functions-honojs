import { Hono } from 'hono'
import { getAllBarbers } from './services/getAllBarbers'

const barbers = new Hono()

barbers.get('/', getAllBarbers)

export default barbers
