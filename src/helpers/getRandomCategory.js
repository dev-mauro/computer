const categories = ['periferico', 'equipo', 'hardware']

export const getRandomCategory = () => {
  return categories[Math.floor(Math.random()*categories.length)];
}

