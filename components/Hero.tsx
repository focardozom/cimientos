import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col bg-white overflow-hidden">
      <div className="flex-grow flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
        <div className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              <span className="block text-brand-cyan">Transformando</span>
              <span className="block text-brand-yellow">la primera</span>
              <span className="block text-brand-pink">infancia</span>
            </h1>

            <p className="text-lg text-brand-brown/80 leading-relaxed max-w-xl">
              Somos un colectivo de investigación multidisciplinar dedicado a la innovación en primera infancia y transformación social en Colombia y Latinoamérica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-brown text-white font-semibold rounded-full hover:bg-brand-brown/90 transition-colors duration-200 group"
              >
                Conoce más
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/comunidad"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-brown text-brand-brown font-semibold rounded-full hover:bg-brand-cyan/15 transition-colors duration-200"
              >
                Nuestra comunidad
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/brand/logo-vertical-color.svg"
              alt="CIMIENTOS"
              width={1040}
              height={1040}
              priority
              className="w-[260px] md:w-[340px] lg:w-[420px] h-auto"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero
