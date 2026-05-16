import {createClient} from '@sanity/client'
import fs from 'fs'

// To run this:
// 1. Get a Write Token from Sanity Manage (https://www.sanity.io/manage)
// 2. Run: SANITY_TOKEN=your_token node scripts/migrate.js

const token = process.env.SANITY_TOKEN

if (!token) {
  console.error('Please provide a SANITY_TOKEN environment variable')
  process.exit(1)
}

const client = createClient({
  projectId: 'xdij2q93',
  dataset: 'production',
  token: token,
  useCdn: false,
  apiVersion: '2024-03-16',
})

const data = JSON.parse(fs.readFileSync('./scripts/extracted_content.json', 'utf8'))

async function migrate() {
  console.log('Starting migration...')

  // 1. Migrate Homepage
  console.log('Migrating Homepage...')
  await client.createOrReplace({
    _id: 'homepage',
    _type: 'homepage',
    heroTitle: data.homepage.heroTitle,
    heroSubtitle: data.homepage.heroSubtitle,
    // Add other fields if needed
  })

  // 2. Migrate Services
  console.log('Migrating Services...')
  for (const svc of data.services) {
    await client.create({
      _type: 'service',
      title: svc.title,
      description: svc.description,
      slug: { _type: 'slug', current: svc.route },
      features: svc.features,
    })
  }

  // 3. Migrate Projects
  console.log('Migrating Projects...')
  for (const proj of data.projects) {
    await client.create({
      _type: 'project',
      title: proj.title,
      category: proj.category,
      slug: { _type: 'slug', current: proj.slug },
      // Note: Images need to be uploaded separately, this just sets the title/slug
    })
  }

  // 4. Migrate FAQs
  console.log('Migrating FAQs...')
  for (const faq of data.faqs) {
    await client.create({
      _type: 'faq',
      question: faq.q,
      answer: faq.a,
      category: faq.cat,
    })
  }

  // 5. Migrate Process Steps
  console.log('Migrating Process Steps...')
  for (const step of data.processSteps) {
    await client.create({
      _type: 'processStep',
      order: step.order,
      title: step.title,
      description: step.desc,
    })
  }

  console.log('Migration complete!')
}

migrate().catch(console.error)
