import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-primary">
      <div className="container text-center max-w-xl py-32">
        <p className="text-7xl font-extrabold text-accent/20 mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Page not found</h1>
        <p className="text-muted mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button to="/" variant="primary">Back to Home</Button>
      </div>
    </section>
  )
}
