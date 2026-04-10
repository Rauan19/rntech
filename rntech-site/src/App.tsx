import { useEffect, useState } from 'react'
import logo from './assets/LogoRNtech.png'
import {
  IconArrowForward,
  IconChat,
  IconDissatisfied,
  IconHub,
  IconInventory,
  IconMail,
  IconMenu,
  IconPayments,
  IconPersonOff,
  IconSchedule,
  IconTarget,
  IconTrendingUp,
} from './icons'

const EMAIL_TO = 'contato@rntech.com.br'
const WHATSAPP_E164 = '5575998797678'
const PHONE_E164 = '+5575998797678'
const PHONE_DISPLAY = '+55 75 99879-7678'

export function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="selection:bg-primary-container selection:text-white">
      <div className="grain-overlay" />

      <nav className="fixed top-0 w-full z-50 overflow-visible bg-surface/45 backdrop-blur-2xl border-b border-outline-variant/10">
        <div className="relative flex h-12 sm:h-14 lg:h-16 items-center justify-end w-full max-w-7xl mx-auto gap-3 px-3 sm:px-6 lg:px-10">
          <a
            className="absolute left-3 sm:left-6 lg:left-10 top-1/2 z-10 inline-flex min-w-0 -translate-y-1/2"
            href="#"
            aria-label="RN TECH"
          >
            <img
              src={logo}
              alt="RN TECH"
              className="h-[5.75rem] sm:h-12 lg:h-14 xl:h-16 w-auto max-w-[min(94vw,420px)] sm:max-w-[min(62vw,340px)] object-contain object-left"
            />
            <span className="sr-only">RN TECH</span>
          </a>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center bg-transparent text-on-surface p-2 -mr-2 shrink-0 relative z-20"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <IconMenu className="h-6 w-6 shrink-0" />
          </button>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0 relative z-20">
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-headline text-sm font-medium px-3 py-2 rounded-sm hover:bg-surface-container-high/80"
              href="#dores"
            >
              O que resolvemos
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-headline text-sm font-medium px-3 py-2 rounded-sm hover:bg-surface-container-high/80"
              href="#como-trabalhamos"
            >
              Como trabalhamos
            </a>
            <a
              className="text-on-surface-variant hover:text-on-surface transition-colors font-headline text-sm font-medium px-3 py-2 rounded-sm hover:bg-surface-container-high/80"
              href="#cultura"
            >
              Cultura
            </a>
            <a
              className="bg-gradient-tech ml-1 xl:ml-2 px-4 py-2.5 rounded-sm font-headline font-bold text-xs sm:text-[0.8125rem] tracking-wide uppercase hover:opacity-95 transition-opacity whitespace-nowrap"
              href="#contato"
            >
              Falar com a gente
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
                href="#dores"
                onClick={() => setMobileMenuOpen(false)}
              >
                O que resolvemos
              </a>
              <a
                className="bg-surface-container-low px-4 py-3 font-headline font-bold text-on-surface"
                href="#como-trabalhamos"
                onClick={() => setMobileMenuOpen(false)}
              >
                Como trabalhamos
              </a>
              <a
                className="bg-surface-container-low px-4 py-3 font-headline font-bold text-on-surface"
                href="#cultura"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cultura
              </a>
              <a
                className="bg-gradient-tech px-4 py-3 font-headline font-bold text-on-primary-container"
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
              >
                Falar com a gente
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

      <main className="relative pb-24 sm:pb-20">
        <section className="min-h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-surface-container-lowest">
          <div className="hero-animated-bg" aria-hidden="true" />
          <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary-container/10 blur-[120px] rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto w-full pt-[6.25rem] sm:pt-28 lg:pt-28">
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
              <span className="text-tertiary font-headline tracking-[0.2em] text-xs font-bold uppercase">
                Menos atrito · Mais resultado
              </span>
            </div>

            <h1 className="text-[clamp(2.1rem,6.5vw,5rem)] font-black font-headline leading-[0.95] sm:leading-[0.9] tracking-tighter mb-8 sm:mb-10 max-w-5xl">
              <span className="text-primary-container">Menos gargalo.</span> Mais venda. Processo no controle
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 sm:gap-12">
              <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed font-light">
                Você não precisa entender de sistema  precisa de atendimento mais rápido, equipe menos sobrecarregada e
                números que fechem. A gente traduz sua dor em algo que funciona no dia a dia do negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 shrink-0">
                <a
                  className="bg-primary-container text-on-primary-container px-6 sm:px-8 py-3.5 sm:py-4 font-headline font-bold text-sm sm:text-base hover:bg-primary transition-all duration-300 inline-flex items-center justify-center"
                  href="#contato"
                >
                  Quero uma conversa sem compromisso
                </a>
                <a
                  className="bg-surface-container-highest text-on-surface px-6 sm:px-8 py-3.5 sm:py-4 font-headline font-bold text-sm sm:text-base border-l-2 border-tertiary flex items-center gap-3 group"
                  href={`https://wa.me/${WHATSAPP_E164}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Falar no WhatsApp
                  <IconArrowForward className="h-5 w-5 shrink-0 text-tertiary transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-surface" id="dores">
          <div className="max-w-7xl mx-auto border-l border-outline-variant/20 pl-6 sm:pl-10 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold leading-tight max-w-4xl">
              O cliente não compra software. <br />
              <span className="text-primary">Compra tempo, clareza e venda a mais.</span>
            </h2>
            <p className="mt-6 sm:mt-8 text-on-surface-variant text-base sm:text-lg max-w-3xl leading-relaxed">
              Se o problema for &quot;só técnico&quot;, qualquer planilha resolve. Quando o problema é operação, pessoas e
              dinheiro no fim do mês  aí entra o que a RN TECH faz.
            </p>

            <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {(
                [
                  {
                    Icon: IconSchedule,
                    title: 'Tempo perdido em retrabalho',
                    text: 'Pedido duplicado, informação espalhada, alguém sempre &quot;lembrando&quot; o próximo passo.',
                  },
                  {
                    Icon: IconDissatisfied,
                    title: 'Cliente sumindo na fila',
                    text: 'Demora no atendimento, acompanhamento fraco, oportunidade que escapa porque ninguém viu a tempo.',
                  },
                  {
                    Icon: IconInventory,
                    title: 'Estoque ou serviço no escuro',
                    text: 'Não sabe o que vendeu, o que falta ou o que dá lucro de verdade até fechar a planilha na madrugada.',
                  },
                  {
                    Icon: IconPersonOff,
                    title: 'Tudo na cabeça de uma pessoa',
                    text: 'Se fulano faltar, o processo para. Crescimento vira risco em vez de conquista.',
                  },
                ] as const
              ).map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-surface-container-low p-6 sm:p-7 border border-outline-variant/15 hover:border-outline-variant/40 transition-colors"
                >
                  <Icon className="mb-4 block h-8 w-8 text-tertiary" />
                  <h3 className="font-headline font-bold text-lg mb-2 text-on-surface">{title}</h3>
                  <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 text-on-surface-variant text-base sm:text-lg">
              <p>
                Muita empresa compra &quot;ferramenta pronta&quot; e descobre que o gargalo continua: só mudou o lugar
                da dor. O que falta é alinhar processo, time e o que o cliente sente na ponta.
              </p>
              <p>
                A RN TECH entra para mapear onde o dinheiro e o tempo estão vazando, propor um caminho realista e
                colocar no ar algo que sua equipe usa  sem depender de vocabulário de TI.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 bg-surface-container-lowest" id="como-trabalhamos">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-6 sm:gap-0 mb-12 sm:mb-16 lg:mb-20">
              <div>
                <h3 className="text-3xl font-headline font-bold tracking-tight">Do problema ao resultado</h3>
                <p className="mt-3 text-on-surface-variant text-base sm:text-lg max-w-xl">
                  Quatro passos em linguagem de negócio  a parte técnica fica com a gente.
                </p>
              </div>
              <div className="hidden sm:block h-px bg-outline-variant/30 flex-grow mx-10 self-center" />
              <span className="text-primary font-headline text-4xl sm:text-5xl shrink-0">01 a 04</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-primary-container transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  01
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Onde está sangrando</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">
                    Ouvimos quem opera o dia a dia: onde trava venda, atendimento ou entrega. Só depois desenhamos o que
                    precisa existir.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-secondary-container transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  02
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Solução no seu tamanho</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">
                    Nada de pacote cheio de função que ninguém usa. Construímos o que destrava o seu fluxo e sustenta
                    crescimento.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-tertiary-container transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  03
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Tudo conversando</h4>
                  <p className="text-on-surface-variant group-hover:text-on-primary-container leading-relaxed">
                    O que você já usa (WhatsApp, planilha, sistema antigo) entra no jogo quando faz sentido  sem apagar
                    o que funciona.
                  </p>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 sm:p-10 min-h-[320px] sm:min-h-[380px] lg:min-h-[400px] flex flex-col justify-between group hover:bg-surface-bright transition-all duration-500">
                <span className="text-6xl font-headline font-black text-outline-variant/20 group-hover:text-white/20">
                  04
                </span>
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-4">Melhora com o uso</h4>
                  <p className="text-on-surface-variant group-hover:text-on-surface leading-relaxed">
                    Negócio muda; o que te ajudou no primeiro ano precisa acompanhar. Ajustamos com base no que você
                    vende, atende e mede.
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
                O que você pode <br />
                <span className="text-tertiary">esperar da gente</span>
              </h2>
            </div>
            <div className="md:w-2/3 space-y-px">
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <IconTarget className="h-9 w-9 shrink-0 text-primary" />
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">Feito para o seu negócio, não para o catálogo</h4>
                  <p className="text-on-surface-variant">
                    Cada decisão parte do seu fluxo real de venda e operação. Nada de forçar o processo a caber num
                    sistema genérico.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <IconHub className="h-9 w-9 shrink-0 text-primary" />
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">A ferramenta certa para o problema certo</h4>
                  <p className="text-on-surface-variant">
                    Quando dá para simplificar, simplificamos. Quando precisa escalar ou integrar, a gente escolhe o
                    caminho que sustenta seu faturamento  sem moda vazia.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <IconPayments className="h-9 w-9 shrink-0 text-primary" />
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">Impacto no bolso antes do bonito</h4>
                  <p className="text-on-surface-variant">
                    Custo, prazo e risco são conversa de mesa. A solução precisa fazer sentido para quem paga a conta e
                    para quem usa todo dia.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 sm:p-12 flex items-start gap-6 sm:gap-8 hover:bg-surface-container-high transition-colors">
                <IconTrendingUp className="h-9 w-9 shrink-0 text-primary" />
                <div>
                  <h4 className="text-2xl font-headline font-bold mb-2">Resultado que dá para sentir</h4>
                  <p className="text-on-surface-variant">
                    Menos retrabalho, resposta mais rápida ao cliente, equipe menos no improviso  e, quando der para
                    medir, número melhor no fim do mês.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-surface" id="cultura">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-4 sm:mb-6">
              Cultura de quem vive operação
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12">
              Não importa o cargo: o que vale é a ideia que destrava venda, cliente satisfeito e time menos sobrecarregado.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
              <div className="bg-surface p-12">
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  &quot;Primeiro entendemos o que está custando dinheiro ou cliente. Só depois falamos de implementação.&quot;
                </p>
              </div>
              <div className="bg-surface p-12">
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  &quot;A melhor solução ganha na mesa  não quem fala mais alto, e nem o manual do software.&quot;
                </p>
              </div>
              <div className="bg-surface p-12">
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  &quot;Simples de usar no dia a dia. Robusto por baixo dos panos. É assim que escala sem virar caos.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-surface-container-lowest" id="contato">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-headline font-black mb-6 sm:mb-8 leading-tight">
                Conte onde dói  a gente devolve um <span className="text-primary-container">plano claro.</span>
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant font-light mb-8 sm:mb-10">
                Primeira conversa sem custo: entendemos seu contexto e dizemos se faz sentido seguir juntos. Sem pressão,
                sem promessa milagrosa.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 min-w-0">
                  <IconMail className="h-6 w-6 shrink-0 text-primary" />
                  <a
                    className="text-base sm:text-lg hover:text-primary transition-colors break-all"
                    href={`mailto:${EMAIL_TO}`}
                  >
                    {EMAIL_TO}
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <IconChat className="h-6 w-6 shrink-0 text-tertiary" />
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
                <IconChat className="h-7 w-7 shrink-0" />
                Falar no WhatsApp agora
              </a>
              <p className="mt-5 text-on-surface-variant text-sm sm:text-base leading-relaxed">
                Pode mandar áudio: quanto mais clara a dor (venda, atendimento, estoque, time), mais objetiva a resposta.
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end">
          <div>
            <div className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="RN TECH"
                className="h-[13.5rem] sm:h-44 md:h-48 lg:h-52 w-auto max-w-[min(100%,92vw)] object-contain object-left opacity-95"
              />
              <span className="sr-only">RN TECH</span>
            </div>
            <p className="mt-6 text-neutral-500 text-sm font-['Inter'] leading-relaxed max-w-sm">
              Menos gargalo no dia a dia. Mais clareza para vender e crescer.
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-neutral-500 text-sm font-['Inter'] leading-relaxed">© 2026 RN TECH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

