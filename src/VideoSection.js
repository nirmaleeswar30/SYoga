export function renderVideoSection() {
    return `
      <div class="space-y-6">
        <div class="aspect-video">
          <iframe 
            class="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/watch?v=l8gfotcxvYA" 
            title="Sahaja Yoga Meditation Kundalini Awakening"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        
        <p class="text-sm text-gray-600">
          Note: The above video is just an animated representation of the awakening of Kundalini energy, to experience. Please, Click the below to experience your Self Realisation.
        </p>
  
        <div class="text-center">
          <a href="#" class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-300 transform hover:scale-105">
            CLICK HERE TO EXPERIENCE YOUR SELF REALISATION
          </a>
        </div>
      </div>
    `;
  }