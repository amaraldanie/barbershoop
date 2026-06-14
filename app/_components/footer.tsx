import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer className="w-full">
      <Card>
        <CardContent className="flex items-center justify-center px-5 py-6">
          <p className="text-center text-sm text-gray-400">
            © 2026 Copyright <span className="font-bold">Movo Barber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
