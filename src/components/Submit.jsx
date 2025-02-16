import { useFormStatus } from 'react-dom'

function Submit() {
  const { pending, data, method, action} = useFormStatus()
  return (
    <p className="actions">
        <button type="submit" disabled={pending}>
            {pending ? 'Submitting...' : 'Submit'}
        </button>
    </p>
  )
}

export default Submit