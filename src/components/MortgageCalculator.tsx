import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator, Info } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function MortgageCalculator() {
  const { t } = useLanguage();
  const [loanAmount, setLoanAmount] = useState<number>(5000000);
  const [interestRate, setInterestRate] = useState<number>(5.49);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [downPayment, setDownPayment] = useState<number>(1000000);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  useEffect(() => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  }, [loanAmount, interestRate, loanTerm, downPayment]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('cs-CZ', {
      style: 'currency',
      currency: 'CZK',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-outline-variant/20">
      <div className="bg-primary p-8 text-white">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="w-6 h-6 text-tertiary-fixed" />
          <h3 className="text-2xl font-headline font-bold">{t.calculator.heading}</h3>
        </div>
        <p className="text-on-primary-container text-sm opacity-80">
          {t.calculator.subheading}
        </p>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          {/* Loan Amount */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">{t.calculator.price}</label>
              <span className="text-lg font-headline font-bold text-primary">{formatCurrency(loanAmount)}</span>
            </div>
            <input
              type="range"
              min="1000000"
              max="50000000"
              step="100000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Down Payment */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">{t.calculator.downPayment}</label>
              <span className="text-lg font-headline font-bold text-primary">{formatCurrency(downPayment)}</span>
            </div>
            <input
              type="range"
              min="0"
              max={loanAmount * 0.9}
              step="50000"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Interest Rate */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">{t.calculator.interest}</label>
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 font-headline font-bold text-primary focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            {/* Loan Term */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-primary uppercase tracking-wider">{t.calculator.term}</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 font-headline font-bold text-primary focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10">
          <div className="text-center space-y-2 mb-8">
            <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">{t.calculator.monthly}</p>
            <motion.div 
              key={monthlyPayment}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-headline font-black text-primary"
            >
              {formatCurrency(monthlyPayment)}
            </motion.div>
          </div>

          <div className="w-full space-y-4">
            <div className="flex justify-between text-sm py-2 border-b border-outline-variant/20">
              <span className="text-on-surface-variant">{t.calculator.loanAmount}</span>
              <span className="font-bold text-primary">{formatCurrency(loanAmount - downPayment)}</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-outline-variant/20">
              <span className="text-on-surface-variant">{t.calculator.ltv}</span>
              <span className="font-bold text-primary">{Math.round(((loanAmount - downPayment) / loanAmount) * 100)}%</span>
            </div>
          </div>

          <button className="w-full mt-8 bg-primary text-white py-4 rounded-xl font-headline font-bold hover:bg-primary/90 transition-colors shadow-lg">
            {t.calculator.cta}
          </button>

          <div className="mt-6 flex gap-2 items-start opacity-60">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p className="text-[10px] leading-tight">
              {t.calculator.info}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
