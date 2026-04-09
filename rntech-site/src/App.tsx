import { useEffect, useMemo, useState } from 'react'
import logo from './assets/LogoRNtech.png'

const EMAIL_TO = 'contato@rntech.com.br'
const WHATSAPP_E164 = '5575998797678'
const PHONE_E164 = '+5575998797678'
const PHONE_DISPLAY = '+55 75 99879-7678'

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const testimonials = useMemo(
    () => [
      {
        quote:
          'A RN TECH não só entregou um sistema — eles resolveram um gargalo que travava nossa operação há anos. O nível de diagnóstico é absurdo.',
        name: 'Mariana Costa',
        role: 'Diretora de Operações',
        company: 'LogTech S.A.',
        avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      {
        quote:
          'Eles entendem de business tanto quanto entendem de código. Isso economiza tempo, reduz retrabalho e evita “telefone sem fio” entre área técnica e operação.',
        name: 'Renato Almeida',
        role: 'CTO & Founder',
        company: 'FinScale Ecosystem',
        avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      {
        quote:
          'Integração com sistemas legados, performance e estabilidade: entregaram tudo no prazo e com uma comunicação muito clara do começo ao fim.',
        name: 'Camila Ribeiro',
        role: 'Head de Produto',
        company: 'RetailFlow',
        avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      },
      {
        quote:
          'O que mais me impressionou foi o pós-go-live. Eles acompanharam métricas, corrigiram rápido e ajudaram a evoluir com base no uso real.',
        name: 'Bruno Silva',
        role: 'Gerente de TI',
        company: 'Indústria NovaEra',
        avatarUrl: 'https://randomuser.me/api/portraits/men/75.jpg',
      },
      {
        quote:
          'Arquitetura muito bem pensada. A plataforma ficou escalável e fácil de manter, sem “dependência” de soluções prontas engessadas.',
        name: 'Juliana Fernandes',
        role: 'COO',
        company: 'HealthOps',
        avatarUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
      },
    ],
    [],
  )

  useEffect(() => {
    const t = window.setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length)
    }, 6500)
    return () => window.clearInterval(t)
  }, [testimonials.length])

  return (
    <div className="selection:bg-primary-container selection:text-white">
      <div className="grain-overlay" />

      <nav className="fixed top-0 w-full z-50 bg-surface/45 backdrop-blur-2xl">
        <div className="relative flex items-center w-full max-w-7xl mx-auto pl-0 pr-2 sm:pr-6 lg:pr-10 xl:pr-12 h-12 sm:h-14">
          <a
            className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center lg:-ml-5"
            href="#"
            aria-label="RN TECH"
          >
            <img
              src={logo}
              alt="RN TECH"
              className="h-16 sm:h-20 lg:h-24 xl:h-28 w-auto max-w-[70vw] object-contain"
            />
            <span className="sr-only">RN TECH</span>
          </a>

          <div className="flex-1" />

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center bg-transparent text-on-surface px-3 py-1.5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-xl leading-none">menu</span>
          </button>

          <div className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-2">
            <a
              className="text-blue-500 font-bold border-b-2 border-blue-500 pb-1 font-headline"
              href="#como-trabalhamos"
            >
              Como trabalhamos
            </a>
            <a className="text-neutral-400 hover:text-neutral-100 transition-colors font-headline" href="#time">
              Nosso time
            </a>
            <a
              className="bg-gradient-tech px-2 xl:px-2 py-1.5 rounded-none font-headline font-bold text-xs tracking-[0.25em] uppercase hover:scale-95 transition-all duration-200"
              href="#contato"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </nav>

      {mobileMenuOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            aria-label="Fechar menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="absolute top-0 right-0 h-full w-[86vw] max-w-sm bg-surface-container-highest p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="font-headline font-bold tracking-widest text-sm text-on-surface">MENU</span>
              <button
                type="button"
                className="bg-surface-container-low text-on-surface px-3 py-2 font-headline font-bold text-xs tracking-[0.25em] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fechar
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <a
                className="bg-surface-container-low px-4 py-3 font-headline font-bold text-on-surface"
                href="#como-trabalhamos"
                onClick={() => setMobileMenuOpen(false)}
              >
                Como trabalhamos
              </a>
              <a
                className="bg-surface-container-low px-4 py-3 font-headline font-bold text-on-surface"
                href="#time"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosso time
              </a>
              <a
                className="bg-gradient-tech px-4 py-3 font-headline font-bold text-on-primary-container"
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
              >
                Falar com especialista
              </a>
              <a
                className="bg-surface-container-low px-4 py-3 font-headline font-bold text-on-surface"
                href={`https://wa.me/${WHATSAPP_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </nav>
          </aside>
        </div>
      ) : null}

      <main className="relative">
        <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-surface-container-lowest">
          <div className="hero-animated-bg" aria-hidden="true" />
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-container/10 blur-[120px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 sm:pt-28">
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="text-tertiary font-headline tracking-[0.3em] text-xs font-bold uppercase">
                System Status: Optimal
              </span>
            </div>

            <h1 className="text-[clamp(2.1rem,6.5vw,5rem)] font-black font-headline leading-[0.95] sm:leading-[0.9] tracking-tighter mb-8 sm:mb-10 max-w-5xl">
  
              <span className="text-primary-container">Tecnologia sem limite</span> para resolver problemas reais
              <span className="text-primary cursor-blink">_</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 sm:gap-12">
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed font-light">
                Criamos soluções sob medida para desafios que não cabem em caixas prontas. Nossa engenharia é moldada
                pela sua necessidade, não por catálogos de software.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 shrink-0">
                <a
                  className="bg-primary-container text-on-primary-container px-6 sm:px-8 py-3.5 sm:py-4 font-headline font-bold text-sm sm:text-base hover:bg-primary transition-all duration-300 inline-flex items-center justify-center"
                  href="#contato"
                >
                  Solicitar orçamento gratuito
                </a>
                <a
                  className="bg-surface-container-highest text-on-surface px-6 sm:px-8 py-3.5 sm:py-4 font-headline font-bold text-sm sm:text-base border-l-2 border-tertiary flex items-center gap-3 group"
                  href={`https://wa.me/${WHATSAPP_E164}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Falar no WhatsApp
                  <span className="material-symbols-outlined text-tertiary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-surface">
          <div className="max-w-7xl mx-auto border-l border-outline-variant/20 pl-6 sm:pl-10 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold leading-tight max-w-4xl">
              Empresas não precisam de mais ferramentas. <br />
              <span className="text-primary">Precisam de soluções que realmente funcionem.</span>
            </h2>
            <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-on-surface-variant text-base sm:text-lg">
              <p>
                O mercado está saturado de softwares genéricos que prometem revolucionar seu negócio, mas acabam criando
                novos gargalos operacionais e dependências tecnológicas.
              </p>
              <p>
                Na RN TECH, removemos a fricção entre o código e o resultado. Nosso foco é a resolução pragmática de
                problemas complexos através de arquitetura robusta e pensamento fora da caixa.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-surface-container-lowest" id="como-trabalhamos">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-6 sm:gap-0 mb-12 sm:mb-16 lg:mb-20">
              <h3 className="text-3xl font-headline font-bold tracking-tight">Metodologia Cinética</h3>
              <div className="hidden sm:block h-px bg-outline-variant/30 flex-grow mx-10" />
              <span className="text-primary font-headline text-4xl sm:text-5xl">01-04</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-primary-container transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  01
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Diagnóstico estratégico</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">
                    Mergulhamos no seu fluxo para entender onde o processo quebra antes de escrever a primeira linha de
                    código.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-secondary-container transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  02
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Construção sob medida</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">
                    Desenvolvemos o motor tecnológico que sua operação exige, sem excessos e sem as limitações de
                    templates.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-tertiary-container transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  03
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Integração total</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">
                    Conectamos nossa solução ao seu ecossistema existente, garantindo fluidez e zero perda de dados.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-surface-bright transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  04
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Evolução contínua</h4>
                  <p className="text-on-surface-variant group-hover:text-on-surface leading-relaxed">
                    Tecnologia não é estática. Monitoramos e evoluímos sua ferramenta para que ela nunca se torne
                    obsoleta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-8 lg:px-12 bg-surface">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold md:sticky md:top-32">
                O DNA da <br />
                <span className="text-tertiary">RN TECH.</span>
              </h2>
            </div>
            <div className="md:w-2/3 space-y-px">
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">terminal</span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">Não seguimos templates</h4>
                  <p className="text-on-surface-variant">
                    Cada linha de código é pensada para o seu cenário específico. O seu negócio não é padrão, sua tech
                    também não deve ser.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">all_out</span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">Não limitamos tecnologia</h4>
                  <p className="text-on-surface-variant">
                    Trabalhamos com a pilha tecnológica que melhor resolve o problema, sem nos prender a modismos ou
                    restrições de plataforma.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">psychology</span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">Pensamos antes de desenvolver</h4>
                  <p className="text-on-surface-variant">
                    Entendemos o impacto de cada decisão técnica no seu balanço financeiro e na experiência do seu
                    usuário final.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary">speed</span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">Foco em resultado real</h4>
                  <p className="text-on-surface-variant">
                    Não entregamos código. Entregamos redução de custos, aumento de escala e eficiência operacional
                    mensurável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <h3 className="text-3xl font-headline font-bold tracking-tight">Depoimentos</h3>
                <p className="mt-3 text-on-surface-variant text-base sm:text-lg max-w-2xl">
                  Histórias reais de quem tirou gargalos do caminho e ganhou escala.
                </p>
              </div>
              <div className="hidden sm:flex gap-2">
                <button
                  type="button"
                  className="bg-surface-container-high text-on-surface px-4 py-3 font-headline font-bold"
                  onClick={() =>
                    setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                  }
                  aria-label="Depoimento anterior"
                >
                  <span className="material-symbols-outlined leading-none">arrow_back</span>
                </button>
                <button
                  type="button"
                  className="bg-surface-container-high text-on-surface px-4 py-3 font-headline font-bold"
                  onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
                  aria-label="Próximo depoimento"
                >
                  <span className="material-symbols-outlined leading-none">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="bg-surface-container p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-tertiary">
                    star
                  </span>
                ))}
              </div>

              <p className="text-xl sm:text-2xl font-light italic leading-relaxed mb-10 sm:mb-12">
                &quot;{testimonials[testimonialIndex]?.quote}&quot;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[testimonialIndex]?.avatarUrl}
                  alt={testimonials[testimonialIndex]?.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover saturate-[0.9] contrast-[1.05]"
                  loading="lazy"
                />
                <div>
                  <p className="font-headline font-bold">{testimonials[testimonialIndex]?.name}</p>
                  <p className="text-sm text-on-surface-variant">
                    {testimonials[testimonialIndex]?.role} • {testimonials[testimonialIndex]?.company}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setTestimonialIndex(i)}
                      aria-label={`Ir para depoimento ${i + 1}`}
                      className={[
                        'h-2 w-2',
                        i === testimonialIndex ? 'bg-tertiary' : 'bg-outline-variant/50',
                      ].join(' ')}
                    />
                  ))}
                </div>

                <div className="flex sm:hidden gap-2">
                  <button
                    type="button"
                    className="bg-surface-container-high text-on-surface px-4 py-3 font-headline font-bold"
                    onClick={() =>
                      setTestimonialIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
                    }
                    aria-label="Depoimento anterior"
                  >
                    <span className="material-symbols-outlined leading-none">arrow_back</span>
                  </button>
                  <button
                    type="button"
                    className="bg-surface-container-high text-on-surface px-4 py-3 font-headline font-bold"
                    onClick={() => setTestimonialIndex((i) => (i + 1) % testimonials.length)}
                    aria-label="Próximo depoimento"
                  >
                    <span className="material-symbols-outlined leading-none">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-surface" id="time">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-10 sm:mb-12">
              Mentalidade &gt; Títulos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
              <div className="bg-surface p-12">
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  &quot;Um time formado por pessoas que entendem que tecnologia não é sobre código — é sobre
                  resolver.&quot;
                </p>
              </div>
              <div className="bg-surface p-12">
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  &quot;Nossa hierarquia é baseada no mérito da melhor ideia, não no cargo de quem a deu.&quot;
                </p>
              </div>
              <div className="bg-surface p-12">
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  &quot;Obsessão pela simplicidade técnica para resolver a complexidade do negócio.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-surface-container-lowest" id="contato">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-black mb-6 sm:mb-8 leading-tight">
                Fale com a RN TECH e receba um <span className="text-primary-container">diagnóstico gratuito.</span>
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant font-light mb-8 sm:mb-10">
                Sem compromisso. Sem enrolação. <br />
                Direto ao ponto.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <a
                    className="text-base sm:text-lg hover:text-primary transition-colors break-all"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <span className="material-symbols-outlined text-tertiary">chat</span>
                  <a className="text-base sm:text-lg hover:text-tertiary transition-colors" href={`tel:${PHONE_E164}`}>
                    {PHONE_DISPLAY}
                  </a>
                  <a
                    className="text-base sm:text-lg hover:text-tertiary transition-colors"
                    href={`https://wa.me/${WHATSAPP_E164}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    (WhatsApp)
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-surface-container p-5 sm:p-8 lg:p-10 flex flex-col justify-center">
              <a
                className="bg-tertiary text-on-tertiary w-full px-6 sm:px-10 py-6 sm:py-7 font-headline font-black text-base sm:text-lg tracking-widest uppercase inline-flex items-center justify-center gap-3 shadow-[0_20px_60px_rgba(0,226,157,0.25)]"
                href={`https://wa.me/${WHATSAPP_E164}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a RN TECH no WhatsApp"
              >
                <span className="material-symbols-outlined text-2xl leading-none">chat</span>
                Falar no WhatsApp agora
              </a>
              <p className="mt-5 text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Ao clicar, você fala direto com a equipe no WhatsApp e já pode enviar seu contexto.
              </p>
            </div>
          </div>
        </section>
      </main>

      <a
        className="wa-fab fixed bottom-5 right-5 z-[70] bg-tertiary text-on-tertiary px-4 py-3 font-headline font-black tracking-widest uppercase inline-flex items-center gap-2 shadow-[0_20px_60px_rgba(0,226,157,0.25)]"
        href={`https://wa.me/${WHATSAPP_E164}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <span className="relative inline-flex items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="block"
            fill="currentColor"
          >
            <path d="M19.11 17.33c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.58-1.39-.8-1.9-.21-.51-.42-.44-.58-.45l-.49-.01c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.17 1.86 2.84 4.51 3.98.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.24-.17-.5-.3Zm-3.08 12.04h-.01c-2.33 0-4.62-.63-6.63-1.82l-.48-.28-4.92 1.29 1.31-4.8-.31-.49a12.94 12.94 0 0 1-2.02-6.93C3.26 10.02 9.29 4 16.71 4c3.57 0 6.92 1.39 9.44 3.92A13.24 13.24 0 0 1 29.02 17c0 7.32-5.96 13.37-13.99 13.37Zm11.93-24.3A16.02 16.02 0 0 0 16.71 0C7.5 0 0 7.33 0 16.35c0 2.87.77 5.68 2.24 8.14L0 32l7.7-2.02A16.6 16.6 0 0 0 16.03 32h.01C25.24 32 32 24.85 32 17c0-4.36-1.72-8.45-4.04-11.93Z" />
          </svg>
          <span className="wa-dot" aria-hidden="true" />
        </span>
        <span>WhatsApp</span>
      </a>

      <footer className="bg-neutral-950 w-full py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3">
              <img src={logo} alt="RN TECH" className="h-12 sm:h-14 w-auto object-contain opacity-95" />
              <span className="sr-only">RN TECH</span>
            </div>
            <p className="mt-4 text-neutral-500 text-sm font-['Inter'] leading-relaxed">
              Criando tecnologia sem limites para o seu negócio evoluir.
            </p>
          </div>
          <div className="flex gap-8 justify-center">
            <a className="text-neutral-500 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100" href="#">
              LinkedIn
            </a>
            <a className="text-neutral-500 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100" href="#">
              GitHub
            </a>
            <a
              className="text-neutral-500 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100"
              href="#contato"
            >
              Contato
            </a>
          </div>
          <div className="text-left md:text-right">
            <p className="text-neutral-500 text-sm font-['Inter'] leading-relaxed">© 2024 RN TECH. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

