export default function useSubmit () {
  function handleSubmit (ev) {
    ev.preventDefault()
  }

  return {
    handleSubmit
  }
}
