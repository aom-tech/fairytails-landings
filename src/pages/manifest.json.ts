import type { APIRoute } from 'astro'
import { getImage } from 'astro:assets'
import favicon from '../assets/images/favicon.png'

const faviconPngSizes = [192, 512]

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: 'png'
      })
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`
      }
    })
  )

  const manifest = {
    name: 'Создай сказку за 1 минуту. Онлайн сервис для вас и вашего ребенка. Бесконечные истории с невороятными иллюстрациями.',
    description: 'Создай сказку за 1 минуту. Онлайн сервис для вас и вашего ребенка. Бесконечные истории с невороятными иллюстрациями.',
    start_url: '/',
    display: 'standalone',
    id: 'enchantstory-id',
    icons
  }

  return new Response(JSON.stringify(manifest))
}