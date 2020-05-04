const status = (state = false, action) => {
      switch (action.type) {
            case "RUN":
                  return true
            case "STOP":
                  return false
            default:
                  return state
      }
}
export default status