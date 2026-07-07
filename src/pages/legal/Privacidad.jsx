import { useEffect } from 'react';
import logoBlanco from '../../assets/logo-wha-blanco.png';
import '../../styles/legal.css';

export default function Privacidad() {
  useEffect(() => { document.title = 'Política de Privacidad · World Holistic Alliance'; }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-in">
          <span className="hero-logo"><img src={logoBlanco} alt="WHA" /></span>
          <div className="eyebrow" style={{ marginTop: 18 }}>World Holistic Alliance</div>
          <h1>Política de Privacidad</h1>
          <p>Cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestro sitio o servicios.</p>
        </div>
      </section>

      <article className="doc">
        <p className="doc-intro">En World Holistic Alliance nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad detalla cómo recopilamos, usamos, almacenamos y protegemos tu información personal cuando utilizas nuestro sitio web o servicios.</p>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">A</span><h2>Recopilación de información</h2></div>
          <p>Al registrarte en nuestro sitio, adquirir un curso o membresía, recopilamos información personal como tu nombre, dirección de correo electrónico, información de pago y otros datos necesarios para ofrecerte nuestros servicios. Además, podemos recopilar información sobre tu actividad en el sitio mediante cookies y tecnologías similares para mejorar tu experiencia de usuario.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">B</span><h2>Uso de la información</h2></div>
          <p>La información recopilada se utilizará únicamente para los fines por los cuales fue proporcionada, tales como la gestión de tu cuenta, la entrega de cursos y servicios adquiridos, el envío de actualizaciones y promociones, y la personalización de tu experiencia en nuestro sitio. No compartimos tu información personal con terceros, excepto cuando sea necesario para procesar tus pagos, cumplir con requerimientos legales o para los servicios detallados a continuación:</p>
          <div className="doc-callout">
            <h3>Directorio de Terapeutas</h3>
            <p>Si te registras como terapeuta en nuestro directorio, comprendes y aceptas que la información proporcionada (incluyendo nombre, formación, especialidades, experiencia, biografía, datos de contacto y otros detalles relevantes) será publicada en nuestro sitio web y estará disponible públicamente para que cualquier visitante pueda consultarla. El propósito del directorio es brindar visibilidad profesional a los terapeutas.</p>
          </div>
          <div className="doc-callout">
            <h3>Certificados de Alumnos</h3>
            <p>Al comenzar una formación, los alumnos reciben un certificado digital personalizado de alumno regular, que incluye su nombre y el curso realizado. Si bien implementamos medidas técnicas para evitar que esta información sea indexada por motores de búsqueda, no podemos garantizar al 100% que dicha información no pueda ser detectada por terceros mediante medios ajenos a nuestro control.</p>
          </div>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">C</span><h2>Protección de datos</h2></div>
          <p>Implementamos medidas de seguridad razonables para proteger tu información personal de accesos no autorizados, alteraciones o divulgación. Utilizamos encriptación SSL en las transacciones de pago y garantizamos que tus datos sean almacenados de manera segura. Sin embargo, World Holistic Alliance no puede responsabilizarse por indexaciones accidentales realizadas por buscadores web ni por el uso que terceros puedan hacer de la información publicada voluntariamente en el directorio de terapeutas o en certificados digitales.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">D</span><h2>Derechos del usuario</h2></div>
          <p>Como usuario, tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. Si deseas retirar tu consentimiento para el uso de tus datos o si tienes preguntas sobre cómo manejamos tu información, puedes ponerte en contacto con nosotros a través de <a href="mailto:info@worldholisticalliance.org">info@worldholisticalliance.org</a>.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">E</span><h2>Cambios en la política</h2></div>
          <p>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio será notificado en esta página, por lo que te recomendamos revisarla periódicamente.</p>
          <p>Al continuar utilizando nuestro sitio, aceptas los términos descritos en esta Política de Privacidad.</p>
        </div>
      </article>
    </>
  );
}
