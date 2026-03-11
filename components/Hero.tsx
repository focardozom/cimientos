import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col bg-white overflow-hidden">
      <div className="flex-grow flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal md:leading-loose" style={{ fontFamily: "'FreshMango', sans-serif" }}>
              <span className="block mb-0 md:mb-2 text-cimientos-400">Transformando</span>
              <span className="block mb-0 md:mb-2 text-primary-400">la primera</span>
              <span className="block text-accent-400">infancia</span>
            </h1>

            <p className="text-sm text-gray-600 leading-normal max-w-xl">
              Somos un colectivo de investigación multidisciplinar dedicado a la innovación en primera infancia y transformación social en Colombia y Latinoamérica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-cimientos-400 text-white font-semibold rounded-lg hover:bg-cimientos-500 transition-colors duration-200 group"
              >
                Conoce más
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/comunidad"
                className="inline-flex items-center px-8 py-4 border-2 border-cimientos-400 text-cimientos-400 font-semibold rounded-lg hover:bg-cimientos-50 transition-colors duration-200"
              >
                Nuestra comunidad
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image src="/logo.svg" alt="CIMIENTOS" width={500} height={500} className="w-[280px] md:w-[350px] lg:w-[450px] h-auto" />
          </div>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Hero
