"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const currentDate = new Date().toLocaleDateString(
    language === "es" ? "es-ES" : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <div className="container mx-auto px-4 py-12 max-w-4xl relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 flex items-center gap-2"
          onClick={() => setLanguage(language === "es" ? "en" : "es")}>
          <Globe className="h-4 w-4" />
          {language === "es" ? "EN" : "ES"}
        </Button>

        {language === "es" ? (
          <div className="prose prose-invert prose-zinc lg:prose-lg mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-zinc-100">
              Política de Privacidad
            </h1>

            <p className="text-sm text-zinc-400 mb-8 text-center">
              Última actualización: {currentDate}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Introducción
              </h2>
              <p>
                Bienvenido a Plin. Nos comprometemos a proteger tu privacidad y
                a ser transparentes sobre cómo utilizamos tus datos. Esta
                política de privacidad explica cómo recopilamos, usamos y
                protegemos tu información cuando utilizas nuestra aplicación
                para consultar y convertir el dólar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Información que recopilamos
              </h2>
              <p>Podemos recopilar los siguientes tipos de información:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Datos de uso:</strong> Cómo usas la app, horarios de
                  consulta, monedas visualizadas, acciones frecuentes.
                </li>
                <li>
                  <strong>Preferencias del usuario:</strong> Configuraciones
                  como idioma, tema, notificaciones activadas o desactivadas.
                </li>
                <li>
                  <strong>Datos del dispositivo:</strong> Tipo de dispositivo,
                  sistema operativo, versión de la app.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Cómo utilizamos tu información
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Mejorar la precisión y velocidad de nuestras tasas de cambio.
                </li>
                <li>
                  Ofrecer notificaciones útiles como alertas de precio o
                  consejos de conversión.
                </li>
                <li>
                  Analizar patrones de uso para seguir optimizando la app.
                </li>
                <li>Detectar y prevenir usos indebidos de la aplicación.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Compartición de información
              </h2>
              <p>Solo compartimos datos cuando es estrictamente necesario:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Con servicios de análisis (anónimos) para mejorar el
                  rendimiento.
                </li>
                <li>Por obligaciones legales, si corresponde.</li>
              </ul>
              <p>Jamás vendemos tu información personal a terceros.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Cookies y tecnologías similares
              </h2>
              <p>
                Podemos usar tecnologías como almacenamiento local para guardar
                preferencias. No utilizamos cookies de seguimiento invasivas ni
                herramientas publicitarias de terceros sin consentimiento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Tus derechos
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Acceder y modificar tus preferencias desde la app.</li>
                <li>
                  Solicitar la eliminación de tus datos almacenados localmente.
                </li>
                <li>Desactivar el envío de notificaciones desde ajustes.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Seguridad de la información
              </h2>
              <p>
                Plin aplica buenas prácticas para proteger tu información,
                aunque ningún sistema es 100% infalible. Prometemos notificarte
                ante cualquier incidente relevante.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Menores de edad
              </h2>
              <p>
                Plin no está dirigida a menores de 13 años. No recopilamos
                información personal de menores de forma consciente. Si detectas
                un uso indebido, contáctanos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Cambios en esta política
              </h2>
              <p>
                Esta política puede actualizarse ocasionalmente. Te informaremos
                mediante la app sobre cualquier cambio importante.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Contacto
              </h2>
              <p>
                Para cualquier duda o comentario sobre esta política, escríbenos
                a:
              </p>
              <p className="mt-2">
                <strong>Correo electrónico:</strong> chiguiritoslabs@gmail.com
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <p className="text-center text-sm text-zinc-400">
                © {new Date().getFullYear()} Chiguritos Labs. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        ) : (
          <div className="prose prose-invert prose-zinc lg:prose-lg mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-center text-zinc-100">
              Privacy Policy
            </h1>

            <p className="text-sm text-zinc-400 mb-8 text-center">
              Last updated: {currentDate}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Introduction
              </h2>
              <p>
                Welcome to Plin. We are committed to protecting your privacy and
                being transparent about how we handle your data. This privacy
                policy explains how we collect, use, and safeguard your
                information when you use our application to monitor and convert
                USD in Venezuela.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Information We Collect
              </h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Usage Data:</strong> How you interact with the app,
                  consultation times, selected currencies, frequent actions.
                </li>
                <li>
                  <strong>User Preferences:</strong> Settings such as language,
                  theme, and notification preferences.
                </li>
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system, app version.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  To improve the accuracy and speed of our exchange rates.
                </li>
                <li>
                  To provide relevant alerts such as price notifications or
                  conversion tips.
                </li>
                <li>
                  To analyze usage patterns and enhance the app experience.
                </li>
                <li>To detect and prevent misuse of the application.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Information Sharing
              </h2>
              <p>We only share data when strictly necessary:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  With analytics providers (anonymized) to improve performance.
                </li>
                <li>To comply with legal obligations, if applicable.</li>
              </ul>
              <p>We never sell your personal information to third parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Cookies and Similar Technologies
              </h2>
              <p>
                We may use local storage or similar technologies to store your
                preferences. We do not use intrusive tracking cookies or
                third-party advertising tools without consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Your Rights
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and update your preferences through the app.</li>
                <li>Request deletion of your locally stored data.</li>
                <li>Disable notifications from the settings screen.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Data Security
              </h2>
              <p>
                Plin applies best practices to protect your data, though no
                system is completely secure. We will notify you of any relevant
                incident if it occurs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Children
              </h2>
              <p>
                Plin is not intended for children under the age of 13. We do not
                knowingly collect personal information from minors. If you
                believe we have collected such information, please contact us so
                we can delete it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Changes to This Policy
              </h2>
              <p>
                This policy may be updated occasionally. We will inform you via
                the app if any significant changes occur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-zinc-100">
                Contact
              </h2>
              <p>
                If you have any questions or concerns regarding this policy,
                please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> chiguiritoslabs@gmail.com
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <p className="text-center text-sm text-zinc-400">
                © {new Date().getFullYear()} Chiguritos Labs. All rights
                reserved.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
