import polkadot_hackathon from '../assets/polkadot_hackathon_ccs.jpg'
const Achievements = () => {
  return (
      <section id="achievements" className="section-container border-t border-border">
        <span className="section-label">04. Key Achievement</span>
        
        <div className="border border-border bg-card p-6 rounded-lg flex flex-col md:flex-row gap-8 items-center transition-all duration-300 hover:-translate-y-2  hover:border-primary/50">
          <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-md overflow-hidden border border-border   transition-all duration-500">
            <img 
              src={polkadot_hackathon}
              alt="Polkadot Hackathon Cebu Champion Trophy Presentation" 
              className="w-full h-full object-cover"

            />
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="inline-block px-3 py-1 bg-primary text-bg text-xs font-bold rounded-md">
                🏆 Champion
            </div>
            <h4 className="text-2xl font-bold text-primary">Champion – Polkadot Solidity Hackathon Cebu Edition</h4>
            <p className="text-secondary leading-relaxed">
              Led the development of HexaWork, an AI-powered freelance escrow protocol on Polkadot EVM. Recognized for smart contract security, AI integration, and scalable system design. Our team was awarded champion in the global track category among numerous competing student and professional teams.
            </p>
          </div>
        </div>
      </section>
  );
};

export default Achievements;