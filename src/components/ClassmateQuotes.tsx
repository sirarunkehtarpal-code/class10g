import { Quote, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ClassmateQuote } from '../types';
import { playSoftTink } from '../utils/audio';

interface ClassmateQuotesProps {
  quotes: ClassmateQuote[];
  onLikeQuote: (id: string) => void;
}

export default function ClassmateQuotes({
  quotes,
  onLikeQuote,
}: ClassmateQuotesProps) {
  return (
    <section id="classmates" className="py-14 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Classmate Voices</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950 tracking-tight">
            Two Lines From Our Hearts
          </h2>
          <p className="mt-3 text-amber-900/80 text-sm sm:text-lg px-2">
            Short, sweet, and sincere words from your students that reflect the deep impact you have on our lives.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {quotes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`relative p-4 sm:p-6 rounded-2xl bg-[#FCFAF7] border border-amber-200/80 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between group ${
                item.message && item.message.length > 250 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <Quote className="w-7 sm:w-8 h-7 sm:h-8 text-amber-300/80 group-hover:text-amber-400 transition-colors" />
                {item.tags && (
                  <span className="text-[10px] sm:text-[11px] font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-100/70 border border-amber-200 text-amber-900 text-right">
                    {item.tags}
                  </span>
                )}
              </div>

              {/* Message or Lines */}
              <div className="mb-4 sm:mb-6 flex-grow">
                {item.message ? (
                  <div className="p-3 sm:p-3.5 rounded-xl bg-white/80 border border-amber-100">
                    <p className="text-amber-950 text-xs sm:text-[15px] font-medium leading-relaxed italic whitespace-pre-line">
                      "{item.message}"
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5 sm:space-y-3">
                    {item.quoteLines?.map((line, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2 sm:gap-2.5">
                        <span className={`w-5 h-5 rounded-full ${lIdx === 0 ? 'bg-amber-100 text-amber-900 border-amber-200' : 'bg-orange-100 text-orange-900 border-orange-200'} text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border`}>
                          {lIdx + 1}
                        </span>
                        <p className="text-amber-950 text-xs sm:text-[15px] font-medium leading-relaxed italic">
                          "{line}"
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Author & Footer */}
              <div className="pt-3 sm:pt-4 border-t border-amber-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center font-bold text-xs sm:text-sm shadow-2xs shrink-0 ${item.avatarColor}`}>
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-serif-display font-bold text-xs sm:text-sm text-amber-950">
                      {item.author}
                    </h4>
                    {item.roleOrNickname && (
                      <span className="text-[10px] sm:text-[11px] font-medium text-amber-700/80 block">
                        {item.roleOrNickname}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    playSoftTink();
                    onLikeQuote(item.id);
                  }}
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white hover:bg-rose-50 text-amber-900 hover:text-rose-700 text-xs font-semibold transition-colors border border-amber-200 active:scale-95 shrink-0"
                  title="Applaud this message"
                >
                  <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                  <span>{item.likes}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
