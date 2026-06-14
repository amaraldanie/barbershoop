import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer className="mt-10 flex w-full justify-center">
      <div className="w-full max-w-6xl">
        <Card>
          <CardContent className="flex justify-center py-6">
            <p className="w-full text-center text-sm text-gray-400">
              © 2026 Copyright <span className="font-bold">Movo Barber</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </footer>
  )
}

export default Footer
