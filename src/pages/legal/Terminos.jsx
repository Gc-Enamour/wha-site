import { useEffect } from 'react';
import logoBlanco from '../../assets/logo-wha-blanco.png';
import '../../styles/legal.css';

export default function Terminos() {
  useEffect(() => { document.title = 'Términos y Condiciones · World Holistic Alliance'; }, []);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-in">
          <span className="hero-logo"><img src={logoBlanco} alt="WHA" /></span>
          <div className="eyebrow" style={{ marginTop: 18 }}>World Holistic Alliance</div>
          <h1>Términos y Condiciones</h1>
          <p>Las condiciones de uso del sitio y de los servicios de WHA. Al utilizar este sitio, aceptas estos términos.</p>
        </div>
      </section>

      <article className="doc">
        <p className="doc-intro">Si no estás de acuerdo con los siguientes «Términos y Condiciones» aquí presentados, por favor abandona el sitio inmediatamente.</p>

        <div className="doc-sec">
          <p>Usar este sitio implica aceptar sus condiciones de uso. Si no estás de acuerdo, por favor no lo utilices.</p>
          <p>Las condiciones pueden ser actualizadas sin previo aviso. El uso del sitio supone la aceptación de dichos términos y sus actualizaciones.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">A</span><h2>Únicamente para adultos</h2></div>
          <p>El presente sitio es sólo para mayores de 18 años de edad. Si eres menor no puedes acceder al mismo, ni suscribirte a nuestro boletín informativo.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">B</span><h2>Nota del copyright</h2></div>
          <p>El contenido del sitio, diseño, información, programación, textos y manuales están protegidos por derechos de autor, y reservados, no pudiendo copiarse su contenido sin nuestra autorización previa por escrito.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">C</span><h2>Aviso legal</h2></div>
          <p>La información del presente sitio se brinda sin ningún tipo de garantía en lo que a productos y servicios se refiere.</p>
          <p>No se garantiza que su contenido sea exacto, o esté disponible en cualquier momento, o que contenga errores involuntarios o virus.</p>
          <p>Su uso es de tu exclusiva responsabilidad; el usuario acepta que el mismo no se basa en garantía alguna. Debido a que algunas jurisdicciones no permiten la exclusión o limitación de daños, nuestra responsabilidad se limita a la medida exigida por la ley.</p>
          <p>Los propietarios, empleados o contratistas no son responsables de algún daño directo, indirecto, punitivo, incidental, especial o consecuente que resulte del uso de la información o servicio o producto recibido a través del mismo.</p>
          <p>El contenido del presente sitio, blog y formaciones online no puede ser considerado como un consejo médico. Ante cualquier duda debes consultar a un médico o profesional calificado ante la información recibida, ya sea por este sitio o libro, o cualquier otro. Los resultados dependen de la correcta aplicación del método descrito, como de otros factores circunstanciales. No podemos garantizar resultados específicos.</p>
          <p>El editor y autor del sitio han tratado de verificar la información, pero no asumen responsabilidad por errores u omisiones, o la interpretación del contenido de este sitio web.</p>
          <p>Aplica tu criterio. El autor no es médico, es un investigador del tema, que brinda la información recopilada para fines informativos y educativos. Si padeces algún síntoma fuera de lo normal o tu salud se encuentra deteriorada, consulta de inmediato al médico.</p>
          <p>Las certificaciones y consejos no son un sustituto de la atención médica, respecto al deterioro o mejora de tu salud. La referencia a productos de marcas reconocidas no es garantía.</p>
          <p>Ten en cuenta que si bien la información brindada en nuestro sitio es útil tanto para hombres como mujeres, las mujeres embarazadas, las que están amamantando o buscan concebir, deben consultar al médico antes de realizar cualquiera de las Terapias.</p>
          <p>Debido a que cada persona es distinta, los resultados pueden variar, de acuerdo a la química del cuerpo y al nivel de seguimiento del método a la hora de aplicar las prácticas para conseguir mejorar tu salud.</p>
          <p>El autor y editor del presente contenido han puesto su mayor dedicación en la preparación y desarrollo del mismo. La información es a efectos educativos, no constituye representación o garantía de la exactitud, aplicabilidad o adecuación de los contenidos expuestos; la aplicación práctica de los mismos es responsabilidad del usuario.</p>
          <p>El presente producto NO GARANTIZA sus resultados; las técnicas e ideas expuestas NO deben interpretarse como una promesa o GARANTÍA DE PREVENCIÓN para el mejoramiento o deterioro de tu salud.</p>
          <p>Tu nivel de éxito depende del tiempo que le dediques a las habilidades presentadas en las distintas formaciones; como estos factores varían de un individuo a otro, NO PODEMOS GARANTIZAR TU ÉXITO, NI SOMOS RESPONSABLES DE LAS ACCIONES PROVENIENTES DE SU APLICACIÓN.</p>
          <p>MUCHOS FACTORES SON IMPORTANTES EN LA OBTENCIÓN DE RESULTADOS REALES, PERO NO DAN GARANTÍA DE QUE TODOS PUEDAN ALCANZAR LOS RESULTADOS DESEADOS, A TRAVÉS DE LAS TÉCNICAS EXPUESTAS EN ESTE MATERIAL.</p>
          <p>El autor y editor no serán responsables del daño directo o indirecto, punitivo, especial, incidental o de otra índole, que surja del uso de este material que se proporciona sin garantías.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">D</span><h2>Membresías, avales y certificados</h2></div>
          <p>WHA ofrece distintos servicios de membresía y aval, entre ellos el Aval Terapeuta WHA, la Certificación T200 y el Aval Maestro/Centro Holístico. Cada servicio se rige por las condiciones y el alcance descritos en su página específica.</p>
          <div className="doc-callout">
            <h3>Aval Maestro/Centro Holístico y certificados de alumnos</h3>
            <p>El Aval Maestro/Centro Holístico incluye una cantidad determinada de avales o certificados mensuales para los alumnos certificados por el maestro o centro. En caso de requerir un volumen mayor, podrán adquirirse paquetes adicionales de cupos, que podrán utilizarse hasta la renovación del cupo mensual incluido.</p>
            <p>Los valores de las membresías, avales y paquetes de certificados pueden variar en el tiempo sin previo aviso. El uso del servicio supone la aceptación de las condiciones y precios vigentes al momento de la contratación o renovación.</p>
          </div>
          <p>WHA verifica la documentación de formación presentada y revisa los contenidos que el maestro o centro desarrolla en sus formaciones. Sin embargo, WHA no supervisa ni garantiza la calidad de atención, la metodología o los resultados de la labor de cada terapeuta certificado por dichos maestros o centros. La responsabilidad sobre la práctica profesional recae en cada terapeuta.</p>
        </div>

        <div className="doc-sec">
          <div className="doc-sec-h"><span className="doc-sec-tag">E</span><h2>Identificación del responsable del sitio</h2></div>
          <p>El presente sitio web es operado por:</p>
          <div className="doc-responsable">
            <p className="name">World Holistic Alliance</p>
            <p>Correo electrónico de contacto: <a href="mailto:info@worldholisticalliance.org">info@worldholisticalliance.org</a></p>
          </div>
        </div>
      </article>
    </>
  );
}
