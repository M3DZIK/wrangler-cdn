import { jsonError } from "../jsonError"

export async function image(id: string, event: FetchEvent): Promise<Response> {
  const url = `https://i.imgur.com/${id}`
  const cache = caches.default

  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
    }
  }

  let response = await cache.match(url)

  if (!response) {
    const imageResponse = await fetch(url, options)

    const headers = {
      'cache-control': 'public, max-age=31536000'
    }

    const cloned = imageResponse.clone()

    response = new Response(cloned.body, {
      ...cloned,
      headers
    })

    const type = imageResponse.headers.get('content-type')

    if (
      type && imageResponse.status >= 200 &&
      imageResponse.status <= 300 &&  imageResponse.redirected == false
    ) {
      event.waitUntil(cache.put(url, imageResponse.clone()))
    } else {
      return jsonError('Not found', 404)
    }
  }

  return response
}
