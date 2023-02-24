import { NextMiddleware, NextResponse } from 'next/server'

export const middleware: NextMiddleware = async (request, event) => {
  // const cache = await caches.open('cache:example')
  // const url = new URL('https://www.googleapis.com/identitytoolkit/v3/relyingparty/publicKeys')
  // let pubKeyRes = await cache.match(url)
  // if (!pubKeyRes) {
  //   console.log('cache NOT hit')
  //   pubKeyRes = await fetch(url)
  //   event.waitUntil(cache.put(url, pubKeyRes))
  // } else {
  //   console.log('cache hit')
  // }

  const startTime = Date.now();
  const pubLeuRes = await fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/publicKeys', { next: { revalidate: 60 } })
  const endTime = Date.now();
  console.log(endTime - startTime, "ms");

  return NextResponse.next()
}