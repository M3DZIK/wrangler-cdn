import config from '../config'
import { jsonError } from '../jsonError'

export async function image(id: string, event: FetchEvent): Promise<Response> {
  const url = `https://i.imgur.com/${id}`
  const cache = caches.default

  const options = {
    headers: {
      'User-Agent': config.userAgent,
    },
  }

  let response = await cache.match(url)

  if (!response) {
    const imageResponse = await fetch(url, options)

    const headers = {
      'cache-control': 'public, max-age=31536000',
    }

    const cloned = imageResponse.clone()

    response = new Response(cloned.body, {
      ...cloned,
      headers,
    })

    const type = imageResponse.headers.get('content-type')

    if (
      type &&
      imageResponse.status >= 200 &&
      imageResponse.status <= 300 &&
      imageResponse.redirected == false // Imgur redirect on 404 error
    ) {
      event.waitUntil(cache.put(url, imageResponse.clone()))
    } else {
      return jsonError('Not found', 404)
    }
  }

  return response
}
