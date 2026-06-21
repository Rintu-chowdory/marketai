export default function Datenschutz() {
  const sectionStyle = {
    marginBottom: '48px',
  }

  const badgeStyle = (number) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
    color: 'white',
    fontWeight: '700',
    fontSize: '14px',
    marginRight: '12px',
    minWidth: '32px',
  })

  const headingStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
    marginBottom: '16px',
  }

  const textStyle = {
    color: '#cbd5e1',
    fontSize: '16px',
    lineHeight: '1.8',
    marginBottom: '12px',
  }

  const listStyle = {
    color: '#cbd5e1',
    fontSize: '16px',
    lineHeight: '1.8',
    marginLeft: '20px',
    marginBottom: '12px',
  }

  return (
    <main style={{ minHeight: '100vh', background: '#050508', paddingTop: '120px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', color: 'white', marginBottom: '16px' }}>
            Datenschutz
          </h1>
          <p style={{ fontSize: '18px', color: '#94a3b8' }}>
            Datenschutzerklarung fur MarketAI
          </p>
        </div>

        {/* 1. Verantwortlicher */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('1')}>1</span>
            Verantwortlicher fur die Datenverarbeitung
          </div>
          <p style={textStyle}>
            MarketAI ist ein KI-gestütztes Marketing-Plattform-SaaS-Produkt. Der Verantwortliche für die Verarbeitung personenbezogener Daten ist:
          </p>
          <p style={{ ...textStyle, fontWeight: '600', color: 'white' }}>
            MarketAI<br />
            Email: privacy@marketai.io<br />
            Web: www.marketai.io
          </p>
        </section>

        {/* 2. Datenerhebung */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('2')}>2</span>
            Datenerhebung und Verarbeitung
          </div>
          <p style={textStyle}>
            MarketAI verarbeitet die folgenden personenbezogenen Daten:
          </p>
          <ul>
            <li style={listStyle}>
              <strong>Nutzerdaten:</strong> E-Mail-Adresse, Name, Unternehmen, Telefonnummer (falls angegeben)
            </li>
            <li style={listStyle}>
              <strong>Verwendungsdaten:</strong> Cookies, IP-Adresse, Browser-Typ, Besuchte Seiten, Zeitstempel
            </li>
            <li style={listStyle}>
              <strong>Marketing-Daten:</strong> Daten, die Sie über die Plattform hochladen, einschließlich Kundendaten für Marketingzwecke
            </li>
            <li style={listStyle}>
              <strong>KI-Verarbeitungsdaten:</strong> Inhalte, die Sie zur KI-gestützten Content-Generierung einreichen
            </li>
          </ul>
        </section>

        {/* 3. Rechtsgrundlage */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('3')}>3</span>
            Rechtsgrundlage der Verarbeitung
          </div>
          <p style={textStyle}>
            Die Verarbeitung personenbezogener Daten erfolgt auf Basis:
          </p>
          <ul>
            <li style={listStyle}>
              <strong>Artikel 6 Abs. 1 lit. a DSGVO:</strong> Ihre ausdrückliche Einwilligung
            </li>
            <li style={listStyle}>
              <strong>Artikel 6 Abs. 1 lit. b DSGVO:</strong> Erforderlichkeit zur Erfüllung eines Vertrags
            </li>
            <li style={listStyle}>
              <strong>Artikel 6 Abs. 1 lit. f DSGVO:</strong> Berechtigte Interessen von MarketAI
            </li>
          </ul>
        </section>

        {/* 4. Google OAuth */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('4')}>4</span>
            Google OAuth und Authentifizierung
          </div>
          <p style={textStyle}>
            MarketAI nutzt Google OAuth 2.0 für die Benutzerauthentifizierung. Wenn Sie sich mit Ihrem Google-Konto anmelden:
          </p>
          <ul>
            <li style={listStyle}>
              Ihre Google-ID und E-Mail-Adresse werden an MarketAI übermittelt
            </li>
            <li style={listStyle}>
              Google verarbeitet Ihre Daten gemäß der Google Privacy Policy
            </li>
            <li style={listStyle}>
              MarketAI speichert nur notwendige Authentifizierungsdaten
            </li>
            <li style={listStyle}>
              Sie können die Berechtigung jederzeit in Ihren Google-Kontoeinstellungen widerrufen
            </li>
          </ul>
          <p style={textStyle}>
            Weitere Informationen: <a href="https://policies.google.com/privacy" style={{ color: '#a78bfa', textDecoration: 'none' }}>Google Privacy Policy</a>
          </p>
        </section>

        {/* 5. KI-Verarbeitung */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('5')}>5</span>
            KI-gestützte Inhaltsverarbeitung
          </div>
          <p style={textStyle}>
            MarketAI nutzt künstliche Intelligenz zur Content-Generierung, Analysen und Optimierung:
          </p>
          <ul>
            <li style={listStyle}>
              Ihre Eingaben werden verarbeitet, um KI-gestützte Marketing-Inhalte zu generieren
            </li>
            <li style={listStyle}>
              Diese Daten werden in unseren sicheren Systemen gespeichert
            </li>
            <li style={listStyle}>
              Wir verwenden Ihre Daten nicht zur Verbesserung anderer Modelle ohne ausdrückliche Zustimmung
            </li>
            <li style={listStyle}>
              Die KI-Verarbeitung erfolgt auf deutschen Servern und entspricht DSGVO-Standards
            </li>
          </ul>
        </section>

        {/* 6. Datenspeicherung und Sicherheit */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('6')}>6</span>
            Datenspeicherung und Sicherheit
          </div>
          <p style={textStyle}>
            Ihre Daten werden sicher auf Servern in Deutschland gespeichert und durch folgende Maßnahmen geschützt:
          </p>
          <ul>
            <li style={listStyle}>
              SSL/TLS-Verschlüsselung aller Übertragungen
            </li>
            <li style={listStyle}>
              Regelmäßige Sicherheitsaudits und Penetrationstests
            </li>
            <li style={listStyle}>
              Zugriffskontrollen und Authentifizierung
            </li>
            <li style={listStyle}>
              Datensicherung und Notfallvorkehrungen
            </li>
          </ul>
        </section>

        {/* 7. Datenfreigabe und Dritte */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('7')}>7</span>
            Weitergabe an Dritte
          </div>
          <p style={textStyle}>
            MarketAI gibt Ihre Daten nicht an Dritte weiter, außer wenn:
          </p>
          <ul>
            <li style={listStyle}>
              Sie ausdrücklich zustimmen
            </li>
            <li style={listStyle}>
              Gesetzliche Verpflichtungen dies erfordern
            </li>
            <li style={listStyle}>
              Vertragspartner beteiligt sind (unter Einhaltung von Datenschutzverträgen)
            </li>
          </ul>
          <p style={textStyle}>
            Wir arbeiten mit vertrauenswürdigen Service-Providern zusammen, die unseren Datenschutzstandards entsprechen.
          </p>
        </section>

        {/* 8. Ihre Rechte */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('8')}>8</span>
            Ihre Rechte gemäß DSGVO
          </div>
          <p style={textStyle}>
            Sie haben die folgenden Rechte:
          </p>
          <ul>
            <li style={listStyle}>
              <strong>Auskunftsrecht:</strong> Einsicht in Ihre gespeicherten personenbezogenen Daten
            </li>
            <li style={listStyle}>
              <strong>Berichtigungsrecht:</strong> Korrektur unrichtiger oder unvollständiger Daten
            </li>
            <li style={listStyle}>
              <strong>Löschungsrecht:</strong> Löschung Ihrer Daten (unter Bedingungen)
            </li>
            <li style={listStyle}>
              <strong>Einschränkungsrecht:</strong> Einschränkung der Datenverarbeitung
            </li>
            <li style={listStyle}>
              <strong>Datenportabilität:</strong> Erhalt Ihrer Daten in strukturierter, gängiger Form
            </li>
            <li style={listStyle}>
              <strong>Widerspruchsrecht:</strong> Widerspruch gegen bestimmte Verarbeitungen
            </li>
          </ul>
          <p style={textStyle}>
            Um Ihre Rechte auszuüben, kontaktieren Sie uns unter <strong>privacy@marketai.io</strong>.
          </p>
        </section>

        {/* 9. Cookies */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('9')}>9</span>
            Cookies und Tracking
          </div>
          <p style={textStyle}>
            MarketAI verwendet Cookies für:
          </p>
          <ul>
            <li style={listStyle}>
              <strong>Authentifizierung:</strong> Aufrechterhaltung Ihrer Anmeldung
            </li>
            <li style={listStyle}>
              <strong>Analytik:</strong> Verständnis der Plattformnutzung (anonymisiert)
            </li>
            <li style={listStyle}>
              <strong>Funktionalität:</strong> Speicherung von Präferenzen
            </li>
          </ul>
          <p style={textStyle}>
            Sie können Cookies in Ihren Browsereinstellungen verwalten. Das Blockieren von Cookies kann die Funktionalität beeinträchtigen.
          </p>
        </section>

        {/* 10. Aufbewahrung */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('10')}>10</span>
            Aufbewahrungsdauer
          </div>
          <p style={textStyle}>
            Personenbezogene Daten werden so lange gespeichert, wie:
          </p>
          <ul>
            <li style={listStyle}>
              Sie einen aktiven Account bei MarketAI haben
            </li>
            <li style={listStyle}>
              Dies zur Erfüllung gesetzlicher Verpflichtungen erforderlich ist
            </li>
            <li style={listStyle}>
              Diese zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen notwendig sind
            </li>
          </ul>
          <p style={textStyle}>
            Nach Löschung Ihres Accounts werden Ihre Daten innerhalb von 30 Tagen gelöscht (außer bei gesetzlichen Aufbewahrungspflichten).
          </p>
        </section>

        {/* 11. Kontakt und Beschwerden */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('11')}>11</span>
            Kontakt und Beschwerde
          </div>
          <p style={textStyle}>
            Für Fragen zu dieser Datenschutzerklärung oder zur Ausübung Ihrer Rechte:
          </p>
          <p style={{ ...textStyle, fontWeight: '600', color: 'white' }}>
            MarketAI Datenschutz<br />
            Email: <a href="mailto:privacy@marketai.io" style={{ color: '#a78bfa', textDecoration: 'none' }}>privacy@marketai.io</a><br />
            Web: www.marketai.io/contact
          </p>
          <p style={textStyle}>
            Sie haben außerdem das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren:
          </p>
          <p style={{ ...textStyle, fontWeight: '600', color: 'white' }}>
            <a href="https://www.bfdi.bund.de/" style={{ color: '#a78bfa', textDecoration: 'none' }}>Bundesbeauftragter für Datenschutz und Informationsfreiheit (BfDI)</a>
          </p>
        </section>

        {/* 12. Änderungen */}
        <section style={sectionStyle}>
          <div style={headingStyle}>
            <span style={badgeStyle('12')}>12</span>
            Änderungen dieser Datenschutzerklarung
          </div>
          <p style={textStyle}>
            MarketAI behält sich das Recht vor, diese Datenschutzerklärung zu ändern. Änderungen werden auf dieser Seite veröffentlicht und treten nach 30 Tagen in Kraft. Die kontinuierliche Nutzung von MarketAI nach solchen Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen.
          </p>
          <p style={{ ...textStyle, color: '#94a3b8', fontSize: '14px' }}>
            Zuletzt aktualisiert: Juni 2026
          </p>
        </section>
      </div>
    </main>
  )
}
