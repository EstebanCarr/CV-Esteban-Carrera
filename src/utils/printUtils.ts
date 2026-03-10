export const printCV = () => {
  const originalTitle = document.title
  document.title = 'CV_Esteban_Carrera_Salazar'
  
  window.print()
  
  setTimeout(() => {
    document.title = originalTitle
  }, 1000)
}
