import { image } from './fetch/image'
import { jsonError } from './jsonError'

export async function handleRequest(event: FetchEvent): Promise<Response> {
  const { request } = event
  const url = new URL(request.url)
  const path = url.pathname.substring(1)

  try {
    if (!path) return jsonError('No Filename', 406)

    return await image(path, event)
  } catch (err: any) {
    return jsonError(err.toString(), 500)
  }
}
