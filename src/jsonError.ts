export function jsonError(error: string, status: number = 400): Response {
  return new Response(
    JSON.stringify({
      error,
      status
    }), {
      status,
      headers: {
        'content-type': 'application/json'
      }
    }
  )
}
