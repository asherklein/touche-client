import { createRulebook } from 'destate'
const saved = localStorage.getItem('book')
const rulebook = createRulebook(saved ? JSON.parse(saved) : undefined)
export default rulebook

