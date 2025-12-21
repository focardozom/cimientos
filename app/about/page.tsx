import { Target, Eye, Heart, Users, BookOpen, Globe, Lightbulb, Scale } from 'lucide-react'

export default function AboutPage() {
  const objectives = [
    {
      icon: Users,
      title: "Visibilizar investigadores",
      description: "Amplificar la producción de conocimiento de una nueva generación de investigadoras/es."
    },
    {
      icon: Lightbulb,
      title: "Fomentar colaboración",
      description: "Promover la colaboración interdisciplinaria y el intercambio de metodologías innovadoras."
    },
    {
      icon: Scale,
      title: "Investigación equitativa",
      description: "Impulsar investigaciones sensibles al territorio, la equidad y la justicia social."
    },
    {
      icon: Globe,
      title: "Plataforma abierta",
      description: "Crear un espacio abierto para difundir investigaciones y propuestas."
    },
    {
      icon: BookOpen,
      title: "Incidencia política",
      description: "Influir en políticas públicas y programación con evidencia rigurosa."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-cimientos-600">CIMIENTOS</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Somos un <strong>Colectivo de Investigación Multidisciplinar sobre Innovación en Niñez y Transformación Social</strong>, 
              comprometidos con la primera infancia en Colombia y Latinoamérica.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cimientos-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-cimientos-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Visibilizar la investigación sobre la primera infancia en Colombia desde un enfoque multidisciplinario, 
                contribuyendo, desde la evidencia, a la equidad y a la transformación de políticas y programas.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-cimientos-50 to-primary-50 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cimientos-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Equidad</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Evidencia</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Colaboración</h3>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cimientos-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Transformación</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Objetivos Específicos
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nuestros compromisos para generar impacto real en la primera infancia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-cimientos-100 rounded-lg flex items-center justify-center mb-4">
                  <objective.icon className="w-6 h-6 text-cimientos-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {objective.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Visión a Futuro</h2>
            </div>
            
            <div className="bg-gradient-to-r from-cimientos-50 via-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-xl text-gray-800 leading-relaxed mb-6">
                Ser referentes <strong>visibles y legítimos</strong> en la academia, la práctica y la política pública 
                en Colombia y Latinoamérica por la calidad, el rigor y el compromiso con la equidad.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cimientos-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Academia</h3>
                  <p className="text-sm text-gray-600">Investigación rigurosa y metodologías innovadoras</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Práctica</h3>
                  <p className="text-sm text-gray-600">Aplicación directa en programas y servicios</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Política</h3>
                  <p className="text-sm text-gray-600">Incidencia en decisiones de política pública</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestro Alcance
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Trabajamos con un enfoque regional, conectando investigadores y experiencias 
              en Colombia y toda Latinoamérica
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-cimientos-600 mb-4">Colombia</h3>
                <p className="text-gray-700">
                  Base principal de nuestras investigaciones, con enfoque en contextos territoriales 
                  diversos y realidades locales específicas.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-primary-600 mb-4">Latinoamérica</h3>
                <p className="text-gray-700">
                  Red de colaboración regional para intercambiar experiencias, metodologías 
                  y generar conocimiento conjunto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
