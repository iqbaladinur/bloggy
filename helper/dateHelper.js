const formatLocaleDateString = (date = null) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date ? new Date(date).toLocaleDateString('en-US', options) : new Date().toLocaleDateString('id-ID', options);
}
export {
  formatLocaleDateString
}
