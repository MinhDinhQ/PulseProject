import { motion } from "motion/react";

export function Benefits() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hvorfor virksomheder vælger Ai Pulse
            </h2>
            <p className="text-xl text-zinc-400 mb-12">
              En løsning der leverer resultater fra dag ét
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Reducér kundeservice-omkostninger",
                  description: "Automatiser op til 80% af rutine-henvendelser og frigør dit team til mere komplekse opgaver.",
                },
                {
                  title: "Øg salget med varmere leads",
                  description: "AI'en kvalificerer og nurture leads, så de er klar til køb når dit salgsteam overtager.",
                },
                {
                  title: "Aldrig gå glip af en mulighed",
                  description: "Med 24/7 tilgængelighed sikrer du at hver kunde får hjælp – uanset tidspunkt.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-l-2 border-white/20 pl-6"
                >
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: "80%", label: "Færre support tickets" },
              { value: "3x", label: "Flere bookede møder" },
              { value: "24/7", label: "Altid tilgængelig" },
              { value: "< 5 min", label: "Til at komme i gang" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}