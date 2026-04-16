/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Building2, 
  Globe, 
  Mail, 
  MapPin, 
  Phone, 
  Quote, 
  Share2, 
  Wallet,
  Instagram,
  Facebook,
  MessageCircle,
  Languages
} from "lucide-react";
import MortgageCalculator from "./components/MortgageCalculator";
import { useLanguage } from "./LanguageContext";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function App() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-sm dark:shadow-none flex justify-between items-center px-8 py-4 max-w-full">
        <div className="text-xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 font-headline">L. ALEXEJENKO</div>
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-semibold">
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-300" href="#portfolio">{t.nav.portfolio}</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-300" href="#mortgages">{t.nav.mortgages}</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-300" href="#insights">{t.nav.insights}</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 transition-colors duration-300" href="#about">{t.nav.about}</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 p-1 rounded-lg">
            {(['cs', 'en', 'ru'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 text-xs font-bold rounded flex items-center justify-center transition-all ${
                  language === lang 
                    ? 'bg-primary text-white shadow-sm' 
                    : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="bg-primary text-on-primary px-6 py-2 rounded-xl font-headline font-semibold scale-95 duration-200 hover:scale-100 transition-transform hidden sm:block">
            {t.nav.consultation}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover grayscale-[10%] contrast-[1.05]" 
              alt="Modern luxury villa architectural exterior" 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
          </div>
          <div className="container mx-auto px-8 relative z-10">
            <motion.div 
              className="max-w-3xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                {t.hero.badge}
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tight mb-8">
                {t.hero.title1} <br/>
                <span className="text-tertiary-fixed">{t.hero.title2}</span>
              </h1>
              <p className="text-xl text-surface-container-highest max-w-xl mb-10 leading-relaxed font-light">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white transition-colors duration-300 shadow-xl">
                  {t.hero.cta1}
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-headline font-bold text-lg hover:bg-white/20 transition-all">
                  {t.hero.cta2}
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <motion.section 
          className="bg-surface-container-low py-12 relative -mt-12 z-20 mx-8 rounded-xl shadow-lg"
          {...fadeIn}
        >
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-headline font-extrabold text-primary mb-1">15+</div>
              <div className="text-sm font-label text-on-surface-variant uppercase tracking-widest">{t.stats.experience}</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-extrabold text-primary mb-1">500+</div>
              <div className="text-sm font-label text-on-surface-variant uppercase tracking-widest">{t.stats.sold}</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-extrabold text-primary mb-1">1.2mld</div>
              <div className="text-sm font-label text-on-surface-variant uppercase tracking-widest">{t.stats.volume}</div>
            </div>
            <div>
              <div className="text-4xl font-headline font-extrabold text-primary mb-1">100%</div>
              <div className="text-sm font-label text-on-surface-variant uppercase tracking-widest">{t.stats.satisfaction}</div>
            </div>
          </div>
        </motion.section>

        {/* Value Proposition & Services */}
        <section className="py-24 px-8 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div className="lg:col-span-5 sticky top-32" {...fadeIn}>
              <h2 className="text-4xl font-headline font-extrabold text-primary mb-6 leading-tight">
                {t.services.title} <span className="text-secondary italic font-light">{t.services.titleItalic}</span>
              </h2>
              <p className="text-lg text-on-surface-variant mb-12 leading-relaxed">
                {t.services.description}
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center group-hover:bg-tertiary-fixed transition-colors duration-300">
                    <Building2 className="text-primary w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-primary mb-2">{t.services.reExpertise}</h3>
                    <p className="text-on-surface-variant">{t.services.reDesc}</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary-container flex items-center justify-center group-hover:bg-tertiary-fixed transition-colors duration-300">
                    <Wallet className="text-primary w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-headline font-bold text-primary mb-2">{t.services.finStrategy}</h3>
                    <p className="text-on-surface-variant">{t.services.finDesc}</p>
                  </div>
                </div>
              </div>
            </motion.div>


            <motion.div 
              className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {/* Prodej a Pronájem Card */}
              <motion.div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/15 hover:shadow-xl transition-shadow duration-500 flex flex-col h-full" variants={fadeIn}>
                <div className="mb-6 rounded-xl overflow-hidden aspect-[4/3]">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="Elegant interior of a luxury apartment" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbLTGVUIMZLzM6fE_LR066RpA9BpKUpljSOS8GXvjv0B5O8ogRRrJYR0GVBDcNETgJpkPw2YoR9IneVj5omyvQTx_EyH6cwxl1qz56TD67h2vGF48h3ZVX2eB4y-sRnpMk2G45QtGzE_63a8D6RZGg4Slyk6k26v4cl30TQGp2RSIm4X0MulYy9X_8XIzISLpLrNMXKUbm0DcqSQfCTfKkBJ65RADL_bL-BU0ugcKVTKPWNYXoYmE-vUrJNUWaIzKn0JXVjVicVvrm"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-headline font-extrabold text-primary mb-4">{t.services.salesTitle}</h3>
                <p className="text-on-surface-variant mb-6 flex-grow leading-relaxed">
                  {t.services.salesDesc}
                </p>
                <a className="inline-flex items-center text-primary font-bold hover:gap-2 transition-all" href="#">
                  {t.services.moreSales} <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>

              {/* Hypotéky a Úvěry Card */}
              <motion.div className="bg-primary text-on-primary p-8 rounded-2xl shadow-sm mt-0 md:mt-12 flex flex-col h-full" variants={fadeIn}>
                <div className="mb-6 rounded-xl overflow-hidden aspect-[4/3] opacity-90">
                  <img 
                    className="w-full h-full object-cover grayscale" 
                    alt="Architectural blueprints" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOZK85iWbt3-6458cyAjoYjM8DgND_EpKvBqyxFfGs5NkKdakVne4cUbO3w_AbAgAdmiGNd2bZtnuVuwXCgBy1R3b0prgQxq0GgHVhlOfDoVkTU6cdBv7C1Gd1if76HRZzKwVx7mPKHPZ_lXjQX-ogT-QjJVYB0cW4L7S6Zv77_01AsHpfhMB0CHmV1Fj5qnhKGtS-nS6MXheTe6Eh_5WJlCLIAHORKCzKnadfDN8rqKUuLpI8uCNNEsctpzoUKqsLzJXQ45mY5z0S"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-headline font-extrabold text-tertiary-fixed mb-4">{t.services.mortgagesTitle}</h3>
                <p className="text-surface-container-highest mb-6 flex-grow leading-relaxed">
                  {t.services.mortgagesDesc}
                </p>
                <a className="inline-flex items-center text-tertiary-fixed font-bold hover:gap-2 transition-all" href="#mortgages">
                  {t.services.compare} <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mortgage Calculator Section */}
        <section id="mortgages" className="py-24 bg-surface-container-low">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div className="lg:col-span-5" {...fadeIn}>
                <h2 className="text-4xl font-headline font-extrabold text-primary mb-6 leading-tight">
                  {t.calculator.title} <br/>
                  <span className="text-secondary italic font-light">{t.calculator.titleItalic}</span>
                </h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  {t.calculator.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    t.calculator.bullet1,
                    t.calculator.bullet2,
                    t.calculator.bullet3,
                    t.calculator.bullet4
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary font-semibold">
                      <div className="w-5 h-5 rounded-full bg-tertiary-fixed flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-on-tertiary-fixed" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="lg:col-span-7" {...fadeIn}>
                <MortgageCalculator />
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-surface-container-low overflow-hidden">
          <div className="container mx-auto px-8">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div className="lg:w-1/2 relative" {...fadeIn}>
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-tertiary-fixed/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2">
                  <img 
                    className="w-full h-auto object-cover" 
                    alt="Ludmila Alexejenko" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQPEkbTwmiZdxdNRnhr03P-UA1gKYmpVk71tueHIE5DTGBQnm-ZxenypmiZ2S9r5-EvEjS4bwcxn-iV050d32L7xNpDh0RJHVZqqcd4OYJyN-aSolLamJyPTRWpvd4J7gi3C9mwbA645tFuvGsVMEtOtEBvLl5tv67GKm9J_CLhL3Sgajea5aLSPD9UwnnuMrOQg2XNGLvGM3xebn6gWOE5snCN9e_iDlqIF9DzFJl6RXJOjxj2bSBP0h8I_e2SxBXUIAZsQsj1TUU"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div className="lg:w-1/2" {...fadeIn}>
                <h2 className="text-sm font-label text-secondary uppercase tracking-[0.3em] mb-4">{t.about.badge}</h2>
                <h3 className="text-4xl font-headline font-extrabold text-primary mb-8 leading-tight">{t.about.title}</h3>
                <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                  <p>
                    {t.about.p1}
                  </p>
                  <p>
                    {t.about.p2}
                  </p>
                </div>
                <div className="mt-10 pt-10 border-t border-outline-variant/30 flex items-center gap-6">
                  <img 
                    className="h-12 w-auto opacity-70" 
                    alt="Signature" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYLNxypEt5GIQ5ZOOYLTuWdIjZMaZDvrlyTrx3wCnRrTq2Rv-dAM64zyN2sHScoMMN_Z4ehU0EY_vJIzEezAr3VS3s1kVyVfkt2QdIH6vXji0H3i5xWIk5SVS1Pzf69YqQfa5PR7RFuoXv4tK5AmdofSHm8QpRgXmXq49jOugN0szgB-l31pKZHimuyWEPlQsqIJdPUI4jT2pjNRQ-US17R3-NDe8aqPC1YkyJ5RiLETmfREcrgLsP8jdnVUEqRJnXVrpxF8q1TMvB"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="text-primary font-bold">{t.about.title}</p>
                    <p className="text-sm text-on-surface-variant">{t.about.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-8">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">{t.testimonials.title}</h2>
              <p className="text-on-surface-variant">{t.testimonials.p}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div className="bg-secondary-container p-10 rounded-2xl relative" {...fadeIn}>
                <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6" />
                <p className="text-xl text-primary font-medium mb-8 italic leading-relaxed">
                  {language === 'cs' ? '"Ludmila nám pomohla s prodejem bytu a následnou hypotékou na dům. Celý proces byl hladký a bez stresu. Vysoce profesionální."' : language === 'ru' ? '"Людмила помогла нам с продажей квартиры и последующей ипотекой на дом. Весь процесс прошел гладко и без стресса. Высокопрофессионально."' : '"Ludmila helped us with the sale of our apartment and subsequent mortgage for a house. The whole process was smooth and stress-free. Highly professional."'}
                </p>
                <div className="font-bold text-primary uppercase tracking-widest text-xs">{language === 'cs' ? 'Petr & Jana Novákovi' : language === 'ru' ? 'Петр и Яна Новаковы' : 'Petr & Jana Novakov'}</div>
              </motion.div>
              <motion.div className="bg-surface-container-high p-10 rounded-2xl relative" {...fadeIn}>
                <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6" />
                <p className="text-xl text-primary font-medium mb-8 italic leading-relaxed">
                  {language === 'cs' ? '"Neuvěřitelný cit pro detail. Homestaging, který Ludmila připravila, zvýšil cenu našeho domu o 15 % oproti původnímu odhadu."' : language === 'ru' ? '"Невероятное внимание к деталям. Хоумстейджинг, подготовленный Людмилой, увеличил цену нашего дома на 15% по сравнению с первоначальной оценкой."' : '"Incredible attention to detail. The homestaging Ludmila prepared increased the price of our house by 15% compared to the original estimate."'}
                </p>
                <div className="font-bold text-primary uppercase tracking-widest text-xs">{language === 'cs' ? 'Marek Svoboda' : language === 'ru' ? 'Марек Свобода' : 'Marek Svoboda'}</div>
              </motion.div>
              <motion.div className="bg-secondary-container p-10 rounded-2xl relative" {...fadeIn}>
                <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6" />
                <p className="text-xl text-primary font-medium mb-8 italic leading-relaxed">
                  {language === 'cs' ? '"Jako investor oceňuji hlavně Ludmilin přehled v hypotečních produktech. Ušetřila mi miliony na úrocích během let naší spolupráce."' : language === 'ru' ? '"Как инвестор, я особенно ценю опыт Людмилы в ипотечных продуктах. Она сэкономила мне миллионы на процентах за годы нашего сотрудничества."' : '"As an investor, I especially appreciate Ludmila\'s overview of mortgage products. She saved me millions in interest over the years of our cooperation."'}
                </p>
                <div className="font-bold text-primary uppercase tracking-widest text-xs">{language === 'cs' ? 'Elena Dvořáková' : language === 'ru' ? 'Елена Дворжакова' : 'Elena Dvorakova'}</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section id="insights" className="py-24 bg-surface px-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-headline font-extrabold text-primary mb-2">{t.insights.title}</h2>
                <p className="text-on-surface-variant">{t.insights.p}</p>
              </div>
              <a className="hidden md:flex items-center gap-2 font-bold text-primary border-b-2 border-tertiary-fixed pb-1 hover:border-primary transition-all" href="#">
                {t.insights.all} <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Article 1 */}
              <motion.div className="group cursor-pointer" {...fadeIn}>
                <div className="mb-6 overflow-hidden rounded-xl aspect-video">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Luxury penthouse" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvWsK95_Lkqag21eb1BCBXfj1CnR1x0WJthmt6Gz-K6obK27RseZkZbUcLnZaw9XQlQjmv2uDJGiRH-bXc7-b8gF7qIwwmvxQoYQz0Gfo_uJn1nXO_o90VLqwx9AEQDLGpLQ9gXy5uMlaRSnmDyw2qvojfhcE-NrY65JSvEWFdJAu3Prwltcw0djqv_CGceaZXBhV9hbEjFpqlu6cbUnxWA_V9515UTRdtDFm0vaQ-CmX7Wo6z1RoiNw-UUlpYdfBALvZp7yTHhKE"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs font-bold text-secondary uppercase mb-3 tracking-widest">{language === 'cs' ? 'Trh Realit' : language === 'ru' ? 'Рынок недвижимости' : 'Real Estate Market'}</div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {language === 'cs' ? 'Predikce realitního trhu pro rok 2024: Co očekávat?' : language === 'ru' ? 'Прогноз рынка недвижимости на 2024 год: чего ожидать?' : 'Real Estate Market Prediction for 2024: What to Expect?'}
                </h3>
                <p className="text-on-surface-variant line-clamp-2">
                  {language === 'cs' ? 'Analýza aktuálních trendů, vývoje cen nemovitostí a vlivu úrokových sazeb na poptávku.' : language === 'ru' ? 'Анализ текущих тенденций, изменения цен на недвижимость и влияния процентных ставок на спрос.' : 'Analysis of current trends, property price developments, and the impact of interest rates on demand.'}
                </p>
              </motion.div>
              {/* Article 2 */}
              <motion.div className="group cursor-pointer" {...fadeIn}>
                <div className="mb-6 overflow-hidden rounded-xl aspect-video">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Financial documents" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmtJGBPFdYjhC9Y8VN38uKJqiHC3Wh20C55v8wuu1RAoduYv51FG14AFtAAjRzoOBZy0i0EBjzk_c5gPksdLupQMe0IghixbSVsCONYv77gVs6kcrCedHrKOX8trqC-0I6S6LdiU06PCEnGzvgwjzFlA50ZUhydJUlcA6UG4xIoJ6D5tOPHydrIlGw_ADKFmcZkgWEkPpmEnaNYK9kgEVrGZD38c2Ls9KOc6y4hy2BMMS-4irlt5o5In0ru6knMM4HH7LFhrEs6Y9E"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs font-bold text-secondary uppercase mb-3 tracking-widest">{language === 'cs' ? 'Finance' : language === 'ru' ? 'Финансы' : 'Finance'}</div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {language === 'cs' ? 'Jak na refinancování hypotéky v době klesajících sazeb' : language === 'ru' ? 'Как рефинансировать ипотеку в период снижения ставок' : 'How to Refinance a Mortgage in a Time of Falling Rates'}
                </h3>
                <p className="text-on-surface-variant line-clamp-2">
                  {language === 'cs' ? 'Kdy se vyplatí přejít k jiné bance a na co si dát pozor při vyjednávání nových podmínek.' : language === 'ru' ? 'Когда стоит перейти в другой банк и на что обратить внимание при согласовании новых условий.' : 'When it pays to switch to another bank and what to watch out for when negotiating new terms.'}
                </p>
              </motion.div>
              {/* Article 3 */}
              <motion.div className="group cursor-pointer" {...fadeIn}>
                <div className="mb-6 overflow-hidden rounded-xl aspect-video">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Staged kitchen" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnspUoeBtJVclzpGOE3uu6euzvG9rkg8bBMplPGFXvMY5ifvfqFjPJZY5sTAiIXk_tcXYh3ysStVs9fjdKZYury96s7g4A8vbeWbTqg8safISJCCHjDkAsf2yhplOJjx4_hAUWkyLr2sPrv_0LioEwunBRw9lw8nFLuBSVYcN20B48-YddTrdr0Lzguy7wmoVGcTCmq0gGeYOT7n5IKHuwQBSVKZKJOoEL8k1Ma2bE_a4nP8cK6rdadBYM0Slp966mEYvrkjfm3b9A"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs font-bold text-secondary uppercase mb-3 tracking-widest">{language === 'cs' ? 'Interiér' : language === 'ru' ? 'Интерьер' : 'Interior'}</div>
                <h3 className="text-xl font-headline font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {language === 'cs' ? 'Homestaging: Malé změny, které zvýší cenu nemovitosti o statisíce' : language === 'ru' ? 'Хоумстейджинг: небольшие изменения, повышающие стоимость недвижимости' : 'Homestaging: Small Changes That Increase Property Price by Hundreds of Thousands'}
                </h3>
                <p className="text-on-surface-variant line-clamp-2">
                  {language === 'cs' ? 'Praktické tipy, jak připravit byt k prodeji tak, aby oslovil co nejširší okruh zájemců.' : language === 'ru' ? 'Практические советы, как подготовить квартиру к продаже так, чтобы она привлекла максимально широкий круг покупателей.' : 'Practical tips on how to prepare an apartment for sale to appeal to the widest possible range of buyers.'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 px-8">
          <motion.div 
            className="container mx-auto bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
            {...fadeIn}
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary-container/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-primary mb-6">{t.cta.title}</h2>
              <p className="text-xl text-on-primary-container mb-12">
                {t.cta.p}
              </p>
              <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                <input className="flex-grow bg-surface-container-lowest border-none px-6 py-4 rounded-xl focus:ring-2 focus:ring-tertiary-fixed text-primary" placeholder={t.cta.email} type="email"/>
                <button className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-4 rounded-xl font-headline font-extrabold hover:bg-white transition-colors duration-300">
                  {t.cta.button}
                </button>
              </form>
              <p className="text-on-primary-container/60 text-sm mt-6">{t.cta.privacy}</p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-950 w-full border-t-0">
        <div className="max-w-7xl mx-auto px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 font-headline text-sm leading-relaxed">
          <div className="col-span-1 md:col-span-2">
            <div className="text-lg font-black text-stone-900 dark:text-stone-100 mb-6">L. ALEXEJENKO</div>
            <p className="text-stone-600 dark:text-stone-400 max-w-sm mb-8">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300" href="https://instagram.com" target="_blank" rel="noreferrer">
                <Instagram className="w-4 h-4" />
              </a>
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300" href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="w-4 h-4" />
              </a>
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300" href="https://threads.net" target="_blank" rel="noreferrer">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300" href="#">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 dark:text-stone-50 mb-6 uppercase tracking-widest text-xs">{t.footer.nav}</h4>
            <ul className="space-y-4">
              <li><a className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 transition-all" href="#">{t.nav.portfolio}</a></li>
              <li><a className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 transition-all" href="#mortgages">{t.nav.mortgages}</a></li>
              <li><a className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 transition-all" href="#insights">{t.nav.insights}</a></li>
              <li><a className="text-stone-600 dark:text-stone-400 hover:underline decoration-stone-400 transition-all" href="#about">{t.footer.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-stone-900 dark:text-stone-50 mb-6 uppercase tracking-widest text-xs">{t.footer.contact}</h4>
            <ul className="space-y-4 text-stone-600 dark:text-stone-400">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +420 777 123 456</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> ludmila@alexejenko.cz</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> U nádraží 827/4, 415 01 Teplice</li>
              <li className="flex items-center gap-2 opacity-60"><Globe className="w-4 h-4" /> {language === 'ru' ? 'Прага, Чешская республика' : language === 'en' ? 'Prague, Czech Republic' : 'Praha, Česká republika'}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 py-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-stone-600 dark:text-stone-400 text-xs">
            {t.footer.rights}
          </div>

          <div className="flex gap-8 text-xs font-bold text-stone-900 dark:text-stone-50">
            <a className="hover:underline decoration-stone-400 transition-all" href="#">Privacy Policy</a>
            <a className="hover:underline decoration-stone-400 transition-all" href="#">Terms of Service</a>
            <a className="hover:underline decoration-stone-400 transition-all" href="#">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
