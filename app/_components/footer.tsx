import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer className="mt-10 flex w-full justify-center">
      <Card className="w-full max-w-6xl">
        <CardContent className="py-6">
          <p className="text-center text-sm text-gray-400">
            © 2026 Copyright <span className="font-bold">Movo Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
