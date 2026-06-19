import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer className="mt-10 w-full">
      <div className="flex justify-center">
        <Card className="mx-5 w-full max-w-6xl">
          <CardContent className="py-6">
            <p className="w-full text-center text-sm text-gray-400">
              © 2026 Copyright <span className="font-bold">barbershoop</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </footer>
  )
}

export default Footer
