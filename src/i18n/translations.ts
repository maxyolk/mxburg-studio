export type Lang = 'en' | 'pl';

export const translations = {
  en: {
    home: {
      headline: 'Bespoke fine art photography for considered interiors',
      subline: 'Max Burgess — Kraków',
      cta: 'View the work',
    },
    inSitu: {
      heading: 'The work, in place.',
      subtext:
        'Each piece is considered for the space it will inhabit. We offer curation consultations before any commitment.',
    },
    process: {
      heading: 'How it works.',
      steps: [
        { number: '01', title: 'Select', description: 'Browse the work and identify pieces that suit your project.' },
        { number: '02', title: 'Consult', description: 'A site visit or call to discuss scale, framing, and placement.' },
        { number: '03', title: 'Produce', description: 'Archival giclée prints produced to order, delivered ready to hang.' },
        { number: '04', title: 'Install', description: 'White-glove installation available for larger commissions.' },
      ],
    },
    about: {
      openingLine: 'Photography rooted in architecture, light, and the passage of time.',
      paragraphs: [
        "Copy to be supplied. This is placeholder text for the first paragraph, describing the photographer's practice, approach, and the kind of spaces and clients they work with.",
        'Copy to be supplied. Second paragraph expanding on process, philosophy, or notable projects. Keep it understated — let the work speak.',
      ],
      credentials: [
        { label: 'Exhibitions', value: 'To be listed' },
        { label: 'Camera system', value: 'Medium format, 6×7' },
        { label: 'Based', value: 'Kraków, Poland' },
      ],
    },
    contact: {
      heading: 'Start a conversation.',
      subtext: 'Project enquiries, curation consultations, and edition availability.',
      fields: {
        name: { label: 'Name', placeholder: 'Your name' },
        email: { label: 'Email', placeholder: 'your@email.com' },
        projectType: { label: 'Project type', placeholder: 'Select…' },
        message: { label: 'Tell me about your project', placeholder: 'A brief description of your space, scale, and timeline…' },
      },
      projectTypes: ['Hotel & Hospitality', 'Office & Commercial', 'Private Residence', 'Other'],
      submit: 'Send enquiry',
    },
    success: {
      eyebrow: 'Thank you',
      heading: 'Message received.',
      subtext: "I'll be in touch shortly.",
      back: 'Back to studio',
    },
  },
  pl: {
    home: {
      headline: 'Fotografia artystyczna tworzona z myślą o wymagających wnętrzach',
      subline: 'Max Burgess — Kraków',
      cta: 'Zobacz prace',
    },
    inSitu: {
      heading: 'Praca w przestrzeni.',
      subtext:
        'Każda praca jest dobierana z myślą o konkretnym wnętrzu. Oferujemy konsultacje kuratorskie przed podjęciem decyzji.',
    },
    process: {
      heading: 'Jak to działa.',
      steps: [
        { number: '01', title: 'Wybór', description: 'Przejrzyj prace i wskaż te, które pasują do Twojego projektu.' },
        { number: '02', title: 'Konsultacja', description: 'Wizyta na miejscu lub rozmowa o skali, oprawie i rozmieszczeniu.' },
        { number: '03', title: 'Produkcja', description: 'Archiwalne odbitki giclée produkowane na zamówienie, gotowe do powieszenia.' },
        { number: '04', title: 'Montaż', description: 'Profesjonalny montaż dostępny przy większych zamówieniach.' },
      ],
    },
    about: {
      openingLine: 'Fotografia zakorzeniona w architekturze, świetle i upływie czasu.',
      paragraphs: [
        'Tekst do uzupełnienia. Miejsce na opis praktyki fotograficznej, podejścia do pracy oraz rodzaju przestrzeni i klientów.',
        'Tekst do uzupełnienia. Drugi akapit rozwijający temat procesu twórczego, filozofii lub wybranych realizacji.',
      ],
      credentials: [
        { label: 'Wystawy', value: 'Do uzupełnienia' },
        { label: 'System aparatu', value: 'Średni format, 6×7' },
        { label: 'Siedziba', value: 'Kraków, Polska' },
      ],
    },
    contact: {
      heading: 'Zacznij rozmowę.',
      subtext: 'Zapytania projektowe, konsultacje kuratorskie i dostępność edycji.',
      fields: {
        name: { label: 'Imię i nazwisko', placeholder: 'Twoje imię i nazwisko' },
        email: { label: 'E-mail', placeholder: 'twoj@email.com' },
        projectType: { label: 'Rodzaj projektu', placeholder: 'Wybierz…' },
        message: { label: 'Opowiedz mi o swoim projekcie', placeholder: 'Krótki opis przestrzeni, skali i harmonogramu…' },
      },
      projectTypes: ['Hotel i Gastronomia', 'Biuro i Komercja', 'Prywatna rezydencja', 'Inne'],
      submit: 'Wyślij zapytanie',
    },
    success: {
      eyebrow: 'Dziękuję',
      heading: 'Wiadomość odebrana.',
      subtext: 'Odezwę się wkrótce.',
      back: 'Wróć do studia',
    },
  },
} as const;

export function t(lang: Lang) {
  return translations[lang];
}
