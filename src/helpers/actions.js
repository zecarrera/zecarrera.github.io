const availableActions = [
  {
    name: 'snyk',
    description: 'runs snyk security scan'
  },
  {
    name: 'postman',
    description: 'runs postman collection tests'
  },
  {
    name: 'linter',
    description: 'runs code static analysis'
  }
]
export default function isAvailable (actionToFind) {
  if (actionToFind.length <= 0) {
    return false
  }
  if (typeof actionToFind !== 'string') {
    return false
  }
  if (availableActions.some(t => t.name === actionToFind.toLocaleLowerCase())) {
    return true
  }
  return false
}
