import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Target } from 'lucide-react'

const Hero = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Transformando</span>
                <span className="block text-cimientos-600">la primera</span>
                <span className="block text-primary-500">infancia</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Somos un colectivo de investigación multidisciplinar dedicado a la innovación en primera infancia y transformación social en Colombia y Latinoamérica.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 bg-cimientos-600 text-white font-semibold rounded-lg hover:bg-cimientos-700 transition-colors duration-200 group"
              >
                Conoce más
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/comunidad"
                className="inline-flex items-center px-8 py-4 border-2 border-cimientos-600 text-cimientos-600 font-semibold rounded-lg hover:bg-cimientos-50 transition-colors duration-200"
              >
                Nuestra comunidad
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Statistics Cards */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Red</h3>
                <p className="text-gray-600 text-sm">Multidisciplinar de investigadores/as</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Evidencia</h3>
                <p className="text-gray-600 text-sm">Investigación rigurosa y aplicada</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-cimientos-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-cimientos-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Impacto</h3>
                <p className="text-gray-600 text-sm">Transformación de políticas</p>
              </div>

              <div className="gradient-accent rounded-2xl p-6 shadow-lg mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Primera Infancia</h3>
                <p className="text-gray-700 text-sm">Enfoque en equidad y justicia social</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
