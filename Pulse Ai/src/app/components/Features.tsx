import { motion } from "motion/react";
import { MessageCircle, TrendingUp, Calendar, Zap, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Intelligent samtaleflow",
    description:
      "Avanceret AI forstår kundens behov og leverer præcise, kontekstuelle svar i naturligt sprog.",
  },
  {
    icon: TrendingUp,
    title: "Lead-kvalificering",
    description:
      "Identificer og prioriter de mest lovende leads automatisk, så dit team fokuserer på de rigtige opgaver.",
  },
  {
    icon: Calendar,
    title: "Automatisk booking",
    description:
      "Integrerer med din kalender og booker møder direkte – uden manuel indgriben.",
  },
  {
    icon: Zap,
    title: "Lynhurtig integration",
    description:
      "Implementer på minutter med vores plug-and-play løsning. Ingen teknisk ekspertise påkrævet.",
  },
  {
    icon: BarChart3,
    title: "Dyb analyse",
    description:
      "Få indsigt i kundeadfærd, populære spørgsmål og konverteringsdata i realtid.",
  },
  {
    icon: Shield,
    title: "Sikkerhed & GDPR",
    description:
      "Fuld GDPR-compliance og enterprise-grade sikkerhed. Dine data er beskyttet.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Alt hvad du behøver i én løsning
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Kraftfulde features der hjælper din virksomhed med at vokse og servicere kunder bedre
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-black/10 hover:border-black/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}