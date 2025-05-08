"use client"

import { useState } from "react"
import Link from "next/link"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
  const [language, setLanguage] = useState<"es" | "en">("es")

  const currentDate = new Date().toLocaleDateString(language === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="container mx-auto px-4 py-12 max-w-4xl relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 flex items-center gap-2"
          onClick={() => setLanguage(language === "es" ? "en" : "es")}
        >
          <Globe className="h-4 w-4" />
          {language === "es" ? "EN" : "ES"}
        </Button>

        {language === "es" ? (
          <div className="prose prose-invert prose-zinc lg:prose-lg mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-zinc-100">Políticas de Privacidad</h1>

            <p className="text-sm text-zinc-400 mb-8 text-center">Última actualización: {currentDate}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Introducción</h2>
              <p>
                Bienvenido a nuestra aplicación de reseñas de películas. Nos comprometemos a proteger tu privacidad y a
                ser transparentes sobre cómo utilizamos tus datos. Esta política de privacidad explica cómo recopilamos,
                utilizamos y protegemos tu información cuando utilizas nuestra aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Información que recopilamos</h2>
              <p>Podemos recopilar los siguientes tipos de información:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Información de registro:</strong> Cuando creas una cuenta, podemos recopilar tu nombre,
                  dirección de correo electrónico, nombre de usuario y contraseña.
                </li>
                <li>
                  <strong>Información de perfil:</strong> Puedes proporcionar información adicional como foto de perfil,
                  géneros de películas favoritos y biografía.
                </li>
                <li>
                  <strong>Contenido generado por el usuario:</strong> Reseñas, calificaciones, comentarios y cualquier
                  otro contenido que publiques en la aplicación.
                </li>
                <li>
                  <strong>Información de uso:</strong> Datos sobre cómo interactúas con nuestra aplicación, incluyendo
                  películas vistas, búsquedas y tiempo de uso.
                </li>
                <li>
                  <strong>Información del dispositivo:</strong> Tipo de dispositivo, sistema operativo, versión de la
                  aplicación e identificadores únicos.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Cómo utilizamos tu información</h2>
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Proporcionar, mantener y mejorar nuestra aplicación.</li>
                <li>Personalizar tu experiencia y recomendarte películas que puedan interesarte.</li>
                <li>Procesar y gestionar tus reseñas, calificaciones y comentarios.</li>
                <li>Comunicarnos contigo sobre actualizaciones, nuevas funciones o promociones.</li>
                <li>Analizar tendencias y patrones de uso para mejorar la aplicación.</li>
                <li>Detectar, investigar y prevenir actividades fraudulentas o no autorizadas.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Compartición de información</h2>
              <p>Podemos compartir tu información en las siguientes circunstancias:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Con otros usuarios:</strong> Tu nombre de usuario, foto de perfil y contenido que publiques
                  serán visibles para otros usuarios de la aplicación.
                </li>
                <li>
                  <strong>Con proveedores de servicios:</strong> Trabajamos con terceros que nos ayudan a operar,
                  mejorar y mantener nuestra aplicación.
                </li>
                <li>
                  <strong>Por motivos legales:</strong> Si es necesario para cumplir con la ley, proteger nuestros
                  derechos o la seguridad de nuestros usuarios.
                </li>
              </ul>
              <p>No vendemos tu información personal a terceros.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Cookies y tecnologías similares</h2>
              <p>
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, recordar tus preferencias y
                entender cómo utilizas nuestra aplicación. Puedes gestionar tus preferencias de cookies a través de la
                configuración de tu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Tus derechos y opciones</h2>
              <p>Tienes ciertos derechos relacionados con tu información personal, incluyendo:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Acceder y actualizar tu información de perfil.</li>
                <li>Solicitar una copia de los datos que tenemos sobre ti.</li>
                <li>Solicitar la eliminación de tu cuenta y datos personales.</li>
                <li>Optar por no recibir comunicaciones promocionales.</li>
                <li>Presentar una queja ante una autoridad de protección de datos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Seguridad de datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso
                no autorizado, pérdida o alteración. Sin embargo, ningún sistema es completamente seguro, por lo que no
                podemos garantizar la seguridad absoluta de tus datos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Menores de edad</h2>
              <p>
                Nuestra aplicación no está dirigida a menores de 13 años. No recopilamos intencionalmente información de
                niños menores de 13 años. Si crees que hemos recopilado información de un menor de 13 años, por favor
                contáctanos para que podamos eliminarla.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Cambios en esta política</h2>
              <p>
                Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios
                significativos mediante un aviso en la aplicación o por correo electrónico. Te recomendamos revisar esta
                política regularmente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Contacto</h2>
              <p>
                Si tienes preguntas o inquietudes sobre esta política de privacidad o nuestras prácticas de datos, por
                favor contáctanos en:
              </p>
              <p className="mt-2">
                <strong>Correo electrónico:</strong> chiguiritoslabs@gmail.com
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <p className="text-center text-sm text-zinc-400">
                © {new Date().getFullYear()} Chiguritos Labs. Todos los derechos reservados.
              </p>
            </div>
          </div>
        ) : (
          <div className="prose prose-invert prose-zinc lg:prose-lg mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-zinc-100">Privacy Policy</h1>

            <p className="text-sm text-zinc-400 mb-8 text-center">Last updated: {currentDate}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Introduction</h2>
              <p>
                Welcome to our movie review application. We are committed to protecting your privacy and being
                transparent about how we use your data. This privacy policy explains how we collect, use, and protect
                your information when you use our application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Registration Information:</strong> When you create an account, we may collect your name, email
                  address, username, and password.
                </li>
                <li>
                  <strong>Profile Information:</strong> You may provide additional information such as profile picture,
                  favorite movie genres, and biography.
                </li>
                <li>
                  <strong>User-Generated Content:</strong> Reviews, ratings, comments, and any other content you post on
                  the application.
                </li>
                <li>
                  <strong>Usage Information:</strong> Data about how you interact with our application, including movies
                  viewed, searches, and usage time.
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating system, application version, and unique
                  identifiers.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide, maintain, and improve our application.</li>
                <li>Personalize your experience and recommend movies that may interest you.</li>
                <li>Process and manage your reviews, ratings, and comments.</li>
                <li>Communicate with you about updates, new features, or promotions.</li>
                <li>Analyze trends and usage patterns to improve the application.</li>
                <li>Detect, investigate, and prevent fraudulent or unauthorized activities.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Information Sharing</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>With Other Users:</strong> Your username, profile picture, and content you post will be
                  visible to other users of the application.
                </li>
                <li>
                  <strong>With Service Providers:</strong> We work with third parties that help us operate, improve, and
                  maintain our application.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> If necessary to comply with the law, protect our rights, or the
                  safety of our users.
                </li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance your experience, remember your preferences, and
                understand how you use our application. You can manage your cookie preferences through your browser
                settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Your Rights and Choices</h2>
              <p>You have certain rights related to your personal information, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and update your profile information.</li>
                <li>Request a copy of the data we have about you.</li>
                <li>Request deletion of your account and personal data.</li>
                <li>Opt out of receiving promotional communications.</li>
                <li>File a complaint with a data protection authority.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Data Security</h2>
              <p>
                We implement technical and organizational security measures to protect your information against
                unauthorized access, loss, or alteration. However, no system is completely secure, so we cannot
                guarantee the absolute security of your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Children</h2>
              <p>
                Our application is not directed at children under 13 years of age. We do not knowingly collect
                information from children under 13. If you believe we have collected information from a child under 13,
                please contact us so we can delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Changes to This Policy</h2>
              <p>
                We may update this privacy policy periodically. We will notify you of significant changes through a
                notice in the application or by email. We recommend reviewing this policy regularly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">Contact</h2>
              <p>
                If you have questions or concerns about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> chiguiritoslabs@gmail.com
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <p className="text-center text-sm text-zinc-400">
                © {new Date().getFullYear()} Chiguritos Labs. All rights reserved.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
