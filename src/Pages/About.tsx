const About = () => {
  return (
    <section className="bg-yellow-50 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black mb-8 hover:text-orange-600 transition-colors duration-300">
          About One Piece
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Welcome to the world of Monkey D. Luffy, the fearless captain of the Straw Hat Pirates! 
          Luffy's dream is simple yet grand: to become the King of the Pirates by finding the legendary 
          One Piece treasure. Known for his unyielding spirit, goofy charm, and indomitable will, Luffy 
          inspires everyone around him to chase their dreams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-4 hover:text-orange-600 transition-colors duration-300">
              Fearless Adventure
            </h3>
            <p className="text-gray-600">
              Luffy's journey across the Grand Line is filled with thrilling adventures and formidable foes. 
              He faces the dangers of the seas with unmatched courage, gathering a diverse crew of 
              talented individuals who share his dream.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-4 hover:text-orange-600 transition-colors duration-300">
              Incredible Powers
            </h3>
            <p className="text-gray-600">
              After consuming the Gomu Gomu no Mi, Luffy gained the ability to stretch his body like rubber. 
              This unique power, combined with his creative combat techniques, makes him a formidable 
              opponent in battle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-4 hover:text-orange-600 transition-colors duration-300">
              Loyal Crew
            </h3>
            <p className="text-gray-600">
              Luffy's loyalty to his friends and crew is unwavering. He values his comrades above all, 
              often putting himself in danger to protect them. The Straw Hat crew, each with their unique 
              skills and dreams, forms a bond that transcends the seas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-black mb-4 hover:text-orange-600 transition-colors duration-300">
              Unyielding Spirit
            </h3>
            <p className="text-gray-600">
              Luffy's determination and optimism are contagious. No matter how tough the challenges he faces, 
              he never gives up and always encourages others to pursue their dreams. His signature phrase, 
              "I'm gonna be King of the Pirates!" echoes his unwavering resolve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
