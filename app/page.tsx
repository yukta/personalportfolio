import { ResumeSite } from '@/components/resume-site'

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abhay Raj Malhotra',
  alternateName: ['Abhay', 'Abhay Malhotra'],
  jobTitle: 'Senior Software Engineer and Software Architect',
  description: 'Senior software engineer and software architect specializing in backend engineering, cloud architecture, distributed systems and AI.',
  email: 'abhayraj.malhotra@gmail.com',
  sameAs: ['https://www.linkedin.com/in/abhayrajmalhotra/'],
  knowsAbout: ['Java', 'Spring Boot', 'AWS', 'Kubernetes', 'Distributed Systems', 'Artificial Intelligence'],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <ResumeSite />
    </>
  )
}
