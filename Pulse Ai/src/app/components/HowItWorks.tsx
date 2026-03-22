import { motion } from "motion/react";

const steps = [
  {
    step: "01",
    title: "Installer på din hjemmeside",
    description: "Tilføj vores simple code snippet til din hjemmeside – det tager kun 2 minutter.",
  },
  {
    step: "02",
    title: "Træn din AI-assistent",
    description: "Upload din virksomheds information, produkter og FAQs. AI'en lærer din tone og stil.",
  },
  {
    step: "03",
    title: "Tilpas og optimer",
    description: "Justér samtaleflow, integrer med din kalender og CRM, og definer mål.",
  },
  {
    step: "04",
    title: "Gå live og mærk forskellen",
    description: "Din AI-assistent er klar til at servicere kunder og generere leads 24/7.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Sådan kommer du i gang
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Fire simple trin til bedre kundeservice
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-black/10 -z-10" />
              )}
              
              <div className="relative">
                <div className="text-6xl font-bold text-black/5 mb-4">
                  {step.step}
                </div>
                <div className="absolute top-0 left-0">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 mt-8">
                  {step.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
