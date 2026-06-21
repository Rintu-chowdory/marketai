export default function Impressum() {
  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg,#a78bfa,#4f46e5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '16px'
  }

  const sectionTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '16px',
    borderBottom: '1px solid rgba(124,58,237,0.2)',
    paddingBottom: '8px'
  }

  const textStyle = {
    color: '#c7d2e0',
    lineHeight: '1.8'
  }

  const linkStyle = {
    color: '#a78bfa',
    textDecoration: 'none',
    cursor: 'pointer'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050508', padding: '80px 24px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <h1 style={headingStyle}>Impressum</h1>
          <p style={{ ...textStyle, fontSize: '14px' }}>Angaben gemäß § 5 TMG (Telemediengesetz)</p>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Anbieter */}
          <section>
            <h2 style={sectionTitleStyle}>Anbieter</h2>
            <div style={{ ...textStyle, space: '8px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>MarketAI</p>
              <p style={{ marginBottom: '8px' }}>
                Musterstraße 1<br />
                12345 Berlin<br />
                Deutschland
              </p>
              <p style={{ marginTop: '16px' }}>
                <strong style={{ color: 'white' }}>Kontakt</strong><br />
                E-Mail: <a href="mailto:kontakt@marketai.de" style={linkStyle}>kontakt@marketai.de</a><br />
                Telefon: auf Anfrage
              </p>
            </div>
          </section>

          {/* Verantwortlich */}
          <section>
            <h2 style={sectionTitleStyle}>Verantwortlich für den Inhalt</h2>
            <p style={textStyle}>
              Verantwortlich für den Inhalt dieser Website nach § 55 Abs. 2 RStV (Rundfunkstaatsvertrag):
            </p>
            <p style={{ ...textStyle, marginTop: '16px' }}>
              <strong style={{ color: 'white' }}>MarketAI</strong><br />
              Musterstraße 1<br />
              12345 Berlin<br />
              Deutschland
            </p>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 style={sectionTitleStyle}>Haftungsausschluss</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <h3 style={{ color: 'white', fontWeight: 'bold', marginBottom: '8px' }}>Haftung für Inhalte</h3>
                <p style={textStyle}>
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
                  Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 des TMG sind wir als 
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                  Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
                  Informationen bleiben hiervon unberührt.
                </p>
              </div>

              <div>
                <h3 style={{ color: 'white', fontWeight: 'bold', marginBottom: '8px' }}>Haftung für Links</h3>
                <p style={textStyle}>
                  Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                  Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                  Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. 
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                  Links umgehend entfernen.
                </p>
              </div>
            </div>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 style={sectionTitleStyle}>Urheberrecht</h2>
            <p style={textStyle}>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder 
              Urhebers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </section>

          {/* KI-Hinweis */}
          <section>
            <h2 style={sectionTitleStyle}>Künstliche Intelligenz</h2>
            <p style={textStyle}>
              Diese Website verwendet künstliche Intelligenz und KI-generierte Inhalte zur Unterstützung unserer 
              Services und Produktbeschreibungen. KI-generierte oder KI-unterstützte Inhalte sind entsprechend gekennzeichnet. 
              Alle Informationen werden von unserem Team überprüft, bevor sie veröffentlicht werden.
            </p>
          </section>

          {/* Datenschutz */}
          <section>
            <h2 style={sectionTitleStyle}>Datenschutz</h2>
            <p style={textStyle}>
              Informationen zum Datenschutz finden Sie in unserer <a href="/datenschutz" style={linkStyle}>Datenschutzerklärung</a>.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '64px', paddingTop: '32px', borderTop: '1px solid #334155', textAlign: 'center', color: '#64748b', fontSize: '12px' }}>
          <p>Impressum - MarketAI</p>
          <p style={{ marginTop: '8px' }}>Letzte Aktualisierung: Juni 2026</p>
        </div>
      </div>
    </div>
  )
}
