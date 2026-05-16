import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'xdij2q93',
  dataset: 'production',
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-03-16', // use current date
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
