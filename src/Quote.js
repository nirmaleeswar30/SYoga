export function renderQuote(text, author, date, location) {
    return `
      <blockquote class="text-gray-700 italic">
        <p class="mb-4">"${text}"</p>
        <footer class="text-sm">- ${author}, ${date}, ${location}</footer>
      </blockquote>
    `;
  }